---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Random Process
  - Probabilistic System
status: good_enough
created: 2025-12-11 15:13
---
### Stochastic Process
A collection of random variables indexed by a set $T$, representing the evolution of a system of random values over time or space. 

Defined as $\{X(t), t \in T\}$, where for each $t \in T$, $X(t)$ is a random variable mapping the sample space to a state space $S$.
$$\{X(t) : t \in T\} $$
_Where:_
- $T$: The index set (usually representing time).
- $X(t)$: The state of the system at time $t$.
- $S$: The state space (the set of all possible values $X(t)$ can take).




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

