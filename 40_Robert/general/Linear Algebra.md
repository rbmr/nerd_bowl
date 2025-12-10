
Linear Systems
- A Linear system is a set of two or more linear equations that share the same variables. The solution to a linear system is a set of values for these variables that makes all equations in the system true at the same time. 
- A Linear system can only have zero, one, or infinitely many solutions.
- Two linear systems with the same solution set are called equivalent systems.
- The augmented matrix rewrites a linear system as follows:   $$\left\{\begin{array}{l}x_1+5x_2+3x_3=1\\2x_1+x_2+15x_3=8\\-x_1+x_2+3x_3=1\end{array}\right.\quad\Longrightarrow\quad\left[\begin{array}{ccc|c}1&5&3&1\\2&1&15&8\\-1&1&3&1\end{array}\right]$$
- Elementary row operations are the operations that can be performed on an augmented matrix to produce an equivalent system.
	1. One row is replaced by the sum of itself and a multiple of another row.
	2. Two rows are interchanged
	3. One row is multiplied by a nonzero constant.
- A system is called:
	- consistent if it has at least one solution
	- inconsistent if it has no solution at all
- Note: If a system is inconsistent then the row reduction algorithm will produce at least one row of the form $\left[ \begin{array}{cccc|c} 0 & 0 & \cdots & 0 & c \end{array} \right]$ with $c \neq 0$.
- A matrix is in echelon form if it has the following three properties:
	1. All nonzero rows are above any row of all zeros.
	2. Each leading entry (pivot) is in a column to the right of the leading entry in the previous row.
	3. All entries below a leading entry are zero.
- A matrix is in reduced echelon form if it has the following three properties:
	1. It is in echelon form.
	2. The pivot of each nonzero row is 1.
	3. Each leading 1 is the only nonzero entry in its column.
- A variable of a linear system is called a:
	- Basic variable if its column contains a pivot position.
	- Free variable it is column does not contain a pivot position.
- Solving a system of linear equations:
	1. Row reduce the augmented matrix to echelon form.
	2. Determine whether or not the system is consistent.
	3. In case of consistency, find the solution(s) by:
		- Backward substitution, or;
		- further row reduction to reduced echelon form.

Notations for equivalent systems.
 - If $A$ is an $m \times n$ matrix, with columns $\mathbf{a}_1, \dots, \mathbf{a}_n$, and if $\mathbf{b}$ is in $\mathbb{R}^m$, then the following equations have the same solution set: 
	1. Matrix equation: $A\mathbf{x} = \mathbf{b}$,
	2. Vector equation: $x_1\mathbf{a}_1 + x_2\mathbf{a}_2 + \dots + x_n\mathbf{a}_n = \mathbf{b}$, 
	3. Linear system with augmented matrix: $[ \begin{array}{llll|l} \mathbf{a}_1 & \mathbf{a}_2 & \dots & \mathbf{a}_n & \mathbf{b} \end{array} ]$.
- A system $A\mathbf{x} = \mathbf{b}$ is called 
	- **homogeneous** if $\mathbf{b} = \mathbf{0}$; 
	- **nonhomogeneous** if $\mathbf{b} \neq \mathbf{0}$.
- The general solution of a consistent nonhomogeneous system $A\mathbf{x} = \mathbf{b}$ can be written in the form $\mathbf{x} = \mathbf{x}_p + \mathbf{x}_h$, where:
	- $\mathbf{x}_p$ is a **particular solution** of the system $A\mathbf{x} = \mathbf{b}$, and
	- $\mathbf{x}_h$ is the **general solution** of the homogeneous system $A\mathbf{x} = \mathbf{0}$.
	![[Pasted image 20251112212240.png|300]]

Linear combination, Span, Linear independence
 - Given vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_p$ in $\mathbb{R}^n$ and given scalars $c_1, c_2, \ldots, c_p$, the vector $\mathbf{y}$ defined by $\mathbf{y} = c_1\mathbf{v}_1 + \ldots + c_p\mathbf{v}_p$ is called a **linear combination** of $\mathbf{v}_1, \ldots, \mathbf{v}_p$ with weights $c_1, \ldots, c_p$.
- Given a set of vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_p$ in $\mathbb{R}^n$. The **span** is the set of all linear combinations of $\mathbf{v}_1, \ldots, \mathbf{v}_p$, denoted by $\text{Span}\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_p\}$.
- A set of vectors is **linearly independent** if the only solution to $x_1\mathbf{v}_1 + \cdots + x_p\mathbf{v}_p = \mathbf{0}$, is the trivial solution ($x_1 = 0, \ldots, x_p = 0$). If another solution exists, the set if linearly dependent.

Matrix-Vector product, and Linear Transformations
- The product of a matrix $A$ with $n$ columns and a vector $\mathbf{x}$ with $n$ entries is defined by: $$A\mathbf{x} = \begin{bmatrix} \mathbf{a}_1 &\dots & \mathbf{a}_n \end{bmatrix} \begin{bmatrix} x_1 \\ \vdots \\ x_n \end{bmatrix} = x_1\mathbf{a}_1 + \dots + x_n\mathbf{a}_n$$
- If $A$ is an $m \times n$ matrix, $\mathbf{u}$ and $\mathbf{v}$ are vectors in $\mathbb{R}^n$ and $c$ is a scalar in $\mathbb{R}$, then:
	- $A(\mathbf{u} + \mathbf{v}) = A\mathbf{u} + A\mathbf{v}$
	- $A(c\mathbf{u}) = c(A\mathbf{u})$
- A matrix $A$ of size $m \times n$ defines a transformation $T : \mathbb{R}^n \to \mathbb{R}^m$, defined by $T(\mathbf{x}) = A\mathbf{x}$, called the **matrix transformation**.
- A transformation $T : \mathbb{R}^n \to \mathbb{R}^m$ is called a **linear transformation** if:
	- $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ for all vectors $\mathbf{u}, \mathbf{v}$ in $\mathbb{R}^n$;
	- $T(c\mathbf{u}) = cT(\mathbf{u})$ for all scalars $c$ in $\mathbb{R}$ and vectors $\mathbf{u}$ in $\mathbb{R}^n$.
- Trivially, all matrix transformations are linear transformations.
- Let $T : \mathbb{R}^n \to \mathbb{R}^m$ be a linear transformation. Then there is a unique $m \times n$ matrix $A$ such that $T(\mathbf{x}) = A\mathbf{x}.$ The columns of the matrix $A$ are the images under $T$ of the standard unit vectors: $A = [T(\mathbf{e}_1) \cdots T(\mathbf{e}_n)]$. $A$ is called the standard matrix of $T$. 

Proof any Linear Transformation can be written as a Matrix Transformation
1. Let $\mathbf{x}$ be any vector in $\mathbb{R}^n$. We can write $\mathbf{x}$ as a linear combination of the standard basis vectors: $$\mathbf{x} = \begin{bmatrix} x_1 \\ \vdots \\ x_n \end{bmatrix} = x_1\mathbf{e}_1 + \dots + x_n\mathbf{e}_n$$
2. Now, apply the transformation $T$ to $\mathbf{x}$ and use the two properties of linearity: $$\begin{aligned} T(\mathbf{x}) &= T(x_1\mathbf{e}_1 + \dots + x_n\mathbf{e}_n) \\ &= T(x_1\mathbf{e}_1) + \dots + T(x_n\mathbf{e}_n) \\ &= x_1T(\mathbf{e}_1) + \dots + x_nT(\mathbf{e}_n) \end{aligned}$$
3. This resulting expression is a linear combination of the vectors $T(\mathbf{e}_1), \dots, T(\mathbf{e}_n)$ using the entries of $\mathbf{x}$ as weights. This is the definition of a matrix-vector product. $$T(\mathbf{x}) = \begin{bmatrix} T(\mathbf{e}_1) & \dots & T(\mathbf{e}_n) \end{bmatrix} \begin{bmatrix} x_1 \\ \vdots \\ x_n \end{bmatrix}$$
4. If we define $A = [T(\mathbf{e}_1) \cdots T(\mathbf{e}_n)]$, then we have shown that $T(\mathbf{x}) = A\mathbf{x}$ for any $\mathbf{x}$.
5. QED

Matrices
- An $m \times n$ matrix $A$ is called a:
	* **zero matrix** if all entries are zeros.
	* **square matrix** if $m = n$.
- The **main diagonal** of a square matrix consists of the entries $a_{ii}$.
- A square matrix is called a(n):
	* **diagonal matrix** if all off-diagonal entries are zeros.
	* **identity matrix** if it is a diagonal matrix with 1's on the main diagonal.
	* **lower/upper triangular matrix** if all entries above/below the main diagonal are zeros.
- For an $m \times n$ matrix A the **transpose** of A, denoted by $A^T$, is the matrix of size $n \times m$ whose columns are formed from the corresponding rows of A.

Matrix-Matrix product, and Composite Transformations
- Given two linear transformations $T : \mathbb{R}^p \to \mathbb{R}^n$ and $S : \mathbb{R}^n \to \mathbb{R}^m$, then the composition $S \circ T : \mathbb{R}^p \to \mathbb{R}^m$, defined by $(S \circ T)(\mathbf{x}) = S(T(\mathbf{x}))$ is also a linear transformation.
- Let $A$ be an $m \times n$ matrix and $B$ an $n \times p$ matrix. The **product** $AB$ of $A$ and $B$ (in that order) is equal to the standard matrix of the composite mapping $S \circ T$, where $S(\mathbf{x}) = A\mathbf{x}$ and $T(\mathbf{x}) = B\mathbf{x}$.
	![[Pasted image 20251113113932.png| 400]]
- If $A$ is an $m \times n$ matrix, and $B$ is an $n \times p$ matrix with columns $\mathbf{b}_1, \dots, \mathbf{b}_p$, then the product $AB$ is the $m \times p$ matrix whose columns are $A\mathbf{b}_1, \dots, A\mathbf{b}_p$. That is, $$AB = A[\mathbf{b}_1 \ \mathbf{b}_2 \ \dots \ \mathbf{b}_p] = [A\mathbf{b}_1 \ A\mathbf{b}_2 \ \dots \ A\mathbf{b}_p].$$
- Let $A$ be an $m \times n$ matrix, and let $B$ and $C$ be matrices with sizes for which the indicated sums and products are defined. Then:
	- $A(BC) = (AB)C$
	- $A(B + C) = AB + AC$
	- $(B + C)A = BA + CA$
	- $r(AB) = (rA)B = A(rB)$ for any scalar $r$
	- $I_m A = A = A I_n$
- Warning: Matrix multiplication does not have the same properties as regular multiplication. For example:
	- The identity $AB = BA$ is **not true** in general. 
	- If $AB = AC$, then in general it is **not true** that $B = C$.
	- If $AB = 0$, then in general it is **not true** that $A = 0$ or $B = 0$.
- If $A$ is an $n \times n$ matrix and if $k$ is a positive integer, then $A^k = AA...A$ ($k$ factors). For $k = 0$ we define $A^0 = I$.

