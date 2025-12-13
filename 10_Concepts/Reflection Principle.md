---
tags:
  - probability-theory/stochastic-processes
aliases:
  - André's Reflection Principle
  - Mirror Principle
  - First Hitting Time
  - Distribution of the Maximum
status: good_enough
created: 2025-12-13 11:18
---
### Reflection Principle
The **Reflection Principle** is a fundamental theorem in the theory of stochastic processes, specifically for symmetric random walks and Brownian motion. It establishes a bijective correspondence between sample paths that cross a threshold $a$ and then return to a level $x < a$, and paths that simply reach a level $2a - x$ (the reflection of $x$ about the boundary $a$) without necessarily satisfying the crossing condition.

This principle allows for the derivation of the probability distribution of the **running maximum** (or minimum) of a process by relating it to the distribution of the process's endpoint, which is typically easier to calculate.
#### Definition (Brownian Motion)
Let $\{W(t), t \ge 0\}$ be a standard Brownian motion (Wiener process) with $W(0)=0$. Let $a > 0$ be a constant boundary. Define the **first hitting time** $\tau_a$ as:
$$\tau_a = \inf \{ t > 0 : W(t) = a \}$$
Define the **running maximum** $M(t)$ as:
$$M(t) = \sup_{0 \le s \le t} W(s)$$
The Reflection Principle asserts that for any time $t$ and any level $x \le a$:
$$P(M(t) \ge a, W(t) \le x) = P(W(t) \ge 2a - x)$$

_Where:_
- $W(t)$: The value of the Brownian motion at time $t$.
- $a$: The constant boundary level.
- $2a - x$: The reflection of the value $x$ across the boundary $a$.

*Corollary (Constant Boundary Crossing):*
By summing probabilities over all endpoints $x$, the probability that the maximum exceeds $a$ is twice the probability that the endpoint exceeds $a$:
$$P(M(t) \ge a) = 2P(W(t) \ge a) = 2 \left( 1 - \Phi\left(\frac{a}{\sqrt{t}}\right) \right)$$
_Where:_
- $\Phi(\cdot)$: The cumulative distribution function of the standard normal distribution.

#### Properties & Intuition
- **Symmetry of Future Paths:** The intuition relies on the **Strong Markov Property**. Once the process hits the barrier $a$ at time $\tau_a$, the process "restarts." Because standard Brownian motion is symmetric and driftless, for any path extending from $\tau_a$ to a final value $x < a$ at time $t$, there exists a "mirror" path that extends to $2a - x$ with equal probability density.
- **Reduction of Complexity:** It converts a path-dependent problem (did the process _ever_ cross $a$?) into a path-independent problem (where is the process at time $t$?).
- Heavy-Tailed Hitting Times: The principle implies the density of the hitting time $\tau_a$ is derived from the tail of the normal distribution. The probability density function of $\tau_a$ is:
$$f_{\tau_a}(t) = \frac{a}{\sqrt{2\pi t^3}} e^{-a^2/2t}$$
    This distribution (Lévy distribution) has infinite mean, implying that while the process hits $a$ with probability 1, the expected time to do so is infinite.
- **Drift Independence (Conditional):** For Brownian motion _with_ drift $\mu$, the conditional probability $P(M(t) \ge y \mid X(t) = x)$ is independent of $\mu$. The reflection argument holds for the conditional bridge processes regardless of drift.


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

