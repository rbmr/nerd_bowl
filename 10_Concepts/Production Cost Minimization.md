---
tags:
  - topic/optimization
  - production-theory
  - economics/micro
aliases: []
status: good_enough
created: 2025-12-10 10:43
---
### Production Cost Minimization
Cost minimization is the problem of determining the specific combination of inputs, that produces a target level of output at the lowest possible total expenditure. 
$$\min_{K,L} \ rK + wL$$
$$\text{subject to } F(K,L) = Q_0$$


#### Tangency Condition
For an interior solution, cost is minimized where the [[Isocost Line]] is tnagent to the [[Isoquant]] curve. At this point, the slope of the Isoquant ([[Marginal Rate of Technical Substitution|MRTS]]) equals the slope of the Isocost Line. 
$$MRTS = \frac{MP_L}{MP_K} = \frac{w}{r}$$

#### [[Equimarginal Principle]]
Rearranging the tangency condition yields the "bang-for-buck" condition:
$$\frac{MP_L}{w} = \frac{MP_K}{r}$$
_Interpretation:_ At the optimum, the extra output obtained from the last unit of currency (e.g., euro) spent on each input must be equal across all inputs.

#### The Lagrangian Method
To solve this analytically, define the [[Lagrangian Function]] (LG):
$$LG = wK + rL + \lambda[F(K,L) - Q_0]$$
_Where $\lambda$ (Lagrange multiplier) represents the marginal cost of producing an extra unit of output (shadow price of the constraint)._ 31

First-order conditions (FOCs):
1. $\frac{\partial LG}{\partial K} = r - \lambda \frac{\partial F}{\partial K} = 0 \implies r = \lambda MP_K$
2. $\frac{\partial LG}{\partial L} = w - \lambda \frac{\partial F}{\partial L} = 0 \implies w = \lambda MP_L$
3. $\frac{\partial LG}{\partial \lambda} = F(K,L) - Q_0 = 0$    

Dividing (2) by (1) recovers the standard tangency condition:
$$\frac{w}{r} = \frac{MP_L}{MP_K}$$ 


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

