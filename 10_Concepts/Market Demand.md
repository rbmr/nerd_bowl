---
tags:
  - topic/economics
  - topic/micro
  - quant-finance
  - demand-theory
aliases: []
status: good_enough
created: 2025-12-05 15:43
---
### Market Demand
Market Demand represent the aggregate quantity of a good or service that all consumers combined are willing and able to purchase at various price levels, holding all other factors constant. 

The fundamental characteristic of market demand is the **Law of Demand**, which posits an inverse relationship between price and quantity demanded: as the price falls, the quantity demanded increases, and conversely, as price rises, quantity demanded falls. 

#### Mathematical Representation
- **Horizontal Interpretation (Standard Demand Function):** to generate market demand, one must sum the [[Individual Demand|individual demand]] curves horizontally. This involves fixing a specific price and adding the quantities demanded by each consumer at that price: $Q^d_{market} = f(P) = \sum_{i=1}^{n} Q_i(P)$
	- **Identical Consumers:** If there are $n$ identical consumers each with demand curve $P = a - bQ_i$, the market demand is $P = a - (b/n)Q$.
- **Vertical Interpretation(Inverse Demand Function):** $P = f^{-1}(Q^d)$
- $Q^d$ is the quantity demanded.
- $P$ is the unit price.

#### Determinants of Demand (Shift Factors)
The position of the demand curve is determined by several factors. A change in any of these shifts the curve:
- Incomes: affects purchasing power (See [[10_Concepts/Normal vs. Inferior Goods]])
- Tastes: Cultural and temporal variations in preference.
- Prices of Related Goods: [[10_Concepts/Substitutes and Complements]]
- Expectations: Anticipation of future income or price changes.
- Population: Growth in the number of potential buyers increases demand. 
##### Shifts vs Movement
- **Change in Quantity Demanded**: A movement along the curve caused by a change in the price of the good itself.`
- **Change in Demand:** A shift of the entire curve caused by a change in a determinant other than the good's own pricing. 

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

