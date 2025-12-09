---
tags:
  - economics/micro
  - production-theory
aliases:
  - Fixed-Proportions Production Function
status: good_enough
created: 2025-12-09 22:44
---
### Leontief Production Function
The Leontief [[Production Functions|Production Function]], also known as the Fixed-Proportions Production Function, describes a production process where [[Factors of Production|inputs]] must be combined in a fixed ratio to produce output. There is zero substitutability between inputs.

The function is defined as: 
$$Q = \min(aK, bL)$$
Where:
- $Q$ is determined by the "limiting factor" (whichever of $aK$ or $bL$ is smaller).
- $a, b$ are parameters determining the efficiency/ratio of inputs.

#### Properties & Dynamics
- **Isoquant Shape:** The [[Isoquant]]s are L-shaped (right-angled).
- **Fixed Proportions:** Inputs are used most effectively only when $aK = bL$. Adding more of one input without the other yields zero additional output (Zero Marginal Product for the excess input).
- **Perfect Complements:** This function models inputs that are perfect complements.
- **[[Marginal Rate of Substitution|MRTS]]:**
    - Infinite on the vertical arm.
    - Zero on the horizontal arm.
    - Undefined at the cusp.

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

