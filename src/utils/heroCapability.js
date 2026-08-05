export function shouldUseReducedHero3D({ hardwareConcurrency = 8 } = {}) {
  return hardwareConcurrency > 0 && hardwareConcurrency <= 4;
}

export function getHero3DDpr({ mobile = false, reduced = false } = {}) {
  if (reduced) return [1, 1.25];
  return [1, mobile ? 2 : 1.5];
}
