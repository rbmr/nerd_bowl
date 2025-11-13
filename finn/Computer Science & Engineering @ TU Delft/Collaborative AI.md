# Collaborative AI

# Exam

## Exam Setup

- Written exam
- MCQs & Open
    - About 50 points total, roughly 10 for each module {interdependence, trust, coalition, social choice, negotiation}
- Information Sheet (printed or written) of 1 A4 on both sides is allowed

## Exam Practice

- Practice Questions → [https://brightspace.tudelft.nl/d2l/le/news/widget/680752/FileProvider?newsId=368079&fileId=9090745](https://brightspace.tudelft.nl/d2l/le/news/widget/680752/FileProvider?newsId=368079&fileId=9090745)
- Practice Questions Answers → [https://brightspace.tudelft.nl/d2l/le/news/widget/680752/FileProvider?newsId=368079&fileId=9090745](https://brightspace.tudelft.nl/d2l/le/news/widget/680752/FileProvider?newsId=368079&fileId=9090745)

# Topics

- Introduction to CAI
- Co-active Design
- Trust
- Computational Social Choice
- Coalition Formation
- ITA
- Negotiation
- Formalization
- Negotiation Automated
- Negotiation with LLMs

## Overview of Topics

### **Part 1: Foundations of Collaboration and Trust**

- **Module: Course Introduction**
    - What is Collaborative AI? (Defining the field, centralized vs. collaborative paradigms (e.g. multi-agent))
    - Why Collaborative AI? (Challenges and Opportunities) (data&computation is decentralized) (Human-AI Hybdrid intelligence is the future of AI, humans helpiong machines and machines helping humans)
    - Desirable Agent Properties for Collaboration
- **Module: Trust**
    - **Understanding Trust:**
        - Definition and Relevance in Collaborative AI (if A believes that B will act in A’s best interest, and accepts vulnerability to B’s actions, then A trusts B) (trustor, tustee) (Trusting, vs trustworthiness) (warranted & calibrated trusts)
        - Dimensions of Trust (Capability vs. Will, Motivation, Priorities)
        - Evaluating Trust (Economics, interpersonal, automation; Questionnaires & Scales)
        - Evaluation Trust/Trustworthiness 2 (Factors of prrceived trustwirhtiness: ABI model, Ullman&Malle model, HCI trust scale)
    - **Trustworthy AI:** Principles (Human Rights, Well-being, Data, Effectiveness, Transparency, Accountability, Awareness of Misuse, Competence)
    - **Trust in Multi-Agent Systems:**
        - Representing Trust (Boolean, Numbers, Labels, Probability, Fuzzy Sets, Willingness & Competence)
        - Trust processes in MAS
            - Trust Evaluation as Expectation
            - Trust Decision as an Action
        - Trust Modalities in Agents (ABI, Trust in Robots Scale, HCI Trust Scale - potentially introduce these alongside the dimensions of trust for a clearer initial picture)
        - Relationship between ABI and other trust concepts
        - Reputation Process
            - Communicated Reputation
            - Inhertied Repuration
            - Centralized Reputation
            - De-Centralized Reputation (relies on individual information)
        - Reliability of inputs
            - Filtering (context, information source
            - Number of opinions
            - Variance of opinions
            - Recency of the opinions
            - Credibility of the agents behind the opinions
    - Trust vs. Reputation
    - ABI vs MAS
- **Module: Explainability (XAI) for Trust**
    - Explanation: Definition and its link to Trust
    - Objectives of XAI: Promoting appropriate trust, understanding trustworthiness, and the AI itself
    - How Explanations Work:
        - Providing Causal History and Explanatory Information
        - Answering 'Why' Questions (Causal Model Reasoning, Goal-based vs. Data-driven AI)
        - The Explanation Process (Cognitive, Product, Social aspects)
        - Contrasts (O, T, P - Fact and Foil) and Finding the Foil (Norms, World Understanding, User Understanding, Theory of Mind) CounterFactuals
        - Selecting Effective Explanations (Causal Chains, Fact/Foil, Intentionality, Necessity/Sufficiency, Responsibility)

### **Part 2: Enabling Collaborative Interactions**

- **Module: Coactive Design**
    - Coactive design is about designing human-AI systems that support interdependence.
    - Interdependence: The core of Coactive Design (Joint activity vs. task allocation/integration) (Instead of full autonomy and independence, there is interdependency) (“Interdependence” describes the set of complementary relationships that two or more parties rely on to manage required or opportunistic dependencies in joint activity)
    - Implications for Design Elements
    - Theory of Interdependence (Complementary Relationships, Managing Dependencies, Mutual Dependence)
    - Seven "Deadly" Myths of Autonomy
    - Interdependence-based Requirements (Observability, Predictability, Directability) (Human needs, AI needs)
    - The Coactive Design Process (Identification, Selection, Implementation)
    - IA (Interdependence Analysis) Table Examples
- **Module: Computational Social Choice**
    - What is Computational Social Choice? (Social Choice Theory, Preference Aggregation in Multiagent Systems)
    - Fundamentals: Ordinal vs. Cardinal Preferences
    - Preference Aggregation
    - Social Welfare Functions (SWF) and Social Choice Functions (SCF)
    - Introductory Examples and Challenges
    - Axioms (Anonymity, Neutrality, Positive responsiveness, Pareto Condition, IIA, Non-dictatorial) and their Importance
    - May’s Theorem
    - Arrow’s Theorem: Statement and Implications
    - Voting Methods
        - Voting rules: function f (R()U)^n → F(U), often seen as a SCF
            - Resoluteness
            - Anonymity
            - Neutrality
        - Scoring Rules
            - Plurality Rule
            - Anti-Plurality rule
            - Borda’s rule
        - Condorcet Extensions
            - Copelands Rule
            - Maximin
            - Nanson’s rule
        - Other Rules like STV
        - Strategic Manipulation (in scenarios where agents can misrepresent their preferences to exploit voting rules)
            - The Gibbard-Satterthwaite Impossibility theorem (1973/1975): Every non-imposing,
            strategyproof, resolute voting rule is dictatorial when 𝑈 ≥ 3
- **Module: Computational Coalition Formation**
    - The Computational Coalition Formation Problem and Subproblems
    - Brief Introduction to Game Theory (Prisoner's Dilemma)
        - Non-Cooperative games
        - Cooperative games
    - Transferable Utility (TU) vs. Non-Transferable Utility (NTU)
        - TU Formalized, described, process
    - Coalition Structure Generation (CSG) Problem and Algorithms
        - Greedy Algorithm (workings, advantages, disadvantages, finds optimal solution?, worst csae performance, anytime>, time to find optimal soluiton is fast or slow in average case?)
        - Dynamic Programming Algorithm (workings, advantages, disadvantages, finds optimal solution?, worst csae performance, anytime>, time to find optimal soluiton is fast or slow in average case?)
        - Integer Partitioning Algorithm (workings, advantages, disadvantages, finds optimal solution?, worst csae performance, anytime>, time to find optimal soluiton is fast or slow in average case?)
    - Payoff Distribution Problem (Core, Shapley Values and their Axioms)
        - Super additive games definition
        - Stability vs Fairness
        - Marginal Contribution
        - Shapley value & Axiomatic Characterization

### **Part 3: Collaborative Dynamics and Negotiation**

- **Module: Interdependence and Trust Analysis (ITA)**
    - ITA Framework: Team Design based on Interdependence and Willingness
    - Process of doing ITA
    - Incorporating Willingness Belief
    - Possible Human/Machine Interdependences
    - Applying ITA (e.g., Firefighter Robot Brutus)
    - What is it used for?
- **Module: Negotiation**
    - **Negotiation Fundamentals:**
        - Why Negotiate? (Win-win, Relationships, Common Interest)
        - Pareto Optimality
        - Definitions (Party, Mediator, Issue)
        - Types of Negotiations (by number of parties, mediation, issues, openness, Bilateral,Negotiation, Multiple bilateral negotiation, multilateral negotiation, )
        - Principles for Good Negotiation (From Positional to Win-Win, Trust, Interests, Options, Value) & How to do them?
            - P1: build trust through mutual understanding and meaningful communication
            - P2: Focus on revealing underlying interests rather than possitions
            - P3: Widen the options for finding a solution
            - P4: Reach agreement that satisfies interests and adds value for all parties
        - Phases of Negotiation (Preparation, Exploration, Bidding, Closing)
        - Key Concepts (Preference Profile, Bid, Utility Function, BATNA)
        - Openness in Negotiation
        - Negotiation & Conflict Handling Styles
            - Negotiation style based on Activity: Interests(leaninent,hard), Power)bending,dominant), Climate(jovial, hostile), Flexibility(exploring, avoiding)
            - Conflict handling style: Thomas-Kilmann COnflict Mode Instrument → 2D with grpah with cooperativeness and assertiveness scales. 5 Classifications (competing, collaborating, avoiding, accomodating, compromising)
    - **Formalizing Negotiation:**
        - Measuring Success (Pareto Optimal Frontier, Kalai-Smorodinsky, Nash Product)
        - Preferences (over issues and bids), Preference Independence
        - Negotiation Support Systems (NSS) for Human-Human and Human-Agent Negotiation
        - Bidding Support and Experimental Setups
        - Pareto Optimality with Support
    - **Automated Negotiation:**
        - Negotiation Protocols (Bilateral, Multiparty)
        - Negotiating on Behalf of a User
        - Normalization for Strategy Analysis
        - Mediator Strategies (e.g., Hill-Climber)
        - Negotiation Strategies (BOA Framework, Bidding Strategies)
            - Bidding Strategies
                - Random-Walker (create random values, proposes only bids that have a utility greater than it’s reservation utility)
                - Time-dependent Concession Strategy
                - Trade-Off Strategy (Conceder Strategy)
                - Behaviour-Dependent (Imitation of opponent) (Absolute tit-for-tat, relative tit-for-tat, averaged tit-for-tat)
        - Opponent Modelling (Learning Preferences, Heuristics)
            - Why?
            - What? (learning which issues are important for the opponent, preferences for values, strategy learning, constraints)
            - Examples; Frequency Analysis Heuristic
        - Acceptance Conditions
            - There is always a deadlinge
            - Break off is often undesiarable, so something should be accepted
            - problems with accepting timing
            - Finding balance
            - Guidelines (AC_name() , accepting as function)
                - Accept when opponent’s bid is better than x
                - Accept when opponent’s bid is better than your next bid
                - Accept when time x has passed.
        - Analysis of Negotiation Dynamics (Utility, Steps, Traces, Classification of Steps)
            - Steps: Fortunate, unfortuante, nice, concession, selfish, silent
        - Comparing Negotiation Strategies
        - Outcome Utility
        - Component-based Negotiation in BOA framework
    - **Negotiation with LLMs:**
        - LLMs that Negotiate (with LLMs and Humans) - Exploring current research
        - LLMs for Negotiation Preparation (Domain Specification, Preference Profiles)
        - Assessing the Quality of Domain and Preference Specifications
        - Overall Assessment of LLM Capabilities for Negotiation
        - Negotiation as a Core of Collaboration (Economic, Psychological, Social, AI, Ethical Perspectives)

# Summary

# **Collaborative AI Study Guide: Foundations, Trust & Interactions**

This guide summarizes key concepts in Collaborative AI, focusing on the foundational principles, the crucial role of trust, and mechanisms for enabling collaborative interactions.

## **Part 1: Introduction to Collaborative AI**

### **1.1 What is Collaborative AI?**

- **Definition:** Collaborative AI refers to artificial intelligence systems designed to work *with* humans or other AI agents towards shared goals. It emphasizes interaction, coordination, and mutual understanding.
- **Paradigms:**
    - **Centralized AI:** Typically involves a single, powerful AI model or system making decisions or performing tasks based on data it controls. Computation and decision-making are concentrated. Think of a large language model answering a query based on its vast training data.
    - **Collaborative AI (Decentralized/Multi-Agent):** Involves multiple agents (which can be AI or human) interacting to solve problems. Data, computation, and decision-making are often distributed among the agents. Each agent might have partial information or capabilities, requiring collaboration to achieve the overall objective.
        - **Example:** A team of autonomous drones coordinating to map an area, where each drone covers a specific section and shares its findings.

### **1.2 Why Collaborative AI? (Challenges & Opportunities)**

- **Challenges Addressed:**
    - **Decentralized Data & Computation:** Real-world data and computational resources are often spread out (e.g., sensors on different devices, data held by different organizations). Collaborative AI provides a framework to leverage these distributed resources without necessarily centralizing them, which can be impractical or violate privacy.
    - **Complexity:** Many complex problems require diverse skills and perspectives that a single AI might lack. Collaboration allows combining specialized agents.
    - **Scalability & Robustness:** Decentralized systems can be more scalable (add more agents) and robust (failure of one agent doesn't necessarily stop the whole system).
- **Opportunities:**
    - **Human-AI Hybrid Intelligence:** This is seen as a key future direction for AI. It involves creating systems where humans and AI leverage each other's strengths:
        - **Machines Helping Humans:** AI can augment human capabilities by processing vast data, identifying patterns, automating tedious tasks, and providing insights (e.g., AI assisting doctors in diagnosis).
        - **Humans Helping Machines:** Humans can provide context, common sense, ethical judgment, and training data/feedback to improve AI performance and handle situations where AI struggles (e.g., supervising autonomous vehicles, providing creative input).
    - **Solving Large-Scale Problems:** Enables tackling problems too large or complex for a single entity (e.g., managing smart cities, coordinating disaster response).

### **1.3 Desirable Agent Properties for Collaboration**

For agents (AI or human) to collaborate effectively, certain properties are desirable:

- **Autonomy:** Ability to act independently without constant external control.
- **Reactivity:** Ability to perceive the environment and respond to changes in a timely manner.
- **Pro-activeness:** Ability to take initiative and pursue goals without waiting for external triggers.
- **Social Ability:** Ability to interact, communicate, coordinate, and negotiate with other agents according to norms and conventions.
- **Benevolence (or at least non-maleficence):** Willingness to help or at least not hinder others' goals.
- **Veracity:** Commitment to providing truthful information.
- **Rationality:** Acting in a way that is expected to achieve its goals, given its beliefs.
- **Adaptability:** Ability to learn and modify behavior based on experience.
- **(Often) Explainability:** Ability to explain its reasoning and actions (discussed later).

## **Part 2: Understanding Trust in AI**

Trust is fundamental for collaboration, especially when agents rely on each other or when humans interact with AI.

### **2.1 Defining Trust**

- **Core Definition:** Trust is a psychological state comprising the intention to accept vulnerability based upon positive expectations of the intentions or behavior of another.
    - If Agent A believes Agent B will act in A’s best interest (or according to shared norms/goals) and A accepts potential risks associated with B's actions, then A trusts B.
- **Key Roles:**
    - **Trustor:** The party who trusts.
    - **Trustee:** The party who is trusted.
- **Key Concepts:**
    - **Trusting (the act):** The decision or behavior of relying on the trustee.
    - **Trustworthiness (the attribute):** The characteristics of the *trustee* that justify the trustor's trust (e.g., competence, honesty, reliability). An agent can be trustworthy without necessarily being trusted, and vice-versa.
    - **Warranted Trust:** Trust that is justified by the actual trustworthiness of the trustee.
    - **Calibrated Trust:** Trust that accurately reflects the trustee's capabilities and limitations. The goal is often *appropriate* trust, not necessarily maximum trust. Over-trust can be as dangerous as under-trust.
- **Relevance in Collaborative AI:** Essential for delegation, information sharing, team formation, reliance on AI predictions/actions, and human-AI teaming. Without trust, collaboration breaks down or becomes inefficient due to excessive verification.

### **2.2 Dimensions of Trust**

Trust isn't monolithic; it has several facets:

- **Capability (Competence):** Does the trustee have the necessary skills, knowledge, and resources to perform the expected action reliably and effectively? (Related to *Ability* in the ABI model).
- **Will (Intention/Motivation/Benevolence):** Does the trustee *intend* to act in the trustor's best interest or according to agreed-upon goals? Are their motivations aligned? (Related to *Benevolence* in the ABI model).
- **Integrity (Principles/Ethics):** Does the trustee adhere to a set of principles, rules, or ethical standards that the trustor finds acceptable? Are they predictable and consistent in their actions based on these principles? (Related to *Integrity* in the ABI model).
- **(Sometimes) Predictability/Reliability:** Can the trustee's behavior be consistently anticipated?

### **2.3 Evaluating Trust**

How do we measure or assess trust? Methods vary depending on the context:

- **Economics:** Often models trust through game theory (e.g., Trust Game), focusing on rational choices based on expected payoffs and risks of defection.
- **Interpersonal Psychology:** Focuses on subjective feelings, attitudes, and beliefs about the trustee, often measured via self-report questionnaires and scales.
- **Automation/HCI:** Studies trust in technology, examining factors influencing reliance on automated systems. Methods include:
    - **Behavioral Measures:** Observing how users interact with the system (e.g., frequency of use, monitoring levels, acceptance of recommendations).
    - **Subjective Measures (Questionnaires & Scales):** Explicitly asking users about their trust levels using validated instruments.

### **2.4 Models & Scales for Perceived Trustworthiness**

Several models and scales attempt to capture the factors influencing perceived trustworthiness:

- **A) ABI Model (Mayer, Davis & Schoorman, 1995):**
    - **What it is:** A highly influential model identifying three key factors that contribute to a trustee's perceived trustworthiness. Originally from organizational psychology, it's widely applied in HCI and AI trust research.
    - **Components:**
        - **Ability:** The group of skills, competencies, and characteristics that enable a party to have influence within some specific domain. *Does the agent have the skills/knowledge to do the job?*
        - **Benevolence:** The extent to which a trustee is believed to want to do good to the trustor, aside from an egocentric profit motive. *Does the agent care about my interests? Does it have good intentions towards me?*
        - **Integrity:** The trustor's perception that the trustee adheres to a set of principles that the trustor finds acceptable. *Does the agent operate ethically? Is it honest? Does it follow rules?*
    - **Workings:** Trust is formed based on the trustor's assessment (perception) of the trustee across these three dimensions. A high rating on all three generally leads to high trust. These perceptions are built from interactions, reputation, third-party information, and system design cues.
    - **Advantages:** Provides a structured, multi-dimensional understanding of trustworthiness. Intuitive and widely validated across different domains. Helps diagnose trust issues (e.g., an agent might be seen as highly *able* but lacking *integrity*).
    - **Disadvantages:** Measuring these subjective perceptions accurately can be difficult. The relative importance of A, B, and I can vary significantly depending on the context, task, and individual trustor. It's primarily a model of *perceived* trustworthiness, which might not perfectly match *actual* trustworthiness.
- **B) Ullman & Malle Model (Moral Competence):**
    - **What it is:** Focuses specifically on the *moral* aspects of trust in agents, particularly robots or AI. It argues that judging moral competence is crucial for human-agent trust.
    - **Workings:** Suggests people evaluate agents based on their capacity for moral reasoning, adherence to social norms, and ability to handle ethical dilemmas. It goes beyond simple rule-following (Integrity in ABI) to encompass deeper moral understanding.
    - **Relation to ABI:** Overlaps significantly with Integrity and Benevolence but emphasizes the *moral reasoning* aspect more explicitly.
- **C) HCI Trust Scale (Jian, Bisantz & Drury, 2000):**
    - **What it is:** A specific questionnaire designed to measure user trust in automated systems.
    - **Workings:** Typically uses Likert-scale items (e.g., "Strongly Disagree" to "Strongly Agree") asking about aspects like the system's reliability, predictability, performance, and perceived understanding of the user's goals. It provides a quantitative score of trust.
    - **Advantages:** Standardized, relatively easy to administer, provides quantitative data for comparison.
    - **Disadvantages:** Can be influenced by user mood or recent interactions. Doesn't always capture the nuances of *why* trust is high or low (unlike ABI).

### **2.5 Trustworthy AI Principles**

Recognizing the importance of trust, various organizations have proposed principles for developing trustworthy AI. Common themes include:

1. **Human Agency and Oversight:** AI systems should empower humans and allow for human control.
2. **Technical Robustness and Safety:** AI should be reliable, secure, and perform as intended, minimizing unintended harm.
3. **Privacy and Data Governance:** Data used by AI should be handled responsibly, respecting privacy.
4. **Transparency:** The capabilities, limitations, and decision-making processes of AI should be understandable (links to XAI).
5. **Diversity, Non-discrimination, and Fairness:** AI systems should avoid unfair bias and promote equality.
6. **Societal and Environmental Well-being:** AI development should consider broader societal impacts and sustainability.
7. **Accountability:** Mechanisms should be in place to ensure responsibility for AI systems and their outcomes.
8. **(Implicit) Competence:** The AI should actually be capable of performing its tasks effectively.
9. **(Implicit) Awareness of Misuse:** Developers should consider and mitigate potential negative uses.

## **Part 3: Trust in Multi-Agent Systems (MAS)**

In systems with multiple interacting AI agents, trust and reputation become critical for coordination and decision-making.

### **3.1 Representing Trust in MAS**

How can an agent internally represent its trust in another agent?

- **Boolean:** Simple Trust / Distrust. Lacks nuance.
- **Numbers:** A scalar value (e.g., [0, 1] or [-1, 1]) representing the degree of trust. Allows ranking but interpretation can be vague.
- **Labels:** Qualitative categories (e.g., Very Trustworthy, Trustworthy, Untrustworthy, Very Untrustworthy). More intuitive but harder to compute with.
- **Probability:** Trust as the probability that the trustee will perform a certain action beneficially (e.g., P(Agent B provides correct info) = 0.8). Grounded in probability theory. Discrete labels, with each a probability
- **Fuzzy Sets:** Allows representing vague trust concepts (e.g., "somewhat trustworthy") using fuzzy logic.

### **3.2 Trust Processes in MAS**

Agents need mechanisms to update and use their trust assessments:

- **Trust Evaluation (as Expectation):** Agents evaluate trustworthiness based on:
    - **Direct Experience:** Past interactions with the trustee. Successful interactions increase trust, failures decrease it.
    - **Observation:** Watching the trustee interact with others.
    - **Reputation:** Information gathered from third parties about the trustee (see below).
    - **Prejudice/Initial Beliefs:** Default trust levels based on agent type, role, etc.
    - The evaluation often involves updating a trust representation (e.g., Bayesian updating for probabilistic trust) based on new evidence. It's essentially forming an *expectation* about future behavior.
- **Trust Decision (as Action):** Based on the evaluated trust level, the agent decides how to act:
    - Delegate a task?
    - Share sensitive information?
    - Accept advice or data?
    - Form a team?
    - The decision often involves comparing the trust level against a threshold, considering the potential risks and rewards of trusting.

### **3.3 Reputation in MAS**

Reputation is a collective measure of trustworthiness based on the experiences and opinions of a community.

- **Definition:** What is generally said or believed about a person's or thing's character or standing. In MAS, it's often an aggregation of trust assessments from multiple agents.
- **Reputation Process:** How reputation information is gathered, aggregated, and disseminated.
- **Types:**
    - **Communicated Reputation (Witness Information):** Agents explicitly share their trust assessments or experiences with others.
    - **Inherited Reputation:** Trust is transferred through social networks (e.g., "If A trusts B, and B trusts C, then A might somewhat trust C"). Can be unreliable.
    - **Centralized Reputation System:** A central entity collects ratings/feedback and calculates/publishes reputation scores (e.g., eBay seller ratings).
        - *Advantages:* Simple for agents to query, consistent view.
        - *Disadvantages:* Single point of failure, potential for manipulation, privacy concerns, may not capture context well.
    - **Decentralized Reputation System:** Each agent maintains its own view of others' reputations based on direct experience and information gathered from trusted peers. Relies on individual information exchange.
        - *Advantages:* More robust to single failures, potentially more nuanced and context-aware.
        - *Disadvantages:* More complex to manage, potential for inconsistent views, susceptible to gossip/sybil attacks if not designed carefully.
- **Reliability of Reputation Inputs:** When using communicated reputation, agents need to assess the reliability of the information source:
    - **Filtering (Context):** Is the opinion relevant to the current situation? (Trust is context-dependent).
    - **Information Source Credibility:** How trustworthy is the agent providing the opinion? (Recursive trust problem).
    - **Number of Opinions:** More opinions can increase confidence (if consistent).
    - **Variance of Opinions:** High variance might indicate controversy or manipulation.
    - **Recency of Opinions:** Recent experiences are often more relevant.

### **3.4 Trust vs. Reputation**

- **Trust:** A subjective belief and willingness to be vulnerable held by *one* agent (the trustor) towards *another* (the trustee). It's personal, often based on direct interaction, and context-specific.
- **Reputation:** A collective perception of an agent's trustworthiness based on the aggregated opinions or experiences of *many* agents. It's more objective (based on community view) but less personal and potentially less context-aware than direct trust.
- **Relationship:** Reputation often serves as an *input* to an agent's trust evaluation process, especially when direct experience is lacking. An agent might initially trust another based on its good reputation.

### **3.5 Relating ABI to MAS Trust Concepts**

The ABI model provides a valuable framework for understanding trust *within* MAS:

- Agents can evaluate each other based on perceived Ability (Did the agent successfully complete the task?), Benevolence (Did the agent share resources helpfully?), and Integrity (Did the agent follow the communication protocol?).
- Trust representations in MAS can explicitly model these dimensions (e.g., separate scores for competence and willingness).
- Reputation systems can aggregate community feedback related to Ability, Benevolence, and Integrity. For example, ratings could reflect task success rates (Ability), helpfulness (Benevolence), or honesty in reporting (Integrity).

## **Part 4: Explainability (XAI) for Building Trust**

If users or collaborating agents don't understand *why* an AI makes a certain decision or takes an action, it's hard to trust it appropriately. Explainability aims to make AI behavior understandable.

### **4.1 Explanation: Definition and Link to Trust**

- **Definition:** An explanation makes something clear or easy to understand; it provides reasons or justifications for an action, decision, or phenomenon.
- **Link to Trust:** Explanations are crucial for building *calibrated* trust.
    - Understanding *why* an AI succeeded helps reinforce trust in its capabilities (Ability).
    - Understanding *why* it failed helps identify limitations, preventing over-trust.
    - Explanations revealing the AI's goals or reasoning can provide insights into its intentions (Benevolence) and adherence to principles (Integrity).
    - Lack of explanation often leads to suspicion or distrust ("black box" problem).

### **4.2 Objectives of XAI**

Explainability isn't just about satisfying curiosity; it serves specific goals:

1. **Promote Appropriate Trust:** Help users understand when and why to trust (or distrust) the AI.
2. **Understand Trustworthiness:** Reveal the underlying factors (like competence, limitations, potential biases) that determine the AI's actual trustworthiness.
3. **Understand the AI Itself:** Provide insights into how the AI works, its capabilities, limitations, and potential failure modes. This aids debugging, improvement, and informed usage.
4. **Enable Contestability/Recourse:** Allow users to challenge incorrect or unfair decisions by understanding the reasoning behind them.
5. **Facilitate Learning:** Help users learn from the AI or learn how to interact with it more effectively.

### **4.3 How Explanations Work**

- **Providing Causal History & Explanatory Information:** Explanations often involve tracing the steps, data inputs, or model components that led to a specific output. They provide information that helps the recipient build a mental model of the system's behavior.
- **Answering 'Why' Questions:** At their core, explanations answer "Why did X happen?" or "Why not Y?".
    - **Causal Model Reasoning:** Humans often expect explanations based on cause-and-effect relationships. XAI methods try to identify the key factors (e.g., input features) that caused the AI's output.
    - **Goal-based vs. Data-driven AI:**
        - *Goal-based (Symbolic AI):* Explanations can often trace the logical rules or planning steps used to achieve a goal. (e.g., "I recommended route A because it minimizes travel time based on traffic rules").
        - *Data-driven (Machine Learning):* Explanations are often more complex, focusing on which input features most influenced the model's prediction (e.g., "The image was classified as a cat because of features X, Y, Z") or providing examples of similar cases.
- **The Explanation Process (Miller, 2019):** Explanations are more than just outputting information; they are a social interaction.
    - **Cognitive:** How the explanation helps the recipient understand.
    - **Product:** The form and content of the explanation itself (text, visualization, example).
    - **Social:** The interaction between the explainer and the recipient, considering context and the recipient's knowledge.
- **Contrastive Explanations (Fact and Foil):** People often ask "Why P rather than Q?". Explanations are frequently *contrastive*.
    - **Fact (P):** The event that occurred (e.g., "Why was my loan *rejected*?").
    - **Foil (Q):** The counterfactual event that didn't occur but could have (e.g., "...instead of *approved*?").
    - A good explanation highlights the key difference(s) that caused P instead of Q (e.g., "Your loan was rejected *because your income was below the threshold*, whereas approval required income above it.").
    - **Finding the Foil:** Sometimes the foil is implicit. The explainer needs to infer it based on:
        - **Norms:** What is considered normal or expected?
        - **World Understanding:** General knowledge about how things work.
        - **User Understanding:** The user's goals, knowledge, and expectations.
        - **Theory of Mind:** Reasoning about the user's mental state.
    - **Counterfactuals:** A specific type of contrastive explanation stating what would have needed to be different for the foil to occur (e.g., "If your income had been $5000 higher, your loan would have been approved.").
- **Selecting Effective Explanations:** Not all explanations are equally good. Effective explanations often consider:
    - **Causal Chains:** Highlighting the primary causes rather than an exhaustive list.
    - **Fact/Foil:** Being contrastive (explicitly or implicitly).
    - **Intentionality:** Explaining actions in terms of goals or intentions (especially for agents perceived as having agency).
    - **Necessity/Sufficiency:** Focusing on causes that were necessary or sufficient for the outcome.
    - **Responsibility/Blame:** Assigning causality in a way that aligns with human notions of responsibility (can be tricky for AI).
    - **Simplicity/Selectivity:** Providing the most relevant information without overwhelming the user.

## **Part 5: Coactive Design (Designing for Interdependence)**

Coactive Design is a framework for designing human-AI systems that explicitly acknowledges and supports the *interdependence* between humans and AI agents working together.

### **5.1 Interdependence: The Core Concept**

- **Definition:** Interdependence describes the set of complementary relationships that two or more parties (e.g., human and AI) rely on to manage required or opportunistic dependencies in joint activity.
- **Joint Activity vs. Task Allocation:** Instead of simply dividing tasks (task allocation/integration) or aiming for full AI autonomy, Coactive Design focuses on how humans and AI can work *together* fluidly on shared tasks, leveraging each other's strengths and compensating for weaknesses. It moves away from the idea of AI as just a tool towards AI as a teammate.
- **Mutual Dependence:** Both the human and the AI rely on each other to achieve the overall goal effectively. The system's success depends on their coordinated interaction.

### **5.2 Theory of Interdependence**

- **Complementary Relationships:** Human and AI possess different but complementary capabilities, knowledge, and limitations. Design should facilitate leveraging this complementarity.
- **Managing Dependencies:** Collaboration involves dependencies (e.g., human needs AI's computation, AI needs human's context). Coactive systems must provide mechanisms to manage these dependencies smoothly (e.g., through communication, shared understanding, coordination).

### **5.3 Implications for Design & The Seven "Deadly" Myths of Autonomy**

Coactive Design challenges traditional views often focused on maximizing AI autonomy. Johnson et al. identify "Seven Deadly Myths of Autonomy" that hinder effective human-AI collaboration, such as the myth that autonomy reduces human workload (it often shifts it to monitoring) or that autonomous systems require less communication (effective teams communicate well). Designing for interdependence means avoiding these pitfalls and focusing on interaction support.

The 7 myths:

1. Autonomous systems are autonomous
2. Autonomy is undimensional
3. The fconceptualization of levels of autonomy is useful scientific grounding
4. Autonomy is a widget
5. Once achieved, full autonomy obviates the need for human-machine collaboration
6. As machines acquire more autonomy, they work as simple multipliers of human capability
7. Full autonomy is not only possible, but always desirable

### **5.4 Interdependence-based Requirements**

To support interdependence, Coactive Design emphasizes three key properties the AI system should enable for the human, and vice-versa:

1. **Observability:** Each party needs to be able to understand the state, intentions, and reasoning of the other.
    - *Human Needs:* Understand what the AI is doing, why, what it knows, its capabilities/limitations. (Related to XAI).
    - *AI Needs:* Perceive the human's state, goals, focus of attention, workload, etc.
2. **Predictability:** Each party should be able to anticipate the future actions of the other.
    - *Human Needs:* Form accurate expectations about the AI's near-term behavior.
    - *AI Needs:* Predict likely human actions, requests, or interventions.
3. **Directability:** Each party should be able to influence the behavior of the other effectively and appropriately.
    - *Human Needs:* Guide, correct, or redirect the AI; set goals and constraints.
    - *AI Needs:* Request information or assistance from the human; signal its own needs or limitations.

### **5.5 The Coactive Design Process**

A typical process involves:

1. **Identification:** Analyze the joint activity to identify key tasks, goals, potential challenges, and the inherent dependencies between the human and AI.
2. **Selection:** Choose specific interaction mechanisms and design patterns that best support observability, predictability, and directability for the identified dependencies.
3. **Implementation:** Build and iteratively refine the system based on the selected designs, evaluating how well the interdependence is supported in practice.

### **5.6 Interdependence Analysis (IA) Tables**

- **Purpose:** IA Tables are tools used during the Coactive Design process (especially Identification) to systematically map out the dependencies within a joint activity.
- **Structure:** Typically, a table lists sub-tasks or phases of the joint activity and, for each, identifies:
    - What the human needs from the AI (information, actions).
    - What the AI needs from the human.
    - Potential breakdowns or challenges related to these dependencies.
    - How observability, predictability, and directability apply or could be supported.
- **Benefit:** Helps ensure that critical interdependencies are recognized and addressed in the system design.

## **Part 6: Computational Social Choice (Group Decision Making)**

Computational Social Choice (ComSoc) studies collective decision-making processes from a computational perspective, merging social choice theory (from economics and political science) with computer science (especially AI and algorithms).

### **6.1 What is Computational Social Choice?**

- **Social Choice Theory:** Studies how to aggregate individual preferences, interests, or votes into a collective decision or ranking. Classic questions involve fairness, consistency, and avoiding paradoxes.
- **Computational Lens:** ComSoc applies this theory to computational systems (like MAS), considering:
    - Algorithms for computing collective decisions.
    - Computational complexity of voting rules or preference aggregation.
    - Communication efficiency.
    - Strategic behavior (manipulation) by computational agents.
- **Preference Aggregation in MAS:** A core problem is how a group of autonomous agents can agree on a joint course of action or select an outcome when agents have differing preferences.

### **6.2 Fundamentals: Ordinal vs. Cardinal Preferences**

- **Ordinal Preferences:** Agents rank alternatives in order of preference (e.g., A > B > C). Only the *order* matters, not the *intensity* of preference. Most classic social choice theory uses ordinal preferences.
- **Cardinal Preferences:** Agents assign numerical scores (utilities) to alternatives, representing the strength of their preference (e.g., u(A)=10, u(B)=5, u(C)=1). Allows for comparisons of preference intensity.

### **6.3 Preference Aggregation**

The goal is to combine a set of individual preference relations (or utility functions) into a single collective preference relation or a chosen alternative.

### **6.4 Social Welfare Functions (SWF) vs. Social Choice Functions (SCF)**

- **Social Welfare Function (SWF):** Takes a profile of individual preference *rankings* and outputs a single collective preference *ranking* over all alternatives. (e.g., Input: (A>B>C, B>A>C), Output: A>B>C).
- **Social Choice Function (SCF):** Takes a profile of individual preference *rankings* and outputs a *single winning alternative* (or a set of winners). (e.g., Input: (A>B>C, B>A>C), Output: {A}). Voting rules are typically SCFs.

### **6.5 Axioms (Desirable Properties) and their Importance**

Axioms are formal properties used to evaluate the "fairness" or "reasonableness" of SWFs or SCFs.

- **Anonymity:** Treats all voters equally. Permuting the voters' ballots doesn't change the outcome. (The names of the voters don't matter).
- **Neutrality:** Treats all alternatives equally. If all voters swap their preferences for alternatives X and Y, the outcome should reflect this swap. (The names of the alternatives don't matter).
- **Positive Responsiveness (Monotonicity):** If alternative X is the unique winner (or tied for the win), and one voter moves X higher in their ranking (without changing the relative order of other alternatives), X should remain the unique winner. (Moving a winner up shouldn't make it lose).
- **Pareto Condition (Pareto Efficiency/Unanimity):** If *every* voter prefers alternative A to alternative B, then the collective outcome should not rank B above A (for SWF) or choose B if A is available (for SCF).
- **Independence of Irrelevant Alternatives (IIA):** The collective ranking (or choice) between two alternatives A and B should depend *only* on the individual voters' preferences between A and B. How they rank other "irrelevant" alternatives (like C) shouldn't affect the A vs. B outcome. (This is a strong and often controversial axiom).
- **Non-dictatorial:** There is no single voter whose preference always determines the group's preference, regardless of other voters' preferences.

### **6.6 Key Theorems**

- **May's Theorem (1952):** For exactly *two* alternatives, Simple Majority Rule (choose the one preferred by more voters) is the *only* voting rule that satisfies Anonymity, Neutrality, and Positive Responsiveness.
    - *Importance:* Provides a strong justification for majority rule in binary choices.
- **Arrow's Theorem (1951 - Impossibility Theorem):** For *three or more* alternatives, no Social Welfare Function (SWF) can simultaneously satisfy the Pareto Condition, Independence of Irrelevant Alternatives (IIA), and Non-dictatorship.
    - *Implications:* Shows that designing a "perfect" preference aggregation mechanism (for rankings) is impossible if we demand these seemingly reasonable properties. We must relax at least one axiom. This highlights fundamental trade-offs in collective decision-making.

### **6.7 Voting Methods (Social Choice Functions - SCFs)**

Voting rules are functions f that map a profile of n individual preference rankings R() over a set of alternatives U to a winning alternative or set of winning alternatives F(U). f: (R(U))^n → F(U).

- **Properties often desired for SCFs:**
    - **Resoluteness:** The rule always outputs a single winner (or uses a fixed tie-breaking mechanism). Many rules output a *set* of winners if there are ties.
    - **Anonymity:** As defined above.
    - **Neutrality:** As defined above.
- **Scoring Rules:** Assign points to alternatives based on their position in each voter's ranking. The alternative(s) with the highest total score win.
    - **Plurality Rule:** Each voter casts one vote for their top-ranked alternative. The alternative with the most votes wins.
        - *Workings:* Simple count of first preferences.
        - *Advantages:* Very simple to understand and implement.
        - *Disadvantages:* Ignores lower preferences entirely. Can lead to "spoiler effects" where a less popular candidate splits the vote, allowing a disliked candidate to win. Fails Condorcet criterion (see below).
    - **Anti-Plurality Rule (Veto Rule):** Each voter casts one vote *against* their least-preferred alternative. The alternative with the *fewest* veto votes wins.
        - *Workings:* Count of last preferences.
        - *Advantages:* Simple. Considers the least preferred option.
        - *Disadvantages:* Ignores middle preferences. Can elect broadly disliked candidates if they aren't anyone's *absolute* least favorite.
    - **Borda's Rule:** If there are m alternatives, each voter gives m-1 points to their top choice, m-2 to their second, ..., 0 points to their last choice. The alternative with the highest total points wins.
        - *Workings:* Sums points based on rank position.
        - *Advantages:* Considers the entire ranking. Generally seen as a good compromise rule.
        - *Disadvantages:* Vulnerable to strategic manipulation (e.g., dishonestly ranking a main competitor last). Violates IIA.
- **Condorcet Extensions:** Based on pairwise comparisons. An alternative X is a **Condorcet Winner** if it beats every other alternative in a head-to-head majority comparison.
    - **Condorcet Criterion:** A voting rule satisfies this if it always elects the Condorcet Winner when one exists. (Plurality and Borda can fail this).
    - **Condorcet Paradox:** Pairwise majority comparisons can lead to cycles (e.g., A > B, B > C, C > A), meaning no Condorcet Winner exists. Condorcet extension rules provide ways to choose a winner even with cycles.
    - **Copeland's Rule:** Each alternative gets +1 point for every other alternative it beats in a pairwise majority comparison, and -1 point for every one it loses to. The alternative with the highest score wins.
        - *Workings:* Counts net pairwise wins.
        - *Advantages:* Satisfies Condorcet criterion. Intuitive.
        - *Disadvantages:* Can result in many ties.
    - **Maximin (Simpson's Rule):** Find the minimum support an alternative gets in any pairwise comparison against another alternative. The winner is the alternative whose *worst* pairwise defeat is the least severe (i.e., has the maximum minimum support).
        - *Workings:* Focuses on the worst-case pairwise performance.
        - *Advantages:* Satisfies Condorcet criterion. Always produces a winner (or ties).
        - *Disadvantages:* Can be computationally more intensive. Less intuitive than Copeland.
    - **Nanson's Rule:** An elimination procedure. Calculate Borda scores. Eliminate all alternatives with scores below the average Borda score. Recalculate preferences and Borda scores over the remaining alternatives. Repeat until only one (or a tied set) remains.
        - *Workings:* Iterative elimination based on Borda scores.
        - *Advantages:* Satisfies Condorcet criterion.
        - *Disadvantages:* Complex. Violates monotonicity.
- **Other Rules:**
    - **Single Transferable Vote (STV):** A multi-winner or single-winner ranked-choice system. Voters rank candidates. In each round, if no candidate has a majority (or quota), the candidate with the fewest top-preference votes is eliminated, and their votes are transferred to the voters' next preferences. Repeats until a winner (or winners) is found.
        - *Workings:* Iterative elimination and vote transfer.
        - *Advantages:* Proportional representation (in multi-winner form), reduces wasted votes.
        - *Disadvantages:* Complex to calculate by hand. Various versions exist.

### **6.8 Strategic Manipulation**

- **The Problem:** In scenarios where agents know the voting rule and potentially others' preferences, they might have an incentive to vote *dishonestly* (misrepresent their true preferences) to achieve a better outcome for themselves.
- **Example:** In Plurality, if your favorite candidate has no chance, you might vote for your second choice ("lesser of two evils") to prevent your least favorite from winning.
- **The Gibbard-Satterthwaite Theorem (1973/1975):** A fundamental impossibility result for Social Choice Functions (SCFs). For *three or more* alternatives, every resolute (always picks a single winner) SCF that is non-imposing (every alternative *can* win for some preference profile) and **strategy-proof** (no voter ever has an incentive to misrepresent their preferences) must be **dictatorial**.
    - *Implications:* Essentially, any "reasonable" (non-dictatorial, non-imposed) voting system for 3+ candidates can be strategically manipulated by voters. This highlights a fundamental tension between fairness/reasonableness and resistance to manipulation.

## **Part 7: Computational Coalition Formation (Forming Teams)**

This area focuses on how autonomous agents can identify, form, and manage coalitions (groups or teams) to achieve their individual or collective goals more effectively than acting alone.

### **7.1 The Computational Coalition Formation Problem and Subproblems**

Given a set of agents, the overall goal is to partition them into coalitions to maximize some measure of overall value or utility. This involves several interconnected subproblems:

1. **Coalition Value Calculation:** Determine the value or utility that a potential coalition C can achieve if its members work together (v(C)). This depends on the task and the agents' capabilities.
2. **Coalition Structure Generation (CSG):** Find the optimal *partition* of all agents into disjoint coalitions (the "coalition structure") such that the sum of the values of the coalitions in the partition is maximized. This is the core combinatorial challenge.
3. **Payoff Distribution:** Once a coalition forms and generates value, decide how to distribute that value (payoffs) among its members fairly and/or stably.

### **7.2 Brief Introduction to Game Theory**

Game theory provides mathematical models for strategic interactions.

- **Non-Cooperative Games:** Focus on individual agents making decisions to maximize their own utility, assuming others do the same. Concepts like Nash Equilibrium are central. (e.g., Prisoner's Dilemma).
    - *Prisoner's Dilemma:* Illustrates conflict between individual rationality (defecting) and collective benefit (cooperating).
- **Cooperative Games:** Focus on what groups (coalitions) of agents can achieve together. Assumes agents can make binding agreements to cooperate within coalitions. The focus is on coalition values (v(C)) and payoff distributions. Coalition formation is primarily studied within cooperative game theory.

### **7.3 Transferable Utility (TU) vs. Non-Transferable Utility (NTU)**

- **Transferable Utility (TU) Games:** Assumes there is a common currency (utility) that can be freely transferred and redistributed among coalition members. The value of a coalition v(C) is a single number representing the total utility the coalition can achieve, which can then be divided.
    - *Formalized:* A TU game is defined by a set of agents N and a characteristic function v: 2^N → ℝ that assigns a value v(C) to every possible subset (coalition) C ⊆ N.
    - *Description:* Simplifies analysis as the focus is on maximizing total value and then dividing it. Common in many coalition formation algorithms.
- **Non-Transferable Utility (NTU) Games:** Utility cannot be freely transferred between members. The outcome for a coalition is a vector of utilities, one for each member, representing what they can achieve together without side payments. Much more complex to analyze.

### **7.4 Coalition Structure Generation (CSG) Problem and Algorithms**

The CSG problem is to find a partition CS = {C1, C2, ..., Ck} of the set of all agents N such that ∪Ci = N, Ci ∩ Cj = ∅ for i ≠ j, which maximizes the total value V(CS) = Σ v(Ci). The number of possible coalition structures grows extremely rapidly with the number of agents (related to Bell numbers), making exhaustive search infeasible.

Let's illustrate with a simple example:

- **Agents:** N = {1, 2, 3}
- **Coalition Values (v(C))**:
    - v({1}) = 2, v({2}) = 3, v({3}) = 1
    - v({1, 2}) = 6
    - v({1, 3}) = 4
    - v({2, 3}) = 7
    - v({1, 2, 3}) = 10
- **Possible Coalition Structures (Partitions):**
    - CS1 = {{1}, {2}, {3}} -> Value = v({1})+v({2})+v({3}) = 2+3+1 = 6
    - CS2 = {{1, 2}, {3}} -> Value = v({1, 2})+v({3}) = 6+1 = 7
    - CS3 = {{1, 3}, {2}} -> Value = v({1, 3})+v({2}) = 4+3 = 7
    - CS4 = {{2, 3}, {1}} -> Value = v({2, 3})+v({1}) = 7+2 = 9
    - CS5 = {{1, 2, 3}} -> Value = v({1, 2, 3}) = 10
- **Optimal Structure:** In this case, CS5 = {{1, 2, 3}} is the optimal structure with the maximum value of 10.

**Algorithms**

- **Greedy Algorithm (Example: Value-Based Merge):**
    - *Workings:* Starts with each agent as a singleton coalition. Iteratively merges the two coalitions whose merger results in the largest increase in value, until no further merge increases value.
    - *Advantages:* Very fast (polynomial time). Simple to implement.
    - *Disadvantages:* **Does not guarantee finding the optimal solution.** Can get stuck in local optima. Performance depends heavily on the specific value function.
    - *Optimal?:* No.
    - *Worst-case performance:* Can be arbitrarily bad compared to the optimum.
    - *Anytime?:* Yes, provides a valid (though likely suboptimal) solution quickly, which might improve slightly with more steps.
    - *Speed:* Fast.
- **Dynamic Programming Algorithm (Based on Yeh, 1986):**
    - *Workings:* Builds up solutions for larger sets of agents from optimal solutions for smaller subsets. It calculates max_value(S) for all subsets S ⊆ N, where max_value(S) is the maximum value achievable by partitioning the agents in S. max_value(S) = max_{P ⊆ S, P≠∅} [v(P) + max_value(S \ P)]. The final answer is max_value(N).
    - **Step-by-Step:**
1. **Initialization:** Start with each agent in its own coalition. CS = {{1}, {2}, {3}, ... {n}}.
2. **Iteration:** a. Calculate the potential value increase for merging every possible pair of current coalitions. (Value Increase = v(Ci ∪ Cj) - (v(Ci) + v(Cj))). b. Identify the pair (Ci*, Cj*) that gives the maximum positive value increase. c. If a merge with a positive increase exists: Merge Ci* and Cj* into a new coalition C_new = Ci* ∪ Cj*. Update the coalition structure: CS = (CS \ {Ci*, Cj*}) ∪ {C_new}. Repeat Step 2. d. If no merge results in a positive value increase: Stop. The current CS is the result.
- *Advantages:* **Guarantees finding the optimal coalition structure.**
- *Disadvantages:* Requires computing and storing values for all 2^N subsets, leading to exponential time and space complexity (O(3^N) time using specific optimizations, O(2^N) space). Infeasible for larger numbers of agents (e.g., > 20-25).
- *Optimal?:* Yes.
- *Worst-case performance:* Finds the optimum, but runtime is exponential.
- *Anytime?:* Not naturally. Requires full computation to get the optimal result for N.
- *Speed:* Slow (exponential).
- **Integer Partitioning Algorithm (Based on Rahwan et al.):**
    - *Workings:* Exploits the fact that in many domains, coalitions of the same size might have similar values. It represents the CS problem as finding the best way to partition the *integer* N (number of agents) into smaller integers (coalition sizes). It first finds the optimal combination of coalition *sizes*, then assigns agents to those sizes. Often uses dynamic programming on integer partitions, which is much faster if the number of agents N is the main complexity driver rather than specific agent identities.
    - **Step-by-Step:**
1. **Identify Agents (n):** Determine the total number of agents, *n*, that need to be formed into coalitions.
2. **Generate Integer Partitions:** List all unique integer partitions of *n*. Each partition (e.g., p = {s1, s2, ..., sk} where s1 + s2 + ... + sk = n) defines a potential structure of coalition sizes.
3. **Generate Specific Coalition Structures:** For *each* integer partition generated in Step 2:
    1. Identify all possible ways to assign the actual *n* agents into distinct coalitions matching the sizes specified by the partition. For example, if n=4 agents {A,B,C,D} and the partition is 2+2, possible specific structures are {{A,B},{C,D}}, {{A,C},{B,D}}, and {{A,D},{B,C}}.
4. **Evaluate Each Structure:** For *each* specific coalition structure generated in Step 3:
    1. Calculate the value of *each individual coalition* within that structure using a predefined *characteristic function* or *value function* v(C), which assigns a utility score to any given coalition C.
    2. Sum the values of all coalitions in the structure to get the total value for that specific grouping. (e.g., Value({{A,B},{C,D}}) = v({A,B}) + v({C,D})).
5. **Select Optimal Structure:** Compare the total values calculated in Step 4 for all generated specific coalition structures. The structure yielding the highest total value is the optimal coalition structure found by this algorithm.
- *Advantages:* **Guarantees finding the optimal solution.** Can be significantly faster than DP based on subsets *if* the number of agents N is large but the characteristic function v(C) depends mainly on the size |C| or can be efficiently represented.
- *Disadvantages:* Still computationally complex (can be exponential in N or related parameters, but often better than O(3^N)). Relies on specific structures of the value function.
- *Optimal?:* Yes.
- *Worst-case performance:* Finds the optimum, complexity depends on number-theoretic properties.
- *Anytime?:* Not typically.
- *Speed:* Can be faster than subset DP for certain types of problems, but still generally slow (exponential).

*(Note: "Anytime" property means the algorithm can be stopped at any time and provide a valid solution, with the solution quality generally improving with more computation time. Greedy is anytime; DP/IP typically need to complete.)*

### **7.5 Payoff Distribution Problem**

Once a coalition C forms and generates value v(C), how should this value be divided among the members? Key concepts:

- **Superadditivity:** A game is superadditive if joining forces is always beneficial or neutral: v(A ∪ B) ≥ v(A) + v(B) for disjoint A, B. This provides an incentive to form larger coalitions.
- **Stability vs. Fairness:**
    - **Stability:** The payoff distribution should incentivize agents to *stay* in the coalition. No subgroup should have an incentive to leave and form their own smaller coalition because they could get more value that way. (Related to the Core).
    - **Fairness:** The payoff distribution should reflect agents' contributions or adhere to some principle of equity. (Related to Shapley Value).
- **The Core:** A set of payoff distributions x = (x1, ..., xn) for the grand coalition N such that:
    - Σ xi = v(N) (Efficiency: the total value is distributed)
    - Σ_{i ∈ C} xi ≥ v(C) for all coalitions C ⊆ N (Group Rationality: no subgroup C is better off defecting).
    - *Properties:* Represents the set of *stable* outcomes. However, the Core can be empty (no stable distribution exists) or very large (many stable distributions). Computationally hard to find.
- **Shapley Value:** An approach to determine a *fair* payoff distribution based on axiomatic properties.
    - **Concept:** Assigns each agent a payoff equal to their average *marginal contribution* to all coalitions they could potentially join.
    - **Marginal Contribution:** For agent i and coalition C (where i ∉ C), the marginal contribution is v(C ∪ {i}) - v(C).
    - **Calculation:** The Shapley value φi for agent i is the average of its marginal contribution over all possible permutations (orderings) of agents joining a coalition. Formula: φi(v) = Σ_{C⊆N\ {i}} [ (|C|! * (n-|C|-1)!) / n! ] * [v(C ∪ {i}) - v(C)].
    - **Axiomatic Characterization:** The Shapley value is the *unique* payoff distribution method that satisfies the following four fairness axioms:
        1. **Efficiency (Pareto Optimality):** The sum of the payoffs equals the total value of the grand coalition: Σ φi(v) = v(N).
        2. **Symmetry:** If two agents i and j are interchangeable (i.e., v(C ∪ {i}) = v(C ∪ {j}) for all C not containing i or j), then they receive the same payoff: φi(v) = φj(v).
        3. **Dummy Player:** If an agent i contributes nothing to any coalition (i.e., v(C ∪ {i}) = v(C) for all C), their payoff is zero: φi(v) = 0.
        4. **Additivity:** If a game w is defined as the sum of two games v1 and v2 (i.e., w(C) = v1(C) + v2(C) for all C), then the Shapley value for w is the sum of the Shapley values for v1 and v2: φi(w) = φi(v1) + φi(v2).
    - *Advantages:* Provides a unique, fair distribution based on strong axiomatic foundations. Considers contribution to all possible coalitions.
    - *Disadvantages:* Computationally expensive (requires considering all 2^N coalitions or all N! permutations). The resulting distribution might not be in the Core (i.e., might not be stable).

## **Part 8: Interdependence and Trust Analysis (ITA)**

ITA builds upon Coactive Design principles, providing a more specific framework to analyze and design human-AI teams by explicitly considering both task interdependencies and the willingness (trust) between team members.

### **8.1 ITA Framework: Team Design based on Interdependence and Willingness**

- **Definition:** ITA is a framework for analyzing joint human-machine activities to determine appropriate roles, responsibilities, and interaction mechanisms based on task requirements (interdependence) and mutual trust/willingness.
- **Core Idea:** Effective team design requires understanding not only *who needs what from whom* to perform the task (interdependence, similar to Coactive Design's analysis) but also *whether they are willing and perceived as capable* of fulfilling those needs (trust/willingness).

### **8.2 Purpose and Use Cases**

- **What is it used for?**
    - Designing human-AI team structures (e.g., who takes the lead, how tasks are shared).
    - Identifying potential bottlenecks or failure points due to lack of trust or unmet dependencies.
    - Determining necessary communication and interaction protocols.
    - Specifying requirements for AI capabilities (e.g., what information it needs to share to be observable) and human interfaces (e.g., how the human can direct the AI).
    - Guiding the development of adaptive systems that can adjust roles based on changing trust levels or task demands.

### **8.3 Process of doing ITA**

The process typically involves:

1. **Task Decomposition:** Break down the joint activity into key sub-tasks or phases.
2. **Interdependence Analysis:** For each sub-task, identify the dependencies: What does the human need from the AI? What does the AI need from the human? (Similar to IA tables in Coactive Design).
3. **Willingness Assessment:** For each identified dependency, assess the *willingness* of the provider (human or AI) to fulfill the need and the *trust* of the recipient in the provider's ability and intention. This might involve evaluating perceived ABI (Ability, Benevolence, Integrity) or other trust metrics.
4. **Identify Gaps/Risks:** Pinpoint areas where critical dependencies exist but willingness/trust is low, or where capabilities are insufficient.
5. **Design Interventions:** Define design solutions (e.g., improved AI explainability, better human interfaces for direction, modified task allocation, trust-building strategies) to address the identified gaps and support the necessary interdependence and willingness.

### **8.4 Incorporating Willingness Belief**

ITA explicitly adds the dimension of "willingness" or trust to the interdependence analysis. It recognizes that simply identifying a task dependency isn't enough; the system must also consider whether the parties involved are *trusted* and *willing* to meet that dependency. Low willingness/trust can be as detrimental as a lack of capability. This links directly back to the concepts of trust (Part 2) and trustworthiness (ABI model).

### **8.5 Possible Human/Machine Interdependences**

Examples include:

- **Information:** Human needs situation assessment from AI; AI needs goal clarification from human.
- **Action:** Human needs AI to perform a physical task; AI needs human to grant permission or handle an unexpected obstacle.
- **Monitoring:** Human needs AI to monitor for specific events; AI needs human to confirm alerts.
- **Decision-Making:** Human needs AI recommendation; AI needs human final approval or ethical judgment.

### **8.6 Applying ITA (e.g., Firefighter Robot Brutus)**

- **Scenario:** Imagine designing a robot (Brutus) to assist firefighters inside a burning building.
- **ITA Application:**
    - *Task:* Search and Rescue.
    - *Interdependence:* Firefighter needs Brutus's sensor readings (heat, structural integrity) and map; Brutus needs firefighter's directions for search paths and identification of victims vs. obstacles.
    - *Willingness/Trust:* Does the firefighter trust Brutus's sensors (Ability)? Does Brutus reliably follow directions (Integrity)? Does the firefighter believe Brutus prioritizes firefighter safety (Benevolence)? Does Brutus trust the firefighter's commands?
    - *Design Implications:* ITA might reveal the need for Brutus to clearly communicate sensor confidence levels (Observability for trust calibration), for the firefighter to have an intuitive interface to give commands (Directability), and for Brutus to predict the firefighter's likely movements (Predictability). If trust is low initially, roles might be adjusted for Brutus to take fewer critical actions until trust is established.

## **Part 9: Negotiation in Collaborative AI**

Negotiation is a fundamental process for resolving conflicts, making joint decisions, and allocating resources when parties (agents, humans) have differing interests or preferences but also potential benefits from cooperation.

### **9.1 Negotiation Fundamentals**

- **Why Negotiate?**
    - To reach **win-win** outcomes where possible, rather than simple compromises or win-lose scenarios.
    - To build and maintain **relationships** between collaborating parties.
    - To discover and leverage **common interests** alongside conflicting ones.
    - To allocate scarce resources or agree on joint plans.
- **Pareto Optimality:** An outcome is Pareto Optimal if there is no other outcome that would make at least one party better off without making any other party worse off. Efficient negotiations aim to reach the Pareto frontier.
- **Definitions:**
    - **Party:** An individual or group involved in the negotiation (e.g., human user, AI agent).
    - **Mediator:** A neutral third party that facilitates the negotiation process (can be human or automated).
    - **Issue:** A specific point or variable to be decided upon during negotiation (e.g., price, delivery time, task allocation).
- **Types of Negotiations:** Classified by:
    - **Number of Parties:** Bilateral (2 parties), Multilateral (>2 parties).
    - **Mediation:** Mediated vs. Unmediated.
    - **Number of Issues:** Single-issue vs. Multi-issue.
    - **Openness:** Degree to which preferences, constraints, strategies are revealed.
    - **Structure:** Single Multiple Bilateral (one agent negotiates pairwise with many) vs. true Multilateral (all parties negotiate together).
- **Principles for Good (Principled) Negotiation (Getting to YES framework):** Moving from positional bargaining (haggling over stances) to interest-based negotiation.
    - **P1: Build trust through mutual understanding and meaningful communication:** Separate the people from the problem. Communicate clearly, listen actively. (Relates to Trust, Observability).
    - **P2: Focus on revealing underlying interests rather than positions:** Ask "Why?" to understand the needs and desires behind stated positions.
    - **P3: Widen the options for finding a solution (Invent options for mutual gain):** Brainstorm creative solutions that address multiple interests simultaneously. Look for trade-offs.
    - **P4: Reach agreement that satisfies interests and adds value for all parties (Insist on using objective criteria):** Base the agreement on fair standards or principles independent of the parties' will (e.g., market value, expert opinion, regulations).
- **Phases of Negotiation:**
    - **Preparation:** Define issues, understand own preferences/utility, determine BATNA, research opponent/context.
    - **Exploration:** Exchange information, understand other party's interests and priorities (P1, P2).
    - **Bidding/Bargaining:** Propose offers and counter-offers, make concessions, explore options (P3).
    - **Closing:** Finalize agreement or decide on alternatives (P4, BATNA).
- **Key Concepts:**
    - **Preference Profile:** An agent's ranking or utility values over possible outcomes/bids.
    - **Bid/Offer:** A proposal specifying values for the negotiation issues.
    - **Utility Function:** A function mapping a bid/outcome to a numerical score representing an agent's preference intensity.
    - **BATNA (Best Alternative To a Negotiated Agreement):** The course of action a party will take if no agreement is reached. Defines the reservation value (minimum acceptable utility).
- **Openness in Negotiation:** How much information (preferences, BATNA, strategy) is revealed. Can range from fully open to fully closed. Affects trust and strategic possibilities.
- **Negotiation & Conflict Handling Styles:**
    - **Negotiation Styles (Activity-based):** Characterize behavior during negotiation:
        - *Interests:* Lenient (focus on relationship) vs. Hard (focus on own goals).
        - *Power:* Bending (yielding) vs. Dominant (asserting).
        - *Climate:* Jovial (friendly) vs. Hostile (adversarial).
        - *Flexibility:* Exploring (open to options) vs. Avoiding (sticking to position).
    - **Conflict Handling Styles (Thomas-Kilmann Instrument):** Based on two dimensions:
        - *Assertiveness:* Degree to which one tries to satisfy their *own* concerns.
        - *Cooperativeness:* Degree to which one tries to satisfy *others'* concerns.
        - **5 Styles:**
            1. **Competing:** High Assertiveness, Low Cooperativeness (Win-Lose).
            2. **Collaborating:** High Assertiveness, High Cooperativeness (Win-Win). Aims to find solutions fully satisfying both sides.
            3. **Compromising:** Moderate Assertiveness & Cooperativeness (Find middle ground, partial satisfaction).
            4. **Avoiding:** Low Assertiveness, Low Cooperativeness (Withdraw, postpone).
            5. **Accommodating:** Low Assertiveness, High Cooperativeness (Yield, satisfy others).

### **9.2 Formalizing Negotiation**

- **Measuring Success:** How "good" is a negotiated outcome?
    - **Pareto Optimal Frontier:** The set of all Pareto optimal outcomes. Reaching the frontier means the outcome is efficient (no value left on the table).
    - **Kalai-Smorodinsky Bargaining Solution:** Selects the point on the Pareto frontier that proportionally maximizes gains relative to the parties' ideal outcomes (utopia points), starting from a disagreement point (often BATNA). Focuses on fairness in terms of relative gains.
    - **Nash Bargaining Solution (Max Nash Product):** Selects the point on the Pareto frontier that maximizes the *product* of the parties' gains relative to the disagreement point. Axiomatically derived, often seen as balancing efficiency and fairness.
- **Preferences:**
    - **Over Issues and Bids:** Agents have utility functions defining their preferences for different values of single issues and combinations of issues (bids).
    - **Preference Independence:** Often assumed for simplicity: an agent's preference for a value on one issue doesn't depend on the value of another issue. Additive utility functions often assume this: U(bid) = w1*u1(issue1_value) + w2*u2(issue2_value) + .... This assumption may not always hold in reality.
- **Negotiation Support Systems (NSS):** Software designed to assist human negotiators.
    - **Purpose:** Help with preparation (preference elicitation), analysis (visualizing Pareto frontier), communication, bidding strategy, record keeping.
    - **Human-Human:** Facilitates negotiation between people.
    - **Human-Agent:** Allows a human to negotiate with an automated agent (which might represent another human or be autonomous).
    - **Bidding Support:** Suggest optimal bids, evaluate counter-offers.
    - **Pareto Optimality Support:** Help negotiators identify and reach efficient outcomes.

### **9.3 Automated Negotiation**

Designing agents that can negotiate autonomously.

- **Negotiation Protocols:** Define the rules of encounter: Who can make offers when? What types of offers are allowed? When does negotiation end? (e.g., alternating offers, fixed rounds). Essential for automated systems.
- **Negotiating on Behalf of a User:** An agent acts as a proxy, using the user's elicited preferences and constraints.
- **Normalization:** Utility values are often normalized (e.g., to [0, 1]) to allow comparison and analysis of strategies across different preference scales.
- **Mediator Strategies:** If a mediator agent is used, it can employ strategies to guide parties towards agreement.
    - **Example: Hill-Climber:** A simple mediator strategy. Starts with a random proposal. In each step, it slightly modifies the proposal and suggests it *if* it improves the utility for *at least one* party without harming the other (or according to some other improvement criterion). Aims to find Pareto improvements.
        - *Workings:* Local search for better agreements.
        - *Advantages:* Simple, can find Pareto improvements.
        - *Disadvantages:* Can get stuck in local optima, may not explore the space well, outcome depends heavily on starting point.
- **Negotiation Strategies (Agent's Decision-Making):** How an agent decides what offer to make next and whether to accept an incoming offer.
    - **BOA Framework (Bidding strategy, Opponent model, Acceptance condition):** A conceptual model separating an agent's strategy into these three components.
    - **Bidding Strategies (Offer Generation):**
        - **Random Walker:**
            - *Workings:* Generates random bids. Proposes a bid only if its utility is above the agent's reservation value (BATNA).
            - *Advantages:* Simple, unpredictable.
            - *Disadvantages:* Inefficient, unlikely to converge quickly or reach good outcomes, doesn't learn or adapt.
        - **Time-dependent Concession Strategy:**
            - *Workings:* Agent starts by proposing bids with high utility for itself and gradually concedes towards its reservation value as a deadline approaches. The concession rate is determined by a function of time (e.g., linear, polynomial yielding, exponential boulware). Utility_Target(t) = U_max - (U_max - U_reservation) * concession_function(time_elapsed / total_time).
            - *Advantages:* Systematic, ensures agreement before deadline if reservation values overlap. Widely used.
            - *Disadvantages:* Ignores opponent's behavior, can concede too quickly or too slowly. Vulnerable if opponent knows the concession curve.
        - **Trade-Off Strategy:**
            - *Workings:* When conceding, the agent tries to offer bids that have similar utility for itself but might be better for the opponent (by conceding on issues less important to itself but potentially more important to the opponent). Requires some estimation of opponent preferences.
            - *Advantages:* Can find integrative solutions (win-win) more effectively than simple time-based concession. Creates value.
            - *Disadvantages:* Requires opponent modeling, more complex.
        - **Behavior-Dependent (Based on Opponent Behavior):**
            - *Workings:* Adjusts bidding based on the opponent's previous actions (e.g., their concession rate). Examples:
                - *Tit-for-Tat (TFT) Variants:* Imitate the opponent's concession behavior.
                    - *Absolute TFT:* Mimic the opponent's last concession amount.
                    - *Relative TFT:* Mimic the opponent's concession relative to their utility range.
                    - *Averaged TFT:* Mimic the average of the opponent's past concessions.
            - *Advantages:* Adaptive, responsive to opponent, can encourage cooperation.
            - *Disadvantages:* Requires tracking opponent behavior, can lead to deadlock if opponent is non-cooperative, susceptible to noise.
- **Opponent Modelling:** Learning or estimating aspects of the negotiation opponent.
    - **Why?** To negotiate more effectively: predict opponent's moves, identify potential trade-offs, tailor offers, know when to accept.
    - **What?**
        - *Issue Importance:* Which issues matter most to the opponent?
        - *Value Preferences:* How do they value different options within an issue?
        - *Strategy:* What bidding/acceptance strategy are they using?
        - *Constraints/BATNA:* What is their reservation value?
    - **How? (Examples):**
        - **Frequency Analysis Heuristic:** Assumes opponent is more likely to concede on less important issues. Learns issue importance by observing which issue values change most/least frequently in the opponent's offers.
            - *Workings:* Counts value changes per issue in opponent bids. Issues changing less are assumed more important.
            - *Advantages:* Simple heuristic, requires no prior knowledge.
            - *Disadvantages:* Can be easily misled if opponent bids strategically, assumes opponent concedes rationally.
        - Other methods: Bayesian learning, regression analysis, fitting models to observed bids.
- **Acceptance Conditions:** Rules for deciding whether to accept the opponent's latest offer.
    - **Context:** Usually a deadline exists. Break-off (no deal) is often undesirable if agreement utility > BATNA.
    - **Challenge:** Accepting too early might miss better future offers; accepting too late risks running out of time or the opponent withdrawing. Finding the right balance.
    - **Guidelines (Functions AC(offer, time, history...) → Boolean):**
        - AC_Threshold(offer, threshold): Accept if Utility(offer) ≥ threshold. Threshold might be fixed or time-dependent (e.g., decreasing towards BATNA).
        - AC_Next(offer, my_next_bid): Accept if Utility(offer) ≥ Utility(my_next_bid). Accept if the opponent offers something better than what you were about to offer.
        - AC_Time(time, deadline_threshold): Accept any offer (above BATNA) if time > deadline_threshold. Panic button near the end.
        - Combinations are common.
- **Analysis of Negotiation Dynamics:** Studying the negotiation process itself.
    - **Metrics:** Utility traces over time, number of steps/bids, communication patterns.
    - **Classification of Steps (Bids):** Analyzing individual moves:
        - *Fortunate:* Bid increases utility for both parties.
        - *Unfortunate:* Bid decreases utility for both parties.
        - *Nice:* Bid increases opponent's utility.
        - *Concession:* Bid decreases own utility (usually to increase opponent's).
        - *Selfish:* Bid increases own utility while decreasing opponent's.
        - *Silent:* Bid doesn't change either party's utility significantly (e.g., exploring).
- **Comparing Negotiation Strategies:** Evaluating performance based on metrics like outcome utility (individual and social welfare), distance to Pareto frontier, negotiation speed (time/rounds), number of messages.
- **Component-based Negotiation in BOA framework:** BOA explicitly separates strategy components (Bidding, Opponent Model, Acceptance), allowing researchers to mix and match components to create and test diverse agent strategies.

### **9.4 Negotiation with LLMs**

Exploring the use of Large Language Models (LLMs) in negotiation.

- **LLMs that Negotiate:** Research on using LLMs directly as negotiating agents.
    - *LLM vs LLM / LLM vs Human:* Studies examining how well LLMs perform in negotiation tasks, their strategies, ability to understand context, maintain consistency, and achieve good outcomes compared to humans or traditional negotiation agents.
    - *Challenges:* Maintaining coherent long-term strategy, avoiding hallucinations, grounding in utility functions, handling complex trade-offs, susceptibility to persuasive (but suboptimal) arguments.
- **LLMs for Negotiation Preparation:** Using LLMs as tools to assist humans *before* negotiation.
    - *Domain Specification:* Can LLMs help define the negotiation issues, possible values, and constraints based on a scenario description?
    - *Preference Profiles:* Can LLMs help a user articulate or even generate a plausible preference profile (utility function) based on their stated goals?
    - *Potential:* Could automate parts of the tedious preparation phase.
    - *Limitations:* Quality and accuracy depend heavily on the LLM and prompt engineering. May generate unrealistic or inconsistent specifications.
- **Assessing the Quality of Domain and Preference Specifications:** How to evaluate whether the specifications generated by LLMs (or humans) are complete, consistent, and accurately reflect the intended negotiation scenario and preferences. This remains a challenge.
- **Overall Assessment of LLM Capabilities:**
    - *Strengths:* Natural language understanding and generation, potential for creative option generation, ability to process large amounts of text-based context.
    - *Weaknesses:* Difficulty with precise numerical reasoning and utility optimization, strategic planning limitations, consistency issues, potential biases, lack of true understanding of underlying interests or BATNA. Still largely experimental.
- **Negotiation as a Core of Collaboration:** Negotiation is not just about haggling; it's a key mechanism for coordinating actions, resolving disagreements, and aligning goals in any collaborative setting involving parties with potentially divergent interests. This applies across various perspectives:
    - *Economic:* Resource allocation, finding efficient outcomes.
    - *Psychological:* Managing relationships, trust, fairness perceptions.
    - *Social:* Establishing norms, reaching consensus.
    - *AI:* Designing agents that can effectively collaborate with humans and other agents.
    - *Ethical:* Ensuring fairness, transparency, and avoiding manipulation in automated negotiation.