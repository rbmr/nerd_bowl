---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Gaussian Random Field
status: good_enough
created: 2025-12-13 11:10
---
### Gaussian process
A **Gaussian Process** is a stochastic process $\{X(t), t \in T\}$ such that for any finite set of indices $t_1, t_2, \dots, t_k \in T$, the random vector $(X(t_1), \dots, X(t_k))$ follows a multivariate normal distribution. It is the infinite-dimensional generalization of the multivariate Gaussian distribution, essentially defining a probability distribution over functions.

A Gaussian Process is completely specified by its **mean function** $m(t)$ and **covariance function** $k(s, t)$.
$$X(t) \sim \mathcal{GP}(m(t), k(s, t)) $$
_Where:_
- $m(t) = \mathbb{E}[X(t)]$ : The expected value of the process at time $t$.
- $k(s, t) = \mathbb{E}[(X(s) - m(s))(X(t) - m(t))]$ : The covariance between the process values at times $s$ and $t$.

#### Brownian Motion as a Gaussian Process
Standard Brownian Motion (Wiener Process) $\{B(t), t \ge 0\}$ is a specific instance of a Gaussian Process defined by the following mean and covariance functions:
$$m(t) = 0 $$
$$k(s, t) = \min(s, t) $$

*Derivation of Covariance:*
Since Brownian Motion has independent increments and $B(0)=0$, for $s < t$:
$$\text{Cov}(B(s), B(t)) = \text{Cov}(B(s), B(s) + (B(t) - B(s))) $$
$$= \text{Var}(B(s)) + \text{Cov}(B(s), B(t) - B(s)) $$
$$= s + 0 = s $$

Thus, $\text{Cov}(B(s), B(t)) = \min(s, t)$.
#### Properties & Intuition
- **Marginalization Property:** The definition implies that any subset of the process behaves like a standard multivariate Gaussian. This consistency allows for tractable inference (e.g., in regression) because marginalizing out unobserved points is analytically trivial.
- **Closure Under Linear Operations:** Linear operations (e.g., differentiation, integration, linear combinations) applied to a Gaussian Process yield another Gaussian Process.
- **Covariance Determines Structure:** The smoothness, periodicity, and stationarity of the realizations (sample paths) are strictly determined by the choice of the kernel (covariance function) $k(s,t)$.
    - _Stationarity:_ If $k(s, t)$ depends only on $|s - t|$, the process is stationary (e.g., Ornstein-Uhlenbeck). Brownian Motion is **not** stationary because its variance $t$ grows with time.
- **Intuition:** While a Gaussian distribution is defined by a vector $\mu$ and matrix $\Sigma$, a Gaussian Process is defined by a function $m$ and an operator $k$. It represents a "bag of functions" where the probability of drawing a specific function is governed by how closely it adheres to the mean and how correlated its points are according to the covariance.


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

