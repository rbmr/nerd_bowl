We divide knowledge into nodes. To keep the structure simple each node is either:
- a `definition`, 
- a `lemma`, 
- a `theorem`, 
- a `corollary`,
- an `algorithm`,
- a `proof`,
- or a `note` (to be used when a node doesn't fall in any other category)

Each node is a bullet point using the following format
```
<NodeType> [- <Name>]: <Description>
``` 
where:
- `NodeType` is the capitalized node type (Definition, Theorem, Lemma, etc)
- `Name` is the name of the node. In case no clear name exists, it may be left out (as indicated by the square brackets). 

Bullet points shall be ordered such that any node is listed after any other node it may depend upon. For example the definition of span, is listed after the definition of a linear combination.
