Background

|                 | Mass Function (Discrete RV)                                      | Density Function (Continuous RV)                                 |
| :-------------- | :--------------------------------------------------------------- | :--------------------------------------------------------------- |
| **Joint**       | $p(x,y) = \mathbb{P}(X=x, Y=y)$                                  | $\mathbb{P}((X,Y) \in A) = \int\int_{A}f(x,y)dxdy$               |
| **Marginal**    | $p_X(x) = \sum_{y} p(x,y)$                                       | $f_X(x) = \int_{-\infty}^{\infty} f(x,y)dy$                      |
| **Conditional** | $p_{X\mid Y}(x\mid y) = \frac{p(x,y)}{p_Y(y)}$, for $p_Y(y) > 0$ | $f_{X\mid Y}(x\mid y) = \frac{f(x,y)}{f_Y(y)}$, for $f_Y(y) > 0$ |

|                  | Expectation                                                                                   | Variance                                                                            |
| :--------------- | :-------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| **Conditional**  | $\mathbb{E}(h(X) \mid Y)$: A random variable $u(Y)$, where $u(y) = \mathbb{E}(h(X)\mid Y=y)$. | $\text{Var}(X\mid Y) = \mathbb{E}(X^2\mid Y) - (\mathbb{E}(X\mid Y))^2$             |
| **Law of Total** | $\mathbb{E}(X) = \mathbb{E}(\mathbb{E}(X\mid Y))$                                             | $\text{Var}(X) = \mathbb{E}(\text{Var}(X\mid Y)) + \text{Var}(\mathbb{E}(X\mid Y))$ |

Stochastic Processes vs Markov Chains
- A compound random variable $S_N = \sum_{i=1}^{N} X_{i}$ is called a compound variable of iid random variables $X_1, X_2, \ldots, X_{N}$ with mean $\mu$. Then,
	- $\mathbb{E}(S_N | N) = N\mu, \quad \mathbb{E}(S_N) = E(N) \mu$
	- $\text{Var}(S_{N} | N) = N\sigma^2, \quad \text{Var}(S_N) = \mathbb{E}(N) \sigma^2 + \mu^2 \text{Var}(N)$
- A stochastic process is a collection of (infinitely many) random variables. Often used to describe the behaviour of a system that evolves randomly in time. 
	- Time: Discrete if the collection has (countably in)finite number of random variables, Continuous otherwise.
	- Space: Discrete if the individual random variables are discrete, continuous if they are continuous.
- A stochastic process is is a discrete time Markov chain if, for all states $i, j, s_0, ..., s_{n-1} \in S$,  $\mathbb{P}(X_{n+1} = j \mid X_n = i, X_{n-1} = s_{n-1}, \dots, X_0 = s_0) \\ = \mathbb{P}(X_{n+1} = j \mid X_n = i)$.

Transitions
- The conditional probabilities  $\mathbb{P}(X_{n+1} = j \mid X_n = i)$ are called 1-step probabilities from state $i$ to state $j$.
- The 1-step probabilities are **time homogeneous** if for all $n$,  $\mathbb{P}(X_{n+1} = j \mid X_n = i) = \mathbb{P}(X_1 = j \mid X_0 = i) = P_{ij}$.
- The **transition probability matrix** stores all transition probabilities $P_{ij}$. It has 2 properties:
	1. Positive entries $P_{ij}\geq 0$ for all $i$ and $j$.
	2. Rows summing up to 1: $\sum_{j\in S} P_{ij}=1$ for all $i$.
- A transition diagram is a directed graph visualizing a Markov chain. Nodes are the states $i$, $j$, and edges are transitions, where each edge is labeled by the transition probability $P_{ij}$.
- A **random walk** is a Markov chain with state space given by $\mathbb{Z}$. At every state $i$ it may walk one step up to $i+1$ with probability $p$ or down to $i-1$ with probability $1-p$.
- The conditional probabilities $\mathbb{P}(X_n = j \mid X_0 = i) = P^{(n)}_{ij}$ are called n-step transition probabilities. 
- An efficient way to calculate n-step transition probabilities is are the Chapman-Kolmogorov equations.  $P^{(n+m)}_{i,j} = \sum_{k \in S} P^{(n)}_{i,k} P^{(m)}_{k,j}$.
	- If we denote the $n$-step transition matrix by $P^{(n)}$ then we can write the equation in the form of a matrix product $P^{(n+m)}=P^{(n)}P^{(m)}$.
	- For a time homogeneous Markov chain, the n-step transition matrix is just the power of the transition matrix. $P^{(n)} = P^n$

Recurrent vs Transient states.
 - A state $i$ with $P_{ii}=1$ is called **absorbing**.
- $j$ is called **accessible** from $i$ if $P_{ij}^{k}>0$ for some $k \geq 0$.
- States $i$ and $j$ are said to **communicate** if they are accessible from each other (denoted $i \leftrightarrow j$). These states form a class. 
- An MC is **irreducible** if there exists only one class.
- Recurrent vs Transient
	- Let $f_{i}$ denote the probability that, starting in state $i$ the process will ever reenter state $i$. State $i$ is **recurrent** if $f_{i} = 1$ and **transient** if $f_{i}<1$.
	- If starting from a recurrent state $i$, the MC visits $i$ infinitely often with probability 1. If starting from a transient state $i$ the MC visits $i$ only a finite number of times with probability 1.
	- A state is transient if and only if $\sum_{n=0}^{\infty} P_{ii}^{n}$ is finite.
	- If a state $i$ is recurrent and state $i$ communicates with state $j$, then state $j$ is also recurrent. If a state $i$ is transient and state $i$ communicates with state $j$, then state $j$ is also transient. As a consequence, a MC can be decomposed into recurrent and transient classes.
- Return Time
	- The return time $N_{j}$ is a random variable that describes the number of steps it takes for the process to return to state $j$ for the first time. $N_j = \min \{n > 0 | X_n = j\}$. 
	- A state is recurrent if and only if $\mathbb{P}(N_j < +\infty | X_0 = j) = 1$. 
	- A recurrent state is positive recurrent if the expected time until it returns to the same state is finite $\mathbb{E}(N_j | X_0 = j) < +\infty$.
	- A recurrent state is null recurrent if the expected time until it returns to the same state is infinite $\mathbb{E}(N_j | X_0 = j) = +\infty$.
- In a finite-state Markov Chain:
	- Not all states are transient. 
	- All states are recurrent if the MC is irreducible.
	- All recurrent states are positive recurrent.
- The period $d$ of state $i$ is defined as $d = \text{gcd}\{n >0| P_{ii}^n>0\}$. 
	- A state with period $d > 1$ is said to be periodic.
	- A state with period $d = 1$ is said to be aperiodic.
	- Periodicity is also a class property. If $i$ has period $d$, and states $i$ and $j$ communicate, then $j$ also has period $d$.
- Aperiodic, positive recurrent states are called ergodic. 

Limiting behaviour
- Let $\pi$ denote the limiting distribution of the Markov chain, that is the vector with elements $\pi_{i}=\lim_{ n \to \infty }\mathbb{P}(X_{n}=i)$ with $i \in S$. Three cases:
	- No limiting distribution exists.
	- Only one limiting distribution exists. (Limit is independent of initial state $X_{0}$).
	- Several limiting distributions exist. (Limit depends on initial state $X_{0}$).
- A probability distribution $\varpi$ is called **stationary** if it satisfies the "steady-state equations": 
	- $\varpi_j = \sum_{i \in \mathcal{S}} \varpi_i P_{ij}$
	- $\sum_{j \in \mathcal{S}} \varpi_j = 1$.
- For an irreducible ergodic Markov chain:
	- $\lim_{ n \to \infty }P_{ij}^n$ exists and is independent of $i$.
	- the limiting distribution $\pi$ coincides with the stationary distribution $\varpi$. 
- If $\pi$ exists it is the unique solution of the steady-state equations. 

Questions to be handled when starting from a transient state:
- Mean time spent in transient states $s_{ij}$.
	- Let $s_{ij}$ be the expected number of time periods the Markov chain is in state $j$, given that it started in state $i$. $$s_{ij} = \begin{cases}1 + \sum_{k}P_{ik}s_{kj} & \text{if } i=j \\ \sum_{k} P_{ik}s_{kj} & \text{if } i \neq j \end{cases}$$
	- Suppose then, all transient states in a Markov chain are in a set $T = \{1,\dots,t\}$, while the other recurrent states are in $\{t+1,\dots\}$. Only a transient state can transition to another transient state, therefore: $$s_{ij} = \begin{cases}1 + \sum_{k=1}^tP_{ik}s_{kj} & \text{if } i=j \\ \sum_{k=1}^t P_{ik}s_{kj} & \text{if } i \neq j \end{cases}$$
	- Let $\mathbf{P}_T$ be the $t \times t$ submatrix of the transition matrix $\mathbf{P}$ corresponding only to the transient states $T$. Let $\mathbf{S}$ be the $t \times t$ matrix of expected values to be solved, where the entry $s_{ij}$ corresponds to the expected time in $j$ starting from $i$. Then we can write as $\mathbf{S} = \mathbf{I} + \mathbf{P}_T\mathbf{S}$, which can computed using $\mathbf{S} = (\mathbf{I} - \mathbf{P}_T)^{-1}$.
-  Probability of entering a transient state $f_{ij}$.
	- Let $f_{ij}$ denote the probability that the Markov chain ever enters state $j$ given that it starts in state $i$. 
	- If the chain _never_ enters state $j$, the time spent there is $0$. This yields the following equation: $$s_{ij} = \begin{cases} f_{ij}s_{jj} & \text{if } i \neq j \\ 1 + f_{jj}s_{jj} & \text{if } i = j \end{cases}$$
	- We then rearrange to solve for the probability $f_{ij}$:$$f_{ij} = \begin{cases} \frac{s_{ij}}{s_{jj}} & \text{if } i \neq j \\ \frac{s_{jj} - 1}{s_{jj}} & \text{if } i = j \end{cases}$$
- Expected steps to a recurrent class $m_{iR}$.
	- Suppose there is only one recurrent class, denoted by $R$. For a transient state $i$, define $m_{iR}$ as the mean time it takes to enter $R$. We obtain: $m_{iR}=1+\sum_{j \in T}P_{ij}m_{jR}$.
	- Let $\mathbf{m} = (m_{1R}, m_{2R}, \dots, m_{tR})^T$, then $\mathbf{m} = \mathbf{1} + \mathbf{P}_{T}\mathbf{m}$ which gives $\mathbf{m}=(I-\mathbf{P}_{T})^{-1}\cdot \mathbf{1} = \mathbf{S} \cdot \mathbf{1}$. 
	- Looking at the definition of $s$, this solution should be unsurprising.
- Probability of landing in a specific recurrent class $f_{iR_1}$.
	- Assume there are multiple recurrent classes $R_1, R_2, \dots$. We want to find $f_{iR_1}$, the probability that the Markov chain ever enters the specific recurrent class $R_1$, given it starts in transient state $i$. we obtain $f_{iR_1} = \sum_{j \in R_1}P_{ij} + \sum_{j \in T} P_{ij}f_{jR_1}$.
	- Let $\mathbf{f}_{R_1}$ be the vector of probabilities for the transient states. Let $\mathbf{p}_{R_1}$ be a vector where the $i$-th entry is $\sum_{j \in R_1}P_{ij}$. Then the system can be written as $\mathbf{f}_{R_1} = \mathbf{p}_{R_1} + \mathbf{P}_T\mathbf{f}_{R_1}$, which can be rewritten as $\mathbf{f}_{R_1} = (I - \mathbf{P}_T)^{-1} \cdot \mathbf{p}_{R_1} = \mathbf{S} \cdot \mathbf{p}_{R_1}$.

Poisson process Definitions
- A stochastic process $\{N(t), t \ge 0\}$ is a **counting process** whenever $N(t)$ denotes the total number of events that occur by time $t$. It should satisfy: (1) $N(t) \ge 0$, (2) $N(t)$ is integer valued, and (3) For $s < t$, $N(s) \le N(t)$.
	- A counting process has **independent increments** whenever the number of events that occur in one time interval is independent of the number of events that occur in another disjoint time interval.
	- A counting process has **stationary increments** whenever the number of events that occur in any interval depends only on the length of the interval.
- The counting process $\{N(t), t \ge 0\}$ is a **Poisson process** with rate $\lambda > 0$ when:
	1. $N(0) = 0$
	2. The process has independent increments
	3. The number of events in any interval of length $t$ is Poisson distributed with mean $\lambda t$.
	- (3) implies that a Poisson process has stationary increments
- A function $g(\cdot)$ is said to be $o(\cdot)$ if $\lim_{ h \to 0 } \frac{g(h)}{h} = 0$. That is, $g(h)$ goes to zero faster than $h$ goes to zero.
- The counting process $\{N(t), t \ge 0\}$ is a **Poisson process** with rate $\lambda > 0$ when:
	1. $N(0) = 0$,
	2. The process has stationary and independent increments.
	3. $P(N(h) = 1) = \lambda h + o(h), \text{ as } h \to 0$ 
		- "Probability of seeing an event in a tiny window is directly proportional to the length of that window."
	4. $P(N(h) \ge 2) = o(h), \text{ as } h \to 0$ 
		- "Probability of seeing two events in a tiny window is effectively zero."
- Let $T_n$ be the time elapsed between the $(n-1)$-th event and the $n$-th event (for $n > 1$). The sequence $T_{1}, T_{2}, \dots$ consists of i.i.d **exponential** random variables with a common mean of $1/\lambda$.
- Let $S_{n}$ be the arrival time of the $n$-th event, then $S_{n}$ is the sum of the first $n$ interarrival times. Therefore, $S_{n}$ follows a Gamma distribution with parameters $n$ and $\lambda$.
- The number of events by time $t$ is at least $n$ if and only if the $n$-th arrival occurs by time $t$: $N(t) \ge n \iff S_n \le t$.
- The counting process $\{N(t), t \ge 0\}$ is a **Poisson process** with rate $\lambda \gt 0$ where:$$N(t) \equiv \max \{n \mid S_n \le t\}$$
- All three definitions (the standard distribution-based, the infinitesimal approximation, and this constructive definition) are equivalent.

Poisson Process Properties
- **Merging**: Suppose that $\{N_1(t), t \ge 0\}$ and $\{N_2(t), t \ge 0\}$ are **independent** Poisson processes with respective rates $\lambda_1$ and $\lambda_2$. Let $N(t) = N_1(t) + N_2(t)$, for $t \ge 0$, then:
    - $\{N(t), t \ge 0\}$ is a Poisson process with rate $\lambda = \lambda_1 + \lambda_2$.
    - The probability that an arrival in the merged process is of type $i$ is $\lambda_i/(\lambda_1 + \lambda_2)$.
- **Decomposing**: Consider a Poisson process $\{N(t), t \ge 0\}$ with rate $\lambda$. Suppose that each event in this process is classified as type I with probability $p$ and type II with probability $(1-p)$ independently of all other events. Let $N_1(t)$ and $N_2(t)$respectively denote the type I and type II events occurring in time $(0, t]$, then:
	- The counting processes $\{N_1(t), t \ge 0\}$ and $\{N_2(t), t \ge 0\}$ are both Poisson processes with respective rates $\lambda p$ and $\lambda(1-p)$. 
	- The two processes are independent.
- If we know one event has occurred by time $t$ (i.e. $N(t)=1$), the time of that single event $T_{1}$ is uniformly distributed over the interval $(0,t)$. For any time $s$ where $s \le t$:$$\mathbb{P}(T_{1}<s|N(t)=1) = \frac{s}{t}$$
- 



