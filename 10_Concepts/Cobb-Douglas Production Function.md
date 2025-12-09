---
tags:
  - economics/micro
  - production-theory
  - econometrics
aliases: []
status: good_enough
created: 2025-12-09 22:36
---
### Cobb-Douglas Production Function
The Cobb-Douglas Production Function is a widely used functional form that models the relationship between output and two or more inputs.

The standard two-input form is:
$$Q = mK^\alpha L^\beta$$
Where:
- $m$: A positive constant (often representing Total Factor Productivity or technology).
- $\alpha, \beta$: Parameters between 0 and 1 representing output elasticities.

#### Marginal Products
Using partial derivatives we can get the [[Marginal Product]]s.
For input $X$, $MP_{X}$ is defined as:
$$
MP_{X}=\frac{{\partial Q}}{\partial X} = \alpha mX^{\alpha-1}\cdot Y^\beta \cdot\dots
$$

#### Returns to Scale
The degree of [[Returns to Scale|returns to scale]] is determined by the sum of exponents:
- $\alpha + \beta > 1$: Increasing Returns to Scale.
- $\alpha + \beta = 1$: Constant Returns to Scale.
- $\alpha + \beta < 1$: Decreasing Returns to Scale.

#### Properties & Dynamics
- **Diminishing Marginal Returns:** Since $0 < \alpha, \beta < 1$, the marginal products diminish as the respective input increases (e.g., as $K$ rises, $K^{\alpha-1}$ falls).
- [[Marginal Rate of Technical Substitution]]:
$$MRTS = \frac{MP_L}{MP_K} = \frac{\beta K}{\alpha L}$$


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

