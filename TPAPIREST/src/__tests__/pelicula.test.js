module.exports.connecToDB()
const Pelicula = require("../models/Pelicula");
const { connecTestDB } = require("../utils/testsUtils");
const { peliculaMK } = require("./fixtures/peliculasFixture");
const request = require("supertest")(app);

beforeAll(async () => {
    await connecTestDB("peliculas")
})

describe("Creacion de pelicula", () => {
    describe("Con parametros correctos", () => {
        test("Deberia retornar 201", async () => {
            const response =  await request.post("/peliculas").send(peliculaMK)

            const pelicula = await Pelicula.findOne({nombre: response.body.nombre}).lean()

            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty("nombre")
            expect(response.body).toMatchObject(peliculaMK)

        })
    })
})