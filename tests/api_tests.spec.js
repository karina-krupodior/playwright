import { test, expect } from "@playwright/test";

test("Testing API- GET request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Weave");
});

test("DELETE request - deleting", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2");
  expect(response.status()).toBe(204);
});

test("Post request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Karina",
      job: "princess",
    },
  });

  expect(response.status()).toBe(201);
  const text = await response.text();
  expect(text).toContain("Karina");
});

test("PUT request - update", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "Karina",
      job: "doctor",
      age: 24,
    },
  });

  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Karina");
});
