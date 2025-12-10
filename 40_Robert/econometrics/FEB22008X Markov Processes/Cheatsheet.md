Cheat sheet development guide:
- The lecturers have provided us with the following list of **standard questions** to be expected on the exam. We must be able to solve each of the questions.
- The subject is about mathematics. This means it consists entirely out of **definitions, theorems, and algorithms**. 
- This cheat sheet shall just be a categorization of these definitions, theorems, and algorithms based on their corresponding "standard questions".
### Solving Exercises
1. Model the problem as a Markov Process.
	- Read the description carefully.
	- Determine exactly what needs to be modelled.
	- User proper notations, declare notation before using it.
	- Describe the question using your defined notation.
2. Solve the problem.
	- Find the corresponding standard question.
	- "Conditioning on the first step".
	- Apply formulae for conditional probabilities and conditional expectation.
### Toolbox
Some definitions and theorems are useful for any standard question, we focus on the following few.
#### Joint and Conditional Distributions

|                 | Mass Function (Discrete RV)                                | Density Function (Continuous RV)                           |
| :-------------- | :--------------------------------------------------------- | :--------------------------------------------------------- |
| **Joint**       | $p(x,y) = \mathbb{P}(X=x, Y=y)$                            | $\mathbb{P}((X,Y) \in A) = \int\int_{A}f(x,y)dxdy$         |
| **Marginal**    | $p_X(x) = \sum_{y} p(x,y)$                                 | $f_X(x) = \int_{-\infty}^{\infty} f(x,y)dy$                |
| **Conditional** | $p_{X\|Y}(x\|y) = \frac{p(x,y)}{p_Y(y)}$, for $p_Y(y) > 0$ | $f_{X\|Y}(x\|y) = \frac{f(x,y)}{f_Y(y)}$, for $f_Y(y) > 0$ |
#### Conditional Expectation and Variance

|                  | Expectation                                                                            | Variance                                                                      |
| :--------------- | :------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Conditional**  | $\mathbb{E}(h(X)\|Y)$: A random variable $u(Y)$, where $u(y) = \mathbb{E}(h(X)\|Y=y)$. | $\text{Var}(X\|Y) = \mathbb{E}(X^2\|Y) - (\mathbb{E}(X\|Y))^2$                |
| **Law of Total** | $\mathbb{E}(X) = \mathbb{E}(\mathbb{E}(X\|Y))$                                         | $\text{Var}(X) = \mathbb{E}(\text{Var}(X\|Y)) + \text{Var}(\mathbb{E}(X\|Y))$ |
#### Probability and Indicator Variables
$$\mathbb{P}(A) = \mathbb{E}(I_A), \quad \text{where } I_A = \begin{cases} 1 & \text{if } A \text{ occurs} \\ 0 & \text{otherwise} \end{cases}$$
### Discrete Time Markov Chain

#### Defining Markov chain and short-run questions

- **Q1** Check if a process is Markovian, or redefine states to obtain a Markov chain
	- A stochastic process is a collection of (infinitely many) random variables. Often used to describe the behaviour of a system that evolves randomly in time. 
		- Time: Discrete if the collection has (countably in)finite number of random variables, Continuous otherwise.
		- Space: Discrete if the individual random variables are discrete, continuous if they are continuous.
	- A stochastic process is is a discrete time Markov chain if, for all states $i, j, s_0, ..., s_{n-1} \in S$,  $\mathbb{P}(X_{n+1} = j \mid X_n = i, X_{n-1} = s_{n-1}, \dots, X_0 = s_0) \\ = \mathbb{P}(X_{n+1} = j \mid X_n = i)$.
- **Q2** Calculate n-step transition probability (often $n \le 3$)
#### Classification of states
- **Q3** Distinguish recurrent and transient classes
- **Q4** Argue that a state is aperiodic
#### Long-run limiting distribution
- **Q5** Write down the steady state equations (and solve them)
- **Q6** Calculate long-run expected reward/cost
#### Long-run behavior starting from transient states
- **Q7** Calculating these quantities ($s_{ij}, f_{ij}, m_{iR}, f_{iR_1}$)
### Poisson processes
#### Exponential distribution: properties
#### Multiple definitions of Poisson processes
- **Q8** Calculate (conditional) probabilities regarding a counting event
- **Q9** Calculate (conditional) expectation regarding an arrival time
#### Merging and decomposing of Poisson processes
- **Q10** Analyze a merged or decomposed Poisson process
#### Conditional arrival distribution
**- Q11** Analyze quantities related to $(S_{1},...,S_{n})$ given $N(t)=n$
#### Non-homogeneous Poisson process
- **Q12** Calculate (conditional) probabilities regarding a counting event for a non-homogeneous Poisson process
### Continuous Time Markov Chain
#### Model definition
- **Q13** Model a real life process by a continuous time Markov chain, write down instantaneous transition rates
#### Long-run limiting distribution
- **Q14** Write down balance equations (and solve them)
#### Queueing theory
- **Q15** Recognize a real life problem as a queueing with Kendall's notation
- **Q16** Solve L, $\lambda$ or W for a queueing problem
- **Q17** Apply (and declare) PASTA principle
### Gaussian Processes
#### Reflection principle and boundary crossing probability
- **Q18** Apply reflection principle
- **Q19** Relate a real life case to boundary crossing probabilities
#### Hitting time
- **Q20** Calculate probabilities related to one or two hitting times
#### Relation between Brownian motion and Brownian bridge
- **Q21** Prove that one process is BM or BB
#### Other (non-) Gaussian processes
- **Q22** Handling a real life process modeled by these processes