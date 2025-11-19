# Non-Linear Optimisation

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

# Summary

## Unconstrained Analysis
# Week 1 - Unconstrained Analysis

## Mathematical Optimization Framework
* Introduction to the general problem structure.
![[10_Concepts/Mathematical Optimization#Summary]]
* Distinction between Unconstrained and Constrained problems.

## Minimizers and Infima
* Defining the goal of optimization.
![[10_Concepts/Global Minimizer#Summary]]
![[10_Concepts/Local Minimizer#Summary]]
![[10_Concepts/Infimum#Summary]]
![[10_Concepts/Minimum]]
## First-Order Conditions (Gradients)
* Using derivatives to find candidate points.
![[10_Concepts/Gradient]]
![[10_Concepts/Gradient#Stationary Point]]
* **Necessary Condition:**
![[10_Concepts/Fermat's Theorem (Optimization)#Summary]]

## Convexity
* Using convexity to guarantee global optimality.
![[Convex Function#Summary]]
![[Hessian Matrix#Summary]]
![[Positive Semidefinite Matrix#Summary]]
* **Testing for Convexity:**
![[Second-Order Convexity Condition#Summary]]
* **The Power of Convexity:**
![[Convex Fermat Theorem#Summary]]

## Second-Order Conditions
* Checking if a stationary point is actually a minimizer.
* **Necessary Condition:**
![[Second-Order Necessary Condition#Summary]]
* **Sufficient Condition:**
![[Second-Order Sufficient Condition#Summary]]

## Existence of Minimizers
* Ensuring a solution exists before searching for it.
![[Weierstrass Theorem#Summary]]
* Strategy for proving global optimality using Weierstrass.

## Gradient Descent

## More Line Search

## Analysis of Constrained Optimization

## Convex Optimisation in Practice