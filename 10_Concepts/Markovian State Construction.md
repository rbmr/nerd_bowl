---
tags:
  - probability-theory/markov-chains
  - probability-theory/stochastic-processes
aliases:
  - Markovian State Representation
  - State Space Augmentation
  - Markov Embedding
status: good_enough
created: 2025-12-11 15:51
---
### Markovian State Construction
The methodological process of defining a state space $S$ such that a stochastic process satisfies the [[Markov Property]].

A [[Stochastic Process]] is defined by its state variables. For the process to be a [[10_Concepts/Discrete Time Markov Chain|Markov Chain]], the current state must be sufficient statistic for the future evolution of the process, encapsulating all relevant historical information. 

*State Augmentation Formulation:*
For a process with dependency order $k$ (where the future depends on the last $k$ values), the Markovian state $Y_t$ is defined as the tuple of the current value and the $k-1$ preceding values:
$$Y_t = (X_t, X_{t-1}, \dots, X_{t-k+1})$$
_Where:_
- $X_t$: The observable realization at time $t$.
- $Y_t$: The constructed Markovian state vector.
- $S_Y = S_X^k$: The augmented state space (Cartesian power of the original space).

#### Properties & Intuition
- **History Encoding:** The "State" in a Markov model is not just a snapshot of the present; it is a **memory container**. It must hold enough information so that if the history were deleted, the future predictions would remain unchanged.
- **Dimensionality Trade-off ([[Curse of Dimensionality]]):** Augmenting the state to capture history exponentially increases the size of the state space. If $|S|$ is the size of the original space and the dependency is of order $k$, the new state space size is $|S|^k$.
- **Modifiability for Querying:** The state space can be dynamically redefined to answer specific probabilistic queries (e.g., calculating "time until event $A$"). By modifying the transition topology (e.g., making specific states **absorbing**), one can transform complex path-based questions into standard transient state calculations.

### Absorbing State Transformation
A specific technique in state construction involves determining probabilities of _avoiding_ or _reaching_ a set of states $A$.
- **Technique:** Transform the transition matrix $P$ into $Q$ where all states in $A$ become **absorbing** ($P_{ii} = 1$ for $i \in A$).
- **Utility:** The probability of "never entering $A$ by time $n$" in the original process becomes equivalent to the probability of "not being in an absorbing state at time $n$" in the transformed process.

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

