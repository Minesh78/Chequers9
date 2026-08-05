export function shouldRenderHero3D({ saveData = false } = {}) {
  return !saveData;
}

export function shouldUseReducedHero3D({ mobile = false, hardwareConcurrency = 8 } = {}) {
  return mobile || (hardwareConcurrency > 0 && hardwareConcurrency <= 4);
}

export function shouldReduceMotionInHero({ prefersReducedMotion = false, isDevelopment = false } = {}) {
  return isDevelopment ? false : prefersReducedMotion;
}
