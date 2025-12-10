**Factorial function:** for every non-negative integer $n \in \mathbb{N}$, the factorial of $n$, denoted by $n!$ is the product of all positive integers less than or equal to $n$.
$$n! = n \times (n-1) \times (n-2) \times \dots \times 2 \times 1$$
Recursive definition:
- Base case: $0! = 1$
- Recursive case: $n! = n \times (n-1)!$

**Gamma function:** for every $\kappa > 0$ the Gamma function is defined by
$$\Gamma(\kappa) = \int_{0}^{\infty} x^{\kappa-1} e^{-x} \, dx$$
Properties:
- $\Gamma(1) = 1$
- if $\kappa > 1$ then $\Gamma(\kappa) = (\kappa - 1) \cdot \Gamma(\kappa - 1)$
- if $\kappa \in \mathbb{N} \setminus \{0\}$ then $\Gamma(\kappa) = (\kappa - 1)!$
- $\Gamma(\frac{1}{2}) = \sqrt{\pi}$