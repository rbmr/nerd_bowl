---
tags:
  - probability-theory/stochastic-processes
  - probability-theory/markov-chains
aliases:
  - Fundamental Matrix
  - Matrix of Mean Time Spent
  - Matrix of Mean Time Spent In Transient States
status: good_enough
created: 2025-12-12 12:10
---
### Fundamental Matrix (Markov Chains)
In the context of an **absorbing Markov chain**, the Fundamental Matrix, denoted as $S$ (or sometimes $N$), quantifies the expected aggregate time the process spends in transient states before being absorbed into a recurrent class.

Formally, consider a Markov chain with finite state space partitioned into a set of transient states $T$ and a set of recurrent states $R$. Let $P_T$ denote the submatrix of transition probabilities $P_{ij}$ where both $i, j \in T$. The Fundamental Matrix $S$ is defined as the inverse of the difference between the identity matrix and the transient transition matrix:
$$S = (I - P_T)^{-1}$$
_Where:_
- $S$: The fundamental matrix ($t \times t$, where $t = |T|$). The entry $s_{ij}$ represents the expected number of time periods the chain visits transient state $j$ given that it starts in transient state $i$.
- $I$: The $t \times t$ identity matrix.
- $P_T$: The substochastic matrix of transition probabilities between transient states.
#### Properties & Intuition
- **Existence:** The inverse $(I - P_T)^{-1}$ always exists for finite absorbing chains because the spectral radius of $P_T$ is strictly less than 1 (eventual absorption is certain).
- **Geometric Series Expansion:** The matrix can be expressed as an infinite sum: $S = I + P_T + P_T^2 + \dots$. This corresponds to summing the probabilities of being in state $j$ at step $n$ (given start at $i$) over all time steps $n \ge 0$.
- **Conditioning on First Step:** The defining equation $S = I + P_T S$ arises from conditioning on the first transition: the time spent in $j$ is 1 (if $i=j$) plus the weighted sum of expected future times spent in $j$ after moving to some intermediate transient state $k$.

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

