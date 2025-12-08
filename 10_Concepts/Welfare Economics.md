---
tags:
  - economics/micro
  - utility-functions
aliases: []
status: good_enough
created: 2025-12-08 20:25
---
### Welfare Economics
#### Consumer Surplus 
Consumer Surplus is a monetary measure of the benefit a consumer derives from a transaction, defined as the difference between the maximum amount a consumer is willing to pay for a good, and what they actually pay. 
##### Geometric Measurement
- **Calculation:** It is the area bounded **below** the individual's ordinary ([[Marshallian Demand Curve]]) demand curve and **above** the market price line.
- **Marginal Valuation:** The height of the demand curve at any quantity represents the consumer's willingness to pay for that specific incremental unit.
##### Limitations
- **Bias:** CS assumes the value of money remains constant. However, as consumers pay for successive units, they become poorer (income effect), potentially altering their willingness to pay for subsequent units.
- **Validity:** It is strictly correct only if the income effect is zero. For goods where income effects are non-negligible, CS creates a bias compared to precise welfare measures like Compensating Variation.

#### Compensating Variation
Compensating Variation (CV) is the amount of additional income a consumer would need to be given **after** a price increase to return them to their original level of utility ($U_0$).
##### Geometric Representation
- **Budget Constraint Shift:** It is the vertical distance between the new budget constraint ($B_1$) and a hypothetical budget constraint ($B'$) that is parallel to $B_1$ but tangent to the original indifference curve ($I_0$).
- **Demand Curve:** It is measured as the area under the **income-compensated ([[Hicksian Demand Curve]]) demand curve**.
##### Relationship to Willingness to Accept (WTA)
CV corresponds to the consumer's **Willingness to Accept** compensation for a negative change (like a price rise or the loss of a facility).


#### Equivalent Variation
Equivalent Variation (EV) is the amount of income a consumer would be willing to pay **before** a price change to avoid the price increase effectively leaving them as well off as if the price increase had occurred.
##### Geometric Representation
- **Budget Constraint Shift:** It is the vertical distance between the original budget constraint ($B_0$) and a hypothetical budget constraint ($B'$) that is parallel to $B_0$ but tangent to the new indifference curve ($I_1$). 
##### Relationship to Willingness to Pay (WTP)
EV corresponds to the consumer's **Willingness to Pay** to avoid a negative change (or to secure a benefit).

#### Welfare Hierarchy for Price Increase (Normal Good)
When analyzing the welfare loss from a price increase for a [[Normal vs. Inferior Goods|normal good]]:
$$CV > \Delta CS > EV$$
- **Logic:**
    - $CV > \Delta CS$: The loss in Consumer Surplus underestimates the true welfare loss because it fails to account for the compensation required for the _extra_ units the consumer would have bought if compensated.
    - **WTA vs WTP:** For normal goods, the Willingness to Accept (CV) a loss is generally greater than the Willingness to Pay (EV) to avoid it, provided income effects are significant.
- **Small Income Effects:** If income effects are small, the three measures converge: $CV \approx \Delta CS \approx EV$.


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

