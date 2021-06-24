import express, { request, response } from "express";

//yarn add @types/express
const app = express()

/*
   GET    => Busca uma informacao
   POST   => Inserir (criar) uma informacao
   PUT    => Alterar uma informacao
   DELETE => Remover um dado
   PATCH  => Alterar uma informacao especifica
*/

app.get("/test", (request, response) => {
   // Request => informcao Entrando
   // Response => informacao saindo
   return response.send("Ola nlw")
})

app.post("/test-post", (request, response) => {
   return response.send("Ola nlw metodo POST")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))