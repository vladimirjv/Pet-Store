import { UserDto } from '../../user/dto/User.dto';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { PetEntity } from '../pet.entity';

export class PetDto extends AbstractDto {
    name: string;
    age: number;
    user?: UserDto;
    constructor(petEntity: PetEntity) {
        super(petEntity);
        this.name = petEntity.name;
        this.age = petEntity.age;
        if (petEntity.user) {
            this.user = new UserDto(petEntity.user);
        }
    }
}
