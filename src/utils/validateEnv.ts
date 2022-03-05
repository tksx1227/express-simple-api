import { cleanEnv, str, port } from "envalid"

export const validateEnv = (): void => {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ["development", "production"],
        }),
        DB_PASSWORD: str(),
        DB_PATH: str(),
        DB_USER: str(),
        PORT: port({ default: 3000 }),
    })
}

