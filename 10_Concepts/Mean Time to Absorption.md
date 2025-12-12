---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Expected Steps to Absorption
  - Mean Time to Recurrence
status: good_enough
created: 2025-12-12 12:12
---
### Mean Time to Absorption
The Mean Time to Absorption represents the expected number of steps a Markov chain, initiated in a transient state, will execute before entering _any_ recurrent class (an absorbing state or a closed communicating class).

For a chain with transient states $T$, the vector of mean times to absorption, $\mathbf{m}$, is calculated by summing the rows of the [[Fundamental Matrix (Markov Chains)]]:
$$\mathbf{m} = S \mathbf{1} = (I - P_T)^{-1} \mathbf{1}$$

_Where:_
- $\mathbf{m}$: A column vector where the $i$-th entry $m_i$ denotes the expected number of steps until absorption starting from transient state $i$.
- $S$: The Fundamental Matrix ($s_{ij}$ is expected visits to $j$ starting from $i$).
- $\mathbf{1}$: A column vector of all ones.
- $P_T$: The transition probability matrix restricted to transient states.
#### Properties & Intuition
- **Summation of Visits:** Since the total time until absorption is simply the sum of the time spent in every possible transient state, $m_i = \sum_{j \in T} s_{ij}$.
- **Linear System:** The vector $\mathbf{m}$ can also be solved directly via the linear system $\mathbf{m} = \mathbf{1} + P_T \mathbf{m}$, which implies that one step is taken, plus the expected remaining steps weighted by the transition probabilities to other transient states.
- **Finite Expectation:** For finite Markov chains, if the set of recurrent states is accessible from all transient states, the elements of $\mathbf{m}$ are always finite.


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

