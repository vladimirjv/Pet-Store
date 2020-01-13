import { Injectable } from '@nestjs/common';
import { PetRepository } from './pet.repository';
import { PetEntity } from './pet.entity';
import { CreatePetDto } from './dto/createPet.dto';
import { UserService } from '../user/user.service';
import { PetDto } from './dto/pet.dto';
import { NotFoundWithId } from '~/exceptions/NotFoundWithId';
import { UpdatePetDto } from './dto/updatePet.dto';

@Injectable()
export class PetService {
    constructor(
        private readonly petRepository: PetRepository,
        private readonly userService: UserService,
    ) { }

    async list() {
        const pets = await (await this.petRepository.find({ relations: ['user'] })).map(pet => new PetDto(pet));
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

    async getPet(id: string) {
        try {
            const pet = new PetDto((await this.petRepository.findOneOrFail(id, { relations: ['user'] })));
            return pet;
        } catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            throw new NotFoundWithId(id, PetEntity.name);
        }
    }

    async updatePet(id: string, updatePet: UpdatePetDto) {
        try {
            return await this.petRepository.update(id, updatePet);
        } catch (error) {
            throw new NotFoundWithId(id, 'Pet');
        }
    }
}
