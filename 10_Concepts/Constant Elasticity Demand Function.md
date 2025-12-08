---
tags:
  - economics/micro
  - demand-theory
aliases: []
status: good_enough
created: 2025-12-08 17:38
---
### Constant Elasticity Demand Function
A Constant Elasticity Demand Curve is a specific functional form of [[Market Demand|demand]] where the [[Price Elasticity of Demand|price elasticity]] remains identical at every combination of price and quantity, unlike linear demand curves where elasticity varies. 

The general form is:
$$P = \frac{k}{Q^{1/\epsilon}}$$
Where:
- $P$: Price.
- $Q$: Quantity.
- $k$: A positive constant.
- $\epsilon$: The absolute value of the price elasticity (often denoted as $\eta$ or defined such that $\epsilon > 0$ represents the magnitude).

**Verification:** Using the point-slope method for the specific case $P = \frac{2}{Q}$ (where $k=2, \epsilon=1$): The slope is $\frac{\partial P}{\partial Q} = -\frac{2}{Q^2}$. Substituting into the elasticity formula $\frac{P}{Q} \frac{1}{\text{slope}}$, the elasticity is always $-1$.

##### Special Case: Constant Expenditure
A demand curve given by $P = k/Q$ implies that $P \cdot Q = k$. This is a **Constant Expenditure Demand Curve**.
- **Property:** Total expenditure is constant ($k$) regardless of price.
- **Elasticity:** The price elasticity is unitary (-1) everywhere.


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

