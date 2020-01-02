import { Entity, Column, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'pets' })
export class PetEntity extends AbstractEntity {
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    age: number;

    @ManyToOne(type => UserEntity, user => user.pets)
    user: UserEntity;
}
