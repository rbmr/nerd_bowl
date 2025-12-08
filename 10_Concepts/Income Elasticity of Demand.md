---
tags:
  - consumer-theory
  - economics/micro
  - economics/macro
  - quant-finance
aliases: []
status: good_enough
created: 2025-12-08 17:37
---
### Income Elasticity of Demand
Income Elasticity of Demand is a measure of the responsiveness of purchase decisions to variations in average market income. It is defined as the percentage change in quantity demanded resulting from a 1 percent change in income. 
$$\eta = \frac{\Delta Q / Q}{\Delta Y / Y}$$

Also interpreted geometrically as:
$$\eta = \frac{Y}{Q} \frac{\Delta Q}{\Delta Y}$$
Where:
- $\eta$: Income elasticity of demand.
- $Y$: Average market income.
- $\Delta Y$: Small change in income.
- $\frac{\Delta Q}{\Delta Y}$: Slope of the **[[Engel Curve]]**.
- $\frac{Y}{Q}$: Slope of a ray from the origin to the point on the Engel Curve.
#### Classifications & Dynamics
The value of $\eta$ classifies goods based on the **Engel Curve** relationship:
- **[[Normal vs. Inferior Goods|Normal Good]]:** $\eta > 0$. Demand increases as income increases.
- **[[Normal vs. Inferior Goods|Inferior Good:]]** $\eta < 0$. Demand decreases as income increases.
- **Luxury:** $\eta > 1$. Consumption increases _more_ than in proportion to income (Slope of Engel curve > Slope of Ray).
- **Necessity:** $0 < \eta < 1$. Consumption increases _less_ than in proportion to income (Slope of Engel curve < Slope of Ray).

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

