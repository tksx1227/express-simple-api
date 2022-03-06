import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { Connection } from "typeorm"
import compression from "compression"
import express, { Application } from "express"

import ErrorMiddleware from "@/middleware/error.middleware"
import Controller from "@/utils/interfaces/controller.interface"

class App {
    public connection: Connection
    public express: Application
    public port: number

    constructor(connection: Connection, controllers: Controller[], port: number) {
        this.connection = connection
        this.express = express()
        this.port = port

        this.initializeMiddleware()
        this.initializeControllers(controllers)
        this.initializeErrorHandling()
    }

    private initializeMiddleware(): void {
        this.express.use(helmet())
        this.express.use(cors())
        this.express.use(morgan("dev"))
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: false }))
        this.express.use(compression())
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) => {
            this.express.use("/api", controller.router)
        })
    }

    private initializeErrorHandling(): void {
        this.express.use(ErrorMiddleware)
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`)
        })
    }
}

export default App
