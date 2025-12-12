---
tags:
  - probability-theory
aliases:
  - Total Probability Theorem
  - Partition Theorem
status: good_enough
created: 2025-12-11 13:27
---
### Law of Total Probability
The Law of Total Probability provides a method to calculate the probability of an event $E$ by conditioning on a random variable $Y$. It expresses the total probability as a weighted average of conditional probabilities. 

_Definition:_
$$P(E) = E[P(E|Y)] $$
_Expansion (Discrete $Y$):_
$$P(E) = \sum_y P(E|Y=y)P(Y=y) $$
_Expansion (Continuous $Y$):_
$$P(E) = \int_{-\infty}^{\infty} P(E|Y=y)f_Y(y) dy $$




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

