import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
// import { RegisterUserDto } from './dto/RegisterUser.dto';
import { UserRegisterDto } from '../auth/dto/UserRegisterDto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { UserDto } from './dto/User.dto';

@Injectable()
export class UserService {
    constructor(public readonly userRepository: UserRepository) {}

    list() {
        return this.userRepository.find();
    }

    createUser(registerUserDto: UserRegisterDto): Promise<UserEntity> {
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

    async updateUser(id: string, user: UpdateUserDto): Promise<UserDto> {
        await this.userRepository.update(id, user);
        const userUpdated = await this.userRepository.findOne(id);
        return new UserDto(userUpdated);
    }

}
