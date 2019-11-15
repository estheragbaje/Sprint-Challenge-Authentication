const request = require("supertest");
const authRouter = require("./auth-router");
const db = require("../database/dbConfig");
const userModel = require("../users/user-model");
const server = require("../api/server");

// describe("auth router", () => {
//   describe("[POST] /register endpoint", () => {
//     test("the db env is testing", () => {
//       expect(process.env.DB_ENV).toBe("testing");
//     });

//     it("responds with json", function(done) {
//       request(server)
//         .post("/api/auth/register")
//         .send({ username: "john", password: "1234" })
//         .set("Accept", "application/json")
//         .expect("Content-Type", /json/)
//         .expect(201)
//         .end(function(err, res) {
//           if (err) return done(err);
//           done();
//         });
//     });

//     it("respond with 400 not created", function(done) {
//       request(server)
//         .post("/api/auth/register")
//         .send({ username: "john", password: "1234" })
//         .set("Accept", "application/json")
//         .expect("Content-Type", /json/)
//         .expect(500)
//         .expect('"user not created"')
//         .end(err => {
//           if (err) return done(err);
//           done();
//         });
//     });
//   });
// });

beforeEach(async () => {
  await db("users").truncate();
});

describe("testing authRouter", () => {
  describe("testing register endpoint", () => {
    test("user can be registered", async () => {
      await userModel.add({ username: "yue", password: "1234" });
      const user = await db("users");
      expect(user).toHaveLength(1);
    });
    test("returns 201 created status", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .send({ username: "yue", password: "1234" });
      expect(response.status).toBe(201);
    });
    describe("testing login endpoint", () => {
      test("user can login", async () => {
        const response = await request(server)
          .post("/api/auth/register")
          .send({ username: "yue", password: "1234" });
        const response1 = await request(server)
          .post("/api/auth/login")
          .send({ username: "yue", password: "1234" });
        expect(response1.status).toBe(200);
      });
      test("user can't login with wrong password", async () => {
        const response = await request(server)
          .post("/api/auth/register")
          .send({ username: "yue", password: "1234" });
        const response1 = await request(server)
          .post("/api/auth/login")
          .send({ username: "yue", password: "12345" });
        expect(response1.status).toBe(500);
      });
    });
  });
});
