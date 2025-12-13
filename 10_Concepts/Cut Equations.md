---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Balance Equation
status: good_enough
created: 2025-12-13 10:34
---
### Cut Equations
_A principle used to solve for the steady-state probabilities of a continuous-time Markov chain by equating the probability flow across a "cut" that separates the state space into two disjoint sets._

In a steady-state system, the rate of transitions flowing from set $A$ to set $A^c$ must equal the rate of transitions flowing from $A^c$ to $A$:
$$\sum_{i \in A} \sum_{j \in A^c} \pi_i q_{ij} = \sum_{j \in A^c} \sum_{i \in A} \pi_j q_{ji}$$

_Where:_
- $A, A^c$: A partition of the state space $S$ into two sets.
- $\pi_i$: The steady-state probability of being in state $i$.
- $q_{ij}$: The transition rate from state $i$ to state $j$.

#### Specific Application: Birth-Death Processes
For a Birth-Death process (where transitions only occur between adjacent states $n$ and $n \pm 1$), we define a cut between state $n$ and $n+1$. The flow must balance:
$$\lambda_n P_n = \mu_{n+1} P_{n+1}$$

_Where:_
- $\lambda_n$: Birth rate from state $n$.
- $\mu_{n+1}$: Death rate from state $n+1$.
- $P_n$: Probability of being in state $n$.
#### Properties & Intuition
- **Simplification:** Cut equations often provide a much simpler recursive relationship than full global balance equations (which equate flow in/out of a single state).
- Recursive Solution: In queuing systems, cut equations allow expressing $P_n$ iteratively in terms of $P_0$:
    $P_{n+1} = \frac{\lambda_n}{\mu_{n+1}} P_n$.
- **Intuition:** Imagine a line drawn between two groups of states. In the long run, the number of times the system crosses the line from left to right must equal the number of times it crosses from right to left; otherwise, the system would indefinitely "drift" to one side.



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

