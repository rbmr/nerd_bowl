---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Hitting Probability
  - Probability of Absorption
status: good_enough
created: 2025-12-12 12:13
---
### Absorption Probability
Absorption Probability quantifies the likelihood that a Markov chain, starting in a specific transient state, will eventually enter a specific recurrent class (or absorbing state) $R_k$, rather than any other disjoint recurrent class.

Let $f_{i R_k}$ denote the probability of being absorbed into recurrent class $R_k$ starting from transient state $i$. The vector of these probabilities $\mathbf{f}_{R_k}$ is given by:
$$\mathbf{f}_{R_k} = S \mathbf{p}_{R_k}$$
_Where:_
- $\mathbf{f}_{R_k}$: A column vector containing the absorption probabilities $f_{i R_k}$ for all $i \in T$.
- $S$: The [[Fundamental Matrix (Markov Chains)]] $(I - P_T)^{-1}$.
- $\mathbf{p}_{R_k}$: A column vector where the $i$-th entry is the sum of one-step transition probabilities from transient state $i$ to _any_ state within the target recurrent class $R_k$ (i.e., $\sum_{j \in R_k} P_{ij}$).

#### Properties & Intuition
- **Matrix of Probabilities:** If $B$ is a matrix where $b_{ij}$ is the probability of absorbing in state $j$ given start in $i$, and $R$ is the transition matrix from transient to absorbing states, then $B = SR$.
- **Total Probability:** If the chain is absorbing (i.e., absorption is certain), the sum of absorption probabilities over all disjoint recurrent classes must equal 1 for any starting transient state.
- **Conditional Limit:** This metric answers "given we start in transient state $i$, what is the probability we end up in the specific absorbing scenario $k$?"


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

