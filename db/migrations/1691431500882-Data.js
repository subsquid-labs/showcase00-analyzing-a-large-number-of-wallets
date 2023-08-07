module.exports = class Data1691431500882 {
    name = 'Data1691431500882'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "block" integer NOT NULL, "from" text NOT NULL, "to" text, "txn_hash" text NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5be3faa401323efbd75cacdf50" ON "transaction" ("block") `)
        await db.query(`CREATE INDEX "IDX_290df3897fac99713afb5f3d7a" ON "transaction" ("from") `)
        await db.query(`CREATE INDEX "IDX_1713783ebe978fa2ae9654e4bb" ON "transaction" ("to") `)
        await db.query(`CREATE INDEX "IDX_fb3cebd05e916e82606610d588" ON "transaction" ("txn_hash") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_5be3faa401323efbd75cacdf50"`)
        await db.query(`DROP INDEX "public"."IDX_290df3897fac99713afb5f3d7a"`)
        await db.query(`DROP INDEX "public"."IDX_1713783ebe978fa2ae9654e4bb"`)
        await db.query(`DROP INDEX "public"."IDX_fb3cebd05e916e82606610d588"`)
    }
}
