import "dotenv/config"
import "module-alias/register"
import { createConnection } from "typeorm"

import App from "./app"
import { validateEnv } from "@/utils/validateEnv"
import { PostController } from "./resources/controller/post.controller"

validateEnv()

createConnection().then(connection => {
    const app = new App(
        connection,
        [
            new PostController(),
        ],
        Number(process.env.NODE_PORT),
    )

    app.listen()
}).catch(error => {
    console.log("Cannot connect database")
    console.log(error.message)
})
