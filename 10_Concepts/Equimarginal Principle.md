---
tags:
  - production-theory
  - consumer-theory
  - economics/micro
aliases: []
status: good_enough
created: 2025-12-09 22:53
---
### Equimarginal Principle (Gossen's Second Law) (Consumer Theory)
By substituting $MRS = \frac{MU_X}{MU_Y}$  from [[Marginal Utility#Relationship to MRS]] into the [[Utility Maximization#Tangency Condition|tangency condition]], we derive the Equimarginal Principle:

$$\frac{MU_X}{MU_Y} = \frac{P_X}{P_Y} \implies \frac{MU_X}{P_X} = \frac{MU_Y}{P_Y}$$

**Interpretation:** At the optimal bundle, the [[Marginal Utility|marginal utility]] per unit of currency spent must be equal across all goods. If $\frac{MU_X}{P_X} > \frac{MU_Y}{P_Y}$, the consumer could increase total utility by shifting spending from Y to X.


### Equimarginal Principle (Production Theory)
The **Equimarginal Principle** (in the context of [[Production Theory|production]]) is an optimization rule for allocating a [[Scarcity|scarce]] resource across multiple productive activities. It states that to maximize total output, a resource should be allocated such that its **[[Marginal Product]] ($MP$)** is the same in every activity.

Let a resource $L$ be divided between Activity A and Activity B.
To maximize [[Total Product Curve|Total Product]] ($TP = TP_A + TP_B$):
$$MP_{L,A} = MP_{L,B}$$
This is the condition for an **Interior Solution**.

**[[Corner Solution]]** If the Marginal Product of the input is always higher in one activity than the other, the optimal strategy is to allocate all units of the input to the activity with the higher marginal product. 

##### Common Pitfalls
- **Average vs. Marginal:** A common error is allocating resources to equate **Average Product ($AP$)** rather than Marginal Product. This is incorrect because it ignores the opportunity cost of the resource (the output lost by moving the resource from an alternative use).



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

