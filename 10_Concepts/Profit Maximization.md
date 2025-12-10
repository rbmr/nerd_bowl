---
tags:
  - topic/optimization
  - economics/micro
aliases: []
status: good_enough
created: 2025-12-10 12:36
---
### Profit Maximization
The objective of a firm is to maximize [[Economic Profit]]. For any firm, including a monopolist, profit maximization occurs at the quantity $Q^*$ where the marginal revenue from selling an additional unit equals the marginal cost of producing it.
$$MC_{Q^*} = MR_{Q^*}$$
The Marginal Revenue curve must intersect the Marginal Cost curve _from above_. If MR intersects MC from below, the point represents a local minimum profit.
#### [[Production Horizons|Short-run]] conditions
To maximize profit, the firm produces at the output level $Q^*$ where Marginal Revenue equals [[Short-Run Cost Structure|Marginal Cost]], provided the MC curve is rising. Since $P=MR$ in [[Perfect Competition]]:
$$P = MC$$
- **Logic:** If $P > MC$, producing an extra unit increases profit. If $P < MC$, producing an extra unit decreases profit. Profit is maximized when the benefit of expansion equals the cost.
- **Constraint:** The intersection must occur on the **rising portion** of the Marginal Cost curve.

#### Shutdown Condition
In the short run, a firm should cease production ($Q=0$) if the market price falls below the minimum value of the Average Variable Cost curve.
$$P < \min(AVC)$$
- **Reasoning:** If $P < AVC$, the firm loses money on every unit of variable input used. By shutting down, the firm limits its loss to its Fixed Costs (FC).
- **Supply Curve Definition:** The competitive firm's short-run supply curve is defined as the rising portion of the MC curve that lies _above_ the minimum AVC.

#### Breakeven Point
The breakeven point is the price at which the firm earns zero economic profit (normal profit). This occurs where price intersects the minimum of the Average Total Cost curve.
$$P = \min(ATC)$$

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

