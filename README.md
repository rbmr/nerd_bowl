# 🧠 Data Science & Quant Finance Vault

Welcome to our shared knowledge base. This vault is designed to decouple **Atomic Concepts** (Truths) from **University Courses** (Contexts). 

By following this structure, we write complex topics (like "Gradient Descent" or "Black-Scholes") **once** and reuse them indefinitely across different courses and projects.

---

## 📂 Folder Structure

We use a flat, ID-based structure to prevent nesting hell.

* **`00_Inbox`**
    * Drop zone for messy, unsorted notes. Clean these up and move them weekly.
* **`10_Concepts`** 🧠 *(The Shared Brain)*
    * **Atomic notes only.** Definitions, theorems, algorithms.
    * *Rule:* No course-specific fluff. Just the concept.
    * *Example:* `[[Bayes Theorem]]`, `[[Markowitz Portfolio Theory]]`.
* **`15_MOCs`** 🗺️ *(Maps of Content)*
    * "Table of Contents" files that organize concepts into trees.
    * *Example:* `$$ Machine Learning MOC` linking to `[[Loss Functions]]`, `[[Optimizers]]`.
* **`20_Sources`** 📚
    * Raw reference materials: PDFs, Lecture Slides, Papers.
* **`30_Finn`** 👤
    * Finn's private workspace and course notes.
    * *Structure:* `30_Finn/Advanced ML/Lecture 1`.
* **`40_Robert`** 👤
    * Robert's private workspace and course notes.
* **`50_Assets`** 🖼️
    * Images, diagrams, CSVs.
* **`99_System`** ⚙️
    * Templates, Dataview scripts, and vault configuration.

---
## Concept Splitting
- Concepts can start broad, e.g. Probability Theory, or Loss Functions
- Using Headings sub-topics or specific parts of a concept can be specified and linked to from other documents (e.g. Search Theory#Economic Application)
- Obsidian allows for these headings to be extracted into new documents, and links to be refactored accordingly.
- Concepts can be split up based on this video: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/C0KvL8T2vEY?si=wWfggUnalzZtBO7q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
## 🤝 The Golden Rules of Collaboration

1.  **Don't Duplicate Concepts:** Before writing a note on "Eigenvectors," check `10_Concepts` (Cmd+O). If it exists, improve it; don't recreate it.
2.  **Smart Transclusion:** When embedding a concept into a course note, **only link the Summary**.
    * *Bad:* `![[Gradient Descent]]` (Embeds the whole file, including related links).
    * *Good:* `![[Gradient Descent#Summary]]` (Embeds only the definition).
3.  **Status Matters:** Update the `status` property (`in_progress` → `good_enough` → `perfect`) so we know which notes are trustworthy.
4.  **Aliases are Mandatory:** Add aliases for easier searching (e.g., `aliases: [Normal Distribution, Gaussian, Bell Curve]`).

---

## 🛠️ Setup Guide (New User)

To make the automation work, install these **Community Plugins**:

### 1. Templater (Required)
* **Why:** Automates metadata (status, dates) and headers.
* **Settings:**
    * Template folder location: `99_System/Templates`
    * Trigger Templater on new file creation: **ON**

### 2. Dataview (Required)
* **Why:** Powers the Dashboard and Status Trackers.
* **Settings:** Enable "Enable JavaScript Queries" (optional but recommended).

### 3. Latex Suite (Required)
* **Why:** Types math at the speed of thought.
* **Shortcuts:** `mk` → `$..$`, `dm` → `$$..$$`, `/` → fraction.

### 4. Excalidraw (Recommended)
* **Why:** Allows for drawing and rendering of graphs and diagrams

---

## 🚀 Workflow: From Lecture to Knowledge

### Scenario: You are sitting in a "Quant Finance" lecture.

**Step 1: Create the Course Note**
* Go to your folder (e.g., `30_Finn/Quant 101`).
* Create `Lecture 3 - Stochastic Processes`.

**Step 2: The Concept**
* Professor mentions **"Brownian Motion."**
* Create `[[Brownian Motion]]` in `10_Concepts`.
* **Templater** fills the structure.
* Write the clear definition under the `## Summary` header.
* Write the proofs under `## Details`.
* Add links to other concepts (e.g., `[[Random Walk]]`) under `## Related`.

**Step 3: Embed (The Clean Way)**
* Go back to `Lecture 3` note.
* Type: `![[Brownian Motion`
* Type `#` to trigger header search. Select **Summary**.
* Press Enter.
* *Result:* `![[Brownian Motion#Summary]]`.
* *Benefit:* Your course note (and PDF printout) now contains the clean definition, but hides the messy "Related" links and deep-dive proofs.

---

## 📊 Status & Tracking

We track quality using YAML properties. **Do not use tags for status.**

**Valid Statuses:**
* `not_started`: Created but empty.
* `in_progress`: Rough notes, maybe unformatted equations.
* `good_enough`: Accurate, readable, but maybe missing deep intuition.
* `perfect`: Textbook quality. Clean LaTeX, clear intuition.

### The Dashboard
Check the `Dashboard` file in the root directory to see a live view of concepts needing work.

---

## 📄 Templates

### Concept Template (`99_System/Templates/New Concept.md`)


```markdown
---
tags:
  - TAG
aliases: []
status: not_started
created: <% tp.file.creation_date() %>
---

### <% tp.file.title %>
<% tp.file.cursor() %>

---

### Related
Here, related notes are automatically shown based on links and tags using DATAVIEW.

```

---

## Course Notes
You can add this Dataview to see what concepts in this course or lecture still need work
```

```dataview
TABLE status as "Current State"
FROM "10_Concepts"
WHERE contains(file.inlinks, this.file.link)
AND status != "perfect"
SORT status ASC
```

## Obsidian Bugs
When using 
$$
\text{MATH BLOCKS}
$$
Make sure to put them fully on a new line. Otherwise there will be parsing issues.
```markdown

WRONG:
lorem ipsum $$
FORMULA
$$

RIGHT:
lorem ipsum
$$
FORMULA
$$

```

