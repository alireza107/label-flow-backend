import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRoles1714463167768 implements MigrationInterface {
  name = 'CreateRoles1714463167768';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO role (name) VALUES ('admin'), ('user');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "description"`);
  }
}
