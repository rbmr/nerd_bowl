# FEB21005S Probability Theory (pre-master)

Experiments, Sample spaces, Events

- Random Experiment: Any process whose outcome is uncertain.
- Sample Space $S$: The set of all possible experiment outcomes.
    - Discrete: finite or countably infinite number of outcomes.
    - Continuous: uncountable number of outcomes.
- Random Event $A$: collection of outcomes $A \subseteq S$
    - We say $A$ occurs when an outcome of an experiment belongs to $A$.
- Events $A$ and $B$ are mutually exclusive if $A \cap B = \empty$

Probability

- **Axioms of probability**: Probability is a function $P(A)$ assigning a real value to every event $A$:
    - $P(A) \geq 0$ for any $A$,
    - $P(S) = 1$
    - the probability of a disjunction of mutually exclusive events is the sum of their probabilities.
- **Conditional probability**: The probability of event $A$ occurring given that event $B$ already occurred. $P(A|B) = P(A \cap B) / P(B)$, provided $P(B) > 0$
- Independent events: Events $A$ and $B$ are independent if the occurrence of one, does not impact the probability of the other. $P(A \cap B) = P(A) \cdot P(B)$

Random variables

- A **random variable** $X$ is a real-valued function on a sample space $X : S \to \R$.
    - $X(S)$ is the set of all possible values of the random variable $X$.
    - $X$ is discrete if $X(S)$ is finite or countably infinite.
    - $X$ is continuous if its CDF $F_X(x)$ is continuous and its derivative exists.
    - $X$ is mixed if its neither discrete nor continuous.

Probability Density Function

- A **probability density function** (pdf) describes the probability distribution of a random variable. Its definition differs for discrete and continuous variables.
    - A pdf can depend on some **parameter**. A collection of pdf’s for different values of a parameter is called a **family** of pdf’s.
- A **discrete probability density** **function** directly assigns a probability to each possible value $f_X(x) = P(X = x)$.
    - Its also commonly called a probability mass function (pmf).
    - Support: the set of all values x for which $f(x) \neq 0$
    - Properties: A function $f(x)$ is a valid discrete pdf if and only if:
        - $f(x) \geq 0$  for all $x$
        - $\sum_if(x_i) = 1$
- A **continuous probability density function** is the derivative of its corresponding CDF $f_X(x) = dF_X(x) / dx$. It does not directly assign a probability, instead the area under its curve corresponds to a probability.
    - Properties: A function $f(x)$ is a valid continuous pdf if and only if:
        - $f(x) \geq 0$ for all $x$
        - $\int_{-\infty}^\infty f(x)dx=1$
    - $P(X=x) = 0$

Cumulative Distribution Function

- The **cumulative distribution function** (CDF) of a random variable $X$ is the function $F_X(x) = P(X \leq x)$  gives the cumulative probability up to a certain value and is defined for all random variables.
    - Properties:
        - $\lim_{x \to \infty} F_X(x) = 1$
        - $\lim_{x \to -\infty} F_X(x) = 0$
        - $x_i \leq x_j \to F_X(x_i) ≤ F_X(x_j)$
    - Relation to the pdf:
        - Discrete case: $F_X(x) = \sum_{y \leq x} f_X(y)$
        - Continuous case:  $F_X(x) = \int_{-\infty}^x f_X(s)ds$
    - The probability $X$ falls within an interval $[a, b]$ is $P(a \lt X \leq b) = F(b) - F(a)$.

Expectation:

- If $X$ is a random variable with pdf $f(x)$, and $u(x)$ is a real-valued function whose domain includes the possible values of $X$, then $u(X)$ is a random variable, and the expected value of $u(X)$ is given by:
    - $E(u(X)) = \sum_i u(x_i) \cdot f(x_i)$ if $X$ is discrete
    - $E(u(X)) = \int_{-\infty}^{\infty} u(x) \cdot f(x) dx$ if $X$ is continuous
- Consequently:
    - $E(c) = c$
    - $E(aX + b) = aE(X) + b$
    - $E(a \cdot g(X) + b \cdot h(X)) = a \cdot E(g(X)) + b \cdot E(h(X))$

Variance

- The variance $\text{Var}(X)$ of a random variable $X$ is given by $\text{Var}(X) = E((X - E(X))^2)= E(X^2) - (E(X))^2$, frequently denoted as $\sigma^2$. The standard deviation is $\sigma$.
- Consequently:
    - $Var(X) \geq 0$
    - $Var(aX + b) = a^2 \cdot Var(X)$

Moments

- The $k^\text{th}$ moment of $u'_k$ of a random variable $X$ is defined as $E(X^k)$.
    - Also called moment about the origin.
- The $k^\text{th}$ central moment $u_k$ of a random variable $X$ is defined as $E( (X - \mu)^k )$
    - Also called moment about the mean.
- $\mu = \mu'_1$
- skewness = $\mu_3 / \sigma_3$
- kurtosis = $\mu_4 / \sigma_4$

Inequalities

- Markov inequality: For a random variable $X$ that only takes non-negative values, it holds that for every $c \geq 0$: $P(X \geq c) \leq E(X) / c$
- Chebyshev inequality: For every random variable $X$ with expected value $\mu$ and variance $\sigma^2 > 0$ it holds that for every $k \gt 0$: $P(|X - \mu| \geq k\sigma) \leq 1 / k^2$
    - consequently $P(|X - \mu| \lt k\sigma) \geq 1- 1 / k^2$

Moment generation functions:

- If X is a random variable then the expected value $M_X(t) = E(e^{tX})$ is called the moment generating function MGF of X. But only if the expectation exists for all values of $t$ within some interval $|t| < h$ for some $h > 0$.
- The $r$-th derivative of $M_X(t)$ at $t=0$ equals the $r$-th moment $u'_r$
- We may expand  $M_X(t) = 1 + \sum^\infty_{r=1} E(X^r)t^r / r!$
- Let $X$ and $Y$ be random variables such that $Y = aX + b$, then $M_Y(t) = e^{bt} * M_X(at)$

Common distributions are given on your cheat-sheet

[PT Formula Sheet 2024-2025.pdf](PT_Formula_Sheet_2024-2025.pdf)

Here are the descriptions of some common discrete probability distributions:

- Bernoulli $X \sim \text{BERNOULLI}(p)$: Outcome indicating success $1$ with probability $p$, or failure $0$ with probability $1-p$.
- Binomial $X \sim \text{BIN}(n, p)$: Number of successes in $n$ independent Bernoulli trials.
- Geometric $X \sim \text{GEO}(p)$: Number of trials until first success for independent Bernoulli trials.
- Negative Bernoulli $X \sim \text{NB}(r, p)$: Number of trials needed for $r$ successes for independent Bernoulli trials.
- Poisson $X \sim \text{POI}(\lambda)$: Number of events in fixed time period if events occur with a fixed rate. Binomial converges to Poisson as $n \to \infty, p \to 0$, and $n \to \lambda$.

Here are some descriptions of some common continuous probability distributions.

- Uniform : constant probability between a minimum and maximum value.
- Exponential $X \sim \text{EXP}(\theta)$: density has an exponential and decaying form.
    - Memory less property: Let $X$ be a continuous random variable and let $\theta > 0$. Then $X \sim \text{EXP}(\theta)$ if and only if $P(X \gt a + t | X \gt a) = P(X \gt t)$ for all $a \gt 0$ and all $t \gt 0$.
- Weibull $X \sim \text{WEI}(\theta, \beta)$: Distribution to model the lifetime of products in cases where the exponential distribution is not sufficient.
    - If $\beta = 1$ then $X \sim \text{EXP}(\theta)$.
- Gamma $X \sim \text{GAM}(\theta, \kappa)$: Flexible model to describe (for example waiting) time between events.
    - If $\kappa = 1$, then $X \sim EXP(\theta)$.
    - Relies on the Gamma function, which extends the factorial function into complex domain.
    - If $X \sim GAM(\theta, \kappa)$ then $X / \theta \sim GAM(1, \kappa)$.
- Beta $X \sim \text{BETA}(\alpha, \beta)$: Distribution to model continuous outcomes on [0, 1]. Used to model random variables that measure relative frequencies.
    - Relies on the Beta function, which is related to the gamma function.
    - Construction: Let $X \sim \text{GAM}(\theta, \alpha)$ and $Y \sim \text{GAM}(\theta, \beta)$, and assume these random variables are indpendent. Then $X / (X + Y)$ has a beta distribution with parameters $\alpha$, and $\beta$.
- Standard Normal Distribution $Z \sim N(0,1)$: Most famous distribution.
    - Symmetric about 0
    - Adding changes the mean, and scaling about the mean means changing the variance.

Joint distributions

- Univariate random variables have variability in one dimension, bivariate two, and multivariate in multiple dimensions.
- Discrete joint pdf: All possible combinations of values with their corresponding probabilities form the join probability distribution. Discrete joint cdf works similarly.
- One can derive the marginal distributions form the joint distributions, but not the other way around (unless the random variables are independent).
- Multinomial experiment: n mutually independent trials, where the oucome of every trial are in in one of $k$ classes. The random variable $X_i$ records the number of trials with class $i$ outcomes. Multinomial experiment is a generalization of the binomial experiment.
- Continuous multivariate random variable is continuous if there exists a function that maps a subspace to a real number where each mapping is at least zero and the area under the entire curve is exactly one.