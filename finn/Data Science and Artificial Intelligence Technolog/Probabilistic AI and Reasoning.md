# Probabilistic AI and Reasoning

# Introduction

**What is AI?**

There is no single answer to what “Artificial Intelligence” is, as there is no single answer to what “Intelligence” is. 

1. Acting humanly: The Turing test
    1. Asses whether a machine can exhibit intelligent behaviour indistinguishable from that of a human. An interrogator communicates via text with both a human and a machine; if the machine cannot be identified, it passes the test
    2. Not easily reproducible with the exact same circumstances, and does not provide a roadmap for building intelligent systems
2. Thinking Humanly: Cognitive Science
    1. Trying to replicate the inner workings of a human brain
    2. AI is not necessarily concerned with replication human limitation (memory constraints). The goal is to solve problems, not mimic humans (not always at least)
3. Thinking Rationally: The laws of thought
    1. Here intelligence is defined as the ability to perform logical inference
    2. Extremely difficult to capture the ambiguity and uncertainty of the real word in crisp logical statements
4. Acting rationally: The rational agent
    1. This is the central focus of the course. A rational agent is a system that perceives its environment via sensors and acts upon it through actuators to achieve the best expected outcome.
    2. This framework is more general and scientifically rigorous than the others. There are quantitative performance measures.

**Representing the world**

To act rationally, the agent must have a representation of the world it is living in. There are several ways of doing this:

- Logical expressions
- Bayesian Networks
- Markov decision processes
- Embeddings in high-dimensional space

Predicate logic example: $\forall x (\text{Shark}(x) \rightarrow (\exists y (\text{Santa}(y) \wedge \text{AboveOf}(x, y)) \vee \exists y (\text{Shark}(y) \wedge \text{LeftOf}(x, y))))$

This statement translates to: "For every entity $x$, if $x$ is a shark, then it must be true that either there exists a Santa $y$ below $x$, OR there exists another shark $y$ to the right of $x$." To make this claim false, one must find a "counterexample shark"—a shark for which neither of these conditions holds true.

A problem with predicate logic is:

- Encoding difficulty: capturing real-world knowledge is difficult and complex
- Uncertainty: logic struggles to handle probabilistic or incomplete information
- Scalability: Logical inference can be computationally expensive
- Bounded Rationality: Agents have finite computation resources

# Search & Reasoning

## Heuristic Search

### Search Fundamentals

A planning agent solves problems by searching through a state space to find a sequence of actions leading to a goal. A formal search problem consists of five components
• **State Space ($S$):** The set of all possible configurations of the world. For example, in a pathfinding problem, this includes all possible (x,y) locations.
• **Initial State ($s_0$):** The state where the agent begins.
• **Actions($s$):** A function that returns the set of possible actions applicable in a given state $s$.
• **Transition Model (Successor Function):** This function, `RESULT(s, a)`, returns the state that results from performing action `a` in state `s`.
• **Goal Test:** A function that determines if a given state is a goal state.
• **Path Cost:** A function that assigns a numerical cost to a path, often the sum of the costs of the actions along that path.

### **State Space Graphs**

- A state-space graph represents the problem's possible states and transitions.
- Nodes represent states (configurations of the problem).
- Edges represent actions or transitions between states.
- Solving a problem involves finding a path from the initial state to a goal state.
- For NP-Hard problems, the state space graph can be extremely large (exponential in the input size), making exhaustive search infeasible.

### **Search Trees**

- A search tree is a tree-like structure generated during the search process.
- The root node is the initial state.
- Each node represents a state reached by applying a sequence of actions.
- Branches represent the exploration of different possible actions from a state.
- **Comparison to State Space Graphs:**
    - A search tree is *one possible exploration* of the state space. A state-space graph is the *complete* representation of *all* possible states and transitions.
    - Search trees can have redundant paths (visiting the same state multiple times), while state-space graphs represent each state only once.
- **Benefits of Search Trees:**
    - Simpler to implement and visualize the search process.
    - Useful for exploring a portion of the state space, which is often necessary for NP-hard problems.

### Uninformed Search

**DFS:**

- Explores a path as far as possible before backtracking.
- Uses a stack (implicitly or explicitly).
- **Advantages:** Simple to implement, low memory usage (for some problem types).
- **Drawbacks:** May not find the shortest path, can get trapped in infinite branches. (not complete)

**BFS:**

- Explores all neighbors at the current level before going deeper.
- Uses a queue.
- **Advantages:** Finds the shortest path (if one exists), complete (if the branching factor is finite).
- **Drawbacks:** High memory usage (stores all nodes at the current level), can be slow for large state spaces.

**Uniform Cost Search**

- Always picks the node with the lowest path cost ($g(n)$) from the start state.
- Implemented with Priority Queue
- Optimal if action costs are non-negative
- Complete

### Informed Search

**Greedy Best-First Search**

- Expands the node that appears to be closest to the goal, based solely on the heuristic value $h(n)$.
- Often finds solutions quickly but is neither complete nor optimal as it can be misled by flawed heuristic and ignores the path cost already incurred.

A* Search

- Combination of UCS and Greedy Search
- Expands node with the lowest value of $f(n) = g(n) + h(n)$
    - $g(n)$ is the cost incurred from start to the node $n$
    - $h(n)$ is the estimated cost from node $n$ to the goal node
- To guarantee optimality, the heuristic must satisfy certain properties
    - **Admissibility:** A heuristic *h(n)* is admissible if it never overestimates the actual cost to reach the goal. If *h(n)* is admissible, A* is guaranteed to find an optimal solution.
    - **Consistency (or monotonicity):** A heuristic *h(n)* is consistent if *h(n) ≤ c(n, n') + h(n')* for every node *n* and every successor *n'* of *n*, where *c(n, n')* is the cost of the edge between *n* and *n'*. All consistent heuristics are admissible.
- **Optimal Efficiency:** A* is optimally efficient in terms of *nodes expanded* if it expands the minimum number of nodes necessary to guarantee an optimal solution. Given an admissible heuristic, A* expands a sub-graph of the search space. No other optimal algorithm that uses the same heuristic function will expand fewer nodes than A*.

### Heuristics

- **Admissibility:** A heuristic *h(n)* is admissible if it never overestimates the actual cost to reach the goal. If *h(n)* is admissible, A* is guaranteed to find an optimal solution.
- **Consistency (or monotonicity):** A heuristic *h(n)* is consistent if *h(n) ≤ c(n, n') + h(n')* for every node *n* and every successor *n'* of *n*, where *c(n, n')* is the cost of the edge between *n* and *n'*. All consistent heuristics are admissible.

### Adversarial Search

Minimax search is used in adversarial, two-player games with perfect information, such as chess, checkers, and tic-tac-toe. These games involve opponents who try to counter each other's moves.

- **How it works:**
    - Minimax is a recursive algorithm that explores the game tree to determine the optimal move for the "maximizing" player (usually the computer).
    - The algorithm assumes that the opponent ("minimizing" player) will always make the best possible move to minimize the maximizing player's chances.
    - The game tree consists of nodes representing game states and branches representing possible moves.
    - The algorithm assigns a value to each terminal node (end of the game) based on the outcome (e.g., win, loss, or draw).
    - It then propagates these values up the tree:
        - At maximizing levels, the player chooses the move with the highest value (maximum).
        - At minimizing levels, the opponent chooses the move with the lowest value (minimum).
    - This process continues until the root node is reached, representing the current state of the game, and the best move for the maximizing player is determined.
- **Alpha-Beta Pruning:**
    - Alpha-beta pruning is an optimization technique that significantly reduces the number of nodes evaluated by the minimax algorithm.
    - It works by maintaining two values, alpha (the minimum score that the maximizing player is assured of) and beta (the maximum score that the minimizing player is assured of).
    - During the search, if a node's value is found to be outside the alpha-beta window, the algorithm can prune (eliminate) the remaining branches of that node, as they will not affect the final decision.
- **Scaling:**
    - The time complexity of the minimax algorithm is O(b^d), where *b* is the branching factor (number of possible moves at each state) and *d* is the depth of the search tree.
    - This exponential scaling makes minimax impractical for games with large branching factors and deep search trees, such as chess or Go.
    - Alpha-beta pruning can improve the effective branching factor, but the complexity remains exponential in the worst case.
- **Advantages:**
    - Guarantees an optimal solution (assuming perfect play by both players) for games with a finite game tree.
    - Provides a framework for decision-making in adversarial environments.
- **Drawbacks:**
    - Computationally expensive due to exponential time complexity.
    - Limited to deterministic, two-player games with perfect information.
    - Assumes the opponent plays optimally, which may not be realistic in practice.

### MCTS

- Monte Carlo Tree Search (MCTS) is a heuristic search algorithm used for decision-making in situations with a large number of possible outcomes, most notably in game playing.
- It combines the principles of tree search with Monte Carlo methods (random sampling) to evaluate the best move to make.
- MCTS does not require any prior knowledge of the domain and can learn by playing the game itself.
- **History of MCTS**
    - The idea of using random sampling to evaluate moves in games dates back to the 1940s.
    - The term "Monte Carlo Tree Search" was first used by Rémi Coulom in 2006.
    - MCTS was popularized by its success in computer Go programs, most notably AlphaGo, which defeated a human world champion in 2016.
- **How MCTS Works**
    
    MCTS iteratively grows a search tree and uses the results of simulated playouts to guide the search. Each iteration of MCTS consists of four steps:
    
    1. **Selection:** Starting from the root node (the current game state), the algorithm traverses the tree by selecting the child node that leads to the most promising state, balancing exploration and exploitation.
    2. **Expansion:** If the selected node is not a terminal node (end of the game), the algorithm expands the tree by adding one or more child nodes representing possible moves from that state.
    3. **Simulation:** From one of the newly added child nodes, the algorithm simulates a random playout until a terminal state is reached. This involves making random moves for both players until the game ends.
    4. **Backpropagation:** The result of the playout (e.g., win, loss, or draw) is then propagated back up the tree, updating the statistics (e.g., win rate, number of visits) of the nodes along the path from the newly added node to the root node.
    
    The algorithm repeats these four steps until a certain computational budget is exhausted (e.g., time limit, number of iterations). The move that leads to the most visited child node at the root is then selected as the best move.
    

## Logical Reasoning

The central idea behind logical reasoning in AI is **declarative problem-solving**. Instead of programming *how* to solve a problem, you model the world by stating what is known to be true. An AI agent can then use this model to ask various questions and deduce new information.

### Propositional Logic

**Foundation**

Propositional logic is a formal language built from propositions, statements that can be either true or false.

- **Symbols:** Propositions are represented by symbols (e.g., $P$, $Q$, $R$). For example, $P$ could stand for "It is raining".
- **Logical Connectives:** These symbols are combined using connectives to form complex sentences:
    - **Not ($\neg$):** Negation.
    - **And ($\wedge$):** Conjunction (true only if both operands are true).
    - **Or ($\vee$):** Disjunction (true if at least one operand is true).
    - **Implication ($\Rightarrow$):** "If-then" structure. $P \Rightarrow Q$ is false only when $P$ is true and $Q$ is false.
    - **Biconditional ($\leftrightarrow$):** "If and only if".

A **model** is a specific assignment of truth values to all propositional symbols. For $n$ symbols, there are $2^n$ possible models.

**Knowledge Base**

Logical reasoning is achieved through a knowledge based agent, which operates on an internal representation of knowledge. This knowledge is stored in a **knowledge base (KB)**, a set of sentences in formal language.

**Entailment**

The core task is to determine if a query sentence, $q$, is a logical consequence of the KB. This relationship is called **entailment**, written as: $KB \models q$.

This means that in every possible world (or model) where all sentences in the KB are true,. the query $q$ must also be true. 

### Inference Methods

**Model Checking**

The most straightforward method is **Model Checking**. The algorithm is as follows:

- Enumerate all possible models
- For each model, check if the KB is true
- Among all models where the KB is true, check if $q$ is also true in every single one.
- If it is, then the entailment holds

While correct, model checking is inefficient, as it requires checking $2^n$ models, where $n$is the number of propositional symbols. 

**Inference by Resolution**

A more efficient method is to use inference rules to derive new sentences directly from existing ones, without enumerating models. The most powerful of these is resolution.

The resolution algorithm works via proof by refutation. To prove $KB\models q$, we instead show that the sentence $(KB \wedge \neg q)$ is unsatisfiable, thus leads to a contradiction. 

This algorithm requires all sentences to be in Clausal Normal Form. A sentence is in CNF if its a conjunction of clauses, where each clause is a disjunction of literals. Transform any sentence into CNF using:

1. **Eliminate biconditionals ($\leftrightarrow$):** Replace $\alpha \leftrightarrow \beta$ with $(\alpha \Rightarrow \beta) \wedge (\beta \Rightarrow \alpha)$.
2. **Eliminate implications ($\Rightarrow$):** Replace $\alpha \Rightarrow \beta$ with $\neg \alpha \vee \beta$
3. **Move negation inwards ($\neg$):** Use De Morgan's laws to push $\neg$ until it only applies to symbols. For example, $\neg(\alpha \wedge \beta)$ becomes $\neg\alpha \vee \neg\beta$.
4. **Distribute $\vee$ over $\wedge$:** Replace $(\alpha \wedge \beta) \vee \gamma$ with $(\alpha \vee \gamma) \wedge (\beta \vee \gamma)$.

The resolution rule takes two clauses that contain complementary literals and produces a new clause by merging them and removing the complementary pair.

$$
\frac{(l_1 \vee \dots \vee l_k) , \quad (m_1 \vee \dots \vee m_n)}{l_1 \vee \dots \vee l_{i-1} \vee l_{i+1} \vee \dots \vee l_k \vee m_1 \vee \dots \vee m_{j-1} \vee m_{j+1} \vee \dots \vee m_n}
$$

where $l_i$ and $m_j$ are complementary literals (e.g., $l_i = C$ and $m_j = \neg C$).

Algorithm:

- Convert all sentences in KB and the negated query $\neg q$ into CNF
- Repeatedly apply the resolution rule to pairs of clauses in the set to generate new clauses.
- If this process generates an empty clause (represented as ()), a contradiction has been found. This proves that KB entails q
- If no new clauses can be generated and the empty clause has not been found, the entailment does not hold

### First-Order Logic

Propositional logic is hard to deal with for complex environments with many objects and relations. First-Order Logic provides a more expressive language.

**Components**

- Constant Symbols: Represent specific objects (e.g. abe, homer, west).
- Predicate Symbols: Represent relations between object (e.g. Parent(X,Y), Enemy(nono,america), IsMan(X))
- Variables: are placeholders for objects in the domain. E.g. X,Y,x,y

**Quantifier**

- Universal Quantifier $\forall$: For all… (predicate is true) (holds for all)
- Existential Quantifier $\exists$: There Exists… (predicate is true) (holds for at least one)

### First-Order Resolution

Reasoning in FOL also uses resolution, but with an added step: Unification.

**Unification**
Before two literals can be resolved, their variables must be matched. Unification is the process of finding a substitution, for variables that makes two literals identical. 

**Substitution:** A substitution is a mapping of variables to terms. It's a set of bindings. For example, the substitution `σ = {x / Socrates, y / fatherOf(Socrates)}` means "replace every occurrence of the variable `x` with the constant `Socrates`, and replace every occurrence of the variable `y` with the complex term `fatherOf(Socrates)`.

- `UNIFY(Owns(isabel, X), Owns(Y, car))` returns the substitution $\theta=\{X/car, Y/isabel\}$
- `UNIFY(Owns(X, car), Drives(bob, Y))` fails because the predicates `Owns` and `Drives` do not match.

First-Order Resolution Rule
The rule is similar to propositional resolution, but it first unifies the complementary literals and then applies the substitution $\theta$ to the resulting clause.

$$
\frac{l_1 \vee \dots \vee l_k, \quad m_1 \vee \dots \vee m_n}{SUBST(\theta, l_1 \vee \dots \vee l_{i-1} \vee \dots \vee m_1 \vee \dots \vee m_{j-1} \dots)}
$$

where $UNIFY(l_i, \neg m_j) = \theta$.

First-order resolution is **refutation-complete**, meaning if a set of clauses is unsatisfiable, resolution is guaranteed to derive a contradiction. However, unlike propositional logic, FOL is generally **not decidable**; an algorithm might run forever if the query is not entailed.

### Prolog

First-order logic can be used as a programming language, with first-order resolution serving as its interpreter. This is the foundation of **Prolog**.

- **Restriction:** Prolog uses **Horn logic** (or definite clause logic), which restricts clauses to having exactly one positive literal.
- **Syntax:** A clause like $l_{1}\vee\neg l_{2}\vee\neg l_{3}\vee...\vee\neg l_{k}$ is written as an implication: $l_{1}\leftarrow l_{2}\wedge l_3\wedge...\wedge l_{k}$.
- **Prolog Formats:**
    - **Clause: `A :- B1, B2, ..., Bn`.**
    - **Fact:** `A.` (interpreted as `A :- true.`)
    - **Query:** `?- Q.` (interpreted as `false :- Q.`)

**SLD Resolution**

Prolog employs a specific procedure called **SLD Resolution** (Selective Linear Definite resolution):

- **Selective:** Always resolves one literal against a single clause
- **Linear:** Resolve query literals one by one, from left to right
- **Definite:** Relies on the definite clausal form (one positive literal)

## Planning

Planning is the art and practice of thinking before acting. You create a sequence of actions, a plan, that transitions the agent from an initial state to a desired goal. 

Planning integrates concepts from heuristic search and logical reasoning. An agent can reason about its current state, and the possible actions it can take, and then uses heuristic search to find an optimal or satisfactory sequence of actions to reach its goal. 

**Domain-independent planning** is where a single solver/planner can solve problems from various domains, provided they are described in a standardized modelling language. 

### Types

**Fully Observable Deterministic**
The agent knows the complete state of the world, and the outcome of each action is unique and predictable.

**Non-Deterministic**
An action can have multiple possible outcomes

**Partial Observable**
The agent has incomplete knowledge of the world state.

**Probabilistic**
The outcomes of actions are described by probability distributions. This leads to formalism like MDP and POMDP (combined with partial observability)

### Planning Approaches

The core approach to classical planning is to frame it as a search problem. A formal search problem is defined by:

- State space, Successor function, Start state, Goal state

A solution is a plan (a sequence of actions) that transforms the start state into a goal state.

**Search Strategies**

- Forward search: Starts from the initial state and applies actions to move towards the goal. It calculates the cost from the start to the current node, denoted as $g_f(n)$.
- Backward search: Starts from the gaol state and applies actions in reverse to find a path back to the start state. This requires being able to determine the predecessors of a state. It calculates the cost from teh current node to the goal $g_B(n)$.
- Bidirectional search: Simultaneously searches forward from the start and backward from the goal, hoping the two searches meet in the middle. This can significantly reduce the search effort, because less depth, meaning less branches.

Another approach is to formulate planning as a Constraint Satisfaction problem (CSP), where states and actions are variables, and the goal is a set of constraints. This allows the use of general purpose CSP solvers. More on that later…

### Planning Models

**STRIPS formalism**

The Stanford Research Institute Problem Solver (STRIPS) is a foundational formalism for planning. A STRIPS problem is defined as a tuple $(P,A,I,G)$ where:

- P: a set of predicates that describe the properties of the world (e.g. `(at ?agent ?location)`)
- A: set of action the agent can perform. Each action defined by:
    - Preconditions: A set of atoms that must be true in the current state for the action to be applicable
    - Add-list Add(a): a set of atoms to be added to the state
    - Delete-list DEL(a): a set of atoms to be removed from the state
- I: inital state, a set of true atoms (grounded predicates)
- G: the goal, a set of atoms that must be true for the goal to be achieved

When an applicable action is applied to a state, the new state is computed by the progression function $s' = PROGRESS(s, a) = (s \setminus DEL(a)) \cup ADD(a)$.

### PDDL (Planning Domain Definition Language)

PDDL is the modern, standardized language for describing planning problems, extending the STRIPS formalism. A PDL model is split into two files:

1. Domain File: Defines the general rules of the world. It contains:
    1. Requirements: Special features used, like `:strips` or `:typing` 
    2. Types: defines a hierarchy of object types (e.g. `car` is a type of `vehicle`)
    3. Predicates: the properties and relations that can be true or false
    4. Actions: the possible actions with their parameters, preconditions and effects
2. Problem file:
    1. Objects: the specific objects in the problem instance
    2. Initial state: the set of atoms that are true at the start
    3. Goal: the set of atoms that must be true in the goal state

PDDL also supports extensions like numeric fluents, which allow for numerical properties that can be checked in preconditions and modified in effects. 

## Constraint Networks

### Graphical models

A graphical model describes a global function by combining smaller functions, called ‘factors’, that each operates on a subset of the variables. Defined as:

- Variables ($X$): A set of variables $\{X_1,...,X_n\}$ that represent the entities in the problem
- Domains($D$): A set of domains $\{D_1,...,D_n\}$ where each $D_i$ is the set of possible values for a variable $X_i$.
- Factors($F)$: A set of functions $\{f_1,..,f_n\}$ where each function takes a subset of the variables as input and represent a local relationship or cost
- Combination Operator ($\otimes$): an operator used to combine the individual factors into a single global function

GMs can be visualized in two main ways:

- Primal Graph: Each variable is a node. An edge connects any two variables that appear in the same factor. The factor themselves are represented ad cliques (fully connected subgraphs) over their variables.
- Dual graph: Each factor is a node. An edge connects two nodes if their corresponding factors share variabels.

### Constraint Satisfaction Problem

A CSP, also known as a constraint network, is a specific type of graphical model used to solve problems with deterministic constraints. Defined as:

- Variables: a set of decision variables
- Domains: a set of possible values for each variable
- Constraints: a set of rules that restrict the values the variables can take simultaneously

In the context of GMs, a CSP has specific operators:

- The combination operator ($\otimes$) is a logical conjunction (AND). All constraints need to be met.
- The marginalization operator ($\oplus$) is projection. This corresponds to the task of finding one, or all valid assignments for the variables.

### Solving CSPs

### Consistency

**Node Consistency**
A variable is node consistent if every value in its domain satisfies all the unary constraints for that variable. So for each variable, go through all values in it’s domain, and remove the values that violate any constraints for that single variable.

**Arc Consistency**
Arc Consistency is similar to node consistency, but then for pairs. The AC-3 algorithm is fastest at checking this.

### Search

1. The algorithm starts by selecting an unassigned variable and then choosing a value from its domain (this is often guided by a heuristic, like minimum remaining values in the domain).
2. After assigning a value, the algorithm performs inference to prune the domains of other variables. This is where techniques like node and arc consistency come in. This reduces the search space.
3. If any variable’s domain becomes empty, it means the current partial assignment cannot lead to a solution. 
4. If a failure was found, go back 1 step (unassigned last assigned variable) and go back to step 1. (or backtrack in another way, like to the variable that was chosen that caused the conflict)
5. If no failure was found do not backtrack and repeat step 1. 
6. The process terminates when either a complete valid assignment has been found, or the entire search space has been explored. 

### Inference (Bucket elimination algorithm)

1. Establish ordering of variables. This is done using a heuristic.
2. Partition constraints into buckets: for each variable $X_i$ in the chosen order, a bucket is created. Each original constraint in the CSP is placed into the bucket of the last variable in its scope according to the ordering.
3. Process buckets in reverse order: the algorithm processes the buckets from last to first. For each bucket associated with variable $X_i$:
    1. All constraints are combined into a single larger constraint.
    2. The variable $X_i$ is eliminated from this combined constraint. This is done by projecting the relation onto the remaining variables. The resulting new constraint contains all the valid tuples for the remaining variables, efffectively summarizing all the ways the eliminated variable $X_i$  could have been assigned
    3. The new constraint is then placed into the bucket of the latest variable in its scope
4. Backward assignment: after processing all buckets, the network has been transformed into a backtrack-free one. A solution can now be found by assigning values to variables in the forward order (1..n). For each variable, a value is chosen from its domain that is consistent with the values already assigned to previous variables and with the learned constraints. Because the network is back-track free a valid choice will always be available. 

The complexity of Bucket Elimination is $O(ne^{w*(d)})$, where $n$ is the number of variables, and $w*(d)$ is the **induced width** (or treewidth) of the graph along the chosen ordering $d$. The induced width is determined by the size of the largest constraint created during the elimination process. A good variable ordering is one that keeps this induced width as small as possible.

# Uncertainty & Probability

## Uncertainty & Bayesian networks

### Need for probability

- Sources of uncertainty
    - Stochasticity: Actions can have uncertain outcomes, and the environment itself can change unpredictibility
    - State uncertainty: An agent may not know the exact state of the world due to sensor noise or limited sensor capabilities.
- Limitations of logic: logic can handle some of these cases by making very complex conditional plans. However it suffers from the qualification problem. It is impractical to explicitly every possible exception, no matter how inprobable, for an action to succeed. (You could be late to the airport because there might be a stone oriented in the wrong way on the road at the time you will be driving there resulting in you getting a flat tire),
- Probability provides a mathematical framework to summarize these numerous exceptions and quantify an agent’s degree of belief in different outcomes.

### Bayes rule

Bayes’ theorem is as follows:

$$
p(x|y)p(y)=p(y|x)p(x) \,\,\,\text{ or }\,\,\, p(y|x)=\frac{p(x|y)p(y)}{p(x)}
$$

In this theorem $p(y|x)$ represents the posterior probability. This represents the probability of an object belonging to class $y$ given its feature vector $x$.  $p(y)$ represents the prior, the initial probability of the hypothesis. $p(x)$ is the probability of the evidence, how likely it is for these features to occur. $p(x|y)$ is the likelihood of the features occuring, given the case that $y$  is true. 

Here $y=\text{state}$ and $x=\text{observation}$.

### Bayesian Networks

Representing the full joint probability distribution $P(X_1,..,X_n)$ with a table is infeasible as it requires $O(d^n)$ entries for $n$ variables with domain size $d$. Bayesian networks solve this by exploiting conditional independence to represent the distribution compactly.

- A BN is a Directed Acyclic Graph (DAG) where:
    - Nodes represent random variables
    - Edges represent direct probabilistic influences (often causal relationships).
    - Each node $X_i$ is associated with a conditional probability table (CPT), $P(X_i|Parents(X_i))$, which quantifies the influence of its parents
- Semantics: The structure of the BN encodes crucial conditional independence assumptions
    - Global semantics (Chain rule): A BN defines the full joint probability distribution as the product of the local conditional distributions from the CPTs. This is the core of its compactness.
    - Local semantics (Markov blanket): This provides a more detailed view of independence. A node is conditionally independent of all other nodes in the network given its markov blanket, which consists of its parents, its children and its children’s other parents. 
    This is crucial because it identifies the minimal set of variables needed to shield a node from the rest of the network. The children’s parents are included to account for the explaining away phenomenon. 
     For instance, if the `Alarm` goes off, `Burglary` and `Earthquake` (its parents) become dependent. Learning that an earthquake occurred "explains away" the alarm, reducing the belief in a burglary.

**Exact Inference**

1. Inference by Enumeration
2. Variable Elimination

**Approximate inference via sampling**

1. Ancestral sampling
2. Rejection Sampling
3. Likelihood Weighting

## Learning Theory

Learning in artificial intelligence is a process of induction, where theories are formed from observations. This is essential for AI agents, because it’s impossible to pre-program them with models for every situation they might face. Learning is crucial for two main reasons:

- No pre-existing model: for many complex tasks, the real problem or process is too complex to create a full model
- Adaptivity: the environment an agent operates in can change over time. Learning enables the agent to adapt to these changes, like shifting traffic patterns.

### Learning Spectrum

**Idealistic Perspective**
This view treats learning as a form of probabilistic inference. An agent maintains beliefs over a set of possible hypotheses about how the world works. It then uses Bayes’ rule to update these beliefs as it receives new observational data. 

**The Pragmatic Perspective**
The view defines learning as any process that improves an agent’s performance on a task with experience. This is often frames as an optimization problem where the goal is to fine-tune parameters to improve a performance metric. 

### Core Learning Approaches

**Maximum Likelihood (ML)**
Instead of calculating the full posterior distribution over all hypotheses, the Maximum Likelihood approach seeks to find the single hypothesis (or model parameters) that makes the observed data most probable. The goal is to maximize the likelihood function, $P(d|h)$, where $d$ is the data and $h$ is the hypothesis. For computational convenience, this is typically done by maximizing the log-likelihood: $h_{ML}=\argmax_h\sum_i\log P(d_i|h)$

**Maximum a Posteriori(MAP)**
MAP builds on ML by incorporating prior knowledge about the hypotheses. It selects the hypothesis that has the highest posterior probability, thereby balancing the likelihood of the data with the prior belief in the hypothesis. $h_{MAP}=\argmax_h P(d|h)P(h)$. Both MAP and ML are at risk of overfitting.

**Bayesian Learning**
This approach embraces uncertainty by computing the full posterior distribution over all hypotheses, $P(H|d)$. Instead of committing to a single best hypothesis, it uses the entire distribution, weighted by their posterior probabilities, to make predictions or decisions. This method is robust against overfitting because it average over all possible models. 

### Bayesian learning

Contrast with MLE

Specifying priors

Using beta distributions]

### Learning Bayesian Networks

**Parameter Learning**
If the graphical structure of the BN is known, the task if to estimate the conditional probability tables (CPTs):

- MLE: The log-likelihood of the data for a BN decomposes into a sum of terms, one for each variable. This means the parameters for each CPT can be estimated independently of the others, simply by counting the relevant occurrences in the dataset.
- Bayesian Estimation: To avoid overfitting, a prior distribution is placed on the unknown parameters. For bernoulli or categorical variables, a Beta or Drichlet distribution is used. These are conjugate priors, meaning the posterior distribution after observing data is of the same family of the prior, making updates simple. For a parameter $\theta$ with a $Beta(a, b)$ prior, after observing $k$ successes and $l$ failures, the posterior becomes $Beta(a+k, b+l)$. Predictions are then made by averaging over the full posterior distribution of the parameters.

**Structural Learning**
If the structure is unknown, it must be learned from the data. 

1. **Score-based Methods:** These methods search through the space of possible graph structures, assigning a score (like likelihood or a Bayesian score) to each one. The goal is to find the structure that maximizes the score. A penalty for model complexity is needed to prevent simply adding more edges, which always increases the likelihood.
2. **Constraint-based Methods:** These methods use statistical tests of conditional independence on the data to identify constraints on the graph structure. For example, if two variables are independent, there should be no edge between them.

A fundamental limitation is that observational data alone cannot distinguish between correlation and causation. Multiple graph structures can represent the same set of dependencies (e.g., $A \rightarrow B$ and $B \rightarrow A$) and are therefore indistinguishable without further information.

### Hidden Variables

In many real-world scenarios, not all variables in a model are observable in the data. These unobserved variables are called **latent variables** (e.g., the true `HeartDisease` in a medical diagnosis model).

Latent variable models are powerful because they can represent complex dependencies with far fewer parameters than a model built only on observed variables. However, learning the parameters for these models is notoriously difficult because the likelihood function no longer decomposes neatly. Algorithms like Expectation-Maximization (EM) are used for this task.

## Relational Probabilistic Models

### Unified Framework

Probabilistic-relational models, such as **Problog** (Probabilistic Prolog), create a unified framework by merging the descriptive power of first-order logic with the uncertainty-handling of probability theory.

**Special Cases**

Everything seen so far are just special cases of these unified frameworkds. 

### Probabilistic Prolog (Problog)

Problog is a probabilistic version of prolog.

- Probabilistic Facts: Facts are assigned a probability (e.g., `0.05::earthquake.` or `0.20::burglary.`).
- Logical rules: Clauses remain deterministic (e.g., `alarm :- earthquake.`).

To find the probability of a query $q$, Problog sums the probabilities of all possible "worlds" (models) $w$ in which $q$ is true: 
$p(q)=\sum_{w\models q} p(w)$ 
The probability of a single world $w$ is the product of the probabilities of the facts that are true in $w$ and (1 - probability) for the facts that are false in $w$.

**Problog and Bayesian Networks (BNs)**

Problog is a **generalization of Bayesian networks.** 

- Problog clauses can represent Conditional Probability Tables (CPTs). For example, `0.3 :: a.` represents a prior probability $P(a) = 0.3$, while a rule like `c :- a, b.` defines the CPT for $c$ based on its parents $a$ and $b$
- While every BN can be written as a Problog program, representing a Problog program as a BN might require one of **infinite size**.

# Preferences & Utility

## Utilities & Actions

### Decision Theory

Decision Theory is the framework for selecting optimal actions in a stochastic (uncertain) environment. How should agents act when the outcomes are not guaranteed?

Decision Theory combines two key components:

- **Probability:** What the agent believes about the world and the outcomes of its actions
- **Utility:** What the agent wants or prefers.

### Maximum Expected Utility

The central idea of decision theory is to choose the action that yields the Maximum Expected Utility (MEU).

- Utility function $U(s')$: How much the agent desires the outcome state $s'$
- Expected Utility $EU(a|b)$: for a given action $a$ and current belief $b$, the expected utility is the average utility of all possible outcomes, weighted by their probability of occuring. It is defined as: $EU(a|b) = \sum_{s'}U(s')P(s'|b,a)$.
- MEU principle: A rational agent should selection action $a$ that maximized this EU value.

This model relies on having an accurate causal model $P(s'|s,a)$ (probability of outcomes given actions) and a correct Utility Function. 

### Axioms of Utility/Preference

These are formalizations of preference. For preferences to be reasonable and representable by a utility function, they must follow specific axioms:

- **Orderability:** For any two outcomes A and B, the agent either prefers A $(A>B)$, B $(B>A)$, or is indifferent $(A \sim B)$
- **Transitivity:** If an agent prefers A over B and B over C, then the agent must prefer A over C.

When lotteries ($L=[p_1,S_1;,,,;p_n,S_n]$ over outcomes $S$) are involved, also these:

- Continuity: If $A>B>C$, there must be a probability $p$ such that the agent is indifferent between the intermediate outcome $B$ and the lottery $[p,A;1-p,C]$
- Substitutability: If an agent is indifferent between $A$ and $B$, then substituting $A$ for $B$ in any lottery will result in a lottery to which the agent is also indifferent $[p,A;1-p,B] \sim [p,B;1-p,C]$
- Monotonicity: If $A>B$, an agent prefers the lottery that assigns a higher probability ($p>q$) to the preferred outcome $A$, meaning $[p,A;1-p,B] > [q,A;1-q,B]$
- Decomposibility: Compound lotteries can be simplified or flattened into an equivalent simple lottery, which means the agent is indifferent between the compound lottery and its flattened version.

### VNM Utility Function

If an agent’s preferences obey all of these axioms of utility, the **Von Neumann-Morgenstern (VNM) theorem** proves that a Utility function $U()$ exists such that the utility of any lottery $L$ is equal to its expected utility:

$$
Q(L)=EU(L)=\sum_i U(S_i)p_i
$$

This theorem is crucial because it provides the justification for using the MEU principle. 

### Marginal Utility of Money

Decreasing utility

risk-averseness

### Diagrams

For complex problems, we can use influence diagrams to model and solve for the MEU. These are Bayesian Networks extended with two new node types:

1. **Square Action Nodes;** Represent choices the agent can make. These nodes are chosen by the agent, so they don’t have probability tables.
2. **Diamond Utility Nodes:** Represent the utility function. Their value is determined by their parent nodes ($U(\text{pass\_exam,rested})$).

A critical aspect of influence diagrams is that they must be **causally correct**. There is a fundamental difference between "observing" a variable (e.g., seeing that high-performing employees have high salaries) and "doing" an action (e.g., *setting* an employee's salary to see if it causes high performance).

To solve the diagram, the agent computes the expected utility for each possible combination of actions and selects the combination with the maximum EU.

### Challenges

The most difficult part of decision theory is defining the utility function $U()$, a problem known as **value alignment.**

- **Ethical Trade-Offs:** Specifying utility is hard. How do you assign a utility value to a human life? The ‘moral machine’ experiment shows that preferences for ethical trade-offs are not universal and vary strongly by person, and culture.
- **Misspecification:** if the utility function is even slightly wrong, an AI trying to maximize it can lead to highle undesirable and unintended behaviours.
- **Learning Preferences:** A solution is to have the AI learn preferences by observing human behaviour. However, this is also difficult:
    - Human preferences are complex, context-dependent, and culturally specific
    - Humans are not perfectly rational. It’s impossible to distinguish if an observed bad choice was due to an unusual preference or simply irrational decision making.
- **The optimizer’s curse:** When using estimated probabilities or utilities, the $max$ operator in MEU ($\argmax_aEU(a)$) is biased. It tends to select actions whose positive random estimation errors make them look better than they actually are, leading to an overestimation of the chosen action’s true values.

## Markov Decision Processes

### Components

MDP definition

Episodic vs continuing

discounting

### Optimal Policies

Value functions

Expected Discounted Return

### Bellman Equations

Policy evaluation 

optimal policies

### Dynamic Programming

Methods to evaluate optimal policies

Iterative policy evaluation

Policy iteration

Value iteration

### MCTS in planning

## Partial Observability

Reasons and impact

### Components

### Policies

Dependence on full history

Conversion to history MDP

### Beliefs

## Reinforcement Learning

### Problem Definition

Learning without a model

### Learning Types

Passive vs Active Learning

Model based vs model free

### Model free policy evaluation

Monte carlo estimation

Temporal difference learning

### Q-learning vs SARSA

Comparison (off-policy vs on-policy)

### Scaling RL

Function approximation and related challenges

### Exploration Strategies

epsilon greedy

UCB

R-Max

Balancing exploration and exploitation

## Multiagent Decision Making (Game Theory)

### Game theory concepts

Players

Rules

Strategies

Outcomes

Preferences

Utility

Pareto Efficiency

### Equilibria

Dominant Strategy

Dominant Strategy Equilibrium

Pure/Mixed Best Response

Nash Equilibrium

### Zero-sum games

Maximin technique

### Mechanism Design

Social Choice Function

Valuation

Social Welfare

### Incentive Compatability

Strategy-Proofness

Second-price Auction

Groves Mechanisms

VCG Mechanism

### Theorems

Nash

Properties of Groves VCG

Gibbard-Satterwaite

# COPY-PAST

## MDP

Here is a comprehensive summary of the lecture on Markov Decision Processes (MDPs).

## 🌍 Part 1: Representing Stochastic Problems

The lecture introduces **Sequential Decision Making (SDM)**, moving from deterministic problems (where an action has one outcome) to stochastic problems (where an action's outcome is uncertain).

### Key Concepts

- **Sequential Stochastic Problems:** Many real-world problems involve uncertainty, such as traffic, robot motor noise, or component wear and tear [cite: 96-102]. We model these using discrete time steps ($t=0, 1, 2,...$). An agent in a state $s$ takes an action $a$, and the environment (or "world") transitions to a new state $s'$ based on both the action and chance [cite: 109-111].
- **Policies (π):** In a stochastic world, a simple "open loop" sequence of actions (e.g., Up, Right, Right) is not robust, as the outcome of an action is uncertain. We instead need a **policy**, which is a **feedback plan**. A policy $\pi(s) = a$ is a mapping that tells the agent which action $a$ to take when it is in state $s$.
- **The Markov Assumption:** This is a fundamental and very strong assumption. It states that the probability of the next state $s'$ depends *only* on the current state $s$ and the action $a$ taken, not on any previous states or actions. The formal definition is $P(S_t | S_{t-1}, a_{t-1}, S_{t-2}, a_{t-2}, ...) = P(S_t | S_{t-1}, a_{t-1})$. This implies the current state $s$ must contain all information needed to predict the future.
- **Rewards and Return:**
    - To define the agent's goal, we use **rewards**. For example, in a "cliff walking" problem, reaching the goal $G$ might give a reward of +10, while falling off the cliff $C$ gives -100.
    - The agent's objective is to optimize its long-term (sum of) rewards. This sum is called the **return ($G$)**.
- **Horizons and Discounting:**
    - **Episodic/Finite Tasks:** For tasks that have a clear end (like one game of "cliff walking"), the return is a simple sum: $G = R_1 + R_2 + ... + R_T$.
    - **Continuing/Infinite Tasks:** For tasks that could run forever (like a traffic light controller) , the simple sum is infinite. We solve this by introducing a **discount factor $\gamma$ (gamma)**, where $0 \le \gamma < 1$. The **discounted return** is $G_t = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + ...$. This makes immediate rewards more valuable than distant ones.
- **Value Functions:** The **state-value function $v_{\pi}(s)$** is the *expected return* an agent can get if it starts in state $s$ and follows policy $\pi$ from that point on. It is defined as $v_{\pi}(s) = E_{\pi}[G_t | S_t = s]$.

### Formal Definition of an MDP

A Markov Decision Process (MDP) is a formal framework defined by a 4-tuple $M = <S, A, T, R>$:

- **S**: A set of all world states $s$.
- **A**: A set of all actions $a$.
- **T**: The **transition function** $T(s, a, s') = p(s' | s, a)$, which gives the probability of ending in state $s'$ after taking action $a$ in state $s$.
- **R**: The **reward function** $R(s, a, s')$, which specifies the reward received after taking action $a$ in state $s$ and landing in state $s'$.

---

## 💻 Part 2: Planning Method 1 - Dynamic Programming on Trees

"Planning" in an MDP context means using a given model ($S, A, T, R$) to compute an optimal policy $\pi$.

The first method, **Dynamic Programming (DP)**, exploits the temporal structure of the problem to compute the maximum expected utility.

### How DP on a Lookahead Tree Works

This process works *backward* from the future:

1. **Start at the end:** Identify the final time step $T$ (the "leaves" of the decision tree). The value of these terminal states is simply their given reward (e.g., $V(s_a) = 4$, $V(s_b) = 2$).
2. **Back up values:** Move to the preceding time step $T-1$.
3. **Calculate Action Values (Q-values):** For each possible action $a$ from a state $s$, calculate its expected value (Q-value). This is the immediate reward plus the *expected* value of where you might land. For example: $Q(s_a, a_1) = R(s_a, a_1) + \sum_{s'} P(s'|s_a, a_1) V(s')$.
    - In the slide's example, $Q(s_a, a_1) = 0 + (0.8 \times 4) + (0.2 \times 2) = 3.6$.
4. **Find State Values:** The value of the state $s$ at $T-1$ is the value of the *best* action you can take from it. $V(s) = \max_a Q(s, a)$.
    - In the example, $V(s_a) = \max(3.6, 3.5) = 3.6$.
5. **Repeat:** Continue this "backing up" process, calculating Q-values and V-values for $T-2$, $T-3$, etc., all the way back to the starting state $S_{now}$.
6. **Select Action:** The optimal action to take *now* is the one that led to the highest value at $S_{now}$.

### Limitations and Solutions

- **Problem:** This tree of all possible trajectories gets "huge" and is impractical to compute.
- **Solution 1: Monte Carlo Tree Search (MCTS):** Instead of building the whole tree, MCTS incrementally builds a *sampled* version, using simulated trajectories to focus on the most promising paths.
- **Solution 2: Use DAGs (Directed Acyclic Graphs):** A tree often contains many duplicate states. A DAG merges these identical states, allowing the algorithm to compute the value for each *state* just once per time step, which is much more efficient [cite: 861, 868-915].

---

## 📈 Part 3: The Value of a Policy (Policy Evaluation)

This section details a core component of the second planning method. The goal is: given a *fixed* policy $\pi$ (e.g., "always go left"), how do we calculate its value function $v_{\pi}(s)$?.

### The Bellman Equation

The value function $v_{\pi}(s)$ is defined by the **Bellman equation**, which relates a state's value to the expected value of its successor states. For a deterministic policy $\pi$:
$$v_{\pi}(s) = r(s, \pi(s)) + \gamma \sum_{s'} p(s'|s, \pi(s)) v_{\pi}(s')$$
This states: "The value of state $s$ is the immediate reward $r$ plus the discounted value $\gamma$ of the *next state* $s'$, summed over all possible next states."

### Iterative Policy Evaluation (IPE)

We can compute $v_{\pi}$ by turning the Bellman equation into an iterative update rule:

1. **Initialize:** Start with an arbitrary value function, typically $v_0(s) = 0$ for all states.
2. **Iterate:** In each iteration $k+1$, compute a new value $v_{k+1}(s)$ for *all states* using the values from the previous iteration $v_k$.
$$v_{k+1}(s) \leftarrow r(s, \pi(s)) + \gamma \sum_{s'} p(s'|s, \pi(s)) v_k(s')$$
3. **Converge:** This process is repeated $(v_0, v_1, v_2, ...)$. The sequence $v_k$ represents the "k-steps-to-go value" and is guaranteed to converge to the true value function $v_{\pi}$.

This is demonstrated in the grid-world example, where the values for each square are updated iteratively, spreading out from the goal [cite: 1128-1687].

---

## 🏆 Part 4: Computing an Optimal Policy (Policy Iteration)

This is the second main planning method, which finds the *optimal* policy $\pi_*$. **Policy Iteration** works by alternating between two steps:

1. **Policy Evaluation:** Start with a policy $\pi$. Compute its value function $v_{\pi}(s)$ using the Iterative Policy Evaluation (IPE) method from Part 3.
2. **Policy Improvement:** Use the calculated $v_{\pi}(s)$ to find a *better* policy, $\pi'$.

This process is repeated (evaluate $\rightarrow$ improve $\rightarrow$ evaluate $\rightarrow$ improve ...) until the policy no longer changes, at which point it has converged to the optimal policy $\pi_*$.

### How Policy Improvement Works

1. **Calculate Action Values (q-values):** First, use $v_{\pi}(s)$ to find the **action-value function $q_{\pi}(s, a)$**.
$$q_{\pi}(s, a) = \sum_{s',r} p(s',r|s,a) [r + \gamma v_{\pi}(s')]$$
$q_{\pi}(s, a)$ is the expected return if you take action $a$ *just once* in state $s$, and *then* follow policy $\pi$ forever after.
2. **Act Greedily:** To get the new, improved policy $\pi'$, we simply act "greedily" with respect to these q-values. For every state $s$, the new policy action is the one with the maximum q-value:
$$\pi'(s) \leftarrow \arg\max_a q_{\pi}(s, a)$$
3. **Example:** In the maze, if the current policy $\pi$ (go West) at $s(2,1)$ has a value $q(s(2,1), \text{West}) = -10$, but $q(s(2,1), \text{East}) = +8$, the new policy $\pi'$ will choose "East" for that state [cite: 1785-1787, 1805].

### Optimality and Value Iteration

- **Bellman Optimality Equations:** The optimal policy $\pi_*$ has a unique optimal value function $v_*(s)$. They are related by the Bellman Optimality Equations, which state that the value of an optimal state is the expected return from taking the *best* action from that state:
$$v_*(s) = \max_a \sum_{s',r} p(s',r|s,a) [r + \gamma v_*(s')]$$
- **Generalized Policy Iteration (GPI):** It's not necessary to run Policy Evaluation (IPE) *all the way to convergence* in each step. You can stop after just a few iterations.
- **Value Iteration:** This is the extreme case of GPI, where Policy Evaluation is run for only *one* iteration. It combines the single IPE update and the "greedy" improvement step ($\max_a$) into a single, efficient update rule.

---

### 📜 Summary of Lecture

This lecture defines stochastic decision problems using the **MDP framework** ($<S,A,T,R>$). The core challenge is the **Markov assumption**. We explored two main planning methods to solve MDPs: (1) **Dynamic Programming over a lookahead tree** (and its practical variant, MCTS) , and (2) **(Generalized) Policy Iteration**, which finds the optimal policy by alternating between **policy evaluation** and **policy improvement**.

Would you like to dive deeper into the Bellman equations or see a step-by-step example of Value Iteration?

## POMDP

Here is a rigorous summary of the lecture slides on Partially Observable Markov Decision Processes (POMDPs).

## 🧠 Summary of Lecture 09: Partial Observable MDPs

This lecture introduces **Partially Observable Markov Decision Processes (POMDPs)** as an extension of standard MDPs. The core problem they address is what to do when the agent's state is not fully observable. Instead of knowing its exact state $s$, the agent receives an **observation $o$**, which provides only partial information about the true state.

---

### Part 1: What is a POMDP?

In a standard MDP, an agent's policy $\pi(s)$ is a direct mapping from a known state to an action. In a POMDP, this is impossible.

- **Example: Predator-Prey**
    - In an **MDP**, the state $s$ could be the relative coordinates of the prey, e.g., $s=(-3, 4)$.
    - In a **POMDP** with limited sensor range, the agent might not see the prey, resulting in an observation $o = 'none'$. If the prey moves into range, the observation might become $o = (-1, 1)$. The agent sees $o$, not the true state $s$.
- **Types of Partial Observability**
    1. **Noise:** Sensors can have measurement errors or fail.
    2. **Perceptual Aliasing:** This occurs when multiple, distinct states produce the exact same observation, making them indistinguishable.
- **Formal Definition**
A POMDP is formally defined as a tuple $M = <S, A, O, P_{Tr}, P_O, R>$. It extends the MDP definition ($S, A, P_{Tr}, R$) with two new components:
    1. **$O$**: A set of possible observations $o$.
    2. **$P_O$**: An observation function, $P(o | a, s')$, which gives the probability of receiving observation $o$ after taking action $a$ and landing in the new state $s'$.
- **Policies in POMDPs**
Since the current state is unknown, an agent cannot base its action on the current observation alone. It must instead use its entire **history** of past actions and observations to make a decision. A history is defined as $h_t = (a_0, o_1, a_1, ..., a_{t-1}, o_t)$.

---

### Part 2: From Histories to Beliefs

While policies can be based on histories, this approach is computationally infeasible.

- **The Problem with Histories:** The number of possible histories grows exponentially with time. The number of possible policies is **doubly exponential** in the time horizon $T$ (approximately $|A|^{|O|^T}$), making it impossible to plan by searching the tree of all histories.
- **The Solution: Beliefs**
Instead of tracking the full history, we can track a **belief** $b(s)$.
    - **Definition:** A belief is a **probability distribution over states**, given the agent's history so far.
    - **Formula:** $b(s) \triangleq P(s | h_t)$.
    - **Sufficient Statistic:** The belief $b(s)$ is a **sufficient statistic**. This means the belief contains all relevant information from the past history needed to make an optimal decision. All histories that result in the same belief are equivalent for planning.
- **The Belief MDP**
By using beliefs, we can reformulate the POMDP as a "Belief MDP". In this new, continuous-state MDP, the beliefs $b$ act as the states. We can then define value functions over these beliefs, such as $V(b)$ and $Q(b, a)$.

---

### Part 3: Computing Beliefs (Belief Tracking)

To use a belief MDP, the agent must be able to update its belief after each action and observation. This process is a probabilistic inference problem.

- **Graphical Model:** A POMDP can be represented graphically as an influence diagram. If we fix the agent's actions, the model simplifies to a **Hidden Markov Model (HMM)**. The states $S_t$ are hidden, and the observations $O_t$ are visible.
- **Belief Tracking (Filtering):** The task of computing the current belief $P(s_t | o_0, ..., o_t)$ is known as **filtering** or **belief tracking** in HMMs.
- **Belief Update with Bayes' Rule:** The new belief $b'(s')$ is computed from the previous belief $b(s)$, the action $a$, and the new observation $o$ using Bayes' rule.

The update formula is:
$b'(s') = \eta \times P(o | a, s') \times \sum_{s \in S} P(s' | s, a) b(s)$

Where:

- $\eta$ is a normalization factor ($1 / P(o | b, a)$).
- $P(o | a, s')$ is the **Observation Function**.
- $\sum_{s \in S} P(s' | s, a) b(s)$ is the **Transition Function** applied to the previous belief (predicting the probability of being in state $s'$ *before* the observation).

---

### Part 4: Planning for POMDPs

Once an agent can update its belief, it needs a policy $\pi(b)$ to select an action $a$. The lecture covers three approaches.

### 1. Heuristic: Most Likely State (MLS)

This is a simple, heuristic approach.

- **How it works:**
    1. Solve the original MDP (ignoring partial observability) to get an MDP policy $\pi_{MDP}(s)$.
    2. At each step, update the belief $b$.
    3. Find the single state $s_{ML}$ that is most probable: $s_{ML} = \arg\max_s b(s)$.
    4. Execute the action $a = \pi_{MDP}(s_{ML})$.
- **Drawback:** This method is very simple but completely ignores uncertainty. It performs **no information gathering** (e.g., it would never "Listen" in the Tiger Problem).

### 2. Heuristic: QMDP

This is a more intelligent heuristic that accounts for uncertainty.

- **How it works:**
    1. Solve the original MDP to get the optimal $Q_{MDP}(s, a)$ values.
    2. At each step, update the belief $b$.
    3. Calculate the *expected* Q-value for each action $a$ by averaging over the belief: $Q_{MDP}(b, a) = \sum_s b(s) Q_{MDP}(s, a)$.
    4. Execute the action $a$ with the highest $Q_{MDP}(b, a)$ value.
- **Drawback:** QMDP is better, but it still **does not value information-gathering**. It assumes that after the current action, the state will become fully known, which is not true in a POMDP.

### 3. Exact Solution: The PWLC Property

The true value function for a POMDP (defined over the continuous belief space) has a special property: it is **Piecewise-Linear and Convex (PWLC)**.

- **How it works:**
    - The 1-step-to-go value function is composed of a set of linear "reward vectors," one for each action. The optimal value $V(b)$ is the "upper surface" of these lines.
    - This PWLC property holds for any finite horizon $t$.
    - Exact POMDP algorithms perform a form of value iteration by manipulating these sets of vectors to find the optimal value function. This correctly captures the value of information-gathering.

## RL

Here is a rigorous summary of the lecture slides on Reinforcement Learning.

## 🧠 What is Reinforcement Learning?

In standard Markov Decision Process (MDP) planning, an agent is **given** a complete model of the environment: the set of states ($S$), actions ($A$), the transition model ($p(s'|s, a)$), and the reward function ($R(s, a)$) [cite: 154-162]. The goal is simply to compute the optimal policy $\pi^*$.

**Reinforcement Learning (RL)** addresses the more realistic scenario where this model is **unknown**. The agent knows the possible states and actions , but it does not know the transition probabilities or the rewards. It must interact with the environment to *learn* an optimal policy $\pi^*$ that maximizes its value (expected future rewards).

This lecture assumes the environment is a fully observable MDP (no state uncertainty)  and focuses on how an agent can learn in this unknown setting.

---

## 🧭 Overall Approaches to RL

There are two high-level strategies an agent can adopt:

1. **Model-Based RL**
    - The agent first tries to **learn the model** ($$T$$ and $$R$$) from its experiences.
    - It estimates the transition probabilities and reward function based on observations.
    - Once it has this estimated model, it can **use planning algorithms** (like Value Iteration or Policy Iteration) to find the optimal policy, just as if it had been given the model from the start.
2. **Model-Free RL**
    - The agent **does not** try to learn the transition or reward models.
    - Instead, it learns the optimal policy or its value function *directly* from observed experience. This category is further split:
        - **Value-Based:** Learn the optimal action-value function, $$Q^*(s, a)$$.
        - **Policy Search:** Directly optimize the parameters of the policy, $$\pi$$.

---

## passive vs. Active Learning

A crucial distinction in RL methods is the agent's goal:

- **Passive Learning (Policy Evaluation)**
The agent's policy $$\pi$$ is **fixed**. It is not trying to find a *better* policy. Its only goal is to learn the value function $$V_\pi(s)$$ (i.e., "what is the expected return if I follow this specific policy $$\pi$$ from state $$s$$?"). This is a key step used within policy iteration.
- **Active Learning (Control)**
This is the full RL problem. The agent must **learn the optimal policy $$\pi^*$$** by actively exploring the environment and updating its actions to maximize its value. This introduces the **exploration vs. exploitation** dilemma.

---

## 1. Model-Based RL Methods

### Adaptive Dynamic Programming (ADP)

This is the most straightforward model-based approach.

- **Passive (Policy Evaluation):** To learn $$V_\pi(s)$$ for a fixed policy $$\pi$$, the agent observes transitions $$(s, r', s')$$. It learns the (simplified) model by counting:
    - $$N[s]$$: times state $$s$$ was visited.
    - $$N[s', s]$$: times $$s \rightarrow s'$$ transition occurred.
    - **Learned Transition Model:** $$P(s'|s) \approx N[s', s] / N[s]$$.
    - **Learned Reward Model:** $$R(s, s') = r'$$ (storing the observed reward).
    - With this learned model, it can then solve for $$V_\pi(s)$$ (e.g., using successive approximation).
- **Active (Control):** To learn $$\pi^*$$, the agent observes full transitions $$(s, a, r', s')$$. It learns the full model by counting:
    - $$N[s, a]$$: times action $$a$$ was taken in state $$s$$.
    - $$N[s', s, a]$$: times $$(s, a) \rightarrow s'$$ transition occurred.
    - **Learned Transition Model:** $$P(s'|s, a) \approx N[s', s, a] / N[s, a]$$.
    - **Learned Reward Model:** $$R(s, a, s') = r'$$.
    - It then uses this learned model with **Value Iteration** or **Policy Iteration** to find the optimal policy.

> Problem: This "maximum likelihood" model is very prone to overfitting. An agent might find a "local optimum" and never explore parts of the state space that could be more rewarding.
> 

---

## 2. Model-Free Passive Learning (Policy Evaluation)

Goal: Find $$V_\pi(s)$$ for a fixed policy $$\pi$$, but **without** learning a model.

### Monte Carlo (MC) Prediction

- **Also known as:** "Direct Utility Estimation".
- **Idea:** The value $$V_\pi(s)$$ is the expected (discounted) sum of future rewards, called the **return** $$G(s_t)$$.
- **Method:**
    1. Execute the fixed policy $$\pi$$ many times to generate full "episodes" (sequences from start to end).
    2. For every time a state $$s$$ was visited in an episode, calculate the *actual* return $$G(s_t) = r_t + \gamma r_{t+1} + \gamma^2 r_{t+2} + ...$$ that followed.
    3. Estimate $$V_\pi(s)$$ by simply **averaging all the observed returns** $$G(s_t)$$ that started from $$s$$.
- **Properties:**
    - **Unbiased:** Converges to the true $$V_\pi(s)$$.
    - **High Variance:** Requires many episodes to get a stable average.
    - **Offline:** Must wait until the end of an episode to calculate the return $$G(s_t)$$ and update the value.

### Temporal Difference (TD) Learning

- **Idea:** Don't wait for the end of an episode. Use "bootstrapping" : after taking one step $$(s, r, s')$$, update the value of $$s$$ using the *current estimate* of the value of $$s'$$, $$V_k(s')$$.
- **Method:** After observing a transition $$(s, r, s')$$, perform the update:
$$V(s) \leftarrow V(s) + \alpha [r + \gamma V(s') - V(s)]$$
    - $$\alpha$$ is the learning rate.
    - The term $$\delta = r + \gamma V(s') - V(s)$$ is the **TD error**: the difference between the old estimate $$V(s)$$ and the new, better estimate $$r + \gamma V(s')$$.
- **Properties:**
    - **Biased:** The update target $$r + \gamma V(s')$$ is biased because it uses $$V(s')$$, which is itself an estimate.
    - **Low Variance:** Much lower variance than MC because it's based on one step, not a full, noisy return.
    - **Online:** Can update the value of $$s$$ immediately after a single step.
    - **Converges:** It is guaranteed to converge to the true $$V_\pi(s)$$.

---

## 3. Model-Free Active Learning (Control)

Goal: Find the optimal policy $$\pi^*$$ (by finding $$Q^*(s, a)$$) **without** learning a model.

### Q-Learning (Off-Policy)

- **Idea:** Apply the TD learning concept to the action-value function $$Q(s, a)$$.
- **Method:** After observing a transition $$(s, a, r, s')$$, perform the update:
$$Q(s,a) \leftarrow Q(s,a) + \alpha [r + \gamma \max_{a'} Q(s', a') - Q(s,a)]$$
- **Key Property (Off-Policy):** The update uses $$\max_{a'} Q(s', a')$$. This is the estimated value of the *optimal* action from state $$s'$$. This means Q-learning learns the optimal $$Q^*$$ **regardless of what policy the agent is actually following**. It can be exploring randomly but will still learn about the greedy policy. It converges to $$Q^*$$.

### SARSA (On-Policy)

- **Idea:** Update $$Q(s, a)$$ based on the *actual* action, $$a'$$, that the agent *actually* takes in the next state $$s'$$.
- **Method:** The agent must observe the *entire* sequence $$(s, a, r, s', a')$$. The update is:
$$Q(s,a) \leftarrow Q(s,a) + \alpha [r + \gamma Q(s', a') - Q(s,a)]$$
- **Key Property (On-Policy):** Because the update uses $$Q(s', a')$$ (where $$a'$$ is from the current policy), SARSA learns the value $$Q_\pi$$ **for the policy $$\pi$$ it is currently following**. To find $$Q^*$$, the policy $$\pi$$ must be gradually improved (e.g., made more greedy) over time.

---

## 4. Scaling Up: Function Approximation

- **Problem:** All methods above are **tabular**: they require storing a value for every single state $$s$$ or state-action pair $$(s, a)$$. This is impossible for problems with huge state spaces (e.g., chess or Atari games).
- **Solution:** Use **function approximation** (e.g., a deep neural network) to estimate the value function.
    - Instead of a table, the agent learns a parameter vector $$\mathbf{w}$$.
    - The network takes state features $$\mathbf{x}(s)$$ (e.g., pixel data) as input and outputs $$V(s; \mathbf{w})$$ or $$Q(s, a; \mathbf{w})$$.
- **Updates:** The update rules are modified to update the parameters $$\mathbf{w}$$ using gradient descent. For example, the TD update for linear function approximation ($$V(s; \mathbf{w}) = \mathbf{w}^T \mathbf{x}(s)$$ ) becomes:
$$\mathbf{w} \leftarrow \mathbf{w} + \alpha [r + \gamma V(s'; \mathbf{w}) - V(s; \mathbf{w})] \mathbf{x}(s)$$
- **The "Deadly Triad":** Caution is required when combining:
    1. Function Approximation
    2. Bootstrapping (like TD and Q-learning)
    3. Off-Policy Learning (like Q-learning)
    This combination is known as the "deadly triad" and can cause the algorithm to become unstable and **diverge** [cite: 647-651, 1049]. On-policy methods like SARSA tend to be more stable when used with function approximation.

---

## 5. Policy Search Methods

This is an alternative to value-based methods.

- **Idea:** Instead of learning a value function, directly parameterize the policy $$\pi(a|s; \mathbf{w})$$. The goal is to update the parameters $$\mathbf{w}$$ to find the policy that produces the highest returns.
- **REINFORCE:** A common policy gradient algorithm that updates $$\mathbf{w}$$ based on the observed return $$u(s_t)$$.
- **Actor-Critic Methods:** A hybrid approach that combines the best of both worlds.
    - **The Actor:** The policy $$\pi(a|s; \mathbf{w})$$ that chooses actions.
    - **The Critic:** A value function $$V(s)$$ or $$Q(s, a)$$ that evaluates ("criticizes") the actor's actions.
    - The critic's feedback helps the actor update its policy, which reduces the high variance that pure policy gradient methods suffer from.

---

## 6. The Exploration Problem

Active learning requires a solution to the **explore-exploit trade-off**.

- **Simple Exploration:** A common strategy is **$$\epsilon$$-greedy** (epsilon-greedy): With probability $$\epsilon$$, take a random action (explore); otherwise, take the action with the highest current $$Q$$-value (exploit).
- **Exploration in Sequential Problems:** This is much harder than in simple (bandit) problems. To learn about an unknown $$(s, a)$$ pair, the agent must first *plan how to get to state $$s$$*.
- **R-Max Algorithm:** A model-based solution that encourages "optimism in the face of uncertainty".
    1. Initialize a model where all *unknown* $$(s, a)$$ pairs are assumed to give the **maximum possible reward ($$R_{max}$$)**.
    2. The agent then uses a planner on this optimistic model. The planner will automatically generate plans that *seek out* these unknown states, believing they are highly rewarding.
    3. An $$(s, a)$$ pair is only considered "known" (and its model updated to its *actual* observed reward/transition) after it has been experienced $$m$$ times [cite: 798, 805-807].