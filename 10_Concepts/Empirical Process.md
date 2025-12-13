---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Empirical Distribution Function
  - Uniform Empirical Process
  - Donsker's Theorem
status: good_enough
created: 2025-12-13 11:44
---
### Empirical Process
The **Empirical Process** is a stochastic process that models the fluctuations of the empirical cumulative distribution function (CDF) around the true underlying CDF of a random variable. It is a fundamental object in asymptotic statistics, particularly for establishing goodness-of-fit tests.

Let $X_1, X_2, \dots, X_n$ be independent and identically distributed (i.i.d.) random variables with a common CDF $F(x)$. The **Empirical Distribution Function** (EDF), $F_n(x)$, is defined as:
$$F_n(x) = \frac{1}{n} \sum_{i=1}^{n} \mathbb{I}\{X_i \le x\}$$
_Where:_
- $\mathbb{I}\{\cdot\}$: The indicator function (1 if the condition is true, 0 otherwise).
- $n$: The sample size.

The **General Empirical Process** is defined as the scaled difference between the empirical and true distributions:
$$G_n(x) = \sqrt{n}(F_n(x) - F(x)), \quad x \in \mathbb{R}$$
#### The Uniform Empirical Process
When the random variables are uniformly distributed on the unit interval, $U_i \sim \mathcal{U}[0,1]$, the process is called the **Uniform Empirical Process**, denoted $B_n(u)$.
$$B_n(u) = \sqrt{n} \left( \frac{1}{n} \sum_{i=1}^{n} \mathbb{I}\{U_i \le u\} - u \right), \quad 0 \le u \le 1$$
#### Properties & Intuition
- **Bridge to General Processes:** Any general empirical process can be mapped to the uniform empirical process using the probability integral transform. Since $F(X) \sim \mathcal{U}[0,1]$ for a continuous CDF $F$, we have the distributional equality:
$$ \sqrt{n}(F_n(x) - F(x)) \overset{d}{=} B_n(F(x))$$
- **Convergence (Donsker's Theorem):** As $n \to \infty$, the uniform empirical process $B_n(u)$ converges in distribution to a **Brownian Bridge** $\{B(u), 0 \le u \le 1\}$. Consequently, the general empirical process converges to a time-transformed Brownian Bridge $\{B(F(x)), x \in \mathbb{R}\}$.
- **Finite Dimensional Distributions:** For fixed points $s$ and $t$ in $[0,1]$, the covariance structure of the uniform empirical process is:
$$ \text{Cov}(B_n(s), B_n(t)) = \min(s,t) - st$$
    This matches the covariance structure of the Brownian Bridge.
- **Intuition:** The $\sqrt{n}$ scaling ensures that the fluctuations do not vanish (as they would by the Law of Large Numbers) nor explode. It stabilizes the variance, allowing the process to converge to a non-degenerate Gaussian process.


---

# Related
```dataviewjs
await dv.view("99_System/Scripts/tag_tables", dv.current());
```

### Direct Links to this document
```dataview
TABLE file.folder AS "Context"
FROM [[#]]
WHERE file.folder != "10_Concepts"
SORT file.folder ASC
```

