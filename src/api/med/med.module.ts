import { Module } from '@nestjs/common';
import { MedService } from './med.service';

@Module({
  providers: [MedService]
})
export class MedModule {}
