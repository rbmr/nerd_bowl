---
tags:
  - economics/micro
  - production-theory
aliases: []
status: good_enough
created: 2025-12-09 22:27
---
### Returns to Scale
Returns to sclae is a [[Production Horizons#The Long Run|long-run]] technical property of a [[Production Functions|production function]] that describes how output responds when all inputs are increased by exactly the same proportion. 

Mathematically, let $c > 1$ be a scalar multiplier for inputs. The nature of returns to scale is determined by the relationship between $F(cK, cL)$ and $cF(K, L)$.

#### Categories of Returns
1. I**ncreasing Returns to Scale (Economies of Scale)**:
    A proportional increase in inputs yields a more than proportional increase in output.
$$F(cK, cL) > cF(K, L)$$    
    _Implication:_ Often results from specialization (division of labor) or volume/surface area relationships in physical capital.    
2. **Constant Returns to Scale**:    
    A proportional increase in inputs yields an exactly proportional increase in output.
$$F(cK, cL) = cF(K, L)$$
    _Implication:_ Size is neutral; large firms have no inherent technical advantage over small firms.
3. **Decreasing Returns to Scale**:
    A proportional increase in inputs yields a less than proportional increase in output.
$$F(cK, cL) < cF(K, L)$$
	_Implication:_ Large size is a handicap. This is often attributed to organizational complexity or fixed unmeasured inputs (like managerial attention).    
#### Distinction from Diminishing Returns
It is crucial to distinguish Returns to Scale from the **[[Law of Diminishing Marginal Returns]]**.
- **Returns to Scale:** A Long-run concept where _all_ inputs vary proportionally.
- **Diminishing Returns:** A Short-run concept where _one_ input varies while others are fixed.
- _Note:_ A production function can simultaneously exhibit increasing returns to scale and diminishing marginal returns to a single factor.

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

