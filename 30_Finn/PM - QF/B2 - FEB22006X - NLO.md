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

![[10_Concepts/Line Search Methods#Summary]]

## Gradient Descent (Steepest Descent)
![[10_Concepts/Gradient Descent#Gradient Descent]]

### Momentum Methods
![[10_Concepts/Momentum Methods#Momentum Methods]]
### Convergence Analysis
The efficiency of these methods is analyzed using [[10_Concepts/Taylor's Theorem|Taylor's Theorem]] and the condition number $\kappa = \frac{L}{\mu}$.
- $\mu$ is the minimum eigenvalue and $L$ is the maximum eigenvalue of the [[Hessian Matrix|Hessian]] $\nabla^2f(x)$. 
- A large $\kappa$ implies the function is hard to minimize numerically. 


### Stochastic Gradient Descent (SGD)
![[10_Concepts/Gradient Descent#Stochastic Gradient Descent]]
# Week 3: Advanced Line Search and Convergence
This week is about methods that utilize the curvature of the function (second-order information) to find better search directions. Additionally, this week includes formalization on finding the optimal step length numerically, and measuring the speed of convergence. 

## Newton's Method
![[10_Concepts/Newton's Method#Newton's Method]]

## Optimal Step Length
![[10_Concepts/Optimal Step Lengths in Line Search#Optimal Step Length]]
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
![[10_Concepts/Coordinate Descent Search#Coordinate Descent]]

### Step Length: The Golden Section Method
![[10_Concepts/The Golden Section Method in Search#The Golden Section Method]]

## Heuristic Line Search
![[10_Concepts/Nelder-Mead Method#Nelder-Mead Simplex method]]

# Week 5: Constrained Optimization
## Lagrange Multipliers
![[Lagrange Multipliers#Summary]]

## Constraints
![[10_Concepts/Feasible Set#Constraints]]

## Constrained Optimization
![[Mathematical Optimization#Constrained Optimization]]
### Lagrangian & The Karush-Kuhn-Tucker (KKT) Conditions
To formalize the search for optimal points, we combine the objective function and the constraints into a single "helper" function called the **Lagrangian**.
#### Definition: The Lagrangian Function
![[Lagrangian Function#Definition]]

#### The Karush-Kuhn-Tucker (KKT) Conditions
![[10_Concepts/KKT Conditions#KKT Conditions]]

### Constraint Qualification
![[10_Concepts/Constraint Qualifications#Constraint Qualification]]

### Finding Global Minimizers
1. Find KKT points: solve the system of KKT equations to find candidate points $(x,\lambda)$
2. Check slater's condition. If true, then you have found the optimal solution, of not proceed to next step.
3. Check LICQ. You must also find feasible points where LICQ fails, as these are also candidates. 
4. Verification (Weierstrass):
	1. Does Weierstrass' theorem apply? If yes, compare the $f(x)$ values of all KKT points and non-LICQ points. The best one is the global optimum. 
	2. If it does not apply, use case-specific arguments (limits, geometry) to prove optimality. 

### Second-Order Conditions
If the problem is non-convex, KKT points could be maximizers or saddle points. We check the Hessian of the Lagrangian to be sure. 

![[Lagrangian Function#**Second-Order Condition (Hessian) **]]

# Week 6: Convex Optimization
Video summary and recap for this week: <iframe width="560" height="315" src="https://www.youtube.com/embed/uh1Dk68cfWs?si=bI_P6_r3o0QDe9So" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Practical Approaches for Convex Constrained Optimization
Three methods to solving problems of the form $\inf \{ f(x):c_{i}(x),\dots \}$ where objective and constraints are [[10_Concepts/Convexity|convex]]. 

![[10_Concepts/Cutting Plane Method In Constrained Optimization#Cutting Plane Method]]

![[10_Concepts/Ellipsoid Method in Constrained Optimization#Ellipsoid Method]]

![[10_Concepts/Interior Point Method in Constrained Optimization#Interior Point Method]]

## Duality Theory
![[10_Concepts/Duality (optimization)#Duality Theory]]
