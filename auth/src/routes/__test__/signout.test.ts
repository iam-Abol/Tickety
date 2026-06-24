import request from "supertest";
import { app } from "../../app";

it("clears the cookie after signing out", async () => {
  const email = "test@gmail.com";
  await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password: "123456",
    })
    .expect(201);
  const res = await request(app)
    .post("/api/users/signout")
    .send({})
    .expect(200);
  const cookie = res.get("Set-Cookie");
  if (!cookie) {
    throw new Error("Expected cookie but got undefined.");
  }
  expect(cookie[0]).toEqual(
    "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
  );
});
