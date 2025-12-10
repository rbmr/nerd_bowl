
Constraint Programming
- We want to solve combinatorial optimisation problems, which in general are NP-hard.
- Rather than writing a (clever) custom algorithm to solve a given problem, we use existing generic solvers. This requires modeling:
	- Define the parameters (the data, already known)
	- Define the decision variables (to be determined) and their domains.
	- Define the constraints (expressed over the variables)
	- Define the objective function or functions (over the variables)
- Feasible solution: assignment to all decision variables s.t. all constraints are satisfied.
- Optimal solution: solution that has the best objective function value of all solutions.
- Rather than implementing a model for a specific solver, we use a higher-level modelling language, e.g. pyopt, or MiniZinc. Which may then have multiple solvers.
- A solver is complete if it is guaranteed to find the optimal solution, another may be optimal guaranteeing the solution found is optimal, some do not.
	- In practice true optimality is less important, good enough, and satisfying the constraints is generally sufficient.

Expressiveness
- A more expressive modelling methodology lets us:
	- Say more. More types of variables, More types of constraints. 
	- Say things more naturally. Easier for humans to read and write.
- In general, more expressive modelling methodologies imply models that are more difficult to solve. Some problems can be modelled using less expressive methodologies. 
- 

- 