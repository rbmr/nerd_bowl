---
tags:
  - probability-theory/stochastic-processes
  - statistics
aliases:
  - DTMC
  - Markov Chain
  - Memoryless Process
  - Markov Process
status: good_enough
created: 2025-12-11 16:10
---
### Discrete Time Markov Chain
A Discrete-Time Markov Chain (DTMC) is a [[Stochastic Process]] $\{X_n, n \geq 0\}$ that undergoes transitions from one state to another on a state space $S$, subject to the **[[Markov Property]]**. 

#### Properties & Intuition
- **Memorylessness:** The defining characteristic is that the system retains no "memory" of its history. Once the current state $X_n$ is known, the past states $X_0, \dots, X_{n-1}$ provide no additional information regarding the future state $X_{n+1}$.
- **State Space ($S$):** The set of all possible values the process can assume. It must be countable (e.g., non-negative integers $\{0, 1, 2, \dots\}$) or finite.
- **Time Parameter:** The index $n$ represents discrete time steps (e.g., days, turns, seconds), as opposed to continuous time.

### Time-Homogeneous Markov Chain
A Markov chain is time-homogeneous (or has stationary transition probabilities) if the probability of moving from state $i$ to state $j$ is invariant with respect to the time step $n$.
$$P(X_{n+1} = j \mid X_n = i) = P(X_{1} = j \mid X_0 = i) = P_{ij}$$



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

