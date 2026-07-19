import { describe, it, expect } from "vitest";

describe("RelatedTransformer", () => {
  it("exports RelatedTransformer", async () => {
    const mod = await import("../src/transformer");
    expect(typeof mod.RelatedTransformer).toBe("function");
  });
});
