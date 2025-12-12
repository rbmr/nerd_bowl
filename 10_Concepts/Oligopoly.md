---
tags:
  - economics/micro
aliases: []
status: good_enough
created: 2025-12-10 19:55
---
### Oligopoly
Oligopoly is a market structure dominated by a small number of firms. The defining characteristic of oligopoly is interdependence: the optimal decision of one firm depends directly on the decision of its rivals. 

#### Comparative Efficiency of Market Structures
The efficiency and outcomes of oligopolistic markets vary significantly based on the variable of competition (price vs. quantity) and the timing of decisions (simultaneous vs. sequential).

Summary of Equilibrium Outcomes (Assuming demand $P = a - bQ$ and $MC=0$):

| **Model**                              | **Industry Output (Q)** | **Market Price (P)** | **Industry Profit (Π)**  |
| -------------------------------------- | ----------------------- | -------------------- | ------------------------ |
| **Shared Monopoly** (Collusion)        | $Q_m = \frac{a}{2b}$    | $P_m = \frac{a}{2}$  | $\Pi_m = \frac{a^2}{4b}$ |
| **Cournot** (Quantity)                 | $\frac{4}{3} Q_m$       | $\frac{2}{3} P_m$    | $\frac{8}{9} \Pi_m$      |
| **Stackelberg** (Leader-Follower)      | $\frac{3}{2} Q_m$       | $\frac{1}{2} P_m$    | $\frac{3}{4} \Pi_m$      |
| **Bertrand** / **Perfect Competition** | $2 Q_m$                 | $0$                  | $0$                      |

**Ordering of Price and Output:**
- **Price:** $P_{Bertrand} < P_{Stackelberg} < P_{Cournot} < P_{Monopoly}$
- Quantity: $Q_{Monopoly} < Q_{Cournot} < Q_{Stackelberg} < Q_{Bertrand}$

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

