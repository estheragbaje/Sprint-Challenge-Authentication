const request = require("supertest");
const authRouter = require("./auth-router");
const db = require("../database/dbConfig");
const userModel = require("../users/user-model");
const server = require("../api/server");

beforeEach(async () => {
  await db("users").truncate();
});

describe("auth router", () => {
  describe("[POST] /register endpoint", () => {
    test("the db env is testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });

    it("responds with json", function(done) {
      request(server)
        .post("/api/auth/register")
        .send({ username: "john", password: "1234" })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});

describe("login router", () => {
  describe("[POST] /login endpoint", () => {
    test("the db env is testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });

    it("responds with json", function(done) {
      request(server)
        .post("/api/auth/login")
        .send({ username: "john", password: "1234" })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});

// describe("testing login", () => {

//     describe("testing login endpoint", () => {
//       test("user can login", async () => {
//         const response = await request(server)
//           .post("/api/auth/register")
//           .send({ username: "yue", password: "1234" });
//         const response1 = await request(server)
//           .post("/api/auth/login")
//           .send({ username: "yue", password: "1234" });
//         expect(response1.status).toBe(200);
//       });
//       test("user can't login with wrong password", async () => {
//         const response = await request(server)
//           .post("/api/auth/register")
//           .send({ username: "yue", password: "1234" });
//         const response1 = await request(server)
//           .post("/api/auth/login")
//           .send({ username: "yue", password: "12345" });
//         expect(response1.status).toBe(500);
//       });
//     });
//   });
// });
