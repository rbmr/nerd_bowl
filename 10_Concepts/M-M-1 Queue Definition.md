---
tags:
  - queueing-theory
  - probability-theory/stochastic-processes
aliases:
  - M/M/1 Queue
  - Single-Server Exponential Queue
  - M/M/1 System
  - Simple Queue
status: good_enough
created: 2025-12-13 10:16
---
### M/M/1 Queue Definition
_A fundamental birth-death process modeling a single-server queueing system where arrivals occur according to a Poisson process and service times are exponentially distributed._

This system is a continuous-time Markov chain on the state space $\{0, 1, 2, \dots\}$ with constant birth rate $\lambda$ and constant death rate $\mu$.

*Limiting Probability $P_n$:*
The long-run probability that there are exactly $n$ clients in the system exists if and only if the utilization factor $\rho = \lambda/\mu < 1$.
$$P_n = (1 - \rho)\rho^n, \quad n \ge 0$$
_Where:_
- $P_n$: Steady-state probability of having $n$ clients in the system.
- $\lambda$: Mean arrival rate (Poisson parameter).
- $\mu$: Mean service rate (Reciprocal of mean service time).
- $\rho$: Traffic intensity or utilization factor ($\lambda/\mu$).

#### Properties & Intuition
- **Geometric Distribution:** The number of clients in the system ($N$) follows a Geometric distribution (on the set $\{0, 1, \dots\}$) with success probability $1-\rho$.
- **Stability Condition:** If $\lambda \ge \mu$ ($\rho \ge 1$), the queue grows indefinitely, and no limiting distribution exists (states are transient or null recurrent).
- **Memorylessness:** Due to the exponential nature of both arrivals and service, the system's future evolution depends only on the current number of clients, not on how long they have been waiting.


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

