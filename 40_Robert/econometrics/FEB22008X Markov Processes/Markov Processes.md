Stochastic Processes vs Markov Chains
- A compound random variable $S_N = \sum_{i=1}^{N} X_{i}$ is called a compound variable of iid random variables $X_1, X_2, \ldots, X_{N}$ with mean $\mu$. Then,
	- $\mathbb{E}(S_N | N) = N\mu, \quad \mathbb{E}(S_N) = E(N) \mu$
	- $\text{Var}(S_{N} | N) = N\sigma^2, \quad \text{Var}(S_N) = \mathbb{E}(N) \sigma^2 + \mu^2 \text{Var}(N)$
- A stochastic process is a collection of (infinitely many) random variables. Often used to describe the behaviour of a system that evolves randomly in time. 
	- Time: Discrete if the collection has (countably in)finite number of random variables, Continuous otherwise.
	- Space: Discrete if the individual random variables are discrete, continuous if they are continuous.
- A stochastic process is is a **discrete time Markov chain** if, for all states $i, j, s_0, ..., s_{n-1} \in S$,  $\mathbb{P}(X_{n+1} = j \mid X_n = i, X_{n-1} = s_{n-1}, \dots, X_0 = s_0) \\ = \mathbb{P}(X_{n+1} = j \mid X_n = i)$.
- A **random walk** is a Markov chain with state space given by $\mathbb{Z}$. At every state $i$ it may walk one step up to $i+1$ with probability $p$ or down to $i-1$ with probability $1-p$.

Transitions
- The conditional probabilities  $\mathbb{P}(X_{n+1} = j \mid X_n = i)$ are called 1-step probabilities from state $i$ to state $j$.
- The 1-step probabilities are **time homogeneous** if for all $n$,  $\mathbb{P}(X_{n+1} = j \mid X_n = i) = \mathbb{P}(X_1 = j \mid X_0 = i) = P_{ij}$.
- The **transition probability matrix** stores all transition probabilities $P_{ij}$. It has 2 properties:
	1. Positive entries $P_{ij}\geq 0$ for all $i$ and $j$.
	2. Rows summing up to 1: $\sum_{j\in S} P_{ij}=1$ for all $i$.
- A transition diagram is a directed graph visualizing a Markov chain. Nodes are the states $i$, $j$, and edges are transitions, where each edge is labeled by the transition probability $P_{ij}$.
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

Continuous-time Markov chains
- You can think of Continuous-time Markov chains as a Discrete-Time Markov Chain that dictates the path, but instead of taking 1 unit of time per step, the process "pauses" at every node for a random, exponentially distributed amount of time.
- Let $\{X(t), t \geq 0\}$ be a continuous-time stochastic process,  taking values in $\mathbb{Z}$, and let $\{x(t), t \geq 0\}$ be *any* deterministic function taking values in $\mathbb{Z}$. The process $\{X(t), t \geq 0\}$ is called a **continuous-time Markov chain** if $$\begin{align} & P(X(t+s) = j \mid X(s) = i, X(u) = x(u), 0 \leq u < s)=\\&P(X(t+s) = j \mid X(s) = i)\end{align}$$ for every $s, t \geq 0$.
- If a continuous-time Markov chain $\{X(t), t \geq 0\}$ satisfies $$P(X(t+s) = j \mid X(s) = i) = P(X(t) = j \mid X(0) = i)$$for every $s, t \geq 0$, then $\{X(t), t \geq 0\}$ is **stationary** (or **time-homogeneous**).
- Let $T_i$ denote the time the process spends in state $i$ before making a transition into a different state (called sojourn time in state $i$). 
	- Since $T_{i}$ is memoryless, it must follow some exponential distribution.
- Let $P_{ij}$ denote the probability of transitioning to state $j$, given that the current state is $i$. The transition probabilities $P_{ij}$ satisfy (1) $P_{ii} = 0$, and (2) $\sum_{j}P_{ij}=1$.

Transition Probability Function
- While $P_{ij}$ (jump probability) defines _where_ the process goes next, the **transition probability function** $P_{ij}(t)$ defines the probability that the process is in state $j$ at time $t$, given it started in state $i$ at time $0$.
	- $P_{ij}(t) = \mathbb{P}(X(t+s)=j \mid X(s)=i)$ for stationary processes.
- The **instantaneous transition rate** $q_{ij}$ is the rate at which the process transitions from state $i$ into state $j$. It is related to the sojourn rate $v_i$ and jump probability $P_{ij}$ by $q_{ij} = v_i P_{ij}$. Note that $v_i = \sum_{j \neq i} q_{ij}$.
	- $q_{ij}$ can also be seen as the derivative of the transition probability at time 0: $q_{ij} = \lim_{h \to 0} \frac{P_{ij}(h)}{h} = P'_{ij}(0)$ for $i \neq j$.
	- $v_{i} = \lim_{ h \to 0 } \frac{1-P_{ii}(h)}{h}$ 
- **Chapman-Kolmogorov Equations**: Just like in discrete time, we can decompose a transition over time $t+s$ into a transition to an intermediate state $k$ at time $t$. $$P_{ij}(t+s) = \sum_{k=0}^{\infty} P_{ik}(t) P_{kj}(s)$$
- Unlike discrete chains where we simply multiply matrices, continuous chains require differential equations to describe how these probabilities evolve over time. 
- **Kolmogorov Equations**: These equations describe the rate of change of transition probabilities $P_{ij}$.
	- Backward: For all states $i, j$ and times $t \ge 0$: $$P_{ij}^{\prime}(t) = \sum_{k \neq i} q_{ik} P_{kj}(t) - v_i P_{ij}(t)$$ Example: Birth and Death Process. For a birth and death process, transitions from state $i$ are only possible to $i+1$ (rate $\lambda_i$) or $i-1$ (rate $\mu_i$). The backward equation becomes:$$P_{ij}^{\prime}(t) = \lambda_i P_{i+1, j}(t) + \mu_i P_{i-1, j}(t) - (\lambda_i + \mu_i) P_{ij}(t)$$
	- Forward: Under suitable regularity conditions (which hold for birth and death processes and finite state models), for all states $i, j$ and times $t \ge 0$: $$P_{ij}^{\prime}(t) = \sum_{k \neq j} q_{kj} P_{ik}(t) - v_j P_{ij}(t)$$Example: Birth and Death Process. Transitions into state $j$ can only come from $j-1$ (via a birth with rate $\lambda_{j-1}$) or $j+1$ (via a death with rate $\mu_{j+1}$). The forward equation becomes:$$P_{ij}^{\prime}(t) = \lambda_{j-1} P_{i, j-1}(t) + \mu_{j+1} P_{i, j+1}(t) - (\lambda_j + \mu_j) P_{ij}(t)$$
	- Derivation for both equations start with definition of the derivative, applying Chapman-Kolmogorov Equations, and finally definitions of $q_{ij}$ and $v_{i}$.

Birth and Death processes
- If only transitions from $i$ to $i-1$ (departures/deaths) or $i+1$ (arrivals/births) are allowed, then the process is called a **birth and death process**. For a state $i$ we say arrivals occur with rate $\lambda_{i}$, and departures occur with rate $\mu_{i}$. 
	- To avoid negative states we may require that $\mu_0 = 0$. 
	- A **pure birth process** is a birth and death process where $\mu_i = 0$ for all $i \in \mathbb{N}_{0}$.
	- A pure birth process with $X(0)=0$, is a counting process.
	- A **homogeneous Poisson process** is a pure birth process where $X(0)=0$ and the arrival rate is equal for all states.
- Per the minimum of two exponential distributions:
	- Given current state $i$, the probability that the next transition corresponds to an arrival is $P_{i,i+1} = \frac{\lambda_{i}}{\lambda_{i}+\mu_{i}}$. Similarly, $P_{i,i-1} = \frac{\mu_{i}}{\lambda_{i}+\mu_{i}}$.
	- Given current state $i$, the rate at which the process leaves the state is $\lambda_{i} + \mu_{i}$.

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
- Conditional Arrival Distribution:
	- If we know one event has occurred by time $t$ (i.e. $N(t)=1$), the time of that single event $T_{1}$ is uniformly distributed over the interval $(0,t)$. For any time $s$ where $s \le t$:$$\mathbb{P}(T_{1}<s|N(t)=1) = \frac{s}{t}$$
	- If the random variables $U_{1}, U_{2}, \dots, U_{n}$ are uniformly distributed over $(0, t)$, then the joint density function of the order statistics $U_{(1)} \le U_{(2)} \le \dots \le U(n)$ becomes $f(u_{1}, \dots, u_{n}) = \frac{n!}{t^n}, \quad u_{1} \le \dots \le u_{n} \le t$.
	- Given that $N(t)=n$ the $n$ arrival times $S_{1}, \dots, S_{n}$ have the same distribution as the order statistics corresponding to $n$ independent random variables uniformly distributed on the interval $(0,t)$.
	- For any operation where the order of arguments does not matter, you may ignore the sorting entirely, and treat the arrival times as independent uniform variables.
- When the arrival rate of a Poisson process is a function of time, we speak of a **nonhomogeneous** or **nonstationary** Poisson process.
	- If we let $m(t) = \int_{0}^{t} \lambda(y) \, dy$, then $N(s + t) - N(s)$ is a Poisson random variable with mean arrival time $m(s + t) - m(s)$.

Limiting probabilities of a continuous-time MC.
- We define the **limiting probability** of being in state $j$ as $P_{j} = \lim_{ t \to \infty }P_{ij}(t)$. 
	- These are also called the **stationary probabilities**
- Suppose this limit exists, and is independent of initial state $i$, then $$\lim_{ t \to \infty }P_{ij}'(t)=\sum_{k\neq j}q_{kj}P_{k}-v_{j}P_{j}$$ 
- If $\lim_{ t \to \infty }P_{ij}'(t)$ converges, then it must converge to zero, as otherwise $P_{ij}(t)$ wouldn't be a probability. Therefore, to find the limiting probabilities we may solve the balance equations: $v_j P_j = \sum_{k \neq j} q_{kj} P_k$, under the condition $\sum_{j}P_{j}=1$.
- The limiting probabilities exist if:
	- all states in the Markov chain communicate,
	- the Markov chain is positive recurrent.
- The limiting probability can be interpreted as the long-run proportion of time that the process is in state $j$. 
- If the limiting probabilities exist, then the chain is called **ergodic**.

Balance Equations for Birth and Death processes
- For $i=0$, $\lambda_{0}P_{0}=\mu_{1}P_{1}$.
- For $i>0$, $(\lambda_i + \mu_i) P_i = \mu_{i+1} P_{i+1} + \lambda_{i-1} P_{i-1}$
- Using a proof by induction we derive that: $\mu_{i + 1} P_{i+1} = \lambda_{i} P_{i}$ (Cut Equations)
- Consequently, $$P_i = \frac{\lambda_0 \lambda_1 \cdots \lambda_{i-1}}{\mu_1 \mu_2 \cdots \mu_i} P_0$$
- Given that $\sum_{i=0}^{\infty} P_i = 1$, we get: $$P_{0} = \frac{1}{1+\sum_{i=1}^\infty \frac{\lambda_0 \lambda_1 \cdots \lambda_{i-1}}{\mu_1 \mu_2 \cdots \mu_i}}$$
- If $P_{0} = 0$, then $P_{i}=0$, consequently making the sum of limiting probabilities also 0. Therefore $P_0$ must be unequal to zero. This gives a necessary and sufficient condition for the existence of the limiting probabilities:$$\sum_{n=1}^{\infty} \frac{\lambda_0 \lambda_1 \cdots \lambda_{n-1}}{\mu_1 \mu_2 \cdots \mu_n} < \infty$$
- If $\lambda_i = \lambda$ for every $i \ge 0$ and $\mu_i = \mu$ for every $i \ge 1$, and $\lambda/\mu < 1$, then $\sum_{n=1}^{\infty}(\lambda/\mu)^n = \frac{\lambda/\mu}{1 - \lambda/\mu} = \frac{\lambda}{\mu - \lambda}$. This simplifies the aforementioned formulae, such that $P_0 = 1 - \lambda/\mu$ and $P_i = (\lambda/\mu)^i (1 - \lambda/\mu)$.

Queueing systems
- **Kendall's Notation**: Queueing systems are indicated via two letters followed by one or two numbers.
	- The first letter indicates the arrival process:
		- $D$ - Deterministic: clients arrive at equidistant time points.
		- $M$ - Markovian: clients arrive according to a Poisson process.
		- $G$ - General: clients arrive according to a general arrival process.
	- The second letter indicates the type of service times:
		- $D$ - Deterministic: service times are fixed.
		- $M$ - Markovian: service times $S_{1}, S_{2}, \dots$ are i.i.d exponential variables with common rate.
		- $G$ - General: service times $S_{1}, S_{2}, \dots$ are independent and i.i.d random variables. They may have any distribution.
	- The first number indicates the number of servers.
	- The second number indicates the optional capacity of the system. The capacity is the maximum number of waiting clients plus the number of servers. It is omitted if there is infinite capacity.
- $M/M/1$, is a system with a single server, no capacity, arrivals following a Poisson process, and service times following some exponential random variable. The number of clients in the system is a birth and death process.

Little's Law
- **Definitions**: Consider a general queueing system where $N(t)$ is the number of arrivals up to time $t$.
    - **$\lambda$ (Arrival Rate)**: The overall arrival rate into the system is defined as $\lambda = \lim_{t\rightarrow\infty}\frac{N(t)}{t}$. Note that this is the long-run average rate which may differ from the parameter $\lambda$ in a birth and death process.
    - **$W$ (Average Sojourn Time)**: Let $V_{n}$ denote the time client $n$ spends in the system (sojourn time). The average sojourn time is $W = \lim_{n\rightarrow\infty}\frac{1}{n}\sum_{j=1}^{n}V_{j}$.
    - **$L$ (Average Number in System)**: Let $X(t)$ denote the number of clients in the system at time $t$. The average number of clients in the system over time is $L = \lim_{t\rightarrow\infty}\frac{1}{t}\int_{0}^{t}X(s)ds$.
- The law: if both $\lambda$ and $W$ exist and are finite, then $L$ also exists and $L = \lambda W$.
    - **Intuition**: Consider the total time all customers spent in the system up to a large time $T$. This can be calculated as the sum of time per customer ($W \times \lambda T$) or the integral of customers over time ($T \times L$). Equating these yields the law.
    - **Versatility**: Little's law is one of the most general laws in queueing theory; it applies to _any_ queueing system and is not limited to continuous-time Markov chains.
- Application to $M/M/1$:
	- The time average number in the system is calculated as $L = \sum_{n=0}^{\infty}nP_{n} = \frac{\lambda}{\mu-\lambda}$ provided $\lambda/\mu < 1$.
	- We apply Little's law to find the average time a client spends in the system $W = \frac{L}{\lambda} = \frac{1}{\mu-\lambda}$.
- Little's Law can be applied to specific parts of the system by carefully defining the systems boundaries:
	- Let $\lambda_Q$ be the arrival rate into the queue ($\lambda_Q = \lambda$).
	- Let $W_Q$ be the average waiting time in the queue. This is the total sojourn time minus the average service time: $W_{Q} = W - \frac{1}{\mu} = \frac{\lambda}{\mu(\mu-\lambda)}$.
	- Let $L_Q$ be the average number of clients in the queue. By Little's Law: $L_{Q} = \lambda W_Q = \frac{\lambda^{2}}{\mu(\mu-\lambda)}$.

Limiting properties of a queueing system: PASTA
- Definitions of limiting probabilities.
	- **$P_n$ (Time Average)**: The long-run probability that the system contains exactly $n$ clients at time $t$: $P_{n}=\lim_{t\rightarrow\infty}\mathbb{P}(X(t)=n)$. This is equivalent to the long-run proportion of time the system spends in state $n$.
	- **$a_n$ (Arrival Average)**: The long-run proportion of arriving clients that find $n$ clients in the system upon arrival.
	- **$d_n$ (Departure Average)**: The long-run proportion of departing clients that leave $n$ clients in the system upon departure.
- In any system where clients arrive and depart one at a time, these two probabilities coincide: $a_n = d_n$. However, $P_{n}$ and $a_n$ are not always equal, except if arrivals follow a Poisson distribution.
- **P**oisson **A**rrivals **S**ee **T**ime **A**verages implies $P_n = a_n$.

Erlang's Loss System
- Erlang's loss system is a queueing system where arrivals that find all servers busy do not enter the system and are lost. It corresponds to the **$M/M/k/k$** queueing system. Also called Erlang-B in telecom. Erlang-C is $M/M/k$.
- For this system, the arrival rate is $\lambda$ and the service rate with $n+1$ busy servers is $(n+1)\mu$. Following the cut equations, $\lambda P_{n} = (n+1)\mu P_{n+1}$.
- Recursively solving the cut equations yields $P_{n}=\frac{(\lambda/\mu)^{n}}{n!}P_{0}$ for $n=1, 2, \dots, k$.
- Given that the sum of all probabilities must equal 1 $\sum_{n=0}^{k} P_n = 1$, we get:$$P_{n}=\frac{\frac{(\lambda/\mu)^{n}}{n!}}{\sum_{j=0}^{k}\frac{(\lambda/\mu)^{j}}{j!}}$$
- The blocking probability $\tilde{P}$ is the probability an arriving customer is "lost" because they find all $k$ servers are busy. Because arrivals follow a Poison process, via the PASTA principle, the fraction of arrivals finding the system is full is exactly equal to the fraction of time the system is full $\tilde{P}=P_{k}$. 
- We notice then, that the numerator $\frac{(\lambda/\mu)^{n}}{n!}$ is identical to the term found in a standard Poisson distribution. The difference being that a Poisson distribution extends to $n = \infty$, where the $M/M/k/k$ system is "truncated" (cut off) at state $k$. If $k$ is very large, the denominator approaches $e^{\lambda/\mu}$.

Brownian Motion
- A Rademacher random variable is $R = 2X - 1$ where $X \sim \text{BERNOULLI}\left( \frac{1}{2} \right)$.
- Let $R_{1}, R_{2}, \dots$ be a sequence of independent Rademacher variables. Then, a random walk is the process $\{S_{k}, k > 0\}$ with $S_{k} = \sum_{i=1}^k R_{i}$.
- We consider the rescaled random walk $W_n(t) = \frac{1}{\sqrt{n}} S_{\lfloor nt \rfloor} = \frac{1}{\sqrt{n}} \sum_{i=1}^{\lfloor nt \rfloor} R_i$.
- Brownian Motion or the Wiener process is defined as $\{W(t), t\ge 0\}$ where $W(t) = \lim_{ n \to \infty }W_{n}(t)$. 
	- Following the Central Limit Theorem, $W_{n}(t)$ tends to a normal random variable with mean zero and variance $t$.
	- The random variables $W(t_{1})$ and $W(t_{2})-W(t_{1})$ are independent.
	- The random variable $W(t_{2})-W(t_{1})$ is a normal random variable with mean zero and variance $t_{2} - t_{1}$.
	- The distribution of $W(t_{1}+s)-W(t_{1})$ does not depend on $t_{1}$.
- Any continuous-time continuous-state process satisfying these three properties is a Brownian Motion:
	- $W(0)=0$
	- Has stationary and independent increments.
		- Independent: For any set of times $0 \le t_1 < t_2 < \dots < t_n$, the random variables $W(t_2) - W(t_1), W(t_3) - W(t_2), \dots, W(t_n) - W(t_{n-1})$ are mutually independent.
		- Stationary: The distribution of the increments $W(t + s) - W(t)$ does not depend on $t$, only on the duration $s$.
	- $W(t_{1}) \sim N(0, t_{1})$
- While increments are independent, the values $W(t_1), W(t_2), \dots$ are dependent.
- Any finite collection $(W(t_1), \dots, W(t_m))$ follows a Multivariate Normal Distribution with mean $\mathbf{0}$. 
	- This is called a **finite-dimensional marginal** because it describes a finite subset of the infinite stochastic process.
	- The covariance between two points is $\text{Cov}(W(s), W(t)) = \min(s, t)$.
- An alternative definition of Brownian motion:
	- $W(0)=0$
	- Process has multivariate normal marginals.
	- For $t_1 \leq t_2$, $W(t_1)$ and $W(t_2)$ have mean zero and covariance $t_1$.
- Reflection principle: The probability that the maximum of the random walk reaches or exceeds $k$ is exactly twice the probability that the random walk ends above $k$ at time $n$:$$\mathbb{P}(\max_{j=1,\dots,n} S_j \geq k) = 2\mathbb{P}(S_n \ge k)$$