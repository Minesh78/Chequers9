import assert from "node:assert/strict";
import test from "node:test";
import { shouldUseReducedHero3D } from "../src/utils/heroCapability.js";

test("uses reduced geometry instead of hiding the scene on constrained devices", () => {
  assert.equal(shouldUseReducedHero3D({ mobile: false, hardwareConcurrency: 2 }), true);
  assert.equal(shouldUseReducedHero3D({ mobile: true, hardwareConcurrency: 8 }), true);
  assert.equal(shouldUseReducedHero3D({ mobile: false, hardwareConcurrency: 8 }), false);
});
