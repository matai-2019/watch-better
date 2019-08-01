const path = require('path')

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'dev.sqlite3')
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  },

  production: {
    client: 'postgresql',
    DATABASE_URL: 'postgres://zuoqueoddatkpo:c71635b48af2c98c820f5fe75f705524e9246c39c8d046da6d5a9fb9d68dfc50@ec2-174-129-209-212.compute-1.amazonaws.com:5432/d9lnnge7ckk4f2'
  }
}
