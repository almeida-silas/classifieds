import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class classified1611712642978 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createTable(new Table({
        name: 'classified',
          columns: [
            {
              name: 'id',
              type: 'integer',
              unsigned: true,
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment'
            },
            {
              name: 'title',
              type: 'varchar',
            },
            {
              name: 'description',
              type: 'varchar'
            },
            {
              name: 'date',
              type: 'timestamptz',
              default: 'now()'
            }
          ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('classified')
    }
}
