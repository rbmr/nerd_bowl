---
tags:
  - economics/micro
  - statistics
aliases: []
status: good_enough
created: 2025-12-08 20:50
---
### Consumer Price Index
The Consumer [[Price Indices|Price Index ]] (CPI) measures the change in the cost of living, defined as the amount a consumer must spend to maintain a given standard of living. It is calculated by determining the cost of a representative bundle of goods and services during a reference period and comparing it to the current cost of that identical bundle. 

The CPI is the ratio of the expenditures required to buy the representative bundle at current prices versus reference prices:
$$CPI_t = \frac{\sum (P_{i,t} \cdot Q_{i,0})}{\sum (P_{i,0} \cdot Q_{i,0})}$$
Where:
- $CPI_t$ is the index value at time $t$.
- $P_{i,t}$ is the price of good $i$ at time $t$.    
- $P_{i,0}$ is the price of good $i$ in the reference period (base period).
- $Q_{i,0}$ is the quantity of good $i$ consumed in the reference period (fixed weight).

#### Biases
The CPI often fails to accurately reflect the true cost of maintaining a constant level of satisfaction (utility) due to inherent biases. 
##### Substitution Bias
Because the CPI uses a fixed bundle ($Q_{i,0}$), it ignores the consumer's ability to substitute away from goods whose prices have risen significantly toward relatively cheaper substitutes. This results in an overstatement of the increase in the cost of living.
##### Quality Bias
The CPI can overstate inflation if it fails to account for improvements in the quality of goods over time.
- **Mechanism:** If a product's price rises, but its quality (durability, features, efficiency) rises disproportionately, the "real" price per unit of utility may have fallen, yet a standard CPI calculation might register this purely as a price increase.
- **Constraint:** Measuring quality changes objectively is difficult because we cannot easily observe how much a consumer in the reference period would have been willing to pay for modern features.


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

