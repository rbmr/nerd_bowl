# Non-Linear Optimization

# Course Information

### Study Goals

Operations research boils down to minimizing (or maximizing) some function over some set. For example, the set could consist of all possible solutions to a practical problem, and the function could represent the cost of a solution. Given these two, an operations research expert tries to find the cheapest solution that meets all requirements.

There are multiple courses in the Econometrics and Operations Research program where we minimize functions over sets. Linear Programming is about minimizing linear functions over polyhedra. Combinatorial Optimisation considers functions defined on countable sets. This course, in all modesty, covers everything else: not-necessarily-linear functions defined on uncountable sets.

There are three main aims in this course. Obviously, you will learn the theory of non-linear optimization. Moreover, you will develop your programming skills in Python. Finally, we will train formal reasoning by writing mathematical proofs.

To be more precise, by the end of the course, you should be able to:
- prove what the unconstrained minimum of a continuous function is (ifit can be found analytically);
- implement a line search algorithm to approximate the minimum of acontinuous function (if it cannot be found analytically);
- Explain what the different options for line search are;
- prove what the minimum is of a continuous function on an algebraic set;
- explain what types of algorithms are used in practice to solve continuous optimization problems;
- determine the Lagrangian dual of a continuous optimization problem;
- create logically valid theoretical proofs in the context of non-linear optimization;
- implement simple algorithms in Python.

### Assessment

The final grade is based on the following:
- Two assignments (count for 10% each); see Section 6.1.
- Written exam (counts for 80%); see Section 6.2.

The resit covers the same material as the exam, and also counts for 80%. There is no minimum grade for the exam or resit to get a valid grade. In general, partial results – such as assignment grades – of previous years are not valid in the current academic year.

# Week 1: Unconstrained Analysis

## 1. The Optimization Problem
We focus on **Unconstrained Optimization** where $X = \mathbb{R}^n$. The goal is to find the minimizer.

![[Mathematical Optimization#Definition]]

### Minima vs Infima
It is crucial to distinguish between the mathematical minimum and the infimum.

![[Optimal Values#Minimum]]

![[Optimal Values#Infinum]]

## 2. Finding Candidates (Stationary Points)
To find a minimizer, we first look for stationary points.

![[Gradients#Stationary Points]]
![[Fermat's Theorem (Optimization)#Fermat's Theorem]]

## 3. Proving Optimality via Convexity
If we can prove the function is convex, the search becomes much easier.

![[Convexity#Convex Functions]]

![[Convexity#Strict Convexity]]

> **Theorem:** If $f$ is convex, any stationary point is a **Global Minimizer**.

## 4. General Conditions for Local Minimizers
If the function is *not* convex, we rely on second-order conditions.

![[10_Concepts/Second-Order Optimization Conditions#Summary]]

**Example:**
For $f(x) = 3x^4 + 8x^3 - 18x^2$:
* $x=0$: Hessian is negative (local max).
* $x=1$: Hessian is positive (local min).
* $x=-3$: Hessian is positive (local min).

## 5. Existence of Global Minimizers
How do we know a solution exists at all?

![[10_Concepts/Weierstrass Theorem#Summary]]

## Roadmap: Finding the Global Minimizer
When faced with an unconstrained problem $\min_{x \in \mathbb{R}^n} f(x)$, follow this decision tree:

### Step 1: Find Stationary Points
Solve the gradient equation for $x$:
$$\nabla f(x) = 0$$
* *Outcome:* You get a set of candidate points $x^*_1, x^*_2, \dots$.

### Step 2: Check Convexity (The "Happy Path")
Check the Hessian matrix $\nabla^2 f(x)$ for all $x$.
* **Is $\nabla^2 f(x) \succeq 0$ (Positive Semi-Definite) everywhere?**
    * **YES:** $f$ is convex. All stationary points found in Step 1 are **Global Minimizers**. You are done.
    * **NO:** Proceed to Step 3.

### Step 3: Classify Local Candidates (The "Hard Path")
Since $f$ is not convex, we must check each candidate individually using **Second-Order Conditions**.
* Calculate the Hessian $\nabla^2 f(x^*)$ at each specific candidate point.
    * **If Indefinite:** Saddle point (ignore).
    * **If Negative Definite:** Local Maximum (ignore).
    * **If Positive Definite:** **Local Minimizer** Keep this candidate.

### Step 4: The Global Argument (Weierstrass)
You now have a list of Local Minimizers. To prove one is **Global**, you must rule out that the function dips to $-\infty$ somewhere far away.
* **Check Limits:** Does $\lim_{||x|| \to \infty} f(x) = \infty$?
    * **YES:** You can restrict the domain to a compact set (Box). By **Weierstrass**, a global minimum exists. It *must* be one of your local minimizers.
    * **Compare:** Evaluate $f(x)$ at all local minimizers. The one with the lowest value is the **Global Minimizer**.


# Week 2: Gradient Descent
## General Line Search Framework
When stationary points cannot be determined analytically, numerical line search algorithms are used to approximate them. 

**The general algorithm**
- Starting from an initial point $x_{0}$, the method iterates until covergence using the update rule: $x_{k+1}\leftarrow x_{k} + \alpha_{k}p_{k}$
- $\alpha_{k}$ is the step length, $p_{k}$ is the search direction
- **Descent Direction**: A valid direction $p$ must satisfy $\nabla f(x)^T p < 0$, ensuring the function value decreases.

## Gradient Descent (Steepest Descent)
## Gradient Descent (Steepest Descent)
This method chooses the direction in which the function decreases fastest.
- **Direction**: The steepest descent direction is the negative gradient: $p=-\nabla f(x)$.
- **Derivation ($\phi'$ Analysis)**:
    - We analyze the "slice" of function $f$ along a direction $p$ using the scalar function $\phi(\alpha) = f(x + \alpha p)$.
    - The rate of change of $f$ at $x$ along $p$ is the derivative $\phi'(0) = \nabla f(x)^\top p$.
    - By the Cauchy-Schwarz inequality, $\nabla f(x)^\top p \ge - \|\nabla f(x)\| \|p\|$.
    - Consequently, choosing $p = -\nabla f(x)$ attains this lower bound, yielding the steepest possible descent.
- **Limitations**: Gradient Descent often zigzags or overshoots the [[Minimizers|minimizer]], especially with fixed step lengths.

### Momentum Methods
To mitigate zigzagging and improve convergence speed, momentum methods recycle information from previous iterations. 
#### Polyak's Heavy-ball Method
This method adds a "momentum" term based on the previous step.
$$
y_{k} = x_{k} + \beta_{k}(x_{k}-x_{k-1})
$$
$$
x_{k+1} = y_{k} - \alpha_{k}\nabla f(x_{k})
$$
This takes into account the amount of movement the previous step had, and in which direction, scaled using $\beta$. If the current slope tells us to rapidly turn around, it will do more slowly as the old velocity is still going in the other direction. 

#### Nesterov's Accelerated Gradient Descent (NAG)
Just like Polyak's method, this adds the momentum or 'old velocity' of the previous step.
$$
y_{k} = x_{k} + \beta_{k}(x_{k}-x_{k-1})
$$
$$
x_{k+1} = y_{k} - \alpha_{k}\nabla f(y_{k})
$$
A crucial difference is in the calculation of $x_{k+1}$. Instead of calculating the gradient of $f(x_{k})$, $f(y_{k})$ is used. Thus, it calculates and uses the gradient at that future position where it would end up by solely taking the momentum. 
In places where it is rapidly falling down a hill, where at the bottom the global minimum is located, and right after that another (smaller) hill, it does not add the momentum downwards and the gradient downwards together, making it overshoot. For the NAG, it first applies the momentum, and then sees "OH! It was about to overshoot on this smaller hill, let's turn back!" and applies the new gradient back towards the global minimum. 

### Convergence Analysis
The efficiency of these methods is analyzed using [[10_Concepts/Taylor's Theorem|Taylor's Theorem]] and the condition number $\kappa = \frac{L}{\mu}$.
- $\mu$ is the minimum eigenvalue and $L$ is the maximum eigenvalue of the [[Hessian Matrix|Hessian]] $\nabla^2f(x)$. 
- A large $\kappa$ implies the function is hard to minimize numerically. 


### Stochastic Gradient Descent (SGD)
In machine learning problems, among others, the objective function is a sum of $m$ terms, making it computationally expensive to calculate the full gradient when $m$ is large. 

To minimize $f(x)=\frac{1}{m}\sum_{j=1}^m f_{j}(x)$:
- $x_{k+1}=x_{k}-\alpha_{k}\frac{1}{|\mathcal{B}_{k}|}\sum_{j\in\mathcal{B}_{k}}\nabla f_{j}(x_{k})$
- $\mathcal{B}_k \subseteq \{1, ..., m\}$

To ensure convergence and dampen noise, step lengths $\alpha_{k}$ must decay such that they satisfy the [[10_Concepts/Robbins-Monro conditions|Robbins-Monro conditions]]:
$$\sum_{k=1}^{\infty} \alpha_k = \infty \quad \text{and} \quad \sum_{k=1}^{\infty} \alpha_k^2 < \infty$$

#### Stochastic Optimization
Using gradient statistics, the noisy gradients calculated from mini-batches can be made more stable. The core mechanism for this is the Exponentially Weighted Moving Average.

##### EWMA (Exponentially Weighted Moving Average)
EWMA allows us to estimate the statistical properties (mean and variance) of the gradient without storing the entire history of previous steps.
- **Formula**: $z_{k} = \beta z_{k-1} + (1-\beta)y_{k}$
  Where $z_k$ is the running average, $y_k$ is the new observation (e.g., the current gradient), and $\beta \in [0, 1)$ is the decay rate.
- **Efficiency**: This provides a running average while only requiring one extra value ($z_{k-1}$) to be stored per parameter.
- **Bias Correction**: Since $z_0$ is initialized to 0, the average is biased towards zero during the initial steps. This is corrected by scaling the estimate: $\hat{z}_{k} = \frac{z_{k}}{1 - \beta^k}$
EWMA is the building block for sophisticated optimizers that utilize the "moments" of the gradient:
##### Momentum
This method applies EWMA to the gradient vector itself ($g_k$) to estimate the first moment (mean).
- **Estimate Formula**: $m_{k} = \beta_{1}m_{k-1} + (1-\beta_{1})g_{k}$
  Here, $m_k$ represents the accumulated direction of the gradient.
- **Parameter Update**: $x_{k+1} = x_k - \alpha m_k$
- **Mechanism**: By averaging the gradients over time, high-frequency noise caused by random mini-batch selection cancels out, while the consistent direction of the gradient accumulates. This acts as a low-pass filter, smoothing the optimization path and preventing the "zigzag" effect common in stochastic settings.
##### RMSProp
This method applies EWMA to the element-wise square of the gradient ($g_k \circ g_k$) to estimate the second moment (uncentered variance).
- **Estimate Formula**: $v_{k} = \beta_{2}v_{k-1} + (1-\beta_{2})(g_{k} \circ g_{k})$
  Here, $v_k$ represents the magnitude (variance) of the gradients for each parameter.
- **Parameter Update**: $x_{k+1} = x_k - \frac{\alpha}{\sqrt{v_k} + \epsilon} g_k$
- **Mechanism**: This estimate is used to normalize the step size:
    - If the variance $v_k$ is **high** (steep gradients/high uncertainty), the term $\frac{1}{\sqrt{v_k}}$ scales the step down to prevent instability.
    - If the variance $v_k$ is **low** (flat regions), the step size increases to accelerate progress.

##### ADAM (Adaptive Moment Estimation)
Adam is the modern default for stochastic minimization. It adapts the learning rate for each parameter based on estimates of the first and second moments of the gradients. It combines RMSprop and Momentum.

**Algorithm**
- **Initialize**: Step length $\alpha$, decay rates $\beta_1, \beta_2 \in [0, 1)$, $\epsilon > 0$, $x_0$, and moments $m_0 = 0, v_0 = 0$.
- **Iterate:**
	- Select mini-batch $\mathcal{B}_{k}$, and compute gradient $g_{k}$.
	- Update First Moment (estimate of true gradient): $m_{k} \leftarrow \beta_{1}m_{k-1}+(1-\beta_{1})g_{k}$
	- Update Second Moment (estimate of gradient variance): $v_k \leftarrow \beta_2 v_{k-1} + (1-\beta_2) (g_k \circ g_k)$
	- Bias Correction: $\hat{m}_k \leftarrow m_k / (1 - \beta_1^k)$ and $\hat{v}_k \leftarrow v_k / (1 - \beta_2^k)$
	- Update Parameters: $x_k \leftarrow x_{k-1} - \alpha [\text{Diag}(\hat{v}_k)^{1/2} + \epsilon I]^{-1} \hat{m}_k$

# Week 3: Advanced Line Search and Convergence
This week is about methods that utilize the curvature of the function (second-order information) to find better search directions. Additionally, this week includes formalization on finding the optimal step length numerically, and measuring the speed of convergence. 

## Newton's Method
Gradient Descent finds the tangent plane at the current location, and takes a step in that direction (downwards). This is First-order optimization. 
Newton's method is an example of second-order optimization. Instead of fitting a linear function (the tangent) to the current location, it fits a quadratic function (bowl shaped) to the current location by looking at the surrounding curvature of the function. Then it can jump down to the minimum of this quadratic function. If the objective function is truly quadratic, then this method finds the minimum in exactly one step. 

**The Quadratic Model** We minimize the model function $m_{k}(p)$, which is the second-order Taylor-Expansion of $f$ around $x_{k}$:
$$
m_{k}(p) \approx f(x_{k})+\nabla f(x_{k})^T p+\frac{1}{2} p^T \nabla^2 f(x_{k})p
$$
Here, $\nabla^2 f(x_k)$ is the Hessian matrix (the matrix of second partial derivatives).

**The Algorithm** To find the search direction $p_{k}$, we minimize $m_{k}(p)$ by setting its derivative to zero. This leads to the linear system $\nabla^2 f(x_k) p_k = - \nabla f(x_k)$.
1. Choose starting point $x_{0}\in \mathbb{R}^n$. Set $k=0$.
2. While not converged:
	1. Compute Hessian and Gradient
	2. Solve for search direction $p_k = -[\nabla^2 f(x_k)]^{-1} \nabla f(x_k)$
	3. Update position: $x_{k+1} \leftarrow x_{k}+p_{k}$ (in practice: $x_{k+1} \leftarrow x_{k}+\alpha_{k}p_{k}$, with step length $\alpha_{k}$)
	4. $k\leftarrow k+1$

Issues with this method are:
- Computation: Computing and inverting the Hessian is computationally expensive ($O(n^3)$ ([[10_Concepts/Complexity|Big-Oh]]))
- [[10_Concepts/Convexity|Non-Convexity]]: If the Hessian is not positive definite, the direction $p_{k}$ might not be a descent direction (it could point toward a saddle point or maximum)

### Quasi-Newton Methods (BFGS)
Quasi-Newton methods aim to gain the cheap computation of gradient descent, while also having fast divergence. These methods essentially combine the two by approximating the Hessian Matrix (or its inverse) as it moves through the optimization landscape. Using the information of the gradient, and change in position, the curvature can be learned.

**The Secant Equation**Let $B_k$ be the approximation of the Hessian at step $k$. It must satisfy the Secant Equation based on Taylor's theorem:
$$B_k [x_k - x_{k-1}] = \nabla f(x_k) - \nabla f(x_{k-1})$$
**Notation**
- Displacement: $s_{k-1} = x_k - x_{k-1}$
- Change in Gradient: $y_{k-1} = \nabla f(x_k) - \nabla f(x_{k-1})$

#### The BFGS Update
The Broyden-Fletcher-Goldfarb-Shanno (BFGS) algorithm is the most popular Quasi-Newton method. It updates the _inverse_ Hessian approximation, denoted as $B_k^{-1}$ (sometimes denoted $H_k$), directly.

The update formula to generate $B_k^{-1}$ from $B_{k-1}^{-1}$ is:
$$B_k^{-1} = \left(I - \frac{s_{k-1}y_{k-1}^\top}{y_{k-1}^\top s_{k-1}}\right) B_{k-1}^{-1} \left(I - \frac{y_{k-1}s_{k-1}^\top}{y_{k-1}^\top s_{k-1}}\right) + \frac{s_{k-1}s_{k-1}^\top}{y_{k-1}^\top s_{k-1}}$$
**The Algorithm**
1. **Initialize:** $x_0 \in \mathbb{R}^n$ and an initial inverse Hessian approximation $B_0^{-1}$ (usually the Identity matrix $I$).
2. **While not converged:**
    - Compute search direction: $p_k = -B_k^{-1} \nabla f(x_k)$
    - Perform line search to find step length $\alpha_k$ and update: $x_{k+1} = x_k + \alpha_k p_k$
    - Compute differences: $s_k = x_{k+1} - x_k$ and $y_k = \nabla f(x_{k+1}) - \nabla f(x_k)$
    - Update the inverse Hessian approximation $B_{k+1}^{-1}$ using the BFGS formula above.
    - $k \leftarrow k+1$.

## Optimal Step Length
Most of the time, step lengths are fixed or decaying. However, the most effective methods find the optimal step length $\alpha$ that minimizes the function along the search direction. This is a 1D optimization problem: 
$$
\min_{\alpha>0}\phi(\alpha) \quad \text{where} \quad \phi(\alpha)=f(x_{k}+\alpha p_{k})
$$
### The bisection method
This method finds a [[Gradients#Stationary Points|stationary point]] of $\phi(\alpha)$ by iteratively narrowing down an interval $[L,U]$ that contains the minimum. 
Prerequisites:
- $p$ must be a descent direction, implying $\phi'(0)<0$
- We must identify an interval $[L, U]$ such that the slope at $L$ is negative ($\phi'(L) < 0$) and the slope at $U$ is positive ($\phi'(U) > 0$). This guarantees a local minimizer exists between them.

**Algorithm** (Similar to Binary Search)
- **Initialize:** Interval $[L, U]$ and tolerance $\delta > 0$.
- **While** $(U - L) > \delta$:
    - Calculate midpoint: $M = \frac{1}{2}(L + U)$.
    - Calculate the derivative (slope) at the midpoint: $\phi'(M) = \nabla f(x_k + M p_k)^\top p_k$.
    - Case 1: If $\phi'(M) < 0$, the function is still sloping down. The minimum is to the right of $M$. Update: $L \leftarrow M$
    - Case 2: If $\phi'(M) > 0$, the function is sloping up. The minimum is to the left of $M$. Update:  $U \leftarrow M$
    - Case 3: If $\phi'(M) = 0$, $M$ is the stationary point. Update:  $L \leftarrow M, \quad U \leftarrow M$
- **Return:** $\frac{1}{2}(L + U)$ as the approximate optimal step length.

## Rates of Convergence
We can compare optimization algorithms by how fast the error $||x_{k}-x^*||$ approaches zero as $k\rightarrow \infty$. 

**Linear Convergence** The distance to the solution decreases by a constant factor in every iteration.
- **Definition:** There exists $r \in (0, 1)$ such that for large $k$:
$$\frac{||x_{k+1} - x^*||}{||x_k - x^*||} \le r$$
- **Associated Method:** Gradient Descent generally converges linearly. It is reliable but relatively slow (digits of accuracy accumulate at a constant rate).

**Superlinear Convergence** The convergence is faster than linear; the ratio of errors approaches zero. 
- **Definition:**
$$\lim_{k \to \infty} \frac{||x_{k+1} - x^*||}{||x_k - x^*||} = 0$$
- **Associated Method:** Quasi-Newton methods (like BFGS) generally converge superlinearly.

**Quadratic Convergence**  The error is roughly squared at every step. This means the number of correct digits in the solution doubles with every iteration (e.g., $10^{-2} \to 10^{-4} \to 10^{-8}$).
- **Definition**: There exists $M > 0$ such that for large $k$:
$$\frac{||x_{k+1} - x^*||}{||x_k - x^*||^2} \le M$$
- **Associated Method:** Newton's Method generally converges quadratically (provided $x_0$ is close enough to the solution).

# Week 4: Derivative-Free Optimization
![[Subderivatives#Subgradients]]

![[Fermat's Theorem (Optimization)#Convex Fermat Theorem]]

## Numerical Line Search
If the problem cannot be solved analytically using subgradients, we return to iterative line search methods
### Search Direction: Coordinate Descent
Instead of calculating a specific descent direction $p_{k}$, using a gradient, this method cycles through the dimensions of the coordinates changing one value at a time to find the direction to move to find the minimum. 

Imagine standing on a hill, and instead of looking where downhill is, you feel by moving left and right, and then choosing the direction that minimized your height. Then you move forward and backwards and minimize your height again. 

**Algorithm**
- Initialize starting point
- Cycle through dimensions / directions
- For each dimensions / direction $p_{k}$, perform a line search to find the optimal step length
- Repeat until convergence

Cycling through dimensions can be done:
- $\texttt{cyclic}$: ($1 \dots n \quad \text{repeat}$);
- $\texttt{back-and-forth}$: ($1 \dots n \dots 1 \quad \text{repeat}$);

### Step Length: The Golden Section Method
The bisection method was used to find the optimal step size $\alpha$. Bisection  requires the derivative $\phi '(\alpha)$ to check if the slope is positive or negative. Without derivatives, we use the Golden Section Method.
- **Prerequisites:** The function $\phi(\alpha)$ must be unimodal on the interval $[L, U]$ (it has one unique minimum).
- **Intuition:** To narrow down the interval $[L, U]$ without derivatives, we need to evaluate the function at two internal points, $M$ and $T$. To ensure the interval shrinks by a constant efficient ratio every time regardless of which side holds the minimum, we place these points using the Golden Ratio $\varphi \approx 1.618$.
- **The Algorithm:**
    1. **Initialize:** Bounds $L < M < U$ such that the ratio of segments corresponds to the Golden Ratio (specifically $(M-L)/(U-M) \in \{ \varphi, 1/\varphi \}$).
    2. **Loop** while $(U - L) > \epsilon$:
        - Pick a test point $T$ in the larger sub-interval (between $L$ and $M$ or $M$ and $U$).
        - **Compare** $\phi(T)$ and $\phi(M)$:
            - If $\phi(T) < \phi(M)$: The minimum is in the new smaller region around $T$. $T$ becomes the new "middle" $M$, and the bounds are tightened.
            - If $\phi(T) \ge \phi(M)$: The minimum is likely around $M$. The bounds are tightened to exclude $T$.
    3. **Result:** The interval shrinks linearly by a factor of $1/\varphi \approx 0.618$ per iteration.

## Heuristic Line Search
### Nelder-Mead Simplex Method
This method is a 'direct search' method that does not approximate gradients but rather evolves a geometric shape to find the minimum. 

#### The Simplex
A simplex is a generalization of a triangle to $n$-dimensions. It consists of $n+1$ vertices.
- In 2D: A triangle (3 points).
- In 3D: A tetrahedron (4 points).

#### [The Algorithm](https://www.youtube.com/watch?v=j2gcuRVbwR0)
The method iteratively improves the worst point in the simplex.
**Preparation:**
1. Initialize $n+1$ vertices.
2. **Order** them such that $f(x_1) \le f(x_2) \le \dots \le f(x_{n+1})$.
    - $x_1$: Best point.
    - $x_{n+1}$: Worst pointt
3. Compute the **Centroid** $\bar{x}$ of the _best_ $n$ points (excluding the worst)
**Iteration Steps** The algorithm attempts to replace the worst point $x_{n+1}$ using the following logic:
4. **Reflection ($r$):**
    - Reflect the worst point through the centroid: $r = \bar{x} + (\bar{x} - x_{n+1})$.
    - _Intuition:_ If the worst point is high up a hill, the minimum is likely on the opposite side of the average.
    - _Decision:_ If $f(x_1) \le f(r) < f(x_n)$, accept $r$.
5. **Expansion ($e$):**
    - If the Reflection $r$ is the new **best** point ($f(r) < f(x_1)$), we have found a very good direction. Go further.
    - Compute $e = \bar{x} + 2(\bar{x} - x_{n+1})$.
    - _Decision:_ Accept the best between $r$ and $e$.
6. **Contraction ($c$):**
    - If the Reflection $r$ is typically bad (worse than the second-worst point $x_n$), we overshot or are in a valley. We need to step back.
    - _Outside Contraction:_ If $f(r) < f(x_{n+1})$, compute average between centroid and reflection.
    - _Inside Contraction:_ If $f(r) \ge f(x_{n+1})$, compute average between centroid and worst point.
    - _Decision:_ If the contraction point is better than the point it is based on, accept it.
7. **Shrink:**
    - If all else fails (Reflection and Contraction did not improve the worst point), the simplex is likely too large around a minimum.
    - **Action:** Shrink the entire simplex towards the best point $x_1$. Replace all $x_j$ with $\frac{1}{2}(x_j + x_1)$.