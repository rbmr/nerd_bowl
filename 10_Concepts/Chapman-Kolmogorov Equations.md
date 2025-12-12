---
tags:
  - probability-theory/stochastic-processes
aliases:
  - C-K Equations
  - Chapman-Kolmogorov Identity
  - Semigroup Property of Markov Chains
status: good_enough
created: 2025-12-11 17:03
---
### Chapman-Kolmogorov Equations
The **Chapman-Kolmogorov equations** provide the fundamental method for computing multi-step transition probabilities in a Markov process. They state that the probability of transitioning from state $i$ to state $j$ over a duration $n + m$ is the sum of the probabilities of transitioning from $i$ to some intermediate state $k$ in time $n$, and then from $k$ to $j$ in the remaining time $m$, summed over all possible intermediate states $k$.

This identity reflects the **Markov property**: the future depends only on the present state, not on the path taken to reach it. Mathematically, it establishes that the transition probability matrix follows the semigroup property.

#### Discrete-Time Formulation
For a time-homogeneous discrete-time Markov chain $\{X_n, n \ge 0\}$ with state space $\mathcal{S}$:
$$P_{ij}^{(n+m)} = \sum_{k \in \mathcal{S}} P_{ik}^{(n)} P_{kj}^{(m)} $$
_Where:_
- $P_{ij}^{(n+m)}$: The probability $P(X_{n+m} = j \mid X_0 = i)$, transitioning from $i$ to $j$ in $n+m$ steps.
- $P_{ik}^{(n)}$: The probability of being in intermediate state $k$ after $n$ steps, starting from $i$.
- $P_{kj}^{(m)}$: The probability of transitioning from intermediate state $k$ to destination $j$ in the remaining $m$ steps.
- $\mathcal{S}$: The set of all possible states.

Matrix Form:
If $\mathbf{P}^{(n)}$ denotes the matrix of $n$-step transition probabilities, the equation simplifies to matrix multiplication:
$$\mathbf{P}^{(n+m)} = \mathbf{P}^{(n)} \cdot \mathbf{P}^{(m)}$$
By induction, the $n$-step transition matrix is simply the one-step matrix raised to the power of $n$:
$$\mathbf{P}^{(n)} = \mathbf{P}^n$$
#### Continuous-Time Formulation
For a continuous-time Markov chain $\{X(t), t \ge 0\}$:
$$P_{ij}(t+s) = \sum_{k \in \mathcal{S}} P_{ik}(t) P_{kj}(s) $$
_Where:_
- $P_{ij}(t+s)$: Probability of being in state $j$ at time $t+s$, given state $i$ at time 0.
- $t, s \ge 0$: Non-negative time intervals.

#### Properties & Intuition
- **Path Decomposition:** The intuition is that to get from point A to point B in time $T$, you _must_ be at some specific location at any intermediate time $t < T$. The total probability is the sum of probabilities of all valid paths through all possible intermediate "stopovers."
- **Computational Efficiency:** These equations allow for efficient calculation of long-term behaviors. Instead of simulating millions of paths, one can compute $\mathbf{P}^n$ (using eigendecomposition or successive squaring) to find the exact probability distribution at time $n$.
- **Foundation for Differential Equations:** In continuous time, as $s \to 0$, these equations are used to derive the **Kolmogorov Forward and Backward Differential Equations**, which describe the rate of change of transition probabilities.

### Kolmogorov Forward and Backward Equations
In continuous-time Markov chains, the Chapman-Kolmogorov equations are often manipulated (by letting the time step $h \to 0$) to form systems of differential equations that allow for the calculation of $P_{ij}(t)$ using the instantaneous transition rates $q_{ij}$:
- **Backward Equation:** $P'_{ij}(t) = \sum_{k \neq i} q_{ik} P_{kj}(t) - v_i P_{ij}(t)$.
- **Forward Equation:** $P'_{ij}(t) = \sum_{k \neq j} q_{kj} P_{ik}(t) - v_j P_{ij}(t)$.

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

