A **function** $f$ from a set $A$ to a set $B$ (denoted: $f: A \to B$) is a relation that assigns exactly one element $y \in B$ to each element $x \in A$ (denoted $f(x) = y$). 

The fundamental operations are best understood as pairs of actions: a primary action and its inverse (undoing the action).

- **Successor** $S(n)$ is the primitive axiomatic operation that defines the sequence of natural numbers.
- **Predecessor** $P(n)$ is the inverse operation of the successor. $$P(n) = m \iff S(m) = n$$
- **Addition** $a + b$ is iterated succession. $$a + 0 = a, \quad a + S(b) = S(a + b)$$
- **Subtraction** $a - b$ is the inverse operation of addition. $$a - b = c \iff c + b = a$$
- **Multiplication** $a \cdot b$ is iterated addition. $$a \cdot 0 = 0, \quad a \cdot S(b) = (a \cdot b) + a$$
- **Division** $a / b$ is the inverse operation of multiplication. $$a / b = c \iff c \cdot b = a \quad (\text{where } b \neq 0)$$
- **Power** $a^b$ is iterated multiplication. $$a^0 = 1, \quad a^{S(b)} = a^b \cdot a$$
- **Root** $\sqrt[n]{a}$ is the inverse of power with respect to the base. $$\sqrt[n]{a} = r \iff r^n = a$$
- **Logarithm** $\log_b(a)$ is the inverse of power with respect to the exponent. $$\log_b(a) = x \iff b^x = a$$