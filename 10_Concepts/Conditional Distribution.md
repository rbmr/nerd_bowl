---
tags:
  - probability-theory
aliases:
  - Conditional Probability
  - Conditional Expectation
  - Conditional Variance
status: good_enough
created: 2025-12-11 13:21
---
### Conditional Distribution
**Conditional Distributions** describe the probability behavior of a random variable $X$ given that another random variable $Y$ has taken a specific value $y$. This updates the probability model based on new information.

_Discrete Case (Conditional PMF):_
$$p_{X|Y}(x|y) = P\{X=x | Y=y\} = \frac{p(x,y)}{p_Y(y)} $$
_Continuous Case (Conditional PDF):_
$$f_{X|Y}(x|y) = \frac{f(x,y)}{f_Y(y)} $$
_Where:_
- $p(x,y)$ / $f(x,y)$: Joint PMF or PDF.
- $p_Y(y)$ / $f_Y(y)$: Marginal PMF or PDF of $Y$.

### Conditional Expectation
The expected value of $X$ computed with respect to the conditional distribution.
$$E[X|Y=y] = \begin{cases} \sum_x x p_{X|Y}(x|y) & \text{discrete} \\ \int_{-\infty}^{\infty} x f_{X|Y}(x|y) dx & \text{continuous} \end{cases} $$

### Conditional Variance
The variance of $X$ computed with respect to the conditional distribution.
$$Var(X|Y=y) = E[(X - E[X|Y=y])^2 | Y=y] $$
Or computationally:
$$Var(X|Y=y) = E[X^2|Y=y] - (E[X|Y=y])^2 $$

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

