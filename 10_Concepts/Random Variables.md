---
tags:
  - probability-theory
aliases:
  - RV
  - Stochastic Variable
status: good_enough
created: 2025-12-11 12:51
---
### Random Variables
A Random Variable is a real-valued function defined on the sample space $S$ of an experiment. It maps outcomes of a random phenomenon to real numbers, allowing for the quantification of uncertainty. 

Let $S$ be the sample space of an experiment. A random variable $X$ is a function:
$$X: S \to \mathbb{R} $$
_Where:_
- $S$: The set of all possible outcomes of the experiment.
- $\mathbb{R}$: The set of real numbers.
- $X(s)$: The numerical value assigned to outcome $s \in S$.

**Discrete** Discrete Random variables take on a countable number of possible values
**Continuous** Random Variables take on a continuum of value (uncountable).



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

