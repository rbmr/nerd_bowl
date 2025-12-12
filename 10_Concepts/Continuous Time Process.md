---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Continuous-Time Stochastic Process
  - CTSP
  - CTP
status: good_enough
created: 2025-12-11 15:31
---
### Continuous Time Process
A [[Stochastic Process]] where the index set $T$ is an interval of the real line, allowing the system to evolve at any instant. 

The process is a family of random variables denoted by:
$$\{X(t), t \ge 0\} \quad \text{or} \quad \{X(t) : t \in [0, \infty)\} $$
_Where:_
- $t$: A real number representing continuous time.
- $X(t)$: The state of the system at the exact instant $t$.

#### Properties & Intuition
- **Uncountable Index:** The system state is defined for an infinite, uncountable number of time points.
- **Dynamics:** Evolution is often described by differential equations (stochastic differential equations) or transition intensities (rates) rather than step-by-step transition probabilities.
- **Intuition:** Watching a stock ticker or a seismograph trace where the value changes continuously and smoothly (or via jumps at arbitrary times), rather than ticking frame-by-frame.


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

