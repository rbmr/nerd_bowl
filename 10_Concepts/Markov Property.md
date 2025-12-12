---
tags:
  - probability-theory/markov-chains
  - information-theory
  - game-theory
aliases:
  - Markovian Assumption
  - Markovian
status: good_enough
created: 2025-12-11 15:18
---
### Markov Property
The condition that the probability distribution of future states depends only on the present state, effectively decoupling the future from the past. 

Formally, a [[Stochastic Process]] has the Markov property if the conditional probability of a future state, given the entire history of the process, equals the conditional probability given only the current state.
$$\mathbb{P}(X_{n+1} = j \mid X_n = i, X_{n-1} = i_{n-1}, \dots, X_0 = i_0) = \mathbb{P}(X_{n+1} = j \mid X_n = i) $$
_Where:_
- $X_{n+1}$: The future state.
- $X_n$: The present state (at time $n$).
- $X_{n-1}, \dots, X_0$: The past history of states.

- **[[Memoryless Property]]:** The system retains no memory of _how_ it arrived at the current state; the current state contains all information necessary to predict the future.
- **Recursive Simplification:** This property allows complex joint probabilities of sequences to be broken down into products of one-step transition probabilities.
- **Intuition:** If you know where you are (present), knowing where you were (past) adds no predictive power regarding where you will go (future).
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

