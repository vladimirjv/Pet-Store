import { Injectable } from '@nestjs/common';
import { PetRepository } from './pet.repository';
import { PetEntity } from './pet.entity';
import { CreatePetDto } from './dto/createPet.dto';
import { UserService } from '../user/user.service';
import { PetDto } from './dto/pet.dto';

@Injectable()
export class PetService {
    constructor(
        private readonly petRepository: PetRepository,
        private readonly userService: UserService,
    ) {}

    async list() {
        const pets = await (await this.petRepository.find({relations: ['user']})).map(pet => new PetDto(pet));
        return pets;
    }

    async createPet(createPetDto: CreatePetDto) {
        const { userId, ...pet } = createPetDto;
        const petEntity = await this.petRepository.create(pet);
        const petInstance = await this.petRepository.save(pet);

        if (userId) {
            const user = await this.userService.userRepository.findOne({
                where: {
                    id: userId,
                },
                relations: ['pets'],
            });
            user.pets = [...user.pets, petInstance];
            await this.userService.userRepository.save(user);
        }
        return petInstance;
    }
}
