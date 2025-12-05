### Phase 1 - Inventory
```
**Task:** Create a raw "Data Inventory" of this chapter.
**Constraint:** Do not summarize. Do not organize. Do not interpret.

**Output Requirements:**
1. **List of Terms:** Extract every bolded term or italicized definition.
2. **List of Formulas:** Extract every mathematical equation (inline or block).
3. **List of Variables:** List every variable notation (e.g., $\alpha$, $\beta$) and its definition.
4. **List of Graphs:** Describe the axes and the curve behavior for every graph mentioned.

**Goal:** This list will be used to audit a future summary. If it is in the text, it must be in this list.
```
### Phase 2 - Structure
```
**Role:** You are an expert Knowledge Architect and Data Scientist managing a personal knowledge vault in Obsidian. You specialize in structuring complex academic information (specifically Economics and Quant Finance) into "Atomic Concepts."

**Context:**
I have provided a PDF containing a single chapter from *Microeconomics and Behavior* by Robert Frank.
I have also provided a `README.md` defining the philosophy of my vault.
**Crucial Vault Philosophy:**
1.  **Context vs. Truth:** We decouple the source (this book chapter) from the concept (the universal truth).
2.  **Atomic Notes:** Notes should be reusable definitions, theorems, or algorithms (`[[Concept Name]]`), not specific to the course.
3.  **Hierarchy:** We use Maps of Content (MOCs) to organize these atomic notes.

**Your Task:**
Analyze the provided PDF chapter and generate a **Hierarchical Map of Content (MOC)** structure representing all the knowledge covered in this chapter.

**Guidelines for Extraction & Grouping:**
1.  **Identify Atomic Concepts:** Extract every definition, mathematical formula, theorem, and distinct algorithm.
2.  **Determine Granularity (The "Split" Decision):**
    * Decide if a topic deserves its own `[[WikiLink]]` (a standalone file) or if it should be a sub-bullet/heading within a broader concept.
    * *Rule of Thumb:* If "Concept A" is a strict subset or a minor variation of "Concept B," group them. (e.g., `[[Utility Functions]]` might contain sub-points for "Cobb-Douglas" and "Perfect Substitutes" if they are briefly defined, rather than making separate files for every single function type).
3.  **Naming Standards:** Use standard, universal academic terminology for the links (e.g., `[[Diminishing Marginal Utility]]` instead of `[[Frank's Utility Idea]]`).
4.  **Math:** Use LaTeX formatting for any formulas included in the hierarchy descriptions.

**Output Format:**
Please provide the response in two parts:

**Part 1: Conceptual Reasoning**
Briefly explain your logic for how you grouped the major topics. Why did you choose certain concepts as the "Parent" notes?

**Part 2: The MOC Hierarchy**
Provide a Markdown list representing the structure. Use the following syntax:
* `[[Major Concept Name]]` (The standalone note)
    * `[[Sub-Concept / Related Concept]]` (If it warrants its own note but is a child of the above)
    * *Topic/Heading* (A specific aspect, property, or formula that belongs **inside** the parent note, not as a new file).

**Example Output Style:**
* `[[Consumer Preferences]]`
    * *Completeness, Transitivity, and Monotonicity (Axioms)*
    * `[[Indifference Curves]]`
        * *Marginal Rate of Substitution (MRS)* $$MRS = \frac{MU_x}{MU_y}$$
        * *Convexity property*
* `[[Budget Constraint]]`
    * *Effects of price changes (Rotation)*
    * *Effects of income changes (Shift)*

**Action:**
Please analyze the attached chapter and generate the hierarchical MOC now.
```
### Phase 3 - Generate
```
**Role:** You are the same expert Knowledge Architect and Quant Finance Data Scientist. We are now populating the Obsidian vault based on the structure we defined previously.

**Input:**
I will provide you with a specific **Section of the Map of Content (MOC)** that we generated earlier.
I have attached the source PDF chapter.

**Task:**
For the specific section provided below, generate the actual detailed Note Content. You must be rigorous, exhaustive, and academically precise.

**Vault Philosophy Reminders:**
1. **Universal Truth:** Define concepts as they exist in general Economic theory, not just how Frank defines them.
2. **Context Separation:** If the book uses a specific specific narrative example, keep that separate from the mathematical definition.
3. **Math:** Use LaTeX ($$...$$) for all standalone formulas and ($...$) for inline math.

**Content Requirements & Guidelines:**
For every `[[WikiLink]]` listed in the Input Section, generate a comprehensive Markdown note. Instead of a fixed template, you must structure the note dynamically to best suit the concept, ensuring the following **Essential Components** are present and rigorously detailed:

1.  **Formal & Academic Definition:**
    * Provide the precise economic definition as a universal truth (agnostic of the specific textbook's narrative).
    * If applicable, explicitly list the *axioms* or *assumptions* required for this concept to hold true.

2.  **Mathematical Rigor (If applicable):**
    * **Crucial:** You must define every variable used in a formula immediately after the equation (e.g., "Where $\alpha$ represents...").
    * Include ALL derivations or proofs if they are present in the text.
    * If the text explains concepts with mathematical variables, or shows any form of mathematical notation, use this in the concept epxlanation. Also quickly explain what these variables represent. 

3.  **Properties & Dynamics:**
    * Address the sub-bullets from the MOC input (e.g., "Convexity," "Transitivity").
    * Explain the *implications* of these properties (e.g., "Why does convexity matter for optimization?").
    * Include ALL edge cases or constraints mentioned in the text.

4.  **Source Context Separation:**
    * Keep the book's narrative separate from the definition.
    * Create a distinct section (e.g., "### Illustrative Examples") to summarize how the author (Frank) explains this. Use the specific scenarios found in the text here, distinct from the general theory.

**Formatting & Style Rules:**
* **Atomic & Modular:** Each note should be self-contained.
* **High Signal-to-Noise:** Be concise but exhaustive. Use bullet points for lists of properties.
* **Visual Hierarchy:** Use H3 (`###`) and H4 (`####`) headers to organize the data logically.
* **Constraint:** If a specific component (like a formula, or definition) is not present in the source text, skip it. Do not invent math or definitions that aren't there.

**Input Section to Process:**
"""
[PASTE ONE MAJOR BRANCH FROM YOUR MOC HERE, e.g.:
* [[Consumer Preferences]]
    * *Completeness, Transitivity...*
    * [[Indifference Curves]]
        * *MRS*...]
"""

**Instruction:** Provide the full content for the concepts listed above. Do not summarize; be exhaustive.
```
### Phase 4 - Audit
```
**Role:** Academic Auditor.

**Task:** Cross-reference the "Data Inventory" against the "Final Note Content."

**Checklist:**
1. Are all formulas from the Inventory present in the Note?
2. Are all variable definitions from the Inventory present in the Note?
3. Did the Note miss any edge cases mentioned in the Inventory?

**Output:**
* **Pass:** "All data points covered."
* **Fail:** "The Note is missing equation $$x$$ and the definition of variable $y$. Please generate a specific insert to fix this."
```
### Phase 5 - Refactor
```
**Role:** Knowledge Vault Maintainer.

**Context:**
I am processing **Chapter [X]**.
I already have an existing note in my vault named `[[Utility Functions]]` (content attached below).

**Task:**
Compare the concepts in the New Chapter against the Existing Note.

**Decision Matrix:**
1. **Strict Expansion:** If the new chapter simply adds a new sub-type (e.g., "Expected Utility") that fits under the old parent, tell me to **ADD** it as a section to the existing note.
2. **Fundamental Shift:** If the new chapter redefines the concept entirely (e.g., moves from Ordinal to Cardinal utility) or contradicts the old note, tell me to **REFACTOR**.
    * *Action:* Suggest a split. (e.g., Rename the old note `[[Utility (Ordinal)]]` and create a new note `[[Utility (Expected)]]`).
3. **New Atomic Concept:** If the concept is distinct, create a **NEW** note.

**Output:**
Provide the update instructions.
```

