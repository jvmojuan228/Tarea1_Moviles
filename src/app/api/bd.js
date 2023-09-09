import { createPool } from "mysql2/promise";

const pool = createPool({
    "database": "pedidos",
        "user": "root",
        "host": "localhost",
        "password": "n0m3l0s3",
});

export {pool};