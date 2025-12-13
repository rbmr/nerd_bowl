---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Little's Theorem
status: good_enough
created: 2025-12-13 10:26
---
### Little's Law
_A fundamental theorem in queueing theory relating the average number of items in a stationary system to the arrival rate and the average time spent in the system._

For any stable system (one that reaches a steady state):
$$L = \lambda W$$
_Where:_
- $L$: The long-term average number of customers (or items) in the system.
- $\lambda$: The long-term average effective arrival rate of customers into the system.
- $W$: The long-term average time a customer spends in the system (sojourn time).

#### Properties & Intuition
- **Distribution Independence:** The law holds true regardless of the service time distribution, the inter-arrival time distribution, or the queueing discipline (e.g., FIFO, LIFO), provided the system is stable.
- **System Boundary Flexibility:** The "system" can be defined arbitrarily (e.g., just the queue, or the queue plus the server).
    - Applied to the queue: $L_Q = \lambda W_Q$ (Average number in queue = Arrival rate $\times$ Average wait in queue).
    - Applied to the server: Average number in service = $\lambda \times E[S]$ (Arrival rate $\times$ Average service time).
- **Intuition:** Imagine a pipe with water flowing through it. The total amount of water in the pipe ($L$) is equal to the rate at which water enters ($\lambda$) multiplied by the time it takes for a drop to traverse the pipe ($W$). If flow is constant, this relationship is exact.


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

