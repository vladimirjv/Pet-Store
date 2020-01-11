import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMedEntity1578767008251 implements MigrationInterface {
    name = 'CreateMedEntity1578767008251';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TYPE "meds_measureunit_enum" AS ENUM(
                'GR', 'MGR', 'KG', 'ML', 'CL', 'LTR', 'UNIT', 'TABLE_SPOON'
                )`, undefined);
        await queryRunner.query(`
            CREATE TYPE "meds_containertype_enum" AS ENUM(
                'BOTTLE', 'BOX', 'VACCINE', 'DROPPER', 'VIAL', 'SPRAY'
                )`, undefined);
        await queryRunner.query(`CREATE TYPE "meds_pharmaceuticalformtype_enum" AS ENUM(
            'SOLID', 'SEMI_SOLID', 'LIQUID', 'GASEOUS'
            )`, undefined);
        await queryRunner.query(`
            CREATE TYPE "meds_administrationroute_enum" AS ENUM
                (
                    'ORAL',
                    'INTRAMUSCULAR',
                    'INTRAVENOUS',
                    'SUBCUTANEOUS',
                    'INHALATION',
                    'TRANSDERMAL',
                    'NASAL','OPHTHALMIC',
                    'OPTICS',
                    'TOPICAL',
                    'RECTAL',
                    'VAGINAL'
                )`, undefined);
        await queryRunner.query(`
            CREATE TABLE "meds"
            (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "medName" character varying(250) NOT NULL,
                "commercialName" character varying(250) NOT NULL,
                "description" text NOT NULL,
                "measure" numeric(10,2) NOT NULL DEFAULT 0,
                "measureUnit" "meds_measureunit_enum" NOT NULL,
                "containerType" "meds_containertype_enum" NOT NULL,
                "warnings" text NOT NULL DEFAULT '',
                "sideEffects" text NOT NULL DEFAULT '',
                "classification" character varying NOT NULL DEFAULT '',
                "pharmaceuticalFormType" "meds_pharmaceuticalformtype_enum" NOT NULL,
                "administrationRoute" "meds_administrationroute_enum" NOT NULL,
                "pharmaceuticalForm" character varying(150) NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_7924c2c581bc5a988aa38966632" PRIMARY KEY ("id")
            )
            `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "meds"`, undefined);
        await queryRunner.query(`DROP TYPE "meds_administrationroute_enum"`, undefined);
        await queryRunner.query(`DROP TYPE "meds_pharmaceuticalformtype_enum"`, undefined);
        await queryRunner.query(`DROP TYPE "meds_containertype_enum"`, undefined);
        await queryRunner.query(`DROP TYPE "meds_measureunit_enum"`, undefined);
    }

}
