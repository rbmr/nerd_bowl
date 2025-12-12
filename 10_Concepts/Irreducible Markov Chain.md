---
tags:
  - probability-theory/stochastic-processes
  - probability-theory/markov-chains
aliases:
  - Irreducible chain
status: good_enough
created: 2025-12-11 19:46
---
### Irreducible Markov Chain
A markov chain is irreducible if there is only one communication class. Thus, if all states communicate with each other. 
- **Universal Reachability:** From any starting state, it is possible to eventually reach any other state in the system.
- **Shared Fate:** In a finite-state irreducible chain, all states must be recurrent. It is impossible for an irreducible finite chain to consist solely of transient states.
- **Limiting Probabilities:** An irreducible, aperiodic, positive recurrent chain is called **ergodic** and possesses unique limiting probabilities independent of the initial state.


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

