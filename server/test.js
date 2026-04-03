
const request = require("supertest");
const app = require("./server");

test("GET / should return message", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("CI/CD Final Project Working");
});
