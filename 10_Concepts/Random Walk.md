---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Simple Random Walk
  - 1D Random Walk
  - Drunkard's Walk
status: good_enough
created: 2025-12-11 16:18
---
### Random Walk
A Random Walk is a specific type of [[Discrete Time Markov Chain]], where the state space is typically the set of integers, and the next state is determined by adding a random step to the current state. It is the discrete counterpart to [[10_Concepts/Brownian Motion|Brownian Motion]].

Mathematically, let $\xi_1, \xi_2, \dots$ be a sequence of independent and identically distributed (i.i.d.) random variables. A random walk $\{X_n, n \geq 0\}$ is defined as:
$$X_n = X_0 + \sum_{k=1}^{n} \xi_k$$
_Where:_
- $X_0$: The starting position (often $0$).
- $X_n$: The position at time $n$.
- $\xi_k$: The step taken at time $k$.

In the **Simple Random Walk** on $\mathbb{Z}$:
$$P(X_{n+1} = i+1 \mid X_n = i) = p, \quad P(X_{n+1} = i-1 \mid X_n = i) = 1-p$$
_Where:_
- $p$: The probability of moving "right" or "up".
- $1-p$: The probability of moving "left" or "down".

#### Properties
- **Symmetry vs. Bias:**
    - If $p = 0.5$, the walk is **symmetric**. In 1D and 2D, a symmetric random walk is **null recurrent**, meaning it will return to the origin with probability 1, but the expected time to return is infinite.
    - If $p \neq 0.5$, the walk is **biased** (transient). It tends to drift toward $+\infty$ (if $p > 0.5$) or $-\infty$ (if $p < 0.5$) and has a non-zero probability of never returning to the start.
- **Periodicity:** A simple random walk on integers is periodic with period 2; it is impossible to return to the starting state in an odd number of steps.
- **Absorbing Barriers:** Variations of the random walk often include boundaries (e.g., $0$ and $N$). If the process stops upon reaching a boundary, the states $0$ and $N$ are absorbing.


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

