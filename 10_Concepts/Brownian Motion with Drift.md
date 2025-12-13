---
tags:
aliases:
  - Wiener Process with Drift
  - Arithmetic Brownian Motion
status: good_enough
created: 2025-12-13 11:03
---
### Brownian Motion with Drift
_A continuous-time stochastic process that combines deterministic linear trend with random fluctuations._

A stochastic process $\{X(t), t \ge 0\}$ is a **Brownian Motion with drift coefficient $\mu$ and variance parameter $\sigma^2$** if it satisfies the following axioms:
1. **Initialization:** $X(0) = 0$.
2. **Independent Increments:** For any times $0 \le t_1 < t_2 < \dots < t_n$, the increments $X(t_2) - X(t_1), \dots, X(t_n) - X(t_{n-1})$ are independent random variables.
3. **Stationary Increments:** The distribution of the increment $X(t+s) - X(s)$ depends only on the length of the interval $t$.
4. **Normality:** For any $t > 0$, $X(t)$ is normally distributed with mean $\mu t$ and variance $\sigma^2 t$.

Formally, it can be constructed from a Standard Brownian Motion $\{B(t), t \ge 0\}$ (where $\mu=0, \sigma=1$) via the linear transformation:
$$X(t) = \mu t + \sigma B(t) $$
_Where:_
- $X(t)$: The value of the process at time $t$.
- $\mu$: The **drift coefficient**, representing the deterministic trend or average rate of change per unit time.
- $\sigma$: The **volatility** or diffusion coefficient, scaling the magnitude of the random fluctuations.
- $B(t)$: Standard Brownian Motion (Wiener Process), where $B(t) \sim \mathcal{N}(0, t)$.

#### Properties & Intuition
- Distribution Dynamics: At any fixed time $t$, the probability density function of $X(t)$ is a Gaussian bell curve centered at $\mu t$ that widens over time.
$$X(t) \sim \mathcal{N}(\mu t, \sigma^2 t)$$
- **Linear Trend:** The expected value grows linearly: $\mathbb{E}[X(t)] = \mu t$. This represents the "signal" or "current" in the system.
- **Diffusive Spreading:** The variance grows linearly: $\text{Var}(X(t)) = \sigma^2 t$. The standard deviation grows as $\sqrt{t}$, meaning uncertainty increases with the square root of time.
- **Intuition:** Imagine a particle suspended in a fluid (Brownian motion) that is also flowing down a river (Drift). The particle jitters randomly due to molecular collisions ($\sigma B(t)$) but is simultaneously carried downstream at a constant speed ($\mu t$).
    

### Hitting Times and Boundary Crossing
A critical application of Brownian motion with drift is calculating the probability that the process exceeds a certain threshold (boundary crossing) or hitting specific values.

*Probability of Ever Exceeding a Value (for negative drift):*
If the drift $\mu < 0$ and the process starts at 0, the probability that the process ever exceeds a positive level $y$ is given by:
$$P\left(\sup_{t \ge 0} X(t) > y\right) = e^{2\mu y / \sigma^2} $$

_Where:_
- $\mu < 0$: The drift is pulling the process downwards.
- $y > 0$: The upper barrier.
- This is derived from the properties of the _maximum of Brownian motion with drift_.


---

# Related
```dataviewjs
await dv.view("99_System/Scripts/tag_tables", dv.current());
```

### Direct Links to this document
```dataview
TABLE file.folder AS "Context"
FROM [[#]]
WHERE file.folder != "10_Concepts"
SORT file.folder ASC
```

