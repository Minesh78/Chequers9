import assert from "node:assert/strict";
import test from "node:test";
import { getHero3DDpr, shouldUseReducedHero3D } from "../src/utils/heroCapability.js";

test("keeps full geometry on capable mobile devices", () => {
  assert.equal(shouldUseReducedHero3D({ mobile: false, hardwareConcurrency: 2 }), true);
  assert.equal(shouldUseReducedHero3D({ mobile: true, hardwareConcurrency: 8 }), false);
  assert.equal(shouldUseReducedHero3D({ mobile: false, hardwareConcurrency: 8 }), false);
});

test("renders capable mobile devices at a higher pixel density", () => {
  assert.deepEqual(getHero3DDpr({ mobile: true, reduced: false }), [1, 2]);
  assert.deepEqual(getHero3DDpr({ mobile: false, reduced: false }), [1, 1.5]);
  assert.deepEqual(getHero3DDpr({ mobile: true, reduced: true }), [1, 1.25]);
});
