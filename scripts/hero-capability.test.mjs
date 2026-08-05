import assert from "node:assert/strict";
import test from "node:test";
import { shouldRenderHero3D, shouldUseReducedHero3D, shouldReduceMotionInHero } from "../src/utils/heroCapability.js";

test("renders the lightweight hero on a WebGL-capable low-core preview", () => {
  assert.equal(
    shouldRenderHero3D({ reducedMotion: false, saveData: false, hardwareConcurrency: 2 }),
    true,
  );
});

test("keeps the Three.js sculpture visible but static for reduced motion", () => {
  assert.equal(shouldRenderHero3D({ reducedMotion: true }), true);
  assert.equal(shouldRenderHero3D({ saveData: true }), false);
});

test("uses reduced geometry instead of hiding the scene on constrained devices", () => {
  assert.equal(shouldUseReducedHero3D({ mobile: false, hardwareConcurrency: 2 }), true);
  assert.equal(shouldUseReducedHero3D({ mobile: true, hardwareConcurrency: 8 }), true);
  assert.equal(shouldUseReducedHero3D({ mobile: false, hardwareConcurrency: 8 }), false);
});

test("keeps the local preview interactive even when its browser forces reduced motion", () => {
  assert.equal(shouldReduceMotionInHero({ prefersReducedMotion: true, isDevelopment: true }), false);
  assert.equal(shouldReduceMotionInHero({ prefersReducedMotion: true, isDevelopment: false }), true);
});
