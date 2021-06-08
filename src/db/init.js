const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE clientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT,
            idade INT
        )`)

        await db.close()
    }
}

initDb.init()