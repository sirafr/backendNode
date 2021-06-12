module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'Iv82uWbQXw',
        password: process.env.MYSQL_PASS || 'o4hhp4VfEA',
        database: process.env.MYSQL_DB || 'Iv82uWbQXw',
    },

    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-10892.c15.us-east-1-4.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '10892',
        password: process.env.REDIS_PASS || '4TFZfB9kn1AN8YddVFWH7GAqWHAzvwxa'
    }

}
