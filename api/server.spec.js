const request = require("supertest");

const server = require("../api/server");

describe("server", () => {
  describe("[GET] / endpoint", () => {
    test("the db env is testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });

    test("should return 200 OK", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
    });

    test("returns the right response body", async () => {
      const response = await request(server).get("/");
      expect(response.body).toEqual({ api: "up" });
    });
  });
});
