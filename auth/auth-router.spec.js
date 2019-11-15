const request = require("supertest");

const server = require("../api/server");

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

    it("respond with 400 not created", function(done) {
      request(server)
        .post("/api/auth/register")
        .send({ username: "john", password: "1234" })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(500)
        .expect('"user not created"')
        .end(err => {
          if (err) return done(err);
          done();
        });
    });
  });
});
