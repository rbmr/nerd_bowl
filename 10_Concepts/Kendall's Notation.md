---
tags:
  - probability-theory/stochastic-processes
  - queueing-theory
aliases:
  - Kendall's Classification
  - Queueing Notation
  - A/B/c Notation
status: good_enough
created: 2025-12-13 10:14
---
### Kendall's Notation
_A standardized shorthand notation $A/B/c/K/N/D$ used to classify and describe queueing systems based on their statistical properties and constraints._

The notation characterizes a queueing system by specifying six parameters (though the last three are often omitted if they assume standard default values):
$$A/B/c/K/N/D$$
_Where:_
- **A (Arrival Process):** The probability distribution of interarrival times. Common codes include:
    - **M (Markovian/Memoryless):** Poisson arrival process (Exponential interarrival times).
    - **D (Deterministic):** Fixed, constant interarrival times.
    - **G (General):** Arbitrary/General probability distribution.
- **B (Service Process):** The probability distribution of service times. Codes (M, D, G) match those for arrivals.
- **c (Number of Servers):** The integer number of parallel service channels ($c \ge 1$).
- **K (System Capacity):** The maximum number of clients allowed in the system (in service + in queue). If omitted, $K = \infty$.
- **N (Population Size):** The size of the source population from which clients originate. If omitted, $N = \infty$.
- **D (Service Discipline):** The rule determining the order of service (e.g., FIFO, LIFO). If omitted, **FIFO** (First-In, First-Out) is assumed.

#### Properties & Intuition
- **Standardization:** Provides a universal language for operations researchers to quickly identify the mathematical model required (e.g., an M/M/1 queue requires different equations than a G/G/1 queue).
- **Markovian Flag:** The presence of 'M' indicates memoryless properties, implying the system can likely be modeled as a Continuous-Time Markov Chain (CTMC).
- **Implication of Capacity:** If $K$ is finite (e.g., M/M/1/K), the system admits loss; arrivals finding the system full are blocked/dropped, altering the effective arrival rate.
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

