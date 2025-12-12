---
tags:
aliases:
  - Periodicity
  - Aperiodicity
  - Periodic State
  - Aperiodic State
  - Ergodicity
  - Ergodic State
  - Period of a State
status: good_enough
created: 2025-12-11 20:09
---
### Period of a State and Ergodicity
#### Period of a State
The **period** of a state $i$ in a Markov chain, denoted as $d(i)$, is the greatest common divisor (gcd) of the set of time steps $n > 0$ at which it is possible to return to state $i$.
$$d(i) = \gcd\{n \ge 1 : P_{ii}^n > 0\}$$
_Where:_
- $P_{ii}^n$: The probability of returning to state $i$ in exactly $n$ steps.
- $\gcd$: The greatest common divisor function.

**Classifications:**
- **Periodic:** A state $i$ is periodic if $d(i) > 1$. The chain can only return to this state at multiples of $d(i)$.
- **Aperiodic:** A state $i$ is aperiodic if $d(i) = 1$. This implies that for sufficiently large $n$, return is possible at every step.

#### Ergodic State
A state $i$ is **ergodic** if it satisfies two conditions:
1. **Positive Recurrent:** The state is recurrent (probability of return is 1) and the expected return time $m_i$ is finite ($m_i < \infty$).
2. **Aperiodic:** The period $d(i) = 1$.

If a Markov chain is irreducible (all states communicate) and consists entirely of ergodic states, the chain itself is called an **ergodic chain**.

*Fundamental Limit Theorem for Ergodic Chains:*
For an irreducible, ergodic Markov chain, the long-run transition probabilities converge to a limiting distribution $\pi_j$ independent of the initial state $i$:
$$\lim_{n \to \infty} P_{ij}^n = \pi_j$$
_Where:_
- $\pi_j$: The steady-state (limiting) probability of being in state $j$.
- $\pi_j = \frac{1}{m_j}$, where $m_j$ is the mean recurrence time of state $j$.

#### Properties & Dynamics
- **Class Property:** Both periodicity and recurrence are class properties. If state $i$ communicates with state $j$ ($i \leftrightarrow j$), then $d(i) = d(j)$, and if $i$ is ergodic, $j$ is ergodic.
- **Oscillation vs. Convergence:** Periodic states cause the chain to oscillate deterministically between subsets of states, preventing the probabilities $P_{ij}^n$ from settling into a single limit as $n \to \infty$. Aperiodicity breaks this cycle, allowing mixing.
- **Stability:** Ergodicity guarantees statistical equilibrium. Regardless of the starting state, the system eventually forgets its initial conditions and settles into a stationary distribution where the probability of finding the system in state $j$ is $\pi_j$.
- **Finite State Space Implication:** An irreducible, aperiodic Markov chain with a finite number of states is always ergodic (since finite irreducible chains are always positive recurrent).


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

