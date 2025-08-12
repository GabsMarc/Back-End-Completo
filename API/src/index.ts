import { server } from "./server/server";


server.listen({
    port: process.env.PORT ?? 3333
})