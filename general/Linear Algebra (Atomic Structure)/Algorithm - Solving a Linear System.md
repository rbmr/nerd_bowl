---
type: algorithm
topic: linear-systems
---
This is the general procedure for solving a system of linear equations:

1.  Write the [[Definition - Augmented Matrix|augmented matrix]] for the system.
2.  Use [[Definition - Elementary Row Operations|elementary row operations]] to row reduce the augmented matrix to an [[Definition - Echelon Form|echelon form]].
3.  Determine if the system is a [[Definition - Consistent and Inconsistent System|consistent system]]. If it is inconsistent (e.g., a row like `[0 ... 0 | c]` with $c \neq 0$ exists), stop; there is no solution.
4.  If the system is consistent, find the solution set by either:
    a.  Using backward substitution, or;
    b.  Continuing row operations to find the [[Definition - Reduced Echelon Form|reduced echelon form]].
5.  Express any [[Definition - Basic and Free Variables|basic variables]] in terms of any [[Definition - Basic and Free Variables|free variables]].