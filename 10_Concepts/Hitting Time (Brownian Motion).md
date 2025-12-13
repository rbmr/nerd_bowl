---
tags:
  - probability-theory/stochastic-processes
aliases:
  - First-Passage Time
  - Hitting Time Distribution
  - Reflection Principle Applications
status: not_started
created: 2025-12-13 11:34
---
### Hitting Time (Brownian Motion)
The **Hitting Time**, often denoted as $T_a$, for a standard Brownian Motion $\{W(t), t \ge 0\}$ is the first time $t$ at which the process reaches a specific level $a$. It is a continuous random variable defined on the support $(0, \infty)$.

For a standard Brownian Motion starting at $W(0)=0$ and a level $a > 0$, the hitting time is defined as:
$$T_a = \inf \{t > 0 : W(t) = a\}$$
_(Note: By symmetry, the distribution for hitting $-a$ is identical)._

**Cumulative Distribution Function (CDF)**
The probability that the hitting time $T_a$ occurs before or at time $t$ is equivalent to the probability that the maximum of the process up to time $t$ exceeds $a$. Using the Reflection Principle, this is derived as twice the probability that the process ends above $a$ at time $t$:
$$P(T_a \le t) = P\left(\max_{0 \le s \le t} W(s) \ge a\right) = 2P(W(t) \ge a)$$
Substituting the standard normal probability for $W(t) \sim \mathcal{N}(0, t)$:
$$P(T_a \le t) = \frac{2}{\sqrt{2\pi t}} \int_a^\infty e^{-x^2 / 2t} \, dx = 2 \left( 1 - \Phi\left(\frac{a}{\sqrt{t}}\right) \right)$$
_Where:_
- $T_a$: The random variable representing the first passage time to level $a$.
- $W(t)$: Standard Brownian Motion at time $t$.
- $\Phi(\cdot)$: The CDF of the standard normal distribution.

**Probability Density Function (PDF)**
Differentiating the CDF with respect to $t$ yields the density of the hitting time:
$$f_{T_a}(t) = \frac{a}{\sqrt{2\pi t^3}} \exp\left( -\frac{a^2}{2t} \right), \quad t > 0$$
This distribution is known as the **Lévy distribution** (a special case of the Inverse Gamma distribution).

#### Properties & Intuition
- **Heavy Tails:** The expected value $\mathbb{E}[T_a]$ is infinite. While the process will hit $a$ with probability 1 (recurrence), the mean time to do so is unbounded because long excursions away from the target are possible.
- **Reflection Principle Intuition:** The factor of 2 in the CDF derivation arises from the symmetry of Brownian paths. For every path that hits $a$ at time $\tau < t$ and ends up _above_ $a$ at time $t$, there is a reflected path (reflected across the line $y=a$ after time $\tau$) that ends up _below_ $a$ at time $t$.
- **Scaling:** The hitting time scales quadratically with the barrier height; hitting a barrier $2a$ takes, on average, 4 times as long (distributionally) as hitting $a$.

#### Hitting One Level Before Another
For a standard Brownian Motion starting at 0, with two boundaries $a > 0$ and $b < 0$, the probability of hitting $a$ before $b$ is the limit of the Gambler's Ruin problem for a simple random walk.
$$P(T_a < T_b) = \frac{-b}{a - b} = \frac{|b|}{a + |b|}$$
_Where:_
- $T_a$: Hitting time for the upper level $a$.
- $T_b$: Hitting time for the lower level $b$.


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

