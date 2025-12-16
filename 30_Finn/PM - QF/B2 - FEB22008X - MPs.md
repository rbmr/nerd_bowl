# Course Information

### Study Goals

### Assessment

# Question Guide

## Discrete-Time Markov Chain
### Q1 - Checking Markovian Property and Augmenting
**Check Markovian**
- **Test the Condition:** You must determine if the probability of the future state depends **only** on the present state, effectively "decoupling the future from the past".
	- Mathematically, check if:
$$P(X_{n+1}=j | X_n=i, X_{n-1}=i_{n-1}, \dots) = P(X_{n+1}=j | X_n=i)$$
- **Identify Order of Dependency:** Look for problem descriptions stating that an event depends on the "last $k$ days" or "previous $k$ values".

**Redefining States**
- Define augmented states. Create new states that are tuples of the original states. $Y_{t}=(X_{t}, \dots, X_{t-k})$ for $k$ previous states as history.
- **Create Transitions**
	- The 'past' of $Y_{t+1}$ must exactly match the first $k-1$ entries of $Y_{t}$.
	- Map the original conditional probabilities to the transitions between the new augmented states
- Form the new Transition Matrix
	- Note that the size has increased from $|S|^2$ to $(|S|^k)^2$
	- The result describes a Markov chain, as the states do not depend on past states anymore.
### Q2 - Calculating n-step transition probabilities
**Method 1: Path decomposition** (going from i to j in n-steps)
- Identify all valid paths for going from i to j in n steps
- For each path, calculate the probability by multiplication
- Sum the probabilities of all paths to find $P_{ij}^n$

**Method 2: Chapman-Kolmogorov Equations**
- **Select an intermediate step:** Break the $n$ transitions into two segments, $k$ steps and $m$ steps, where $k + m = n$ (commonly $1$ step and $n-1$ steps)7.
- Apply the formula: Use the equation:
$$P_{ij}^{(n)} = \sum_{k \in S} P_{ik}^{(1)} P_{kj}^{(n-1)}$$
    This calculates the probability by summing the product of the probability of going to an intermediate state $k$ in the first step, and then from $k$ to $j$ in the remaining $n-1$ steps.
- **Iterate:** If $P^{(n-1)}$ is not known, you may need to apply this recursively starting from $n=2$.

**Method 3: Matrix Multiplication**
- Construct the Transition Matrix
- $P^{(2)} = P \times P$
- $P^{(3)} = P^{(2)} \times P$

**Method 4: Conditioning on Initial State**
- **Identify Initial Distribution ($\alpha^{(0)}$):** Determine the probability of starting in each state $i$
- Sum Conditional Probabilities: Use the Law of Total Probability to sum the $n$-step probabilities weighted by the starting probabilities:
$$\mathbb{P}(X_n = j) = \sum_{i \in S} P_{ij}^n \alpha_i^{(0)}$$    
- **Vector Calculation:** Alternatively, multiply the initial distribution vector $\alpha^{(0)}$ by the transition matrix $n$ times: $\alpha^{(n)} = \alpha^{(0)}P^n$.
### Q3 - Distinguish Recurrent and Transient
- **Recurrent:** Starting in state $i$ the probability it returns to that state is 1 (ever, so in infinite steps: $\sum_{n=1}^\infty P_{ii}^n = \infty$)
- **Transient:** Not recurrent

**Method 1: Structural Analysis**
- **Identify Communication classes.** Group of states where a state can communicate with at least one (so all), i.e. going from i to j and back to i in a finite number of steps.
	- If there is only one class (**irreducible**), and the chain is finite, all states must be recurrent. 
- **Apply Class properties:** Recurrence and Transience are class properties, if it applies to one, it applies to all states in that class. (Test one state, and write work)
- **Checking for escapes**: 
	- if the class is closed (so zero propbability of ever leaving the class), and the state space is finite, the class is recurrent.
	- If it is possible to leave a class and enter a state from which you cannot return, the class is transient
	- A specific case of a recurrent class is an absorbing state, it is always recurrent (and a lonesome class).

**Note:** Maybe write the exact definitions of transience and recurrence. 

### Q4 - Aperiodic State
**Method 1: Prove period is 1**
This is the formal definition. A state $i$ is aperiodic if its period $d(i) = 1$. The period is defined as the greatest common divisor (GCD) of all possible return times.
**Steps:**
1. **Identify all loop lengths:** Find all path lengths $n$ such that $P_{ii}^n > 0$ (the probability of starting at $i$ and returning to $i$ in $n$ steps is positive).
2. **Calculate the GCD:** Compute $d(i) = \text{gcd}\{n \ge 1 : P_{ii}^n > 0\}$.
3. **Check for 1:** If the GCD is 1, the state is aperiodic. If the GCD > 1, the state is periodic.
	1. **Example:** If you can return to state $i$ in 2 steps ($i \to j \to i$) and also in 3 steps ($i \to k \to l \to i$), then $d(i) = \text{gcd}(2, 3) = 1$. Therefore, state $i$ is aperiodic.

**Method 2: Identify a Self-Loop (1-step return)**
If a state has a non-zero probability of returning to itself from itself, then it the GCD is 1. 

**Method 3: use class property**
- Find all states the target state communicates with.
- If any of those states has a self-loop, or just is aperiodic, then all other states in the class are aperiodic too. 

**For a CTMC**
A CTMC cannot really be periodic, as transitions can happen at any time $t$. However, discrete skeletons (embedded chains) can be analyzed. 

### Q5 - (solving) Steady state equations
**Method 1: The standard Algebraic Method (Eigenvector approach)**
This is the most general method applicable to any irreducible, aperiodic markov chain.
1. **Define the Vector:** Let $\pi = (\pi_0, \pi_1, \dots, \pi_n)$ be the row vector representing the stationary distribution.
2. **Write the Steady State Equation:** The stationary distribution is the left eigenvector of the transition matrix $P$ with an eigenvalue of 1.
	- **Equation:** $\pi = \pi P$.
	- _Note on Transpose:_ If you are working with column vectors instead of row vectors (which is common in linear algebra calculations), the equation becomes $\pi^T = P^T \pi^T$. This explains the hint "Do not forget the transpose."
3.  Expand into a System of Linear Equations: Write out the equation for each state $j$: $\pi_j = \sum_{i \in S} \pi_i P_{ij}$
4. To find the unique probability distribution, you must add the constraint that all probabilities sum to 1. $\sum_{j \in S} \pi_j = 1$.
5. One of the linear equations derived from $\pi = \pi P$ provides no new information (it is linearly dependent), remove this one, and replace with the constraint.
6. Solve.

**Method 2: Global Balance Equations (Rate/Flow Approach)**
- **Identify Inflow and Outflow:** For every state $j$, identify all transitions entering $j$ and all transitions leaving $j$.
- **Equate Rates:** Set the total rate of leaving state $j$ equal to the total rate of entering state $j$:
    - **Rate Out:** $\pi_j$ (since the sum of transition probabilities leaving $j$ is 1).
    - **Rate In:** $\sum_{i \ne j} \pi_i P_{ij}$ (sum of probabilities from other states $i$ into $j$).
    - _Note:_ In Continuous Time Markov Chains (CTMC), this uses rates $v_j$ and $q_{ij}$ instead of probabilities: $v_j P_j = \sum_{k \ne j} q_{kj} P_k$.
- **Solve:** Just like Method 1, remove one redundant balance equation and use the normalization equation $\sum \pi_j = 1$ to solve the system.

### Q6 - Calculating the long-run expected reward/cost
**Method 1: The stationary distribution approach**
1. **Define the Reward/Cost Function** Identify the reward or cost associated with each specific state. Let $r$ be a bounded function defined on the state space $S$, where $r(j)$ represents the reward (or cost) earned whenever the process is in state $j$.
2. **Verify the chain is ergodic** Ensure the Markov chain is **irreducible** and **ergodic** (aperiodic and positive recurrent). This ensures that a unique limiting distribution exists and is independent of the initial state.
3. Formulate and Solve the Steady state equations (see Q5)
4. Calculate the weighted average: $\text{Average Reward} = \sum_{j \in S} r(j)\pi_{j}$

**Method 2: The Mean recurrence Time Approach**
1. **Calculate Mean Recurrence Time** For each state $j$, determine the mean return time $m_j$. This is the expected number of steps it takes for the process to return to state $j$ given that it started in state $j$.
2. **Derive Stationary Probabilities** Convert the mean recurrence times into limiting probabilities. For an irreducible, aperioidc chain, the long-run probability of being in state $j$ is the inverse of the mean return time: $\pi_{j}=\frac{1}{m_{j}}$.
3. Compute the expected reward: $\text{Average Reward} = \sum_{j \in S} r(j) \left( \frac{1}{m_{j}} \right)$

**Method 3: Simulation**
A computer could simulate the Markov chain for a large number of steps. For each step, it records the reward associated with the current state. Then at the end, it takes the average. 

### Q7a - Calculating Expected Number of Visits ($s_{ij}$)
**Method 1: Conditioning on the first step**
- Identify Transient States: Let $T$ be the set of transient states
- Set up the equation: use the recursive relationship based on the first transition:
	- If $i \neq j$: $s_{ij} = \sum_{k \in T} P_{ik} s_{kj}$
	- If $i = j$ (expected return visits including time 0): $s_{ii} = 1 + \sum_{k \in T} P_{ik} s_{ki}$
	- _Note:_ Transitions to recurrent states are ignored (multiply by 0) because once the chain leaves the transient set, it never returns to $j$.
- Solve the resulting system of linear equations. Solve for the specific $s_{ij}$ variables that are needed. 

**Method 2: Matrix Inversion**
- Form Matrix $P_{T}$ containing only the transient states
- Calculate $I-P_{T}$.
- Compute the Fundamental Matrix $S-(I-P_{T})^{-1}$
- Find the result at i,j

### Q7b - Calculating Probability of Ever Visiting ($f_{ij}$)
**Method 1: Using $s_{ij}$, the relation formula**
1. Calculate $s_{ij}$ (Q7a) and $s_{jj}$
2. Apply formula:
	1. if $i\neq j$: $f_{ij}=\frac{s_{ij}}{s_{jj}}$
	2. Else: $f_{ii}=\frac{{s_{jj}-1}}{s_{jj}}$

**Method 2: Conditioning on the First Step (Direct Calculation)**
- Set up the Equation: $f_{ij} = P_{ij} + \sum_{k \neq j} P_{ik} f_{kj}$
    - _Interpretation:_ The probability of reaching $j$ is the chance of going there directly ($P_{ij}$) plus the chance of going to some other neighbor $k$ and eventually reaching $j$ from there.
- **Boundary Conditions:** Note that $f_{jj} = 1$ in the recursive step if you are calculating "ever entering" logic for a target set, but for single states, usually Method A is preferred.

### Q7c - Calculating Expected Steps to Enter a Recurrent Class $m_{iR}$
**Method 1: Conditioning on the first step**
- Set up the Equation: $m_{iR} = 1 + \sum_{j \in T} P_{ij} m_{jR}$
    - _Interpretation:_ You take 1 step. If you land in a recurrent state immediately, the "remaining" steps are 0 (so just 1). If you land in another transient state $j$, you add the expected steps from $j$ ($m_{jR}$).
- **Solve the System:** Solve the linear equations for the unknown $m$ values4.

**Method 2: Matrix/Vector Calculation**
- **Calculate S:** Compute the Fundamental Matrix $S = (I - P_T)^{-1}$.
- Sum the Rows: Multiply $S$ by a column vector of ones ($\mathbf{1}$).
$$m = S \mathbf{1}$$
    - _Result:_ $m_{iR} = \sum_{j \in T} s_{ij}$ (The sum of the $i$-th row of $S$).

### Q7d - Calculating $f_{iR_1}$ - Probability of Entering a Specific Recurrent Class
**Method A: Conditioning on the First Step (System of Equations)**

1. Set up the Equation: $f_{iR_1} = \sum_{j \in R_1} P_{ij} + \sum_{k \in T} P_{ik} f_{kR_1}$
    - _Interpretation:_ You enter $R_1$ if you step directly into it ($\sum_{j \in R_1} P_{ij} \cdot 1$) OR if you step to a transient state $k$ and then eventually reach $R_1$ ($P_{ik} f_{kR_1}$).
    - Note: Transitions to other recurrent classes ($R_2$, etc.) contribute 0.
2. **Solve:** Solve the system of linear equations for $f_{iR_1}$.

**Method B: Matrix Vector Calculation**
1. **Define $p_{R_1}$:** Create a vector where the $i$-th entry is the total probability of moving from transient state $i$ directly into class $R_1$ in one step ($\sum_{j \in R_1} P_{ij}$).
2. Apply Formula: $f_{R_1} = S p_{R_1}$
    - _Result:_ Multiply the Fundamental Matrix $S$ by the vector $p_{R_1}$.

## Poisson Processes
### Q8 - Calculate (conditional) probabilities regarding a counting event
**Method 1: Direct Calculation (No Overlap/Conditioning)**
If asked for the probability of $k$ events in an interval of length $t$ (e.g., "probability of 5 arrivals between 1:00 and 3:00"):
1. **Identify the rate $\lambda$**: Ensure the time units match the rate (e.g., if $\lambda$ is per hour, $t$ must be in hours).
2. **Identify the interval length $t$**.
3. Apply the Poisson PMF: The number of events $N(t)$ follows a Poisson distribution with mean $\lambda t$. $P(N(t) = k) = \frac{e^{-\lambda t}(\lambda t)^k}{k!}$

**Method 2: Handling Disjoint Intervals (Independence)**
If asked for a probability given an event in a non-overlapping time interval (e.g., "probability of 2 events in the next hour given 5 events in the last hour"):
1. **Check for Overlap**: If the intervals $[t_1, t_2]$ and $[t_3, t_4]$ are disjoint, the counts are independent.
2. Drop the Condition: Due to independent increments, information about the past (or disjoint future) provides no information about the current interval. $P(N(t+s) - N(t) = k \mid N(t) = n) = P(N(t+s) - N(t) = k)$
3. **Calculate**: Use the Poisson formula with the length of the new interval $s$.

**Method 3: Handling Overlapping Intervals (Decomposition)**
If the intervals overlap (e.g., "probability of 5 events by time $t$, given 2 events by time $s$" where $s < t$):
1. Decompose the Interval: Break the target interval into the "past" (known) and the "future" (unknown) parts. $N(t) = N(s) + (N(t) - N(s))$
2. Substitute Known Values: If given $N(s) = j$, substitute this value. The requirement $N(t) = k$ becomes: $j + (N(t) - N(s)) = k \implies (N(t) - N(s)) = k - j$
3. **Use Independent Increments**: The increment $N(t) - N(s)$ is independent of $N(s)$. Calculate the probability of $k-j$ events occurring in the interval of length $t-s$.
### Q9 - Calculate (conditional) expectation regarding an arrival time
**Method 1: Unconditional Expectation (Gamma Distribution)**
If asked for the expected time of the $n$-th event ($S_n$):
1. **Sum of Interarrival Times**: Recognize that arrival time $S_n$ is the sum of $n$ independent exponential variables ($T_i$)6.
2. Calculate Mean: Since each $T_i \sim \text{Exp}(\lambda)$, $E[T_i] = 1/\lambda$. $E[S_n] = \sum_{i=1}^n E[T_i] = \frac{n}{\lambda}$

**Method 2: Conditional Expectation (Memorylessness)**
If asked for the expected remaining time or total time given a wait has already occurred (e.g., "expected time you leave the bank given you have already waited 10 minutes"):
1. **Identify the Random Variable**: Let $T$ be the interarrival/service time.
2. **Apply Memorylessness:** The distribution of the remaining time is identical to the original distribution. $E[T \mid T > s] = s + E[T] = s + \frac{1}{\lambda}$
    Explanation: The expected total time is the time already elapsed ($s$) plus the expected remaining time ($1/\lambda$).

**Method 3: Conditional Arrival Distribution (Order Statistics)**
If asked for the expected arrival time of an event given a total count of events in a fixed interval (e.g., "expected time of the first arrival given 2 arrivals occurred by time $t$"):
1. **Identify the Condition**: You are given $N(t) = n$ and asked about arrival times $S_1, \dots, S_n$.
2. **Use Uniform Order Statistics**: Conditional on $N(t)=n$, the arrival times $S_1, \dots, S_n$ are distributed as the order statistics of $n$ independent Uniform$(0, t)$ variables.
3. **Calculate Expectation**:
- For a specific arrival $S_i$: $E[S_i \mid N(t)=n] = E[U_{(i)}] = t \cdot \frac{i}{n+1}$.
- For a sum or function of arrivals $\sum g(S_i)$: Treat them as unordered uniform variables: $E[\sum g(S_i) \mid N(t)=n] = n E[g(U)]$, where $U \sim \text{Uniform}(0, t)$.

**Method 4: Converting Arrival Time to Counting**
If asked for the probability that the $n$-th event occurs before time $t$ ($P(S_n \le t)$):
1. Use the Equivalence: The $n$-th event happens by time $t$ if and only if there are at least $n$ events in the interval $(0, t]$. $P(S_n \le t) = P(N(t) \ge n)$
2. **Calculate via Poisson**: Sum the Poisson probabilities for $k = n, n+1, \dots$ (or use $1 - P(N(t) < n)$).

### Q10 - Analyzing Merged or Decomposed Poisson processes
1. Define notations, e.g. Let $\{N(t), t \ge 0\}$ be the merged process of $N_1(t)$ and $N_2(t)$.
2. Claim the poisson property and calculate rates
3. Argue independence,. Explicitly argue independence properties relevent to the problem. State that the decomposed processes are statistically independent of eachother.
	1. Also state that the event type (whether arrival is type 1 or 2) is independent of the arrival time or count. 

**Method A: Using Merged Process Properties (Superposition)**
- **Context:** Use this when asked about the total number of events from multiple sources or the time until the next event of _any_ type.
- **Procedure:**
    1. Define the merged process $N(t) = N_1(t) + N_2(t)$.
    2. State that $N(t)$ is Poisson with rate $\lambda = \lambda_1 + \lambda_2$.
    3. Calculate probabilities (e.g., $P(N(t) = k)$) using the standard Poisson formula with the new combined rate.
    4. If asked about the probability that the _next_ event is of a specific type (e.g., type 1), calculate it as $\frac{\lambda_1}{\lambda_1 + \lambda_2}$. 

**Method B: Using Decomposed Process Properties (Thinning)**
- **Context:** Use this when asked about a specific subset of events (e.g., "how many _local_ customers arrived") or when asked to calculate joint probabilities of different event types.
- **Procedure:**
    1. Define the subprocesses $N_1(t)$ and $N_2(t)$ based on event types (probabilities $p$ and $1-p$).
    2. State that $N_1(t)$ and $N_2(t)$ are **independent** Poisson processes with rates $\lambda p$ and $\lambda(1-p)$.
    3. Because they are independent, you can calculate joint probabilities by multiplying their individual probabilities: $P(N_1(t) = k, N_2(t) = m) = P(N_1(t) = k) \cdot P(N_2(t) = m)$   
    4. Solve for the specific probability using the Poisson formulas for the individual rates.

### Q11 - Analyze quantities related to (S1, · · · , Sn) given N(t) = n
1. State the conditioning event. ($N(t)=n$)
2. Invoke the Order statistic Property: Argue that the conditional distribution of the arrival times $(S_1, \dots, S_n)$ is identical to the distribution of the order statistics $(U_{(1)}, \dots, U_{(n)})$ of $n$ independent and identically distributed (i.i.d.) random variables $U_1, \dots, U_n$ where each $U_i \sim \text{Uniform}(0, t)$.
3. Apply method below

**Method 1: For symmetric functions (Sums)**
Use this method if the question asks for the expected value of a sum involving arrival times, such as $\sum_{i=1}^n g(S_i)$.
1. **Apply Symmetry:** Since the sum operation is symmetric (the order of terms does not matter), treating the **ordered** sample $(U_{(1)}, \dots, U_{(n)})$ is equivalent to treating the **unordered** original sample $(U_1, \dots, U_n)$.
2. Replace Variables: Replace the arrival times $S_i$ with the unordered uniform variables $U_i$. $E\left[\sum_{i=1}^n g(S_i) \mid N(t)=n\right] = E\left[\sum_{i=1}^n g(U_i)\right]$
3. Calculate: Compute the expectation for a single uniform variable and multiply by $n$:   $= n \cdot E[g(U)]$, where $U \sim \text{Uniform}(0, t)$.

**Method 2: For non-symmetric Functions (specific arrival times)**
Use this method if the question asks about a specific arrival time (e.g., "What is the expected time of the first arrival $S_1$?") or a joint probability where order matters.
1. Use Joint Density: Utilize the joint density function of the order statistics. For $0 < s_1 < \dots < s_n < t$, the joint density is: $f(s_1, \dots, s_n) = \frac{n!}{t^n}$.
2. **Integrate:** Set up the integral of your target function against this density over the region $0 < s_1 < \dots < s_n < t$.
3. **Alternative (Marginal Distribution):** For a single arrival time $S_k$, recall that $S_k$ acts as the $k$-th order statistic of $n$ Uniform(0, t) variables. You can essentially treat $S_k/t$ as the $k$-th order statistic from a Uniform(0, 1) distribution (which follows a Beta distribution).

### Q12 - Calculate (conditional) probabilities regarding a counting event for a non-homogeneous Poisson process
**Method 1: Calculating Probabilities for Single intervals**
1. Identify the Intensity Function $\lambda(t)$
2. Calculate the Mean Value Function (Integration)
	1. The mean value is often denoted as $m(t) - m(s)$ or simply as the integral: $\text{Expected Count} = \int_{s}^{t} \lambda(u) \, du$
	2. If $\lambda(t)$ changes formula within $(s, t]$, break the integral into corresponding parts.
3. Apply the Poisson Probability Formula
	1. Let $\mu = \int_{s}^{t} \lambda(u) \, du$. The probability of observing exactly $k$ events is: $P(N(t) - N(s) = k) = \frac{e^{-\mu} \mu^k}{k!}$
	2. **Note:** The probability of _zero_ events (no arrivals) is simply $e^{-\mu}$

**Method 2: Handling Conditional Probabilities (Independent Increments)**
1. Decompose into Disjoint Increments
	1. NHPPs have independent increments. This means the number of events in non-overlapping intervals are independent. 
	2. Rewrtie the intervals to be non-overlapping. $N(t_2) = N(t_1) + [N(t_2) - N(t_1)]$
2. Utilize independence
	1. Because the increment $[N(t_2) - N(t_1)]$ is independent of the past $N(t_1)$, you can treat the future counts separately from the past.
	2. $P(N(t_2) = k | N(t_1) = n) = P(N(t_1) + [N(t_2) - N(t_1)] = k | N(t_1) = n)$
	3. $= P(n + [N(t_2) - N(t_1)] = k)$
	4. $= P(N(t_2) - N(t_1) = k - n)$

**Method 3: Handling Disjoint Intervals**
If the question asks for the joint probability of events in two non-overlapping intervals (e.g., "probability of 2 arrivals between 8-9 AM _and_ 3 arrivals between 10-11 AM"), use the independence property directly.

*Step 1: Treat as Independent Variables*
- Assume the count in interval A ($N_A$) and interval B ($N_B$) are independent random variables.

*Step 2: Calculate Probabilities Separately*
- Calculate $P(N_A = n_a)$ using **Method 1**.
- Calculate $P(N_B = n_b)$ using **Method 1**.

*Step 3: Multiply Probabilities*
- The joint probability is the product of the individual probabilities:
- $P(N_A = n_a \cap N_B = n_b) = P(N_A = n_a) \times P(N_B = n_b)$

## General Continuous Time Markov Chain

### Q13 - Model a real life process by continuous time Markov Chain, write down instantaneous transition rates
1. Define State space (ensuring Markov Property holds)
2. Identify Transitions between states. 
3. The instantaneous transition rate between two states represents the rate of flow from stat i to j. These rates can be found with method 1 or 2 below.
4. Compute the Q-Matrix (Only if needed)
	- **Off-Diagonal Entries ($i \neq j$):** Set the entry at row $i$, column $j$ to the calculated $q_{ij}$.
	- **Diagonal Entries ($q_{ii}$):** Set the diagonal entry to the negative sum of the rest of the row.
    - $q_{ii} = -v_i = -\sum_{j \neq i} q_{ij}$.

**Method 1: Direct Identification from Rates**
1. Identify event rates. Look for keywords like 'arrival rate', 'service rate' or 'failure rate'. In a CTMC, the time until the next event must be exponentially distributed with parameter $\lambda$.
2. Assign rates to transitions:
	1. If an event moves the system from state i to state j, the rate of that event is directly $q_{ij}$.

**Method 2: Decomposition via Sojourn Time and Jump Probabilities**
1. Calculate the Departure Rate ($v_{i}$):
	- Determine the sojourn time $T_{i}$, which is the time spent before leaving
	- This variable must be exponentially distributed with mean $\frac{1}{v_{i}}$
	- Calculate the rate of leaving state $i: v_{i} = \frac{1}{E[T_{i}]}$
2. Determine the Transition Probabilities $(P_{ij})$:
	- Identify the probability that, when the process leaves state $i$, it goes specifically to state $j$. This is denoted as $P_{ij}$.
3. Compute Instantiation rate ($q_{ij}$):
	- Use the relationship $q_{ij}=v_{ij}\times P_{ij}$
	- Logic: the rate of going to $j$ is the total rate of leaving $i$ multiplied by the probability of choosing $j$ as destination.

### Q14 - Write down Balance Equations
#### General Case
This method is the standard recipe used for general continuous-time Markov chains.
1. Formulate the "Rate out"
	- Focus on specific state $i$
	- Identify every state the process can transition to from state $i$ in exactly one move
	- Add all these transition rates together.
	- Write this sum on the left side of your equation, multiplied by the probability of being in state $i$
2. Formulate the "Rate in"
	- Focus on the same state $i$
	- Identify every state from which the process can transition into state $i$ in exactly one move.
	- For each source state, take the transition rate into $i$ and multiply it by the probability of that source state. Sum these weighted values together on the right side of the equation.
3. Solve the system
	- Substitution: use the equations to express all probabilities as a multiple of just one of them
	- Normalization: apply the constraint that the sum of all long-run probabilities must equal 1 to solve for the base probability. 

#### Cut Equations (Birth and Death / Queueing)
This method is noted as being "easier" but is specifically applicable to Birth and Death processes (like queueing systems) where transitions only occur between neighboring states.
- **Step 1: Define the Cut**
    - Instead of focusing on flow in/out of a single state, look at the flow across a "cut" between two groups of states (e.g., between state $n$ and $n+1$).
- **Step 2: Equate Flow Across the Cut*
    - Set the rate of flow moving "up" across the cut equal to the rate of flow moving "down" across the cut6.
    - _Equation format:_ Rate up $\times P_n$ = Rate down $\times P_{n+1}$ (e.g., $\lambda_n P_n = \mu_{n+1} P_{n+1}$).
- **Step 3: Solve the System**
    - **Substitution:** Use the simple recursive relationship provided by the cut equations to express every probability as a multiple of the first one ($P_0$).
    - **Normalization:** As with the general method, use the fact that the probabilities must sum to 1 to find the final values.

## Queueing Theory
### Q15 - Recognize a real life problem as a queueing problem with Kendall's notation
**Goal:** Translate a word problem into the standard notation $A/B/c/K/N/D$.
**Exact Steps:**
1. **Identify the Arrival Process ($A$):** Look for how clients arrive.
    - If arrivals are a **Poisson process** (or interarrival times are Exponential), write **M** (Markovian).
    - If arrivals are fixed/constant, write **D** (Deterministic).
    - If the distribution is unspecified or generic, write **G**.
2. **Identify the Service Process ($B$):** Look for how long service takes.
    - If service times are **Exponentially distributed**, write **M**.
    - If service times are fixed, write **D**.
    - If service times are generic i.i.d. variables, write **G**.
3. **Determine the Number of Servers ($c$):**
    - Identify how many clients can be served simultaneously. Write this integer (e.g., 1, 2, $k$).
4. **Determine System Capacity ($K$):**
    - Count the total number of clients allowed in the system (Servers + Queue slots).
    - If there is no limit on the queue, write $\infty$ or omit this parameter.
    - _Note:_ If clients are lost when all servers are busy (no queue), then Capacity = Number of Servers ($K=c$).
5. **Check Population ($N$) and Discipline ($D$):**
    - Usually omitted if the population is infinite and discipline is FIFO (First-In-First-Out).

**Possible Solution Variations:**
- **M/M/1:** Single server, infinite queue, Poisson arrivals, Exponential service.
- **M/M/1/K:** Single server, finite capacity (loss system if full).
- **M/M/k/k (Erlang's Loss):** $k$ servers, no waiting room (Capacity = $k$). Arrivals finding servers busy are blocked/lost.

### Q16 - Solve $L$, $\lambda$, or $W$ for a queuing problem
Use **Little's Law** ($L = \lambda W$) to find the average number of clients ($L$), effective arrival rate ($\lambda$), or average time spent ($W$).
1. Define the "System" Boundary:
	- Decide if you are analyzing the entire system (queue +server) or just the queue.
	- Entire system : use $L$ and $W$, queue only: use $L_{Q}$ and $W_{Q}$
2. Determine the Effective Arrival Rate ($\lambda_{a}$):
	- **Infinite Capacity:** The effective rate is simply the given arrival rate ($\lambda_a = \lambda$).
	- Finite Capacity (Loss Systems): You must calculate the rate of admitted clients only. Use the formula: $\lambda_a = \lambda_{nominal} \times (1 - P_{loss})$ where $P_{loss}$ is the probability the system is full (often $P_K$).
3. Calculate missing variable:
	- **To find $L$ (Average number in system):**
		- _Method A (Little's Law):_ If you know $W$ and $\lambda_a$, use $L = \lambda_a W$.
	    - Method B (Limiting Distribution): If you have the steady-state probabilities $P_n$, calculate the expected value:  $L = \sum_{n=0}^{\infty} n P_n$
	- **To find $W$ (Average time in system):**
	    - _Method A (Little's Law):_ If you know $L$ and $\lambda_a$, use $W = L / \lambda_a$.
	    - Method B (Difference/Decomposition): Calculate $W$ as the sum of waiting time and service time: $W = W_Q + \frac{1}{\mu}$ (where $1/\mu$ is the mean service time).
- **To find $L_Q$ or $W_Q$ (Queue metrics):**
    - Use Little's Law applied to the queue: $L_Q = \lambda_a W_Q$.

### Q17 - Apply and Declare PASTA Principle
Determine what an arriving customer 'sees' (e.g. probability of finding the system full, probability of find n people)

1. Check condition & Declare principle
	- Verify the arrival process is **Poisson** (M).
	- **Mandatory Step:** Explicitly state in your answer: _"Since arrivals follow a Poisson process, the PASTA principle applies, meaning $a_n = P_n$.".
	    - $a_n$: Proportion of arrivals finding $n$ people.
	    - $P_n$: Long-run proportion of time system has $n$ people.
2. Translate the Question to System states ($P_{n}$)
	- _Question:_ "What fraction of potential customers are lost?"
	    - _Translation:_ Identify the state where the system is full (e.g., state $K$). The answer is $P_K$.
	- _Question:_ "What is the probability an arriving truck leaves immediately?"
	    - _Translation:_ Identify all states where the truck cannot park (e.g., states with 1 or 2 cars already parking). The answer is the sum of those probabilities (e.g., $P_1 + P_2$).
3. Solve for Steady-State Probabilities:
	- **Method A (Balance Equations):** Equate rate leaving a state to rate entering a state ($\text{Rate Out} = \text{Rate In}$)
	- **Method B (Cut Equations):** For Birth-Death processes (like M/M/k), equate flow between adjacent states $n$ and $n+1$: $\lambda_n P_n = \mu_{n+1} P_{n+1}$
	  Use this to express all $P_n$ in terms of $P_0$.
4. Normalize: Use the condition $\sum P_n = 1$ to solve for $P_0$, and subsequently determine the specific $P_n$ required.
5. Final Calculation: Substitute the value of the required $P_n$ (which equals $a_n$) as the final answer.

## Gaussian process
### Q18 - Apply Reflection Principle
This question type typically asks for the probability that a standard Brownian motion crosses a certain boundary within a **finite time horizon**. The core strategy is to convert a statement about the _maximum_ (or minimum) of the process into a statement about the _endpoint_ of the process.

**Method 1: Simple One-Sided Boundary Crossing**
Use this method if the question asks for the probability that the maximum of a standard Brownian motion $W(t)$ exceeds a level $a$ by time $t$.
**Steps:**
1. **Verify Assumptions:** Ensure the process is a standard Brownian motion (starts at 0, symmetric, continuous paths) and the boundary $a$ is constant
2. **Define the Hitting Time:** Let $\tau_a$ be the first time the process hits level $a$ ($\tau_a = \inf\{t > 0 : W(t) = a\}$)
3. **Apply Symmetry:** Recognize that for every path that hits $a$ and ends below it ($W(t) < a$), there is a reflected path that ends above it ($W(t) > a$). These paths have equal probability
4. Calculate using Endpoint: The probability of crossing $a$ is exactly twice the probability of the process ending above $a$ at time $t$
$$P(\max_{0 \le s \le t} W(s) \ge a) = 2P(W(t) \ge a)$$
5. Compute Z-score: Since $W(t) \sim N(0, t)$, standardize the variable to use the standard normal distribution $\Phi$    $$2P(W(t) \ge a) = 2 \left( 1 - \Phi\left(\frac{a}{\sqrt{t}}\right) \right)$$

**Method 2: Conditional Probability (Complex Scenarios)**
Use this method if the question imposes a condition, such as "What is the probability $W(b) < y$ given that the maximum exceeded $y+h$?" 
**Steps:**
1. **Formulate the Conditional Probability:** Write the problem as $P(A|B) = \frac{P(A \cap B)}{P(B)}$.
2. **Analyze the Intersection (Numerator):** Identify the path requirements. For example, if a path must reach a maximum $\ge y+h$ but end at $W(b) < y$, it implies the path hit the barrier $y+h$ and then traveled downward to end at $W(b)$.
3. **Apply Reflection to the Numerator:** Reflect the portion of the path _after_ it hits the barrier.
    - If the barrier is $a = y+h$, and the target endpoint is $x < y$, the reflected endpoint is $2a - x$.
    - Replace the event "reach $y+h$ and end $< y$" with the simpler event "end $> 2(y+h) - y$"10.
4. Calculate: $P(A \cap B) = P(W(b) > \text{Reflected Value})$
5. **Solve:** Divide the result by the probability of the condition (calculated using Method 1).

**Method 3: Double-Sided Boundary (Absolute Maximum)**
Use this if the question asks for the probability that the _absolute_ value $|W(t)|$ exceeds $y$ (crossing either $y$ or $-y$).
**Steps:**
1. **Use Inclusion-Exclusion:** Recognize that simply adding $P(Max > y)$ and $P(Min < -y)$ double counts paths that cross _both_ boundaries.
2. Apply the Infinite Series Formula: Use the corrected formula derived from repeated reflections: $P(\sup_{0 \le s \le t} |W(s)| > y) = 4 \sum_{j=1}^{\infty} (-1)^{j+1} P(W(t) > (2j-1)y)$
	(Note: For an exam, calculating the first few terms is usually sufficient, or utilizing a provided table of critical values).
### Q19 - Relate a real life case to boundary crossing probabilities
The goal is to map the story to a brownian motion with drift or an infinite horizon problem. 
**Model The Process**
1. Identify the function: Translate the description into a stochastic process $Y(t)$.
2. Identify the event: determine what constitutes 'success' or 'failure'. Example: $P(\inf_{t \ge 0} (Y(t) - \text{Initial Investment}) \le \text{Threshold})$.

**Classify the Problem**
Determine if the problem involves a constant boundary, or a linear boundary, and if the time horizon is finite or infinite. 
- Case A: Constant Boundary with Drift (Infinite horizon)
	- Scenario: a process $X(t)=\mu t+\sigma W(t)$ with drift $\mu<0$ attempting to cross a position level $y$.
	1. Identify drift $\mu$ and variance parameter $\sigma^2$
	2. Ensure $\mu$ opposes the boundary
	3. Apply the exponential formula: $P(\sup_{t \ge 0} X(t) > y) = e^{2\mu y / \sigma^2}$
- Case B: Linear boundary (infinite Horizon)
	- Scenario: A standard brownian motion $W(t)$ attempting to cross a line $y(1+at)$.
	1. Manipulate the inequality from the real-life problem until you isolate $W(t)$ on one side. 
	2. Identify the parameters $y$ (intercept) and $a$ (slope coefficient)
	3. Apply Doob's formula: $P(\sup_{t \ge 0} \frac{W(t)}{1+at} > y) = \exp(-2ay^2)$
- Case C: Finite Horizon
	- If the problem specifies a finite time $T$, you generally cannot use the simple exponential formulas above. You must revert to the **Reflection Principle** (if drift is 0) or transform the process (if drift is non-zero) to look like a standard linear boundary problem if applicable, or use specific finite-time formulas provided in the course (often restricted to Reflection Principle applications for the exam).

**Handle "Sup" vs "Inf"**
- Symmetry Rule: if the question asks about the minimum (inf) dropping below a negative value, use the symmetry of the Brownian motion:
	- $\inf_{t} W(t) \le -y$ is distributionally equivalent to $\sup_{t} W(t) \ge y$ (since $\{-W(t)\}$ is also a Brownian motion).
- Notation: if unsure about using sup or inf, defining the event as "$\exists t^* \ge 0$ such that..." is a safe and precise alternative notation.

### Q20 - Calculate Probabilities related to one or two hitting times
First, map the problem description to mathematical notation.
- **Identify the Process:** Is it a Standard Brownian Motion $W(t)$ (mean 0, variance $t$) or Brownian Motion with Drift $X(t)$?
- **Identify the Boundary:** What is the target value?
    - If the question asks "What is the probability the stock price hits $120?", the boundary is $a = 120 - \text{start price}$.
- **Identify the Horizon:** Is there a time limit $t$ (e.g., "within the first 5 years"), or is it an infinite horizon (e.g., "ever drops below")?.

**Step 2: Scenario A: One Hitting time**
Use this when the question asks for the probability of reaching a **single** barrier $a$ by a specific time $t$.
- **Logic:** The event that the hitting time $T_a$ is less than $t$ ($T_a \le t$) is mathematically equivalent to the event that the maximum value of the process up to time $t$ exceeds $a$ ($\max_{0 \le s \le t} W(s) \ge a$).
- **Method:** Use the **Reflection Principle**, which states that for a standard Brownian Motion, the probability of the maximum exceeding $a$ is twice the probability of the endpoint $W(t)$ exceeding $a$.
1. **Identify parameters:** Determine the boundary level $a$ and time $t$.
2. Apply the Reflection Principle Formula:
   $P(T_a \le t) = 2P(W(t) \ge a)$
   $P(T_a \le t) = 2\left(1 - \Phi\left(\frac{a}{\sqrt{t}}\right)\right)$
    - Where $\Phi$ is the Cumulative Distribution Function (CDF) of the standard normal distribution.
3. **Calculate:** Look up the value of $\frac{a}{\sqrt{t}}$ in a Z-table (standard normal table) to find $\Phi$, subtract from 1, and multiply by 2.

**Step 2: Scenario B: Two Hitting Times**
Use this when the question asks for the probability of hitting a positive level $a$ **before** hitting a negative level $b$.
- **Logic:** This compares two hitting times $T_a$ and $T_b$. It is derived as the limit of the "Gambler's Ruin" problem for a simple random walk as the step size goes to zero.
- **Method:** Use the ratio of the distances to the boundaries.
1. **Identify parameters:**
    - Upper barrier $a > 0$.
    - Lower barrier $b < 0$ (if given as a positive loss $L$, then $b = -L$).
2. Apply the Formula:
   $P(T_a < T_b) = \frac{-b}{a - b} = \frac{|b|}{a + |b|}$
3. **Interpretation:** This gives the probability that the process touches $a$ before it touches $b$.

**Step 2: Scenario C: Infinite Horizon with Drift**
Use this when the question asks if a Brownian Motion **with negative drift** will **ever** exceed a positive level $y$.
- **Logic:** For a process $X(t) = W(t) + \mu t$ where $\mu < 0$ (downward trend), we want to know the probability that it ever goes up to hit $y > 0$. This uses Doob's linear boundary result.
- **Method:** Exponential decay formula.
1. **Identify parameters:** Drift $\mu$ (must be negative), variance parameter $\sigma^2$ (usually 1 for standard derivation), and barrier $y$.
2. Apply the Formula: $P(\sup_{t \ge 0} X(t) > y) = e^{2\mu y / \sigma^2}$    
3. **Result:** This is the probability that the hitting time $T_y$ is finite ($T_y < \infty$).

## Brownian Motion
### Q21 - Prove that one process is BM or BB

#### Method 1: The "Three-Steps Approach" (The Recipe)
This method relies on the fact that a Gaussian process is completely defined by its mean and covariance functions.

**Step 1: Argue that the process is a Gaussian Process**
You must first establish that the process $\{X(t)\}$ in question is Gaussian. You usually do not need to prove this from scratch (using finite-dimensional distributions); instead, you provide an argument based on linear operations.
- **The Argument:** State that the new process is defined as a **linear combination** (or linear transformation) of an existing Gaussian process (like a standard Brownian Motion $W(t)$ or Brownian Bridge $B(t)$) and/or Gaussian random variables (like a standard normal $Z$).
- **Why it works:** Linear operations (differentiation, integration, linear combinations) applied to a Gaussian Process yield another Gaussian Process .
- **Example argument:** "The process $X(t) = B(t) + tZ$ is a linear combination of a Brownian Bridge $B(t)$ (which is Gaussian) and a standard normal variable $Z$. Therefore, $X(t)$ is a Gaussian process" .

**Step 2: Calculate the Mean Function and show it is Zero**
You must calculate $E[X(t)]$ and show that it equals 0 for all $t$.
- **The Calculation:** Use the linearity of expectation. Recall that $E[W(t)] = 0$, $E[B(t)] = 0$, and $E[Z] = 0$ .
- Example: If $X(t) = W(t) - tW(1)$, then: $E[X(t)] = E[W(t)] - tE[W(1)] = 0 - t(0) = 0$

**Step 3: Calculate the Covariance Function**
This is the most calculation-heavy step. You must calculate $Cov(X(s), X(t))$ and show that it matches the known covariance function of the target process.
- **Tip from your slide:** "You know the result of the covariance calculation even without calculation." This means you know what the final answer _must_ be if the proof is to succeed. You can use this to guide your algebra.
- **Target for Brownian Motion (BM):** You must arrive at $\min(s, t)$ (or simply $s$ if you assume $s \le t$) .
- **Target for Brownian Bridge (BB):** You must arrive at $\min(s, t) - st$ (or $s(1-t)$ if you assume $s \le t$) .

**How to perform the Covariance Calculation:**
1. **Assume order:** Start by stating "Assume $s \le t$" to simplify $\min(s,t)$ to just $s$.
2. **Expand:** Write out $Cov(X(s), X(t))$ using the definition of $X(t)$ given in the question.
3. **Bilinearity:** Use the property that covariance is bilinear: $Cov(A+B, C+D) = Cov(A,C) + Cov(A,D) + Cov(B,C) + Cov(B,D)$.
4. **Substitute Known Covariances:**
    - For BM terms: Replace $Cov(W(s), W(t))$ with $\min(s, t)$ (or $s$) .
    - For BB terms: Replace $Cov(B(s), B(t))$ with $\min(s, t) - st$ .
    - For Random Variable $Z$: Recall $Cov(Z, Z) = Var(Z) = 1$ and $Cov(Process, Z) = 0$ if they are independent .
5. **Simplify:** Algebraically reduce the expression until it matches the target covariance.
    
#### Method 2: The Axiomatic Approach (Alternative)
While the Gaussian/Covariance recipe is preferred for transformations, you can theoretically prove a process is a **Brownian Motion** using its defining axioms .
**Steps:**
1. **Start at Zero:** Show $P(X(0) = 0) = 1$ .
2. **Independent and Stationary Increments:** Prove that disjoint intervals have independent changes and that the distribution depends only on the interval length. (Note: This is often difficult to prove for complex transformations and does not apply to Brownian Bridges, which do not have independent increments ).
3. **Normality:** Show that $X(t)$ follows a Normal distribution $N(0, t)$ .

_Note: The course notes explicitly state that the "Gaussian Process" characterization (Method 1) is **equivalent** to the axiomatic definition (Method 2) and is usually the intended method for these exam questions ._
#### Summary of Target Properties to Memorize
To successfully execute the recipe, you must memorize the properties of the process you are trying to prove:

| **Process**         | **Mean Function** | **Covariance Function Cov(X(s),X(t))**       |
| ------------------- | ----------------- | -------------------------------------------- |
| **Brownian Motion** | $0$               | $\min(s, t)$ (or $s$ if $s \le t$)           |
| **Brownian Bridge** | $0$               | $\min(s, t) - st$ (or $s(1-t)$ if $s \le t$) |
### Q22 - Handling a real life process modeled by these processes
#### **Method 1: If the Process is Geometric Brownian Motion (e.g., Stock Prices)**
This process is often used to model asset values or populations that cannot be negative. It is defined as $X(t) = e^{\mu t + \sigma W(t)}$.
- Step 1: Identify the Process
    Recognize that the problem describes a non-Gaussian process involving exponential growth or decay with random fluctuations (e.g., "asset price," "population size").
- Step 2: Transform to Brownian Motion with Drift
    Apply the natural logarithm to both sides of the equation to "linearize" the exponent.
    - $\ln(X(t)) = \mu t + \sigma W(t)$.
    - Recognize that $\sigma^{-1} \ln X(t)$ is a Brownian motion with drift coefficient $\mu/\sigma$.
- **Step 3: Solve using Normal Distribution or Hitting Times**
    - **For Fixed Time Probabilities (e.g., "Value at time $t$ > $x$"):** Use the fact that $\ln(X(t))$ follows a Normal distribution with mean $\mu t$ and variance $\sigma^2 t$. Standardize to $Z \sim N(0,1)$.
    - **For First Passage Times:** If the question asks when the asset hits a specific value, solve for the corresponding value in the log-transformed Brownian Motion with drift.
#### **Method 2: If the Process is an Ornstein-Uhlenbeck Process (e.g., Interest Rates, Velocity)**
This process models mean-reverting behavior (e.g., velocity of a particle, interest rates). It is defined as $X(t) = e^{-\alpha t/2}W(e^{\alpha t})$4.
- Step 1: Identify the Process
    Look for keywords like "stationary Gaussian process," "mean reverting," or "velocity."
- Step 2: Utilize Gaussian Properties
    Instead of transforming back to raw Brownian motion for every calculation, use the established Gaussian properties of the OU process:
    - **Mean:** $E[X(t)] = 0$.
    - **Covariance:** Use the specific covariance formula $Cov(X(t_1), X(t_2)) = \exp\{-\alpha|t_1 - t_2|/2\}$.
- Step 3: Solve via Multivariate Normal Distribution
    Because it is a Gaussian process, any joint distribution of points $(X(t_1), \dots, X(t_n))$ is Multivariate Normal. You can solve probabilities by defining the mean vector and covariance matrix using the formulas from Step.
    
#### **Method 3: If the Process is Brownian Motion with Drift (e.g., Cash Flow, Project Value)**
This is often used for "cash position" or cumulative values over time. It is defined as $X(t) = W(t) + \mu t$.

**Way A: Solving for Infinite Horizon (Doob's Result)**
Use this if the question asks if the process ever crosses a boundary (infinite time).
- Step 1: Define the Event
    Formulate the probability as $P(\sup_{t \ge 0} X(t) > y)$ or similar.
- Step 2: Transform to Linear Boundary
    Rewrite the event to isolate the standard Brownian Motion $W(t)$.
    - Example: $W(t) + \mu t > y \iff W(t) > y - \mu t \iff W(t) > y(1 - \frac{\mu}{y}t)$.
- Step 3: Apply Doob's Formula
    Use the known result for linear boundary crossing:
    - $P(\sup_{t \ge 0} \frac{W(t)}{1+at} > y) = \exp(-2ay^2)$.
    - Substitute your specific values for $a$ and $y$ to get the final probability (e.g., $\exp(2\mu y)$).

**Way B: Solving for Finite Horizon (Reflection Principle)**
Use this if the question asks about crossing a boundary within a fixed time $b$.
- Step 1: Define the Event
    Formulate the probability, usually conditional, such as $P(W(b) < y \mid \sup_{0 \le t \le b} W(t) \ge y + h)$.
- Step 2: Apply the Reflection Principle
    Replace the supremum condition (path-dependent) with a simpler endpoint condition using the symmetry of Brownian motion.
    - Identity: $P(\sup_{0 \le t \le b} W(t) \ge a) = 2P(W(b) \ge a)$.
- Step 3: Solve using Standard Normal CDF
    Convert the resulting expression into terms of $\Phi(\cdot)$, the cumulative distribution function of the standard normal distribution.

# Summary
## Foundations of Probability & Expectation Domain
![[10_Concepts/Random Variables#Random Variables]]

![[10_Concepts/Expected Value#Expected Value]]

![[10_Concepts/Variance#Variance]]

![[Probability Density Function#Probability Density Function]]

![[10_Concepts/Cumulative Distribution Function#Cumulative Distribution Function]]

![[10_Concepts/Conditional Distribution#Conditional Distribution]]

![[10_Concepts/Law of Total Expectation#Law of Total Expectation]]

![[10_Concepts/Law of Total Probability#Law of Total Probability]]

![[10_Concepts/Memoryless Property#Memoryless Property]]

![[10_Concepts/Exponential Distribution#Exponential Distribution]]

![[10_Concepts/Poisson Distribution#Poisson Distribution]]
## Stochastic Processes: Definitions and Types
![[10_Concepts/Stochastic Process#Stochastic Process]]

![[10_Concepts/Markov Property#Markov Property]]

![[Discrete Time Process#Discrete Time Process]]

![[10_Concepts/Continuous Time Process#Continuous Time Process]]


![[10_Concepts/Counting Process#Counting Process]]

![[Independent Increments#Independent Increments]]

![[10_Concepts/Stationary Increments#Stationary Increments]]


![[10_Concepts/Markovian State Construction#Markovian State Construction]]

## Discrete-Time Markov Chains (DMTC)
![[10_Concepts/Discrete Time Markov Chain#Discrete Time Markov Chain]]

![[10_Concepts/Random Walk#Random Walk]]

![[10_Concepts/Transition Probability#Transition Probability]]

![[10_Concepts/Transition Matrix#Transition Matrix]]
![[10_Concepts/Chapman-Kolmogorov Equations#Chapman-Kolmogorov Equations]]

### Transient Analysis
![[10_Concepts/Unconditional Distribution at Time n#Unconditional Distribution at Time n]]

![[10_Concepts/Absorbing States#Absorbing States]]
### State Classification
![[10_Concepts/Communication of States#Communication of States]]

![[10_Concepts/Communication Class of States#Communication Class of States]]

![[10_Concepts/Irreducible Markov Chain#Irreducible Markov Chain]]

![[10_Concepts/Recurrent and Transient States#Recurrent and Transient States]]

![[10_Concepts/Positive and Null Recurrent States#Positive and Null Recurrent States]]

![[10_Concepts/Period of a State and Ergodicity#Period of a State and Ergodicity]]

![[10_Concepts/Limiting Distribution#Limiting Distribution (DTMC)]]

![[10_Concepts/Stationary Distribution#Stationary Distribution]]


![[10_Concepts/Fundamental Matrix (Markov Chains)#Fundamental Matrix (Markov Chains)]]

![[10_Concepts/Mean Time to Absorption#Mean Time to Absorption]]

![[10_Concepts/Absorption Probability#Absorption Probability]]

## Poisson Processes

![[10_Concepts/Homogeneous Poisson Process#Homogeneous Poisson Process]]
![[10_Concepts/Interarrival Time#Interarrival Time]]
![[10_Concepts/Arrival Time#Arrival Time]]
![[10_Concepts/Conditional Arrival Distribution#Conditional Arrival Distribution]]

![[10_Concepts/Superposition of Poisson Processes#Superposition of Poisson Processes]]
![[10_Concepts/Thinning of Poisson Process#Thinning of Poisson Process]]

![[10_Concepts/Non-homogeneous Poisson Process#Non-homogeneous Poisson Process]]

## Continuous-Time Markov Chains (CTMC)
![[10_Concepts/Continuous-Time Markov Chain#Continuous-Time Markov Chain]]
![[10_Concepts/Sojourn Time#Sojourn Time]]

![[10_Concepts/Embedded Discrete Markov Chain#Embedded Discrete Markov Chain]]
![[10_Concepts/Q-Matrix#Q-Matrix]]

![[Limiting Distribution#Limiting Distribution (CTMC)]]

![[10_Concepts/Global Balance Equations#Global Balance Equations]]

### Birth-and-Death Processes (BDP)
![[10_Concepts/Birth and Death Process#Birth and Death Process]]

### Queueing Theory
![[10_Concepts/Kendall's Notation#Kendall's Notation]]
![[10_Concepts/M-M-1 Queue Definition#M/M/1 Queue Definition]]

![[10_Concepts/Queueing Performance Metrics#Average Number of Clients ($L$)]]

![[10_Concepts/Queueing Performance Metrics#Average Sojourn Time ($W$)]]

![[10_Concepts/Queueing Performance Metrics#Overall Arrival Rate ($ lambda$)]]

![[10_Concepts/Queueing Performance Metrics#Long-Run Proportion of Clients ($a_n$ / $d_n$)]]

![[10_Concepts/Little's Law#Little's Law]]

![[10_Concepts/PASTA Principle#PASTA Principle]]

![[10_Concepts/M-M-k-k Queue#M/M/k/k Queue (Erlang Loss System)]]

![[Cut Equations#Cut Equations]]


## Brownian Motion

![[10_Concepts/Random Walk Construction of Brownian Motion#Random Walk Construction of Brownian Motion]]

![[10_Concepts/Brownian Motion#Brownian Motion]]
![[10_Concepts/Brownian Motion#Brownian Motion Starting Condition and Marginals]]
![[Brownian Motion#Brownian Motion Increments]]
![[10_Concepts/Brownian Motion#Brownian Motion Characterization (Three Properties)]]
![[10_Concepts/Brownian Motion#Brownian Motion Alternative Characterization]]

![[10_Concepts/Brownian Motion with Drift#Brownian Motion with Drift]]
![[10_Concepts/Brownian Motion With Drift#Hitting Times and Boundary Crossing]]
## Gaussian Processes
![[10_Concepts/Gaussian process#Gaussian Process]]

![[10_Concepts/Ornstein-Uhlenbeck Process#Ornstein-Uhlenbeck process]]

## Brownian Bridge
![[10_Concepts/Reflection Principle#Reflection Principle]]

![[10_Concepts/Hitting Time (Brownian Motion)#Hitting Time (Brownian Motion)]]

![[10_Concepts/Boundary Crossing Probabilities#Boundary Crossing Probabilities]]

![[10_Concepts/Empirical Distribution Function#Empirical Distribution Function]]
![[10_Concepts/Empirical Process#Empirical Process]]
![[10_Concepts/Brownian Bridge#Brownian Bridge]]

![[10_Concepts/Kolmogorov-Smirnov Test#Kolmogorov-Smirnov Test]]

