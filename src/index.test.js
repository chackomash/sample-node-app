const { describe, it } = require("node:test");
const assert = require("node:assert");
const app = require("./index");

describe("API Routes", () => {
  it("should have express app exported", () => {
    assert.ok(app);
  });

  it("should have GET / route", () => {
    const routes = app._router.stack
      .filter((r) => r.route)
      .map((r) => ({ path: r.route.path, method: Object.keys(r.route.methods)[0] }));

    const homeRoute = routes.find((r) => r.path === "/" && r.method === "get");
    assert.ok(homeRoute, "GET / route should exist");
  });

  it("should have CRUD routes for todos", () => {
    const routes = app._router.stack
      .filter((r) => r.route)
      .map((r) => ({ path: r.route.path, method: Object.keys(r.route.methods)[0] }));

    assert.ok(routes.find((r) => r.path === "/api/todos" && r.method === "get"));
    assert.ok(routes.find((r) => r.path === "/api/todos/:id" && r.method === "get"));
    assert.ok(routes.find((r) => r.path === "/api/todos" && r.method === "post"));
    assert.ok(routes.find((r) => r.path === "/api/todos/:id" && r.method === "put"));
    assert.ok(routes.find((r) => r.path === "/api/todos/:id" && r.method === "delete"));
  });
});
