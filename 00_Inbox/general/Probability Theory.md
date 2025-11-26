
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

Conditional expectation 

- The **conditional expectation** of a random variable $X$ given that a random variable $Y$ has taken the value $y$, denoted as $E(X \mid Y=y)$, is the expected value of $X$ computed with respect to the conditional probability distribution $f_{X|Y}(x|y)$.
    - Discrete case: $E(X \mid Y=y) = \sum_{x} x \cdot P(X=x \mid Y=y)$
    - Continuous case: $E(X \mid Y=y) = \int_{-\infty}^{\infty} x \cdot f_{X|Y}(x|y) \, dx$
- **Note:** While $E(X \mid Y=y)$ is a value (a function of $y$), $E(X \mid Y)$ is a random variable that depends on the outcome of $Y$.
- **Law of Total Expectation** states that the expected value of $X$ is equal to the expected value of the conditional expectation of $X$ given $Y$: $E(X) = E(E(X \mid Y))$.
	- Discrete: $E(X) = \sum_{y} E(X \mid Y=y) \cdot P(Y=y)$
	- Continuous: $E(X) = \int_{-\infty}^{\infty} E(X \mid Y=y) \cdot f_Y(y) \, dy$
- The **conditional variance** of $X$ given $Y$, denoted as $\text{Var}(X \mid Y)$, measures the variance of $X$ once the value of $Y$ is known.$$\text{Var}(X \mid Y) = E((X - E(X \mid Y))^2 \mid Y)=E(X^2 \mid Y) - (E(X \mid Y))^2$$
- **Law of Total Variance** relates the marginal variance of $X$ to the conditional variance and conditional expectation given $Y$: $$\text{Var}(X) = E(\text{Var}(X \mid Y)) + \text{Var}(E(X \mid Y))$$
