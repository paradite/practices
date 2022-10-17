function shakeHands(n) {
  // dp[i]: handshakes for i people
  const dp = [0, 0, 1];
  for (let i = 3; i <= n; i++) {
    const newHandshakes = i - 1;
    dp[i] = dp[i - 1] + newHandshakes;
  }
  return dp[n];
}

console.log(shakeHands(10));
