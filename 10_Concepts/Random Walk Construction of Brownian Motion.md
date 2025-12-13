---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Rescaled Random Walk
  - Donsker's Invariance Principle
  - Random Walk Limit
status: good_enough
created: 2025-12-13 10:46
---
### Random Walk Construction of Brownian Motion
_The rigorous construction of Brownian Motion as the scaling limit of discrete random walks. This principle establishes Brownian Motion as the macroscopic behavior of microscopic stochastic fluctuations._

Let $X_1, X_2, \dots$ be a sequence of independent and identically distributed (i.i.d.) random variables with mean $0$ and variance $\sigma^2$. Define the discrete-time random walk $S_k$ as the partial sum:
$$S_k = \sum_{i=1}^k X_i, \quad S_0 = 0 $$
To construct continuous-time Brownian Motion, we define a continuous-time process $W_n(t)$ by rescaling both time and space. The **Rescaled Random Walk** $W_n(t)$ for $t \ge 0$ is defined as:
$$W_n(t) = \frac{1}{\sigma \sqrt{n}} S_{\lfloor nt \rfloor} $$
_Where:_
- $n$: The scaling parameter (representing the "speed" or frequency of steps), which tends to infinity ($n \to \infty$).
- $\lfloor nt \rfloor$: The integer part of $nt$, representing the number of discrete steps taken by time $t$.
- $\frac{1}{\sqrt{n}}$: The spatial scaling factor required to stabilize the variance.
- $\sigma$: The standard deviation of the step size.

*The Invariance Principle (Donsker's Theorem):*
As $n \to \infty$, the process $W_n(t)$ converges in distribution to Standard Brownian Motion $B(t)$ (also denoted $W(t)$) on the interval $[0, 1]$ (or generally $[0, \infty)$).
$$W_n \xrightarrow{d} B \quad \text{as } n \to \infty $$

#### Properties & Intuition
- **Diffusive Scaling ($\Delta x \propto \sqrt{\Delta t}$):** The crucial insight of this construction is the relationship between space and time. To obtain a non-trivial limit, space must be scaled by the square root of the time scaling. If time is accelerated by a factor of $n$ (step duration $\Delta t = 1/n$), the step size must be $\Delta x = 1/\sqrt{n}$.
    - If scaled by $1/n$ (velocity scaling), the limit is deterministic (0).
    - If scaled by $< 1/\sqrt{n}$, the limit blows up to infinity.
- **Central Limit Theorem Extension:** This construction is essentially a **Functional Central Limit Theorem**. Just as the CLT states that the sum of i.i.d. variables converges to a Normal distribution, this construction states that the _path_ of the sum converges to the _path_ of a Brownian Motion.
    - For a fixed $t$, $W_n(t)$ is a sum of approximately $nt$ random variables, scaled by $\sqrt{n}$. By the standard CLT, this converges to $N(0, t)$.
- **Universality (Invariance):** The limit process is **Brownian Motion** regardless of the specific distribution of the steps $X_i$, provided they are i.i.d. with mean 0 and finite variance $\sigma^2$. Whether the walk assumes values of $\pm 1$ (Rademacher) or is drawn from a continuous distribution, the macroscopic limit is the same.
- **Nowhere Differentiable:** While the pre-limit paths $W_n(t)$ are piecewise constant (or piecewise linear if interpolated), the limit $B(t)$ is continuous everywhere but differentiable nowhere. This arises because the spatial steps $\Delta x$ do not shrink fast enough relative to time steps $\Delta t$ to form a finite derivative ($\frac{\Delta x}{\Delta t} = \frac{1/\sqrt{n}}{1/n} = \sqrt{n} \to \infty$).

#### General Step Scaling
An alternative formulation defines the process directly via step sizes $\Delta x$ and time intervals $\Delta t$.
$$X(t) = \Delta x \sum_{i=1}^{\lfloor t/\Delta t \rfloor} X_i $$
For the limit to be a Brownian Motion with variance parameter $\sigma^2$, the step size and time interval must vanish such that:
$$\Delta x = \sigma \sqrt{\Delta t} $$
Taking the limit as $\Delta t \to 0$ yields Brownian Motion $X(t) \sim N(0, \sigma^2 t)$.


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

