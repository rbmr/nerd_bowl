---
tags:
  - economics/micro
  - utility-functions
  - decision-theory
  - game-theory
aliases: []
status: good_enough
created: 2025-12-08 13:52
---
### Utility Theory
Utility Theory posists that preferences can be represented by a mathematical function $U(X,Y)$, which assigns a numerical value to every possible consumption bundle. 

#### Ordinal vs. Cardinal Utility
- **Ordinal Utility:** The standard approach in modern microeconomics. The specific numerical values are arbitrary; only the **ranking** (order) of bundles matters. We can say Bundle A is preferred to Bundle B, but not "by how much".
- **Cardinal Utility:** Assumes the magnitude of utility difference is meaningful (e.g., "A provides twice as much satisfaction as B"). This is generally not required for solving standard consumer choice problems.

### Expected Utility Theory
The Expected Utility Model, advanced by John von Neumann and Oskar Morgenstern, posits that rational agents choose between uncertain alternatives by maximizing **expected utility**, rather than expected monetary value.

The Expected Utility ($EU$) is the [[Expected Value]] of $U(M)$ for event or monetary value $M$.
$$
EU=E[U(M)]
$$

The Expected utility model requires a cardinal utility approach, not simply ordinal utility rankings.

#### Certainty Equivalent
The certainty equivalent value of a gamble is the sum of money for which an individual is indifferent between receiving that guaranteed sum and taking the gamble. 

For a gamble $G$, the Certainty Equivalent ($CE$) is the wealth level $M_{ce}$ such that:
$$U(M_{ce}) = EU_G$$
See [[RIsk Attitudes]].

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

