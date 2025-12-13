---
tags:
  - probability-theory/stochastic-processes
aliases:
  - KS Test
  - KS Statistic
  - Kolmogorov Distribution
status: good_enough
created: 2025-12-13 11:50
---
### Kolmogorov-Smirnov Test
The Kolmogorov-Smirnov (KS) statistic is a nonparametric test statistic used to measure the distance between an empirical distribution function $F_n(x)$ and a reference cumulative distribution function $F_0(x)$ (one-sample test), or between two empirical distribution functions (two-sample test). It is defined as the supremum of the absolute difference between the two functions.
$$K_n = \sqrt{n} \sup_{x \in \mathbb{R}} |F_n(x) - F_0(x)| $$
_Where:_
- $n$: The sample size.
- $F_n(x)$: The empirical distribution function of the sample.
- $F_0(x)$: The hypothesized theoretical cumulative distribution function (continuous).
- $\sup$: The supremum, representing the maximum vertical distance between the two curves.

#### KS Limit Distribution
Under the null hypothesis that the data follows the distribution $F_0$, the statistic $K_n$ converges in distribution to the supremum of a Brownian Bridge $|B(t)|$. This limiting distribution is independent of $F_0$, making the test **distribution-free**.

The cumulative distribution function of the limit variable $K$ is given by:
$$P(K \le y) = 1 - 2 \sum_{j=1}^{\infty} (-1)^{j+1} e^{-2j^2 y^2} \quad \text{for } y > 0 $$
_Where:_
- $K$: The random variable representing the asymptotic distribution of the KS statistic ($\sup_{t \in [0,1]} |B(t)|$)6.
- $y$: The critical value or threshold.
#### Properties & Intuition
- **Distribution Free:** The critical values for the test do not depend on the specific shape of $F_0$ (e.g., Normal, Exponential), provided $F_0$ is continuous. This occurs because the transformation $U = F_0(X)$ maps any continuous random variable to a Uniform$[0,1]$ distribution.
- **Sensitivity:** The KS test is sensitive to differences in both location and shape of the cumulative distribution functions.
- **Boundary Crossing:** The calculation of the p-value relies on the probability of a Brownian Bridge process exiting a boundary defined by $\pm y$


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

