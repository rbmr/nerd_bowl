---
tags:
  - probability-theory
aliases:
  - Negative Exponential Distribution
status: good_enough
created: 2025-12-11 13:44
---
### Exponential Distribution
A random variable $X$ has an exponential distribution with parameter $\lambda$, denoted $X \sim \text{Exp}(\lambda)$, if its PDF is:
$$f(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases} $$
_Where:_
- $\lambda$: The rate parameter ($\lambda > 0$).
#### Key Characteristics
- **Parameters:**
    - **Expectation:** $E[X] = \frac{1}{\lambda}$ 13
    - **Variance:** $\text{Var}(X) = \frac{1}{\lambda^2}$ 14
    - **MGF:** $\phi(t) = \frac{\lambda}{\lambda - t}$ for $t < \lambda$ 15
- CDF:
$$F(x) = 1 - e^{-\lambda x}, \quad x \ge 0$$
#### Properties & Intuition
- **Memorylessness:** As detailed in [[Memoryless Property]], the remaining life of an exponential variable does not depend on its current age.
- **Minimum of Exponentials:** If $X_1, ..., X_n$ are independent exponential variables with rates $\lambda_i$, then $\min(X_i)$ is exponentially distributed with rate $\sum \lambda_i$. 


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

