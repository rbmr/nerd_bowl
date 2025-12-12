---
tags:
  - probability-theory/stochastic-processes
  - graph-theory
aliases:
  - Absorbing Barrier
  - Trapping State
status: good_enough
created: 2025-12-11 17:53
---
### Absorbing States
Formally, a state $i$ in a Markov chain with transition matrix $\mathbf{P}$ is absorbing if and only if the transition probability from $i$ to itself is 1.
$$P_{ii} = 1 \quad \text{and} \quad P_{ij} = 0 \text{ for all } j \neq i $$

_Where:_
- $P_{ii}$: The probability of moving from state $i$ to state $i$ in one step.
- $P_{ij}$: The probability of moving from state $i$ to state $j$.

#### Properties & Intuition
- **Recurrence:** An absorbing state is always recurrent (specifically, positive recurrent) because the probability of returning to it (having never left) is 1.
- **Communication Class:** An absorbing state forms a communication class of size 1. No other states are accessible from it.
- **Fundamental Matrix Application:** In chains with absorbing states, a key analytical object is the fundamental matrix, used to calculate the expected number of steps before absorption and the probability of being absorbed into a specific state.

### Designing Absorbing States
A methodological transformation applied to a Markov Chain to efficiently calculate **path-restricted probabilities**, such as the likelihood that a process _never_ enters a specific "forbidden" subset of states $\mathcal{A}$ (survival probability).

The Transformation:
The transition matrix is artificially modified to convert the forbidden states into absorbing traps.

$$Q_{ij} = \begin{cases} 1 & \text{if } i \in \mathcal{A} \text{ and } j = i \quad \text{(Trap)} \\ 0 & \text{if } i \in \mathcal{A} \text{ and } j \neq i \quad \text{(No Exit)} \\ P_{ij} & \text{if } i \notin \mathcal{A} \quad \quad \quad \quad \quad \text{(Normal Dynamics)} \end{cases}$$

**Key Mechanisms:**
- **History becomes Location:** In the original process, checking if $\mathcal{A}$ was _ever_ visited requires tracking the entire path history. In the designed chain, this is converted to a location check: if the process is in state $\mathcal{A}$ at time $n$, the restriction was violated at _some_ point in the past.
- **Computational Efficiency:** Instead of summing exponentially many valid paths, this topology allows the use of standard matrix operations.
    - **Survival Probability:** Calculated via matrix powers ($Q^n$).


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

