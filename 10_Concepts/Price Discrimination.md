---
tags:
  - economics/micro
  - game-theory
aliases: []
status: good_enough
created: 2025-12-10 16:01
---
### Price Discrimination
**Price Discrimination** is the practice where a [[Monopoly Market Structure|monopolist]] charges different prices to different buyers for the same good or service, attempting to transfer consumer surplus into [[Economic Profit]].

**Prerequisites for Success**
- The firm must be able to distinguish between categories of consumers or assess individual willingness to pay. 
- It must be impossible or impractical for buyers to trade among themselves. 

**Efficiency Implications**
While price discrimination transfers surplus from consumers to the firm, it can enhance [[Allocative Efficiency|efficiency]] by expanding output closer to the level where demand intersects marginal cost ($P=MC$), reducing deadweight loss compared to a single-price monopoly.

#### First-Degree Price Discrimination
**First-Degree Price Discrimination** (or Perfect Price Discrimination) involves charging each consumer their maximum reservation price for every unit of output purchased.

This way, the monopolist captures all Consumer Surplus; none remains with the buyer. 
The monopolist produces efficient level of output, because the decision to sell an additional unit does not require lowering the price on previous units. 

To set this up, they use [[Two-Part Tariff]]s. They set the per-unit cost to the Marginal Cost, and set the fixed fee equal to the consumer's entire surplus at that price level.

#### Second-Degree Price Discrimination
**Second-Degree Price Discrimination** involves charging different prices for different blocks or units of the same good. It is characterized by the bundling of price and quantity, inducing consumers to self-select into the pricing scheme that matches their demand.

**Properties & Dynamics**
- **Self-Selection:** Unlike first-degree or third-degree discrimination, the firm cannot directly distinguish consumer categories (e.g., rich vs. poor). Instead, it offers menus (packages) designed so that consumers voluntarily choose the option intended for their group.
- **Consumer Surplus:** The firm captures a substantial share of consumer surplus (represented by the area between the prices charged and the demand curve), though generally less than in first-degree discrimination.

#### Third-Degree Price Discrimination
**Third-Degree Price Discrimination** is the practice of charging different prices to buyers in completely distinct markets or identifiable categories.
- Equilibrium Condition: The profit-maximizing monopolist equates Marginal Revenue in each market to the common Marginal Cost.
$$\Sigma MR = MC \implies MR_1 = MR_2 = MC$$
- Pricing Rule: Based on the elasticity formula, prices are set such that:
$$P_1 \left(1 - \frac{1}{|\epsilon_1|}\right) = P_2 \left(1 - \frac{1}{|\epsilon_2|}\right)$$
    The monopolist charges a higher price in the market with less elastic demand ($|\epsilon_1| < |\epsilon_2| \implies P_1 > P_2$) .

#### Hurdle Model
The Hurdle Model is a form of price discrimination where the seller offers a discount to buyers who elect to overcome a specific obstacle.

The hurdle acts as a screening device. It must impose a cost that is low enough for price elastic buyers to accept, but high enough that price insensitive buyers prefer paying the regular higher price to avoid the hassle.





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

