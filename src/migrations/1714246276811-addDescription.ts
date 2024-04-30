import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDescription1714246276811 implements MigrationInterface {
  name = 'AddDescription1714246276811';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "project" ADD "description" character varying `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "description"`);
  }
}
