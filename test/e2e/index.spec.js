const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");
const { DB_HOST_TEST, PORT = 4000 } = process.env;
describe("api", () => {
  beforeAll(() => {
    mongoose.set("strictQuery", true);
    mongoose
      .connect(DB_HOST_TEST)
      .then(() => {
        app.listen(PORT);
        console.log("Server test runs.");
      })
      .catch((error) => {
        console.log(error.message);
        process.exit(1);
      });
  });
  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });
  describe("/api/boards/", () => {
    it("should returns status 200", async () => {
      const response = await request(app).get("/api/boards/");
      expect(response.statusCode).toBe(200);
    });
  });
  describe("/api/boards/ - post", () => {
    it("", async () => {
      const response = await request(app)
        .post("/api/boards/")
        .send({
          title: "Test1",
          toDo: [
            {
              title: "Add header",
              description: "1",
            },
            {
              title: "Add header",
              description: "2",
            },
          ],
          inProgress: [
            {
              title: "Add header",
              description: "Need good header",
            },
          ],
          done: [
            {
              title: "1",
              description: "Need good sidebar",
            },
            {
              title: "2",
              description: "Need good footer",
            },
          ],
        });
      expect(response.statusCode).toBe(201);
    });
  });
});
