---
tags:
  - economics/micro
  - production-theory
aliases: []
status: good_enough
created: 2025-12-09 20:04
---
### Marginal Product
The Marginal Product ($MP$) of a variable input is the change in total output resulting from a one-unit change in that input, whole holding all other inputs constant. It represents the slope of the [[Total Product Curve]]
at any given point. 

This concepts is almost identical (but then applied to production theory) to [[Marginal Analysis]]. The marginal product is the same as [[Marginal Utility]].
#### Mathematical Formula
- Discrete Change:
$$MP_L = \frac{\Delta Q}{\Delta L}$$
    Where $\Delta Q$ is the change in output and $\Delta L$ is the change in labor.
- Calculus (Continuous):
$$MP_L = \frac{\partial Q}{\partial L}$$
	The partial derivative of the production function with respect to the variable input.

#### Properties
- **Relationship to TP curvature:**
    - When TP is convex (increasing at increasing rate), $MP$ is increasing.
    - When TP is concave (increasing at diminishing rate), $MP$ is decreasing.
- **Maximum Point:** $MP$ reaches zero when the Total Product curve reaches its maximum
- **Negative Region:** $MP$ becomes negative when Total Product is declining (e.g., workers getting in each other's way).
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

