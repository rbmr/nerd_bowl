---
tags:
  - economics/micro
aliases: []
status: good_enough
created: 2025-12-08 18:54
---
### Tax Incidence
Tax Incidence analysis examines the ultimate distribution of the burden of a tax between buyers and sellers, distinguishing who is legally responsible for paying the tax and who economically bears the cost. 

A fundamental proposition in rational choice theory is that the **legal incidence** (the party from whom tax is collected) has no effect on the **economic incidence** (actual division of tax burden):
- **Equivalence:** The equilibrium quantity, the price paid by the buyer, and the price received by seller, are identical regardless of whether the tax is levied on the buyer or the seller.
- If a tax on sellers is added, the [[Market Supply|supply function]] is shifted upward. If tax on buyers is added, the [[Market Demand|demand function]] is shifted downward. In both scenarios, the market adjusts to a new equilibrium where the "tax wedge" (the difference between what buyers and sellers receive) is exactly $T$.

#### Mathematical Formulation
The total tax burden is shared between the buyer and the seller.
- Let $P^*$ be the pre-tax equilibrium price.
- Let $P_1^*$ be the new equilibrium price paid by the buyer.
- Let $T$ be the tax per unit.

**The Seller's Share** ($t_s$) is the reduction in the net price received by the seller divided by the total tax:
$$t_s = \frac{P^* - (P_1^* - T)}{T}$$
Where:
- $P_1^* - T$ represents the net price received by the seller after the tax.

**The Buyer's Share** ($t_b$) is the increase in the total price paid by the buyer divided by the total tax:
$$t_b = \frac{P_1^* - P^*}{T}$$
Where:
- $P_1^*$ represents the price paid by the buyer including the tax.

**Burden Identity:** The sum of the shares always equals 1 (100% of the tax):
$$t_s + t_b = 1$$

#### Elasticity rule
The distribution of the tax burden depends on the relative [[Price Elasticity of Demand|price elasticities of supply and demand]], not on the desires of policymakers. The burden tends to fall most heavily on the side of the market that is least able to avoid it (i.e., the side with fewer substitutes).
- **Inelastic Demand:** If demand is highly price inelastic (consumers have no ready substitutes), the market price rises by nearly the full amount of the tax. The buyer bears the majority of the burden ($t_b \approx 1$).
- **Elastic Demand:** If demand is highly price elastic (consumers have ready substitutes), the market price rises very little. The seller bears the majority of the burden ($t_s \approx 1$).

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

