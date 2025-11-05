# What is AI?

- Turing's Imitation Game (Turing Test) is a proposal to determine if a machine can exhibit intelligent behavior indistinguishable from that of a human through text-based conversation.
- The four types of AI systems are:
    - Systems that THINK RATIONALLY (laws of thought)
    - Systems that THINK like HUMANS (cognitive modelling)
    - Systems that ACT RATIONALLY (rational agent, **our focus**)
    - Systems that ACT like HUMANS (turing test)
- An agent is anything that perceives and acts upon its environment.
- A rational agent is an agent that acts in order to achieve the optimal expected outcome given some set of predefined goals.

### Search Problems

- Search problem is a mathematical expression of an environment. It allows a rational agent to find a sequence of actions (a path) to move from an initial state state to a goal state, optionally minimizing a path cost. Formally defined by 5 components:
    - Initial State : The state where the agent begins
    - Actions (s) : set of actions that can be executed in state s
    - Result (s, a) : transition model, or successor function. Returns state resulting from taking action a in state s.
    - Goal test : way to determine whether a given state is the goal state
    - Path cost : numerical cost associated with a given path (sequence of actions)
- State space: set of all states reachable from the initial state through any sequence of actions. In a state space graph each state is represented only once, and connected according to the successor function.
- World States contains all information about the environment. Search States only contain information relevant to the search problem.
- Search tree: structure used to explore paths through the states space. The root is the initial state, and any node represents a complete path from the initial state to a specific state. Since each node represents a path, a single state can appear multiple times if there are different paths to reach it.
- Tree Search Algorithms: procedures that attempt to solve a search problem by exploring a search tree. The process involves repeatedly expanding some node from a search frontier using some predefined strategy until a goal state is found.
- The search frontier is the set of nodes that are candidates for expansion.
- Informed Search algorithms make use of a heuristic function $h(n)$ to determine which nodes to expand. This heuristic function is the estimated forward cost (to the goal) from some node $n$.
- The backward cost $g(n)$ is the cost of the path from the start state to to some node $n$.
- Tree Search Algorithms
    - Depth-First Search (DFS) : Expands the deepest node.
    - Breadth-First Search (BFS) : Expands the shallowest node.
    - Iterative Deepening DFS (IDDFS) : Repeatedly runs DFS with an increasing depth limit.
    - Uniform Cost Search (UCS, Dijkstra’s) : Expands the node with the lowest backward cost.
    - Best-First Search (BestFS) : Expands the node with the lowest estimated forward cost.
    - A* Search : Combines backward cost $g(n)$ and estimated forward cost $h(n)$.
        - Big downside: it keeps the entire explored region in memory.
    - Iterative Deepening A* (IDA*) : Repeatedly runs A* with an increasing cost limit $U$.
        
        ![image.png](image%2010.png)
        
- Heuristic Properties:
    - Admissible: never over-estimating true cost
        - $0 ≤ h(n) ≤ h^*(n)$ where $h^*(n)$ is the true cost to the goal
        - Heuristics are usually solutions to relaxed problems, where constraints from the original problem have been removed to ensure they estimate a lower bound.
    - Consistent (or monotonic): never over-estimating the growth of the path cost
        - $h(n) ≤ h(n’) + c(n, n’)$ where $c(n, n’)$ is the actual cost to get from $n$ to $n’$
    - Consistent (sufficient) → Admissible (necessary)
    - A* finds the optimal solution ↔ heuristic is admissible
    - $h_1 ≥ h_2$ ($h_1$ dominates $h_2$) if $\forall n : h_1(n) ≥ h_2(n)$
        - Larger is better, as long as both are admissible.
    - You can combine heuristics with max, to get one that dominates both.
        - $h(n) =$ max$(h_1(n), h_2(n))$ , then $h(n) ≥ h_1(n)$ and $h(n) ≥ h_2(n)$

### Game Theory Categories

- **Zero-Sum:** One player's gain is exactly equal to another player's loss. **General-Sum:** Total payoffs can change.
- **Simultaneous:** Players make moves at the same time, without knowing the others' current choice. **Sequential:** Players take turns, and later players know the moves that came before.
- **Perfect Information:** All players know all previous actions and events. **Imperfect Information:** At least one player is uncertain about one or more previous actions.
- **Complete Information:** All players know the rules, payoffs, and strategies for all players. **Incomplete Information:** At least one player is uncertain about the payoffs or strategies of other players.
- **Deterministic:** The outcome is fully determined by the players' actions, with no element of chance. **Stochastic:** The outcome is partially determined by random events (e.g., dice rolls, card shuffles).
- **Symmetric:** All players have the same set of strategies and the same payoff functions. **Asymmetric:** Players have different roles, strategies, or payoff functions.
- Single player, Two-Player, Multiplayer.

### Adversarial Search

- Adversarial search: category of search problems for two-player, sequential, deterministic, perfect information, discrete, zero-sum games. Formally:
    - $s \in S$ : denotes game states
    - $a \in A(s)$ : are all actions that can be played in s
    - $P(s, a) = s'$ determines next state s’
    - $T(s) \in \{\top, \bot\}$ determines whether state $s$ is terminal
    - $R(s) \in \R$ determines reward for terminal state s
- Minimax: recursive approach to computing the optimal value function, aiming to maximize the agent's expected outcome while assuming the adversary will play moves that minimize this outcome.
    - $p(s) \in \{1, -1\}$ determines player in state $s$
    - $V(s) = R(s) \ \text{if} \ T(s) \ \text{otherwise} \ p(s) \cdot \text{max}_{a \in A(s)} \ p(s) \cdot V(P(s, a))$
- Improving minimax: $V(s)$  is impossible to compute for large search spaces.
    - Depth-limited minimax : use a position evaluation function (heuristic) when a maximum depth is reached.
    - Alpha-beta pruning : prune useless subtrees
        - $\alpha$  (max value maximizing player could have picked) (lower bound)
        - $\beta$ (min value minimizing player couldve picked) (upper bound)
        - if $\alpha ≥ \beta$ we stop searching a branch → they or we have a better option.
        - More pruning if $\alpha$ is high, and $\beta$ is low.
- Monte Carlo Tree Search (MCTS)
    - Selection : Start at the root node $s_0$. Traverse the tree by choosing an action $a_t$ at state $s_t$ that maximizes a search control strategy $V_s(s_t,a)$. Continue until a node $s_L$ is reached that is not fully expanded, or terminal.
    - Expand : If $s_L$ is terminal, rollout from $s_L$. Otherwise, choose an unvisited action $a_\text{new} \in A(s_L)$, and add the resulting successor state $s_\text{new} = \mathcal{P}(s_L,a_\text{new})$ to the tree.
    - Rollout / Evaluate: Approximate the outcome $R$ for the current node $s_L$ (or $s_\text{new}$). This is performed using a policy/value evaluation method $V_\text{eval}(s_L)$ which may include running a stochastic simulation (rollout) until termination, calculating an approximate value from a function $V_\text{approx}(s_L)$, or a weighted combination of both methods.
    - Backup : propagate the resulting outcome / return $R$ back up the search path from $s_L$ to $s_0$ updating stored statistics.
    - Repeat (Select, Expand, Rollout/Evaluate, Backup) for some number of iterations.
    - Final selection: After all iterations are complete, determine the best move $a_\text{best} \in A(s_0)$ using some final action selection criterion $V_f(s_0, a)$.
- Search Control Strategy $V_s$ is used during the search to decide which node to visit next. The goal is to balance exploitation (visiting nodes that have proven to be good) and exploration (visiting nodes that are less explored, just in case they are better).
    - Example: UCT (Upper Confidence bounds applied to Trees) This is the most common and foundational selection strategy used in MCTS. For a parent node $s_t$, it selects the child action $a$ that maximizes the following formula:
        - $V_s(s_t, a) = \frac{w_a}{n_a} +  c\sqrt{\frac{\ln(N_t)}{n_a}}$
        - Where:
            - **$w_a$** is the number of wins (or total reward) for the child node resulting from action $a$.
            - **$n_a$** is the number of times the child node for action $a$ has been visited.
            - **$N_t$** is the total number of times the current parent node $s_t$ has been visited.
            - **$c$** is the exploration parameter, a constant that you can tune (a common theoretical value is $\sqrt{2}$). A higher $c$ encourages more exploration.
- Final Action Selection Criterion $V_f$ is used after the search to pick the one, single move to actually play in the game. You no longer need to explore; you just want to pick the best move based on the statistics you've gathered.
    - Example 1: Robust Child (Most Visited). This is the most common and generally recommended strategy.
        - $V_f(s_0, a) = n_a$
    - Example 2: Max Child (Highest Value). This strategy selects the move with the best-observed outcome, ignoring how many times it was visited.
        - $V_f(s_0, a) = \frac{w_a}{n_a}$

### Game Theory

- Game Theory
- Strategic Game ($\Gamma$)
- Players, Rules, Strategies, Outcomes, Preferences, Utility
- Nash Equilibrium (Pure strategies, Mixed strategies)
- Best Response (Pure, Mixed)
- Dominant Strategy
- Dominant Strategy Equilibrium
- Pareto Efficiency
- Winner Determination Problem (WDP)
- Mechanism Design
- Incentive Compatible
- Strategy-Proof
- Transfers
- VCG Mechanism (Vickrey-Clarke-Groves)
- Gibbard-Satterthwaite Theorem

### Logical Reasoning

- Propositional Formula/Logic
- Truth Table
- Logical Equivalence
- Domain of Discourse
- Predicates
- Predicate Logic/First-Order Logic (FOL)
- Quantifiers (Universal $\forall$, Existential $\exists$)
- Propositional Variables/Literals
- Clause/Clausal Normal Form (CNF)
- Conjunctive Normal Form (CNF) Theory
- Propositional Satisfiability (SAT)
- 3-SAT
- Model (Logic)
- Entailment Relation
- Propositional Resolution
- Unit Clause/Unit Resolution
- Contradiction
- First-Order Resolution
- Unification
- SLD Resolution
- Prolog (Programming in Logic)
- First-order Definite Clause
- Skolemisation
- Inference Procedure (Soundness)

### Graphical Models and Constraint Satisfaction

- Graphical Models (GM)
- Variables and Domains
- Local Functions/Factors
- Scope
- Combination Operator
- Global Function
- Reasoning Problem/Query
- Marginalization Operator
- Primal Graph (Constraint Graph)
- Hypergraph
- Dual Graph
- Factor Graph
- Constraint Network (CN)
- Constraint Satisfaction Problem (CSP)
- Constraint Relation/Tuple
- Solution (Constraint Network)
- Consistency (CSP)
- Minimal Network
- Projection Network
- Decomposable Networks/Relation
- Cost Network (COP)
- Weighted Constraint Satisfaction Problem (WCSP)
- MAX-CSP/Maximum Satisfiability (MAX-SAT)
- Integer Linear Programs (ILP)
- Bucket Elimination (BE)
- Variable Elimination (General term)
- Adaptive Consistency
- Constraint Propagation
- Arc Consistency

### AI Planning

- Planning Definition
- Plan (Sequence of Actions)
- Domain-Independent Planning
- Forward Search (Planning)
- Backward Search (Planning)
- Bidirectional Search (Planning)
- STRIPS (Stanford Research Institute Problem Solver)
- Factored Representation (Planning)
- Predicates/Atoms (Planning)
- Action Definition
- Preconditions (pre(a))
- Negative Effects (del(a))
- Positive Effects (add(a))
- Action Applicability
- Progress Function (progress(s, a))
- PDDL (Planning Domain Definition Language)
- PDDL Domain File
- PDDL Problem Instance File
- PDDL Requirements (:strips, :typing)
- Typing (PDDL)
- Numeric Fluents
- Action Cost (c(a))
- Goal State/Goal Test (Planning)
- Knowledge Engineering (Planning)
- Macro-Actions (Learning for Planning)
- Landmarks (Learning for Planning)
- Types of Planning (FOD, FOND, POD, POND)

### Uncertainty and Bayesian Networks

- Uncertainty
- Joint Probability Distribution
- Conditional Probability Distribution (CPD/CPTs)
- Bayesian Network (BN)
- Directed Acyclic Graph (DAG)
- Markov Network/Markov Random Field (MRF)
- Potential Functions (Markov Networks)
- Partition Function (Z)
- Inference (Probabilistic Reasoning)
- Query Variable (X), Evidence Variables (E), Hidden Variables (Y)
- Inference Tasks (Posterior Marginals, Probability of Evidence, MPE, Marginal MAP)
- Inference by Enumeration (Enumeration-Ask)
- Variable Elimination (VE, in BNs)
- Maximum A Posteriori (MAP)
- Marginal MAP
- Approximate Inference
- Sampling (Approximate Inference)
- Ancestral Sampling
- Rejection Sampling
- Likelihood Weighting
- Maximum Likelihood (ML) Estimation
- Bayesian Learning/Estimation
- Prior Belief
- Likelihood (of data)
- Learning Parameters (BNs)
- Learning Structure (BNs)
- Latent/Hidden Variables
- EM Algorithm (Expectation-Maximization)
- Completed Log-likelihood
- Explaining Away