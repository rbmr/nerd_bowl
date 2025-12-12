---
tags:
  - probability-theory
aliases:
  - Probability Density Function
  - Probability Mass Function
  - PDF
status: good_enough
created: 2025-12-11 13:13
---
### Probability Density Function
The Probability Density Function (PDF), denoted $f(x)$, defines the probability distribution of a continuous random variable. Unlike the discrete PMF, $f(x)$ does not represent the probability that $X=x$ (which is 0), but rather the density of probability at point $x$.

*Definition (Continuous):*
A function $f(x)$ is a PDF for $X$ if for any set $B$ of real numbers:
$$P\{X \in B\} = \int_{B} f(x) \, dx $$
_Constraints:_
1. $f(x) \ge 0$ for all $x$.
2. $\int_{-\infty}^{\infty} f(x) \, dx = 1$.

*Discrete Analog (PMF):*
For discrete variables, the Probability Mass Function $p(x)$ is used:
$$p(a) = P\{X = a\} $$

**Interval Probability:** The probability that $X$ falls within interval $[a, b]$ is the area under the PDF curve between $a$ and $b$: $P(a \le X \le b) = \int_a^b f(x) dx$.
**Relationship to [[10_Concepts/Cumulative Distribution Function|CDF]]:**  $f(x) = \frac{d}{dx} F(x)$.

---

# Related
```dataviewjs
await dv.view("99_System/Scripts/tag_tables", dv.current());
```

### Direct Links to this document
```dataview
TABLE file.folder AS "Context"
FROM [[#]]
WHERE file.folder != "10_Concepts"
SORT file.folder ASC
```

