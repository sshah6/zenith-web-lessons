
public class recursion {

        // Recursion is when a function can call itself.
        // This example does not have a base case, that is why it is crushing and creating a stack overflow.
           public static void countDown(int num) {
            //There should be a base case
                System.out.println(num);
                countDown(num - 1);     
           }
    
        // Recursion will always create a Stack Overflow Error if a "base case" is not defined.
    
        //    public static void main(String[] args) {
        //        countDown(10);
        //    }
    
        // A "base case" is condition in which the function eventually does NOT call itself (recur) again.
    
        //    public static void countDown(int num) {
        //        if (num == 0) return; // <-- base case
        //        System.out.println(num);
        //        countDown(num - 1);
        //    }
    
        //    public static void main(String[] args) {
        //        countDown(10);
        //    }
    
    
        // Recursion is a powerful way to express algorithmic solutions but use it with caution.
    
        // Recursion should ONLY be used in cases when it makes the code much more readable.
    
        // Any algorithm that uses recursion can be solved with looping (iteration) instead.
    
        //    public static void countDown(int num) {
        //        while(num > 0) {
        //            System.out.println(num);
        //            num--;
        //        }
        //    }
    
        //    public static void main(String[] args) {
        //        countDown(10);
        //    }
    
    
        // Iterative (looping) algorithms are often more efficient than recursive algorithms.
    
        // Some problems CANNOT be solved with recursion, particularly when the repetitions exceed 10k times.
    
           public static void countDownRecur(int num) {
               System.out.println(num);
               countDownRecur(num - 1);
           }
    //
    //        public static void countDown(int num) {
    //            while(num > 0) {
    //                System.out.println(num);
    //                num--;
    //            }
    //        }
    //
    //        public static void main(String[] args) {
    //            countDown(10000);
    //            countDownRecur(10000);
    //        }
    
    
        // Recursion is most commonly used by programmers to solve problems that require a divide and conquer approach
        // or involve data structures like trees and graphs where the complexity grows as you continue to traverse it.
    
        /*
    
                Recursion for backtracking to find a way through a maze
                    ___________________________________
                | _____ |   | ___ | ___ ___ | |   | |
                | |   | |_| |__ | |_| __|____ | | | |
                | | | |_________|__ |______ |___|_| |
                | |_|   | _______ |______ |   | ____|
                | ___ | |____ | |______ | |_| |____ |
                |___|_|____ | |   ___ | |________ | |
                |   ________| | |__ | |______ | | | |
                | | | ________| | __|____ | | | __| |
                |_| |__ |   | __|__ | ____| | |_| __|
                |   ____| | |____ | |__ |   |__ |__ |
                | |_______|_______|___|___|___|_____|
    
         */
    
        /*
            Recursion to move through a binary tree...
    
                             1
                            / \
                           /   \
                          2     \
                         / \     3
                        4   5   / \
                               9   \
                                    8
                                   / \
                                  6   7
         */
    
    
        // Another important concept to understand is the "call stack". The "call stack" is the area of memory in Java program
        // where each method call is stacked when methods call other methods. Once the final method call is evaluated, it is
        // removed from the top of the call stack and the remaining methods are removed as well.
    
        // Consider the following pseudocode:
    
        /*
            methodA() {
                methodB();
            }
    
            methodB() {
                methodC();
            }
    
            methodC() {
                sout("Hello");
            }
    
            methodA(); // when everything gets kicked off
    
         */
    
        // The call stack for the above pseudocode would look something like this:
    
        /*
    
            methodC  <-- stack frame
            methodB  <-- stack frame
            methodA  <-- stack frame
    
         */
    
        // Think of it like a stack of plates, where each nested method call is a plate (stack frame) that is added to the stack.
    
        // When methodC prints "hello" and finishes, it is removed (popped) from the top of the stack and so is methodB and finally methodA.
    
        // In recursion, depending on how many method calls it takes to reach the base case, the stack may look like this:
    
        /*
    
            ...
            someMethod
            someMethod
            someMethod
            someMethod
    
         */
    
        // If no base case is reached, the computer will run out of memory and the program will crash with a Stack Overflow Error.
    
        /**
         * RECURSION MINI-EXERCISES
         */
    
        // TODO: use recursion to print out a given number up through 100
    
        // TODO: use recursion to print letters of a string starting with the first and ending with the last (each call will work on a smaller substring)
    
        // TODO: use recursion to add all numbers up from 1 to a given number
    
        // BONUS TODO: use recursion to write a factorial method (very similar to the third todo)
    
        // BONUS TODO: use recursion to reverse the characters in a string
    
    
    
    
    
}
