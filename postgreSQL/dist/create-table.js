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
exports.createPostTableIndex = exports.createTable = void 0;
const createUserTable = (client) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query1 = "CREATE TABLE users(id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255))";
        const res = yield client.query(query1);
    }
    catch (err) {
        console.error("error in creating user table", err.message);
    }
});
const createPostTable = (client) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query2 = "CREATE TABLE posts(id SERIAL PRIMARY KEY, post VARCHAR(255), user_id INT REFERENCES users(id))";
        const res = yield client.query(query2);
    }
    catch (err) {
        console.error("error in creating post table", err.message);
    }
});
const createPostTableIndex = (client) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query3 = "CREATE INDEX IF NOT EXISTS idx_user_id ON posts (user_id)";
        yield client.query(query3);
        console.log("Index on user_id created successfully");
    }
    catch (err) {
        console.error("Error in creating index on user_id:", err.message);
    }
});
exports.createPostTableIndex = createPostTableIndex;
const createTable = (client) => __awaiter(void 0, void 0, void 0, function* () {
    yield createUserTable(client);
    yield createPostTable(client);
});
exports.createTable = createTable;
