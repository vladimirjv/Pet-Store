import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreatePetEntity1577934974168 implements MigrationInterface {
    name = 'CreatePetEntity1577934974168';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        CREATE TABLE "pets"
        (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "created_at" TIMESTAMP NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
            "name" character varying NOT NULL,
            "age" integer NOT NULL,
            CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id")
        )
        `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "pets"`, undefined);
    }

}
