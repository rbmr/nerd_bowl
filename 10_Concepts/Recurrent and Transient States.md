---
tags:
  - probability-theory/stochastic-processes
  - probability-theory/markov-chains
aliases:
  - Recurrence
  - Recurrent State
  - Transience
  - Return Probability
  - Transient State
status: good_enough
created: 2025-12-11 19:54
---
### Recurrent and Transient States
Let $f_i$ denote the probability that, starting in state $i$, the process will ever reenter state $i$.
- **Recurrent State:** State $i$ is recurrent if $f_i = 1$.
- **Transient State:** State $i$ is transient if $f_i < 1$.


Alternative classification using the sum of $n$-step transition probabilities ($P_{ii}^n$):
$$\text{State } i \text{ is } \begin{cases} \text{recurrent} & \text{if } \sum_{n=1}^{\infty} P_{ii}^n = \infty \\ \text{transient} & \text{if } \sum_{n=1}^{\infty} P_{ii}^n < \infty \end{cases}$$
_Where:_
- $P_{ii}^n$: The probability of being in state $i$ at time $n$, given $X_0 = i$.

#### Properties & Intuition
- **Infinite vs. Finite Visits:** A recurrent state will be visited infinitely often with probability 1. A transient state will be visited only a finite number of times with probability.
- **Geometric Distribution (Transient):** For a transient state $i$, the number of time periods the process spends in $i$ follows a geometric distribution with mean $1/(1-f_i)$.
- **Class Property:** Recurrence and transience are class properties. If state $i$ is recurrent (or transient) and communicates with state $j$, then state $j$ is also recurrent (or transient).
- **Finite Chain Constraint:** In a finite-state Markov chain, not all states can be transient; at least one state must be recurrent.


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

