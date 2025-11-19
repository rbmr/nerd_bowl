# Unfinished Concepts
```dataview
TABLE status as "State", file.folder as "Location"
FROM "10_Concepts"
WHERE status != "perfect"
SORT status ASC
```

# Unlinked Concepts
```dataview
TABLE status, file.ctime as "Created"
FROM "10_Concepts"
WHERE !contains(file.inlinks.file.folder, "15_MOCs")
SORT file.name ASC
```
