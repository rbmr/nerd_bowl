---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Doob's Boundary Crossing
  - Maximum of Brownian motion with Drift
  - Absolute Supremum Distribution
status: good_enough
created: 2025-12-13 11:36
---
### Boundary Crossing Probabilities
The **Linear Boundary Crossing** problem determines the probability that a standard Brownian Motion $W(t)$ or a Brownian Motion with drift $X(t)$ exceeds a linear function of time.

**Definition (Doob's Linear Boundary Result)**
For a standard Brownian Motion $\{W(t), t \ge 0\}$, the probability that the process ever exceeds a linear boundary $y(1+at)$ (where $a > 0, y > 0$) is given by:
$$P\left( \sup_{t \ge 0} \frac{W(t)}{1+at} > y \right) = \exp(-2ay^2)$$
_Where:_
- $W(t)$: Standard Brownian Motion.
- $1+at$: The linear weight function (boundary shape).
- $y$: The scale/height of the boundary.

**Application: Constant Boundary for Drift Process**
This result is fundamental in converting "drift" problems into "linear boundary" problems. For a Brownian Motion with negative drift coefficient $\mu < 0$ defined as $X(t) = W(t) + \mu t$, the probability of ever exceeding a constant level $y > 0$ is:
$$P\left( \sup_{t \ge 0} X(t) > y \right) = \exp(2\mu y)$$
*Derivation:*
The event $\exists t^* : W(t^*) + \mu t^* > y$ is equivalent to $W(t^*) > y - \mu t^*$. By factoring, this becomes $W(t^*) > y(1 - \frac{\mu}{y}t^*)$. Applying Doob's formula with $a = -\mu/y$ yields the result.
#### Properties & Intuition
- **Exponential Decay:** The probability of crossing a level decays exponentially with the height of the level $y$ and the magnitude of the opposing drift $|\mu|$.
- **Infinite Horizon:** Unlike the Reflection Principle which applies to a finite interval $[0, t]$, these results often apply to the infinite interval $[0, \infty)$, determining if the boundary is _ever_ crossed.
- **Transformation Invariance:** The probability of a drift process crossing a constant boundary is mathematically equivalent to a standard process crossing a linear boundary.
#### Absolute Supremum (Finite Interval)
For the absolute maximum of a standard Brownian Motion on a finite interval $[0, b]$, denoted $M = \sup_{0 \le t \le b} |W(t)|$, the probability of exceeding a level $y$ requires an infinite series correction to the Reflection Principle (subtracting "double counted" paths that cross both $y$ and $-y$).
$$P\left( \sup_{0 \le t \le b} |W(t)| > y \right) = 4 \sum_{j=1}^{\infty} (-1)^{j+1} P(W(b) > (2j-1)y)$$
_Where:_
- $W(b) \sim \mathcal{N}(0, b)$.
- The term $P(W(b) > k)$ represents the tail probability of the normal distribution.

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

