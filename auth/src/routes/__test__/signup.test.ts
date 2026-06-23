import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "123456",
    })
    .expect(201);
});
it("returns a 400 with an invalid email", () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test",
      password: "123456",
    })
    .expect(400);
});
it("returns a 400 with an invalid password", () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "1",
    })
    .expect(400);
});
it("returns a 400 with missing email and password", () => {
  return request(app).post("/api/users/signup").send({}).expect(400);
});

it("disallows duplicate emails", async () => {
  const email = "test@gmail.com";
  await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password: "123456",
    })
    .expect(201);
  await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password: "123456",
    })
    .expect(400);
});
it("sets a cookie after successful signup", async () => {
  const res = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "123456",
    })
    .expect(201);
  expect(res.get("Set-Cookie")).toBeDefined();
});
