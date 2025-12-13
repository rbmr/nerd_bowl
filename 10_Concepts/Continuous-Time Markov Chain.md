---
tags:
  - probability-theory/stochastic-processes
aliases:
  - CTMC
  - Continuous-Parameter Markov Chain
status: good_enough
created: 2025-12-12 23:05
---
### Continuous-Time Markov Chain
A **Continuous-Time Markov Chain (CTMC)** is a stochastic process $\{X(t), t \ge 0\}$ taking values in a discrete state space $S$ (nonnegative integers), characterized by the Markovian property: given the present state, the future is independent of the past. Unlike discrete-time chains, state transitions can occur at any continuous time instant $t$.

The process is a CTMC if for all $s, t \ge 0$ and states $i, j, x(u)$:
$$P(X(t+s) = j \mid X(s) = i, X(u) = x(u), 0 \le u < s) = P(X(t+s) = j \mid X(s) = i)$$
_Where:_
- $X(t)$: The random variable representing the state of the system at time $t$.
- $s$: The current time point (the "present").
- $t$: The time elapsed into the future.
- $x(u)$: The history of the process up to time $s$.

#### Properties & Intuition
- **Stationarity (Time-Homogeneity):** A CTMC is stationary if the transition probabilities depend only on the time interval length, not the absolute time. Specifically, $P(X(t+s)=j \mid X(s)=i) = P_{ij}(t)$ independent of $s$.
- **Memorylessness:** The system retains no memory of how long it has been in the current state; the probability of future transitions depends solely on the current state $i$.
- **Instantaneous Description:** The process is fully defined by its **Instantaneous Transition Rates** $q_{ij}$, where $q_{ij}$ is the rate of transition from $i$ to $j$, and $v_i = \sum_{j \neq i} q_{ij}$ is the total rate of leaving state $i$.
#### Transition Probability Function (CTMC)
For a continuous-time Markov chain $\{X(t), t \ge 0\}$ with state space $S$, the transition probability function $P_{ij}(t)$ is defined as the conditional probability that the process will be in state $j$ at time $t+s$, given that it was in state $i$ at time $s$. Assuming stationary (time-homogeneous) transition probabilities, this is defined as:
$$P_{ij}(t) = P\{X(t+s) = j \mid X(s) = i\}$$
_Where:_
- $t$: The elapsed time interval ($t \ge 0$).
- $s$: The initial observation time ($s \ge 0$).
- $i, j$: States in the state space (e.g., non-negative integers).

This definition implies the **Markovian property**: the conditional distribution of the future $X(t+s)$ depends only on the present state $X(s)$ and is independent of the past.

#### Instantaneous Transition Rates
The behavior of $P_{ij}(t)$ for small time intervals $h$ defines the fundamental rates of the process:
1. Rate of leaving state $i$ ($v_i$):
$$\lim_{h \to 0} \frac{1 - P_{ii}(h)}{h} = v_i$$
2. Rate of going from $i$ to $j$ ($q_{ij}$):
$$\lim_{h \to 0} \frac{P_{ij}(h)}{h} = q_{ij} \quad (i \neq j)$$
    _Relationship:_ $q_{ij} = v_i P_{ij}^*$, where $P_{ij}^*$ is the probability of jumping to $j$ given a transition occurs out of $i$3. Note that $v_i = \sum_{j \neq i} q_{ij}$.

#### Stationary Continuous-Time Markov Chain
This is a sub-part referring specifically to a CTMC where the conditional transition probabilities are invariant under time shifts.
$$P(X(t+s)=j \mid X(s)=i) = P(X(t)=j \mid X(0)=i)$$
Most standard academic analyses assume stationarity unless specified otherwise.


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

