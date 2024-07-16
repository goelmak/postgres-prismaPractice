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
exports.populateTable = void 0;
const populateUserTable = (client, name, email) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id";
    try {
        const res = yield client.query(query, [name, email]);
        console.log(`populated with id ${res === null || res === void 0 ? void 0 : res.rows[0].id}`);
        return res;
    }
    catch (err) {
        console.error("Error in inserting data in user table with msg", err.message);
    }
});
const populatePostTable = (client, post, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "INSERT INTO posts(post, user_iD) values($1, $2) RETURNING id";
    try {
        const res = yield client.query(query, [post, userId]);
        return res;
    }
    catch (err) {
        console.error("Error in inserting data in post table with msg", err.message);
    }
});
const populateTable = (client) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0, j = 0; i < 120000; i++) {
        const res = yield populateUserTable(client, `user${i}`, `user${i}@gmail.com`);
        const id = res === null || res === void 0 ? void 0 : res.rows[0].id;
        const temp = j + 10;
        for (; j < temp; j++) {
            yield populatePostTable(client, `post${j}`, id);
        }
    }
});
exports.populateTable = populateTable;
