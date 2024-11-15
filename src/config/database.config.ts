import { registerAs } from "@nestjs/config";

export default registerAs('database', () => ({
    hostname: process.env.DB_HOSTNAME || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_DATABASE || 'nestjs-blog',
    synchronize: process.env.DB_SYNCHRONIZE === 'true' || false,
    autoLoadEntities: process.env.DB_AUTO_LOAD_ENTITIES === 'true' || false,
}));