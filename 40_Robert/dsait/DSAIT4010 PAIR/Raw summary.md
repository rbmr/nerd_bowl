# Raw summary

What is AI?

- Turing's Imitation Game (Turing Test) is a proposal to determine if a machine can exhibit intelligent behavior indistinguishable from that of a human through text-based conversation.
- The four types of AI systems are:
    - Systems that THINK RATIONALLY (laws of thought)
    - Systems that THINK like HUMANS (cognitive modelling)
    - Systems that ACT RATIONALLY (rational agent, **our focus**)
    - Systems that ACT like HUMANS (turing test)
- An agent is anything that perceives and acts upon its environment.
- A rational agent is an agent that acts in order to achieve the optimal expected outcome given some set of predefined goals.
- We focus on rational agents in this course.

Search

- A search problem is a mathematical expression of an environment. It allows a rational agent to find a sequence of actions (a path) to move from an initial state state to a goal state, optionally minimizing a path cost. Formally defined by 5 components:
    - Initial State : The state where the agent begins
    - Actions (s) : set of actions that can be executed in state s
    - Result (s, a) : transition model, returns state resulting from taking action a in state s.
    - Goal test : way to determine whether a given state is the goal state
    - Path cost : numerical cost associated with a given path (sequence of actions)
- State space: set of all states reachable from the initial state through any sequence of actions. In a state space each state is represented only once.
- Search tree: structure used to explore paths through the states space. The root is the initial state, and any node represents a complete path from the initial state to a specific state. Since each node represents a path, a single state can appear multiple times if there are different paths to reach it.
- Tree Search Algorithms: procedures that attempt to solve a search problem by exploring a search tree. The process involves repeatedly expanding some node from a search frontier using some predefined strategy until a goal state is found.
- The search frontier is the set of nodes that are candidates for expansion.
- Informed Search algorithms make use of a heuristic function to determine which nodes to expand. This heuristic function is based on problem-specific knowledge about the goal's location or proximity.
- Tree Search Algorithms
    - Depth-First Search (DFS) : Expands the deepest node.
    - Breadth-First Search (BFS) : Expands the shallowest node.
    - Iterative Deepening DFS (IDDFS) : Repeatedly runs DFS with an increasing depth limit.
    - Uniform Cost Search (UCS, Dijkstra’s) : Expands the node $n$ with the lowest cumulative path cost $g(n)$ from the start node to $n$.
    - Best-First Search (BestFS) : Expands the node $n$ with the estimated lowest cumulative path from the node to the goal $h(n)$.
    - A* Search : Combines backward cost $g(n)$ and estimated forward cost $h(n)$.
        - Big downside: it keeps the entire explored region in memory.
    - Iterative Deepening A* (IDA*) : Repeatedly runs A* with an increasing cost limit $U$.
        
        ![image.png](40_Robert/dsait/content/image%2010.png)
        
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

Adversarial search

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

Logic recap:

- Formula: symbols following the rules of logical language (e.g., $P \land (Q \rightarrow R)$).
- Model: assignment to propositions such that the formula is true. (e.g., $P=\text{True}$, $Q=\text{False}$)
- Tautology**:** A formula that is true in every possible model. (e.g., $P \lor \neg P$).
- Contradiction**:** A formula that is false in every possible model. (e.g., $P \land \neg P$).
- Proof System**:** A set of axioms (assumed formulas) and inference rules (syntactic rules for deriving new formulas).
- Proof**:** A sequence of formulas where each formula is either an axiom, a premise, or is derived from previous formulas using an inference rule.
- Object-Language connectives: Symbols that are part of the logical formula. They function as “operators” within the formal language. Examples:
- Metalanguage Symbols: These symbols are not part of the formulas themselves. They are used to talk about the formulas and their relationships.

| Symbol | Pronunciation | Level | Definition |
| --- | --- | --- | --- |
| $p \land q$ | $p$ and $q$ | Object-Language  |  |
| $p \lor q$ | $p$ or $q$ | Object-Language |  |
| $p \to q$ | $p$ implies $q$ | Object-Language |  |
| $p ↔ q$ | $p$ if and only if $q$ | Object-Language |  |
| $p ⇒ q$ | $p$ logically implies $q$ | Metalanguage | $p → q$ is a tautology |
| $p \Leftrightarrow q$ | $p$ is logically equivalent to $q$ | Metalanguage | $p ↔q$  is a tautology |
| $KB \models q$ | $KB$ semantically entails / models $q$ | Entailment | In every model where all formulas in $KB$ are true, the formula $q$ is also true. |
| $KB \vdash q$ | $KB$ syntactically entails / proves $q$ | Entailment | Using the axioms and inference rules of a specific proof system, there exists a formal proof of $q$ that uses the formulas in $KB$ as premises. |

Logical Reasoning

- Entailment relation $KB \models q$: Is what I’m interested in ($q$) true given what I know ($KB$)?
- $KB \models q$ if and only if every model that makes $KB$ true also makes $q$ true.
    - $M(KB) \subseteq M(q)$
    - $(KB \implies q)$ is a tautology
- To simplify computation, logical sentences are often converted into a canonical form, typically the clausal normal form (a conjunction of clauses, where each clause is a disjunction of literals). Conversion consists of repeatedly applying trivial reductions.
- Proof by refutation: Proving that $q$ is a logical consequence of $KB$ is equivalent to proving that $KB \land \neg q$ leads to a contradiction.
- Propositional Logic:
    - Propositional resolution: a single, simple algorithm that can (dis)prove any logical implication using refutation.
        1. negate $q$ and add it to $KB$
        2. repeatedly apply the resolution rule to pairs of clauses in $KB$
        3. repeat until
            - the pair resolves into an empty clause (with no literals), giving a contradiction→ q is true
            - no pairs of clauses are left to try → q is false
    - Resolution rule: If two clauses contain complementary literals ($c$ in one clause and $\neg c$ in another) a new clause (the resolvent) is created by combing all other literals from both parent clauses.
- First order logic:
    - First order automated reasoning works similar, but $KB$ and $q$ are now first order sentences. The main difference being that resolution requires unification.
    - Unification: Finding a substitute for $\theta$ for variables that makes two literals the same. Resolution finds two clauses with literals $l_i$ and $m_j$ such that $UNIFY(l_i, \neg m_j) = \theta$. It then produces a new clause by applying the substitution $\theta$ to the combination of the parent clauses (minus the resolved literals).
    - Factoring: the removal of redundant (unifiable) literals within a single clause.
    - Conversion to CNF includes extra steps like standardizing variables (renaming to avoid clashes), skolemising (removing existential quantifiers), dropping universal quantifiers.
    - First order reasoning is generally not decidable, yet first-order resolution combined with factoring is refutation-complete and sound.
- Beyond Propositional and First-Order logic
    - Ladder of expressivity: Tradeoff between expressivity and efficiency:
        - Higher level logics make it easier to solve complex problems.
        - Lower level logics have more efficient solving procedures.
    - Complex logic can be reduced to propositional logic, but conversion can become unmanageable.

Planning:

- There are different types of planning, each taking into account a different set of aspects:
    - Determinism: do we treat the problem as deterministic, non-deterministic, or probabilistic?
    - Observability: do we assume full knowledge, or is there partial observability?
    - Multi-Agent: Is there just one or multiple agents? For the latter, do agents collaborate, compete, do we control all agents, or is planning distributed?
    - Objective: de we want any feasible plan? What objective function to we want to minimize / maximize?
- Planning usually has three stages: Modeling, Model solving, Execution. Stages are generally not fully independent.
- Domain independent planning solve planning problems from different domains my converting them to some domain independent modeling language, these can then be solved by the same planners.
    - Planning can be modelled as a search problem. Allowing you to apply any of the aforementioned search algorithms.
    - Planning can also be modelled as a Constraint Satisfaction Problem (CSP), allowing you to use any of the general solvers. However, the state space becomes very big and increases due to the time component, which is not present in many other CSP problem settings.
- Stanford Research Insititute Problem Solver (STRIPS) provides a language solver and a search procedure for planning problems.
    - Problems are defined as $(P, A, I, G)$, where $P$ are predicates that can either be true of false, actions $A$ (things the agent can do), an initial state $I$ (atoms that hold at the start of the problem), and a goal state $G$ (atoms that should hold at the end).
    - States are just a conjunction of ground predicates (atoms). Ground predicates are predicates instantiated with a specific object from the problem instance. Predicates placeholders (in ungrounded predicates) are named with a capital letter, while specific objects (in grounded predicates) have names starting with a lower letter.
    - Each action $A$ consists of three parts:
        - preconditions `pre(a)` a list of facts that must be true before the action can be taken
        - negative effects `del(a)` a list of facts that become false after the action is performed
        - positive effects `add(a)` a list of facts that become true after the action is done.
        - optional: cost `c(a)` cost for executing the action, which allows you to control the definition of an optimal plan more specifically.
    - If `pre(a)` hold true in the current state, then we may apply action $a$ to state $s$, in which case we update the state according to `del(a)` and `add(a)` .
- Planning Domain Definition Language (PDDL) is the standard planning language in the research community, its a superset of the STRIPS formalism.
    - PDDL separates the problem into two main files:
        - Domain file: defining the predicates, and the possible actions. It can also define requirements (special features used) and constants (objects that exist in all problem instances).
        - Problem file: defines the initial state (atoms that are true at the start), and the goal state (atoms that must be true at the end).
    - actions are defined by preconditions and effects. Effects do not explicitly separate into positive (add) and negative (delete) lists.
    - PDDL supports extensions to model more complex problems. Common extensions include:
        - Numeric fluents (predicates). Allows for numerical values not just boolean true/false predicates. These can be used in preconditions and effects.
        - Durative Actions: Allows actions to have duration, expressing temporal problem features.
        - Conditional effects: Allows an action’s effects to depend on other conditions.
    - Language uses a LISP-like syntax (with many brackets). Variables in the domain file are typically denoted with a ? prefix (e.g. `?x` )

Constraint networks

- Graphical models (GMs): describe a methodology for representing knowledge using a graph-based structure. Formal Definition:
    - $X = \{X_1, \cdots, X_n \}$ - variables
    - $D = \{D_1, \cdots, D_n\}$ - finite domains
    - $F = \{f_{\alpha_1}, \cdots, f_{\alpha_m} \}$ - functions (or factors), defined over subsets of variables (scopes $S_i \subseteq X$).
    - And some combination operator.
    - The GM represents a global function whose scope is $X$ computed by combining all its local functions. This global function is often too large to compute directly due to its exponential size.
- Constraint Networks (CNs) are fundamental deterministic graphical models. Formalized as a 4-tuple $\mathcal{R}=⟨X,D,C,⋈⟩$, where $*X*$ are variables, $*D*$ are domains, $*C*$ is a set of constraints, and the combination operator is the relational join **$⋈$.**
    - Each constraint $C_i$ is a relation $R_i$ defined on a subset of variables $S_i$, denoting the compatible (feasible) tuples of values allowed by the constraint.
    - The CN  represents its set of solutions, $\text{sol}(\mathcal{R}) =~ ⋈_iR_i$, which is the instantiation of all variables satisfying all constraints.
- Visualization of GMs**:**
    - Primal Graph (called **constraint graph** for CNs)**:** undirected graph, where nodes represent variables $X$. An edge connects any two variables that appear together in the scope of the same function.
    - Hypergraph: uses variables $X$ as nodes and the scopes of the functions $S$ as hyperedges.
    - Dual Graph: nodes are the scopes $S$, and the edges connects any two nodes if their corresponding scopes shares variables $S_i \cap S_j \neq \empty$.
- Constraint Satisfaction Problems (CSPs) and Constraint Optimization Problems (COPs) are the primary reasoning tasks over Constraint Networks and Cost Networks respectively.
- Constraint Satisfaction Problems (CSPs) are a special case of GMs
    - **CSP Definition:** A CSP is defined by:
        - **$V=\{V_{1},...,V_{n}\}$:** A finite sequence of variables.
        - **$D=\{D_{1},...,D_{n}\}$:** A finite sequence of domains, which are sets of possible values for the variables.
        - **$C=\{C_{1},...,C_{m}\}$:** A finite set of constraints on the variables.
        - The combination operator ($\otimes$) is **conjunction** ($\Lambda$), meaning all constraints must be satisfied.
        - The marginalization operator ($\oplus$) is **projection** ($\emptyset$), which corresponds to finding a candidate solution.
    - **Constraint Optimization Problems (COPs):** A variation of CSPs that includes an objective function $F$. For a COP, the marginalization operator is typically $\min$ to find the solution that minimizes $F$.
    - **Constraint Representation:** Constraints can be represented:
        - Intentionally**:** As a function (e.g., $V_i \ne V_j$).
        - Extensionally**:** As a set listing all allowed combinations (tuples) of values.
    - "Solving" a CSP can mean finding one solution, finding all solutions, proving no solution exists, or counting the solutions. Beyond brute-force, solving strategies combine three main ideas:
        - Search**:** Explore the space of candidate solutions.
        - Inference**:** Reduce the space of candidate solutions.
        - Relaxation**:** Exploit solutions to easier, related problems.

- Online planning uses the environment model to search for and select the best action for the agent's current state $s_t$ before executing it in the real world. In contrast, offline planning uses the model to generate simulated experiences from various past states $s\neq s_t$ and uses that data to improve the overall value function or policy.