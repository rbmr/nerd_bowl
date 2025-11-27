---
tags:
  - topic/setTheory
aliases: []
status: in_progress
created: 2025-11-27 11:37
---
# Convex Hull

## Summary
The Convex Hull is the smallest convex set containing the union. Essentially, it "fills in the gap" between the subgradients of the intersecting functions.

## Details

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

