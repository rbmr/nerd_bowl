Sets
- Set $S$: a collection of distinct objects.
- An object $x$ is an element (or member) of $S$, if $S$ contains the object. Denoted $x \in S$. 
- A set $A$ is a **subset** of set $B$ if every element in $A$ is also an element of $B$. Denoted $A \subseteq B$.
- The **empty** Set $\emptyset$ is the set that contains no elements.
- The **universal** set $U$ is the set containing all elements within a specific context.

Set operations 
- The **cardinality** of a set $S$ is the number of elements in the set. Denoted $|S|$.
- The **power set $\mathcal{P}(A)$** of a set $A$ is the set of all possible subsets of $A$.
- **Cartesian product ($A \times B$)** is the set of all possible ordered pairs where the first element is from $A$ and the second is from $B$.
- **Union ($A \cup B$):** The set of all elements that are in set $A$, or in set $B$, or in both.
- **Intersection ($A \cap B$):** The set of all elements that are in **both** set $A$ and set $B$.
- **Complement ($A^c$ or $A'$):** The set of all elements in the universal set ($U$) that are **not** in set $A$. This is the same as $U \setminus A$.
- **Difference ($A \setminus B$ or $A - B$):** The set of all elements that are in set $A$ but **not** in set $B$. This is the same as $A \cap B^c$.

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