We shall use obsidian to organize all knowledge from the course CSE1205 Linear Algebra from the TU Delft. 

We divide knowledge into nodes. To keep the structure simple each node is either:
- a `definition`, 
- a `lemma`, 
- a `theorem`, 
- a `corollary`,
- an `algorithm`,
- or a `note` (to be used when a node doesn't fall in any other category)

A proof shall be listed alongside of its theorem or lemma. Properties of a definition may be listed alongside the definition. Examples are listed alongside the theorem, lemma, or definition aswell. When included, these sections will use standard Markdown headings for consistency and to allow for direct linking (e.g., `[[Theorem - Rank-Nullity#Proof]]`).
- `## Properties` (for Definitions)
- `## Proof` (for Theorems, Lemmas, Corollaries)
- `## Examples`

Each node becomes an independent file. We organize node dependencies using links between files. We shall never allow circular dependencies. 

Links are written in-line. For example: "The span of $S$ is the set of all possible linear combinations of the vectors in $S$", should have an in-line link to the definition of linear combination. Or a theorem, will have a link to the lemmas, definitions, and other theorems it relies upon. If another node is not directly mentioned, then it should not be referenced. Therefore every link is in-line.

File names are formatted as `NodeType - Name`, where:
- `NodeType` is the type of node (Definition, Theorem, Lemma, etc), equal to the tag.
- `Name` is the name of the node

Some file name example names are as follows:
- `Definition - Linear Combination`
- `Definition - Span`
- `Lemma - ...`
- `Theorem - ...`

For nodes without a formal name, `Name` shall be a short, unique summary of the statement. The goal is to make the file name easily discoverable and understandable from the link text.
- Good: `Theorem - Linear Dependence in R^m when n > m`
- Good: `Theorem - Uniqueness of Reduced Echelon Form`
- Avoid (Too Vague): `Theorem - A theorem about linear dependence`

We use the frontmatter at the top of every file to formally declare its metadata, specifically its `type` (e.g., `definition`, `theorem`) and its `topic` (e.g., `vector-spaces`). A node can and should be assigned multiple topics if it bridges concepts (e.g. the Invertible Matrix Theorem will have many `topic` tags). This structured data is essential, such that we can use plugins like Dataview to automatically query our entire knowledge base. 

To ensure `topic` tags are applied consistently, we will maintain a single `Note - Topic Taxonomy` file. This file serves as the official source of truth, listing every valid `topic` tag (e.g., `vector-spaces`, `eigenvalues`) along with a short description of the concepts it covers.

The file name prefix (`Definition -` ) and the frontmatter (`type: definition`) are intentionally redundant. The file name provides immediate human-readable context in links and file explorers. The frontmatter provides machine-readable metadata. Both must be used.

Our Maps of Content (MOCs) should list its topics using a topological ordering. This means no node is followed by a node it relies on. Given the aforementioned constraint "We shall never allow circular dependencies" this ordering always exists.

