import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { RegisterUserDto } from './dto/RegisterUser.dto';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    list() {
        return this.userRepository.find();
    }

    createUser(registerUserDto: RegisterUserDto): Promise<any> {
        // this.userRepository
        const user = this.userRepository.create(registerUserDto);
        return this.userRepository.save(user);
    }

    async findByUsernameOrEmail(
        options: Partial<{ username: string; email: string }>,
    ): Promise<UserEntity | undefined> {
        const queryBuilder = this.userRepository.createQueryBuilder('user');

        if (options.email) {
            queryBuilder.orWhere('user.email = :email', {
                email: options.email,
            });
        }
        if (options.username) {
            queryBuilder.orWhere('user.username = :username', {
                username: options.username,
            });
        }

        return queryBuilder.getOne();
    }

    async findById(id: any): Promise<UserEntity> {
        return this.userRepository.findOne(id);
    }
}
