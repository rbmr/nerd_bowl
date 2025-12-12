---
tags:
  - probability-theory
  - statistics
aliases:
  - VAR
  - Second Central Moment
status: good_enough
created: 2025-12-11 13:07
---
### Variance
Variance measures the spread, dispersion, or variability of a random variable around its expected value. It quantifies the expected squared deviation form the mean.

_Definition:_
$$Var(X) = E[(X - E[X])^2] $$
_Computational Formula:_
$$Var(X) = E[X^2] - (E[X])^2 $$
_Where:_
- $E[X]$: The expected value (mean) of $X$.
- $E[X^2]$: The second moment of $X$.

#### Properties
- **Non-Negative:** $Var(X)\ge 0$. It is zero iff $X$ is a constant with probability 1.
- **Scaling:** $Var(aX+b)=a^2Var(X)$
- **Sum of Independent Vars:** If $X_1, \dots, X_n$ are independent, $Var(\sum X_i) = \sum Var(X_i)$.
- **Sum of Vars**: $\text{Var}\left(\sum_{i=1}^{n} X_i\right) = \sum_{i=1}^{n} \text{Var}(X_i) + 2 \sum_{i<j} \text{Cov}(X_i, X_j)$
- 



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

