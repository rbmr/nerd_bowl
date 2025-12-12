---
tags:
  - probability-theory/distributions
aliases:
  - Poisson Law of Small Numbers
status: good_enough
created: 2025-12-11 13:49
---
### Poisson Distribution
_A discrete probability distribution expressing the probability of a given number of events occurring in a fixed interval of time or space, if these events occur with a known constant mean rate and independently of the time since the last event._

*Definition:*
A random variable $X$ has a Poisson distribution with parameter $\lambda$, denoted $X \sim \text{Poi}(\lambda)$, if its PMF is:
$$p(i) = P(X=i) = e^{-\lambda} \frac{\lambda^i}{i!}, \quad i = 0, 1, 2, ... $$
_Where:_
- $\lambda$: The average rate or expected number of occurrences ($\lambda > 0$).

#### Key Characteristics
- **Parameters:**
    - **Expectation:** $E[X] = \lambda$
    - **Variance:** $\text{Var}(X) = \lambda$
    - **MGF:** $\phi(t) = \exp\{\lambda(e^t - 1)\}$
- **CDF:** No simple closed form; involves the incomplete gamma function or summation of the PMF.

#### Properties & Intuition
- **Summation:** The sum of independent Poisson variables is also Poisson. If $X \sim \text{Poi}(\lambda_1)$ and $Y \sim \text{Poi}(\lambda_2)$, then $X+Y \sim \text{Poi}(\lambda_1 + \lambda_2)$.
- **Rare Events:** It serves as an approximation for the Binomial distribution when $n$ is large and $p$ is small, such that $np \approx \lambda$. This is often called the "law of small numbers."
- **Decomposition:** If a Poisson number of events are classified as Type I (prob $p$) or Type II (prob $1-p$), the number of Type I and Type II events are independent Poisson variables with means $\lambda p$ and $\lambda(1-p)$.


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

