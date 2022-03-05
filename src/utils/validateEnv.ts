import { cleanEnv, str, port } from "envalid"

export const validateEnv = (): void => {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ["development", "production"],
        }),
        MYSQL_PASSWORD: str(),
        MYSQL_PATH: str(),
        MYSQL_USER: str(),
        PORT: port({ default: 3000 }),
    })
}

