export function shouldUseReducedHero3D({ mobile = false, hardwareConcurrency = 8 } = {}) {
  return mobile || (hardwareConcurrency > 0 && hardwareConcurrency <= 4);
}
