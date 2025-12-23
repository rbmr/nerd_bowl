Sets
- A set $S$ is an unordered collection of distinct elements.
- If $x$ is an entity, and $S$ is a set, then $x \in S$ is a statement that is true if and only if $x$ is an element (or member) of the set $S$.
- A set $A$ is a **subset** of set $B$ if every element in $A$ is also an element of $B$. Denoted $A \subseteq B$.
- The **empty** set $\emptyset$ is the set that contains no elements.
- The **universal** set $U$ is the set containing all elements for a specific context. This context is called the domain of discourse.

Set builder notation
- Set builder notation is a method to define a set by describing the properties that members must satisfy, rather than listing the elements.
	- Notation: $\{x \mid P(x)\}$
	- The set of all elements $x$  for which the predicate $P(x)$ is true.
	- Example: $\{x \in \mathbb{N} \mid \exists k \in \mathbb{N} (x = 2k)\}$ defines the set of even natural numbers.

Set operations 
- Union of sets $A$ and $B$ are all elements in either $A$ or $B$ or both: $$A \cup B = \{x\mid x \in A \lor x \in B\}$$
- Intersection of sets $A$ and $B$ are all elements that are in both $A$ and $B$: $$A \cap B = \{x \mid x\in A \land x \in B \}$$
- Complement of set $A$ is all the elements in universal set that are not in $A$: $$A^c = A'=\{x \in U \mid x \not\in A\}=U \setminus A$$
- Difference of sets $A$ and $B$ are all elements of $A$ that are not in $B$: $$A \setminus B = A - B = \{x \in A \mid x \not\in B\} = A \cap B^c$$
- The power set of $A$ is the set of all possible subsets of $A$: $$\mathcal{P}(A)=\{x \mid x \subseteq A\}$$

![[Pasted image 20251113171353.png|400]]

Set laws
- **Commutative Laws:** The order doesn't matter for union or intersection.
    - $A \cup B = B \cup A$
    - $A \cap B = B \cap A$
- **Associative Laws:** The grouping doesn't matter for union or intersection.
    - $(A \cup B) \cup C = A \cup (B \cup C)$
    - $(A \cap B) \cap C = A \cap (B \cap C)$
- **Distributive Laws:** Union and intersection can be "distributed" over each other.
    - $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
    - $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
- **De Morgan's Laws:** These describe how to find the complement of a union or intersection.
    - $(A \cup B)^c = A^c \cap B^c$ (The complement of the union is the intersection of the complements).
    - $(A \cap B)^c = A^c \cup B^c$ (The complement of the intersection is the union of the complements).

Ordered collections
- A tuple is an ordered collection of elements.
	- Unlike sets: may contain duplicates, and order matters.
	- An ordered **pair** is a tuple of 2 elements.
	- An **n-tuple** is a tuple of $n$ elements.
- Cartesian product ($A \times B$) is the set of all possible ordered pairs where the first element is from $A$ and the second is from $B$. $$A \times B = \{(a, b) \mid a \in A \land b \in B\}$$
Relations
- A relation on sets $A$ and $B$ is a subset of the Cartesian product $A \times B$.
- A binary relation on $A$ is a subset of $A \times A$.
	- Notation: We often write $a R b$ to mean $(a,b) \in R$ (e.g., $x \le y$)25.
- Properties of binary relations:
	- Reflexive: $\forall a \in A, (a, a) \in R$
	- Symmetric: $\forall a, b \in A, a R b \to b R a$
	- Antisymmetric: $\forall a, b \in A, (a R b \land b R a) \to a = b$
	- Transitive: $\forall a, b, c \in A, (a R b \land b R c) \to a R c$

Functions
- Write this section

Cardinality
- The **cardinality** of a set $S$ is the number of elements in the set. Denoted $|S|$.

