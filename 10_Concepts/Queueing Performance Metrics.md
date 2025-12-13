---
tags:
  - probability-theory/stochastic-processes
  - queueing-theory
aliases:
  - Mean Number in System
  - Expected System Size
  - Mean Time in System
  - Average Waiting Time
  - Overall Arrival Rate
  - Input Rate
status: good_enough
created: 2025-12-13 10:22
---
### Average Number of Clients ($L$)

_The time-averaged number of customers present in a queueing system, including those in service and those waiting in the queue._

Mathematically, if $X(t)$ denotes the number of customers in the system at time $t$, $L$ is defined as the long-run time average:
$$L = \lim_{t \to \infty} \frac{1}{t} \int_0^t X(s) \, ds $$
_Where:_
- $X(s)$: The random variable representing the number of customers in the system at time $s$.
- $t$: The time horizon over which the average is calculated.

Alternatively, in terms of the steady-state probabilities $P_n$ (the long-run proportion of time the system contains exactly $n$ customers):
$$L = \sum_{n=0}^\infty n P_n $$
_Where:_
- $P_n$: The limiting probability that there are exactly $n$ customers in the system.
- $n$: The specific number of customers.

#### Properties & Intuition
- **Relationship to Residence Time (Little's Law):** $L$ is intrinsically linked to the average time a customer spends in the system ($W$) and the arrival rate ($\lambda_a$) via the equation $L = \lambda_a W$1. This relationship holds regardless of the arrival process, service distribution, or number of servers, provided the system is stable.
- **Cost Interpretation:** If one imagines a cost rule where each customer pays $1 per unit of time while in the system, the average rate at which the system earns money is $L$.
- **Decomposition:** The metric $L$ can be decomposed into the average number of customers waiting in the queue ($L_Q$) and the average number of customers currently being served ($L_S$): $L = L_Q + L_S$.

### Average Sojourn Time ($W$)
_The average total duration a customer spends within a queueing system, comprising both the time spent waiting in the queue and the time spent receiving service._

It is formally defined as the limit of the average of the sojourn times of the first $n$ customers:
$$W = \lim_{n \to \infty} \frac{1}{n} \sum_{i=1}^n W_i $$
_Where:_
- $W_i$: The total time the $i$-th customer spends in the system.
- $n$: The number of customers observed.

Using the cost identity approach (where each customer pays $1 per unit time in the system), $W$ represents the average amount an entering customer pays.
#### Properties & Intuition
- **Components:** $W$ is the sum of the average time spent in the queue ($W_Q$) and the average service time ($E[S]$): $W = W_Q + E[S]$.
- **Little's Law:** $W$ connects to the system size $L$ and effective arrival rate $\lambda_a$ via $W = L / \lambda_a$.
- **Intuition:** It represents the typical "delay" or "latency" experienced by a user from entry to exit. Minimizing $W$ is often a primary objective in system optimization (e.g., assigning servers to minimize waiting).

### Overall Arrival Rate ($\lambda$)
_The long-run average rate at which customers or units arrive at the entrance of a queueing system._

It is defined as the limit of the number of arrivals $N(t)$ divided by time $t$ as $t$ approaches infinity:
$$\lambda_a = \lim_{t \to \infty} \frac{N(t)}{t} $$
_Where:_
- $N(t)$: The cumulative number of arrivals by time $t$.
- $\lambda_a$: The average arrival rate of _entering_ customers.

#### Properties & Intuition
- **Entering vs. Potential Rate:** A critical distinction exists between the rate of potential arrivals (often denoted $\lambda$) and the rate of customers who actually enter the system ($\lambda_a$).
    - In infinite capacity systems, $\lambda_a = \lambda$.
    - In finite capacity systems (capacity $N$), customers arriving when the system is full are lost. Here, $\lambda_a = \lambda(1 - P_N)$, where $P_N$ is the probability the system is full.
- **Role in Little's Law:** This is the scaling factor in Little's Law ($L = \lambda_a W$). The equation only holds if $\lambda_a$ represents the rate of items _actually entering_ and contributing to $L$ and $W$.
- **Interarrival Relation:** If interarrival times are independent and identically distributed (IID) with mean $E[T]$, then $\lambda = 1/E[T]$.

### Long-Run Proportion of Clients ($a_n$ / $d_n$)
_The limiting probabilities describing the state of the system from the perspective of arrivals, departures, or an outside observer._

Three distinct probability distributions are defined:
1. $P_n$ (Time Average): The long-run proportion of time the system contains exactly $n$ customers.
$$P_n = \lim_{t \to \infty} P\{X(t) = n\}$$
2. $a_n$ (Arrival Average): The long-run proportion of customers who find $n$ customers in the system upon arrival.
$$a_n = \frac{\text{Rate at which arrivals find } n}{\text{Overall arrival rate}}$$
3. $d_n$ (Departure Average): The long-run proportion of customers leaving $n$ customers behind when they depart.
$$d_n = \frac{\text{Rate at which departures leave } n}{\text{Overall departure rate}}$$

#### Properties & Intuition
- **Equality of $a_n$ and $d_n$:** In any system where customers arrive and depart one at a time, the rate at which the system moves from $n$ to $n+1$ (arrivals seeing $n$) must equal the rate it moves from $n+1$ to $n$ (departures leaving $n$). Therefore, $a_n = d_n$.
- **PASTA Principle:** **P**oisson **A**rrivals **S**ee **T**ime **A**verages. If the arrival process is Poisson, then arriving customers see the system in its steady state. Therefore, $a_n = P_n$.
    - _Intuition:_ Poisson arrivals occur purely randomly; knowing an arrival occurred at time $t$ provides no information about the system's history that would bias the state probabilities away from the time average.
- **Bias in Non-Poisson Systems:** If interarrival times are regular (e.g., deterministic), arrivals may consistently see specific states (e.g., an empty system), making $a_n \neq P_n$.


---

# Related
```dataviewjs
await dv.view("99_System/Scripts/tag_tables", dv.current());
```

### Direct Links to this document
```dataview
TABLE file.folder AS "Context"
FROM [[#]]
WHERE file.folder != "10_Concepts"
SORT file.folder ASC
```

