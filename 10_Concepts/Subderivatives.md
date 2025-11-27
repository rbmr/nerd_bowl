---
tags:
  - topic/calculus
  - topic/optimization
aliases: []
status: good_enough
created: 2025-11-27 11:45
---
# Subderivatives
### Subgradients
When a function is continuous, but not differentiable, the gradient is undefined. However, for convex functions, we can generalize the concept of a derivative using subgradients. 
For a smooth convex function, the tangent plane touches the graph at one point and lies below the graph everywhere else, and there is only one such plane for each point. For non-smooth convex function, a point might have multiple of those planes. The slopes of all these valid planes form the subdifferential. 

A vector $r \in \mathbb{R}^n$ is a **subgradient** of a convex function $f: \mathbf{X} \rightarrow \mathbb{R}$ at $x$ if:
$$
f(y) \ge f(x) + r^T (y-x) \quad \forall y \in \mathbf{X}
$$

The subdifferential $\partial f(x)$ is the set of all subgradients at $x$. If $f$ is differentiable at $x$ the set only contains the gradient, otherwise it contains a range of values. 

#### Finding the subdifferential
To find the subdifferential of complex functions, we use specific rules to combine simpler ones:
- **Scalar Multiplication:** $\partial (\alpha f)(x) = \alpha \partial f(x)$ for $\alpha \ge 0$.
- **Summation ([[10_Concepts/Minkowski Sum|Minkowski Sum]]):** $\partial (f+g)(x) = \partial f(x) + \partial g(x)$.
- Maximum ([[10_Concepts/Convex Hull|Convex Hull]]): If $f(x) = \max\{g(x), h(x)\}$, and at a specific point $x$, $g(x) = h(x)$ (the functions intersect): $\partial f(x) = \text{conv}(\partial g(x) \cup \partial h(x))$

---

# Related
```dataviewjs
// Get the tags of the current file
const currentTags = dv.current().file.tags;

// List pages from "10_Concepts"
dv.list(dv.pages('"10_Concepts"')
    .where(p => 
        // 1. Exclude the current file
        p.file.name != dv.current().file.name &&
        // 2. Check if ANY tag in the candidate page exists in currentTags
        p.file.tags.some(t => currentTags.includes(t))
    )
    .limit(10)
    .file.link
)
```

### Direct Links to this document
```dataview
TABLE file.folder AS "Context"
FROM [[#]]
WHERE file.folder != "10_Concepts"
SORT file.folder ASC
```

