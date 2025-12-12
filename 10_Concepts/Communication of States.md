---
tags:
  - probability-theory/stochastic-processes
  - probability-theory/markov-chains
aliases:
  - Accessibility of States
  - Accessible State
status: good_enough
created: 2025-12-11 19:42
---
### Communication of States
State $j$ is said to be accessible from state $i$ if it is possible to transition from $i$ to $j$ in a finite number of steps with non-zero probability. Formally, accessibility is defined if there exists an $n\ge 0$ such that the n-step transition probability satisfies:
$$
P^n_{ij}>0
$$
_Where:_
- $P_{ij}^n$: The probability of being in state $j$ after $n$ transitions, given the process started in state $i$.

Two states $i$ and $j$ are said to **communicate** (denoted $i \leftrightarrow j$) if they are accessible from each other. That is, $i$ is accessible from $j$, and $j$ is accessible from $i$.

**Equivalence Relation:** Communication is an equivalence relation satisfying three properties3:
1. **Reflexivity:** State $i$ communicates with itself ($i \leftrightarrow i$) because $P_{ii}^0 = 1$ by definition.
2. **Symmetry:** If $i \leftrightarrow j$, then $j \leftrightarrow i$.
3. **Transitivity:** If $i \leftrightarrow j$ and $j \leftrightarrow k$, then $i \leftrightarrow k$. This implies that if you can get from $i$ to $j$ and from $j$ to $k$, you can construct a path from $i$ to $k$ via $j$ (specifically $P_{ik}^{n+m} \ge P_{ij}^n P_{jk}^m > 0$).

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

