
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
- Entity Relationship diagram: conceptual schema describing entities and their relationships. Examples: UML and Chen-ER. 

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