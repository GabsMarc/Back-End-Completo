import { server } from "./server/server";

let PORT = process.env.PORT ?? 3333

server.listen(PORT, () => {
    console.log(`Rodando na porta: ${PORT}`)
}) 