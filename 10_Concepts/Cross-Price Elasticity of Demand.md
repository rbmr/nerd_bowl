---
tags:
  - economics/micro
  - quant-finance
aliases: []
status: good_enough
created: 2025-12-08 17:46
---
### Cross-Price Elasticity of Demand
Cross-Price Elasticity of Demand is a measure of the responsiveness of the quantity demanded of one good to a small change in the price of another good.

For any two goods $X$ and $Z$:
$$\epsilon_{XZ} = \frac{\Delta Q_X / Q_X}{\Delta P_Z / P_Z}$$

Where:
- $\epsilon_{XZ}$: Cross-price elasticity of demand for good X with respect to price of Z.
- $\Delta Q_X$: Small change in quantity of X.
- $\Delta P_Z$: Small change in price of Z.

#### Classifications
Unlike own-price elasticity, cross-price elasticity can be positive or negative.
- **Substitutes:** $\epsilon_{XZ} > 0$. A rise in the price of Z increases the demand for X    
- **Complements:** $\epsilon_{XZ} < 0$. A rise in the price of Z reduces the demand for X


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

