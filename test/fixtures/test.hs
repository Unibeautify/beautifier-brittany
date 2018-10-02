-- https://wiki.haskell.org/The_Fibonacci_sequence#Monadic
import Control.Monad.State
fib n = flip evalState (0,1) $ do
    forM [0..(n-1)] $ \_ -> do
        (a,b) <- get
        put (b,a+b)
    (a,b) <- get
    return a
