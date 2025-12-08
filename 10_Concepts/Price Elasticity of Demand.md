---
tags:
  - economics/micro
  - demand-theory
  - quant-finance
aliases: []
status: good_enough
created: 2025-12-08 17:05
---
### Price Elasticity of Demand
The Price Elasticity of Demand is a quantitative measure of the responsiveness of purchase decisions to variations in price. Formally, it is defined as the percentage change in the quantity of a good demanded that results from a 1 percent change in its price. 

Because price and quantity generally move in opposite directions (Law of Demand), the price elasticity of demand will almost always be negative or zero. Economists frequently refer to the absolute value of elasticity to describe responsiveness. 

The general definition for price elasticity at a specific price and quantity is given by:
$$
\epsilon=\frac{{\Delta Q/Q}}{{\Delta P/P}}
$$
where:
- $\epsilon$ is the elasticity
- $Q$ is the quantity demanded
- $\Delta Q$: The change in quantity demanded.
- $P$: Current price.
- $\Delta P$: A small change in price.


This formula can be rewritten to interpret elasticity using the geometry of the demand curve, also known as the **point-Slope method**:
$$
\epsilon=\frac{P}{Q} \cdot \frac{1}{\frac{dP}{dQ}}=\frac{P}{Q}\cdot \frac{dQ}{dP}=\frac{P}{Q} \cdot f'(P)
$$
where:
- Q is the quantity demanded
- P is the current price
- $\frac{dP}{dQ}$ is the **slope of the demand curve** as typically graphed (with Price on the vertical axis and Quantity on the horizontal axis).
- $\frac{dQ}{dP}$ is the **rate of change** of quantity demanded with respect to price (the inverse of the geometric slope).
- $f'(P)$ is the **first derivative** of the demand function $Q=f(P)$, which is mathematically identical to $\frac{dQ}{dP}$.

#### Properties & Classifications
- **Elastic:** Demand is elastic if the price elasticity is less than $-1$ (absolute value $>1$)
- **Inelastic:** Demand is inelastic if the price elasticity is greater than $-1$ (absolute value $<1$)
- **Unit Elastic:** Demand is unit elastic if the price elasticity is exactly equal to $1$
- **Perfectly Elastic:** The demand curve is horizontal (slope is zero), implying infinite elasticity.
- **Perfectly Inelastic:** The demand curve is vertical, implying elasticity is zero everywhere. 
- **Linear Demand Dynamics:** On a standard downward-sloping linear demand curve:
	- The midpoint has unitary elasticity
	- Points above the midpoint are elastic
	- Points below the midpoint are inelastic

#### Determinants of Elasticity
- **Substitution Possibilities:** The absolute value of price elasticity rises with the availability of attractive substitutes.
- **Budget Share:** The smaller the share of total expenditure accounted for by a good, the less elastic demand will be (due to negligible income effects).
- **Direction of Income Effect:** Normal goods have higher elasticity than inferior goods because the income effect reinforces the substitution effect for normal goods.
- **Time:** Demand is more elastic in the long run than in the short run as consumers have more time to adjust habits and commitments.

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

