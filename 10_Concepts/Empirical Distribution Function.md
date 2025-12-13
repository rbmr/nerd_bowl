---
tags:
  - probability-theory/stochastic-processes
aliases:
  - EDF
  - Empirical CDF
  - Sample Distribution Function
status: good_enough
created: 2025-12-13 11:48
---
### Empirical Distribution Function
The Empirical Distribution Function (EDF) is a cumulative distribution function that concentrates probability mass $1/n$ at each of the $n$ data points in a random sample. It serves as the nonparametric maximum likelihood estimator for the underlying population cumulative distribution function (CDF).

Given independent and identically distributed (i.i.d.) random variables $X_1, X_2, \dots, X_n$ with a common CDF $F(x)$, the EDF, denoted as $F_n(x)$, is defined as:
$$F_n(x) = \frac{1}{n} \sum_{i=1}^{n} \mathbb{I}(X_i \le x) $$
_Where:_
- $n$: The sample size.
- $X_i$: The $i$-th observed random variable.
- $\mathbb{I}(\cdot)$: The indicator function, which takes the value 1 if the condition $X_i \le x$ is true, and 0 otherwise.
#### Properties & Intuition
- **Unbiasedness:** For any fixed $x$, $E[F_n(x)] = F(x)$. The expected value of the empirical proportion is the true probability.
- **Variance:** The variance of the estimator at a point $x$ is $Var(F_n(x)) = \frac{F(x)(1-F(x))}{n}$. This is derived from the properties of the Bernoulli distribution.
- **Glivenko-Cantelli Theorem:** $F_n(x)$ converges uniformly to $F(x)$ almost surely as $n \to \infty$. This is the "Fundamental Theorem of Statistics," justifying the use of data to approximate theoretical distributions.
- **Donsker's Theorem:** The normalized process $\sqrt{n}(F_n(x) - F(x))$ converges in distribution to a Brownian Bridge process $B(F(x))$2. This connects discrete data sampling to continuous Gaussian processes.
- **Intuition:** Conceptually, the EDF creates a "step function" ladder that climbs from 0 to 1. Each observed data point adds a step of height $1/n$. As data accumulates, the steps become smaller and the function smoothes out to match the true population curve.
#### Uniform Empirical Process
A specific case where the underlying random variables are Uniform$[0,1]$. It is defined as:
$$B_n(u) = \sqrt{n} (F_n(u) - u) \quad \text{for } 0 \le u \le 1 $$
This process converges to a Brownian Bridge.


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

