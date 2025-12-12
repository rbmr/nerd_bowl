---
tags:
  - economics/micro
aliases: []
status: good_enough
created: 2025-12-10 19:50
---
### Spatial Model of Product Differentiation
The Spatial Model, often visualized as the "Circle Model" (Salop model), analyzes product differentiation through the lens of geographic location or product characteristic "distance". It assumes consumers face "transportation costs" (either literal travel costs or disutility from a product not matching their ideal preferences).
#### Model Setup & Assumption
- **Market Space:** A circular loop with circumference $C$ (often normalized to 1).
- **Population ($L$):** Consumers are distributed uniformly around the circle.
- **Firms ($N$):** Firms are spaced evenly around the circle. Distance between adjacent firms is $1/N$.
- **Costs:**
    - **Fixed Cost ($F$):** Start-up cost per location
    - **Marginal Cost ($M$):** Constant variable cost per unit.
    - **Transport Cost ($t$):** Cost per unit of distance traveled by the consumer.

#### Trade-off: Transport Costs vs. Economies of Scale
The optimal number of firms is determined by minimizing the total social cost, which is the sum of:
1. **Total Transport Costs ($C_{trans}$):** Decreases as the number of firms ($N$) increases, because consumers are closer to a provider.
    - Average round-trip distance $= 1/2N$.
    - $C_{trans} = t \times L \times \frac{1}{2N}$.
2. **Total Production Costs ($C_{meals}$):** Increases as $N$ increases due to fixed costs.
    - $C_{meals} = N \times F + L \times M$.

#### Optimal Number of Firms ($N^*$)
To find the optimal variety (number of locations), we minimize the sum of costs ($C_{trans} + C_{meals}$) with respect to $N$.
- We equate the marginal benefit of adding a firm (reduced transport costs) to the marginal cost of adding a firm (fixed cost $F$).
- Derivation:
$$N^* = \sqrt{\frac{tL}{2F}}$$

**Implications:**
- **$N^*$ increases with $t$:** If transport costs (or preference intensity) are high, more variety/locations are optimal.
- **$N^*$ increases with $L$:** Higher population density supports more firms.
- **$N^*$ decreases with $F$:** High fixed costs lead to fewer firms (standardization).


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

