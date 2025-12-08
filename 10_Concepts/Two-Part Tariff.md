---
tags:
  - economics/micro
  - quant-finance
aliases: []
status: good_enough
created: 2025-12-08 21:04
---
### Two-Part Tariff
A **Two-Part Tariff** is a [[Pricing Strategies|pricing strategy]] where the consumer is charged two distinct fees for a single service:
1. A **Fixed Fee** (Lump-sum access or membership fee).
2. A **Per-Unit Fee** (Usage or quantity charge).
#### Objective: Surplus Extraction
The economic goal of a two-part tariff is to transfer consumer surplus from the buyer to the seller. By setting the per-unit price low (to encourage volume) and the fixed fee high (to capture the value of that volume), the seller can appropriate the surplus.
#### Optimal Pricing Logic
For a seller with market power and knowledge of the consumer's demand curve:
1. **Usage Fee ($P^*$):** Set equal to the [[Marginal Analysis|Marginal Cost]]($MC$). If the marginal cost of allowing an additional user/unit is zero, the usage fee should be zero.
    - _Reasoning:_ This maximizes the total area of surplus available to be captured (Efficiency).
2. **Fixed Fee ($F^*$):** Set equal to the total [[Welfare Economics#Consumer Surplus|Consumer Surplus]]($CS$) generated at the usage fee $P^*$.
    - _Reasoning:_ This is the maximum amount the consumer is willing to pay for "access" to the market at that price level before walking away (Individual Rationality constraint).
#### Mathematical Formulation
Given a consumer demand function $P(Q)$ and Marginal Cost $MC$:
$$\text{Usage Fee } (p) = MC$$
$$\text{Access Fee } (F) = \int_{0}^{Q^*} (P(Q) - p) \, dQ$$
Where $Q^*$ is the quantity demanded when $P = MC$.


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

