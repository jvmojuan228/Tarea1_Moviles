import { createPool } from "mysql2/promise";

const pool = createPool({
    "database": "pedidos",
        "user": "root",
        "host": "localhost",
        "password": "password",
});

export {pool};