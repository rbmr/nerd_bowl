---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Steady-State Distribution
  - Equilibrium Distribution
  - Invariant Measure
status: good_enough
created: 2025-12-12 11:36
---
### Stationary Distribution
A **Stationary Distribution** is a probability distribution $\boldsymbol{\pi}$ over the state space $\mathcal{S}$ of a Markov chain that remains unchanged by the transition matrix $\mathbf{P}$. It represents an equilibrium state where the probability mass flowing into a state equals the probability mass flowing out.

Formally, a row vector $\boldsymbol{\pi}$ is a stationary distribution if it satisfies the **steady-state equations**:
$$\pi_j = \sum_{i \in \mathcal{S}} \pi_i P_{ij}, \quad \text{for all } j \in \mathcal{S}$$
Subject to the normalization constraint:
$$\sum_{j \in \mathcal{S}} \pi_j = 1 $$

_Where:_
- $\pi_j$: The stationary probability of being in state $j$.
- $P_{ij}$: The one-step transition probability from state $i$ to state $j$.

In matrix notation, this is defined as the left eigenvector of the transition matrix $\mathbf{P}$ with an eigenvalue of 1:
$$\boldsymbol{\pi} = \boldsymbol{\pi}\mathbf{P}$$

#### Properties & Intuition
- **Global Balance:** The equation $\pi_j = \sum_i \pi_i P_{ij}$ implies that the total probability "mass" being in state $j$ at time $n+1$ is the sum of the mass coming from all possible previous states $i$ at time $n$, weighted by their transition probabilities. If the system is stationary, this sum must simply equal $\pi_j$.
- **Convergence Target:** If a Markov chain is irreducible and aperiodic, the $n$-step transition probabilities converge to the stationary distribution $\pi_j$ as $n \to \infty$, regardless of the initial state. Thus, $\pi_j$ represents the long-run proportion of time the process spends in state $j$.
- **Time Reversibility:** For certain chains (like birth-death processes), the stationary distribution satisfies the detailed balance equations $\pi_i P_{ij} = \pi_j P_{ji}$.

### Steady-State Equation
The linear system used to solve for $\pi$ is often referred to as the steady-state equations. For a finite state space, one of the equations in $\boldsymbol{\pi} = \boldsymbol{\pi}\mathbf{P}$ is usually redundant, requiring the use of the normalization condition $\sum \pi_j = 1$ to solve the system uniquely.


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

