---
tags:
  - production-theory
  - economics/micro
aliases: []
status: good_enough
created: 2025-12-10 10:30
---
### Duality of Production and Cost
Duality in [[Production Theory]] refers to the intrinsic mathematical relationship between physical productivity measures ([[Marginal Product]], [[Average Product]]) and Monetary cost measures ([[Short-Run Cost Structure|Marginal Cost, Average Variable Cost]]). The shape of cost curves is a direct reflection of the shape of productivity curves. 

Let:
- $w$: Fixed wage rate.
- $MP$: Marginal Product of the variable factor.
- $AP$: Average Product of the variable factor.
- $\Delta L$: Change in labor.
- $\Delta Q$: Change in output.

**Inverse Relationship of MC and MP**
Marginal Cost is the cost of the additional labor needed to produce one extra unit of output.

From the definition of MC:
$$MC = \frac{\Delta VC}{\Delta Q} = \frac{w\Delta L}{\Delta Q}$$
Since Marginal Product $MP = \Delta Q / \Delta L$, substituting $1/MP = \Delta L / \Delta Q$ yields:
$$MC = \frac{w}{MP}$$
_Implication:_ When Marginal Product is at its maximum, Marginal Cost is at its minimum.

**Inverse Relationship: AVC and AP**
Average Variable Cost is the labor cost per unit of output.
$$AVC = \frac{VC}{Q} = \frac{wL}{Q}$$
Since Average Product $AP = Q / L$, substituting $1/AP = L / Q$ yields:

$$AVC = \frac{w}{AP}$$
_Implication:_ When Average Product is at its maximum, Average Variable Cost is at its minimum.




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

