---
tags:
  - probability-theory/stochastic-processes
  - probability-theory/markov-chains
aliases:
  - Class of States
  - Equivalence Class
status: good_enough
created: 2025-12-11 19:48
---
### Communication Class of States
The concept of communication divides the state space of a Markov Chain into separate, non-overlapping sets called classes. Two states $i$ and $j$ belong to the same class if and only if $i \leftrightarrow j$ (they communicate).
- **Disjoint Partition:** Any two classes are either identical or disjoint. A state cannot belong to two different classes.
- **Property Sharing:** Key properties such as recurrence, transience, and periodicity are **class properties**. If one state in a class has the property, all states in the class share it.

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

