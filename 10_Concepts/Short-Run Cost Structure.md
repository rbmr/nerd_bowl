---
tags:
  - production-theory
  - economics/micro
aliases: []
status: good_enough
created: 2025-12-10 00:04
---
### Short-Run Cost Structure
In the [[Production Horizons#The Short Run|Short Run]], the firm operates with at least one fixed [[Factors of Production|input]] and one variable input. The total cost of production is the sum of payments to the fixed factors and payments to the variable factors. 

#### Total Cost
Let:
- $Q$: Quantity of output per unit of time.
- $K_0$: Fixed amount of capital.
- $L_1$: Quantity of labour required to produce $Q$.
- $r$: Rental price per unit of capital.
- $w$: Hourly wage rate per unit of labour.

**Fixed Cost (FC)**: Costs that do no vary with output
$$
FC=rK_{0}
$$
**Variable Cost (VC):** Costs derived from the variable factor needed for a specific output level.
$$
VC_{Q_{1}} = wL_{1}
$$
**Total Cost(TC):** The sum of fixed and variable costs
$$
TC_{Q_{1}}=VC_{Q_{1}}+FC
$$

#### Average Cost
**Average Fixed Cost (AFC):** Fixed cost per unit of output.
$$
AFC_{Q_{1}} = \frac{FC}{Q_{1}}=\frac{rK_{0}}{Q_{1}}
$$
**Average Variable Cost (AVC):** Variable cost per unit of output.
$$
AVC_{Q_{1}} = \frac{VC_{Q_{1}}}{Q_{1}}=\frac{wL_{1}}{Q_{1}}
$$

**Average Total Cost (ATC):** Total Cost per unit of output
$$
ATC_{Q_{1}}=\frac{TC_{Q_{1}}}{Q_{1}} = AFC_{Q_{1}}+AVC_{Q_{1}}
$$

#### Marginal Cost
Marginal cost is the change in total cost resulting from producing an additional unit of output. Since fixed costs are constant, marginal cost is determined solely by chages in variable cost. 
$$MC_{Q_1} = \frac{\Delta TC_{Q_1}}{\Delta Q} = \frac{\Delta VC_{Q_1}}{\Delta Q}$$
$$MC = \frac{\partial TC}{\partial Q} = \frac{\partial VC}{\partial Q}$$

**Properties**
- **Law of Diminishing Returns**: The shape of the variable cost curve is determined by the short-run production function. 
	- Concavity: in the region of increasing returns to the variable input, VC at a diminishing rate (concave)
	- Convexity: In the region of diminishing returns, VC grows at an increasing rate (convex)
- **AFC Asymptotes:** The AFC curve is a rectengular hyperbola. It approaches infinitiy as $Q\rightarrow {0}$, and approaches zero as $Q\rightarrow \infty$.
- **ATC and AVC divergences:** The vertical distance between ATC and AVC is exactly AFC. Since AFC declines continuously, ATC and AVC converge as output increases but never touch. 

#### Geometry of Cost Curves
The Geometric relationships between the curves are precise. 
- The MC curve intersects both the ATC curve and the AVC curve at their respective minimum points
- Slope relationship:
	- When $MC < ATC$, ATC is falling.
	- When $MC > ATC$, ATC is rising.
	- (This applies to AVC as well).



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

