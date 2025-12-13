---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Gaussian Process Characterization
  - Covariance Characterization of BM
  - BM Definition
  - Standard BM Definition
  - Wiener Process
  - Standard Brownian Motion
status: good_enough
created: 2025-12-13 10:56
---
### Brownian Motion
_A continuous-time stochastic process representing random motion, rigorously defined by specific statistical properties._

Brownian motion is a stochastic process $\{X(t), t \geq 0\}$ that serves as a continuous limit of a symmetric random walk. It acts as a fundamental model for random continuous evolution.

A standard Brownian motion (often denoted as $B(t)$ or $W(t)$) is defined by the following axioms
1. **Initialization:** The process starts at zero: $X(0) = 0$.
2. **Increments:** The process has **stationary** and **independent** increments.
3. **Distribution:** For every $t > 0$, $X(t)$ is normally distributed with mean $0$ and variance $\sigma^2t$.

When the variance parameter $\sigma = 1$, the process is called **Standard Brownian Motion**.
$$X(t) \sim \mathcal{N}(0, \sigma^2 t) $$

_Where:_
- $X(t)$: The value of the process at time $t$.
- $\sigma^2$: The variance parameter (often set to 1 for standard Brownian motion).
#### Properties & Intuition
- **Nowhere Differentiable:** While $X(t)$ is a continuous function of $t$ with probability 1, it is nowhere differentiable. The path is extremely "jagged" at any scale.
- **Limit of Random Walk:** It can be constructed mathematically by taking the limit of a symmetric random walk as the step size and time interval shrink to zero.
- **Intuition:** It represents the cumulative effect of infinitely many tiny, independent random shocks occurring continuously over time.

**Geometric Brownian Motion:** A process $S(t)$ defined by $S(t) = e^{X(t)}$ where $X(t)$ is a Brownian motion with drift. This ensures the value remains positive, useful for modeling asset prices.

### Brownian Motion Starting Condition and Marginals
_The specific distributional requirements for the value of a Brownian motion process at fixed points in time._

A standard Brownian motion $\{W(t), t \geq 0\}$ is anchored at the origin and spreads out normally over time.
1. Starting Condition:
	The process begins at zero with probability 1.
$$P(W(0) = 0) = 1 $$
2. Univariate Marginals:
	For any fixed time $t > 0$, the random variable $W(t)$ follows a normal distribution centered at 0 with variance proportional to time.
$$W(t) \sim \mathcal{N}(0, t) $$
	_Where:_
	- $\mathbb{E}[W(t)] = 0$
	- $\text{Var}(W(t)) = t$

3. Multivariate Marginals:
	The joint distribution of the process at times $t_1 < t_2 < \dots < t_n$ is multivariate normal. The process is defined not just by single points, but by the joint behavior of any collection of points in time.

#### Properties & Intuition
- **Diffusive Spreading:** The condition $\text{Var}(W(t)) = t$ implies that the standard deviation scales with $\sqrt{t}$. The "cloud" of possible positions expands as the square root of time, typical of diffusion processes.
- **Memory of Origin:** Despite the randomness, the expected position remains the starting point ($0$), but the uncertainty regarding the position grows linearly with time.

### Brownian Motion Increments
_The fundamental dynamic properties governing how Brownian motion evolves over time intervals._

Brownian motion is defined by the behavior of its changes (increments) over time intervals. Let $W(t)$ be a standard Brownian motion. An increment is defined as $W(t+s) - W(t)$.
1. Independent Increments:
	The change in the process over non-overlapping time intervals is independent.
	For any $0 \le t_1 < t_2 < \dots < t_n$, the random variables:
$$W(t_2) - W(t_1), \quad W(t_3) - W(t_2), \quad \dots, \quad W(t_n) - W(t_{n-1}) $$
	are mutually independent.

2. Stationary Increments:
	The distribution of the change in the process depends only on the length of the time interval, not on the start time.
$$W(t+s) - W(s) \overset{d}{=} W(t) - W(0) \sim \mathcal{N}(0, t) $$
	_Where:_
	- $\overset{d}{=}$ denotes equality in distribution.
	- The increment has mean 0 and variance $t$ (the length of the interval).

#### Properties & Intuition
- **Markov Property:** Independent increments imply the process is Markovian; the future evolution depends only on the current value, not the path taken to get there6.
- **Homogeneity:** Stationary increments imply time-homogeneity; the "rules" of motion do not change as time passes.
- **Unpredictability:** Knowing the path up to time $t$ gives no information about the _change_ in the path after time $t$.

### Brownian Motion Characterization (Three Properties)
_The standard axiomatic definition used to identify a stochastic process as Brownian Motion._

A continuous-time stochastic process $\{W(t), t \geq 0\}$ is a standard Brownian motion if and only if it satisfies these three conditions simultaneously:
1. **Starting Point:** $W(0) = 0$.
2. **Increments:** $W(t)$ has independent and stationary increments.
3. **Normality:** For every $t > 0$, $W(t)$ is normally distributed with mean $0$ and variance $t$.
$$W(t) \sim \mathcal{N}(0, t) $$

_Where:_
- **Independent:** Non-overlapping intervals have independent changes.
- **Stationary:** Distribution of changes depends only on interval length $\Delta t$.
#### Properties & Intuition
- **Uniqueness:** These three properties (along with path continuity) uniquely define the Wiener process. Any continuous process satisfying them is Brownian motion.
- **Simplicity:** This characterization constructs the complex behavior of Brownian motion from simple, testable statistical assumptions.

### Brownian Motion Alternative Characterization
_Defining Brownian Motion as a specific Gaussian Process via mean and covariance functions._

Brownian motion can be rigorously defined as a Gaussian Process. A process $\{W(t), t \geq 0\}$ is a standard Brownian motion if:
1. **Starting Point:** $W(0) = 0$.
2. **Gaussian Nature:** The process has multivariate normal marginals (i.e., it is a Gaussian Process).
3. **Moments:** It has specific mean and covariance functions:
    - **Mean:** $\mathbb{E}[W(t)] = 0$ for all $t$.
    - **Covariance:** For any $s, t \geq 0$:
$$\text{Cov}(W(s), W(t)) = \min(s, t) $$

#### Properties & Intuition
- **Equivalence:** This definition is mathematically equivalent to the "Three Properties" definition (Independent/Stationary increments).
- **Correlation:** The covariance $\min(s, t)$ indicates that values of the process at times close to each other are highly correlated. As $s$ and $t$ diverge, the correlation relative to the variance decreases.
- Derivation of Covariance:
    For $s < t$:
    $\text{Cov}(W(s), W(t)) = \text{Cov}(W(s), W(s) + (W(t)-W(s)))$
    $= \text{Cov}(W(s), W(s)) + \text{Cov}(W(s), W(t)-W(s))$
    $= \text{Var}(W(s)) + 0$ (due to independent increments)
    $= s = \min(s, t)$.

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

