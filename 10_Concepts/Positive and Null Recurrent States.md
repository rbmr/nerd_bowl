---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Positive Recurrent
  - Positive Recurrent State
  - Null Recurrent
  - Null Recurrent State
  - Positive Recurrence
  - Null Recurrence
  - Mean Recurrence Time
  - Expected Return Time
status: good_enough
created: 2025-12-11 19:58
---
### Positive and Null Recurrent States
This is a sub-classification of a [[Recurrent and Transient States|Recurrent State]], based on the expected time of return.
While a **recurrent** state is one that is visited infinitely often with probability 1, the distinction between **positive** and **null** recurrence describes the _expected time_ between these visits.

Let $T_i$ be the random variable denoting the number of transitions (time) it takes for a Markov chain starting in state $i$ to return to state $i$ for the first time:
$$T_i = \min \{ n \geq 1 : X_n = i \mid X_0 = i \}$$
Let $m_i$ denote the **mean return time** (or expected return time) for state $i$:
$$m_i = E[T_i] = \sum_{n=1}^{\infty} n P(T_i = n)$$
_Where:_
- $X_n$: The state of the process at time $n$.
- $T_i$: The first return time (stopping time).
- $m_i$: The expected number of steps to return to state $i$.

A state $i$ is defined as:
1. P**ositive Recurrent** if it is recurrent ($P(T_i < \infty) = 1$) and the mean return time is finite:
$$m_i < \infty$$
2. **Null Recurrent** if it is recurrent ($P(T_i < \infty) = 1$) but the mean return time is infinite:
$$m_i = \infty$$

#### Properties & Intuition
- **Class Property:** Positive recurrence and null recurrence are class properties.
- **Finite Chains:** An irreducible finite-state Markov chain must be positive recurrent. Null recurrence typically arises in infinite state spaces (e.g., random walks).
- Relationship to Limiting Probabilities ($\pi_j$):
    For an irreducible, aperiodic chain, the long-run proportion of time spent in state $j$ is the inverse of the mean return time:
$$ \pi_j = \frac{1}{m_j}$$
    - If $j$ is **positive recurrent**, then $\pi_j > 0$.
    - If $j$ is **null recurrent**, then $\pi_j = 0$ (the process returns, but so infrequently that the long-run proportion of time spent there is zero).

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

