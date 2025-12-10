## Markov Decision Process
A Markov Decision Process (MDP) is a mathematical framework used to model sequential decision-making in an environment where outcomes are partly random and partly under the control of an agent.

It is formally defined as a 5-tuple $(S, A, P, R, \gamma)$ where:
- $S$ is the state space. The set of all possible states $s \in S$ the agent can be in.
- $A(s)$ is the action space. The set of all possible actions the agent can take in state $s$.
- $P(s' | s,a)$ is the transition probability function. It describes the probability of transitioning to a new state $s'$  after the agent takes action $a$ in state $s$.
- $R(s, a, s')$ is the reward function. It describes the immediate reward the agent receives after taking action $a$ in state $s$ and landing in state $s'$.
- $\gamma \in [0,1]$ is the discount factor. This determines the value of future rewards.

For the model to be accurate, we rely on one critical constraint: 

> The Markov Property: The future is independent of the past, given the present.

This means the probability of the next state $s'$ and rewards $r$ depend only on the current state $s$ and the chosen action $a$.
### Horizon and Return
The goal for any agent is to maximize the return. The return $G_t$ is defined as the (discounted $\gamma \in [0,1]$) sum of rewards $r$, starting from timestep $t$. We distinguish between two cases:

- Episodic (Finite-Horizon) MDPs are guaranteed to end after a fixed, known, and finite number of timesteps $T$. $$G_t = \sum^{T-t}_{k=0} \gamma^k r_{t+k}$$
- Continuing (Infinite-Horizon) MDPs do not have a fixed, predetermined number of time steps. To keep the return finite, a discount factor $\gamma \in [0,1)$ is generally used. $$G_t = \sum^{\infty}_{k=0} \gamma^k r_{t+k}$$
### The Policy
In order to maximize the return, the agent must develop a plan.
- Open-loop plan: The plan is just a sequence of actions, starting from the current state. Generally used when state transitions are deterministic.
- Closed-loop plan: The plan is dependent on the current state at every step. Generally used when state transitions are stochastic, or unknown. 
The mapping of states to actions is called the policy $\pi(a|s)$, this mapping may itself be probabilistic or deterministic.

### Bellman Equations

The Bellman equations are the foundational equations for Markov Decision Processes. They recursively define the expected return (also called the "value") of a state (or state-action pair). 

**Bellman Expectation Equations** define the value of some policy $\pi$. 
- State-Value Function: Describes the expected return following policy $\pi$ stating from state $s$. $$V^\pi(s) = \sum_{a\in A(s)}\pi(a|s)Q^\pi(s,a)$$
- Action-Value function: Describes the expected return following policy $\pi$ after taking action $a$ in state $s$. $$Q^\pi(s,a) = \sum_{s' \in S} P(s' | s,a) [R(s'|s,a) + \gamma V^\pi(s') ]$$

**Bellman Optimality Equations** define the value of the optimal policy $\pi^*$. Note these look almost identical to the bellman expectation equations. The only real difference being that we pick the optimal action $\max_{a \in A(s)}$ in each state, instead of taking actions determined by some policy.
- Optimal State-Value function: Describes the maximal return starting from state $s$. $$V^*(s) = \max_{a \in A(s)}Q^*(s,a)$$
- Optimal Action-Value function: Describes the maximal return after taking action $a$ in state $s$. $$Q^*(s,a) = \sum_{s' \in S} P(s' | s,a) [R(s'|s,a) + \gamma V^*(s')]$$
- The Optimal Policy $\pi^*$ is the policy that maximizes the expected return from all states. This is simply the policy $\pi$ whose state-value function $V^\pi(s)$ is equal to the optimal state-value function $V^*(s)$ for all states $s$.

## Planning
Planning is about finding the optimal policy when all components of the MDP are known. This 

- Online vs Offline planning:
	- Offline planning involves computing the optimal policy $\pi^*$ for the entire state space. 
	- Online planning (or lookahead planning) is used to find the single best action for the current state only.
- Generalized Policy Iteration (GPI) is a form of offline planning that finds the optimal policy by repeatedly alternating between policy evaluation and policy improvement. Examples:
	- Policy iteration (PI): We iterate between evaluating a policy and improving it.
	    - Policy evaluation: Given a policy $\pi$, calculate its value function $V_\pi$. One can solve for  $V_\pi$ directly, or more commonly use Iterative Policy Evaluation (IPE). IPE repeatedly goes through all states and applies the bellman expectation equation as an update rule until the values converge: $$v_{k+1}(s) \leftarrow \sum_{a\in A(s)}\pi(a|s)\sum_{s'} P(s'|s,a)[R(s,a,s') + \gamma v_k(s')]$$
		- Policy Improvement: Once $V_\pi$ has converged we can improve the policy, we calculate the action-value function $q_\pi(s,a)$, which is the value of taking action $a$ once and following $\pi$ thereafter. $$q_{\pi}(s,a) = \sum_{s'} P(s'|s,a) [R(s,a,s') + \gamma v_{\pi}(s')]$$
		- Finally we create a greedy policy $\pi'$ that picks the action that maximizes the Q-value in every state. $\pi'(s) \gets \arg\max_a q_\pi(s,a)$
		- We repeat Policy Evaluation and Policy Improvement until the updated policy $\pi'$ is the same as the previous policy $\pi$ in which case the optimal policy $\pi^*$ has been found.
	- Value Iteration (VI): Shortens the policy evaluation to a single iteration, creating a single update rule. Generally more efficient than PI due to the fact that full policy evaluation can be slow. $$v_{k+1}(s) \leftarrow \max_a \left\{ \sum_{s'} P(s'|s,a) [R(s,a,s') + \gamma v_k(s')] \right\}$$
- Dynamic Programming on (Lookahead) Trees is a form of online planning, used to find the best action for the current state by looking ahead for a fixed finite number of steps. Process:
	- Build the Tree: The algorithm starts at the current state and expands a tree of possible action-outcome sequences.
	- Assign terminals: At the leaves of the tree states are assigned their terminal reward value.
	- Propagate backward: The algorithm moves up the tree, calculating the value of each node:
	    - At a state node: The value $V(s)$ is the value of the best action that can be taken from it. $V(s) = \max_a Q(s,a)$
	    - At an action node: The value $Q(s,a)$ is the expected value from all possible outcomes. It’s the intermediate reward plus the discounted expected value of the next states. $Q(s,a) = \Sigma_{s'}P(s'|s,a)[R(s,a,s') + \gamma V(s')]$
	- Select action: Once the values are backed up to the root, the agent simply picks the action $a$ with the highest Q-value.
	- The main limitation is that the tree grows exponentially with the horizon, making it computationally impractical for deep searches.
## Reinforcement Learning

Reinforcement Learning (RL) is a machine learning paradigm where an agent learns to make sequential decisions by interacting with an environment (as formally described by the MDP).

- Model-based vs Model-free RL:
	- Model-based RL: The agent first attempts to learn the environment model from experience. And then uses planning on this learned model.
	- Model-free RL: The agent learns a value function or policy directly from experience without ever estimating the model.
- Passive vs Active Learning:
	- Passive Learning (Policy Evaluation): The agent’s policy $\pi$ is fixed. The goal is just to learn its value function $V^\pi(s)$ from the experience it generates.
	- Active Learning: The goal is find the optimal policy $\pi^*$ by actively updating its actions based on what it has learned.
- Example Passive Learning (Model-Free) Methods
	- Monte Carlo (MC) Prediction: After an episode ends, we calculate the observed return $G_t$ for every state $s_t$ visited. We then average the returns for each state over many episodes to estimate $V^\pi(s)$. MC Predictions are unbiased but have high variance.
	- Temporal-Difference (TD) Learning: Uses bootstrapping. Instead of waiting for the full return, the agent updates its value estimate after a single step $(s, a, r, s')$. It then uses its current estimate of the next state’s value $V(s')$ as a target. The update rule is: $$V(s) \gets v(s) + \alpha[(r + \gamma V(s')) - V(s)]$$The term $\delta = (r + \gamma V(s')) - V(s)$ is called the TD Error.  TD has lower variance than MC but is biased.
- On-policy vs off-policy:
	- We distinguish between two policies:
	    - The behaviour policy: the policy used to determine the actions taken.
	    - The target policy: the policy the agent is trying to learn (the value of), with the goal of it becoming the optimal policy.
	- On-policy Learning: The behaviour policy is the target policy.
	- Off-policy Learning: The behaviour policy is different from the target policy. This allows agents to behave exploratorily while simultaneously learning the value of the optimal, greedy policy that doesn’t explore at all.
- Example Active Learning (Model-free) Methods
	- Q-learning (off-policy): A TD-based method that directly learns the optimal action-value function $Q^*$. After a transition $(s, a, r, s')$ the update is:$$Q(s,a) \leftarrow Q(s,a) + \alpha [ (r + \gamma \max_{a'} Q(s', a')) - Q(s,a)]$$
	- SARSA (on-policy): A TD-based method that waits to see what action $a'$ the agent actually takes in state $s'$ according to its current policy. It learns the action-value function of the policy that its currently following $Q_\pi$. The update using the full transition $(s, a, r, s', a')$ is:$$Q(s,a) \leftarrow Q(s,a) + \alpha [ (r + \gamma Q(s', a')) - Q(s,a)]$$
- Function approximation: Each of the policy, reward, and value functions may be represented using a table in simple cases, but this becomes impossible for large problems. Instead of a table, we may use a parameterized function to estimate their respective values given some feature vector $X(s)$. The learning algorithm then updates the weights $w$ instead of the table to learn the respective functions.
- Policy Search: Instead of learning a value function, we directly parameterize the policy $\pi(a|s;w)$ and update the policy weights $w$ to maximize the expected return.
- Actor-Critic methods are RL methods that use a critic (a learned value function) to provide low-variance feedback to the actor (the learned policy).

## Partially Observable Markov Decision Process (POMDP)

A Partially Observable Markov Decision Process (POMDP) is used when the state of a MDP is not fully observable. It has two additional components $O$ and $P_O$ where:

- $O$ is the observation space. The set of all possible observations $o \in O$.
- $P_O(o|a, s')$ is the observation function. It describes the probability of seeing observation $o$ after taking action $a$ and landing in state $s'$.

### Histories and Beliefs

Since an agent doesn’t know the state, it must act on a history $h$ of past actions and observations $\pi(a|h)$. Suppose you have $|O|$  possible observations, the number of possible observation histories is $|O|^T$, which is exponential in the time horizon $T$. The policy has to choose one action $|A|$ for each of the possible histories. The total number of deterministic policies then becomes $|A|^{|O|^T}$which is doubly exponential. Therefore using raw histories as the state for the policy $\pi(a|h)$ is intractable.

Instead we use a belief state $b(s)$ which compresses the history in a single fixed-size probability distribution:

- The belief is a probability distribution over the hidden states, $b(s) = P(s | h_t)$.
- The belief is a sufficient statistic for the history; all the necessary information from the past is captured in this distribution.
- After each step $(a, o)$, the agent computes a new belief $b'$ from its previous belief $b$, after taking action $a$ and seeing observation $o$. This is derived using Bayes’ rule.
    - $b'(s') =P(s' | o, a, b)= \frac{P(o | s', a, b) \times P(s' | a, b)}{P(o | a, b)}$, which after simplification becomes:
    - $b'(s') \propto P(o | a, s') \sum_{s \in S} P(s' | s, a) b(s)$

Some Resources:

- https://www.youtube.com/watch?v=KZeIEiBrT_w
- https://en.wikipedia.org/wiki/Markov_decision_process
- https://www.geeksforgeeks.org/machine-learning/bellman-equation/