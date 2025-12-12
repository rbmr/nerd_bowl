---
tags:
  - probability-theory/stochastic-processes
  - statistics
aliases:
  - Sequence of Random Variables
  - Time Series
  - Random Sequence
status: good_enough
created: 2025-12-11 15:07
---
### Discrete Time Process
A stochastic process where the index set $T$ is countable or discrete, typically representing specific steps, events, or strictly ordered integers. It is mathematically equivalent to a sequence of random variables.

It is formally denoted as:
$$\{X_n : n \in T\} \quad \text{where } T \subseteq \mathbb{Z} \text{ (e.g., } \mathbb{N} \text{ or } \mathbb{N}_0)$$
Where:
- $n$: The discrete index (representing time steps, turns, or trial numbers).
- $X_n$: The random variable at index $n$.
#### Properties
- **Sequence vs. Process:** In pure analysis, this is called a **Random Sequence** (an infinite list of random "slots"). In modeling, it is a **Process** (a system evolving in jumps).
- While a [[10_Concepts/Random Vector|random vector]] is a finite-dimensional $(X,Y)$, a DTP extends the dimension to infinity.
- A DTP allows for complex dependencies between $X_{n}$ and $X_{n+k}$




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

