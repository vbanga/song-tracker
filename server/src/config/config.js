module.exports = {
  port: process.env.SERVER_PORT || 8080,
  db: {
    database: process.env.DB_NAME || 'songtracker',
    user: process.env.DB_USER_NAME || 'songtracker',
    password: process.env.DB_PASSWORD || 'songtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './songtacker.sqlite'
    }
  }
}
