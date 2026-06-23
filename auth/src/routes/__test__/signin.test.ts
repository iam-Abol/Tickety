import request from "supertest";
import { app } from "../../app";

it("fails when a email that does not exist is supplied", () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "test@gmail.com",
      password: "fdsatefdsf",
    })
    .expect(400);
});
it("fails when an incorrect password is supplied", async () => {
  const email = "test@gmail.com",
    password = "123456",
    incorrectPassword = "fdsafdsfsd";
  await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password,
    })
    .expect(201);
  await request(app)
    .post("/api/users/signin")
    .send({
      email,
      incorrectPassword,
    })
    .expect(400);
});
it("response with a cookie when given valid credentials", async () => {
  const email = "test@gmail.com",
    password = "123456";
  await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password,
    })
    .expect(201);
  const res = await request(app)
    .post("/api/users/signin")
    .send({
      email,
      password,
    })
    .expect(200);
  expect(res.get("Set-Cookie")).toBeDefined();
});
