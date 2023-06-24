import knexInstance from 'knex';
import "dotenv/config.js"

const connection = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: { rejectUnauthorized: false }
}

const knex = knexInstance({
    client: 'mysql2',
    connection: connection
});

export default knex;
