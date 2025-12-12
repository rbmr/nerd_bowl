Lecture Slides Speed Reading

Introduction

- Supervised Learning: Classification, Regression
- Unsupervised Learning: Clustering
- For classification, we pick the class with the highest posterior probability $p(y | \textbf{x})$. The posterior is hard to estimate, therefore we use Bayes’ theorem to derive it.
    - $P(y | \textbf{x}) = P(\textbf{x} | y) \cdot P(y) / P(\textbf{x})$
- Error is the probability of a misclassification. The bayes error is the minimum error, which is still typically larger than zero. GKarma, Newtons 3rd law: Life is cause and effect. Focus on your actions, not the outcome. You can give a plant water, but you can not make it grow.enerally, bayes error is impossible to compute.
- Misclassification cost, weights the importance of (directional) misclassifications. This allows us to compute the total risk as the probability of misclassification for each class combination weighed by their respective cost. The goal is to minimize this total risk by choosing the regions such that each of the intergrals are as small as possible.

Density based classifiers 

- We want to pick the class with the highest posterior probability. Since the posterior probability is hard to determine directly we use bayes rule. Since $p(\textbf{x})$ is constant across all classes we can ignore it. This means we only need to determine:
    - the class priors $p(y)$ which may be estimated using the total number of samples of class $y$ divided by the total number of samples. $\hat{p}(y)= n_m / n$
    - the estimate class-conditional densities $p(\textbf{x}|y)$, the hard part.
    - the product of the aformentioned two. $\textbf{x}$ is assigned to the class with the highest product.
- Parametric Classifiers. We assume the data for each class $y$ follows a specific (parametetric) distribution. The goal is to estimate the parameters of these distributions (like the mean $\mu$ and coveriance matrix $\Sigma$) from the training data, and then use it to determine $p(\textbf{x}|y)$. The following examples are just different sets of assumptions about the parameters $\mu_y$ and $\Sigma_y$ across classes $y$.
    - Quadratic Distriminant Analysis (QDA).
        - Assumption: Classes each have their own mean and covariance matrix.
        - Result: The decision boundary between classes is a quadratic function.
    - Linear Discriminant Analysis (LDA).
        - Assumption: Classes have their own mean, but share a single covariance matrix.
        - Result: The quadratic terms in the equation cancel out, leaving a linear decision boundary.
    - Nearest Mean Classifier.
        - Assumption: Classes have their own mean, but shares a single spherical coveriance metric ($\Sigma = \sigma^2I$). This implies all features are assumed to be uncorrelated and have the same variance.
        - Result: A linear classifier that assigns a new point to the class with the nearest mean.
    - Problem: Estimating covariance metrices can be difficult if there isnt enough data (fewer samples than features, or zero variance for a feature for a class), in which case the inverse covariance matrix cannot be inverted and the density is not defined.
- Non-parametric classifiers: used when the data doesnt fit a simple distribution (e.g. its multimodel). We estimate the density $p(\textbf{x}|y)$ directly from the data without assuming a specific distribution shape.
    - Histogram method.
        - Working: divide the feature space into a grid of bins with volume $h$ and estimate the density for class $y$ by counting how many of its points $k_y$ fall inside a bin. $\hat{p}(\textbf{x}|y) = (k_y / N_y) / h$.
        - Challenge lies in bin sizing, if the bins are too large, you lose the details of the distribution, if the bins are too small the estimate is too spiky and unstable for low amounts of data.
    - Parzen (kernel) density estimation
        - Smoother more sophisticated version of the histogram. Instead of using bins, it centers a kernel function (like a small gaussian) on every training point. The final density estimate is the sum or average over all of these kernels.
        - Challenge still lies in the width of the kernel, with the same tradeoffs as the histogram’s bin width.
    - k-Nearest Neighbour
        - Pick k nearest neighbours, and pick the most common class among them. Various tiebreakers are possible.
        - Rationale: Given a point $\textbf{x}$ we grow a sphere around it to enclose $k$ total neighbours, and call its volume $V_k$. We then estimate the density $\hat{p}(\textbf{x}|y_m) = k_m/(n_m \cdot V_k)$. Combining this with the class priors gives us $\hat{p}(\textbf{x}|y_m) \cdot \hat{p}(y) = k_m/(n_m \cdot V_k) * (n_m / n) = k_m / (n \cdot V_k).$ Since $n$ and $V_k$ are the same for all classes, the only part that matters is $k_m$. The complex density estimation then simplifies to a majority vote.
        - Challenge: For small k, we have a complex “ragged” boundary. For large k the boundaries are overly simple.

Curse of dimensionality

- Curse of dimensionality. Adding more features is not always better, since as the number of dimensions increases the amount of data needed to get a reliable estimate grows exponentially.
    
    ![image.png](40_Robert/dsait/content/image.png)
    
    ![image.png](40_Robert/dsait/content/image%201.png)
    

Some definitions

- Mean $\mu = E[x]$,
- Sample mean $\hat{\mu} = 1/N \cdot \Sigma_{i=1}^N x_i$
- Covariance $\Sigma = E[(x - \mu)(x - \mu)^T]$,
- Sample covariance $\hat{\Sigma} =1/(N-1) \cdot \Sigma^N_{i=1} (x_i - \hat{\mu})(x_i - \hat{\mu})^T$
- Autocorrelation $R_x = E[\textbf{x}\textbf{x}^T]$
- Cross-correlation is $E[\textbf{x}y]$

Multi layer perceptron

- One of the best educative animated series that exists:

https://www.youtube.com/watch?v=aircAruvnKk&list=PLUkWDtXVDWv_dH_m14SKycyUvv7cf312W

- Backpropagation is the computation of the gradient of hte loss with respect to every weight and bias in the network. It uses a systematic application of the calculus chain rule to reuse computations.

Optimization Algorithms:

- The learning rate is arguably the most important parameter to tune.
- Exponentially weighted moving average (EWMA):
    - The standard recursive definition for any new data point $y_t$ at time $t >0$, with smoothing factor $0 \lt \rho \lt 1$ is: $S_0 = 0$, $S_t = (\rho) S_{t-1} + (1-\rho)y_t$.
    - The initialization with $S_0 = 0$ creates a bias that pulls the average toward zero during the first few time steps, this bias makes $S_t$ not a proper weighted average, because the sum of weights applied to the data points $y_1, y_2, \dots, y_t$ does not equal $1$, but rather $1-\rho^t$.
    - Bias correction normalizes the weigths by $1-\rho^t$, correcting the bias $\hat{S}_t = S_t / (1-\rho^t)$. Since $\rho^t \to 0$ for increasing $t$, the correction becomes less significant with iterations.
    - Alternatively, you can set $S_0 = y_1$, bypassing the bias but gives $y_1$ a “special” weight that doesnt fit the same pattern as other $y_i$ values.
- Momentum smooths the average of noisy gradients with EWMA.
    - $v_i = (\rho) v_{i-1} + (1-\rho) \nabla_\theta$
    - $\theta^* = \theta - \epsilon v_i$
- RMSprop smooths the zero-centered variance of noisy gradients with EWMA.
    - $r_i = (\rho) r_{i-1} + (1-\rho) \nabla_\theta^2$
    - $\theta^* = \theta - \epsilon \frac{\nabla_\theta}{\sqrt{r_i}}$
- Adam combines momentum with RMSprop, and always uses bias correction.
    - $v_i = (\rho_1) v_{i-1} + (1 - \rho_1) \nabla _\theta$
    - $\hat{v}_i = v_i / (1 - \rho_1^i)$
    - $r_i = (\rho_2) r_{i-1} + (1 - \rho_2) \nabla _\theta^2$
    - $\hat{r}_i = r_i / (1 - \rho_2^i)$
    - $\theta^* = \theta - \epsilon \frac{\hat{v}_i}{\sqrt{\hat{r}_i}}$

Data normalization

- Methods that rely on distance (like k-NN and Nearest Mean), its crucial that all features are on a similar scale. Features should therefore be scaled (e.g. to have zero mean and unit variance) before classification.
- Centering inputs at zero and equal dimension variance speeds up training. Simple: subtract mean, and divide by standard deviation.
- Batch norm: normalize learned features.
    - Inputs to hidden units are normalized by calculating the mean and variance across the current mini-batch of training samples, and normalizing the values to have zero mean and standard deviation of one.
    - To allow the network to reverse the normalization Batch norm introduces a scaling parameter and a shifting parameter for the normalized output.
    - Since mini-batches statistics are not available or desirable at test time, the mean and variance used for normalization during testing are computed as a EWMA of the batch means and variances calculated during training.

Maximize MLE, Minimize KL-Divergence, Minimize Cross-Entropy

- Maximum Likelihood Estimation (MLE): The goal of MLE is to find the model parameters ($\theta$) that maximize the likelihood of observing the given training data ($\mathbb{X}$). The following are equivalent $\arg\max_\theta p(\mathbb{X};\theta)=\arg\max_\theta \Pi ^m_{i=1} p_\text{model} (x^{(i)}; \theta) = \arg\max_\theta \sum ^m_{i=1} \log 	p_\text{model} (x^{(i)}; \theta) = \arg \max_\theta \mathbb{E}_{x \sim \hat{p}_\text{data}} [\log p_\text{model}(x; \theta)]$
- An alternative way to think about the same problem is to minimize the dissimilarity between the model’s distribution $p_\text{model}$ and the true data distribution $\hat{p}_\text{data}$. We kan use Kullback-Leibler (KL) divergence to measure this dissimilarity.
    - $D(\hat{p}_\text{data}||p_\text{model}) = \mathbb{E}_{x\sim\hat{p}_\text{data}}[\log\hat{p}_\text{data}(x) - \log p_\text{model}(x;\theta)]$
    - We can minimize this as follows:
        - $\arg\min_\theta\mathbb{E}_{x\sim\hat{p}_\text{data}}[\log\hat{p}_\text{data}(x) - \log p_\text{model}(x;\theta)]$ (we minimize the KL-divergence)
        - $\arg\min_\theta\mathbb{E}_{x\sim\hat{p}_\text{data}}[\log\hat{p}_\text{data}(x)] + \mathbb{E}_{x\sim\hat{p}_\text{data}}[-\log p_\text{model}(x;\theta)]$ (split into entropy, and cross-entropy respectively)
        - $\arg\min_\theta \mathbb{E}_{x\sim\hat{p}_\text{data}}[-\log p_\text{model}(x;\theta)]$ (equivalent to minimizing the cross-entropy)
    - This is then clearly identical to maximizing the MLE.

Classification loss

- In classification we predict labels given data, so we $\arg\max_\theta P(Y|X;\theta)$.
- For binary classification, we just need one output as a number in [0, 1]. This can then be interpreted as a probability. Clamping values removes gradients, so instead we use the sigmoid logistic function. Combined with squared loss, the gradient becomes smaller the more the model is wrong, which is not ideal. The correct loss function is the Bernoulli Cross-Entropy loss, defined as:  $\mathcal{L}_\text{CE}(y,t)= -t\log y - (1-t) log (1 -y)$.
- For K-class classification, labels are represented using one-hot encoding (vector with zeros with a single 1 at the index of the correct class. The logistic function is generalized to the softmax function for K classes:
    - $Y_k = \text{softmax}(z)_k = e^{z_k} / \Sigma_{k'} e^{z_{k'}}$
- The corresponding loss function is the multiclass cross-entropy which simplifies (due to the one-hot $t$ vector, to the negative log-probability of the correct class.
    - $\mathcal{L}_{\text{CE}}(y,t) = -\Sigma^K_{k=1} t_k \log t_k$

Generative classifiers vs Disciminative classifiers.

- Generative classifiers attempt to learn the full data distribution by applying bayes theorem to an estimation of its individual components.
    - Pros: Posterior probability estimate, finds full data distribution and outliers, you can use knowledge about how data is generated, its clear how to estimate the parameters (maximum likelihood).
    - Cons: Need large training sets, The probabilistic model may be too simple.
- Discriminative classifiers take a direct approach, avoiding density estimation entirely. They model the posterior probability directly, or just find a function that describes the decision boundary itself.
    - Pros: Can define very flexible models, May need less training data.
    - Cons: Need to define the loss function, finding optimal parameters is challenging, Output score is not interpretable (contrary to probabilities), outlier rejection is not obvious.

Linear Classifiers

- Linear Discriminant model: Classifier that uses a linear function to create a decision boundary. Classification depends on the weighted sum of the features being above of below 0.
    - Boundary is defined by $g(x) = \textbf{w}^T\textbf{x}+w_0= \tilde{\textbf{w}}^T\tilde{\textbf{x}}=0$.

| Method                    | Perceptron                                                                                                             | Fisher Linear Disciminant (FLD)                                                                                                                 | Least Squares                                                                                | Logistic Regression                                                                                                              |            |                                                  |                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------ | ---------------------- |
| Description               | Finds a linear decision boundary by iteratively correcting its errors on misclassified data points.                    | Finds a linear classifier by projecting data onto a line that maximizes class seperability. Coincidentally finds the same solutions as for LDA. | Treats classification as a linear regression problem to predict numeric labels (e.g. +1/-1). | Discriminative model that directly models the posterior probability $p(y                                                         | x)$        |                                                  |                        |
| Assumption                | Two classes are linearly seperable (single hyperplane can perfectly separate all data points from class 1 and class 2) | Relies on estimating class means ($\mu_A, \mu_B)$ and covariance matrices ($\Sigma_A, \Sigma_B$).                                               | The relationship between features and numeric labels can be modeled by a linear function.    | It assumes the log-odds (the log-ratio of the posterior probabilities) is a linear function of $x$: $\ln(p(y_1                   | x) / p(y_2 | x)) = \beta_0 + \beta^T x$. Rewrite gives $p(y_2 | x)=1/(1+e^{w_0+w^Tx})$ |
| Loss Function / Criterion | $J(w) = \Sigma_{\text{misclassified}~ x_i}(-y_i w^T x_i)$                                                              | $J_{F}=\frac{                                                                                                                                   | w^{T}\mu_{A}-w^{T}\mu_{B}                                                                    | ^{2}}{w^{T}\Sigma_{A}w+w^{T}\Sigma_{B}w}  = \frac{w^{T}(\mu_{A}-\mu_{B})(\mu_{A}-\mu_{B})^{T}w}{w^{T}(\Sigma_{A}+\Sigma_{B})w} = |            |                                                  |                        |
\frac{w_T\Sigma_\text{between} w}{w^T\Sigma_W w}$ | $J(w) = E[(y - w^T x)^2]$ | We maximize the log-likelihood: $\max_{\beta} \ln(L)$. Where $L = \prod_{i=1}^{N_1} p(\mathbf{x}_i^{(1)}|y_1) \cdot
\prod_{i=1}^{N_2} p(\mathbf{x}_i^{(2)}|y_2)$ |
| Optimization | Iterative: $w(t+1) = w(t) + \rho_t \Sigma_{\text{misclassified}~x_i}y_ix_i$ | Solve for $\frac{\partial J_F}{\partial w} = 0$. Solution becomes $w = \Sigma^{-1}_W(\mu_A-\mu_B)$  where $\Sigma_W=\Sigma_A + \Sigma_B$ | Solved analytically using the normal equations. $\hat{\textbf{w}} = (X^TX)^{-1}X^T\textbf{y}$ | Iterative: $\beta_{\text{new}} = \beta_{\text{old}} + \eta \frac{\partial \ln(L)}{\partial \beta}$ |

Non-linear classifiers:

- Decision Trees: Nodes are splits of the data, and the leafs are classes. Splits are based on a criterion, often node impurity (such as gini index or entropy). Splitting is repeated until a condition is met such as impurity no longer improving, enough purity, or maximum depth being reached. Decision trees can be come large and are relatively unstable.
- Random forests: subsample N objects with replacement (bootstrap), fit a decision tree. The final prediction is the average of the outcomes. Also called bagging (Bootstrap aggregation).
- Boosting: Instead of averaging independent classifiers, add classifiers sequentially. Repeatedly trains models, focusing each subsequent model on the weakpoints of the previous model.
- AdaBoost (Adaptive Boosting).
    1. Initialize all objects with an equal weight.
    2. Train a simple/weak classifier $m$ on weighted samples.
    3. Compute the error $\epsilon_m$ on the entire dataset. 
    4. Define the classifier weight, weighing better models higher. $\alpha_m = 0.5 \log(\frac{1-\epsilon_m}{\epsilon_m})$
    5. Increase the weights.
    6. Focus on weakpoints, by multiplying the weights of misclassified objects by $e^{\alpha_m}$, and correctly classified objects by $e^{-\alpha_m}$. 
    7. Repeat for as long as needed.
- Combining classifiers: Combing simpler (linear) classifiers to obtain non-linear classifiers. Base classifiers must be sufficiently different, such that their combination is better than any single classifier. For this we use a trained classifier, which can learn to use the strengths of each classifier. Generally requires error backpropagation.

Classifier Evaluation

- Goal: find a good estimate of the true classification error.
- Classification loss is hard to optimize directly, we generally optimize a surrogate loss. Optimizing the surrogate loss, is generally not the same as optimizing the true loss however.
- A way to estimate the true loss is using a test set. We decide how to split our data into train and test. The larger the train set, the better the model being evaluated, the larger the test set, the lower variance the error estimate.
- k-fold cross validation divides the data into k equally sized folds, trains the model on k-1 folds, and evaluates the model on the remaining fold. Leave-one-out (LOO) is a special case of k-fold cross validation where we test a single object at a time.
- Learning curves plot the estimated classification error (for both training and test set) against the number of samples in the training set.
    
    ![image.png](40_Robert/dsait/content/image%202.png)
    
    ![image.png](40_Robert/dsait/content/image%203.png)
    
- Confusion matrices provides the counts of class-dependent errors, giving a more detailed view than overall error rate. Can be used to estimate the overall cost (weighted error) for a particular classifier.
    
    ![image.png](40_Robert/dsait/content/image%204.png)
    

Rejection:

- Outlier rejection: reject objects that are far from the data distributions of all clases.
- Ambiguity rejection: reject objects close to the decision boundary.
- Rejection curve: trade-off between a classifier’s error rate and the fraction of objects it rejects. Increased rejection leads to decreasing classification error.
- Rejection cost: rejection itself has a cost. Following the rejection curve, the goal is to find the optimal balance between the cost of making an error $c_\epsilon$ and the cost of rejecting an object $c_r$. $c = c_r r + c_\epsilon \epsilon$

Complexity:

- The complexity of a classifier indicates the ability to fit to any distribution. We choose complexity based on the available training set size. Complex classifier can learn more complex patterns, but it requires enough training data to avoid overtraining (overfitting).
- Bias-variance dilemma: Describes tradeoff in model complexity. The Mean Squared Error (MSE) of any classifier can be decomposed into bias and variance.
    - Bias$^2$: measures how much the average classifier (over all possible training sets) differs from the true optimal classifier. High-bias models are too simple and underfit the data. They are stable but systematically wrong.
    - Variance: measures how much a classifiers differ (over all possible trianing sets) amongst eachother. High variance models are too complex and overfit their training data. They are flexible but unstable.
    - Tradeoff: Simple models have high bias and low variance, stable but fail to capture the true pattern. Complex models have low bias and high variance, flexibly but sensitive to the training data and require more data to work well. This leads to a U-shaped curve for classification error versus model complexity. The optimal model balances the tradeoff between underfitting and overfitting.
- Number of free parameters is not a good measure of a classifier’s complexity.
- A formal measure for the complexity of binary classifiers is the VC (Vapnik-Chervonenkis) Dimension.
    - The VC-dimension of a binary classifier is the LARGEST number $h$ for which there EXISTS a set of $h$ points that the classifier can **shatter**.
    - A classifier can **shatter** a set of points if it can perfectly classify the points for ANY assignment of labels.
    - This creates a bound on the true error ($\epsilon$) based on the apparent training error ($\epsilon_A$). When $h$ is small, the true error is closer to the apparent error. However, the bound is very loose as it assumes a worst-case scenario.

Support Vector Classifiers (SVC)

- Cross-Terms: multiplications of different features from the same feature space
- For a linear classifier in a p-dimensional space, the VC-dimension is $h = p + 1$.
- Vapnik believed we could do better. Suppose we only look at the subset of lines that successfully separated the data with a margin of at least $\rho$. Then:
    - $h \leq \min(\lfloor R^2 / \rho^2\rfloor, p) + 1$
    - This shows that to minimize the $h$ we must find the seperating hyperplane with the maximum margin $\rho$.
- A linear classifier is defined by the equation $w^Tx + b = 0$. We set up our hyperplane such that the margin boundaries are given as follows:
    - $w^{T}x_{i}+b\ge+1$, for $y_{i}=+1$
    - $w^{T}x_{i}+b\le-1$, for $y_{i}=-1$
- The margin $\rho$ is the perpendicular distance between two parallel planes $w^{T}x_{i}+b=1$, $w^{T}x_{i}+b=-1$. Therefore the margin is $\rho = 2 / ||w||$. This provides the direct algebraic relationship, to maximize $\rho$, we must minimize $||w||$, or for convenience (to make the derivative simpler) minimizing $\frac{1}{2}||w||^2$. Of course subject to the constraint that all points are correctly classified outside this margin.
- The new goal becomes to minimize $J = \frac{1}{2} ||w||^2$, such that $y_i(w^T x_i + b) \ge 1$ for all $N$ data points. To solve this, we reformulate the problem as a quadratic programming problem, that we solve for the $\alpha_i$ values:
    - $\max_{\alpha}\sum_{i=1}^{N}\alpha_{i}-\frac{1}{2}\sum_{i,j}^{N}y_{i}y_{j}\alpha_{i}\alpha_{j}x_{i}^{T}x_{j}$
    - Subject to the constraints: $\alpha_{i}\ge0~\forall i$ and $\sum_{i=1}^{N}\alpha_{i}y_{i}=0$.
    - We can use this solution to compute $w=\sum_{i=1}^{N}\alpha_{i}y_{i}x_{i}$
    - Most of the $\alpha_i$ weights will be zero, the data points $x_i$ for which the corresponding $\alpha_i$ is non-zero are the Support Vectors (the vectors on the margin boundary).
        - The number of support vectors provides a practical upper bound on the leave-one-out cross-validation error. $E_{LOO} \le \frac{\text{\# of support vectors}}{N}$
- Kernel trick: allows the SVC to find a hyperplane in this high-dimensional space, which corresponds to a highly non-linear separator in the original feature space.
    - A key observation is that the final classifier $f(z)$ depends only on the inner product of data points $x_i^T x_j$ or $x_i^T z$.
        - $\max_{\alpha}\sum_{i=1}^{N}\alpha_{i}-\frac{1}{2}\sum_{i,j}^{N}y_{i}y_{j}\alpha_{i}\alpha_{j}(x_{i}^{T}x_{j})$
        - $f(z) = w^T z + b = \sum_{i=1}^{N}\alpha_{i}y_{i}(x_{i}^{T}z)+b$
    - We can replace every instance of an inner product $x_i^T x_j$ with a kernel function $K(x_i, x_j)$.
        - $max_{\alpha}\sum_{i=1}^{N}\alpha_{i}-\frac{1}{2}\sum_{i,j}^{N}y_{i}y_{j}\alpha_{i}\alpha_{j}K(x_{i},x_{j})$
        - $f(z)= w^T z + b= \sum_{i=1}^{N}\alpha_{i}y_{i}K(x_{i},z)+b$
    - This kernel function implicity computes the dot product of the data points in a new often higher-dimensional feature space, without us ever having to explicitly map the points to that space.
- Some decent videos to serve as an introduction:
    - https://www.youtube.com/watch?v=_YPScrckx28
    - https://www.youtube.com/watch?v=Q7vT0--5VII

Regularization

- Regularization: regularization are techniques to reduce the test error, possibly at the expense of increased training error.
- Main idea is to penalize model complexity by adding it to the optimization objective, balanced by a regularization parameter $\alpha$.
    - $\tilde{J}(\theta; X, y) = J(\theta; X, y) + \alpha\Omega(\theta)$
    - Examples include weight norm regularization:
        - $L_2$ regularization. $\tilde{J}(w; X, y) = \frac{\alpha}{2}w^Tw + J(w; X, y)$
        - $L_1$ regularization. $\tilde{J}(w; X, y) = \alpha||w|| + J(w; X, y)$
- Regularized QDC is used when the covariance matrix cannot be properly inverted. The regularization is to apply a small amount of noise $\lambda$  to the covariance matrix. $\tilde{\Sigma_i}=\Sigma_{i}+\lambda\mathbb{I}$
- Dataset augmentation: aritificially create more data by applying distortions (noise) to existing data.
- Feature reduction: reduce the number of features.
- Early stopping: stop training when the error on the validation set stops improving.
    - Intialization: initializing a model with small weights can prevent vanishing gradients, ensures the model starts out “simple”, this way you can stop the model before becomes too complex.
- Noise robustness: You can add noise to the input (dataset augmentation), weights (encourages stability, and is mathematically equivalent to adding weight norm regularization for noise with infinite variance), or to the output (label smoothing)
- Parameter tying (parameter sharing): forces different parts of the model to use the same weights, reducing the total number of weights, regularizing the model.
- Dropout (controversial): at each training step a random fraction of the network’s nodes are temporarily made inactive (output set to 0), this forces the network to learn more robust features. Can be seen as a combination of weight decay and noise injection. At evaluation time: (1) no nodes are dropped, instead weights are rescaled to account for the training process, or (2) simulate multiple networks with dropped out nodes and average their outcomes.

![image.png](40_Robert/dsait/content/image%205.png)

Convolutional Neural Networks

- https://www.youtube.com/watch?v=KuXjwB4LzSA
- In the context of CNNs, convolution is generally used to describe cross-correlation. This means it can be seen as a simple sliding dot product instead of requiring a 180 degree rotation.
- Dense Neural nets are capable of performing the same operations as CNNs, but CNNs have significantly less parameters, and serve as a strong “suggestion” for spatial relation.
- Equivariance: First translating then convolving is the same as convolving then translating. This ensures kernel has the same effect, regardless of where it is used on the image.
- Padding may be used to reduce shrinking.
- Residual/Skip Connections: attempt to solve vanishing gradients (one unstable gradient causing all reliant gradients to dissapear) by changing the connections between the layers.
    
    ![image.png](40_Robert/dsait/content/image%206.png)
    

RNNs

- Recurrent Neural Network: Process a sequence in order, and share the same parameters at each time step.

RNNs

- Recurrent Neural Network: Process a sequence in order and share the same parameters at each time step. Idea: Reuse the output of a layer at one time step as input to the network at the next time step.
    - $H_t = \phi(X_t W_{xh} + H_{t-1} W_{hh} + b_h)$
    - $O_t = H_t W_{hq} + b_q$
    - Problem: gradient is a string of products over the recurrence length. This causes exploding or vanishing gradients.
        
        ![image.png](40_Robert/dsait/content/image%207.png)
        
- Long Short Term Memory (LSTM) adds a cell state that runs parallel to the main hidden state. And adds three gates: Forget gate (decides what information to throw away from the old cell state), input gate (decides what new information to store in the cell state), output gate (decides what part of the cell to reveal as the current hidden state (to use for predictions).
    - $I_t = \sigma(X_t W_{xi} + H_{t-1} W_{hi} + b_i)$
    - $F_t = \sigma(X_t W_{xf} + H_{t-1} W_{hf} + b_f)$
    - $\tilde{C}_t = \tanh(X_t W_{xc} + H_{t-1} W_{hc} + b_c)$
    - $C_t = F_t \odot C_{t-1} + I_t \odot \tilde{C}_t$
    - $O_t = \sigma(X_t W_{xo} + H_{t-1} W_{ho} + b_o)$
    - $H_t = O_t \odot \tanh(C_t)$
        
        ![image.png](40_Robert/dsait/content/image%208.png)
        
- Gated Recurrent Unit (GRU) is a simpler more modern alternative to LSTM. It combines the cell state and hidden state, and only uses two gates: update gate $Z_t$, and reset gate $R_t$.
    - $R_t = \sigma(X_t W_{xr} + H_{t-1} W_{hr} + b_r)$
    - $Z_t = \sigma(X_t W_{xz} + H_{t-1} W_{hz} + b_z)$
    - $\tilde{H}_t = \tanh(X_t W_{xh} + (R_t \odot H_{t-1})W_{hh} + b_h)$
    - $H_t = Z_t \odot H_{t-1} + (1 - Z_t) \odot \tilde{H}_t$
        
        ![image.png](40_Robert/dsait/content/image%209.png)
        

Self Attention

- Word embeddings: Converting discrete words or tokens into a d-dimensional real-values feature vector. The key goal is to create a vector representation with semantic vector similarities. General Learning process:
    - One-hot encode the word or token given a vocabulary.
    - Embed the word $h_i = x_i W_{dv}$
    - Predict context $y_i = h_i W_{vd}$
    - Repeat to optimize the weights by solving one of two tasks:
        - Skip-gram: predict context words using the center word
        - CBOW (Continuous Bag-Of-Words): predict center word using context words.
    - When training is finished, we can reuse $W_{dv}$ as a lookup table to get the embedding.
- Self attention is a parallelizable alternative to training recurrent nets.
- Self attention in word reweighting: Learning how to re-weigh words by incorporating context.
    - Get Query $q$, Key $k$ and Value $v$ vectors: $\textbf{q}_i = \textbf{W}_q \textbf{x}_i, \textbf{k}_i = \textbf{W}_k \textbf{x}_i, \textbf{v}_i = \textbf{W}_v \textbf{x}_i$
    - Compute word simmilarities: $w_{ij}' = \textbf{q}_i^T \textbf{k}_j$
    - Normalize similarities using softmax: $w_{ij} = \exp w_{ij}' / \Sigma_j \exp w_{ij}'$
    - Value reweighted output vector: $\textbf{y}_i = \Sigma_j w_{ij} \textbf{v}_j$
- Multiheaded attention: create multiple variants of the learnable weight matrices $\mathbf{W}^r_q, \mathbf{W}^r_k, \mathbf{W}^r_v$ where $r$ is the index for each head. By having its own set of weights, each had can learn to pay attention to different aspects of the sequence. Implementations:
    - Narro multi-head attention: The initial word embedding vector is divided into $k$ chunks, each had operates on one of these smaller chunks.
    - Wide multi-head attention: Each head is applied to the full-dimensional vector. The outputs of all heads are concatenated together, then the combined vector is projected back to the original dimension using some other matrix $\textbf{W}_o$.
- Position encoding: addresses the permutation invariance of self-attention. Solution: explicitly add information about the word’s position to the input vectors. Two ways of doing this:
    - Learned position embedding: Treat positions as words to be learned (embedded). The learned position vector is then added to the word embedding vector for the word at that position.
    - Position encoding (fixed method): uses a fixed mathematical function to map the position number to some d-dimenstional vector that is then added to the word embedding vector.
    - Quite a few models also modify the attention mechanism directly to address the permutation invariance instead of just adding position encodings to the input. This is used in most state of the art models.

Unsupervised Learning

- Unsupervised Learning: Machine learning without a ground truth labeling.
- Auto Encoders: Feed forward networks designed to reproduce its input at the output layer.
    - Encoder ($f(x)$): Maps the input $x$ to a hidden representation $h$.
    - Decoder ($g(h)$): Maps the hidden representation $h$ to the reconstructed output $r$.
    - Loss function: Mean squared Error between $x$ and $f(g(x))$
    - Hidden layer size:
        - Undercomplete if $h < x$, compresses the input.
        - Overcomplete if $h > x$, no compression needed, useful for representation learning.
            - Regularization can be used to prevent an overcomplete auto encoder from copying the input.
- Denoising Auto Encoder: Generate noisy samples $\tilde{x}$  from the input $x$ using a distribution $p(\tilde{x}|x)$. Then the network is trained to reconstruct the noise-free $x$ from the noisy input.
- Generative Models, transform samples from a distribution you can easily sample from (such as $\mathcal{N}(0, I)$) into the target distribution.
- Variational Inference methods are a class of techniques used to approximate complex probability distributions that are otherwise difficult or impossible to calculate directly. The difference being measured using KL-divergence, which is then minimized.
- The Latent Space is the compressed lower-dimensional representation of the original, high-dimensional input data.
- Variational Auto Encoder (VAE): combines the autoencoder architecture with a probabilistic approach via variational inference.
    - The VAEs encoder outputs the parameters that define a simple distribution (like a Gaussian) for the latent representation. A latent vector $z$ is then sampled from this distribution. The decoder network then takes this sampled vector $z$ and reconstructs the original input $x$.
    - To allow backpropagation, this sampling uses the reparameterization ****trick: $z = \mu + \sigma \odot \epsilon$where $\epsilon$ is drawn from a standard normal distribution $\mathcal{N}(0, 1)$.
- Generative Adversarial Networks (GANs): trains two competing neural networks (a generator and a discriminator) in order to generate increasingly convincing data. The generator $G_{\theta_G}$ tries to create realistic data from random noise. The discriminator $D_{\theta_D}$ tries to distinguish between real data and generated data, outputting a probability between 0 (fake) and 1 (real). This competition is defined through the minimax objective function:
    - $\min_{\theta_{G}} \max_{\theta_{D}} \mathbb{E}_{x \sim p_{data}} \log D_{\theta_{D}}(x) + \mathbb{E}_{z \sim p(z)} \log(1 - D_{\theta_{D}}(G_{\theta_{G}}(z)))$
- Diffusion Models: class of generative models that create new data samples by reversing a gradual noising process. Core idea:
    - Forward processing (Noising): Start with a real image ($x_0$) and repeatedly add a small amount of noise over many steps $t = 0, \dots, T$ until the image becomes pure noise ($x_T$). This forward process transforms the data distribution into a simple one, like a standard normal distribution $\mathcal{N}(0,1)$. This involves two actions at each step
        - Shrinking (Step to $\mu=0$): $x_{t+1} = x_t(1-\beta)$
        - Adding Noise (Step to $\sigma = 1$): $x_{t+1} = x_t + \beta \epsilon$, where $\epsilon \sim \mathcal{N}(0,1)$
    - Reverse Process (denoising): Train a neural network to learn how to reverse this process. The network learns to take a noisy image $x_t$, and predict the small step required to make it slightly less noisy (moving it towards $x_{t-1}$).