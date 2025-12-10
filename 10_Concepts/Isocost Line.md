---
tags:
  - economics/micro
  - production-theory
aliases: []
status: good_enough
created: 2025-12-10 10:39
---
### Isocost Line
An Isocost line represents the locus of all combinations of [[Factors of Production|inputs]] that a firm can purchase for a specific, fixed total expenditure level given constant input prices. It is the production analogue to the consumer's [[Budget Constraint|budget constraint]]. 

Let:
- $C$: Total cost/expenditure.
- $r$: Price of capital.
- $w$: Price of labour.
    
The equation for the isocost line is:
$$C = rK + wL$$
Solving for $K$ to find the intercept-slope form:
$$K = \frac{C}{r} - \frac{w}{r}L$$
_Where $C/r$ is the vertical intercept and $-w/r$ is the slope.

#### Properties & Dynamics
- Slope: The slope is the negative ratio of input prices:
$$Slope = -\frac{w}{r}$$
    This represents the market rate of exchange between labor and capital—how much capital must be given up to employ one more unit of labor while keeping total cost constant
- **Shift vs. Rotation:**
    - A change in total expenditure $C$ shifts the line parallel to itself (outward for higher cost, inward for lower).
    - A change in relative factor prices ($w$ or $r$) changes the slope of the line.

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

