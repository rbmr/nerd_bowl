---
tags:
  - probability-theory
aliases:
  - Memoryless
  - Forgetfulness Property
status: good_enough
created: 2025-12-11 13:37
---
### Memoryless Property
A unique property of specific probability distributions where the conditional probability of a future event is independent of the elapsed time. The past history of the variable provides no information regarding its future behavior.

Mathematically, a random variable $X$ is memoryless if for all $s, t \ge 0$:
$$P(X > s + t \mid X > t) = P(X > s) $$
_Where:_
- $X$: A random variable (typically interpreting "lifetime" or "waiting time").
- $t$: The time already elapsed.
- $s$: The additional time duration.

Equivalent formulation:
$$P(X > s + t) = P(X > s)P(X > t) $$
In the continuous case, this property applies only to the **Exponential Distribution**.
In the discrete case, the **Geometric Distribution** is the only distribution with this property.

**Intuition:** "Used is as good as new." If a component has lasted $t$ hours, the probability it lasts another $s$ hours is exactly the same as the probability a brand new component lasts $s$ hours.

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

