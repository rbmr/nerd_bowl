# Machine and Deep Learning

# Fundamentals of ML and Classification (W1&3)

Machine Learning involves systems learning from examples or data. Pattern recognition specifically focuses on automatically finding patterns and regularities in data, such as recognizing objects, faces, or situations. 

## Core Concepts

### Features

Objects are devised by a set of measurements called features, which form a **feature vector** $x=(x_1,x_2,...,x_n)$. This vector exists in a multi-dimensional **feature space**. Good features lead to clear separation between classes, whereas poor features or noise can make classification more difficult. 

### Bayes’ theorem and it’s use in classification

Bayes’ theorem provides the theoretical foundation for the ideal classifier and motivates many practical classification algorithms. 

This theory uses probabilities to determine the best class assignment for an objects based on it’s features. 

Bayes’ theorem is as follows:

$$
p(x|y)p(y)=p(y|x)p(x) \,\,\,\text{ or }\,\,\, p(y|x)=\frac{p(x|y)p(y)}{p(x)}
$$

In this theorem $p(y|x)$ represents the posterior probability. This represents the probability of an object belonging to class $y$ given its feature vector $x$.  $p(y)$ represents the prior, the initial probability of the hypothesis. $p(x)$ is the probability of the evidence, how likely it is for these features to occur. $p(x|y)$ is the likelihood of the features occuring, given the case that $y$  is true. 

As we often work with limited data, and with continuous values for the features, we are working with estimations of all of these probabilities. 

- $\hat{p}(y) = \frac{N_y}{N}$ (often not always)
- $\hat{p}(x)=\sum_{i=1}^C \hat{p}(x|y_i)\hat{p}(y_i)$
- $\hat{p}(x|y)$ is also estimated

**Classification**

The following properties are all equal, and they all describe a classifier, given a feature vector $x$:

IF:

- $p(y_1|x)>p(y_2|x)$
- $p(y_1|x) - p(y_2|x) > 0$
- $\frac{p(y_1|x)}{p(y_2|x)}>1$
- $log(p(y_1|x))-log(p(y_2|x))>0$

then assign to $y_1$, otherwise $y_2$

The decision boundary is where $p(y_1|x)=p(y_2|x)$.

$\Omega_i$ is defined as the area or region of the feature space where $y_i$ is the assigned label.

### Classification Error & Risk

The classification error is calculated as $p(error) = \sum_{i=1}^C p(error|y_i)p(y_i)$. So for each class it is calculated how many have been have been misclassified in that class, normalized with the class’ prior. 

**Bayes’ error**

Bayes error ($\epsilon^*$) is the minimum attainable error. This is basically always >0 as there is always overlap between the probability distributions. 

In practice we don’t have access to the real distributions of the prior, likelihood, and the evidence, thus we never obtain $\epsilon^*$. It is also impossible to compute due to that reason, and also because of the difficult to compute high dimensional integrals. 

**Loss**

Sometimes misclassification of class A is much worse than misclassification of class B.  We introduce a measure of cost of assigning an object that came from class $y_j$ to $y_i$: $\lambda_{ji}$.

The conditional risk of assigning object x to class $w_i$ $w_i$$l^i(x)=\sum_{i=1}^{C}\lambda_{ij}p(y_i|x)$

The average risk over a region $r^i = \int_{\Omega}l^i(x)p(x)dx$

Overall risk: $r = \sum_ir^i$

The decision rule becomes choosing the class that minimized the conditional risk, rather than simply maximizing the posterior. 

$$
\sum_j^C\lambda_{ji}p(y_j|x) \le \sum_j^{C}\lambda_{jk}p(y_j|x) \text{ for k=1,..,C}
$$

### Curse of Dimensionality

The **Curse of Dimensionality** refers to the challenge that as the number of features (dimensions) increases, the amount of data needed to create a reliable model grows exponentially66. In high-dimensional spaces, the data becomes very sparse, and most data points are located in the "tails" of the distribution7. This makes it difficult to estimate densities accurately without an enormous amount of training data8888. For example, using a histogram with 10 bins per feature would require $10^2=100$  bins for 2 dimensions, but $10^{50}$ bins for 50 dimensions, which is impractical.

## Density-Based Classifiers (Generative)

These models learn the underlying probability distribution of the data for each class, specifically $p(x|y)$. They build a full model of how the data for each class is generated. To classify a new point, they use Bayes' theorem to calculate the posterior probability $p(y|x)$.

- **Advantage**: They can be used to generate new data samples and can identify outliers.
- **Disadvantage**: They often require large training sets and may rely on assumptions about the data's distribution that are too simple.

### Parametric (Gaussian) models

These models rely on parameters to model a distribution. Specifically these models use the Gaussian distribution:

$$
p(x) = \frac{1}{\sqrt{2\pi det(\Sigma)}}exp\Big(-\frac{1}{2}(x-\mu)^T\Sigma^{-1}(x-\mu)\Bigl)
$$

$$
\hat{p}(x|y) = \frac{1}{\sqrt{2\pi^p det(\hat{\Sigma}_y)}}exp\Big(-\frac{1}{2}(x-\hat\mu_y)^T\hat{\Sigma}^{-1}_y(x-\hat\mu_y)\Bigl)
$$

We have to estimate the parameters on some training set, e.g. using maximum likelihood estimators:

$$
p=dim(x) \,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\, \hat\mu = \frac{1}{N}\sum^{N}_{i=1}x_i \,\,\,\,\,\,\,\,\,\,\,\,\,\,\,\, \hat\Sigma = \frac{1}{N}\sum^{N}_{i=1}(x_i-\hat\mu)(x_i-\hat\mu)^T
$$

**Class posterior Probability**

From the $\hat p (x|y)$ we can derive for a class $y_i$:

$$
log(\hat p (y_i|x)) = -\frac p2 log(2\pi) - \frac 12 log(det\Sigma_i)-\frac 12(x-\mu_i)^T\Sigma^{-1}_i(x-\mu_i)+log(p(y_i))-log(p(x))
$$

$p(x)$ can be dropped since it is independent of $p(y)$, thus for comparisons of class posterior probabilities it can be removed from the equation, transforming the equation to a new function $g_i(x)$:

$$
g_i(x) = -\frac p2 log(2\pi) - \frac 12 log(det\Sigma_i)-\frac 12(x-\mu_i)^T\Sigma^{-1}_i(x-\mu_i)+log(p(y_i))
$$

Assign $x$ to class $y_i$ when for all $i\ne j$: $g_i(x)>g_j(x)$.

**QDA**

General form: $f(x)= \textbf x^T \textbf W\textbf x+\textbf w^T\textbf x +w_0$

For two classes:

- $\textbf W = \frac 12 (\Sigma^{-1}_{2} - \Sigma^{-1}_{1})$
- $\textbf w = \mu^T_1\Sigma_1^{-1}-\mu^T_2\Sigma_2^{-1}$
- $w_0 = -\frac 12 log\,det\Sigma_1-\frac 12 \mu_1^T\Sigma_1^{-1}\mu_1+log\,p(y_1)
+\frac 12 log\,det\Sigma_2+\frac 12 \mu_2^T\Sigma_2^{-1}\mu_2-log\,p(y_2)$

Estimating the covariance matrix $\Sigma$ can be done like above, but if one of the variances is 0 (on the main diagonal), then we cannot invert the matrix. This is due to insufficient data. 

In this case, an alternative is to average over all  

**LDA**

LDA assumes that all features have the same variance and are uncorrelated. Thus the estimate is that all labels have the same covariance matrix $\hat \Sigma = \sigma^2 \mathbb I$. 

Therefore the first term in QDA cancels out. 

$f(x)=log\,p(y_i|x)-log\,p(y_2|x)=\textbf w^T\textbf x + w_0$

- $\textbf w = \hat \Sigma^{-1}(\hat\mu_2-\hat\mu_1)$
- $w_0=\frac 12 \hat\mu_2^T\hat\Sigma^{-1}\hat\mu_2-\frac 12 \hat\mu_1^T\hat\Sigma^{-1}\hat\mu_1+log\,\frac{p(y_1)}{p(y_2)}$

With the simplification of the estimated covariance matrix: $g_i(\textbf x) = -\frac{1}{\sigma^2}\Big(\frac 12 \mu_i^T\mu_i-\mu_i^T\textbf x\Bigl) + log(p(y_i))$

**Nearest Mean Classifier**

This again is a linear discriminant, but it just uses the distance from the mean of the classes to discriminate. 

$f(x)=log\,p(y_i|x)-log\,p(y_2|x)=\textbf w^T\textbf x + w_0$

- $\textbf w = \hat\mu_2-\hat\mu_1$
- $w_0=\frac 12 \hat\mu_2^T\hat\mu_2-\frac 12 \hat\mu_1^T\hat\mu_1+\sigma^2log\,\frac{p(y_1)}{p(y_2)}$

### **Non-parametric Density Estimation**

These methods do not assume a distribution.

**Histogram method**

1. Split the feature up into bins with width $h$
2. Count the number of objects in each region: $k_N$
3. $\hat p(x )= \hat p(\hat x ) \approx \frac 1h \frac{k_N}{N}, |x-\hat x|\le h/2$

The bins should be chosen effectively, as $h$ cannot be too small or too large. $h$ depends on the amount of sample, and distance between samples.

**Parzen Density Estimation Classifier**
The **Parzen classifier** is a non-parametric method used to estimate probability density. It works by placing a "kernel" (a predefined shape, often a Gaussian) on each training data point. To classify a new data point, it sums the contributions of all these kernels. The density estimate is smoother or more detailed depending on the width parameter (*h*) of the kernels. The choice of *h* is crucial; a small *h* can lead to overfitting, while a large one can oversmooth the estimate.

**k-Nearest neighbor classifier**
The **k-Nearest Neighbor (k-NN) classifier** is another non-parametric method. To classify a new data point, it identifies the *k* closest training data points (its "nearest neighbors"). The new point is then assigned to the class that is most common among those *k* neighbors. Unlike the Parzen method, which fixes the volume (kernel width), k-NN effectively adjusts the volume around the new point until it encloses *k* training samples. The choice of *k* affects the smoothness of the decision boundary

## Discriminative Classifiers

 These models directly learn the decision boundary between classes without modeling the underlying data distribution. They focus on estimating the posterior probability $p(y|x)$ directly as a function of $x$.

- **Advantage**: They can be more flexible and may require less training data.
- **Disadvantage**: Finding the optimal parameters can be challenging, and outlier rejection is not straightforward.

### Linear Classifiers

A linear discriminant is a classifier that does not estimate data densities. Instead it assumes a decision boundary between classes can be described by a linear function of the input features $x$.

$$
g(x)=w^Tx+w_0
$$

If $g(x)\ge0$, assign to class $y_1$, otherwise $y_2$.

The bias term can be incorporated into the weight vector by using homogenous coordinates. This involves augmenting the feature vector to $\tilde x = \begin{bmatrix}
x\\ 1\end{bmatrix}$ and the weight vector to $\tilde w$, allowing the discriminant function to be simplified to $g(x)=\tilde w^T \tilde x$. 

**Perceptron**

The perceptron is a linear classifier tat finds the decision boundary weights by iteratively optimizing a cost function. 

The perceptron loss function is the amount of misclassified samples: $\mathcal J(w)=\sum_{misclassified \,\,x_i} -y_iw^Tx_i$

This loss is minimized using gradient descent: $w_{t+1} = w_t + \rho \sum_{misclassified \,\,x_i} y_ix_i$.

The perceptron is guaranteed to find a solution if the data is linearly separable. If the data is not linearly seperable it will never cconverge and keep on updating, keep on updating, keep on updating …

 

**Fisher Linear Discriminant**

The fisher linear discriminant is a linear classifier for two-class problems. It finds the weight vector $w$ by optimizing **Fisher’s criterion**, which is designed to maximize class separability. 

The criterion, $\mathcal J_F$, aims to maximize the distance between the projected class means (between-class variance), while simultaneously minimizing the variance within each projected class (within-class variance). 

$$
\mathcal J_F(w)=\frac{|w^T\mu_A-w^T\mu_B|^2}{w^T\Sigma_Aw+w^T\Sigma_Bw}
$$

This can be rewritten using the between-class scatter matrix, $\Sigma_{between}$, and the within-class scatter matrix $\Sigma_{within} = \Sigma_A+\Sigma_B$.

$$
\mathcal J_F(w)=\frac{w^T\Sigma_{between}w}{w^T\Sigma_{within}w}
$$

The optimal $w$ that maximizes this criterion can be found by taking the derivative and setting it to zero. The solution is: $w=\Sigma^{-1}_W(\mu_A-\mu_B)$.

This yields the same classifier as LDA, which assumes Gaussian class densities with equal covariance matrices. However, Fisher does not assume any specific data distribution. 

**Logistic Classifier**

The logistic classifier is a linear classifier that directly models the posterior probability $p(y|x)$. It assumes that the log-odds (the log of the posterior probability ratio) is a linear function of the input features $x$: $\ln(\frac{p(y_1|x)}{p(y_2|x)})=\beta_0+\beta^Tx$. By solving for $p(y_2|x)$, we get the logistic function, also known as sigmoid:

$$
p(y_2|x)=\frac{1}{1+exp(\beta_0+\beta^Tx)}
$$

The parameters $\beta_o$ and $\beta^T$ are found by maximizing the likelihood, or log-likelihood, of the training data. This optimization is typically performed using gradient ascent, where the weights are updated iteratively.

**Least Squares**

The least squares classifier treats classification as a regression problem. The goal is to find a linear function $w^Tx$ that best predicts the target class labels (e.g. $y_1=+1 \,\, y_2=-1$). It minimized the expected mean squared error. In theory the optimal $\hat w$ that minimizes this error, is the inverse of the auto-correlation matrix, and the cross-correlation vector multiplied.

In practice, we only have training samples. We estimate these matrices from the training data we have, and the labels. Then the final closed-form solution is: $\hat w = (X^TX)^{-1}X^Ty$.

### Bias-variance dilemma

The bias variance dilemma is a fundamental concept describing the trade-off in classifier complexity. A classifier’s performance depends on the specific training data it was trained on. 

The mean squared error, when averaged over all possible training sets, can be decomposed into two components:

- Bias squared: measures how much the average classifier differs from the true optimal function. A high bias: A simple model is stable, but may be fundamentally wrong leading to underfitting.
- Variance: measures how much the classifier’s prediction varies from one training set to another. High variance: A complex model is flexible, but highly sensitive to the specific training data, leading to overfitting.

Simple models have low variance but high bias, and complex models have low bias but high variance. As classifier complexity increases, the total error first decreases, and then increases. This rise in error with complexity is related to the curse of dimensionality. 

### Non-linear Classifiers

**Nonlinear features**

This method creates a nonlinear classifier by modifying the input features of a simple linear classifier.

**Decision trees**

A decision tree is a classifier that uses a tree-like structure. 

- **Structure:** Internal nodes in the tree test an individual feature against a threshold ($x<b)$. Leaf nodes represent the final class chosen for the input.
- **Training:** At each node, the training set is split, and the process continues for both child nodes.
- **Splitting criteria:** The decision of how to split a node is often based on a node impurity criterion. A node is split fi the impurity measure Q can be improved. Common impurity methods are:
- **Stopping:** The tree stops splitting when the impurity Q no longer improves, a node is sufficiently pure, or a maximum depth has been reached.
- **Pros and cons:** Decision trees have simple training rules, and are fast to execute. However, they can grow very large and suffer from instability, meaning that a small change in the data can lead to very different tree structures.

**Random forests**

Random forests are an ensemble method designed to stabilize decision trees. Since averaging identical trees does not work, randomness is introduced. The randomness is added in two ways: 

1. subsampling data: the training data is subsampled using bootstrap (sampling with replacement)
2. Subsampling features: only choosing a subset of features to optimize Q for (either at tree level, or node level).

This process is called Bootstrap Aggregation, or bagging. The final bagged classifiers output is the average of all classifiers, and can be applied to any unstable classifier to reduce variance. 

**Boosting classifiers**

Boosting is another ensemble method that, instead of averaging independent classifiers, adds classifiers sequentially. The goal is incrementally build a strong classifier from a set of weak ones. 

The fundamental principle of all boosting algorithms is to sequentially train weak learners, where each new learner focuses on the mistakes of the previous ones. The final prediction is a **weighted combination of all the weak learners**. It’s not about creating a single, monolithic model in the end; it's about forming a powerful committee (an ensemble) where each member's vote is weighted based on its performance.

**AdaBoost**

AdaBoost applies a classifier’s weight based on its error, lower error higher weight. This is the say of the model in the final decision. It also updates the weights of the data objects using an exponential function. 

**Ensemble**

By creating an ensemble of multiple classifiers (linear and non-linear) you can create a new non-linear classifier that might be even better and more stable. Like boosting, it outputs an average of the results of the underlying classifiers. Having all identical classifiers does not result in better results, and having very similar classifiers also does not do anything (as they are all probably best in the same situations). 
Often, having all diverse and different classifiers still does not work better than the single best classifier in the set of used classifiers. 
A solution is to let make a Trained Combiner, which does a weighted average of the results of the classifier, based on the input. For this advanced error backpropagation is needed.

# Core Deep Learning (W2)

## Feedforward networks (MLP)

A feed-forward network, also known as a Multi-Layered Perceptron, is a type of artificial neural network. 

It’s primary goal is to approximate some target function $f^*$. For example in classification, it learns a function $y=f^*(x)$, that maps input data $x$ to a correct label $y$.

The network learns a mapping $y = f(x;\theta)$ by finding the optimal set of parameters $$ $\theta$ (the weights and biases).

Networks are structured as a chain of functions composed of multiple layers: $f(x)=f^{(1)}(f^{(2)}(f^{(3)}(x)))$.  $f^{(n)}(x)$ is the function for the $n$-th layer from the output.

- $f^{(3)}$  is the first layer
- $f^{(2)}$ second and hidden layer
- $f^{(1)}$ third and last layer → output
- Depth = 3

For a network with one hidden layer, the full function can be written as:

$$
f(x) = g(\textbf{x}^T\textbf{W}+\textbf c^T)\textbf w + b
$$

**Solving non-linearity**

A linear model cannot solve non-linearly separable problems like XOR. Furthermore, stacking multiple linear layers just results in another linear function, which makes hidden layers useless. 

The solution to this problem is to apply a non-linear activation function $g(\textbf x)$ element-wise to the output of a layer before it is passed to the next. The hidden layer calculation becomes: $h = g(W^Tx+c)$.

## Loss Functions and Cost minimization

The goal of training is to set the parameters $\theta$ so that the network’s function $f(x;\theta)$ accurately matches the target function $f^*(x)$. This is done by minimizing a **loss function** (also called error or cost function).

An example of such a loss function is the Mean Squared Error (MSE): $\mathcal L(\textbf x, y;\theta) = (f(\textbf x )-y)^2$, given a vector $\textbf x$ and the true answer $y$. 

The total loss of a dataset is the average of the individual feature vectors and true values: $L(\textbf X,\textbf y;\theta) = \frac 1n \sum_{i=1}^{n}\mathcal L(\textbf x^{(i)}, y^{(i)};\theta)$, given a feature matrix $\textbf X$ and true final answer vector $\textbf y$.

The total loss is the average over the whole training dataset with $n$ amount of samples. 

$$
J(\theta)=\frac 1n \sum_{i=1}^{n}\mathcal L(\textbf x^{(i)}, y^{(i)};\theta)
$$

### Gradient Descent

To reduce loss, the network parameters are moved in the opposite direction of the gradient. 

The gradient $\nabla_\theta L$ is a vector of all partial derivatives, which indicates how a small change in each parameter affects the loss.

The gradient descent update rule is $\theta' = \theta-\epsilon\nabla_\theta L(\textbf X,\textbf y;\theta)$, where $\epsilon$ is the learning rate. 

Calculating the gradient over the entire dataset is too slow and impractical. SGD approximates this gradient by using only a small “mini-batch” of $m$  samples. Thus the updates are performed with $\textbf X$ and $\textbf y$ being subsets of the total dataset.

### Maximum Likelihood Estimation

Maximum likelihood estimation (MLE) is a method for estimating the parameters $\theta$ of a statistical model. The core idea is to find the parameter values that maximize the probability (the likelihood) of observing the given training data ($X)$.

- Definition: $\theta_{ML} = \argmax_\theta p_{model}(X;\theta)$
- Assumptions: The training data, is assumed to be independent and identically distributed (i.i.d.). This allows us to rewrite the likelihood as a product of individual probabilities: $\argmax_\theta \prod_i p_{model}(x^({i};\theta)$.
- Log-likehood: Multiplying many small probabilities can cause numerical instability. To solve this, we optimize the log-likelihood instead. Since the logarithm is a monotonically increasing function, maximizing the log-likelihood is equivalent to maximizing the likelihood. This handily converts the product into a sum: $\argmax_\theta\sum_i\log p_{model}(x^{(i)}; \theta)$.
- Expectation: Maximizing the sum is the same as maximizing the average, as dividing by a constant (the amount of samples), does not change the $\argmax$.

$$
\argmax_\theta \mathbb E_{x\sim \hat p_{data}}[\log p_{model}(x;\theta)]
$$

### KL Divergence

MLE can also be interpreted as minimizing the dissimilarity between the emprical distribution of the data $\hat p_{data}$, and the model’s distribution $p_{model}$.

This dissimilarity is often measured by the Kullback-Leibler (KL) divergence: 

$$
D_{KL}(\hat p_{data} ||p_{model})=\sum_i \hat p_{data}(x^{(i)})\log\frac{\hat p_{data}(x^{(i)})}{p_{model}(x^{(i)})}
$$

This can be expanded and rewritten as: $\mathbb E_{x\sim \hat p_{data}}[\log p_{data}(x)] - \mathbb E_{x\sim \hat p_{data}}[\log p_{model}(x;\theta)]$.

### Negative Log Likelihood

When minimizing the KL divergence, the first term, $\mathbb E_{x\sim \hat p_{data}}[\log p_{data}(x)]$, is the entropy of the data distribution. This term is a constant with respect to the model parameters $\theta$, so it can be removed from the optimization. This leaves us with the goal of minimizing the second term:

$$
\argmin_\theta \mathbb E_{x\sim \hat p_{data}}[-\log p_{model}(x;\theta)]
$$

This is the Negative Log-Likelihood. Minimizing this is the same as maximizing the MLE. 

### Cross-Entropy

Minimizing the KL Divergence is also equivalent to minimizing the cross-entropy. 

- Cross-Entropy, $H(p_{data}, p_{model})$, is related to the KL divergence and the data’s entropy, $H(p_{data})$, by the equatiopn: $H(p_{data}, p_{model}) = H(p_{data}) + D_{KL}(p_{data}||p_{model})$
- Equivalence: Since $H(p_{data})$ does not depend on the model’s parameters, minimizing the cross-entropy is the same as minimizing the KL divergence.

### Difference between CE, NLL, MLE, KLd

They are equivalent in the context of the optimization goal of gaining the parameters. The difference is not in the mathematical result, but in the perspective each term provides and the context in which it’s used. 
MLE is mainly used in a sense of getting a model that makes the observed data most probable. 

NLL is used for optimization process itself. This is the loss or the cost that SGD wants to minimize. 

KLd is used when you want an theoretical understanding of what you are accomplishing. 

CE is also used as an information-theoretic concept, but in deep learning it has become the name for the loss functions.

### Binary Classification

In binary classification, we predict one of two classes. The model outputs a single probability, $P(Y=1|X)$.

**Problem with linear units:** Using a linear unit and clamping the output to the range of [0,1], is problematic. When the output is clamped, the gradient for any values outside the range becomes zero, and the model stops learning via gradient descent. 

**Sigmoid function:** A better solution is the logistic sigmoid function, which squashes any real-valued input $z$ into the [0,1] range:  $\sigma(z)=\frac{1}{1+e^{-z}}$. 

**Logistic regression:** Using sigmoid output with a squared error loss $\mathcal L_{SE}$ is also flawed, as it creates small gradients for very wrong predictions, slowing down learning (this is called saturation). The better loss function is the Bernoulli cross-entropy loss, which is NLL for the Bernoulli distribution). $\mathcal L_{CE}(y,t)=-t\log y-(1-t)\log(1-y)$, where $t$ is the true label, and $y$ is the model’s predicted probability for $t=1$.

### Multiclass Classification

For classification with $K$ classes, the following are used:
**One-hot encoding:** Target labels $t$ represented as a vector of length $K$ with a 1 at the index of the correct class. 

**Softmax function:** This function generalizes the sigmoid to $K$ classes. It takes a vector $z$ of length $K$, and converts it into a probability distribution $y$ (all elements positive and sum to 1). $softmax(z)_k = \frac{e^{zk}}{\sum_{k=1}^K e^{zk'}}$.

**Cross-Entropy loss:** The loss function is the multiclass cross-entropy $\mathcal L_{CE}(y,t) = -\sum_k t_k \log y_k$.

## Backpropagation

### Backpropagation Mechanism

Backpropagation, also known as the "backward pass" , is an efficient algorithm used to compute the gradients (derivatives) required for training most deep learning networks.

In the context of network training, the process is:

1. **Forward Pass:** A training sample is presented, and values are computed forward through the network to get a result.
2. **Loss Calculation:** This result is compared to the true label to calculate a "Loss".
3. **Backward Pass:** Backpropagation is then used to efficiently compute the gradient of this loss with respect to all the trainable weights and biases in the network. This computation starts "backwards" from the loss6.

These computed gradients are then used by an optimization algorithm, like gradient descent, to "update the weights".

### Backpropagation Mathematics

Backpropagation is fundamentally a "clever application of the chain rule of calculus" to compute derivatives.

- **The Chain Rule:** For nested functions, the derivative is found by multiplying the derivatives of the outer and inner functions.
    - In Leibniz notation, if $z = f(y)$ and $y = g(x)$, then the derivative of $z$ with respect to $x$ is: $\frac{dz}{dx}=\frac{dz}{dy}\frac{dy}{dx}$
    - For multi-variable functions, the rule is summed: $\frac{d}{dt}f(x(t),y(t))=\frac{\partial f}{\partial x}\frac{dx}{dt}+\frac{\partial f}{\partial y}\frac{dy}{dt}$
- **Efficiency:** A naive application of the chain rule for each parameter (like $w$ and $b$) can lead to "redundant computations". For example, the terms $(\sigma(wx+b)-t)$ and $\sigma^{\prime}(wx+b)$ are computed for both $\frac{\partial\mathcal{L}}{\partial w}$ and $\frac{\partial\mathcal{L}}{\partial b}$.
- **Computational Re-use:** Backpropagation avoids this by decomposing the problem. For the model $\mathcal{L}=\frac{1}{2}(\sigma(wx+b)-t)^{2}$, it defines intermediate variables: $z=wx+b$, $y=\sigma(z)$, and $\mathcal{L}=\frac{1}{2}(y-t)^{2}$.
    - $\frac{d\mathcal{L}}{dw}=\frac{d\mathcal{L}}{dy}\frac{dy}{dz}\frac{dz}{dw}$
    - $\frac{d\mathcal{L}}{db}=\frac{d\mathcal{L}}{dy}\frac{dy}{dz}\frac{dz}{db}$
    
    This decomposition allows for "efficient re-use" of the computed terms $\frac{d\mathcal{L}}{dy}$ and $\frac{dy}{dz}$. A "bar notation" (e.g., $\overline{y} = \frac{d\mathcal{L}}{dy}$) is often used to emphasize the re-use of these computed values.
    

### Backpropagation Algorithm

The backpropagation algorithm operates on a **computational graph**, where nodes represent variables (scalars, vectors, etc.). The algorithm proceeds in two main phases:

1. **Topological Sort:** First, a "topological ordering" of the graph's nodes is created. This is a linear list of nodes where for every directed edge from node $u$ to node $v$, $u$ comes before $v$ in the list.
2. **Topological Sort:** First, a "topological ordering" of the graph's nodes is created. This is a linear list of nodes where for every directed edge from node $u$ to node $v$, $u$ comes before $v$ in the list.
3. **Forward Pass:** The graph is traversed in this topological order (e.g., from $i=1$ to $N$)23. At each node $n_i$, its value is evaluated using its corresponding function. This pass computes the final output, or loss (e.g., $\mathcal{L}_{reg}$).
4. **Backward Pass:** The algorithm then traverses the graph in **reverse** topological order (e.g., from $i=N-1$ down to 1).
    - **Initialization:** The gradient of the final node $n_N$ with respect to itself is set to 1 (i.e., $\overline{n_{N}}=1$)
    - **Propagation:** For each node $n_i$, its gradient $\overline{n_{i}}$  is computed by summing the gradients passed back from all its **children nodes** ($n_j$)
    - **Update Rule:** The core update rule for any node $n_i$ is $\overline{n_{i}}=\sum_{n_{j}\in Children(n_{i})}\overline{n_{j}}\frac{\partial_{n_{j}}}{\partial_{n_{i}}}$. This sums the incoming gradients, each multiplied by the local partial derivative.

## Backpropagation Modularity

Viewing backpropagation as a "message passing" system highlights its **modularity**.

- In this view, each node in the computational graph is a self-contained unit.
- During the backward pass, each node **aggregates** (sums up) the gradient "error signals" it receives from its "children".
- It then **passes** a new message (its own computed gradient) to its "parents" (the nodes that originally fed into it).

The primary benefit of this is modularity: a node "only needs to compute derivatives wrt its arguments". It doesn't need to know the structure of the rest of the network, only its immediate inputs and the gradient signals it receives from its immediate outputs.

# Optimization and Evaluation (W4)

## Advanced Optimization Algorithms

Training a network involves repeatedly updating weights to minimize a loss function. SGD approximates the true gradient using mini-batches of data. A critical parameters in SGD is the learning rate. When this is set too high, the optimization can oscillate due to overshooting and fail to find a good minimum, When this is set too low, it will take a very long time to converge. 
SGD is also noisy, due to the min-batches.

**Improving SGD**

To improve SGD, advanced methods track past gradient statistics. The core, memory-efficient technique used for this is the Exponentially Weighted Moving Average (EWMA). 

- **Formula: $S_t=(\rho S_{t-1}) + (1-\rho)y_t$**
- **Efficiency:** It provides a running average while only requiring oine extra value ($S_{t-1}$) to be stored per parameter, which is far more efficient than storing the $k$ most recent values.
- **Bias correction:** Because $S_0$ is initialized to 0, the average is biased low during the initial steps. This is fixed using bias correction: $\hat S_t = \frac{S_t}{1-\rho^t}$. As $t$ gets large, this correction automatically fades away.

EWMA is used to build more sophisticated optimizers:

- **Momentum:** This method applies EWMA to the average of the gradients. This smooths out the noisy steps in SGD and helps the optimization move faster in the consistent correct diretion.
- **RMSprop:** This method applies EWMA to the squared gradient, to estimate the variance. It then divides the gradient update by the square root of this variance, effectively adapting the learning rate for each parameter individually.
- **Adam (adaptive momentum estimation):** This algorithm combines both momentum and RMSProp. It maintains an EWMA for both the mean (first moment) and the variance (second moment) of the gradients. It also applies bias correction to both estimates, making it very effective in early training.

## Normalization

Normalization is another technique to speed up training.

**Feature normalization:** Standardizing input feature to have a zero mean and unit variance helps the optimizer converge faster. 

**Batch normalization:** This applies the same idea to hidden layers

- During training it normalized the pre-activation output of a layer using the mean and variance of the current mini-batch.

- It then scales and shifts the noramlized value using two new learnable parameters, $\gamma$ and $\beta$. This allows the network to learn the optimal scale and shift for its hidden layers, or even undo the normalization if needed.

![image.png](finn/Data%20Science%20and%20Artificial%20Intelligence%20Technolog/content/image.png)

- At test time, since there is no mini-batch, EWMA of $\mu$ (the mean) and $\sigma^2$ (the variance) values are used for Batch norm (batch normalization).

## Model Evaluation

The primary goal of evaluation is to estimate the true classification error ($\epsilon$), which is the classifier’s expected error on new unseen data. The apparent error ($\epsilon_A)$, which is the error measured on the training set. The apparent error is an optimistically biased estimate of the true error, because the classifier has been optimized for this specific data. The gap between the true error and the apparent error is known as overfitting. 

**Loss functions and optimization**

Classifiers are typically not optimized to directly minimize the classification error. This is because the classification error (a count of misclassifications) is a piecewise-constant function, making it non-differentiable and unsuitable for gradient-based optimization

Instead, models optimize a **surrogate loss function** , which is a "convenient", often differentiable, proxy for the true objective. Examples include:

- **Maximum Likelihood** (used by Quadratic/Linear Discriminants, Logistic Classifier)
- **Mean Squared Error (MSE)** (can be used by Neural Networks)
- **Impurity / Gini** (used by Decision Trees)

The optimum for the surrogate loss is likely not the same as the true optimum for the classification error. 

### Error Estimation Techniques (Evaluation)

Given a finite dataset, we must decide how to partition it to train the classifier and estimate its performance. 

**Train/Test Split Trade-off** 

The data can be split into a training dataset and a testing dataset, but this comes with important trade-offs:

- The smaller the training set becomes, the worse the classifier due to lack of data.
- The smaller the test set becomes, the less reliable the error estimates become.

**Resampling method**

To mitigate this trade-off, resampling methods reuse data by rotating by rotating the training and testing portions. 

- n-fold Cross-Validation: The dataset is split randomly into n folds. The process is repeated n times. In each iteration 1 fold is used as testing set, and n-1 folds are used for training. The final error is the average of the individual error estimates of the folds.
- Leave-one-out (LOO): this is the optimal, but most computationally expensive form of cross-validation, where $n$ equals the total number of samples. For each of the $n$ iterations, the classifier is trained on $N-1$ samples and tested on the single object left out. The error estimate for each iteration is either 0 or 1, and the total error is the average.

### Performance Analysis

A single error number is often insufficient. More detailed metrics provide a clearer picture of classifier behaviour. 

**Confusion matrix**
A confusion matrix provides a detailed breakdown of class-dependent errors. For $K$ classes, it is a $K\times K$ matrix $C$ where entry $c_{ij}$ is the count of objects belonging to true class $i$ that were classified as $j$. This matrix reveals patterns, for example that class A is often confused with class B, but not the other way around.

**Reject Options**
A classifier can be given the option to “reject” a classification if it is not confident, which can reduce the final error rate at an associated cost. 
*Outlier Reject:* Rejects objects that are far from the data distribution
*Ambiguity Reject:* Rejects objects near the decision boundary, where the posterior probabilities for the classes are approximately equal. 
A reject curve plots the classification error against the fraction of rejected objects. The optimal operating point minimizes the weighted sum of the classification error and fraction of rejected objects. 

**ROC Analysis**
Receiver-Operator Characteristic (ROC) analysis is a powerful tool for 2-class problems, especially when class priors or misclassification costs are unknown or variable.

- The curve: an ROC curve is generated by varying the classifier’s decision threshold $d$. It plots the True positive rate on the y-axis (*sensitivity)* against the false positive rate on the x-axis (*1-specificity)*.
- Definitions:
    - Sensitivity: The fraction of true positives that are correctly identified
    - Specificity: The fraction of true negatives that are correctly identified
    - Precision: the fraction of objects that are classified as A, that are actually A. (A / actualA+errorA)
- Area Under Curve (AUC): this is a single scalar value summarizing the entire curve. Perfect classification has AUC=1, a random classifier has AUC=0.5. This metric is insensitive to class priors.

# Complexity and Regularization (W5)

## Model Complexity and Overfitting

Complexity is defined as its flexibility or its ability to fit to any distribution. A simple classifier can only fit to a few data distributions. A complex classifier can fit almost any data distribution. 
This concept is closely related to the Bias-Variance dilemma, where simple classifiers have high bias (strong assumptions about the data, and low variance (the decision boundary is stable). Complex classifiers have low bias (make few assumptions about the data, and high variance (the decision boundary is highly flexible and can change dramatically with the training data.  

The choice of complexity is a critical trade-off that depends o the amount of training data. When comparing a standard classifier to a more complex one:

- The complex classifier has a lower apparent error (training error)
- The complex classifier has a lower asymptotic error (training and test error converge lower than for simple classifiers)
- However with a small number of training objects, the complex classifier has a higher true test error for longer.

You should use a simple classifier when you have few training examples, and a complex classifier when you have a sufficient number of training objects.

### Measuring Complexity

A reliable measure of complexity is needed. The number of free parameters is not a good measure, for example, the classifier $f(x)=sign(sin(wx))$ has only one parameter, however by changing this frequeancy, it can be made arbitrarily complex to separate almost any 1D dataset. 

A formal measure is the **Vapnik-Chervonenkis (VC) dimension,** denoted as $h$.

- **Definition:** The VC-dimension $h$ is the largest number of vectors that the classifier can “shatter”. Shatterin means the classifier can perfectly seperate the points for all $2^h$ possible ways of labeling them.
- **Example:** For a linear classifier in a $p$-dimensional space, the VC dimension is $h=p+1$
- **Significance:** The VC dimension allows you to bound the true error based on the apparent error and the number of samples N. A classifier with a small $h$ will have a true error that is close to its apparent error.

### Another (non-)linear discriminative classifier: SVC

The Support Vector Classifier is specifically designed to control complexity by minimizing its VC-dimension. 

**Minimizing Margin**
For a linearly separable dataset, and SVC finds the optimal linear classifier by maximizing the margin $\rho$ (the distance between the decision boundary and the nearest data points). This is achieved by finding a “canonical hyperplane” that satisfies these constraints:
1. $w^Tx_i+b\ge 1$ for data points with label +1
2. $w^Tx_i+b\le -1$ for data points with lavel -1

Maximizing the margin is equivalent to minimizing $\frac 12||w||^2$, which then gives the primal optimization problem for the SVC: $\min_\infin\frac 12 ||w||^2$, subject to constraints $y_i(w^Tx_i+b)\ge1$.

**Support vectors**
The solutioon for the weight vector $w$ is a linear combination of the training objects: $w=\sum_{i=1}^N\alpha_iy_ix_i$. The crucial property is that $\alpha_i$ will mostly be 0. The data points where they are not zero are called support vectors. These points lie exactly on the margin boundaries.

**Kernel Trick**
The SVC optimization problem can be rewritten in its dual form, which depends only on the inner products of data vectors ($x_i^Tx_j)$. The kernel trick involves replacing this inner product with a kernel function $K(x_i,x_j)$. This implicitly maps the data into a feature space where the data become linearly separable.
The optimization problem becomes: $max_{\alpha}\sum_{i=1}^{N}\alpha_{i}-\frac{1}{2}\sum_{i,j}^{N}y_{i}y_{j}\alpha_{i}\alpha_{j}K(x_{i},x_{j})$, subject to $\alpha_{i}\ge0$ and $\sum_{i=1}^{N}\alpha_{i}y_{i}=0$. 
The final decision function for a new point $z$ is: $f(z)=\sum_{i=1}^{N}\alpha_{i}y_{i}K(x_{i},z)+b$, where the sum is only over the support vectors. 

## Regularization Techniques

Regularization is not just any technique to reduce overfitting. A more precise definition is that regularization encompasses **"techniques to reduce the test error, possibly at the expense of increased training error"**.

This is generally achieved by adding a **regularizer**, $\Omega(\theta)$, to the standard loss function, $J(\theta;X,y)$. This creates a new objective function $\tilde{J}$:

$\tilde{J}(\theta;X,y)=J(\theta;X,y)+\alpha\Omega(\theta)$

Here, $\alpha$ is a hyperparameter that controls the strength of the regularization. This approach is motivated by generalization bounds, which show that the test error is bounded by the training error *plus* a term that depends on model complexity, often related to the **norm of the weights**.

### 1. Dataset Augmentation

A primary way to beat overfitting is to simply **use more data**. When more data isn't available, it can be artificially created.

- **Transformations:** New samples are generated by applying distortions that are known to leave the data's label invariant. For images, this includes translations, scaling, and shearing.
- **Adversarial Data:** This involves generating samples that are *incorrectly* classified with high confidence and using them as counter-examples during training.

### 2. Parameter Norm Penalties

This is the most direct implementation of the regularized loss function $\tilde{J}$.

- **L2 Regularization (Weight Decay):**
This adds a penalty proportional to the squared $L_2$ norm of the weights.
$\tilde{J}(w;X,y)=\frac{\alpha}{2}w^{\top}w+J(w;X,y)$ 
This is also known as Ridge Regression or Tikhonov regularization. It "decays" weights by pushing them toward zero, preventing any single weight from becoming too large. Visually, it pulls the optimal solution ($w^{*}$) closer to the origin to find a new solution ($\tilde{w}$) with a smaller norm.
- **L1 Regularization:**
This adds a penalty proportional to the $L_1$ norm (sum of absolute values) of the weights.
$\tilde{J}(w;X,y)=\alpha||w||_{1}+J(w;X,y)$ 
The key feature of L1 regularization is that it produces sparse solutions, driving many weights to be **exactly zero**. This effectively performs feature selection or "neuron removal”.

### 3. Early Stopping

This technique involves monitoring the model's performance on a validation set (which proxies the true error) and **stopping the training process prematurely**. Training is halted when the validation error stops decreasing, even if the training error (apparent error) is still going down.

This works because the **norm of the weights ($||w||$) tends to increase as training progresses**. By stopping early, the optimization is halted in a region where the weights are smaller, preventing the model from fully overfitting and thus improving generalization. This method's effectiveness is highly dependent on **good (small) weight initialization**.

### 4. Noise Robustness

This involves intentionally adding noise to the model.

- **Noise in Inputs:** Equivalent to data augmentation.
- **Noise in Weights:** Encourages the model to be more stable. Adding noise with infinitesimal variance is equivalent to L2 regularization.
- **Noise in Outputs:** Known as **label smoothing**, where hard targets (e.g., 0 and 1) are replaced with soft targets (e.g., 0.1 and 0.9).

### 5. Parameter Sharing

This strategy involves a "huge" reduction of weights by forcing different parts of the model to use the same parameters. The most prominent example is in **Convolutional Neural Networks (CNNs)**, where a single filter (a set of weights) is applied (convolved) across the entire input.

### 6. Dropout

Dropout is a technique applied during training where, at each step, a **random fraction of nodes are temporarily made inactive** (set to 0). Backpropagation is then performed only on the "thinned" network.

- **Training:** This prevents units from co-adapting and forces the network to learn more robust features.
- **Evaluation (Test Time):** To compensate, all nodes are used, but their weights are rescaled by the probability $p$ of being kept during training: $w_{new} = w_{org} \cdot p$.

While some results are debated, dropout generally acts as a powerful regularizer, particularly for wide networks.

### When to use Regularization

The primary tool for identifying when to use regularization is the learning curve. If there is a large gap between the true (test) error and the apparent (training) error, the model is overfitting and regularization is needed. 

You also should not look at the test set too often. Every time the test set is used to make a decision, you are overfitting yourself to that specific test set. This means your reported test error may not be a reliable estimate of performance on new, truly unseen data. 

# Specialized Architectures (W6 & 7)

## Convolution Neural Networks

### Convolution

A convolution is a mathematical operation that combines two functions (or signals) to produce a third. Intuitively, you can think of it as a "blending" or "smearing" process. One function, called the **kernel**, acts like a sliding window that moves over the other function, the **input**. At each position, it creates a weighted average of the input's local neighborhood, with the kernel providing the weights.
In computer science, particularly image processing and CNNs, a filter or kernel $H(x,y)$ is convolved with input grid of pixels $F(x,y)$. For each position in the input grid, the values in the sliding window are averaged to produce a new pixel value in the output grid $G(x,y)$.

[But what is a convolution?](https://youtu.be/KuXjwB4LzSA?si=KK2SLsTsG8HoRZAQ)

**Examples of Kernels**

- Average blur = a $x\times x$ matrix with equals values that sum to 1
- Identity kernel = $x \times x$ with a 1 in the middle
- Edge detector = $\begin{bmatrix}0&0&0\\-1&0&1\\0&0&0\end{bmatrix}$ Note: output will be transformed from [0,255] to [-255,255].
- Pattern matching: A kernel can be a normalized template of a specific object, like waldo’s face, to find it in an image. The output heatmap shows where the object is located.

**Image sizing**

When a convolution is applied to an image, the image shrinks. For an $n\times n$  image with a $k \times k$ convolution, the resulting image/feature maps will be of size $(n-k+1)\times(n-k+1)$. 
To combat this, you could add padding to the sides of the image. 

**Translation Equivariance**

A function $f$  is equivariant to a transformation $g$ if $g(g(x))=g(f(x))$. For CNNs, $f$ is the convolution and $g$ is a translation. If you shift the input image and then convolve, you get the same result as convolving first and then shifting the output feature map. This is crucial knowledge for images, as it assumes that an object’s identity doesn’t change based on where it appears in the frame, and at what angles etc. 

### Convolutional Network Architecture

A CNN Layer is a special kind of layer, and it is (often) used in combination with fully connected MLP layers to create a CNN. 

A typical CNN Layer consists of three stages:

1. **Convolution:** The input (image or previous feature map) is convolved with multiple learned filters (kernels) to produce a stack of **feature maps.** Each map represents the presence of the feature that its corresponding filter detects.
2. **Non-linearity:** A non-linear activation function is applied to the resulting feature maps. An example is ReLU. This is again, like for MLPs, crucial to learn complex patterns.
3. **Spatial Pooling:** This step (e.g. max pooling) reduces the spatial dimensions of the feature maps (downsampling, or subsampling). It provides a small amount of translation invariance and reduces computation.

**Convolution vs. Fully Connected Layers**

A convolutional layer is a limited parameter version of a fully connected layer. A 1D convolution, can be expressed as a matrix multiplication using a special Toeplitz matrix ( a diagonal-constant matrix).

The matrix representation reveals three ley properties of convolution:

- Sparse connections: Many weights are zero (pixels only connect to their local neighborhood)
- Local connectivity: non-zero weights are grouped locally
- Parameter sharing: The same weights (the kernel values) are repeated across the matrix. (As the kernel is repeated for each neighborhood, and thus new output).

This structure dramatically reduces the number of parameters, which makes the network more efficient and less prone to overfitting.

**Receptive field**

The receptive field is the region of the original input image that a single activation pixel in a deep feature map “sees”. Stacking standard convolutions makes the receptive field grow additively (so no subsampling). Using sub-sampling, it grows much faster. 

**Example Network** In the image shown to the right, we can see a 32x32 image being fed into a CNN. In the first layer (C1), 6 feature maps are created, using 6 5x5 kernels/filters. Then the resulting feature maps are subsampled, using either 2x2 max-pooling, or averaging. 

![image.png](finn/Data%20Science%20and%20Artificial%20Intelligence%20Technolog/content/image%201.png)

The next layer, C3, applies 16 filters to the resulting 6 14x14 maps. The kernels here have to process the 3D volume of the input (6x14x14) at once to create one new feature map.  The resulting output is 16 new maps with size 10x10. These are again subsampled and fed into fully connected layers. 

**Residual/Skip Connections**

In very deep networks, the gradient for backpropagation is a long product chain. If any of these derivatives in the chain is very small, the entire chain can ‘vanish’, making the network unstable and hard to train. 
Residual (or skip) connections change the function. Instead of a layer computing $h_i=f_i(h_{i-1})$ it computes $h_i=h_{i-1}+f_i(h_{i-1})$. This creates an ensemble of summed sub-networks. The addition creates a direct path for the gradient to flow, making the gradient path much more stable and allowing for the training of much deeper networks.

## Recurrent Neural Networks

Feed-Forward networks fail for sequential data because they assume a fixed input size and learn position-specific weights. This means they cannot handle sequences of variable length and cannot generalize to sentence structures they haven’t seen during training. 

An RNN processes a sequence of data in order, and most importantly, shares the same parameters (weights) at each time step. It does this by introducing a recurrent loop, wehere the hidden state ($H_t$) at the current time step $t$ is a function of both the current input ($X_t)$ and the prvious hidden state $H_{t-1}$. 

- Hidden state: $H_t = \phi(X_tW_{xh}+H_{t-1}W_{hh}+b_h)$
- Output: $O_t=H_tW_{hq}+b_q$

Here, $X_t$ is the input, $H_t$ is the hidden state, and $O_t$  is the output at time $t$. $W_{xh}$, $W_{hh}$, and $W_{hq}$ are the learned, shared weight matrices. $b_h$ and $b_q$ are bias terms, and $\phi$ is a non-linear activation function. A key benefit is that the number of parameters does not grow with the sequence length.

In essence, a Recurrent Neural Network (RNN) processes a sequence one item at a time using a single, core network cell. This cell re-uses the exact same weights (parameters) for every step. At each time step, it takes two inputs: the current piece of data from the sequence and the hidden state (or memory) from the previous step. It then produces an output for that step and an updated hidden state, which it passes forward to be used with the next item in the sequence.

![image.png](finn/Data%20Science%20and%20Artificial%20Intelligence%20Technolog/content/image%202.png)

### Gradient Problems

A major challenge in training RNNs is Backpropagation Through Time (BPTT). Because the same weights are applied repeatedly, the gradient calculation for a long sequence (length T) involves a long product of derivatives. This leads to two major problems:

- Vanishing gradients: if the derivative’s magnitude is consistently less than 1, the product rapidly shrinks, causing the gradient to vanish.
- Exploding gradients, if the derivative is consistently greated than 1, the product explodes

The consequence is that standard RNNs have significant difficulty learning long-range dependencies. 

### Gated RNNs

To solve the vanishing/exploding gradient problem, more complex units with ‘gating’ mechanisms were developed. These gates are vectors with values between 0 and 1 (achieved with a sigmoid function), that learn to selectively control the flow of information. 

**Gated Recurrent Unit (GRU)**

The GRU improves the RNN’s hidden state by introducing two gates: the reset gate, and the update gate. 

- **The reset gate:** Determines how much of the previous hidden state to forget when creating a new “candidate” state. $R_t=\sigma(X_tW_{xr}+H_{t-1}W_{hr}+b_r)$
- **The update gate:** Determines how much of the previous hidden state to keep versus how much of the new candidate state ($\tilde H_t$) to use. $Z_t=\sigma(X_tW_{xz}+H_{t-1}W_{hz}+b_z)$ (if close to 1, the previous state is passed through largely unchanged, allowing network to maintain long-term information).
- State updates
    - Candidate state:  $\tilde{H}_{t}=tanh(X_{t}W_{xh}+(R_{t}\odot H_{t-1})W_{hh}+b_{h})$
    - Final state: $H_{t}=Z_{t}\odot H_{t-1}+(1-Z_{t})\odot\tilde{H}_{t}$ (Note: $\odot$ denotes element-wise multiplication)

**LSTM**

The LSTM introduces a seperate memory cell state ($C_t$) that acts like a “conveyor belt”, making it even easier to pass information through long sequences. It uses three gates:

- Forget gate: decides what information to discard from the previous cell state ($C_{t-1}$ $C_{t-1}$
    - $C_{t-1}$$F_t=\sigma(X_tW_{xf}+H_{t-1}W_{hf}+b_f)$
- Input gate: decides which new information (from candidate cell $\tilde C_t$) to add to the cell state:
    - $I_t=\sigma(X_tW_{xi}+H_{t-1}W_{hi}+b_i)$
- Output gate: Decides what part of the new cell state to output as the new hidden state, $H_t$.
    - $O_t=\sigma(X_tW_{xo}+H_{t-1}W_{ho}+b_o)$
- State updates:
    - Candidate cell state: $\tilde{C}_{t}=tanh(X_{t}W_{xc}+H_{t-1}W_{hc}+b_{c})$
    - Cell state update: $C_{t}=F_{t}\odot C_{t-1}+I_{t}\odot\tilde{C}_{t}$
    - Hidden state update: $H_{t}=O_{t}\odot tanh(C_{t})$

## Self-Attention

Self-attention layers are a powerful and parallelizable alternative to RNNs. The primary motivation for this technique are to overcome two challenges: the long-distance dependencies, and parallelization.

Self-attention solves this by removing recurrence entirely. It's a sequence-to-sequence operation that transforms an input sequence of vectors ($x_1, ..., x_n$) into an output sequence ($y_1, ..., y_n$) of the same length, where each output $y_i$ is influenced by all input vectors, not just the preceding ones. This lack of recurrence allows every output vector to be computed independently and in parallel.

### Word Embeddings

For language, words have to be embedded. The first method is just one-hot encoding, but this is problematic as the dot product similarity between any two different words is zero. 

The solution is to represent words as dense, $d$-dimensional real-valued feature vectors. These embeddings are learned by training a model to predict a word’s context. The two main methods are:

- Skip-gram: uses a center word to predict its surrounding context
- CBOW (Continuous bag of words): uses the surrounding context to predict the center word.

Often the dimensions are in the tens or hundreds of thousands. 

### Mechanism

The central idea of self-attention is to learn how to re-weigh words based on all other words in the sequence. The model learns to assign high weights to relevant words and low weights to irrelevant ones. 

**Query-Key-Value**

To achieve this, the model recognizes that a word’s vector is used in two different roles:

1. Role 1: To determine its influence on the other words
2. Role 2: To contribute its actual content to the new vector

Since these roles require different information, self-attention projects ech input vector $x_i$ into three separate vectors using three distinct, learnable weight matrices ($W_q,W_k,W_v$):

- Query ($q_i=W_qx_i$): “What am I looking for?” This vector represents the current word $i$as it queries other words.
- Key ($k_i=W_kx_i$): “What do I have?” This vector represents the word $i$ as it’s being queried by other words.
- Value ($v_i=W_vx_i$): “What I will provide.” This vector represent the content of word $i$ that will be used in the final weighted sum.

**The computation of a self-attention layer**

The computation of the output sequence is a four step-process:

1. Project: for each input vector $x_i$, compute its $q_i$, $k_i$, and $v_i$ vectors using the shared learnable matrices $W_1,W_k,W_v$.
2. Calculate scores: An unnormalized attention score $w'_{ij}$ is calculated for every pair of words (i,j). This score is the dot product of the query vector for word $i$ and the key vector for word $j$. $w'_{ij}=q_i^Tk_j$. This results in a matrix.
3. Normalize (Softmax): The resulting matrix is normalized along the columns, i.e. the scores for each word $i$ are normalized across all words $j$ using the softmax function. This converts the unbounded scores into a probability distribution (all 0<x<1 and sum to 1). $w_{ij}=softmax_j(w'_{ij})=\frac{\exp(w'_{ij})}{\sum_k\exp(w'_{ik})}$.
4. Weighted sum: the final output vector $y_i$ is computed as a weighted sum of all the value vectors ($v_j$) in the sequence. The weights used are the normalized attention scores $w_{ij}$ from the previous step. 

$$
y_i=\sum_j w_{ij} v_j
$$

Because the learnable parameters are shared across all positions, the number of parameters does not change with the sentence length. 

### Transformer Computation

**Position Embedding**

The self-attention mechanism, being based on dot products and sums, is permutation invariant. If you shuffle the words in a sentence, the output vectors will be the same (just shuffled). This means the model has no concept of word order (which can be important in language). 

To fix this, position information is added to the input word embeddings before they enter the self-attention layer (literal vector addition). This can be done using:

- Learned position embeddings: learnable vectors, one for each position
- Position encoding: A fixed function (e.g. using sines and cosines) that generates a unique vector for each position.

**Multi-Head Attention**

A single set of $W_q,W_k,W_v$ matrices might not be enough to capture all complex and ambiguous relationships in a sentence. The solution is to use multiple “heads”. This means that the self-attention mechanism runs several times in parallel, each with a different, independently learned set of $W^r_q,W^r_k,W^r_v$ matrices. Each head can specialize in learning different types of relationships. The output of all heads are then combined.

*Narrow Multi-Head attention*

1. The model's total dimension, $d_{model}$ (e.g., 256), is "divided" among the $h$ heads (e.g., 8 heads).
2. Let the model dimension be $d_{model}$ and the number of heads be $h$. The dimension for each head's Query, Key, and Value vectors is set to $d_k = d_v = d_{model} / h$.
3. For the example given, a $d_{model}=256$ vector is processed by $h=8$ heads. Each head's Q, K, and V vectors will have a dimension of $d_k = 256 / 8 = 32$.
4. For each input $x_i$, $h$ sets of Q, K, V vectors are created, one for each head $r$:
    ◦ $q_i^r = W_q^r x_i$ (where $W_q^r$ is a $d_{model} \times d_k$ matrix)
    ◦ $k_i^r = W_k^r x_i$ (where $W_k^r$ is a $d_{model} \times d_k$ matrix)
    ◦ $v_i^r = W_v^r x_i$ (where $W_v^r$ is a $d_{model} \times d_v$ matrix)
5. Attention is computed for each head $r$ independently, resulting in $h$ output vectors, $\text{head}_i^r$, each of dimension $d_v$.
6. These $h$ output vectors are concatenated: $\text{Concat}(\text{head}_i^1, \text{head}_i^2, ..., \text{head}_i^h)$. This creates a vector of dimension $h \times d_v = d_{model}$ (e.g., $8 \times 32 = 256$).
7. This concatenated vector is passed through a final linear projection $W_o$ (a $d_{model} \times d_{model}$ matrix) to produce the final output $y_i$.

*Wide Multi-Head Attention*

1. Multiple heads are created, and attention is calculated for each, they are all the full size.
2. The resulting output vectors are again concatenated, creating an output that is too big. 
3. This is projected to the original dimensions by a final layer $W_o$.

# Unsupervised Learning and Foundation Models (W 7 & 8)

## Unsupervised Learning

Unsupervised learning is a branch of machine learning where models are trained on data without any ground truth labels. The primary advantage is that acquiring labeled data is often the most expensive part of a machine learning project. 

Unsupervised learning is used for:

- Compression: learning compact representations to store large datasets
- Pre-training: learning features that can be used for downstream tasks
- Density estimation: modelling the underlying probability distribution of the data.
- Generating new data: creating new samples that resemble the training data.

### Auto Encoders

An autoencoder is a neural network designed to reproduce its input at the output layer. It consists of two parts:

1. Encoder: compresses the input into a lower dimensional representation
2. Decoder: Reconstructs the original input from the lower dimensional representation

The overall goal is to make the reconstruction $r$ as close to the original input $x$ as possible. For continuous input data, this is trained by minimizing a reconstruction loss,  as the sum squared errors. $L = \sum_{i}\frac{1}{2}(g(f(x_{i}))-x_{i})^{2}$.

**Bottleneck Layer size**
The dimensionality of the hidden layer is critical. 

(UNDERCOMPLETE) If the final encoding output has a smaller dimension than the input, this forces compression. If it is too small, it won’t be able to compress all information and it will perform poorly. 

(OVERCOMPLETE) The hidden layer (encoding output) has a large dimension that the input. The network could simply copy the input, making it less useful for compression. To prevent this, and still learn useful features, regularization is required. 

**Denoising Autoencoders**
A denoising autoencoder is a form of regularization for overcomplete autoencoders. The core idea is to make the model robust to noise.

1. A noisy (corrupted) version of the input is generated (drawn from a distribution). Often gaussian noise based on the training dataset).
2. The autoencoder is fed the noisy input
3. The loss function is modified to train the network to reconstruct the original, noise-free input.

### Generative models

We typically have data that are samples from a very complex, high-dimensional, and unknown probability distribution (like images). We cannot sample from this distribution directly to get new images. 

The key idea for generative modeling is to:

1. define a simple distribution that we can easily sample from, such as a standard normal distribution. Samples from this are just noise.
2. Learn a complex transformation (e.g. NN), that maps samples from the simple noise distribution to the complex data distribution.

**Variational Autoencoders (VAEs)**

A standard autoencoder cannot be used for generation because the encoded space has an unknown and undefined range; we don’t know what values to sample to generate new data. 

A variational autoencoder solves this by forcing the latent layer to follow specific, simple distributions. 

- The encoder does not output a single latent vector (encoding). Instead it outputs the parameters of a distribution (mean and stdev).
- A latent vector is then sampled from this distribution
- Reparameterization trick: to allow gradient to flow back through the random sampling step (whcih is non-differntiable), the sampling is done as follows:
    - a random noise sample is drawn from a standard normal distribution
    - The latent vector is computed deterministically as $z=\mu+\sigma\odot\epsilon$
- The decoder g(z) then reconstruct the input from this z.

**Generative Adversarial Networks (GANs)**

GANs learn to generate data through a two-player adversarial game. The two players are:

1. Generator network, with a goal to create realistic images (fake images that look realistic) to fool the discriminator. It takes random noise as input and outputs a fake image. 
2. Discriminator network: its goal is to act as a classifier, distinguishing between real images and fake images.

They are trained together using a min-max objective function. The discriminator wants to maximize this function, it aims to output 1 for real data and 0 for fake data. The generator wants to minimize this function. It does this by creating fakes that the discriminator misclassifies as real.

$\arg \min_{\theta_{G}} \max_{\theta_{D}} \mathbb{E}{x \sim p{data}}[\log D_{\theta_{D}}(x)] + \mathbb{E}{z \sim p(z)}[\log(1 - D{\theta_{D}}(G_{\theta_{G}}(z)))]$

**Diffusion Models**

Diffusion models are a newer class of generative models that work in multiple steps.

1. Forward process (noising): A fixed, stochastic process gradually adds noise to a real image over a certain number of steps. Eventually it turns the image into pure noise. This process is not deterministic. Each step involves shrinking the data and adding noise. 
2. Reverse process (denoising): A neural network is trained to reverse this process. It learns to predict the step back. Effectively learning to denoise the image at each step. The network used fir this is a denoising autoencoder. 

To generate a new image, the model starts with pure noise, and applies the learned reverse denoising network for a certain amount of steps, gradually forming a clean image. 

**Evaluation of these generated objects**

Evaluating how good a generative model is remains an active research topic. Simple approaches have significant flaws:

- Likelihood: a model with a higher likelihood on the data is not necessarily visually better
- Human evaluation: humans can be fooled by a model that simply memorizes and copies the training set
- Downstream tasks: using the learned features for a task like classification accuracy is a useful proxy, but it doesn’t fully measure the quality of the generated samples.

## Foundation Models (FMs) and Adaptation

A **foundation model** is defined as any model that is trained on **broad data** and can be **adapted** (e.g., through fine-tuning) to a wide variety of downstream tasks.

- **Scale:** While the technical concept of pre-training isn't new, the **scale and scope** of modern foundation models (like ChatGPT) have surpassed previous imagination.
- **Concerns:** This new scale brings new challenges. These models have the potential to **accentuate harms**, and their characteristics are often **poorly understood**.
- **Terminology:** This paradigm is also known by other names, such as pre-trained model, self-supervised model, (large) language model, general-purpose model, or task-agnostic model.

### Emergence and Homogenization

Foundation models are the current step in the continuously emergence and homogenization of AI:

- **Emergence** refers to behaviors that are implicitly induced rather than explicitly constructed.
    - **Machine Learning:** The "how" (the learning algorithm's process) emerges.
    - **Deep Learning:** The "features" used for prediction emerge.
    - **Foundation Models:** Advanced "functionalities" (like in-context learning) emerge.
- **Homogenization** refers to the consolidation of methods across diverse applications.
    - **Machine Learning:** Homogenized "learning algorithms" (e.g., logistic regression).
    - **Deep Learning:** Homogenized "architectures" (e.g., Convolutional Neural Networks).
    - **Foundation Models:** Homogenizes the "model itself" (e.g., one model like GPT-3 is used for many things)

This homogenization allows a single foundation model, trained on various data modalities (text, images, speech, etc.), to be adapted to a wide array of tasks like question answering, image captioning, and sentiment analysis.

### The Transformer Architecture

The core technology enabling modern foundation models is the **Transformer architecture**. The key components:

- **Embeddings:** Both inputs and outputs are converted into **word/token embeddings**.
- **Positional Encoding:** Since the model is permutation-invariant, **location information** is explicitly added to the embeddings.
- **Attention Blocks (Encoder & Decoder):**
    - **Multi-Head Self-Attention:** Allows each token to look at and weigh the importance of other tokens in the sequence.
    - **Masked Multi-Head Attention (Decoder):** A crucial component for auto-regressive generation (like next-token prediction). It **masks the future**, ensuring that a token at position $i$ can only attend to tokens at positions $j \le i$.
- **Feed Forward Network:** A simple Multi-Layer Perceptron (MLP) that is applied independently to each token.
- **Add & Norm:** Each sub-layer (Attention, Feed Forward) is followed by a residual connection and a normalization step (specified as "not batch norm but another," which is typically Layer Normalization).
- **Output Layers:** The final decoder output is passed through a **Linear** layer to "de-embed" it back to the vocabulary size, followed by a **Softmax** layer to produce word probabilities.
- **Training Task (Decoder):** The model is trained on **next-token prediction**, where the "Outputs" are the "Inputs" shifted one position to the right.

![image.png](finn/Data%20Science%20and%20Artificial%20Intelligence%20Technolog/content/image%203.png)

### Vision Transformer (ViT) Process

The Transformer, originally for text, can be applied to other data types, primarily images, using the **Vision Transformer (ViT)**.

1. **Patching:** The input image is divided into a grid of smaller **patches**.
2. **Embedding:** These patches are flattened and passed through a **Linear Projection** to create patch embeddings.
3. **Position Embedding:** A **2D Position Embedding** is added to the patch embeddings to retain spatial information.
4. **Class Token:** An extra **learnable [class] embedding** (token) is prepended to the sequence of patch embeddings.
5. **Transformer Encoder:** This full sequence of tokens is fed into a standard **Transformer Encoder**.
6. **Classification:** The output of the Transformer corresponding to the special [class] token is fed into an **MLP Head** to perform classification.

**ViT vs. CNN**

- **Similarities:** The shared MLP in the ViT's transformer block acts similarly to a convolution.
- **Differences:**
    - ViT uses **2D Position Embedding**.
    - ViT has a **global receptive field** from the very first Self-Attention (SA) layer, whereas CNNs build it up.
    - The SA mechanism is **input-dependent**, meaning attention weights are calculated dynamically, unlike the fixed, learned kernels of a CNN.

This "patch and embed" concept can be extended to other data:

- **Video:** Use **3D patches** (space-time cubes).
- **Other Signals:** The method works as long as the signal can be segmented into **patches/tokens**39.

### Pre-training Strategies

Foundation models are trained on large, unlabeled datasets using **self-supervised learning**.

- **For Text:** The standard task is **next-word prediction**, where the model learns to reconstruct the input from itself, requiring no human labels.
- **For Images:** A common method is the **Masked Auto-Encoder (MAE)**, where the model learns to reconstruct randomly masked-out image patches from the unmasked ones.
- **For Images and Text (Multimodal):**
    - **CLIP (Contrastive Language-Image Pre-Training)**.
    - Given $N$ (image, caption) pairs, the model uses **contrastive pre-training**.
    - It trains an Image Encoder and a Text Encoder to:
        1. **Maximize** the cosine similarity of the $N$ correct pairs ($I_i \cdot T_i$).
        2. **Minimize** the cosine similarity of the $N^2 - N$ incorrect pairs ($I_i \cdot T_j$, where $i \neq j$).
    - This alignment enables powerful **zero-shot prediction**, where a classifier can be created simply by finding the text label (e.g., "a photo of a dog") that has the highest cosine similarity with a given image's embedding.

### Parameter-Efficient Fine-Tuning (PEFT)

Given the immense size of foundation models, re-training all parameters for a new task is computationally prohibitive. **PEFT** offers solutions by **freezing** the vast majority of the model's weights and updating only a small number of parameters. Three categories:

1. **Selective (Substitute):**
    - This method involves replacing and **re-learning a subset** of the model's existing parameters, such as the final classification layer.
2. **Additive (Inject):**
    - This method **injects new learnable parameters** into the frozen model.
    - **Adapters:** Small, learnable bottleneck networks (MLPs) are inserted inside the transformer blocks. The adapter's function is $Adapter(x) = W_{up}\sigma(W_{down}x) + x$, where only $W_{up}$ and $W_{down}$ are trained.
    - **Prompt Tuning:** A fixed number of learnable "tokens" (vectors) are prepended to the input sequence.
3. **Reparameterized (Reproject):**
    - This method learns a **low-rank reprojection** of the model's existing weight matrices.
    - **LoRa (Low-Rank Adaptation):** Instead of updating a large weight matrix $W_0$, LoRa models the change as a low-rank decomposition $\Delta W = BA$. The forward pass becomes $h = W_0 x + BAx$.
    - $W_0 \in \mathbb{R}^{d \times k}$ is frozen, while $A \in \mathbb{R}^{r \times k}$ and $B \in \mathbb{R}^{d \times r}$ are learnable.
    - This is highly efficient because the rank $r$ is chosen such that $r \ll \min(d, k)$, meaning the number of new parameters is very small.