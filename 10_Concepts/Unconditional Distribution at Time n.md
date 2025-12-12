---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Unconditional State Propabilities
  - Absolute Probability Distribution
  - Time-n Distribution
status: good_enough
created: 2025-12-11 17:51
---
### Unconditional Distribution at Time n
For a discrete-time Markov chain $\{X_n, n \ge 0\}$ with state space $\mathcal{S}$, transition probability matrix $\mathbf{P}$, and an initial probability distribution vector $\boldsymbol{\alpha}^{(0)}$, the unconditional distribution at time $n$, denoted $\boldsymbol{\alpha}^{(n)}$, is given by the matrix multiplication of the initial distribution and the $n$-step transition matrix.
$$\boldsymbol{\alpha}^{(n)} = \boldsymbol{\alpha}^{(0)} \mathbf{P}^n $$
_Where:_
- $\boldsymbol{\alpha}^{(n)}$: A row vector where the $j$-th component represents $P(X_n = j)$.
- $\boldsymbol{\alpha}^{(0)}$: The initial probability distribution row vector, where the $i$-th component is $P(X_0 = i)$.
- $\mathbf{P}^n$: The $n$-step transition matrix, derived by multiplying $\mathbf{P}$ by itself $n$ times.

Alternatively, expressed as a scalar summation for a specific state $j$:
$$P(X_n = j) = \sum_{i \in \mathcal{S}} P(X_n = j | X_0 = i) P(X_0 = i) = \sum_{i \in \mathcal{S}} P_{ij}^n \alpha_i^{(0)}$$

#### Properties & Intuition
- **Dependence on Initial Conditions:** Unlike limiting probabilities (which may be independent of the start state for ergodic chains), the unconditional distribution at finite time $n$ is strictly dependent on the initial distribution $\boldsymbol{\alpha}^{(0)}$.
- **Linearity:** The operation is a linear transformation of the initial distribution vector by the $n$-th power of the transition matrix.
- **Convergence:** For an irreducible, aperiodic, positive recurrent chain, as $n \to \infty$, $\boldsymbol{\alpha}^{(n)}$ converges to the stationary distribution $\boldsymbol{\pi}$, regardless of $\boldsymbol{\alpha}^{(0)}$.
- **Intuition:** To find where the process is likely to be at time $n$, one must account for two uncertainties: the inherent randomness of the transitions (captured by $P_{ij}^n$) and the uncertainty of the starting position (captured by $\alpha_i^{(0)}$). It is the weighted sum of all possible trajectories ending at $j$.


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

