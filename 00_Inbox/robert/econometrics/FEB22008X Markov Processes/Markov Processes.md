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
- Mean time spent in transient states
	- Let $s_{ij}$ be the expected number of time periods the Markov chain is in state $j$, given that it started in state $i$. $$s_{ij} = \begin{cases}1 + \sum_{k}P_{ik}s_{kj} & \text{if } i=j \\ \sum_{k} P_{ik}s_{kj} & \text{if } i \neq j \end{cases}$$
	- Suppose then, all transient states in a Markov chain are in a set $T = \{1,\dots,t\}$, while the other recurrent states are in $\{t+1,\dots\}$. Only a transient state can transition to another transient state, therefore: $$s_{ij} = \begin{cases}1 + \sum_{k=1}^tP_{ik}s_{kj} & \text{if } i=j \\ \sum_{k=1}^t P_{ik}s_{kj} & \text{if } i \neq j \end{cases}$$
	- Let $\mathbf{P}_T$ be the $t \times t$ submatrix of the transition matrix $\mathbf{P}$ corresponding only to the transient states $T$. Let $\mathbf{S}$ be the $t \times t$ matrix of expected values to be solved, where the entry $s_{ij}$ corresponds to the expected time in $j$ starting from $i$. Then we can write as $\mathbf{S} = \mathbf{I} + \mathbf{P}_T\mathbf{S}$, which can computed using $\mathbf{S} = (\mathbf{I} - \mathbf{P}_T)^{-1}$.
-  Probability of entering a transient state 
	- Let $f_{ij}$ denote the probability that the Markov chain ever enters state $j$ given that it starts in state $i$. 
	- If the chain _never_ enters state $j$, the time spent there is $0$. This yields the following equation: $$s_{ij} = \begin{cases} f_{ij}s_{jj} & \text{if } i \neq j \\ 1 + f_{jj}s_{jj} & \text{if } i = j \end{cases}$$
	- We then rearrange to solve for the probability $f_{ij}$:$$f_{ij} = \begin{cases} \frac{s_{ij}}{s_{jj}} & \text{if } i \neq j \\ \frac{s_{jj} - 1}{s_{jj}} & \text{if } i = j \end{cases}$$
- Expected steps to a recurrent class
	- Suppose there is only one recurrent class, denoted by $R$. For a transient state $i$, define $m_{iR}$ as the mean time it takes to enter $R$. We obtain: $m_{iR}=1+\sum_{j \in T}P_{ij}m_{jR}$.
	- Let $\mathbf{m} = (m_{1R}, m_{2R}, \dots, m_{tR})^T$, then $\mathbf{m} = \mathbf{1} + \mathbf{P}_{T}\mathbf{m}$ which gives $\mathbf{m}=(I-\mathbf{P}_{T})^{-1}\cdot \mathbf{1} = \mathbf{S} \cdot \mathbf{1}$. 
	- Looking at the definition of $s$, this solution should be unsurprising.
- What is the chance to land in a specific recurrent class (if many)?
- 

