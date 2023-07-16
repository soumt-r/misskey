export class MultipleTranslators1689319804097 {
    name = 'MultipleTranslators1689319804097'

    async up(queryRunner) {
			await queryRunner.query(`ALTER TABLE "meta" ADD "translatorType" character varying(32)`);
				await queryRunner.query('SELECT "deeplAuthKey" FROM "meta" where "deeplAuthKey" is not null')
				.then(deeplAuthKey => {
					if (deeplAuthKey.length > 0) {
						return queryRunner.query('UPDATE "meta" SET "translatorType" = "DeepL"');
					}
				})
    }

    async down(queryRunner) {
			await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "translatorType"`);
    }
}
