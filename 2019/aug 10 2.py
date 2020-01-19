class Solution:
  def numRollsToTarget(self, d: int, f: int, target: int) -> int:
    dp = [None] * d
    dp[0] = [1] * f
    for i in range(1, d):
      dp[i] = [0] * target
      for j in range(1, f + 1):
        for k in range(len(dp[i - 1])):
          if j + k < target:
            dp[i][j + k] = ((dp[i - 1][k]) + dp[i][j + k]) % (10**9 + 7)
    # print(dp)
    if len(dp[d - 1]) > target - 1:
      return dp[d - 1][target - 1]
    return 0

class Solution:
  def numRollsToTarget(self, d: int, f: int, target: int) -> int:
    dp = [[0 for i in range(target + 1)] for j in range(d + 1)]
    dp[0][0] = 1
    for cur_d in range(1, d + 1):
      for cur_f in range(1, f + 1):
        for cur_target in range(1, target + 1):
          if cur_target - cur_f < 0:
            continue
          dp[cur_d][cur_target] = (dp[cur_d - 1][cur_target - cur_f] + dp[cur_d][cur_target]) % (10**9 + 7)
    return dp[d][target]

print(Solution().numRollsToTarget(1, 6, 3))
print(Solution().numRollsToTarget(2, 6, 7))
print(Solution().numRollsToTarget(2, 5, 10))
print(Solution().numRollsToTarget(1, 2, 3))
print(Solution().numRollsToTarget(10, 10, 15))
print(Solution().numRollsToTarget(30, 30, 500))