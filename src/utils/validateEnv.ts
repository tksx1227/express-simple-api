import { cleanEnv, str, port } from "envalid"

export const validateEnv = (): void => {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ["development", "production"],
        }),
        NODE_PORT: port({ default: 3000 }),
        MYSQL_USER: str(),
        MYSQL_PASSWORD: str(),
        MYSQL_HOST: str(),
        MYSQL_PORT: port({ default: 3306 }),
        MYSQL_DATABASE: str(),
    })
}

