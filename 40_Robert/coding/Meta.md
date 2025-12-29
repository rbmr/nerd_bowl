
At the lowest level, the computer can only perform basic operations, store and retrieve data from memory, and some IO. Any level above that are abstractions. Any subroutine, function, programming language, API, just essentially bundles these fundamental operations together to create more and more powerful operations. Its abstractions on top of abstractions, repeated. With each abstraction you lose freedom and flexibility, but you gain leverage. 

Its evolution. Software is built upon existing software. And the software you build, will be built upon by other software. For software to be built upon it must be well documented, and strict. If things are vague, and flexible, people will misuse it, leading to unexpected behaviour. Unexpected inputs should therefore be rejected, not coerced. And rejected early, and loudly. No bugs may seem features.

Whenever a problem may be solved by software, the problem shall first be divided into smaller problems. It is critical to ask if every such sub problem has already been solved, and if this solution is available. We then immediately encounter the following tradeoff. The question lies whether adapting existing solutions to your problem is more or less efficient that solving the problem yourself. Adapting means studying the existing solution, adapting the inputs and outputs to match your use case, and verifying if that which it promises to do, is actually matched by the implementation. 

Apps evolve: features are added, changed, or removed. To ensure that which you rely upon is not pulled out from under you, we have versions. The problem of clear versions has been solved, 




Semantic Versioning

Conventional Commits

Standards: ISO, IEEE.