---
tags:
aliases:
  - PASTA Property
  - Poisson Arrivals See Time Averages
status: good_enough
created: 2025-12-13 10:31
---
### PASTA Principle
_A property of systems with Poisson arrival processes, stating that the state of the system as seen by an arriving customer is probabilistically identical to the state of the system at an arbitrary point in time._

For a system with Poisson arrivals:
$$a_n = P_n$$
_Where:_
- $a_n$: The limiting proportion of arrivals that find $n$ customers in the system (limiting average over customers).
- $P_n$: The limiting proportion of time the system contains $n$ customers (limiting average over time).

#### Properties & Intuition
- **Memoryless Bias Removal:** This property relies on the memoryless nature of the exponential inter-arrival times of the Poisson process.
- **Contrast with Non-Poisson:** In systems with deterministic arrivals (e.g., G/D/1), arrivals may be timed to strictly coincide with empty or busy states, causing $a_n \neq P_n$. Poisson arrivals effectively sample the system state randomly.
- **Intuition:** Because Poisson arrivals are purely random and independent of the current state of the system, an arriving customer acts as a random observer. Therefore, the statistics gathered by arrivals ($a_n$) must match the long-run time statistics of the system ($P_n$).

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

