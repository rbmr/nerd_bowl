# Functional Programming

# Exam

## Exam Setup

- April 10 @ 18:30
- Weblab exam, so grab key at the beginning
- Access to [https://weblab.tudelft.nl/docs/cse3100/](https://weblab.tudelft.nl/docs/cse3100/) during exam, contains:
    - Slides
    - Hackage documentation for Base and QuickCheck
    - A poor man’s Hoogle: a document with tytpes for common functions
- GHCI is available
- VSCode is available, with Agda suppoert and Haskell LSP available
    - On startup, select the PATH option, NOT ghcup option
    - Cannot use QuickCheck, but can use the evaluate option by typing — >>> followed by an expression to execute code
    - Running your Haskell file to run the main method:
        - Open terminal in correct location
        - run ‘’ghci’’
        - Run ‘’:load test’’ to load a file called test.hs
        - Then you can run the methods inside the module, including main or any other ones
- Files should be stored on the P: drive

## Exam Practice Materials

- The weekly assignments
- Previous exams
    - Resit 2024
    - Exam 2024
    - Resit 2023
    - Resit 2024

## Past data

- Theory 80
    - Data Types x15
    - Functor & Applicative Functor x15
    - Laziness x20
    - Test (property-based) x15
    - Functions (purity & side effects) x15
- Haskell 215
    - Writing Haskell program x76
    - Testing a Haskell program (QuickCheck) x23
    - Data Types and Type classes x39
    - Functors and Monads x42
    - Laziness x35
- Agda 110
    - Dependent Types x18
    - The curry-Howard correspondence x40
    - Equational Reasoning x52

# Topics

## Haskell

- Functions
- Data Types
- Higher Order Functions
- Type Classes
- IO and Monads
- Functor & Applicative Functor
- Do-Return
- Let-In
- Where
- Laziness

## Agda

- Basics
- Dependent Types
- The Curry-Howard Correspondence
- Equational Reasoning

# Summary

## Haskell

### **1. Basics of Functional Programming (FP)**

- **What is FP?**
    - A programming paradigm focused on using **pure functions** to build software.
    - Treats computation as the evaluation of mathematical functions.
    - Key principles: **immutability** (data doesn't change), avoiding **side effects**, and using **functions as first-class citizens** (pass them around like any other data).
    - **Declarative** style: Describe *what* to compute, not the step-by-step *how*.
- **Why use FP?**
    - **Predictability:** Pure functions always give the same output for the same input (**referential transparency**), making code easier to reason about and debug.
    - **Concurrency:** Immutability simplifies parallel programming by eliminating shared mutable state issues (race conditions, deadlocks).
    - **Testability:** Pure functions are easy to unit test in isolation.
    - **Modularity:** Build complex systems by composing simple, reusable functions.
    - **Conciseness:** Often leads to shorter, more expressive code.

### **2. Purity & The `IO` Type**

- **What is Purity?**
    - A **pure function**:
        1. Is **deterministic**: Always returns the same result for the same inputs.
        2. Has **no side effects**: Doesn't interact with the outside world (no I/O, no modifying external state, etc.) besides returning its value.
- **Relevance to Impurity:** Real-world programs *need* to interact with the outside world (read files, print to console, make network requests). These actions are inherently impure because they are not deterministic (reading a file twice might yield different results if it's changed) and have side effects (writing to the console changes the state of the world).
- **`Managing Impurity with IO:`**
    - Haskell doesn't allow impurity directly within functions. Instead, it encapsulates potentially impure actions within the `IO` type.
    - **`IO a`**: A value of type `IO a` represents a *computation* or *recipe* that, when executed by the Haskell runtime system, might perform some interaction with the real world (side effects) and may yield a result of type `a`.
    - **Separation:** The `IO` type acts as a boundary. Values of type `IO a` are themselves pure; they are just descriptions of actions. The *execution* of these actions is impure, but this execution is carefully controlled and isolated by the Haskell runtime, primarily triggered by the program's `main` function.
    - **`main :: IO ()`**: Every executable Haskell program must have a `main` function with this type signature. This specific `IO` action is the entry point that the runtime system executes, causing the described side effects to occur.
- **IO Primitives:** These are fundamental `IO` actions provided by Haskell's base libraries, forming the building blocks for all I/O.
    - `putStrLn :: String -> IO ()`: Prints a string to the console, followed by a newline. Returns `()`.
    - `putStr :: String -> IO ()`: Prints a string without a newline.
    - `getLine :: IO String`: Reads a line of text from the console, returning it as a `String`.
    - `readFile :: FilePath -> IO String`: Reads the entire content of a file into a `String`.
    - `writeFile :: FilePath -> String -> IO ()`: Writes a `String` to a file.
    - `appendFile :: FilePath -> String -> IO ()`: Appends a `String` to a file.
    - ... and many others for network, concurrency, exceptions, etc.
- **Other Monads:** Manage other "effect-like" computations purely (e.g., `Maybe` for potential absence, `Either` for failure, `State` for state). These are distinct from `IO`'s handling of real-world side effects.

### **3. Basics of Haskell**

- **Purely Functional:** Core language enforces purity; side effects are managed explicitly (`IO`).
- **Statically Typed:** Types are checked at compile time. Features powerful **type inference**.
- **Lazily Evaluated:** Expressions are computed only when their results are needed. Allows infinite data structures. (See Section 27 for details).
- **Key Features:** Typeclasses (ad-hoc polymorphism), pattern matching, algebraic data types (ADTs), strong module system.

### **4. Tooling: GHC, GHCi, GHCup, HLS, Cabal, Stack, Hackage, Hoogle**

- **`GHC`** (Glasgow Haskell Compiler): The main compiler. Compiles `.hs` files to executables (`ghc MyFile.hs`).
- **`GHCi`** (GHC Interactive): The REPL (Read-Eval-Print Loop). Used for testing, exploring types (`:t`), loading files (`:l`), reloading (`:r`).
- **`GHCup`**: Recommended installer/version manager for GHC, Cabal, Stack, HLS. (`ghcup install ghc <version>`, `ghcup set ghc <version>`).
- **`HLS`** (Haskell Language Server): Provides IDE features (completion, linting, type info) for editors like VS Code. Installed via `ghcup`.
- **`Cabal`**: Standard build tool and package manager. Uses `.cabal` project files. (`cabal build`, `cabal run`, `cabal repl`).
- **`Stack`**: Another popular build tool focused on reproducible builds using curated package sets (Stackage snapshots). Uses `stack.yaml`. (`stack build`, `stack run`, `stack repl`).
- **`Hackage`**: Central repository for Haskell libraries/packages.
- **`Hoogle`**: Haskell API search engine; search by name or type signature.

### **5. Naming Rules and Layout Rule**

- **Naming:**
    - Variables/Functions: Start lowercase (`myVar`, `calculateSum`). Use `camelCase`.
    - Types/Typeclasses/Modules: Start uppercase (`Int`, `Maybe`, `Eq`, `Data.List`).
- **Layout Rule (Indentation):**
    - Haskell uses indentation to define code blocks (like `let`, `where`, `do`, `case`).
    - Items in the same block must align at the **same indentation level**.
    - Sub-blocks must be indented further than their parent construct.
    - Incorrect indentation causes parse errors.

### **6. Syntax Conventions**

- **Function Application:** Space-separated: `f x y`. Parentheses for grouping: `f (x + y)`.
- **Infix Operators:** Symbols (`+`, , `++`, `$`, `.`) or backticks for functions: ``elem``.
- **Comments:** `- single line`, `{- multi-line -}`.
- **Type Signatures:** `name :: Type`. Example: `add :: Int -> Int -> Int`.
- **Lambda Functions:** `\arg -> expression`. Example: `\x -> x + 1`.

### **7. Functions**

- **Definitions:**
    - Simple: `funcName arg1 arg2 = expression`.
    - Pattern Matching: Define different cases based on argument structure.
        
        ```
        isEmpty [] = True
        isEmpty (_:_) = False
        
        ```
        
    - Guards: Conditional definitions using `|`.
        
        ```
        sign x | x > 0 = 1 | x < 0 = -1 | otherwise = 0
        
        ```
        
- **Typing:** Use `::` for explicit signatures (good practice). Type inference often deduces types.
- **Currying:** Functions technically take one argument at a time, returning new functions. `add :: Int -> Int -> Int` takes an `Int` and returns a function `Int -> Int`. Enables **partial application** (`add5 = add 5`).
- **Usage:** Apply with spaces (`f x`), use infix (`x + y`), compose (`f . g`), pass as arguments (`map (+1) list`).

### **8. Conditionals**

- **`if-then-else`**: An *expression*. Must have both `then` and `else`. Both branches must have the same type. `if condition then expr1 else expr2`.
- **Guards:** Attached to function definitions using `| condition = result`. Evaluated top-down. `otherwise` is `True`. More readable for multiple checks than nested `if`.
- **`case`** expressions: Pattern match on an expression's value. `case expr of pattern1 -> result1; pattern2 -> result2`.

### **9. `let` Bindings vs `where` Blocks**

- Both define local bindings (variables, functions).
- **`let ... in ...`**:
    - An *expression*. Can appear anywhere an expression is allowed.
    - Syntax: `let binding1 = val1; binding2 = val2 in expressionUsingBindings`.
    - Scope: Only within the `in` part.
- **`where`**:
    - A *clause* attached to a function definition or `case` branch.
    - Syntax: Appears *after* the main definition/branch.
    - Scope: The entire definition/branch it's attached to (including guards).
- **Difference:** `let` is an expression, `where` is a clause. Style often dictates use; `where` common for function-level helpers, `let` common within expressions or `do` blocks.

### **10. Types (`type` Keyword)**

- `type` creates a **type synonym** (an alias).
- Syntax: `type SynonymName = ExistingType`.
- Example: `type Name = String`, `type Point = (Double, Double)`.
- **Does not** create a new, distinct type (unlike `data` or `newtype`). It's just a rename for clarity/convenience. `Name` and `String` are interchangeable to the compiler.

### **11. Lists**

- Ordered sequence of elements of the **same type**.
- Syntax: `[1, 2, 3]`, `[]` (empty), `"abc"` (syntactic sugar for `['a', 'b', 'c']`).
- **`Cons Operator (:)`**: Prepends an element. `1 : [2, 3]` gives `[1, 2, 3]`. O(1). Used in patterns `(x:xs)`.
- **`Append Operator (++)`**: Concatenates two lists. `[1] ++ [2]` gives `[1, 2]`. O(n) on the first list's length.
- **Merging/Combining:** `zip` (pairs), `zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]` (combine with function). Custom recursion for sorted merge.
- **Common Functions:** `head`, `tail`, `last`, `init`, `length`, `null`, `map`, `filter`, `foldr`/`foldl`, `reverse`, `take`, `drop`, `!!` (index).

### **12. List Comprehensions**

- Concise syntax for creating lists. `[outputExpr | generator1, ..., filter1, ...]`.
- **`Generators (<-)`**: Iterate over lists, binding variables. `x <- [1..5]`.
- **Multiple Generators:** Like nested loops. `[(x, y) | x <- [1,2], y <- [3,4]]`. Rightmost runs fastest. Can depend on prior generators.
- **Filters/Guards:** Boolean conditions that restrict elements. `even x`, `x > 5`. Elements must pass *all* filters.
- Example: `[x*x | x <- [1..10], odd x]` gives `[1, 9, 25, 49, 81]`.

### **13. Type Classes**

- **What are they?** Type classes define a set of functions or operations that a type must support to be considered a member (an "instance") of that class. They are Haskell's way of achieving **ad-hoc polymorphism** (functions that work on different types with potentially different implementations). Think of them like interfaces or traits in other languages.
- **`Defining Type Classes (class)`**: You define a new type class using the `class` keyword, specifying the required function signatures.
    
    ```
    -- Simplified definition of the Eq type class
    class Eq a where
      (==) :: a -> a -> Bool
      (/=) :: a -> a -> Bool
    
      -- Default implementations (optional but common)
      x == y = not (x /= y)
      x /= y = not (x == y)
    
    ```
    
    Here, `Eq` is the class name, `a` is the type variable, and `(==)` and `(/=)` are the required functions.
    
- **Subclasses:** A type class can require that any instance type *also* be an instance of another ("super") class. This is specified using `=>` in the class definition.
    
    ```
    -- Ord is a subclass of Eq
    class Eq a => Ord a where
      compare :: a -> a -> Ordering
      (<), (<=), (>), (>=) :: a -> a -> Bool
      min, max :: a -> a -> a
      -- ... default implementations ...
    
    ```
    
    This means that to define `instance Ord MyType where ...`, `MyType` must *already* have an `instance Eq MyType`.
    
- **`Defining Instances (instance)`**: You make a specific type an instance of a type class using the `instance` keyword, providing concrete implementations for the required functions (and satisfying any superclass constraints).
    
    ```
    data MyType = ... -- Assume MyType is defined elsewhere
    
    instance Eq MyType where
        (==) value1 value2 = ... -- Your specific implementation for equality on MyType
    
    -- Now we can define the Ord instance, because Eq exists
    instance Ord MyType where
        compare value1 value2 = ... -- Your specific implementation for comparison
        -- Other methods like (<), (<=) etc., often have default implementations based on compare
    
    ```
    
- **Common Type Classes:**
    - **`Eq`**: Types whose values can be compared for equality (`==`, `/=`).
    - **`Ord`**: Types whose values have a total ordering (`<`, `<=`, `>`, `>=`, `compare`). Requires `Eq`.
    - **`Show`**: Types whose values can be converted to a `String` (`show`).
    - **`Read`**: Types whose values can be parsed from a `String` (`read`). Often needs type annotation. Can be unsafe.
    - **`Num`**: Types representing numbers (`+`, , , `negate`, `abs`, `signum`, `fromInteger`). Requires `Show`, `Eq`.
    - **`Integral`**: Whole number types (`Int`, `Integer`). Supports integer division (`div`, `mod`, `quot`, `rem`). Requires `Real` (which requires `Num`, `Ord`) and `Enum`.
    - **`Fractional`**: Fractional number types (`Float`, `Double`, `Ratio`). Supports division (`/`, `recip`). Requires `Num`.
    - **`Enum`**: Sequentially ordered types (`succ`, `pred`, `toEnum`, `fromEnum`). Used for list ranges `[start..end]`.

### **14. Property-Based Testing (QuickCheck)**

- **What is it?** A testing technique where you define general *properties* that your code should satisfy, and a library (like QuickCheck) automatically generates a large number of random test cases to try and falsify these properties.
- **Contrast with Example-Based Testing:** Instead of writing specific inputs and expected outputs (`testAdd2Plus2 = add 2 2 == 4`), you state a general truth (`prop_addCommutative x y = x + y == y + x`).
- **Key Concepts:**
    - **Properties:** Functions that take randomly generated arguments and return `Bool` (or a `Property` type). They express invariants or general truths about the code.
    - **`Arbitrary`** Type Class: QuickCheck needs to know how to generate random values for the types used in properties. Types need an `instance Arbitrary MyType where arbitrary = ...`. Many standard types already have instances.
    - **Generators:** Functions within the `Arbitrary` instance that describe how to create random values.
    - **`quickCheck`** Function: The function (usually run from GHCi or a test suite) that takes a property, generates test data, runs the property function many times (e.g., 100), and reports if any test case fails. If it fails, QuickCheck often tries to "shrink" the failing input to the simplest possible failing case.
- **Generating Functions:** QuickCheck can generate random functions (`a -> b`) if the input type `a` is an instance of `CoArbitrary` and the output type `b` is an instance of `Arbitrary`.
    - **`CoArbitrary`**: This type class allows a value to perturb a random number generator. Essentially, it defines how a value of type `a` can influence the generation of a value of another type. Many base types have instances.
    - **`Function`**: QuickCheck uses an internal `Function` type wrapper when generating functions for properties.
    - **`Example Property (testing map)`**:
        
        ```
        import Test.QuickCheck
        import Test.QuickCheck.Function -- For Function type and CoArbitrary/Arbitrary instances
        
        -- Property: map distributes over function composition
        prop_mapComposition :: Fun Int Int -> Fun Int Int -> [Int] -> Bool
        prop_mapComposition (Fun _ f) (Fun _ g) xs = map (f . g) xs == (map f . map g) xs
        -- Note: Fun is a wrapper from QuickCheck.Function providing necessary instances.
        
        ```
        
- **Higher-Order Properties:** You can write properties *about* higher-order functions (like the `map` example above) or properties that *take functions* as arguments. QuickCheck handles generating these functions if the necessary `Arbitrary` and `CoArbitrary` instances exist.
- **Benefits:** Excellent at finding edge cases and subtle bugs that might be missed by example-based tests. Increases confidence in code correctness.

### **15. Algebraic Data Types (ADTs) (`data`)**

- **What are they?** The `data` keyword defines *new* data types. ADTs are composed using sums and products.
    - **Sum Types:** Represent alternatives or choices, using the `|` symbol between different **data constructors**. Each constructor can optionally hold data.
    - **Product Types:** Represent structures that hold multiple pieces of data together. Defined by a single data constructor that takes multiple arguments (fields).
- **Examples:**
    - **`Maybe a`**: Represents an optional value. A parameterized sum type.
        
        ```
        data Maybe a = Nothing | Just a
        -- Usage: Represents computations that might fail or return nothing.
        -- Example values: Nothing :: Maybe Int, Just 5 :: Maybe Int
        
        ```
        
    - **`Either a b`**: Represents a value that is one of two possible types. A parameterized sum type often used for error handling.
        
        ```
        data Either a b = Left a | Right b
        -- Usage: Left often holds an error, Right holds a success value.
        -- Example values: Left "Error message" :: Either String Int, Right 42 :: Either String Int
        
        ```
        
    - **`Ordering`**: A simple (non-parameterized) sum type used for comparison results.
        
        ```
        data Ordering = LT | EQ | GT
        -- Used by the 'compare' function in the Ord type class.
        -- compare :: Ord a => a -> a -> Ordering
        -- compare 5 10 == LT
        -- compare 5 5  == EQ
        -- compare 10 5 == GT
        
        ```
        
    - **Product Type Example:**
        
        ```
        data Point = Point Double Double -- One constructor 'Point' holding two Doubles
        data Person = Person String Int  -- One constructor 'Person' holding a String and an Int
        
        ```
        
- **Working with ADTs:** Use **pattern matching** (in `case` expressions or function definitions) to deconstruct values and handle different constructors.
    
    ```
    isJust :: Maybe a -> Bool
    isJust (Just _) = True
    isJust Nothing  = False
    
    processEither :: Either String Int -> String
    processEither eitherVal = case eitherVal of
      Left errMsg -> "Error: " ++ errMsg
      Right val   -> "Success value: " ++ show val
    
    ```
    

### **16. Recursive Data Types**

- **What are they?** ADTs whose definitions refer to themselves. This allows defining structures of arbitrary size, like lists or trees.
- **Examples:**
    - **Custom List:** (Similar to Haskell's built-in `[]`)
        
        ```
        data IntList = Empty | Cons Int IntList
        -- Example: Cons 1 (Cons 2 (Cons 3 Empty)) represents the list [1, 2, 3]
        
        ```
        
    - **Binary Tree:**
        
        ```
        data Tree a = EmptyTree | Node a (Tree a) (Tree a)
        -- Example: Node 5 (Node 3 EmptyTree EmptyTree) (Node 8 EmptyTree EmptyTree)
        
        ```
        
- **Usage:** Processed using recursive functions that typically pattern match on the constructors.
    
    ```
    -- Sum elements in our custom IntList
    sumIntList :: IntList -> Int
    sumIntList Empty       = 0
    sumIntList (Cons x xs) = x + sumIntList xs
    
    -- Calculate the depth of a binary tree
    depth :: Tree a -> Int
    depth EmptyTree = 0
    depth (Node _ left right) = 1 + max (depth left) (depth right)
    
    ```
    

### **17. `newtype` Declaration**

- **What is it?** `newtype` is used to create a *new*, distinct type, similar to `data`.
- **Constraint:** It MUST have **exactly one data constructor**, and that constructor MUST have **exactly one field**.
    
    ```
    newtype Age = Age Int
    newtype Name = Name String
    -- newtype Bad = Bad Int String -- ERROR: Too many fields
    -- newtype Bad2 = Option1 | Option2 -- ERROR: Too many constructors
    
    ```
    
- **Key Benefit: Zero Runtime Overhead.** Although `newtype` creates a distinct type at compile time (providing type safety), this distinction is erased during compilation. At runtime, a value of type `Age` is represented exactly like an `Int`. This avoids the performance/memory overhead associated with `data` constructors.
- **Comparison:**
    - `type Age = Int` (Type Synonym):
        - `Age` is just an *alias* for `Int`.
        - No new type created. `Age` and `Int` are interchangeable.
        - No runtime overhead.
    - `data Age = Age Int` (Data Declaration):
        - Creates a *new*, distinct type `Age`.
        - `Age` and `Int` are *not* interchangeable without using the `Age` constructor.
        - Has runtime overhead (the `Age` constructor needs representation).
    - `newtype Age = Age Int` (Newtype Declaration):
        - Creates a *new*, distinct type `Age` (like `data`).
        - `Age` and `Int` are *not* interchangeable without using the `Age` constructor.
        - **No runtime overhead** (like `type`). The constructor is erased at runtime.
- **`Why use newtype?`**
    - **Type Safety without Cost:** Prevent accidentally mixing types that have the same underlying representation (e.g., `newtype UserId = UserId Int`, `newtype ProductId = ProductId Int`). You can't pass a `ProductId` where a `UserId` is expected.
    - **Instance Control:** Define different type class instances for types that are structurally similar but semantically different. For example, defining different `Monoid` instances for numbers (e.g., `Sum` based on `+`, `Product` based on ) using `newtype` wrappers around `Int`.
    - **Abstraction:** Hide the underlying representation of a type.

### **18. Higher-Order Functions (HOFs)**

- **What are they?** Functions that either:
    1. Take one or more functions as arguments.
    2. Return a function as a result.
- **Why use them?** They are fundamental to FP, enabling:
    - **Abstraction:** Capture common patterns of computation (e.g., applying an operation to every element of a list).
    - **Reusability:** Write generic functions that can be specialized by passing in different function arguments.
    - **Creating DSLs:** Build domain-specific languages by combining functions.
- **Examples:**
    - `map :: (a -> b) -> [a] -> [b]`: Takes a function and a list, applies the function to each element.
    - `filter :: (a -> Bool) -> [a] -> [a]`: Takes a predicate function and a list, returns elements satisfying the predicate.
    - `curry :: ((a, b) -> c) -> a -> b -> c`: Converts a function taking a pair `(a, b)` into a curried function taking `a` then `b`.
    - `uncurry :: (a -> b -> c) -> (a, b) -> c`: Converts a curried function into one taking a pair.
    - `flip :: (a -> b -> c) -> b -> a -> c`: Takes a function and returns a new function with the order of the first two arguments swapped. `flip (-) 5 3` evaluates to `3 - 5 = -2`.
- **`Function Application Operator ($)`**:
    - `($) :: (a -> b) -> a -> b`
    - `f $ x` is exactly equivalent to `f x`.
    - **Difference:** `$` has very low precedence and is right-associative.
    - **Usage:** Reduces the need for parentheses in chains of function applications.
        
        ```
        -- Instead of:
        putStrLn (show (abs (negate 5)))
        -- You can write:
        putStrLn $ show $ abs $ negate 5
        
        ```
        

### **19. Anonymous Functions (Lambdas) & Operator Sections**

- **Anonymous Functions (Lambdas):** Functions without a name, defined inline using `\`. Useful for creating small helper functions to pass to HOFs without needing a top-level definition.
    - **Syntax:** `\arg1 arg2 ... -> expression`
    - **Usage with HOFs:**
        
        ```
        map (\x -> x * x) [1..5]  -- Result: [1, 4, 9, 16, 25]
        filter (\(x, y) -> x < y) [(1,5), (5,1), (2,3)] -- Result: [(1,5), (2,3)]
        zipWith (\a b -> a + 2*b) [1,2,3] [4,5,6] -- Result: [9, 12, 15]
        
        ```
        
- **Operator Sections:** A special syntax for partially applying infix operators. Creates anonymous functions.
    - `(operator operand)`: Partially apply operator on the right. Example: `( + 1)` is equivalent to `\x -> x + 1`.
    - `(operand operator)`: Partially apply operator on the left. Example: `(10 / )` is equivalent to `\y -> 10 / y`.
    - `(operator)`: Refers to the underlying function itself (useful for passing operators to HOFs). Example: `map (*) [1..5]` doesn't work, but `map (\x -> x*x) [1..5]` or `map (^2) [1..5]` or using `zipWith (*) [1..5] [1..5]` does. A common use is `foldl (+) 0 list` to sum a list.
    - **Examples:**
        
        ```
        map (+1) [1, 2, 3]      -- Result: [2, 3, 4]
        map ( / 2) [10, 20, 30]   -- Result: [5.0, 10.0, 15.0]
        filter (> 5) [1..10]     -- Result: [6, 7, 8, 9, 10]
        find ('a' ==) "banana"  -- Result: Just 'a' (find uses == operator section)
        
        ```
        

### **20. Function Composition (`.`) and Identity (`id`)**

- **`Function Composition (.):`** Combines two functions into one. `(f . g)` is a new function that first applies `g`, then applies `f` to the result.
    - **Signature:** `(.) :: (b -> c) -> (a -> b) -> a -> c`
    - **Definition:** `(f . g) x = f (g x)`
    - **Usage:** Creates elegant pipelines for data transformation, read right-to-left.
        
        ```
        -- Get the absolute value of the negation of a number squared
        -- Instead of: abs (negate (x * x))
        -- Compose: (abs . negate . (\x -> x * x)) x
        -- Or using (^2): (abs . negate . (^2)) x
        
        notEmpty :: [a] -> Bool
        notEmpty = not . null -- Check if a list is not empty
        
        ```
        
- **`Identity Function (id):`** A function that simply returns its argument unchanged.
    - **Signature:** `id :: a -> a`
    - **Definition:** `id x = x`
    - **Usage:**
        - Acts as the identity element for function composition: `f . id = f` and `id . f = f`.
        - Useful as a placeholder or default function in some higher-order programming patterns.

### **21. Folds (`foldr`, `foldl`)**

- **What are they?** Functions that "reduce" a data structure (typically a list) to a single summary value by applying a combining function iteratively. They capture a common recursion pattern over lists.
- **`foldr`** (Fold Right): Processes the list conceptually from right to left, replacing the `(:)` constructor with the combining function and `[]` with the initial value.
    - **Signature:** `foldr :: (a -> b -> b) -> b -> [a] -> b`
    - **Evaluation:** `foldr f z [x1, x2, x3]` expands conceptually to `f x1 (f x2 (f x3 z))`.
    - **Laziness:** Can work on infinite lists if `f` is lazy in its second argument (doesn't always need the result of the recursive call). Example: `and = foldr (&&) True`. If it encounters `False`, it stops.
    - **Examples:**
        
        ```
        -- Sum using foldr
        sum :: (Num a) => [a] -> a
        sum xs = foldr (+) 0 xs -- sum [1,2,3] -> 1 + (2 + (3 + 0)) -> 6
        
        -- Map using foldr
        map' :: (a -> b) -> [a] -> [b]
        map' f xs = foldr (\x acc -> f x : acc) [] xs
        
        -- Append using foldr
        append :: [a] -> [a] -> [a]
        append xs ys = foldr (:) ys xs -- append [1,2] [3,4] -> 1 : (2 : [3,4]) -> [1,2,3,4]
        
        ```
        
- **`foldl`** (Fold Left): Processes the list from left to right, accumulating the result.
    - **Signature:** `foldl :: (b -> a -> b) -> b -> [a] -> b`
    - **Evaluation:** `foldl f z [x1, x2, x3]` expands conceptually to `f (f (f z x1) x2) x3`.
    - **Strictness (Accumulator):** `foldl` is lazy, but it builds up a large nested expression (thunk) for the accumulator. Evaluating this can lead to stack overflow for large lists.
    - **`foldl'`** (Strict Fold Left): Found in `Data.List`. Forces evaluation of the accumulator at each step, avoiding stack overflow. Generally preferred over `foldl` for accumulating results on large lists.
        - **Signature:** `foldl' :: (b -> a -> b) -> b -> [a] -> b`
    - **Examples:**
        
        ```
        import Data.List (foldl')
        
        -- Sum using foldl' (preferred over foldl for sum)
        sum' :: (Num a) => [a] -> a
        sum' xs = foldl' (+) 0 xs -- sum' [1,2,3] -> (((0+1)+2)+3) -> 6
        
        -- Reverse using foldl (classic example, but builds thunks)
        reverse' :: [a] -> [a]
        reverse' xs = foldl (\acc x -> x : acc) [] xs -- Note: prepending is efficient
        
        -- Better reverse using foldl'
        reverse'' :: [a] -> [a]
        reverse'' xs = foldl' (flip (:)) [] xs
        
        ```
        

### **22. The `Functor` Type Class**

- **Concept:** Represents types (often containers or contexts like `Maybe`, `[]`, `IO`) that support having a function applied "inside" them without changing the structure or context. It abstracts the idea of "mapping" a function over a structure.
- **Definition:**
    
    ```
    class Functor f where
      fmap :: (a -> b) -> f a -> f b
    
    ```
    
    - `f` here is a *type constructor* that takes one type argument (like `Maybe`, not `Maybe Int`).
    - `fmap` takes a function `(a -> b)` and a value in the context `f a`, and returns a new value `f b` where the function has been applied to the value(s) inside the context `f`.
- **Infix Operator:** `(<$>)` is an infix synonym for `fmap`. `f <$> x` is the same as `fmap f x`. Often preferred for readability.
- **Examples:**
    - `Maybe`: Applies the function if `Just`, does nothing if `Nothing`.
        
        ```
        fmap (+1) (Just 5) == Just 6
        (+1) <$> (Just 5)  == Just 6
        fmap (+1) Nothing  == Nothing
        
        ```
        
    - `List` (`[]`): Applies the function to each element (this is just standard `map`).
        
        ```
        fmap (*2) [1, 2, 3] == [2, 4, 6]
        (*2) <$> [1, 2, 3]  == [2, 4, 6]
        
        ```
        
    - `Either e`: Applies the function only to the `Right` value.
        
        ```
        fmap length (Right "hello") == Right 5
        fmap length (Left "error")  == Left "error"
        
        ```
        
    - `IO`: Creates a new IO action that, when executed, performs the original action and then applies the function to its result.
        
        ```
        -- action1 :: IO String
        action1 = do
          name <- getLine
          return ("Hello " ++ name)
        
        -- action2 :: IO Int (gets the length of the result of action1)
        action2 = fmap length action1
        -- or: action2 = length <$> action1
        
        ```
        
- **Functor Laws:** Instances should obey these laws to ensure `fmap` behaves predictably.
    1. **Identity:** `fmap id = id`
        - Mapping the identity function over a structure should not change the structure.
    2. **Composition:** `fmap (f . g) = fmap f . fmap g`
        - Mapping a composed function `f . g` is the same as mapping `g` first, and then mapping `f`.

### **23. The `Applicative` Type Class**

- **Concept:** An abstraction that sits between `Functor` and `Monad`. It allows applying functions *that are themselves within the context* to values that are also within the context. It's useful for sequencing computations where functions take multiple arguments, all of which might come from contextual computations.
- **Definition (Subclass of Functor):**
    
    ```
    class Functor f => Applicative f where
      -- Core methods:
      pure :: a -> f a
      (<*>) :: f (a -> b) -> f a -> f b -- Often called "apply"
    
      -- Optional methods (with default implementations):
      liftA2 :: (a -> b -> c) -> f a -> f b -> f c
      (*>) :: f a -> f b -> f b -- Sequence actions, discarding the value of the first
      (<*) :: f a -> f b -> f a -- Sequence actions, discarding the value of the second
    
    ```
    
    - `pure`: Takes a normal value and lifts it into a minimal context `f`.
    - `(<*>)`: Takes a function wrapped in context `f (a -> b)` and a value wrapped in context `f a`, and applies the wrapped function to the wrapped value, returning the result in context `f b`.
- **Relationship to Functor:** Every `Applicative` must also be a `Functor`. `fmap` can actually be defined using `pure` and `<*>`: `fmap f x = pure f <*> x`.
- **Usage Pattern:** Often used with `fmap` (or `<$>`) to apply a regular multi-argument function to multiple contextual values:
    
    ```
    -- Suppose we have:
    -- add :: Int -> Int -> Int
    -- maybeX :: Maybe Int
    -- maybeY :: Maybe Int
    
    -- We can apply 'add' to maybeX and maybeY:
    resultMaybe :: Maybe Int
    resultMaybe = pure add <*> maybeX <*> maybeY
    -- Or using Functor's <$> operator:
    resultMaybe' :: Maybe Int
    resultMaybe' = add <$> maybeX <*> maybeY
    
    -- This is equivalent to using liftA2:
    resultMaybe'' :: Maybe Int
    resultMaybe'' = liftA2 add maybeX maybeY
    
    ```
    
- **Examples:**
    - `Maybe`: `<*>` only succeeds if both the function and the argument are `Just`.
        
        ```
        Just (+3) <*> Just 5   == Just 8
        Nothing   <*> Just 5   == Nothing
        Just (+3) <*> Nothing  == Nothing
        pure 5 :: Maybe Int    == Just 5
        (+) <$> Just 3 <*> Just 4 == Just 7
        (+) <$> Nothing <*> Just 4 == Nothing
        
        ```
        
    - `List` (`[]`): `<*>` applies every function in the left list to every value in the right list (Cartesian product style).
        
        ```
        pure 1 :: [Int]           == [1]
        [(+1), (*2)] <*> [10, 20] == [11, 21, 20, 40] -- [(10+1), (20+1), (10*2), (20*2)]
        (+) <$> [1, 2] <*> [10, 100] == [11, 101, 12, 102] -- [1+10, 1+100, 2+10, 2+100]
        
        ```
        
    - `IO`: Sequences the actions. The action producing the function runs first, then the action producing the value, then the function is applied.
        
        ```
        -- Example: Read two lines and concatenate them
        concatIO :: IO String
        concatIO = (++) <$> getLine <*> getLine
        
        ```
        
- **Applicative Laws:** Ensure `Applicative` instances behave consistently (similar purpose to Functor laws). Key laws include:
    - Identity: `pure id <*> v = v`
    - Homomorphism: `pure f <*> pure x = pure (f x)`
    - Interchange: `u <*> pure y = pure ($ y) <*> u`
    - Composition: `pure (.) <*> u <*> v <*> w = u <*> (v <*> w)`

### **24. `do` Notation and `return`**

- **`do`** Notation: Syntactic sugar that provides a more imperative-looking style for writing sequences of monadic actions. It makes monadic code (especially `IO`) easier to read and write by hiding the explicit use of `>>=` and `>>`.
- **Desugaring:** The compiler translates `do` blocks into chains of `>>=` and `>>`.
    - `do { x <- action1 ; action2 }` becomes `action1 >>= (\x -> action2)`
        - `action1` is executed. Its result is bound to `x`. `x` is then available in `action2`.
    - `do { action1 ; action2 }` becomes `action1 >> action2` (which is `action1 >>= (\_ -> action2)`)
        - `action1` is executed. Its result is discarded. `action2` is executed.
    - `do { let y = pureValue ; action }` becomes `let y = pureValue in action`
        - Standard `let` binding; no monadic sequencing involved here.
    - `do { action }` becomes just `action`.
- **`return`** in Monads:
    - **Signature:** `return :: Monad m => a -> m a`
    - **Purpose:** Takes a pure value `a` and lifts it into a minimal monadic context `m a`. It does **not** mean "exit the function" like in imperative languages. It signifies producing a pure result *within* the monadic computation.
    - **`Relation to pure:`** For any type that is both an `Applicative` and a `Monad`, `return` must be identical to `pure`. `return` is historically older but `pure` is arguably better named.
    - **`Usage in do blocks:`** Typically used as the last statement to wrap the final pure result of the sequence in the monad.
        
        ```
        -- Example: IO action that reads a name and returns a greeting string
        getGreeting :: IO String
        getGreeting = do
          putStrLn "Enter your name:"
          name <- getLine          -- name is a String
          let greeting = "Hello, " ++ name
          return greeting         -- Lifts the pure String 'greeting' into IO String
        
        ```
        

### **25. Conditional Execution & Sequencing (`when`, `sequence`, etc.)**

- These functions (mostly from `Control.Monad`) provide convenient ways to control the execution of monadic actions.
- **`when :: Applicative f => Bool -> f () -> f ()`**: Executes the monadic action only if the boolean condition is `True`. If `False`, it does nothing (returns `pure ()`).
    
    ```
    import Control.Monad (when)
    
    checkAndGreet :: IO ()
    checkAndGreet = do
      putStrLn "Enter your name:"
      name <- getLine
      when (length name > 0) $ do -- Only greet if name is not empty
        putStrLn $ "Hello, " ++ name
    
    ```
    
- **`sequence :: Monad m => [m a] -> m [a]`**: Takes a list of monadic actions. Executes them in order from left to right. Collects all the results into a list, wrapped in the monad. If any action fails (e.g., `Nothing` in `Maybe`), the whole sequence fails.
    
    ```
    -- Example: Maybe
    sequence [Just 1, Just 2, Just 3] == Just [1, 2, 3]
    sequence [Just 1, Nothing, Just 3] == Nothing
    
    -- Example: IO (read 3 lines)
    read3Lines :: IO [String]
    read3Lines = sequence [getLine, getLine, getLine]
    
    ```
    
- **`sequence_ :: Monad m => [m a] -> m ()`**: Similar to `sequence`, but discards the results of the individual actions. Useful when you only care about the side effects.
- **`mapM :: Monad m => (a -> m b) -> [a] -> m [b]`**: Maps a monadic function over a list and then sequences the resulting actions (like `sequence . map f`).
- **`mapM_ :: Monad m => (a -> m b) -> [a] -> m ()`**: Like `mapM`, but discards the final results (like `sequence_ . map f`).

### **26. Monads**

- **Concept:** Monads are a design pattern (formalized as a type class in Haskell) that provide a structured way to sequence computations, especially those that involve some form of "context" or "effect". They build upon `Applicative` by adding the ability to have the *next* computation depend on the *result* of the previous one. They abstract away the boilerplate "plumbing" involved in managing this context (e.g., handling potential failure, propagating state, sequencing I/O).
- **Terminology:**
    - **Monad:** The type class `Monad`.
    - **Monadic Type:** A type constructor that is an instance of `Monad` (e.g., `Maybe`, `IO`, `[]`, `Either e`, `State s`).
    - **Action / Monadic Value:** A value of a monadic type (e.g., `Just 5 :: Maybe Int`, `getLine :: IO String`, `[1,2,3] :: [Int]`). Represents a value within the monadic context/structure.
    - **Monadic Function (Kleisli arrow):** A function of type `a -> m b`. It takes a normal value `a` and returns a monadic value `m b`, often performing some computation within the monad's context.
- **`The Monad Type Class:`**
    
    ```
    class Applicative m => Monad m where
      (>>=) :: m a -> (a -> m b) -> m b  -- Bind
      (>>)  :: m a -> m b -> m b        -- Sequence (default implementation: m1 >> m2 = m1 >>= \_ -> m2)
      return :: a -> m a                -- Must be pure
    
      -- fail :: String -> m a           -- Deprecated, avoid using
    
    ```
    
    - **Superclass:** `Applicative` (which implies `Functor`). Every Monad is also Applicative and Functor.
    - **`(>>=)`** (Bind): The core monadic operation. Pronounced "bind".
        - Takes a monadic value `m a` and a monadic function `(a -> m b)`.
        - It conceptually "extracts" the value `a` from the context `m a`, feeds it to the function `(a -> m b)` to get the next monadic action `m b`, and returns that `m b`.
        - This allows the *structure* of the next computation (`m b`) to depend on the *value* (`a`) from the previous one.
    - **`(>>)`** (Sequence): Executes the first action, discards its result, then executes the second action. Useful when the result of the first action is not needed for the second, only its effect.
    - **`return`**: Lifts a pure value `a` into the monadic context `m a`. Same as `pure`.
- **Monad Laws:** Ensure `Monad` instances behave consistently.
    1. **Left Identity:** `return a >>= f` is equivalent to `f a`. (Lifting a value then binding it to `f` is the same as just applying `f` to the value).
    2. **Right Identity:** `m >>= return` is equivalent to `m`. (Binding an action to `return` doesn't change the action).
    3. **Associativity:** `(m >>= f) >>= g` is equivalent to `m >>= (\x -> f x >>= g)`. (Order of binding doesn't matter if structure is maintained).
- **`do`** Notation for Monads: As mentioned in Section 24, `do` notation is syntactic sugar for `>>=` and `>>`, making monadic code look more sequential.
    
    ```
    -- Example: Maybe Monad for safe division
    safeDiv :: Double -> Double -> Maybe Double
    safeDiv _ 0 = Nothing
    safeDiv x y = Just (x / y)
    
    -- Compute (a / b) / c safely using do notation
    computeDo :: Double -> Double -> Double -> Maybe Double
    computeDo a b c = do
      r1 <- safeDiv a b  -- r1 is Double, extracted from Maybe Double
      r2 <- safeDiv r1 c -- r2 is Double, extracted from Maybe Double
      return r2          -- Lift final result back into Maybe
    
    -- Equivalent computation using >>=
    computeBind :: Double -> Double -> Double -> Maybe Double
    computeBind a b c =
      safeDiv a b >>= (\r1 ->
      safeDiv r1 c >>= (\r2 ->
      return r2 ))
    
    ```
    
- **Common Monads:** `IO` (side effects), `Maybe` (failure), `Either e` (failure with info), `[]` (non-determinism/multiple results), `State s` (state management), `Reader r` (read-only environment).

### **27. Lazy Evaluation**

- **Definition:** Haskell uses **lazy evaluation** (specifically, *call-by-need*) as its default evaluation strategy. This means that expressions are **not evaluated until their results are actually needed** by another computation. When an expression *is* evaluated, the result is stored (memoized), and subsequent uses of the same expression will reuse the stored result without recomputation.
- **Call-by-Value (Strict Evaluation):** The strategy used by most imperative languages (C, Java, Python, etc.). Arguments to a function are fully evaluated *before* the function is called.
    - Example: In `f(x + 1, y * 2)`, both `x + 1` and `y * 2` are computed first, and their results are passed to `f`.
- **Call-by-Need (Lazy Evaluation - Haskell's Strategy):**
    1. Arguments are passed to functions *without* being evaluated.
    2. An expression (argument or binding) is only evaluated when its value is required (e.g., by a primitive operation like `+`, or by pattern matching in a `case` or function definition).
    3. Once evaluated, the result replaces the expression in memory (memoization), avoiding re-evaluation.
- **Thunks:** An unevaluated expression is represented internally as a **thunk**. A thunk is essentially a "promise" to compute a value, containing the code needed for the computation and the environment (values of free variables) it needs. When the value is demanded, the runtime system **forces** the thunk, executing the code. The thunk is then overwritten with the result (in Weak Head Normal Form or Normal Form).
- **Benefits of Laziness:**
    - **Infinite Data Structures:** Allows defining and partially using conceptually infinite data structures. Only the parts actually accessed are computed.
        
        ```
        ones :: [Integer]
        ones = 1 : ones -- Infinite list of 1s
        
        take 5 ones == [1, 1, 1, 1, 1] -- Only computes the first 5
        
        fibs :: [Integer]
        fibs = 0 : 1 : zipWith (+) fibs (tail fibs) -- Infinite Fibonacci sequence
        
        ```
        
    - **Efficiency:** Avoids unnecessary computations. If a part of an expression is not needed (e.g., in an `if` branch that isn't taken), it's never evaluated.
        
        ```
        -- 'expensiveComputation' is only evaluated if x > 10
        myFunc x = if x > 10 then expensiveComputation x else 0
        
        ```
        
    - **New Control Structures:** Allows defining control structures (like short-circuiting `&&` or `if-then-else`) as regular functions, because the evaluation of arguments can be controlled by the function itself.
- **Drawbacks of Laziness:**
    - **Space Leaks:** Holding onto references to large, unevaluated thunks can lead to unexpectedly high memory usage. The program might retain all the information needed to compute a value long after it seems like it should have been garbage collected.
    - **Performance Reasoning:** It can be harder to predict the exact time and space cost of computations, as evaluation order is less explicit than in strict languages. Debugging performance issues can be more challenging.
- **Forcing Strict Evaluation:** Sometimes laziness is undesirable (e.g., to prevent space leaks in accumulators, or to ensure side effects happen predictably). Haskell provides ways to introduce strictness:
    - **`seq :: a -> b -> b`**: The fundamental strictness primitive. `a` seq `b` first forces the evaluation of `a` to **Weak Head Normal Form (WHNF)** – meaning the outermost constructor is evaluated (e.g., evaluating `1+2` to `3`, or `Just (1+2)` to `Just <thunk>`, or `1 : <thunk>` to `(:) 1 <thunk>`) – and *then* returns `b`. It's often used to ensure one value is evaluated before another is used.
    - **`($!) :: (a -> b) -> a -> b`** (Strict Application): `f $! x` forces evaluation of the argument `x` to WHNF *before* applying the function `f`. Useful for ensuring function arguments don't build up unevaluated thunks.
    - **`Bang Patterns ({-# LANGUAGE BangPatterns #-})`**: A language extension allowing you to mark function arguments or `let`/`where` bindings with `!` to force their evaluation to WHNF upon entry or binding.
        
        ```
        -- Strict accumulator in a factorial function
        factorial :: Int -> Int
        factorial n = go n 1
          where
            go !m !acc -- Force evaluation of m and acc on each call
              | m <= 1    = acc
              | otherwise = go (m - 1) (acc * m)
        
        -- Strict let binding
        let !y = someExpensiveComputation x
        in ... use y ...
        
        ```
        
    - **Note on WHNF:** Forcing evaluation usually means to WHNF, not necessarily Normal Form (fully evaluated). Forcing `Just (1+2)` to WHNF results in `Just <thunk>`, not `Just 3`. Full evaluation requires deeper inspection.

## Agda

## **1. Introduction to Agda**

- **What is Agda?**
    - Agda is a **functional programming language** similar in spirit to Haskell but with a much more powerful type system.
    - It's also a **proof assistant**, meaning you can use it to write formal mathematical proofs that are checked by the computer.
    - It's based on **intuitionistic type theory**.
- **What is it used for?**
    - **Formal Verification:** Proving that software is correct with respect to a formal specification. This increases reliability, especially for critical systems.
    - **Programming with Dependent Types:** Writing programs where types can depend on *values*. This allows expressing complex invariants and properties directly in the types.
    - **Metaprogramming and Language Research:** Exploring and implementing advanced type system features.
- **Why use Agda?**
    - **High Assurance:** The type checker guarantees that well-typed programs satisfy the properties expressed in their types (including termination, if totality checking is enabled).
    - **Expressiveness:** Dependent types allow expressing very precise properties about programs.
    - **Proof Development:** It provides an interactive environment for constructing proofs as programs.
- **Differences from Haskell (Syntax & Semantics)**
    - **Syntax:** While inspired by Haskell, Agda's syntax has notable differences:
        - **Function Application:** Uses spaces like Haskell (`f x`), but type signatures use `→` (or `>`) instead of `::`. Example: `not : Bool → Bool`.
        - **Lambda Abstraction:** Uses `λ` or `\` followed by variable(s), an arrow `→`, and the body. Example: `λ x → x + 1`. Multiple arguments can be grouped: `λ x y → x + y`.
        - **Type Annotations:** `variable : Type`.
        - **Definitions:** Use `=` for function/value definitions. Example: `id x = x`.
        - **Unicode:** Agda heavily uses Unicode symbols (e.g., `ℕ`, `∀`, `→`, `≡`, `⊤`, `⊥`). Editors are configured for easy input.
    - **Dependent Types:** This is the *major* difference. In Agda, types can depend on values (e.g., `Vec A n` - a vector of `A`s with length `n`). Haskell (without extensions) does not have this.
    - **Totality Checking:** Agda checks if functions are *total* (guaranteed to terminate and cover all cases). Haskell is non-total by default.
    - **Indentation:** Agda uses indentation for layout, similar to Haskell, but can also use explicit braces `{}` and semicolons `;`.
- **Running Agda Files on Windows**
    1. **Installation:** The easiest way is often using `cabal` (the Haskell package manager) or `stack` (another Haskell build tool).
        - Install the Haskell Platform or GHC + Cabal first.
        - Open a command prompt (like PowerShell or CMD).
        - Run: `cabal update` followed by `cabal install Agda`.
        - Alternatively, use `stack setup` and `stack install Agda`.
    2. **Editor Setup:** Agda is typically used with an editor integration (Emacs or VS Code) for interactive development.
        - **Emacs:** Install `agda-mode`. Follow instructions on the Agda wiki.
        - **VS Code:** Install the `agda` extension from the marketplace.
    3. **Type Checking:**
        - Navigate to your Agda file's directory in the command prompt.
        - Run: `agda YourFile.agda`. This command type-checks the file.
        - Most interaction happens *within* the editor (loading the file, filling holes, etc.).

## **2. Core Concepts: Types and Verification**

- **Dependent Types**
    - A **dependent type** is a type whose definition depends on a *value*. This allows encoding program properties and invariants directly into the type system. If a program type-checks, those properties are guaranteed to hold.
- **Indexed Datatypes**
    - A common way dependent types arise is through **indexed datatypes**. These are datatypes where the resulting type depends not only on type parameters (like `A` in `List A`) but also on *value* arguments, called **indices**.
    - The indices often represent properties or constraints that values of the type must satisfy.
    - The constructors of an indexed datatype specify the indices for the values they produce.
- **`Example: Vectors (Vec)`**
    - `Vec A n` is a classic example of an indexed datatype. It represents lists of elements of type `A` that have *exactly* length `n`.
    - Here, `A` is a type **parameter**, while `n : ℕ` is a value **index**.
    - The type `Vec A n` depends on the *value* `n`.
    
    ```
    -- Definition of Nat (Natural Numbers)
    data ℕ : Set where
      zero : ℕ
      suc  : ℕ → ℕ
    
    -- Definition of Vec (Vectors)
    data Vec (A : Set) : ℕ → Set where
      -- The empty vector '[]' has length 'zero'.
      []  : Vec A zero
      -- If 'x' is an 'A' and 'xs' is a 'Vec A n',
      -- then 'x ∷ xs' is a 'Vec A (suc n)'.
      -- The length increases by one.
      _∷_ : {n : ℕ} → A → Vec A n → Vec A (suc n)
    
    ```
    
    - The type signature `Vec (A : Set) : ℕ → Set` shows that `Vec` takes a type `A` and a natural number `n` to produce a type `Vec A n`.
    - The `[]` constructor *only* produces values of type `Vec A zero`.
    - The `_∷_` constructor takes a `Vec A n` and produces a `Vec A (suc n)`, ensuring the length index is correctly maintained.
- **`Example: Finite Sets (Fin)`**
    - `Fin n` represents the type of natural numbers that are strictly less than `n`. It's essentially a type-safe index for structures of size `n`.
    - It's indexed by `n : ℕ`. `Fin zero` is an empty type (has no constructors), while `Fin (suc n)` contains representations for `0, 1, ..., n`.
    
    ```
    -- Definition of Fin (Finite Sets)
    data Fin : ℕ → Set where
      -- 'fzero' represents the 0th element in a set of size 'suc n' (i.e., size ≥ 1).
      fzero : {n : ℕ} → Fin (suc n)
      -- If 'k' is an element of 'Fin n', then 'fsuc k' is the next element
      -- in 'Fin (suc n)'.
      fsuc  : {n : ℕ} → Fin n → Fin (suc n)
    
    ```
    
    - `fzero {n}` is the index `0` in `Fin (suc n)`.
    - `fsuc {n} k` is the index `k+1` in `Fin (suc n)`, where `k` was an index in `Fin n`.
    - This structure guarantees that any value `i : Fin n` corresponds to a number `0 ≤ i < n`. This is useful for safe indexing into vectors: `lookup : {A : Set} {n : ℕ} → Vec A n → Fin n → A`.
- **Key Constructs for Dependent Types:**
    - **Π-types (Pi-types / Dependent Function Types):**
        - Represent functions where the **return type** can depend on the **input value**.
        - Syntax: `(x : A) → B x`. This is the type of functions that take an argument `x` of type `A` and return a value of type `B x`. The type `B x` may use the value `x`.
        - If `B` does *not* depend on `x` (written just `B`), this simplifies to the regular non-dependent function type `A → B`.
        - **Example:** A function that takes a number `n` and returns a `Vec` of that specific length `n`.
            
            ```
            replicate : {A : Set} → (n : ℕ) → A → Vec A n
            replicate zero    x = []
            replicate (suc n) x = x ∷ replicate n x
            
            ```
            
            The type signature `(n : ℕ) → A → Vec A n` is a Π-type (dependency on `n`) followed by a regular function type (`A → ...`). The full dependent type could be written `(n : ℕ) → (x : A) → Vec A n`.
            
    - **Σ-types (Sigma-types / Dependent Pairs):**
        - Represent pairs where the **type of the second element** can depend on the **value of the first element**.
        - Syntax: `(x : A) × B x` or `Σ A B`. This is the type of pairs `(a, b)` where `a : A` and `b : B a`.
        - If `B` does *not* depend on `x` (written just `B`), this simplifies to the regular non-dependent pair type `A × B`. (See Tuples in Section 5).
        - **Example:** A pair containing a number `n` and a vector of exactly length `n`. The type is `Σ ℕ (Vec Bool)`, which could be written `(n : ℕ) × Vec Bool n`. A value might be `(3 , true ∷ false ∷ true ∷ [])`.
- **Formal Verification**
    - Using mathematical logic and tools (like Agda) to prove or disprove the **correctness** of algorithms or hardware/software systems with respect to a certain **formal specification** or property.
    - In Agda, this often involves:
        1. **Defining Data Types:** Modeling the system's data (often using indexed types like `Vec` or `Fin`).
        2. **Defining Functions:** Modeling the system's operations.
        3. **Stating Properties:** Expressing desired properties as types (often using Π-types, Σ-types, equality `≡`, or other logical propositions).
        4. **Writing Proofs:** Constructing a function (a "proof term") whose *type* is the property you want to prove. If Agda accepts the function (i.e., it type-checks), the proof is considered valid.
    - The principle "Propositions as Types" (or Curry-Howard correspondence, see Section 3) is central: a proposition is true if and only if its corresponding type has an inhabitant (a value/program).
- **Types as First-Class Values**
    - In Agda (and type theory), types themselves can be manipulated like ordinary values.
    - There's a "type of types," usually called `Set`. So, `Bool : Set`, `ℕ : Set`.
    - This allows functions to take types as arguments or return types (polymorphism).
    - **Universe Levels:** To avoid paradoxes (like Russell's paradox), Agda has a hierarchy of type universes: `Set` (or `Set₀`), `Set₁`, `Set₂`, ... where `Set : Set₁`, `Set₁ : Set₂`, etc. This is mostly relevant for advanced polymorphism where you need to quantify over types of different levels.

## **3. Proofs in Agda**

- **Logic and Proofs (Recap)**
    - In logic, a **proposition** is a statement that can be true or false. A **proof** provides conclusive evidence for the truth of a proposition (a **theorem**).
    - Logic uses **connectives** (like AND `∧`, OR `∨`, IMPLIES `→`, NOT `¬`) to build complex propositions from simpler ones, and **quantifiers** (FOR ALL `∀`, EXISTS `∃`) to make statements about collections of things.
- **The Curry-Howard Correspondence (Propositions as Types)**
    - This is the fundamental principle connecting logic and programming in type theory (and thus in Agda). It states there's a direct correspondence:
        - **Propositions** correspond to **Types**.
        - **Proofs** of a proposition correspond to **Programs** (values/terms) that inhabit the corresponding type.
    - A proposition `P` is considered (constructively) true if and only if its corresponding type `P` is **inhabited** (i.e., there exists at least one program `p` such that `p : P`).
    - This means proving a theorem in Agda is equivalent to writing a program of the correct type.
    - **Logical Connectives as Type Constructors:**
        - **`Implication (P → Q)`**: Corresponds to the **function type** `P → Q`. A proof is a function that transforms a proof of `P` into a proof of `Q`.
        - **`Conjunction (P ∧ Q)`**: Corresponds to the **product type** `P × Q` (pairs). A proof consists of a proof of `P` *and* a proof of `Q`.
        - **`Disjunction (P ∨ Q)`**: Corresponds to a **sum type** (like `Either P Q` or a custom `data Or P Q`). A proof consists of *either* a proof of `P` *or* a proof of `Q`, along with an indication of which one is provided.
        - **`Negation (¬P)`**: Defined as `P → ⊥`, where `⊥` (bottom) is the **empty type** (a type with no inhabitants, representing falsehood). A proof of `¬P` is a function that shows how a proof of `P` would lead to a contradiction (`⊥`).
        - **`Truth (⊤)`**: Corresponds to the **unit type** (a type with exactly one trivial inhabitant, representing truth).
        - **`Universal Quantification (∀ x : A, P x)`**: Corresponds to the **dependent function type (Π-type)** `(x : A) → P x`. A proof is a function that, given any `a : A`, returns a proof of `P a`.
        - **`Existential Quantification (∃ x : A, P x)`**: Corresponds to the **dependent pair type (Σ-type)** `Σ A P` (or `(x : A) × P x`). A proof is a pair `(a, p)` consisting of a witness `a : A` and a proof `p : P a`.
- **Writing Proofs in Agda**
    - Since proofs are programs, you write a proof of a proposition `Prop` by defining a function or value `myProof : Prop`.
    - The Agda type checker verifies your program (`myProof`). If it type-checks, your proof is correct according to the rules of Agda's type theory.
    - **Interactive Development:** Proof construction heavily relies on Agda's interactive features:
        - Start with a hole: `myProof = ?`
        - Inspect the goal type (`Prop`) and available assumptions (variables in context).
        - Refine the hole by applying functions (lemmas), introducing constructors, or using `λ` for functions (implications/universals).
        - Use case splitting (`C-c C-c`) to perform case analysis on assumptions.
- **Constructive vs. Classical Logic**
    - Agda is based on **constructive logic** (specifically, intuitionistic type theory).
    - **Key Difference:** Constructive logic requires explicit evidence (a "construction") for proofs, especially for existence (`∃`) and disjunction (`∨`). It does *not* assume the **Law of Excluded Middle (LEM)**, which states `∀ P, P ∨ ¬P`.
    - **Implications:**
        - To prove `P ∨ Q`, you must provide *either* a proof of `P` *or* a proof of `Q`. You can't prove it by showing that `P` and `Q` can't *both* be false.
        - To prove `∃ x : A, P x`, you must provide a specific **witness** `a : A` and a proof `p : P a`. You can't prove it by showing that `∀ x : A, ¬ P x` leads to a contradiction.
        - **No general LEM:** While you can prove `P ∨ ¬P` for specific decidable `P` (like equality on `ℕ`), Agda doesn't provide it axiomatically for *all* propositions `P`.
        - **No general Double Negation Elimination:** Proving `¬¬P` (i.e., `(P → ⊥) → ⊥`) is generally weaker than proving `P`.
    - **Classical Logic:** Assumes LEM. Can be added to Agda via axioms, but this is often avoided as it loses the direct computational meaning of proofs.
- **Predicate Logic in Agda (Quantifiers)**
    - Predicate logic deals with propositions whose truth depends on variables. Quantifiers (`∀`, `∃`) are used to make statements about these variables.
    - **`Universal Quantification (∀)`**
        - **Meaning:** "For all `x` of type `A`, the property `P x` holds."
        - **Agda Representation:** Dependent Function Type (Π-type): `(x : A) → P x`.
        - **Proof:** A function that takes an arbitrary element `a : A` and returns a proof of `P a`.
        - **Example:** `∀ (n : ℕ), n + 0 ≡ n`. The proof is a function:
            
            ```
            -- Assuming propositional equality '≡' is defined
            -- and a lemma plusZero : (n : ℕ) → n + zero ≡ n
            proof∀ : (n : ℕ) → n + zero ≡ n
            proof∀ n = plusZero n -- Apply the lemma for the given n
            
            ```
            
    - **`Existential Quantification (∃)`**
        - **Meaning:** "There exists an `x` of type `A` such that the property `P x` holds."
        - **Agda Representation:** Dependent Pair Type (Σ-type): `Σ A P`, often written `(x : A) × P x`.
        - **Proof:** A pair `(a, p)` where `a : A` is the **witness** and `p : P a` is the proof that the witness satisfies the property.
        - **Example:** `∃ (n : ℕ), n + n ≡ 4`. The proof is a pair:
            
            ```
            -- Assuming propositional equality '≡' is defined
            -- and a proof term 'twoPlusTwoEqFour : 2 + 2 ≡ 4'
            -- We use the Σ-type constructor: _,_
            proof∃ : Σ ℕ (λ n → n + n ≡ 4)
            proof∃ = (2 , twoPlusTwoEqFour) -- Witness is 2, proof is twoPlusTwoEqFour
            
            ```
            
- **Equality and Equational Reasoning**
    - Proving things equal is a cornerstone of verification. Agda uses the **identity type** for this.
    - **`The Identity Type (_≡_)`**
        - Defined in the standard library (e.g., `Relation.Binary.PropositionalEquality`). Conceptually, it's an indexed datatype:
            
            ```
            data _≡_ {A : Set} (x : A) : A → Set where
              refl : x ≡ x
            
            ```
            
        - `x ≡ y` is the type of proofs that `x` is equal to `y`.
        - It's indexed by `x : A` and takes `y : A` as a parameter.
        - **Crucially:** It has only *one* constructor, `refl` (reflexivity), which states that `x ≡ x`. This means the *only* way to directly construct a proof of `x ≡ y` is when `x` and `y` are already the same (definitionally equal).
    - **`Pattern Matching on refl`**
        - If you have a hypothesis `p : x ≡ y`, you can pattern match on it:
            
            ```
            example : (x y : ℕ) → x ≡ y → ...
            example x .x refl = ... -- Inside this branch, Agda knows x and y are the same!
            
            ```
            
        - When you match on `refl`, Agda unifies the indices `x` and `y`. This means that within the scope of that pattern match, Agda treats `x` and `y` as identical. This is extremely powerful for simplifying goals.
    - **Equational Reasoning Chains**
        - The standard library provides a convenient syntax for chaining equality steps (often requires opening `Relation.Binary.PropositionalEquality` or similar modules).
        - Syntax:
            
            ```
            open import Relation.Binary.PropositionalEquality using (_≡_; refl; sym; trans; cong; begin_; _≡⟨_⟩_; _∎)
            open import Data.Nat using (ℕ; zero; suc; _+_)
            -- Assuming lemmas like plusZero : (n : ℕ) → n + zero ≡ n
            -- and plusSuc : (m n : ℕ) → suc m + n ≡ suc (m + n)
            
            exampleProof : (a b : ℕ) → suc a + b ≡ suc (a + b)
            exampleProof a b =
              begin
                suc a + b
              ≡⟨ plusSuc a b ⟩ -- Use the plusSuc lemma
                suc (a + b)
              ∎
            
            ```
            
        - `begin`: Starts the reasoning chain.
        - `_≡⟨ proof ⟩_`: Chains one step to the next. `x ≡⟨ p ⟩ y` requires `p : x ≡ y`.
        - `_∎`: Ends the chain, providing the final term. The type checker ensures the start term equals the end term via transitivity (`trans`).
        - `sym`: Used to reverse an equality (`sym p : y ≡ x` if `p : x ≡ y`).
    - **`Congruence (cong)`**
        - If `x ≡ y`, then `f x ≡ f y`. This property is called congruence.
        - Agda provides the `cong` function:
            
            ```
            cong : {A B : Set} → (f : A → B) → {x y : A} → x ≡ y → f x ≡ f y
            cong f refl = refl
            
            ```
            
        - It allows you to apply a function `f` to both sides of an equality proof.
        - Useful within equational reasoning:
            
            ```
            -- Prove suc (a + zero) ≡ suc a
            congProof : (a : ℕ) → suc (a + zero) ≡ suc a
            congProof a =
              begin
                suc (a + zero)
              ≡⟨ cong suc (plusZero a) ⟩ -- Apply suc to both sides of a + zero ≡ a
                suc a
              ∎
              -- Alternative direct use: cong suc (plusZero a)
            
            ```
            
    - **Proof by Case Analysis and Induction**
        - Many equality proofs proceed by analysing the structure of the terms involved, mirroring function definitions.
        - **Case Analysis:** If proving a property `P x` where `x` is of an inductive type (like `ℕ` or `List A`), you can split the proof based on the constructors of `x`. For equality, you might prove `f zero ≡ g zero` and `f (suc n) ≡ g (suc n)` separately.
        - **Induction:** When a case involves recursion (e.g., the `suc n` case), the proof often needs to use the property for the smaller term (`n`). This is proof by induction. You assume the property holds for `n` (the **Inductive Hypothesis**) and use it to prove the property for `suc n`. In Agda, this often manifests as making a recursive call to the proof function itself on the structurally smaller argument.
            
            ```
            -- Example: Proving associativity of addition (simplified sketch)
            plusAssoc : (l m n : ℕ) → (l + m) + n ≡ l + (m + n)
            plusAssoc zero    m n = refl -- Base case: (0 + m) + n = m + n; 0 + (m + n) = m + n
            plusAssoc (suc l) m n =
              begin
                (suc l + m) + n
              ≡⟨ plusSuc l m ⟩ -- Definition of + on suc l
                suc (l + m) + n
              ≡⟨ plusSuc (l + m) n ⟩ -- Definition of + on suc (l + m)
                suc ((l + m) + n)
              ≡⟨ cong suc (plusAssoc l m n) ⟩ -- Inductive Hypothesis! Apply proof for l
                suc (l + (m + n))
              -- Need definition of + on suc l again on the RHS... (omitted for sketch)
              -- ... eventually reaching l + (m + n) inside suc
              ∎
            
            ```
            

## **4. Programming in Agda**

- **Interactive Programming**
    - Agda development is highly interactive, usually done within Emacs (`agda-mode`) or VS Code (`agda` extension).
    - **Holes:** You can leave parts of your code undefined using `?` or `{ }`. These are called "holes."
    - **Loading:** Load the file (`C-c C-l` in Emacs). Agda type-checks up to the first hole.
    - **Goal Inspection:** Place the cursor in a hole and ask Agda for the expected type (`C-c C-,` in Emacs) and the types of local variables (`C-c C-.` in Emacs).
    - **Refinement/Filling Holes:** You can type code into the hole.
    - **Case Splitting:** If the goal type is `C x` and `x` is a variable of an inductive datatype (like `Bool` or `ℕ`), you can ask Agda to automatically split the definition into cases for each constructor (`C-c C-c` in Emacs).
    - **Auto:** Agda can sometimes automatically find the proof/program for a hole (`C-c C-a` in Emacs).
- **Datatypes (Inductive Types)**
    - User-defined types are created using the `data` keyword, listing their constructors. This includes simple types, parameterized types, and indexed types.
    - Constructors specify how values of the datatype are built.
    
    ```
    -- Example: Boolean type (Simple, non-parameterized, non-indexed)
    data Bool : Set where
      true  : Bool
      false : Bool
    
    -- Example: Maybe type (Parameterized by A)
    data Maybe (A : Set) : Set where
      just    : A → Maybe A
      nothing : Maybe A
    
    ```
    
    - See Section 2 for indexed examples (`Vec`, `Fin`).
- **Functions**
    - Defined using type signatures and equations, often involving pattern matching.
    
    ```
    -- Type signature
    isZero : ℕ → Bool
    
    -- Definition using pattern matching
    isZero zero    = true
    isZero (suc n) = false
    
    -- Addition function
    _+_ : ℕ → ℕ → ℕ
    zero    + m = m          -- 0 + m = m
    (suc n) + m = suc (n + m) -- (n+1) + m = (n+m)+1
    
    ```
    
- **Pattern Matching**
    - Functions on inductive datatypes are typically defined by providing equations for each constructor.
    - Agda checks that the patterns are **exhaustive** (cover all possible inputs) and **non-overlapping** (usually). This is crucial for totality.
    - Pattern matching can occur on multiple arguments simultaneously.
    - For indexed types, the patterns can constrain the values of indices.
- **`if ... then ... else ...`** as a Function
    - Conditional logic can be implemented as a regular function using pattern matching on `Bool`.
    
    ```
    if_then_else_ : {A : Set} → Bool → A → A → A
    if true  then t else e = t
    if false then t else e = e
    
    -- Usage:
    example : ℕ
    example = if isZero 5 then 10 else 20 -- Evaluates to 20
    
    ```
    
    - Note the use of `{A : Set}` for a hidden polymorphic argument (see Section 5).

## **5. Advanced Features**

- **Polymorphism**
    - Writing code that works for multiple types.
    - **Polymorphic Functions:** Functions that take types as arguments (often implicitly, via `{}`).
        
        ```
        -- Identity function: works for any type A
        id : {A : Set} → A → A
        id x = x
        
        -- Swap function for pairs: works for any types A and B
        swap : {A B : Set} → A × B → B × A
        swap (a , b) = (b , a)
        
        ```
        
- **Parameterized vs. Indexed Datatypes**
    - It's important to distinguish between datatypes that are *parameterized* by types and those that are *indexed* by values. A datatype can be both.
    - **Parameterized:** The definition depends on one or more *types*. The shape of the data structure might change, but fundamental properties often don't depend on the specific type parameter.
        - Example: `List A`. It's parameterized by the element type `A`. `List Bool` and `List ℕ` have the same structure (empty list or cons cell), just different element types. The type `List A` itself doesn't depend on any *values*.
    - **Indexed:** The definition depends on one or more *values* (indices), in addition to any type parameters. The type itself encodes properties related to these indices.
        - Example: `Vec A n`. It's parameterized by type `A` *and* indexed by value `n : ℕ`. The type `Vec A 3` is distinct from `Vec A 4`. The index `n` specifies the length, a property encoded in the type.
        - Example: `Fin n`. It's indexed by `n : ℕ`. The type `Fin 3` is distinct from `Fin 4`. The index `n` specifies the upper bound.
    - **Summary:** Parameters are typically types; indices are typically values. Indexed types leverage dependent types to enforce value-level constraints at compile time.
- **Polymorphic Datatypes (Revisited)**
    - Datatypes can be parameterized by types, indexed by values, or both.
    
    ```
    -- List type: Parameterized by A
    data List (A : Set) : Set where
      []  : List A
      _∷_ : A → List A → List A
    
    -- Vector type: Parameterized by A, Indexed by n
    data Vec (A : Set) : ℕ → Set where
      []  : Vec A zero
      _∷_ : {n : ℕ} → A → Vec A n → Vec A (suc n)
    
    ```
    
- **Hidden Arguments (Implicit Arguments)**
    - Arguments enclosed in `{ }` (or `{{ }}` for instance arguments) are usually inferred by Agda based on the context and types of other arguments.
    - This makes code less cluttered. In `id : {A : Set} → A → A`, you call it like `id 5`, and Agda infers that `A` must be `ℕ`.
    - You can provide them explicitly using `{ }` in the call: `id {ℕ} 5`. Indices in constructors (like `{n : ℕ}` in `_∷_` for `Vec`) are often hidden because they can be inferred.
- **Tuples (Σ-types / Dependent Pairs)**
    - The built-in pair type `_×_` is the non-dependent version of Σ-types (dependent pairs).
    
    ```
    -- Definition (Simplified view of the built-in type)
    data _×_ (A B : Set) : Set where
      _,_ : A → B → A × B
    
    -- Projections
    proj₁ : {A B : Set} → A × B → A
    proj₁ (a , b) = a
    
    proj₂ : {A B : Set} → A × B → B
    proj₂ (a , b) = b
    
    ```
    
    - As mentioned in Section 2, Σ-types (`Σ A B` or `(x : A) × B x`) generalize this to allow the type of the second component (`B x`) to depend on the value of the first (`x`). `A × B` is equivalent to `Σ A (λ _ → B)`. See Section 3 for the connection to `∃`.
- **Infix Operators**
    - Operators like `_+_`, `_×_`, `_∷_` can be defined using underscores `_` to mark argument positions.
    - **Priority (Fixity):** You can declare the associativity and precedence level.
    
    ```
    -- Declare '+' as left-associative with precedence level 6
    infixl 6 _+_
    
    -- Declare '∷' (cons for Vec/List) as right-associative with precedence level 5
    infixr 5 _∷_
    
    ```
    
    - Higher numbers bind tighter. This ensures `1 + 2 * 3` is parsed as `1 + (2 * 3)` if  has higher precedence (e.g., level 7).

## **6. Totality**

- **Total Functional Programming**
    - A style of programming where all functions are **total**.
    - **Total Function:** A function is total if it:
        1. **Terminates:** It is guaranteed to produce a result for *all* possible valid inputs in finite time (i.e., it never loops infinitely).
        2. **Is Exhaustive:** It defines a result for *every* possible pattern of its input arguments (i.e., pattern matching covers all cases).
    - Agda has a **termination checker** that tries to prove functions are total. If it cannot, it raises an error (unless explicitly disabled using pragmas like `{-# TERMINATING #-}` (unsafe) or `{-# NON_TERMINATING #-}`).
- **Why is Totality Important?**
    - **Reliability:** Total functions cannot crash due to non-termination or incomplete pattern matches.
    - **Proofs:** In formal verification, non-terminating "proofs" are meaningless. Totality ensures that proofs are computationally valid and correspond to actual mathematical proofs.
    - **Logical Consistency:** Allowing general recursion (non-terminating functions) can lead to logical inconsistencies (like proving `⊥`, the absurd/false proposition) if not handled carefully. Agda's totality checker prevents this by default.
- **Structural Recursion**
    - The most common way to ensure termination in Agda.
    - A function defined by structural recursion makes recursive calls *only* on arguments that are **structurally smaller** than the original input arguments.
    - "Structurally smaller" usually means calling the function on a direct sub-component of the input, according to the inductive definition of the datatype.
    - **Examples:**
        - In `_+_` definition: `(suc n) + m = suc (n + m)`. The recursive call `n + m` is on `n`, which is structurally smaller than the original input `suc n`.
        - In list/vector functions like `map` or `fold`, the recursive call is typically on the `tail` (`xs` in `x ∷ xs`), which is structurally smaller than the original list/vector.
    - Agda's termination checker primarily looks for structural recursion or other well-founded orderings (e.g., recursion on a decreasing natural number argument).