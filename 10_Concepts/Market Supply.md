---
tags:
  - supply-theory
  - topic/economics
  - topic/micro
aliases: []
status: good_enough
created: 2025-12-05 17:57
---
### Market Supply
Market supply represents the set of price-quantity pairs for which sellers are satisfied. "Satisfied" implies that at a given price, sellers are offering exactly the amount they wish to sell; they would consider themselves worse off if forced to sell more or less than that quantity at that price. 
The fundamental property is the **Law of Supply**: the quantity supplied rises as the price of the product rises. 

**Mathematical Representation**
- Standard Supply Function: $Q^s = g(P)$
- $Q^s$ is the quantity supplied.
- $P$ is the unit price.

**Structural Interpretation**
- **Horizontal**: Start with a price on the vertical axis to read the quantity sellers wish to sell on the Horizontal axis. 
- **Vertical Interpretation (Marginal Cost):** Start with a quantity on the horizontal axis to read the corresponding marginal cost on the vertical axis.
	- The price on the supply curve represents the **opportunity cost** of the last unit supplied by the marginal seller.
	- If the current quantity is $Q$, the supply curve indicates the marginal cost of delivering the $Q^{th}$ unit.

#### [[Production Horizons#The Short Run|Short-Run]] Industry Supply
The short-run industry supply curve is derived by the **horizontal summation** of the individual supply curves (marginal cost curves) of all firms in the industry.

For an industry with $n$ identical firms, if the individual firm's supply curve is given as quantity $Q_i$ as a function of Price $P$:
$$S_{market} = \sum_{i=1}^{n} Q_i(P) = n \times Q_i(P)$$
Where:
- $Q_i$ is the quantity supplied by a single firm.
- $n$ is the number of firms.

#### [[Production Horizons#The Long Run|Long-Run]] Industry Supply
In the long run, firms can adjust fixed inputs, and the number of firms can change.
- **Entry/Exit Mechanism:**
    - **Profit ($P > ATC$):** Induces entry, shifting industry supply to the right, lowering price
    - **Loss ($P < ATC$):** Induces exit, shifting industry supply to the left, raising price.
- **Equilibrium Condition:** The long-run equilibrium occurs when price equals the minimum of the [[Long-Run Cost Structure|Long-Run Average Cost]] (LAC) curve, resulting in zero economic profit.

**Industry Types based on Input Costs:**
1. **Constant Cost Industry:** Input prices do not vary with industry output. The long-run supply curve ($S_{LR}$) is a **horizontal line** at the minimum LAC.
2. **Increasing Cost Industry (Pecuniary Diseconomy):** Input prices rise as industry output expands (e.g., bidding up wages or material costs). The $S_{LR}$ is **upward sloping** because the minimum LAC rises with aggregate output.
3. **Decreasing Cost Industry (Pecuniary Economy):** Input prices fall as industry output expands (e.g., economies of scale in producing inputs). The $S_{LR}$ is **downward sloping**.

#### Determinants
The shift factors for the supply curve are:
- **Technology:** Improvements in technology reduce production costs, shifting the supply schedule to the right.
- **[[Factors of Production|Factor]] Prices:** Costs of inputs (labor, capital, raw materials). A rise in factor prices (e.g., wage increases, equipment costs) shifts the supply schedule to the left.
- **Number of Suppliers:** An increase in the number of firms producing a good shifts the curve to the right.
- **Expectations:** If suppliers expect higher prices in the future, they may withhold current supply (shifting current supply left) to sell later at the higher price.
- **Weather:** particularly relevant for agriculture; adverse weather (drought) shifts supply to the left .

##### Shifts vs Movements
- **Change in Quantity Supplied:** A movement _along_ the supply curve caused by a change in the price of the good.
- **Change in Supply:** A shift of the entire supply curve caused by a change in a determinant other than the good's own price.

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

