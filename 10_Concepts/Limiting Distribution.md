---
tags:
  - probability-theory/stochastic-processes
  - probability-theory/markov-chains
aliases:
  - Asymptotic Distribution
  - Long-Run behavior
  - Limiting Probabilities
status: good_enough
created: 2025-12-12 11:32
---
### Limiting Distribution
The **limiting distribution** of a discrete-time Markov chain $\{X_n, n \ge 0\}$ characterizes the state of the process as $n \to \infty$, independent of the initial state. For a Markov chain with state space $\mathcal{S}$ and transition probability matrix $\mathbf{P}$, the limiting probability $\pi_j$ for state $j$ is defined as the limit of the $n$-step transition probability $P_{ij}^n$ as the number of steps approaches infinity.

If the limit exists and is independent of the starting state $i$, we define the vector $\boldsymbol{\pi} = (\pi_j)_{j \in \mathcal{S}}$ where:
$$\pi_j = \lim_{n \to \infty} P_{ij}^n = \lim_{n \to \infty} \mathbb{P}(X_n = j | X_0 = i) $$
_Where:_
- $P_{ij}^n$: The probability of transitioning from state $i$ to state $j$ in exactly $n$ steps.
- $\pi_j$: The long-run probability of the chain being in state $j$.

For the limiting distribution to exist and be unique (independent of $X_0$), the Markov chain generally must satisfy specific structural properties, typically being **irreducible** and **ergodic** (aperiodic and positive recurrent).

#### Properties & Intuition
- **Ergodicity Condition:** A limiting distribution exists and is unique if the Markov chain is irreducible (all states communicate), aperiodic (no fixed cycle length), and positive recurrent (expected return time is finite). Such chains are called _ergodic_.
- **Independence of Initial State:** If the limiting distribution exists for an ergodic chain, the system eventually "forgets" its starting position. The probability of being in state $j$ after a long time is simply $\pi_j$, regardless of where it started.
- **Relationship to Stationary Distribution:** For an irreducible ergodic chain, the limiting distribution is identical to the stationary distribution. It is the unique solution to the steady-state equations.
- **Intuition:** Imagine a particle moving randomly between nodes in a network. After infinite steps, the "Limiting Distribution" describes the proportion of time the particle spends in each node. If the system is ergodic, this proportion stabilizes and becomes predictable.

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

