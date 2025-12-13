---
tags:
aliases:
  - Erlang B System
  - M/M/k/k
  - Erlang Loss Formula
status: good_enough
created: 2025-12-13 10:32
---
### M/M/k/k Queue (Erlang Loss System)
_A queueing system with Poisson arrivals, exponential service times, $k$ servers, and a capacity of exactly $k$ (no waiting room). Arrivals finding all servers busy are lost (blocked)._

**Steady-State Probability** ($P_n$) of having $n$ customers in the system:
$$P_n = \frac{\frac{(\lambda/\mu)^n}{n!}}{\sum_{j=0}^k \frac{(\lambda/\mu)^j}{j!}}, \quad n=0, 1, \dots, k$$
_Where:_
- $\lambda$: Arrival rate of customers.
- $\mu$: Service rate per server.
- $k$: Number of servers (and total system capacity).
- $n$: Number of customers currently in the system.

#### Long-Run Proportion of Lost Clients (Erlang's Loss Formula)
The probability that an arriving customer is blocked (finds all $k$ servers busy) is given by $P_k$:
$$P_{loss} = P_k = \frac{\frac{(\lambda/\mu)^k}{k!}}{\sum_{j=0}^k \frac{(\lambda/\mu)^j}{j!}}$$
#### Properties & Intuition
- **Insensitivity:** Surprisingly, this formula holds for **M/G/k/k** systems as well (general service distributions), not just exponential service times. It depends only on the mean service time $E[S] = 1/\mu$.
- **Truncated Poisson:** The numerator looks like a Poisson probability mass function. The distribution is essentially a Poisson distribution truncated at $k$ and renormalized.
- **No Queue:** Since there is no waiting room, there is no $W_Q$ (waiting time in queue). $L_Q = 0$.


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

