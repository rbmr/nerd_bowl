Bernoulli Trials Family

- The **Bernoulli** distribution models a single trial with a binary outcome: outcome 1 (success) with probability $p$ and outcome 0 (Failure) with probability $(1-p)$.
- The **Binomial** distribution is the sum of $n$ independent Bernoulli trials. It models the total number of successes for a fixed $n$ trials.
- The **Geometric** distribution models the number of trials required to get the **first** success. 
	- Discrete analog of the Exponential distribution.
- The **Negative Binomial** distribution models the number of trials required to get the **r-th** success. It can be viewed as the sum of $r$ i.i.d Geometric variables.

|              | **Bernoulli**                                                             | **Binomial**                                          | Geometric                            | Negative Binomial                                         |
| ------------ | ------------------------------------------------------------------------- | ----------------------------------------------------- | :----------------------------------- | :-------------------------------------------------------- |
| **Notation** | $X \sim \text{BERNOULLI}(p)$                                              | $X \sim \text{BIN}(n,p)$                              | $X \sim \text{GEO}(p)$               | $X \sim \text{NB}(r,p)$                                   |
| $f_X(x)$     | $p^{x}(1-p)^{1-x}$<br>for $x\in \{0,1\}$                                  | $\binom{n}{x}p^{x}(1-p)^{n-x}$<br>for $x=0,1,\dots,n$ | $p(1-p)^{x-1}$ <br>for $x=1,2,\dots$ | $\binom{x-1}{r-1}p^r(1-p)^{x-r}$<br>for $x=r, r+1, \dots$ |
| $F_X(x)$     | $\begin{cases} 0 & x < 0 \\ 1-p & 0 \le x < 1 \\ 1 & x \ge 1 \end{cases}$ | (Sum of PMFs)                                         | $1 - (1-p)^x$                        | (Sum of PMFs)                                             |
| $M_X(t)$     | $(1-p) + pe^{t}$                                                          | $((1-p) + pe^{t})^{n}$                                | $\frac{pe^{t}}{1-(1-p)e^{t}}$        | $\left(\frac{pe^{t}}{1-(1-p)e^{t}}\right)^{r}$            |
| $E(X)$       | $p$                                                                       | $np$                                                  | $\frac{1}{p}$                        | $\frac{r}{p}$                                             |
| $Var(X)$     | $p(1-p)$                                                                  | $np(1-p)$                                             | $\frac{1-p}{p^{2}}$                  | $\frac{r(1-p)}{p^{2}}$                                    |
| **Params**   | $0 < p < 1$                                                               | $n \in \mathbb{N}$<br>$0 < p < 1$                     | $0 < p < 1$                          | $r \in \mathbb{N}$<br>$0 < p < 1$                         |

Poisson Process Family

- The **Poisson** distribution models the number of events occurring in a fixed interval given a constant average rate $\lambda$. 
	- It is derived from the Binomial distribution by letting $n \to \infty$ and $p \to 0$ such that $\lambda = np$ remains constant.
- The **Exponential** distribution models the waiting time until the **1st** event occurs in a Poisson process, where the average waiting time is $\theta = \frac{1}{\lambda}$.
	- It is the continuous analog of the Geometric distribution. 
- The **Gamma** distribution models the waiting time until the **$\kappa$-th** event occurs in a Poisson process. It is the sum of $\kappa$ i.i.d Exponential variables.
- The **Weibull** distribution generalizes the Exponential distribution to allow for changing failure rates over time.

|              | **Poisson**                                                 | Exponential                                    | Gamma                                                                             | Weibull                                                                         |
| :----------- | ----------------------------------------------------------- | :--------------------------------------------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| **Notation** | $X \sim \text{POI}(\lambda)$                                | $X \sim \text{EXP}(\theta)$                    | $X \sim \text{GAM}(\theta, \kappa)$                                               | $X \sim \text{WEI}(\theta, \beta)$                                              |
| $f_X(x)$     | $e^{-\lambda}\frac{\lambda^{x}}{x!}$<br>for $x=0,1,2,\dots$ | $\frac{1}{\theta}e^{-x/\theta}$<br>for $x > 0$ | $\frac{1}{\theta^{\kappa}\Gamma(\kappa)}x^{\kappa-1}e^{-x/\theta}$<br>for $x > 0$ | $\frac{\beta}{\theta^{\beta}}x^{\beta-1}e^{-(x/\theta)^{\beta}}$<br>for $x > 0$ |
| $F_X(x)$     | (Sum of PMFs)                                               | $1-e^{-x/\theta}$<br>for $x > 0$               | (Incomplete)                                                                      | $1-e^{-(x/\theta)^{\beta}}$<br>for $x > 0$                                      |
| $M_X(t)$     | $e^{\lambda(e^{t}-1)}$                                      | $(1-t\theta)^{-1}$<br>for $t < 1/\theta$       | $(1-t\theta)^{-\kappa}$<br>for $t < 1/\theta$                                     | (Complex)                                                                       |
| $E(X)$       | $\lambda$                                                   | $\theta$                                       | $\kappa\theta$                                                                    | $\theta \Gamma(1+\frac{1}{\beta})$                                              |
| $Var(X)$     | $\lambda$                                                   | $\theta^{2}$                                   | $\kappa\theta^{2}$                                                                | $\theta^{2}[\Gamma(1+\frac{2}{\beta})-\Gamma^{2}(1+\frac{1}{\beta})]$           |
| **Params**   | $\lambda > 0$                                               | $\theta > 0$                                   | $\theta > 0, \kappa > 0$                                                          | $\theta > 0, \beta > 0$                                                         |

Properties

- Memoryless Property: the probability of an event occurring after a duration $s+t$, given that it has not occurred by time $t$, is the same as the initial probability that it would not occur after time $s$.$$\mathbb{P}(X > s + t \mid X > t) = \mathbb{P}(X > s)$$
	- The **Exponential** and **Geometric** distributions are the only distributions that satisfy the memoryless property for the continuous and discrete cases, respectively.
- If $X_1, \dots, X_n$ are independent exponential random variables with rates $\lambda_1, \dots, \lambda_n$, 
	- Distribution of the Minimum: Then the random variable $Y = \min(X_1, \dots, X_n)$ is also exponentially distributed with a rate equal to the sum of the individual rates $\Lambda = \lambda_1 + \dots + \lambda_n$.
	- Competing Exponentials (Race Condition): The probability that a specific variable $X_k$ is the first to occur (i.e., is the minimum) is the ratio of its rate to the total rate:$$\mathbb{P}(X_k = \min_j X_j) = \frac{\lambda_k}{\sum_{j=1}^{n} \lambda_j}$$
	- Independence of Rank and Minimum: The value of the minimum time ($\min X_i$) and the rank ordering of the variables (which one comes 1st, 2nd, etc.) are **independent**. (Direct consequence of the memoryless property.)

The Gaussian Family

- The **Normal** (Gaussian) distribution models sums of independent random variables (via the Central Limit Theorem). It approximates the Binomial, Poisson, and Gamma distributions when samples are large. 
- The **Chi-Square** distribution models the sum of the squares of $\nu$ independent standard normal random variables. 
	- It is mathematically a special case of the Gamma distribution ($\text{GAM}(2, \nu/2)$). 
- The **Student's t** distribution models the mean of a normal population when the sample size is small and variance is unknown. It is the ratio of a Normal random variable to the square root of a Chi-Square variable. It converges to the Normal distribution as $\nu \to \infty$.

| Component    | Uniform                              | Chi-Square                                                           | Student's t                                                                                                  |
| :----------- | :----------------------------------- | :------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| **Notation** | $X \sim \text{UNIF}(a,b)$            | $X \sim \chi^2(\nu)$                                                 | $X \sim t(\nu)$                                                                                              |
| $f_X(x)$     | $\frac{1}{b-a}$<br>for $a < x < b$   | $\frac{1}{2^{\nu/2}\Gamma(\nu/2)}x^{\nu/2-1}e^{-x/2}$<br>for $x > 0$ | $\frac{\Gamma(\frac{\nu+1}{2})}{\sqrt{\nu\pi}\Gamma(\frac{\nu}{2})}(1+\frac{x^{2}}{\nu})^{-\frac{\nu+1}{2}}$ |
| $F_X(x)$     | $\frac{x-a}{b-a}$<br>for $a < x < b$ | (Incomplete)                                                         | (Table)                                                                                                      |
| $M_X(t)$     | $\frac{e^{bt}-e^{at}}{t(b-a)}$       | $(1-2t)^{-1/2}$<br>for $t < 1/2$                                     | Does not exist                                                                                               |
| $E(X)$       | $\frac{a+b}{2}$                      | $\nu$                                                                | $0$ (if $\nu > 1$)                                                                                           |
| $Var(X)$     | $\frac{(b-a)^{2}}{12}$               | $2\nu$                                                               | $\frac{\nu}{\nu-2}$ (if $\nu > 2$)                                                                           |
| **Params**   | $a,b \in \mathbb{R}, a < b$          | $\nu > 0$                                                            | $\nu > 0$                                                                                                    |

The Bounded & Bayesian Family

- The **Uniform** distribution models a random variable where all intervals of the same length within the support $[a,b]$ are equally probable. It represents maximum entropy (minimum information) over an interval.
- The **Beta** distribution models random variables restricted to the interval $[0,1]$. It generalizes the Uniform distribution and serves as the conjugate prior for the Bernoulli, Binomial, and Geometric distributions in Bayesian statistics.

|              | Uniform                             | Beta                                                                                                      |
| ------------ | ----------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Notation** | $X \sim \text{UNIF}(a,b)$           | $X \sim \text{BETA}(\alpha, \beta)$                                                                       |
| $f_X(x)$     | $\frac{1}{b-a}$ <br>for $a < x < b$ | $\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}x^{\alpha-1}(1-x)^{\beta-1}$ <br>for $0 < x < 1$ |
| $M_X(t)$     | $\frac{e^{bt}-e^{at}}{t(b-a)}$      | (Complex)                                                                                                 |
| $E(X)$       | $\frac{a+b}{2}$                     | $\frac{\alpha}{\alpha+\beta}$                                                                             |
| $Var(X)$     | $\frac{(b-a)^{2}}{12}$              | $\frac{\alpha\beta}{(\alpha+\beta)^{2}(\alpha+\beta+1)}$                                                  |




