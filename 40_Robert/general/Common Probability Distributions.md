
Discrete Distributions

- The **Bernoulli** distribution models a random variable that has outcome 1 with probability $p$ and outcome 0 with probability $(1-p)$.
- The **Binomial** distribution is the sum of $n$ independent Bernoulli trials.
	- $X \sim \text{BIN}(n,p)$ if $X = \sum_{i=1}^{n}Y_{i}$ with i.i.d. $Y_{i} \sim \text{BERNOULLI}(p)$
- The **Poisson** distribution models the number of events occurring in a fixed interval given a constant average rate $\lambda$.
	- Take a Binomial distribution $X \sim \text{BIN}(n, p)$ and let the number of trials $n$ go to infinity ($n \to \infty$) while the probability of success $p$ goes to zero ($p \to 0$) in such a way that the average rate $\lambda = np$ remains constant, the distribution converges to Poisson.

| **Component** | **Bernoulli**                                                              | **Binomial**                                          | **Poisson**                                                 |
| ------------- | -------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| **Notation**  | $X \sim \text{BERNOULLI}(p)$                                               | $X \sim \text{BIN}(n,p)$                              | $X \sim \text{POI}(\lambda)$                                |
| $f_X(x)$      | $\begin{cases} p & x = 1 \\ 1-p & x=0 \\ 0 & \text{otherwise} \end{cases}$ | $\binom{n}{x}p^{x}(1-p)^{n-x}$<br>for $x=0,1,\dots,n$ | $e^{-\lambda}\frac{\lambda^{x}}{x!}$<br>for $x=0,1,2,\dots$ |
| $F_X(x)$      | $\begin{cases} 0 & x < 0 \\ 1-p & 0 \le x < 1 \\ 1 & x \ge 1 \end{cases}$  | (Sum of PMFs)                                         | (Sum of PMFs)                                               |
| $M_X(t)$      | $(1-p) + pe^{t}$                                                           | $(pe^{t}+(1-p))^{n}$                                  | $e^{\lambda(e^{t}-1)}$                                      |
| $E(X)$        | $p$                                                                        | $np$                                                  | $\lambda$                                                   |
| $Var(X)$      | $p(1-p)$                                                                   | $np(1-p)$                                             | $\lambda$                                                   |
| **Params**    | $0 < p < 1$                                                                | $n \in \mathbb{N}$<br>$0 < p < 1$                     | $\lambda > 0$                                               |
| **Notes**     | Base                                                                       | Sum of $n$ independent Bernoulli trials.              | Limit of Binomial as $n \to \infty$.                        |

- The **Negative Binomial** distribution models the number of trials until the r-th success.
-  The **Geometric** distribution models the number of trials until the first success.

| Component    | Geometric                                          | Negative Binomial                                          |
| :----------- | :------------------------------------------------- | :--------------------------------------------------------- |
| **Notation** | $X \sim \text{GEO}(p)$                             | $X \sim \text{NB}(r,p)$                                    |
| $f_X(x)$     | $p(1-p)^{x-1}$ <br>for $x=1,2,\dots$               | $\binom{x-1}{r-1}p^r(1-p)^{x-r}$ <br>for $x=r, r+1, \dots$ |
| $F_X(x)$     | $1 - (1-p)^x$                                      | (Sum of PMFs)                                              |
| $M_X(t)$     | $\frac{pe^{t}}{1-(1-p)e^{t}}$                      | $\left(\frac{pe^{t}}{1-(1-p)e^{t}}\right)^{r}$             |
| $E(X)$       | $\frac{1}{p}$                                      | $\frac{r}{p}$                                              |
| $Var(X)$     | $\frac{1-p}{p^{2}}$                                | $\frac{r(1-p)}{p^{2}}$                                     |
| **Params**   | $0 < p < 1$                                        | $r \in \mathbb{N}$<br>$0 < p < 1$                          |
| **Notes**    | Trials until first success.<br>$GEO(p) = NB(1, p)$ | Trials until $r$ successes.                                |

Continuous Distributions

| Component    | Uniform                              | Exponential                                    | Normal                                                                  |
| :----------- | :----------------------------------- | :--------------------------------------------- | :---------------------------------------------------------------------- |
| **Notation** | $X \sim \text{UNIF}(a,b)$            | $X \sim \text{EXP}(\theta)$                    | $X \sim N(\mu, \sigma^2)$                                               |
| $f_X(x)$     | $\frac{1}{b-a}$<br>for $a < x < b$   | $\frac{1}{\theta}e^{-x/\theta}$<br>for $x > 0$ | $\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^{2}}$ |
| $F_X(x)$     | $\frac{x-a}{b-a}$<br>for $a < x < b$ | $1-e^{-x/\theta}$<br>for $x > 0$               | (Standard Normal Table)                                                 |
| $M_X(t)$     | $\frac{e^{bt}-e^{at}}{t(b-a)}$       | $(1-t\theta)^{-1}$<br>for $t < 1/\theta$       | $e^{\mu t + \frac{1}{2}\sigma^2 t^2}$                                   |
| $E(X)$       | $\frac{a+b}{2}$                      | $\theta$                                       | $\mu$                                                                   |
| $Var(X)$     | $\frac{(b-a)^{2}}{12}$               | $\theta^{2}$                                   | $\sigma^2$                                                              |
| **Params**   | $a,b \in \mathbb{R}, a < b$          | $\theta > 0$                                   | $\sigma^2 > 0$                                                          |
| **Notes**    | $UNIF(0,1) = BETA(1,1)$              | Memoryless.<br>$EXP(\theta) = GAM(\theta, 1)$  | Symmetric about $\mu$                                                   |

| Component    | Weibull                                                                         | Gamma                                                                             |
| :----------- | :------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------- |
| **Notation** | $X \sim \text{WEI}(\theta, \beta)$                                              | $X \sim \text{GAM}(\theta, \kappa)$                                               |
| $f_X(x)$     | $\frac{\beta}{\theta^{\beta}}x^{\beta-1}e^{-(x/\theta)^{\beta}}$<br>for $x > 0$ | $\frac{1}{\theta^{\kappa}\Gamma(\kappa)}x^{\kappa-1}e^{-x/\theta}$<br>for $x > 0$ |
| $F_X(x)$     | $1-e^{-(x/\theta)^{\beta}}$<br>for $x > 0$                                      | (Incomplete Gamma)                                                                |
| $M_X(t)$     | (Complex)                                                                       | $(1-t\theta)^{-\kappa}$<br>for $t < 1/\theta$                                     |
| $E(X)$       | $\theta \Gamma(1+\frac{1}{\beta})$                                              | $\kappa\theta$                                                                    |
| $Var(X)$     | $\theta^{2}[\Gamma(1+\frac{2}{\beta})-\Gamma^{2}(1+\frac{1}{\beta})]$           | $\kappa\theta^{2}$                                                                |
| **Params**   | $\theta > 0, \beta > 0$                                                         | $\theta > 0, \kappa > 0$                                                          |
| **Notes**    | $WEI(\theta, 1) = EXP(\theta)$                                                  | $GAM(\theta, 1) = EXP(\theta)$                                                    |

| Component    | Beta                                                                                                     | Chi-Square                                                           | Student's t                                                                                                  |
| :----------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| **Notation** | $X \sim \text{BETA}(\alpha, \beta)$                                                                      | $X \sim \chi^2(\nu)$                                                 | $X \sim t(\nu)$                                                                                              |
| $f_X(x)$     | $\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}x^{\alpha-1}(1-x)^{\beta-1}$<br>for $0 < x < 1$ | $\frac{1}{2^{\nu/2}\Gamma(\nu/2)}x^{\nu/2-1}e^{-x/2}$<br>for $x > 0$ | $\frac{\Gamma(\frac{\nu+1}{2})}{\sqrt{\nu\pi}\Gamma(\frac{\nu}{2})}(1+\frac{x^{2}}{\nu})^{-\frac{\nu+1}{2}}$ |
| $F_X(x)$     | (Incomplete Beta)                                                                                        | (Incomplete Gamma)                                                   | (Table)                                                                                                      |
| $M_X(t)$     | (Complex)                                                                                                | $(1-2t)^{-1/2}$<br>for $t < 1/2$                                     | Does not exist                                                                                               |
| $E(X)$       | $\frac{\alpha}{\alpha+\beta}$                                                                            | $\nu$                                                                | $0$ (if $\nu > 1$)                                                                                           |
| $Var(X)$     | $\frac{\alpha\beta}{(\alpha+\beta)^{2}(\alpha+\beta+1)}$                                                 | $2\nu$                                                               | $\frac{\nu}{\nu-2}$ (if $\nu > 2$)                                                                           |
| **Params**   | $\alpha > 0, \beta > 0$                                                                                  | $\nu > 0$                                                            | $\nu > 0$                                                                                                    |
| **Notes**    | $BETA(1,1) = UNIF(0,1)$                                                                                  | $\chi^2(\nu) = GAM(2, \nu/2)$                                        | Approaches Normal as $\nu \to \infty$                                                                        |

**Memoryless Property**: the probability of an event occurring after a duration $s+t$, given that it has not occurred by time $t$, is the same as the initial probability that it would not occur after time $s$.
$$\mathbb{P}(X > s + t \mid X > t) = \mathbb{P}(X > s)$$
- The **Exponential** and **Geometric** distributions are the only distributions that satisfy the memoryless property for the continuous and discrete cases, respectively.




