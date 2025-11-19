# Probability Theory (pre-master)

# Complete Picture of Contents

## **Univariate Distributions & Introductions (L1-4)**

- Random Variables
    - Discrete RV vs Continuous RV
    - Description functions for distributions
        - Cumulative Distribution Function (CDF)
        - Probability Mass Function (PMF) (Discrete pdf)
        - Probability Density Function (PDF)
        - Moment Generating Function (MGF)
    - Common Distributions
        - Discrete: Bernoulli, Binomial, Geometric, Negative Binomial, Poisson
        - Continuous: Uniform, Exponential (→ Memoryless property), Weibull, Gamma, Chi-Square, Beta, Normal

- Expectation and Moments
    - Expected Value (Mean)
    - Variance (Spread, or StDev^2)
    - Moments about Origin
    - Central Moments
- Inequalities
    - Markov’s Inequality
    - Chebyshev’s Inequality
    

## **Multivariate Distributions (L5-8)**

- Joint Distributions
    - Joint PDF (f(x1,x2))
    - Joint CDF (F(x1,x2))
- Derived Distributions
    - Marginal Distributions
    - Conditional Distributions
- Distribution Relationships
    - Independence
    - Covariance
    - Correlation
    - Bivariate Normal Distribution

- Conditional Expectation and Variance
    - Conditional Expectation
    - Conditional Variance
    - Law of Total Expectation
    - Law of Total Probability
- Multinomial Distributions

## **Transformations and Asymptotics (L9-12)**

- Transformations (Functions of RVs)
    - CDF Method
    - Jaccobian Method
    - MGF Method
        - Sum of independent RVs
        - Linear Combination of Normals is Normal
- Sampling and order Statistics
    - Random Sample
    - Order Statistics
        - Sample minimum, maximum
        - i-th Order Statistic Density

- Asymptotics
    - Convergence in probability and in distributions
    - Law of Large Numbers
    - Central Limit Theorem
        - Standardization
    - Normal Approximations
        - for Binomial, Poisson
        - Continuity Correction
- Sampling Distributions (Normal)
    - Sample mean
    - Sample variance
    - Y and S^2 are independent
    - Student’s t-Distribution (t(k))
    - F-Distributions

# Univariate Distributions & Introductions (L1-4)

## Introductions

**Experiment:** An action whose outcome is subject to uncertainty

**Sample Space $S$:** The set of all possible outcomes of an experiment.

- A discrete sample space has a finite or countably infinite number of outcomes
- A continuous sample space has an uncountable number of outcomes

**Event:** Collection of outcomes → Subset of $S$.

- Event $A$ occurs when the outcome of an experiment belongs to $A$
- $A \cup B$: all outcomes in either A or B
- $A \cap B$: all outcomes in both A and B
- $\overline{A}, S \backslash A, A'$: all outcomes not in A

### **Mutually Exclusive**

Two events are mutually exclusive if: $A \cap B = \empty$

Events $E_1,...,E_n$ are mutually exclusive if they are pairwise mutually exclusive, if $E_i \cap E_j = \empty$ whenever $i ≠ j.$ 

### **Axioms of probability**

Let S be a sample space of an experiment. A probability set function is a function that assigns a real value $P(A)$  to every event $A \underline{\subset}S$ and satisfies the following properties:

1. $P(A) ≥ 0$ for any event $A$
2. $P(S) = 1$
3. For any countable collection $A_1,...,A_n$ of mutually exclusive events:                  $P(\bigcup_{i=1}^{\infin}A_i)=\sum_{i=1}^{\infin}P(A_i)$

### **Conditional Probability**

The conditional probability of an event $A$, given the event $B$, is defined by 

$$
P(A \mid B) = \frac{P(A\cap B)}{P(B)} \,\,\,\,\, if \space P(B)>0
$$

### **Independent Events**

Two events $A$  and $B$ are independent if $P(A \cap B) = P(A) \cdot P(B)$.

The events $A_1,...,A_n$ are independent or mutually independent if for every $k=2,3,...,n$ and for every subset $\{i_1, ..., i_k\}$ of $\{1,2,...,n\}:$

$$
P(\bigcap_{j=1}^{k}A_{i_j}) = \prod_{j=1}^{k}P(A_{i_j})
$$

## Random Variables

A random variable X is a real valued function on a sample space:

$X:S→ℝ$

If the set $X(S)$ of all possible values of the random variable $X$ is finite or countably infinite, then $X$ is called a discrete random variable, if the possible values is uncountable, then it is continuous. 

## Describing Probability Distributions

The probability distribution of a random variable is completely described by one of three primary functions: 

- Probability Density Function (PDF)
- Cumulative Distribution Function (CDF)
- Moment Generating Function (MGF)

### **Cumulative Distribution Function**

The CDF of an RV $X$ is defined as $F(x) = P(X \le x)$ and must satisfy the following three properties:

1. Lower limit: $F(-\infin) = \lim_{x\rarr-\infin}F(x)=0$
2. Upper limit: $F(\infin) = \lim_{x\rarr\infin}F(x)=1$
3. Non-Decreasing: if $x_1 < x_2 \text{, then } F(x_1) < F(x_2)$ 

Calculating the CDF can be done as such:

- if $X$ is discrete: $F(x) = \sum_{y\in X(S):y\le x}P(X=y)$
- if $X$  is continuous: $F(x) = \int_{-\infin}^{x}f_X(s)ds$

### **Probability Density Function**

For a discrete random variable $X$, the pdf, more precisely called the Probability MASS Function (pmf), is defined as the probability that $X$ takes on a specific value $x$.:

$$
f_X(x)=P(X=x)=P(\{s\in S: X(s) = x\})
$$

The set of values $x$ for which $f(x)\ne 0$ is called the $support$.

A function $f(x):\reals\rarr\reals \text{ with a countable support } \{x_1,x_2,...\}$ is a discrete pdf if and only if it statisfies the following two properties:

1. Non-negativity: $f(x_i)\ge 0 \text{ for all } x_i$
2. Normalization: $\sum_{x\in S} f(x) = 1$

For a continuous random variable $X$, the pdf is denoted by $f(x)$ and is used to valculate probabilities via integration. The function does not directly translate $x$ values to probabilities, and rather shows a probability density. The area under the curve shows the probability that $X$ takes on a value between $x_1$ and $x_2$.

The continuous pdf has to follow the following properties:

1. Non-negativity: $f(x_i)\ge 0 \text{ for all } x_i$
2. Normalization: $\int_{-\infin}^{\infin}f(x)dx = 1$

Without integration you can make an approximation of the probability: $P(x < X < x+\epsilon) = f(x) \cdot \epsilon$. The smaller $\epsilon$ is, the more accurate the approximation. 

You can obtain a CDF by integrating the PDF, and can obtain a PDF by differentiating the CDF. The PDF represents the rate of change of the CDF.

### **Moment Generating Function**

> Note: Moments are explained in the next section
> 

https://www.youtube.com/watch?v=wjwLTNYOuI4

https://www.youtube.com/watch?v=u0ku4bvp40I

Distributions can be described by moments. For example, a gaussian is defined based on the first and second moments. The mean being the first moment, and the standard deviation being derived by the second and first moment (or the second central moment). 

The MGF of a random variable $X$ is defined as the expected value of $e^{tX}$: $M_X(t) = E[e^{tX}]$.

- For discrete: $M_X(t)= \sum_{x}e^{tx}\cdot f(x)$
- For continuous: $M_X(t) = \int_{-\infin}^{\infin}e^{tx}\cdot f(x)dx$

The MGF exists only if this expected value exists for all values of $t$ within some interval of the form $|t|<h$, where $h>0$. 

The key utility of the MGF is the ability to generate moments of the random variable. The $r$-th derivative of the MGF evaluated at $t=0$ yields the $r$-th moment about the origin, $\mu_{r}^{'}$:

$$
M_{X}^{(r)}(0) = E(X^r)=\mu_{r}^{'}
$$

The first moment is the expected value, and the second moment is $E(X^2)$, both necessary for calculating the $Var(X)$.

**Taylor series**

The taylor series of a function $g$ about $x=a$ is: $g(x) = 1 + \sum_{k=0}^{\infin} \frac{g^{(k)}\cdot (a)}{k!}(x-a)^k$

The moments of a random variable $X$ are intrinsically linked to the taylor series expansion of its MGF,       $M_X(t) = 1 + \sum_{r=1}^{\infin} \frac{E[X^r]\cdot t^r}{r!}$

## Expected Value, Variance, and Moments

### **Expected Value**

**The expected value, $E[X]$, serves as the measure of central tendency of the population mean ($\mu$) for a random variable $X$.**

Discrete: $E[X] = \sum_ix_i\cdot f(x_i)$ & $E[u(X)] = \sum_i u(x_i) \cdot f(x_i)$

Continuous: $E[X] = \int_{-\infin}^\infin x \cdot f(x)dx$ & $E[X] = \int_{-\infin}^\infin u(x) \cdot f(x)dx$

Properties:

- $E[c] = c$ for any constant $c \in \reals$
- $E[aX+b] = aE[x] +b$
- $E[a\cdot g(X) + b\cdot h(X)] = aE[g(X)] + bE[h(X)]$

### **Variance**

The variance, often denoted as the square of the standard deviation ($\sigma^2$), is a measure of spread or variability of the distribution around it’s mean. 

$Var(X) =E[(X-E[x])^2] = E[X^2] - (E[X])^2$

- $Var(X)\ge 0$
- $Var(aX) = a^2Var(X)$
- $Var(X+b) = Var(X)$

### **Moments**

Moments are specific expected values used to describe the shape and characteristics of a distribution.

Moments about the Origin ($\mu_k^{'}$) are defined as $E[X^k]$.

Central moments are moments about the mean ($\mu_k$), defined as $E[(X-\mu)^k]$.

The first central moment is always 0, and the second central moment is equal to the $Var(X).$  The third and fourth moments are used to calculate the coefficients of skewness ($\mu_3/\sigma^3$) and kurtosis ($\mu_4/\sigma^4$), respectively.

## Inequalities

### **Markov’s Inequality**

Markov’s inequality provides an upper bound on the probability that a non-negative random variable exceeds a certain positive value. 

Requirement: RV $X$ can only take in non-negative values $x$.

Formula: For a RV $X$ that only takes positive values, it holds that for every $c>0$,  $P(X\ge c) \le \frac{E[X]}{c}$.

This inequality helps bound the probability of observing large deviations from the origin based solely on the expected value. 

### **Chebyshev’s Inequality**

For every $k>0$, the probability of $X$ deviation from its mean $\mu$ by $k$ amount of standard deviations $\sigma$ or more is bounded: $P(|X-\mu|\ge k\sigma) \le \frac{1}{k^2}$.

For every $\epsilon > 0$, the bound can be experssed using the variance directly: $P(|X-\mu| \ge \epsilon) \le \frac{\sigma^2}{\epsilon^2}$.

This inequality demonstrates how the measure of spread restricts the likelihood of extreme values. 

# Multivariate Distributions (L5-8)

## Joint and Marginal Distributions

The joint distribution describes the probabilities associated with combinations of outcomes for multiple random variables.

### Joint PDFs

**Discrete Random Variables**

For a pair fo discrete random variables $(X_1, X_2)$, the joint distribution is summarized by the joint probability mass function, $f(x_1, x_2) = P(X_1=x_1, X_2 =x_2)$.  For this to be a valid PDF/PMF, the following must hold:

- $f(x_1, x_2) \ge 0 \text{, for all } (x_1,x_2)$
- $\sum_{x_1,x_2}f(x_1,x_2)=1$

**Continuous Random Variables**

A bivariate random variable ($X_1, X_2$) is continuous if a function $f:\reals^2 \rarr \reals$ exists, such that the probability of the vector $(X_1,X_2)$ falling into the set $A \subset \reals^2$ is calculated by the double integral: $P((X_1,X_2)\subset A) = \int\int_Af(x_1,x_2)dx_1dx_2$.

- $f(x_1, x_2) \ge 0 \text{, for all } (x_1,x_2)$
- $\int_{-\infin}^{\infin}\int_{-\infin}^{\infin}f(x_1,x_2)dx_1dx_2 = 1$

### Joint CDF

The joint CDF is defined as $F(x_1,x_2) = P(X_1\le x_1, X_2 \le x_2)$ . 

The joint continuous pdf can be obtained by taking the mixed partial derivatives of the joint CDF.

### Marginal Distributions

A marginal distribution describes the probability of a single random variable derived from a joint distribution of two or more variables. 

The marginal pdf is calculated by summing or integrating the joint pdf over all possible values of the other random variables. 

## Dependence and Association

### Independence

The following four statements are equivalent:

1. The random variables $X_1,...,X_n$ are mutually independent.
2. The joint CDF factors into the product of marginal CDFs for every value $x_1,...,x_k$: $F(x_1,...,x_k) = F_1(x_1)\cdot...\cdot F_k(x_k)$
3. The joint PDF factors into the product of the marginal pdfs for every value $x_1,...,x_k$: $f(x_1,...,x_k) = f_1(x_1)\cdot...\cdot f_k(x_k)$
4. For discrete random variables, the joint PMF factors into the product of the marginal PMFs for every value $x_1,...,x_k$:  $P(X_1=x_1,...,X_k=x_k) = P(X_1=x_1)\cdot...\cdot P(X_k=x_k)$

Practical criteria for independence:

1. The support set $S=\{(x_1,x_2)|f(x_1,x_2)>0\}$, must be a cartesian product $A\times B$.
2. The joint pdf must be factorable into a product of functions of $x_1$ and $x_2$: $f(x_1,x_2) = g(x_1)\cdot h(x_2)$. Note that these functions do not necessarily have to be the marginal distributions, but if independence holds, $f(x_1,x_2)  \text{ will always equal } f_1(x_1)\cdot f_2(x_2)$.

### Covariance

The covariance of two random variables measures how they vary together relative to their means:
$Cov(X,Y) = E[(X-\mu_X)\cdot (Y-\mu_Y)]$

A positive covariance indicates that on average X and Y tend to similarly take large values or small values with respect to their expected values. A negative covariance indicates that on average large values of X coincide with small values of Y, and vice versa. 

If the covariance equals 0, then they are uncorrelated. 

If the random variables are independent then their covariance is equal to 0, but this does not hold the other way around. 

$Cov(X,X) = Var(X)$

### Variance of linear combinations

For two random variables, the variance of their linear combinations is:

$Var(aX+bY) = a^2Var(X)+b^2Var(Y)+2ab(Cov(X,Y))$

### Correlation Coefficient

The correlation coefficient normalized the covariance. $\rho_{X,Y} = \frac{Cov(X,Y)}{\sigma_X \cdot \sigma_Y}$

The correlation is bounded to $-1 \le \rho \le 1.$

The correlation is exact 1 or -1, iff the random variables are a perfect linear function of eachother (aX+b). 

If $X$ and $Y$ are mutually independent, then $\rho_{X,Y}=0$, but a $\rho_{X,Y}=0$ does not imply independence.

## Conditional Distributions and Expectation

### Conditional Distributions

Conditional distributions are used to determine the distribution of one random variable using known information about another variable. 

For continuous random variables $X$ and $Y$ with joint density $f(x,y)$ and marginal densities $f_X(x)$ and $f_Y(y)$, the conditional density of $X$ given that $Y=y$ is defined as: $f(x|y) = \frac{f(x,y)}{f(y)}$. A similar formula applies to discrete random variables. 

A conditional density function must satisfy the stand properties of a pdf: never negative, and the integral over all x must be equal to 1. 

Conditional density is directly linked to the independence of the random variables. If $X$ and $Y$ are independent, the joint density $f(x,y)$ factors into the product of their marginal densities. Consequently, for independent variables, the conditional density $f(x|y)$ simplifies to the marginal density $f(x)$

### Conditional Expectation and Variance

**Conditional Expectation**

The conditional expectation measures what one expects from a random variable given a known value or outcome of another variable. 

$E[X|Y=y] = \int_{-\infin}^{\infin}x\cdot f(x|y)dx$, provided that the marginal density $f_Y(y)>0$.

**Law of total expectation**

$E[X|Y=y]$ is a function of $y$. When y is replaced with the random variable $Y$, then the resulting $E[X|Y]$ is also a random variable. The expectation of this random variable is then equal to the expectation of $X$.

$E[X] = E[E[X|Y]]$

This formula can be used to solve problems by breaking down the expectation calculation into stages of conditioning. 

**Law of total probability**

$P(A)=E[P(A|X)]$

**Conditional Variance**

Similar to expectation, conditional variance allows for the assessment of spread or variability given knowledge of another random variable. 

The conditional variance of $Y$ given the event $X=x$ is defined using the familiar relationship between variance, second moment, and mean, applied conditionally:

$$
Var(Y|X=x)=E[Y^2|X=x]-(E[Y|X=x])^2
$$

**Conditional Variance Formula**

The conditional variance formula decomposes the total variance of $Y$into two components: the expected value of the conditional variance and the variance of the conditional expectation:

$Var(Y)= E[Var(Y|X)] + Var(E[Y|X])$

# Transformations, Sampling & Asymptotics (L9-12)

## Transformations of RVs

The goal of transformation methods is to determine the distribution of a new random variable $Y=h(X_1,...,X_n)$. 

### CDF Method

**Univariate Transformation**

$\text{Let } X \text{ be a random variable and let } Y=h(X) \text{ be a function of the random variable } X$.

$\text{Find the CDF of Y:}$

- For each $y \in \reals$ determine $D_y=\{x:h(x)\le y\}$
- Express $F_Y(y)=P(Y\le y) \text{ as } P(X\in D_y)$

Example:

Let $Z \sim N(0,1)$ and let $Y=Z^2$. FInd the $CDF$ and $pdf$ of $Y$.

- $Y=h(Z)$, with function $h$ as $h(z)=z^2$
- Let $y \in \reals$, then:

$$
F_Y(y) = P(Y\le y) = P(Z^2 \le y) \\
= \begin{cases} 
P(-\sqrt{y} \le Z \le \sqrt{y}) \,\,\,\text{ for } y \ge 0 \\
0 \, \, \, \text{ otherwise}
\end{cases} 

\\
= \begin{cases} 
\Phi(\sqrt(y))-\Phi(-\sqrt(y)) \,\,\, \text{ for } y \ge 0 \\
0 \, \, \, \text{ otherwise}
\end{cases} \\

\text{with previous notation: } \bigg(D_y=\{z:h(z)\le y\}=\{z:z^2\le y\}=\begin{cases}[-\sqrt{y},\sqrt{y}] \text{ for } y\ge 0\\0 \text{ otherwise}\end{cases}\biggl) 
$$

This can then be differentiated to find the PDF.

**Bivariate Transformation**

Let $X_1$ and $X_2$ be random variables and let $Y=h(X_1,X_2)$ be a function of these random variables.

Find the CDF of $Y$:

- Draw the borders of support $S$, the area on which $f(x_1,x_2)>0$
- For different values of $y$, draw the graph of $h(x_1,x_2)=y$
- Find the values of y for which the shape of the intersection of $D_y=\{(x_1,x_2): h(x_1,x_2)\le y\}$ and $S$ changes
- For all values of $y$ found in step 3, calculate $F_Y(y)=P(Y\le y)$

### Jacobian Method (pdf based)

**Univariate Transformation**

If $X$ is a discrete random variable and $h$ is a bijective function with inverse $h^{-1}$, then the PMF of $Y=h(X)$ is given by $P(Y=y)=P(h(X)=y)=P(X=h^{-1}(y))$.

Let $X$ be a random variable with density $f_X$ and $h$ a strictly monotone  function on $S=\{x:f_X(x)\ge 0\}$ with inverse $h^{-1}$. Then, the density function of $Y=h(X)$ is equal to:

$$
f_Y(y)=f_X(h^{-1}(y)) \cdot |{\frac{dh^{-1}(y)}{dy}}|
$$

If $h$ is *strictly increasing.* then: $f_Y(y)=f_X(h^{-1}(y)) \cdot {\frac{dh^{-1}(y)}{dy}}$

if $h$ is *strictly decreasing*, then: $f_Y(y)=-f_X(h^{-1}(y)) \cdot {\frac{dh^{-1}(y)}{dy}}$

*How can you calculate the distribution of $h(X)$  when  $h$ is not invertible* ($h(x)=y$ has no unique solution)*?*

- Method 1: Use CDF method
- Method 2: partition the support:
    - Usually we can partition the support $S=\{x:f_X(x)\ge 0\}$ into disjunct subsets $S_1,...,S_k$ on which $h$ is invertible
    - For each $j=1,...,k$ compute $h_j^{-1}$, the inverse function of $h$ on $S$
    - Finally add up the contributions of each $S_j$:
        - Discrete: $f_Y(y)=\sum_{j=1}^{k} f_X(h_j^{-1}(y))$
        - Continuous: $f_Y(y)=\sum_{j=1}^{k} f_X(h_j^{-1}(y)) \cdot |{\frac{dh_j^{-1}(y)}{dy}}|$
        
        ![image 4.png](50_Assets/image%204.png)
        

**Bivariate Transformation**

![image.png](image%201%201.png)

![image.png](image%202%201.png)

![image.png](image%203%201.png)

### MGF Method (sums / linear combinations)

**MGF Method in steps**

1. Let random variable $S=h(Y_1,...,Y_n)$ be a function of the random variables $Y_1,...,Y_n$.
2. Calculate the MGF of $S$ : $M_S(t) = E[e^{t\cdot h(Y_1,...,Y_n)}]$
3. Compare the result to the MGFs of known distributions
4. If $M_S(t)$ equals the MGF of a known distribution, then  $S$ has the same distribution

**Sums of independent random variables**

Let $Y_1,...,Y_n$ be independent random variables with moment generating functions $M_{Y_1}(t),...,M_{Y_n}(t)$.

The MGF of $S=Y_1+...+Y_n$ is $M_S(t) = M_{Y_1}(t)\cdot...\cdot M_{Y_n}(t) = \prod_i M_{Y_i}(t)$

**Linear Combinations**

Let $a_1,...,a_n \in \reals$ and let $Y_1,..,Y_n$ be independent random variables with MGFs $M_{Y_1}(t),...,M_{Y_n}(t)$.
The MGF $L=\sum_i^n a_iY_i$ is $M_L(t)=\prod_i^n M_{Y_i}(a_i t)$

## Sampling Distributions

### Random Sample

We say that random variables $Y_1,...,Y_n$ form a ***random sample*** of size $n$ if

- The $Y_i$’s are independent
- The $Y_i$’s have the same probability distribution

So, if the $Y_i$’s are ***independent and identically distributed (iid)***

Other words:

> A set of random variables $Y_1,...,Y_n$ is a random sample of size $n$ from a population with density function $f(x)$ if the joint pdf has the form: $f(y_1,...,y_n)=f(y_1)\cdot ... \cdot f(y_n)$. (this implies iid)
> 

### Order Statistics

**Ordered Sample**

Sorting the sample $Y_1,...,Y_n$ in ascending order yields random variables $Y_{1:n}\le...\le Y_{n:n}$. The RV $Y_{i:n}$ is called the $i^{\text{th}}$ ***order statistic***.

The behaviour of the ordered sample differs from the behaviour of the random sample: the order statistic are dependent, and do not have a common distribution. 

> If $Y_i$ has density $f(x)$ for $i=1,..,n$, then $Y_{1:n},...,Y_{n:n}$ have joint density                       $g(y_{1:n},..,y_{n:n})=\begin{cases}

n!f(y_{1:n}\cdot ... \cdot y_{n:n}) \,\,\,\text{   if } y_{1:n} \le ... \le y_{n:n} \\
0 \,\,\,\text{ otherwise}

\end{cases}$
> 

![image.png](image%204%201.png)

**Sample Minimum**

![image.png](50_Assets/image%205.png)

**Sample Maximum**

![image.png](50_Assets/image%206.png)

### Normal Population Results

### t-Distribution

![image.png](50_Assets/image%207.png)

### F-Distribution

![image.png](50_Assets/image%208.png)

## Asymptotics (limiting distributions)

### Convergence in Probability

![image.png](50_Assets/image%209.png)

### Law of Large Numbers

![image.png](50_Assets/image%2010.png)

### Convergence in Distributions

![image.png](image%2011.png)

### Central Limit Theorem

![image.png](image%2012.png)

### Normal Approximations (CLT derived)