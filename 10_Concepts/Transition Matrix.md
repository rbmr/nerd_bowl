---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Stochastic Matrix
  - Probability Matrix
  - Matrix of Transition Probabilities
status: good_enough
created: 2025-12-11 16:44
---
### Transition Matrix
The Transition Matrix, is a square matrix that encapsulates all one-step transition probabilities of a Markov chain. It servers as a linear algebraic operator that maps the probability distribution of the system at time $n$ to the distribution at time $n+1$.

For a state space $S = \{0, 1, 2, \dots\}$, the matrix is defined as:

$$\mathbf{P} = \begin{bmatrix} P_{00} & P_{01} & P_{02} & \dots \\ P_{10} & P_{11} & P_{12} & \dots \\ \vdots & \vdots & \vdots & \ddots \\ P_{i0} & P_{i1} & P_{i2} & \dots \end{bmatrix} $$
_Where:_
- The element in the $i$-th row and $j$-th column, $P_{ij}$, is the probability of moving from state $i$ to state $j$.

#### Properties & Intuition
- **[[10_Concepts/Stochastic Matrix|Stochastic Matrix]]:** A matrix is a stochastic matrix if:
    1. All entries are non-negative: $P_{ij} \ge 0$.
    2. Each row sums to exactly 1: $\sum_j P_{ij} = 1$.
- Distribution Dynamics: If $\boldsymbol{\alpha}^{(n)}$ is a row vector representing the probability distribution of the chain at time $n$, then the distribution at time $n+1$ is given by matrix multiplication:
$$\boldsymbol{\alpha}^{(n+1)} = \boldsymbol{\alpha}^{(n)} \mathbf{P}$$
- **n-Step Transitions:** The matrix $\mathbf{P}^n$ (matrix multiplication of $\mathbf{P}$ by itself $n$ times) contains the probabilities of moving from state $i$ to state $j$ in exactly $n$ steps. (See [[Chapman-Kolmogorov Equations]]).




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

