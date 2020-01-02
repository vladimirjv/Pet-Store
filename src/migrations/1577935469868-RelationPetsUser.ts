import {MigrationInterface, QueryRunner} from 'typeorm';

export class RelationPetsUser1577935469868 implements MigrationInterface {
    name = 'RelationPetsUser1577935469868';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "pets" ADD "userId" uuid`, undefined);
        await queryRunner.query(`
            ALTER TABLE "pets"
                ADD CONSTRAINT "FK_a9f39dd54113410cdd3a04e80eb"
                FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_a9f39dd54113410cdd3a04e80eb"`, undefined);
        await queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "userId"`, undefined);
    }

}
