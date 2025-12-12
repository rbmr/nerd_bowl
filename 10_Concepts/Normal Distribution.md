---
tags:
  - probability-theory
aliases:
  - Gaussian Distribution
  - Bell Curve
status: good_enough
created: 2025-12-11 13:41
---
### Normal Distribution
_A continuous probability distribution defined by its bell-shaped probability density function, symmetric about its mean. It is the limiting distribution of sums of independent random variables (Central Limit Theorem)._

Definition:
A random variable $X$ is normally distributed with parameters $\mu$ and $\sigma^2$, denoted $X \sim \mathcal{N}(\mu, \sigma^2)$, if its PDF is:
$$f(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-(x-\mu)^2 / 2\sigma^2}, \quad -\infty < x < \infty $$
_Where:_
- $\mu$: The mean (location parameter).
- $\sigma$: The standard deviation (scale parameter, $\sigma > 0$).

#### Key Characteristics
- **Parameters:**
    - **Expectation:** $E[X] = \mu$ 6
    - **Variance:** $\text{Var}(X) = \sigma^2$ 7
    - **MGF:** $\phi(t) = \exp\{\mu t + \frac{\sigma^2 t^2}{2}\}$
- CDF: No closed form; denoted by $\Phi(z)$ for the standard normal $Z = (X-\mu)/\sigma$.
$$F(x) = \Phi\left(\frac{x-\mu}{\sigma}\right) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{(x-\mu)/\sigma} e^{-y^2/2} dy$$

#### Properties & Intuition
- **Linear Transformation:** If $X \sim \mathcal{N}(\mu, \sigma^2)$, then any linear combination $Y = aX + b$ is also normally distributed: $Y \sim \mathcal{N}(a\mu + b, a^2\sigma^2)$.
- **Summation Stability:** The sum of independent normal random variables is itself normally distributed. If $X_i \sim \mathcal{N}(\mu_i, \sigma_i^2)$, then $\sum X_i \sim \mathcal{N}(\sum \mu_i, \sum \sigma_i^2)$. 
- **Standard Normal:** Any normal distribution can be standardized to $\mathcal{N}(0,1)$ via the Z-score transform: $Z = \frac{X - \mu}{\sigma}$.

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

