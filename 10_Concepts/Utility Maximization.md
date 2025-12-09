---
tags:
  - topic/optimization
  - economics/micro
  - utility-functions
aliases: []
status: good_enough
created: 2025-12-08 14:27
---
### Utility Maximization
Utility Maximization is the process by which a rational consumer chooses the best bundle. 

#### Tangency Condition
For smooth, convex [[Indifference Curves]], the optimal bundle for an interior solution occurs at the point of tangency between the budget line and an indifference curve. 

At this point, the slope of the indifference curve (MRS) equals the absolute slope of the budget line (Price ratio):
$$
MRS=\frac{P_{X}}{P_{Y}}
$$

The rate at which the consumer is willing to trade X for Y is exactly equal to the rate at which the market allows them to trade X for Y. 


![[Equimarginal Principle#Equimarginal Principle (Gossen's Second Law) (Consumer Theory)]]

#### Lagrangian Optimization (applied to economics)
Using the [[Mathematical Optimization#Constrained Optimization|constrained optimization]] solving method that uses Lagrangian multipliers to turn constrained problems into unconstrained problems, we can maximize utility with [[Budget Constraint]]s. 

See [[Lagrangian Function#Definition]].
##### The Objective Function
The Lagrangian function ($\mathcal{L}$) is defined as:
$$\mathcal{L} = U(X, Y) - \lambda(P_X X + P_Y Y - M)$$
Where:
- $U(X, Y)$ is the utility function.
- $\lambda$ (Lambda) is the Lagrangian Multiplier.
- $(P_X X + P_Y Y - M)$ is the budget constraint set to zero.

##### First-Order Conditions
To find the maximum, we take the partial derivatives with respect to $X$, $Y$, and $\lambda$ and set them to zero:
1. $\frac{\partial \mathcal{L}}{\partial X} = \frac{\partial U}{\partial X} - \lambda P_X = 0 \implies MU_X = \lambda P_X$
2. $\frac{\partial \mathcal{L}}{\partial Y} = \frac{\partial U}{\partial Y} - \lambda P_Y = 0 \implies MU_Y = \lambda P_Y$
3. $\frac{\partial \mathcal{L}}{\partial \lambda} = M - P_X X - P_Y Y = 0$ (Recovering the budget constraint)

##### Interpretation of the Lagrange Multipliers
The Lagrangian Multiplier $\lambda$ represents the **Marginal Utility of Income** (often called the shadow price of the budget constraint).
From the FOCs, we can see:
$$
\lambda = \frac{MU_X}{P_X} = \frac{MU_Y}{P_Y}
$$
It measures how much the maximum utility would increase if the budget constraint ($M$) were relaxed by one unit (i.e., if income increased by €1). It represents the extra utility gained from the last unit of currency spent.

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

