
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
	![[Pasted image 20251106140544.png]]
- EER (Enhanced-ER) is an extension of ER that allows for more complex requirements:
	- Inheritance: Subclasses and Superclasses, Specialisation and Generalisation.
- 

Lecture 3: Discovering Data
Lecture 4: Obtaining Data 
Lecture 5: Data Quality and Coding
Lecture 6: Data Integration
Lecture 7: Introduction to Data Mining with Text and Graphs
Lecture 8: Storing/Retrieving Structured Data
Lecture 9: Distributing Structured Data
Lecture 10: Basics of Data Visualization
Lecture 11: Interactive Visual Data Analysis
Lecture 12: Storying/Querying Unstructured Data