const request = require("supertest");
const app = require("./server");

describe("GET /", () => {
  it("should return message", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("CI/CD Final Project Working");
  });
});