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
