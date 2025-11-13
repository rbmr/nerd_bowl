# Preparation

[https://gemini.google.com/app/db68eb881f2d97b7](https://gemini.google.com/app/db68eb881f2d97b7) 

[https://gemini.google.com/app/a8f2b640fb495faa](https://gemini.google.com/app/a8f2b640fb495faa)

## Project Specificities

### RL Methods

I recommend Actor-Critic Methods (e.g. A2C/A3C, DDPG, PPO, TRPO, SAC) as these combine Value-based methods and policy based methods. The advantage of value-based methods is that they are very sample efficient, and converge fast, but are not good with high dimensions and continuous data. Policy based methods are good with high dimensions and continuous data, but need to have a lot of samples, and also can get stuck in local optima. 
Actor-Critic based methods combine value and policy. Making it more sample efficient, yet also work well in high dimensional spaces. 

Financial data is scarce, and limited, therefore we are doing Model-Free RL. This also means we have to be sample efficient. However, financial data may be high dimensional. Therefore Actor-Critic is best suited for this project.

**Combination**

We could also just switch the project to DRL. This will include value based functions, policy based methods and actor-critic methods. 1 or 2 of each would suffice. This would make for great comparisons, however these methods tend to be generally inefficient learners and will still take a lot of time.

**Ruling out**

DDPG can be ruled out because it needs a lot of manual tuning.

**Recommendation**

I would suggest we try PPO, as it is very stable, and okay efficient. However it does not include the traditional exploit/explore algos like for DQN. So the RQ researching this will have to be changed to something else entirely, or changed to tweak tweakable aspects (Entropy bonus, policy variance, intialisation, Parameter space noise, intrinsic motivation, state normalization, adversarail exploration) (ICM, RND, paramter noise, adversarial explore strats are all outside of PPO itself)

Other than that, A2C/A3C might be a good choice. Relatively stable, but bad efficient. The same applies for the exploit/explore stuff as PPO.

We could also try DQN, as this is a value-based method, giving good sample efficiency. However it can be sensitive to hyperparameters and tuning might take a longer time. Also does not allow continous actions. 

| Method | HyperParams | Explore/exploit | Additional Explore/Exploit |
| --- | --- | --- | --- |
| PPO | RQ1 | RQ1 | Other |
| A2C/A3C | RQ1 | RQ1 | Other |
| DQN | RQ1 | Other | Other |

SAC (Soft Actor-Critic) would also be a good Algorithm to look into. It is very new and seems to have high sample efficiency and stability. Another one is TD3. Compared to PPO and A3C, these methods are 

**Additional Research questions**

- What are the effects on performance of different output spaces of the RL Model?
- Addition to Q5: Adaptive Exploration Strategies - adapt based on market conditions (e-greedy in one situation, boltzmann in the other)
- 

# Research Paper Collections

### **Keywords**

- Reinforcement Learning Algorithmic Trading
- Reinforcement Learning Algorithmic Trading Forex
- RL Algorithmic Trading
- RL Trading
- Reinforcement Learning Trading
- State Representation RL Forex
- State Representation RL Algorithmic Trading
- State Representation Reinforcement Learning Algorithmic Trading Forex
- State Representation Reinforcement Learning Algorithmic Trading

### **Other sources**

**Journals and Conferences**

Look for papers from top AI/ML conferences (NeurIPS, ICML, AAAI) and finance-specific AI conferences (like ACM ICAIF ). Journals like Mathematical Finance, Journal of Financial Data Science, or Expert Systems With Applications  might also yield interesting work. 

**Existing Codebases**

Examine forks of FinRL (and freqtrade) and other similar codebases for existing code on these topics for insights on implementations.