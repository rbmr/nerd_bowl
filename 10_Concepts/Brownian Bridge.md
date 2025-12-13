---
tags:
  - probability-theory/stochastic-processes
aliases:
  - Tied-Down Brownian Motion
  - Pinned Brownian Motion
status: good_enough
created: 2025-12-13 11:46
---
### Brownian Bridge
A **Brownian Bridge** is a continuous-time Gaussian stochastic process $\{B(t), 0 \le t \le 1\}$ that is "tied down" at both endpoints, meaning it starts at 0 and is conditioned to return to 0 at time $t=1$. It represents the asymptotic limit of the Uniform Empirical Process.

A stochastic process $\{B(t), 0 \le t \le 1\}$ is a Brownian Bridge if:
1. **Gaussian:** Every finite-dimensional distribution is multivariate normal.
2. **Continuity:** It has continuous sample paths.
3. **Boundary Conditions:** $B(0) = 0$ and $B(1) = 0$ (with probability 1).
4. **Mean:** $\mathbb{E}[B(t)] = 0$ for all $t$.
5. **Covariance Function:**
$$\text{Cov}(B(s), B(t)) = \min(s,t) - st = s(1-t) \quad \text{for } 0 \le s \le t \le 1$$

#### Properties & Intuition

- **Variance Dynamics:** The variance is $\text{Var}(B(t)) = t(1-t)$. This variance is zero at $t=0$ and $t=1$ and maximal at $t=0.5$. This reflects the "pinning" of the process at the endpoints; there is no uncertainty at the boundaries.
- **Relation to Brownian Motion (Transformation):** A Brownian Bridge can be constructed from a standard Brownian Motion $\{W(t), t \ge 0\}$ via the transformation:
$$ B(t) = W(t) - tW(1), \quad 0 \le t \le 1$$
    This subtracts the linear trend required to force the endpoint $W(1)$ to zero.
- **Relation to Brownian Motion (Conditioning):** The Brownian Bridge is distributionally equivalent to a standard Brownian Motion conditioned on the event $W(1)=0$:
$$ \{B(t)\} \overset{d}{=} \{W(t) \mid W(1) = 0\}$$

- **Inverse Transformation:** A standard Brownian Motion on $[0,1]$ can be constructed from a Brownian Bridge and an independent standard normal variable $Z \sim \mathcal{N}(0,1)$:
$$ W(t) = B(t) + tZ$$

#### Supremum of the Brownian Bridge
The distribution of the maximum value (supremum) of a Brownian Bridge is critical for non-parametric statistics (specifically the Kolmogorov-Smirnov test).

**Two-Sided Supremum (Absolute Maximum):**
The probability that the absolute value of the process exceeds a threshold $y$:
$$P\left( \sup_{0 \le t \le 1} |B(t)| > y \right) = 2 \sum_{j=1}^{\infty} (-1)^{j+1} \exp(-2j^2 y^2), \quad y > 0$$

**One-Sided Supremum:**
The probability that the process simply exceeds a positive threshold $y$:
$$P\left( \sup_{0 \le t \le 1} B(t) > y \right) = \exp(-2y^2), \quad y > 0$$


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

