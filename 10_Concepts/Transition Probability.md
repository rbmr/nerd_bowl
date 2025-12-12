---
tags:
  - probability-theory/stochastic-processes
aliases:
  - One-Step Transition Probability
status: good_enough
created: 2025-12-11 16:22
---
### Transition Probability
**Transition Probabilities** quantify the likelihood of a stochastic process moving from a specific state $i$ to a specific state $j$ in a single time step. In a **time-homogeneous** Markov chain, these probabilities are constant values that do not change over time $n$.
$$P_{ij} = P(X_{n+1} = j \mid X_n = i) $$
_Where:_
- $P_{ij}$: The one-step transition probability from state $i$ to state $j$.
- $X_n$: The state of the process at time $n$.
- $X_{n+1}$: The state of the process at time $n+1$.
#### Properties & Intuition
- Non-negativity: Probabilities must be non-negative.
$$P_{ij} \ge 0, \quad \forall i,j \in S$$
- Normalization (Row Sum Constraint): Since the process must transition to some state (including potentially staying in the same state $i$) at the next time step, the sum of transition probabilities from any given state $i$ to all possible states $j$ must equal 1.
$$\sum_{j \in S} P_{ij} = 1$$
- **Intuition:** $P_{ij}$ represents the "weight" or "likelihood" of a specific directed edge in the state diagram. It dictates the dynamics of the system. If $P_{ii} = 1$, state $i$ is an **absorbing state** because the process can never leave it.


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

