---
tags:
  - probability-theory/stochastic-processes
aliases:
  - OU Process
status: good_enough
created: 2025-12-13 11:16
---
### Ornstein-Uhlenbeck Process
The Ornstein-Uhlenbeck process is a specific type of **Gaussian**, **stationary** stochastic process14141414. It is rigorously defined as a transformation of a standard Brownian motion process1515. Unlike standard Brownian motion, the Ornstein-Uhlenbeck process possesses a bounded variance and exhibits stationary behavior over time1616.

*Definition via Brownian Motion Transformation*
Let $\{W(t), t \ge 0\}$ be a standard Brownian motion (also known as a Wiener process). The Ornstein-Uhlenbeck process $\{V(t), t \ge 0\}$ is defined by the following transformation for a parameter $\alpha > 0$:
$$V(t) = e^{-\alpha t/2} W(e^{\alpha t})$$
_Where:_
- $V(t)$: The value of the Ornstein-Uhlenbeck process at time $t$.
- $W(\cdot)$: A standard Brownian motion process.
- $\alpha$: A positive parameter scaling the time transformation and exponential decay.

#### Properties & Dynamics
- **Gaussian Nature:** Because the process is defined as a linear transformation of Brownian motion (which is itself Gaussian), the Ornstein-Uhlenbeck process is a Gaussian process1717. This implies that its finite-dimensional distributions are multivariate normal18.
- **Stationarity:** Unlike Brownian motion, which has variance increasing linearly with time ($t\sigma^2$), the Ornstein-Uhlenbeck process is **stationary** (specifically, second-order or weakly stationary, which implies strict stationarity for Gaussian processes).
    - **Mean:** $E[V(t)] = 0$.
    - **Covariance:** The covariance between the process at two time points depends only on the absolute difference between them (the lag), characteristic of stationary processes.
- **Covariance Function:**
$$ \text{Cov}(V(t), V(t+s)) = e^{-\alpha s/2}$$
    _Where:_
    - $s$: The time lag $|t_1 - t_2|$.
- **Lack of Independent Increments:** Unlike Brownian motion, the Ornstein-Uhlenbeck process does **not** have independent increments. The future evolution depends on the current state in a way that creates dependence over intervals.

#### Derivation of Covariance
The covariance is derived from the properties of the underlying Brownian motion $W(t)$, where $\text{Cov}(W(u), W(v)) = \min(u, v)$:
$$\begin{aligned} \text{Cov}(V(t), V(t+s)) &= E[V(t)V(t+s)] \\ &= E\left[ e^{-\alpha t/2} W(e^{\alpha t}) \cdot e^{-\alpha (t+s)/2} W(e^{\alpha (t+s)}) \right] \\ &= e^{-\alpha t - \alpha s/2} E\left[ W(e^{\alpha t}) W(e^{\alpha (t+s)}) \right] \\ &= e^{-\alpha t - \alpha s/2} \min(e^{\alpha t}, e^{\alpha (t+s)}) \\ &= e^{-\alpha t - \alpha s/2} e^{\alpha t} \\ &= e^{-\alpha s/2} \end{aligned}$$


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

