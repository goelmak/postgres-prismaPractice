"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dbConfiq_1 = require("./dbConfiq");
const create_table_1 = require("./create-table");
const search_table_1 = require("./search-table");
const practicePostgres = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = new pg_1.Client(dbConfiq_1.dbConfig);
        yield client.connect();
        // await createTable(client);
        // await populateTable(client);
        yield (0, create_table_1.createPostTableIndex)(client);
        const startTime = Date.now();
        yield (0, search_table_1.search)(client, 99999);
        const timeTaken = Date.now() - startTime;
        console.log("timeTaken", timeTaken);
    }
    catch (err) {
        console.error("error in connecting to db", err.message);
    }
});
practicePostgres();
