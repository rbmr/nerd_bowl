Multi-Armed Bandit (MAB) problem: An agent is faced with $n$ actions (slot machines), each action $a$ provides a reward drawn from a probability distribution with unknown mean $\mu_a$. The agents goal is to maximize its total reward after some $T$ actions.

The key trade off lies between:
- Exploitation: Taking the action that has the current highest mean reward reward $Q(a)$.
- Exploration: Taking a different action, to improve the estimate of its mean reward.
The bandit problem is formally equivalent to a one-state [[Markov Decision Processes]]

Example solutions:
- UCB1 repeatedly picks the action that has the highest *optimistic* estimate of its value $U(a)$.
    - $U(a) = Q(a) + c \sqrt{\frac{\log(N)}{N_a}}$
    - Where:
        - **$Q(a)$** is the current average reward the agent has received from action $a$ so far. This is the agent's best estimate of the actions true value. This is the exploitation part.
        - **$N$** is the total number of actions taken.
        - **$N_a$** is the number of times action *$a$* has been taken.
        - **$c$** is a constant that controls the level of exploration, higher means more exploration.
- $\epsilon$-greedy strategy: selects the best known action (exploits) with probability $1 - \epsilon$, and a random action (explores) with probability $\epsilon$.

Resource:
- [https://en.wikipedia.org/wiki/Multi-armed_bandit](https://en.wikipedia.org/wiki/Multi-armed_bandit)