---
tags:
  - probability-theory
aliases:
  - CDF
  - Cumulative Distribution Function
status: good_enough
created: 2025-12-11 13:17
---
### Cumulative Distribution Function
The Cumulative Distribution Function (CDF), denoteed $F(x)$, characterizes the probability distribution of a random variable $X$ (discrete or continuous) by specifying the probability that $X$ is less than or equal to a value $x$. 

_Definition:_
$$F(b) = P\{X \le b\} $$
for $-\infty < b < \infty$.
#### Properties
- **Monotonicity:** $F(b)$ is non-decreasing.
- **Limits:** $\lim_{b \to \infty} F(b) = 1$ and $\lim_{b \to -\infty} F(b) = 0$.
- **Right-Continuity:** $F(x)$ is continuous from the right.

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

