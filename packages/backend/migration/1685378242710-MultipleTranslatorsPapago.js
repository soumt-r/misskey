export class MultipleTranslatorsPapago1685378242710 {
    name = 'MultipleTranslatorsPapago1685378242710'

    async up(queryRunner) {
			await queryRunner.query(`ALTER TABLE "meta" ADD "naverClientId" character varying(1024)`);
			await queryRunner.query(`ALTER TABLE "meta" ADD "naverClientSecret" character varying(1024)`);
    }

    async down(queryRunner) {
			await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "naverClientId"`);
			await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "naverClientSecret"`);
    }
}
