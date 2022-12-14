import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBooks1671037465387 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "books",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          { name: "name", type: "varchar" },
          { name: "author", type: "varchar" },
          { name: "cover", type: "varchar" },
          { name: "edition", type: "int" },
          { name: "language", type: "varchar" },
          { name: "pages", type: "int" },
          { name: "publishing_company", type: "varchar" },
          { name: "genre", type: "varchar" },
          { name: "sub_genre", type: "varchar" },
          { name: "price", type: "decimal", precision: 10, scale: 2 },
          { name: "quantity", type: "int" },
          { name: "release_date", type: "timestamp" },
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("books");
  }
}
