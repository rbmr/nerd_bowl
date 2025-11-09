
Lecture 1: Introduction
- Relational databases organize data into tables, between which relationships may be defined. 

Lecture 2: Data models
- The domain of discourse is the set of all possible objects, entities, or concepts relevant to a specific argument, discussion, or logical statement.
- Schema design is about going from the domain of discourse through:
	- conceptual design: What do we need to store (Entities), and how are things related (Relationships)? -> Conceptual Schema
	- logical design: Adapt conceptual design to the Data Model (e.g. relational) used by the database. -> Logical Schema.
	- physical design: Implementing the logical design for a particular database.
- Database: Collection of related data represented using a data model and a data schema.
- Database Management System (DBMS): A software system managing and maintaining a database.
- Data Model: A formal definition of how to represent data (in general) and the available data operations. Three components: 
	- Structure (Data Structures used), 
	- Integrity (Constraints on data structures to ensure integrity), 
	- Manipulation (Options for data querying and manipulation).
	- Examples:
		- The Relational Data model. Entities are tables, linked using foreign keys, queried using SQL.
		- Single Table Model. High redundancy. 
		- Document Model. Semi-structured text documents. JSON, or XML. 
- Data Schema: A definition of the specific structure of a database.
- Entity Relationship diagram: conceptual schema describing entities and their relationships. Examples: Chen-ER, ER Crow's Foot Notation, ER Baker Notation, UML. 
- Ontology tries to describe everything which is (exists), and its relation and categorization with respect to other things in existence.
- Functional dependencies: define which (set of) attributes are dependent on which other (set of) other attributes. Candidate keys are the subsets of attributes that fully define all others for a tuple. Primary keys are the chosen candidate keys to unique identify the tuple.
	- Example: Postal code + House number in the Netherlands.
- A weak entity is an entity that is co-identified by another (strong) entity. 
- ER (Entity-Relationship) Diagrams:
	- Entity Types: Classes of objects having common properties and autonomous existence.
	- Relationship Types: Binary (Relates two entities), Ternary (Relates three entities), Recursive (Relates an entity to another of the same entity type).
	- Cardinality: describes the maximum and minimum number of relationship occurrences in which an entity can participate.
		- Maximum (Cardinality Ratio): 1 (at most one), N (any number)
		- Minimum (Participation Constraint): 0 (optional), 1 (mandatory or total)
	- Attributes: describe the elementary properties of entities or relationships. May also have some cardinality. May be composites (combination of attributes), or derived (from other attributes, ex. age from Birth Date).
	- Weak Entities: Sometimes the attributes of an entity are not sufficient to identify its occurrences unambiguously. Other entities are involved in identification. The relationship relating an entity to its owner is the identifying relationship.
	![[Pasted image 20251106140544.png|400]]
- EER (Enhanced-ER) is an extension of ER that allows for more complex requirements:
	- Specialization (top-down): You define specific subgroups (subclasses) for a general entity.
	- Generalization (bottom-up): You find several entities with common features and create a new more general entity (a superclass). 
	- Disjoint vs Overlapping: An instance of a superclass can be in only one subclass (disjoint) or in multiple (overlapping).
	- Total vs Partial: Every instance of the superclass belongs to at least one subclass (total), or some instances may just belong to the superclass (partial).
	- Category (or union type): A category models an entity (subclass) that is a union of different superclasses. 
- Aggregate Data: Treat a collection of related data as a single unit. This is different from the relational model which encourages to decompose into multiple separate tables. Examples:
	- Key-value models: Treat each of the aggregates as a value, accessible only by a unique key.
	- Document models: Key-value, but the values follow a specified structure allowing queries on data inside the aggregate (e.g. JSON, XML)
	- Column-Family Models: store data in a large, sparse table where a row key identifies an aggregate and "column families" group related data within that aggregate.

Lecture 3: Discovering Data
- SQL: Declarative Language: Describes the desired result without specifying how to compute it.
- Relational Algebra: Procedural Language: Shows step-by-step procedure for computing the result. Components:
	- Basic: Selection $\sigma$, Projection $\pi$, Rename $\rho$, Union $\cup$, Intersection $\cap$, set difference $\setminus$, Cartesian product $\times$.
	- Extended: Theta-join $⋈_{(θ-\text{cond})}$, Equi-join $⋈_{(=-\text{cond})}$, Natural Join $⋈$
	- Advanced: Aggregation $\gamma$, Outer joins.
- Data Lake: flexible, scalable data storage and management system where raw data from different sources can be ingested in their original (structured or unstructured) format.
- Data Warehouses: store data in a structured format. 
- Data lake architectures:
	- Pond: partitions ingested data by their status and usage.
	- Zone architecture: Separates dataset standardization into different stages.
	- Function-based architecture: Big jumble mess
- Data Discovery: Finding relevant or related data. 
	- Data lakes use metadata to store relationships between datasets. 
	- Jaccard Similarity: $s(X,Y) = |X \cap Y| /|X \cup Y|$
	- Set containment: $t(X, Y) = |X \cap Y|/|X|$ size agnostic for $Y$
	- Set overlap: $o(X,Y)=|X\cap Y|$
- Aforementioned methods cannot be feasibly computed for large data lakes. Se we approximate, trading speed less computation for less accuracy. 
	- Local Sensitive Hashing (LSH): Similar objects wind up in the same bucket while other pairs rarely do. Steps:
		- Shingling: k-shingle for a document is a sequence of k characters that appear in the document. Compute multiple such shingles. Then create a set of all shingles that occurred in the document.
		- Min-hashing: 
			- The input matrix has a column for each of the sets, and a row for each of the possible set elements. Each element in the matrix is a zero if the set did not contain the element, and a one if it does. 
			- The min hash function $h(C)$ is the index of the first row in which column $C$ has a one. We apply the min hash function to all columns across several ($b\cdot r$) randomly chosen permutations to create a signature for each column. 
			- Result is a signature matrix where the columns are the sets, rows are the permutations, and the elements are the corresponding min hash values.
		- Locality-sensitive hashing (LSH): 
			- We divide the signature matrix into $b$ bands (of $r$ rows).
			- For each band, hash each of the columns, and divide into $k$ buckets.
		- The approximation of the Jaccard similarity is then the percentage of bands for which two sets end up in the same buckets.
	- Lazo: is an LSH index that uses OPH/MinHash, supporting both set containment and jaccard similarity, and returns similarity scores. 
	- JOSIE: Exact top-k search for finding joinable tables. Given a query column $Q$ find top-$k$ columns ($X_1, \dots X_k$) from the data lake with the highest set overlap size $|Q \cap X_i|$. JOSIE is a drop-in component utilizing inverted index for finding joinable tables.
		- Generate Inverse Index: We generate a mapping from values to columns containing the value, for each value in the dataset. Downside: inverse index is enormous.
		- When querying, you go through each of the values in the query column and look them up in the inverted column index to find matching columns. Count which columns match most often, giving the result.
		- This is quite slow, so we optimize:
			- Prefix filtering: Since we are only looking for top-$k$ we can give up on a candidate column early if its not going to make it.
			- Position filtering: Store the position of the value in the column aswell, not just its presence. This allows for more efficient complex queries.
	- SilkMoth: Make related set discovery faster. Set similarity, set containment, but also applicable where similar values are formatted differently.

Lecture 4: Obtaining data
- The WordNet hierarchy is a hierarchical structure of English words, organized by semantic relationship. 
- The ImageNet dataset is built on the WordNet hierarchy, and aimed to map the entire world of objects. The paradigm shift of ImageNet was to focus on data while others were focused on the models.
- Unlabeled data is generally available, obtaining labels is the most difficult. This requires an enormous amount of annotation. To ensure quality of labels, workers were quizzed with questions to which the correct label was already known.
- Active Learning: An ML model can achieve greater accuracy with fewer training instances if it is allowed to choose the data from which it learns best. 
	- This means less labels are required, reducing human effort. 
	- The cycle: model selects most informative unlabeled data, human labels them, and the new labels are added to the training set. 
	- Query strategies: we focus on being able to distinguish the hard ones.
		- uncertainty: the model asks for labels on instances its the least confident about.
		- committee: multiple models are maintained, and they select the instance they most disagree on.
	- Active Learning from Crowds: the system must select both the best instances, AND the most reliable workers.
- Human-based Model evaluation:
	- Standard metrics are often not enough. 
	- Local interpretable model-agnostic explanations (LIME): A method used to provide explanations by showing which components of an instance contributed to a model's prediction.
	- With explanations, humans can select better classifiers (even if they perform worse on standard metrics), and improve models by identifying relevant features.
	- Debugging pipelines: In complex ML pipelines, each component may be the bottleneck for the pipelines performance. Humans are needed to identify the weakest link.
- Paradox of Automation: The desire to eliminate human labour always generates new tasks for humans.
- Crowdsourcing: the act of taking a job traditionally performed by a designated agent and outsourcing it to an undefined, generally large, open, group of people.
- Malicious workers are workers with ulterior motives, who either simply sabotage a task, or provide poor responses in an attempt to quickly attain task completion for monetary gains.

Lecture 5: Data Quality
- Data Quality dimensions:
	- Accuracy: Do the data values correspond to the real world values.
	- Completeness: Does the data capture represent all meaningful real-world states.
	- Staleness: Extent to which the data is outdated for the task.
	- Consistency: Extent to which data is presented in a format compatible with previous data.
	- Duplication: Measure of unwanted duplication existing within or across a system.
- Data Quality Metrics.
- Functional dependencies (FDs): Let X and Y define some sets of attributes, if Y is functionally dependent on X, and two tuples agree on their X values, then they also have to agree on their Y values. May be defined on only a subset of the data (Conditional FDs). Can be discovered.
- Integrity constraints: declarative language to express data quality rules. May include an ad-hoc repair algorithm to repair violations. 
- Cross Industry Standard Process for Data Mining (CRISP-DM)
	- Business Understanding: Fully understand the business problem, formulate a solution.
	- Data Understanding: Fully understand the data available.
	- Data Preparation: Convert the data sources in a usable format.
	- Modeling: Apply ML to build a range of models, select the best model for deployment.
	- Evaluation: Determine if the model will be able to make accurate predictions.
	- Deployment: Integrate the model in a process in the organization
	![[Pasted image 20251106194043.png|400]]
- Most common data quality issues: 
	- Missing Values: remove feature with missing values, remove rows with missing values, impute missing values. 
	- Outliers: informed clamp

Lecture 6: Data Integration
- Data Integration (DI) studies the problem of combining multiple heterogeneous data sources and providing unified data access for the users.
- Schema matching: discovering the correspondences among the given source schemas.
- Schema merging: process of combining several related source schemas and building the global schema.
- Schema mapping: converting source schema to global schema
	- GAV (global-as-view, global-schema-centric): The global schema is defined in terms of the sources.
	- LAV (local-as-view, source-centric): The sources are defined in terms of the global schema.
	- GLAV (combination of GAV and LAV)
	- We can define this using first order logic.
- Data matching: identifying records from one or more datasets that refer to the same entity.
- Query Equivalence: Two queries are equivalent if they produce the same result for all legal databases.
- Query Containment: A query $q$ is contained in another $q'$ if the result of $q$ is a subset of the result of $q'$ for all legal databases.
- Undecidable for many query languages.

Lecture 7: Storing/Retrieving Structured Data
- How to find data fast.
- Register -> Cache -> Main Memory -> Hard Disk -> Tertiary Storage
- HDD: Disk Strcture -> aint no way
- Hard Disk Buffers -> Blocks from disk are loaded in memory, this is the main bottleneck.
- Dominance of IO-costs: The cost of transferring a block from disk (or cloud storage) to main memory is orders of magnitude larger than the cost of operations in main memory.
- Ways to reduce IO: Index Structures
	- Hash indexes
	- B+ trees
- B-trees adapt concepts and techniques learned for binary trees and optimize them for hard disk storage. 
- 

Lecture 9: Storing/Retrieving Structured Data
Lecture 10: Basics of Data Visualization
Lecture 11: Interactive Visual Data Analysis
Lecture 12: Storying/Querying Unstructured Data