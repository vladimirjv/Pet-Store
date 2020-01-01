import { AbstractDto } from '../../../common/dto/AbstractDto';
import { RoleType } from '../../../common/constants/role-type';
import { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
    firstName: string;
    lastName: string;
    role: RoleType;
    email: string;
    phone: string;
    avatar: string;

    constructor(userEntity: UserEntity) {
        super(userEntity);
        this.firstName = userEntity.firstName;
        this.lastName = userEntity.lastName;
        this.role = userEntity.role;
        this.email = userEntity.email;
        this.phone = userEntity.phone;
        this.avatar = userEntity.avatar;
    }
}
