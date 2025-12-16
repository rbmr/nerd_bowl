# Probability Theory

Events

- **Experiment**: Any action whose outcome is subject to uncertainty.
- **Sample space** $S$: The set of all outcomes of an experiment.
	- Discrete if there are a finite or countably infinite number of outcomes.
	- Continuous if there is an uncountable number of outcomes.
- **Event** $A$: collection of outcomes, $A \subseteq S$. 
	- Simple if only one outcome, compound otherwise.
	- We say $A$ occurs, when an outcome belongs to $A$. 
- Two events are **mutually exclusive** if $A \cap B = \emptyset$.
- Events $A_1, A_2, \ldots$ are said to be **mutually exclusive** if they are pairwise exclusive, i.e., if $A_i \cap A_j = \emptyset$ whenever $i \neq j$.

Probability

- **Axioms of probability**: Let $S$ be a sample space of an experiment. A probability set function is a function that assigns a real value $P(A)$ to every event $A \subseteq S$ and satisfies the following three properties:
	1. $P(A) \ge 0$ for any event $A \subseteq S$.
	2. $P(S) = 1$
	3. For any countable collection $A_1, A_2, A_3, \dots$ of mutually exclusive events: $$P\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)$$
- The **conditional probability** of an event $A$, given the event $B$, is defined by: $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
- Two events $A$ and $B$ are **mutually** **independent** if $P(A \cap B) = P(A) \cdot P(B)$.
- Events $A_1, \dots, A_n$ are **mutually independent** if for every subset $I \subseteq \{1, 2, \ldots, n\}$: $$P\left(\bigcap_{i \in I} A_i\right) = \prod_{i \in I} P(A_i)$$
 Random variables
 
- A **random variable** $X$ is a real-valued function on a sample space $X : S \to \mathbb{R}$.
    - $X(S)$ is the set of all possible values of the random variable $X$.
    - $X$ is discrete if $X(S)$ is finite or countably infinite.
    - $X$ is continuous if its CDF $F_X(x)$ is continuous and its derivative exists.
    - $X$ is mixed if its neither discrete nor continuous.

Probability density function (PDF)

- A **discrete probability density** **function** directly assigns a probability to each possible value of a discrete random variable. $f_X(x) = P(X = x)$.
    - Its also commonly called a probability mass function (PMF).
    - Support: the set of all values $x$ for which $f(x) \neq 0$.
    - Properties: A function $f(x)$ with a countable support $\{x_1, x_2, \ldots\}$ is a discrete PDF if and only if:
        - $f(x) \geq 0$  for all $x$
        - $\sum_if(x_i) = 1$
- A **continuous probability density function** is the derivative of its corresponding CDF $f_X(x) = F'_X(x)$. It does not directly assign a probability, instead the area under its curve corresponds to a probability.
    - Properties: A function $f(x)$ is a valid continuous PDF if and only if:
        - $f(x) \geq 0$ for all $x$
        - $\int_{-\infty}^\infty f(x)dx=1$
    - $P(X=x) = 0$
- A PDF can depend on some **parameter**. A collection of PDFs for different values of a parameter is called a **family** of PDFs.

Cumulative Distribution Function (CDF)

- The **cumulative distribution function** (CDF) of a random variable $X$ is the function $F_X(x) = P(X \leq x)$. The CDF provides the cumulative probability up to a certain value and is defined for all random variables.
    - Properties:
        - $\lim_{x \to \infty} F_X(x) = 1$
        - $\lim_{x \to -\infty} F_X(x) = 0$
        - $x_i \leq x_j \to F_X(x_i) ≤ F_X(x_j)$
    - Relation to the PDF:
        - Discrete case: $F_X(x) = \sum_{y \leq x} f_X(y)$
        - Continuous case:  $F_X(x) = \int_{-\infty}^x f_X(s)ds$
    - The probability $X$ falls within an interval $[a, b]$ is $P(a \lt X \leq b) = F(b) - F(a)$.

Expectation:

- If $X$ is a random variable with PDF $f(x)$, and $u(x)$ is a real-valued function whose domain includes the possible values of $X$, then $u(X)$ is a random variable, and the expected value of $u(X)$ is given by:
    - $E(u(X)) = \sum_i u(x_i) \cdot f(x_i)$ if $X$ is discrete
    - $E(u(X)) = \int_{-\infty}^{\infty} u(x) \cdot f(x) dx$ if $X$ is continuous
- Consequently:
    - $E(c) = c$
    - $E(aX + b) = aE(X) + b$
    - $E(a \cdot g(X) + b \cdot h(X)) = a \cdot E(g(X)) + b \cdot E(h(X))$

Variance

- The variance $\text{Var}(X)$ of a random variable $X$ is given by $\text{Var}(X) = E((X - E(X))^2)= E(X^2) - (E(X))^2$.
	- Variance is frequently denoted as $\sigma^2$. 
	- The standard deviation is denoted as $\sigma$.
- Consequently:
    - $Var(X) \geq 0$
    - $Var(aX + b) = a^2 \cdot Var(X)$

Moments

- The $k^\text{th}$ moment $u'_k$ of a random variable $X$ is defined as $E(X^k)$.
    - Also called moment about the origin.
- The $k^\text{th}$ central moment $u_k$ of a random variable $X$ is defined as $E( (X - \mu)^k )$
    - Also called moment about the mean.
- $E(X) = \mu = \mu'_1$

Moment generation functions:

- If $X$ is a random variable then the expected value $M_X(t) = E(e^{tX})$ is called the moment generating function MGF of $X$. But only if the expectation exists for all values of $t$ within some interval $|t| < h$ for some $h > 0$.
- The $r$-th derivative of $M_X(t)$ at $t=0$ equals the $r$-th moment $u'_r$
- We may expand $M_X(t) = 1 + \sum^\infty_{r=1} E(X^r)t^r / r!$
- Let $X$ and $Y$ be random variables such that $Y = aX + b$, then $M_Y(t) = e^{bt} \cdot M_X(at)$.

Inequalities

- Markov inequality: For a random variable $X$ that only takes non-negative values, it holds that for every $c \geq 0$: $P(X \geq c) \leq E(X) / c$
- Chebyshev inequality: For every random variable $X$ with expected value $\mu$ and variance $\sigma^2 > 0$ it holds that for every $k \gt 0$: $P(|X - \mu| \geq k\sigma) \leq 1 / k^2$
    - consequently, $P(|X - \mu| \lt k\sigma) \geq 1- 1 / k^2$

Joint, Marginal, and Conditional Distributions

- Joint Distribution: Describes the probability behavior of two or more random variables $X$ and $Y$ simultaneously.
    - Discrete (Joint PMF): $f_{X,Y}(x,y) = P(X=x, Y=y)$.
        - Properties: $f_{X,Y}(x,y) \ge 0$ and $\sum_x \sum_y f_{X,Y}(x,y) = 1$.
    - Continuous (Joint PDF): $f_{X,Y}(x,y)$ where $P((X,Y) \in A) = \iint_A f_{X,Y}(x,y) \, dx \, dy$
        - Properties: $f_{X,Y}(x,y) \ge 0$ and $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{X,Y}(x,y) \, dx \, dy = 1$.
- Marginal Distribution: The distribution of a subset of the variables contained in the joint distribution (summing or integrating out the others).
    - Discrete: $f_X(x) = \sum_{y} f_{X,Y}(x,y)$.
    - Continuous: $f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) \, dy$.
- Conditional Distribution: The probability distribution of $X$ when $Y$ is known to be a specific value $y$.$$f_{X|Y}(x|y) = \frac{f_{X,Y}(x,y)}{f_Y(y)}, \quad f_Y(y) > 0$$
- Independence: Two random variables $X$ and $Y$ are independent if and only if their joint distribution is the product of their marginals for all $x, y$.
    - $f_{X,Y}(x,y) = f_X(x) \cdot f_Y(y)$

Conditional expectation 

- The **conditional expectation** of a random variable $X$ given that a random variable $Y$ has taken the value $y$, denoted as $E(X \mid Y=y)$, is the expected value of $X$ computed with respect to the conditional probability distribution $f_{X|Y}(x|y)$.
    - Discrete: $E(X \mid Y=y) = \sum_{x} x \cdot P(X=x \mid Y=y)$
    - Continuous: $E(X \mid Y=y) = \int_{-\infty}^{\infty} x \cdot f_{X|Y}(x|y) \, dx$
- **Note:** While $E(X \mid Y=y)$ is a a function of $y$, $E(X \mid Y)$ is a random variable that depends on the outcome of $Y$.
- **Law of Total Expectation** states that the expected value of $X$ is equal to the expected value of the conditional expectation of $X$ given $Y$: $E(X) = E(E(X \mid Y))$.
	- Discrete: $E(X) = \sum_{y} E(X \mid Y=y) \cdot P(Y=y)$
	- Continuous: $E(X) = \int_{-\infty}^{\infty} E(X \mid Y=y) \cdot f_Y(y) \, dy$
- The **conditional variance** of $X$ given $Y$, denoted as $\text{Var}(X \mid Y)$, measures the variance of $X$ once the value of $Y$ is known. $$\text{Var}(X \mid Y) = E((X - E(X \mid Y))^2 \mid Y)=E(X^2 \mid Y) - (E(X \mid Y))^2$$
- **Law of Total Variance** relates the marginal variance of $X$ to the conditional variance and conditional expectation given $Y$: $$\text{Var}(X) = E(\text{Var}(X \mid Y)) + \text{Var}(E(X \mid Y))$$
# Common Probability Distributions

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




