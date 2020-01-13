import { PetService } from './pet.service';
import { Resolver, Query, ResolveProperty, Parent } from '@nestjs/graphql';
import { PetEntity } from './pet.entity';

@Resolver('Pet')
export class PetResolver {
    constructor(
        private readonly petService: PetService,
    ) { }

    @Query(returns => [PetEntity])
    async getPets() {
        return await this.petService.list();
    }
}
