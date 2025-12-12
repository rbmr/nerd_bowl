---
tags:
  - probability-theory
aliases:
  - Tower Property
  - Law of Iterated Expectations
  - Smoothing Property
status: good_enough
created: 2025-12-11 13:25
---
### Law of Total Expectation
The Law of Total Expectation states that the expected value of a random variable $X$ is the expected value of its conditional expectation given $Y$. 
_Universal Truth:_
$$E[X] = E[E[X|Y]] $$
_Expansion (Discrete $Y$):_
$$E[X] = \sum_y E[X|Y=y]P(Y=y) $$
_Expansion (Continuous $Y$):_
$$E[X] = \int_{-\infty}^{\infty} E[X|Y=y]f_Y(y) dy $$

This theorem allows calculating complex expectations by breaking the problem into simpler cases, solving for the mean in each case, and then averaging those means. 
$E[X]$ is simply the weighted average of the conditional means $E[X|Y=y]$.




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

