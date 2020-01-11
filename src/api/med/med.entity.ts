// package imports
import { Entity, Column } from 'typeorm';
// mapped routes imports
import { AbstractEntity } from '../../common/abstract.entity';
// relative imports
import { PharmaceuticalFormTypes } from './constants/PharmaceuticalFormTypes';
import { AdministrationRoutes } from './constants/AdministrationRoutes';
import { MeasureUnits } from './constants/MeasureUnits';
import { ContainerTypes } from './constants/ContainerTypes';

@Entity({ name: 'meds' })
export class Med extends AbstractEntity {
    // Description
    @Column({ nullable: false, type: 'varchar', length: 250 })
    medName: string;

    @Column({ nullable: false, type: 'varchar', length: 250 })
    commercialName: string;

    @Column({ type: 'text' })
    description: string;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0.0,
        nullable: false,
    })
    measure: number;

    @Column({ type: 'enum', enum: MeasureUnits, nullable: false })
    measureUnit: MeasureUnits;

    @Column({ type: 'enum', enum: ContainerTypes, nullable: false })
    containerType: ContainerTypes;

    // warnings
    @Column('text', { default: '' })
    warnings: string;

    @Column('text', { default: '' })
    sideEffects: string;

    // Classification
    @Column('varchar', { default: '', nullable: false })
    classification: string;

    @Column({ type: 'enum', enum: PharmaceuticalFormTypes, nullable: false })
    pharmaceuticalFormType: PharmaceuticalFormTypes;

    @Column({ type: 'enum', enum: AdministrationRoutes, nullable: false })
    administrationRoute: AdministrationRoutes;

    @Column({ type: 'varchar', length: 150, nullable: false })
    pharmaceuticalForm: string;
}
