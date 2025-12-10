---
tags:
  - economics/micro
aliases: []
status: good_enough
created: 2025-12-10 13:03
---
### Producer Surplus
Producer surplus measures the benefit the firm derives from supplying its profit-maximizing level of output. It is the difference between the total revenue the firm receives and the minimum amount it would be willing to accept to produce that output ([[Short-Run Cost Structure|Total Variable Cost]]).

Producer Surplus is distinct from economic profit. It can be calculated in two equivalent ways.

**Method 1 - Profit plus fixed costs**
$$PS = \Pi + FC$$
$$PS = (TR - TC) + FC = TR - VC$$
- **Logic:** In the short run, a firm shuts down if it cannot cover variable costs. The surplus is the revenue generated over and above the variable costs required to produce.

**Method 2 - Geometric Area**
Producer surplus corresponds to the area above the Marginal Cost (Supply) curve and below the market price line, integrated over the quantity produced.
$$PS = \int_{0}^{Q^*} (P^* - MC(q)) \, dq$$
Where:
- $Q^*$ is the equilibrium quantity.
- $P^*$ is the market price.
- $MC(q)$ is the marginal cost function.

#### Average Producer Surplus
The aggregate producer surplus for a market is the sum of the producer surpluses of all participating firms. Geometrically, it is the area between the industry supply curve and the equilibrium price line.

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

