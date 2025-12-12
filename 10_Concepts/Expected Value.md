---
tags:
  - probability-theory
  - statistics
aliases:
  - Expectation
  - Mean
  - First Moment
  - E[X]
status: good_enough
created: 2025-12-08 22:01
---
### Expected Value
The Expected Value (or mean) of a Random Variable is the weighted average of all possible values the variable can take, where each value is weighted by its probability of occurrence. It represents the center of mass of the probability distribution.

_Discrete Case Definition:_
$$E[X] = \sum_{x:p(x)>0} x p(x) $$
_Continuous Case Definition:_
$$E[X] = \int_{-\infty}^{\infty} x f(x) \, dx $$
_Where:_
- $p(x)$: Probability mass function for the discrete case.
- $f(x)$: Probability density function for the continuous case.

**Linearity** Expectation is a linear operator. For constants $a$ and $b$, $E[aX+b]=aE[X]+b$. This extends to sums of random variables $E[\sum a_{i}X_i] = \sum a_{i}E[X_i]$. This property holds regardless of independence. 

#### Expectation of a Function
To find the expected value of a function of a random variable, $g(X)$, one does not need to derive the distribution of $g(X)$ first.
$$E[g(X)] = \begin{cases} \sum g(x)p(x) & \text{discrete} \\ \int g(x)f(x)dx & \text{continuous} \end{cases} $$


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

