import java.util.Scanner;

public class ControlStatementsLecture {

    public static void main(String[] args) {
        // ==================== Slide 3

        // no >== ,or <==, or === because only value comparisons are available
        // truthy and falsy values don't exist in Java

        // int x = 2;
        // int y = 3;
        // if (x != y) {
        //     System.out.println("x is less than y");
        // }


        // ==================== Slide 5

        // && will only check second value if first is true
        // & will check both
        // this can be used to check what would otherwise result in a syntax error
        // same comparison process for || and |

        // x will only increment in second condition if first condition is true using &&
        //        int x = 2;
        //        int y = 3;
        //
        //        if (true || ++x == y) {
        //            System.out.println("Equal");
        //        } else {
        //            System.out.println("Not equal");
        //        }
        //        System.out.println(x);


        // ==================== Slide 7

        // DO NOT COMPARE STRINGS WITH == !!!!

        // System.out.println("hello" == "world");

        // Scanner sc = new Scanner(System.in);
        // String cat1 = sc.nextLine();
        // String cat2 = "cat";
        // System.out.println(cat1);
        // System.out.println(cat2);
        // System.out.println(cat1.equalsIgnoreCase(cat2));

        // do use equals(),

//    boolean stringValuesAreEqual = "Test".equals("Tes");
//    System.out.printf("The result is: %b", stringValuesAreEqual);


        // or use equalsIgnoreCase()

//String hello = "hello";
//System.out.println(hello.equalsIgnoreCase("HeLlO"));

        // does not equal

// String tech = "tech";
// System.out.println(!tech.equalsIgnoreCase("tool"));


        // ==================== Slides 8 - 16

        // basically the same as JS :)


//            String caseSwitch = "Fred";
//            switch (caseSwitch) {
//                case "bob":
//                    System.out.println("Case 1");
//                    break;
//                case "fred":
//                    System.out.println("Case 2");
//                    break;
//                default :
//                    System.out.println("Default case");
//                    break;
//            }


//####################### Extra challenges ################

//#endregion
// # Console IO Exercises

// 1. Prompt the user to enter a favorite quote
//     - output the quote
//     - ask them to enter how many words are in the quote
//     - output the number they entered
//     - output if the number they entered indeed matched the number of words
        Scanner sc = new Scanner(System.in);
        // System.out.println("Enter your favorite quote: ");
        // String quote = sc.nextLine();
        // System.out.println(quote);
        // System.out.println("How many words are in the quote? ");
        // int numberOfWord = sc.nextInt();
        // System.out.println(numberOfWord);
        // String quoteNum[] = quote.split(" ");
        // int numOfQuote = quoteNum.length;
        // if(numberOfWord == numOfQuote ){
        //         System.out.println("Numbers match!");
        // }


// 1. Prompt the user to enter a list of top three favorite foods separated by only spaces

//     - Use the printf() to output the three top foods with the format:
//         1. FirstFood
//         2. SecondFood
//         3. ThirdFood

        // String firstFood = "Banana";
        // String secondFood = "Taco";
        // String thirdFood = "Curry";

        // String result = String.format("%s %n%s %n%s", firstFood, secondFood, thirdFood);
        // System.out.println(result);

// 1. Prompt the user to enter a grocery list of three items
//     - each item should only be separated by a comma (no spaces)
//     - you will need to use the .useDelimiter() method on your scanner object
//     - output the result as a comma-separated list using printf()

                sc.useDelimiter(",");
                System.out.print("Enter a list of three grocery items, only comma separated: ");
                String first = sc.next();
                String second = sc.next();
                String third = sc.next();

                System.out.printf("%s, %s, %s\n", first, second, third);

// Bonuses for Control Statements and Loops:
// # Java Control Structures and Loops Bonuses


// ### Simple Chat Bot

// Be creative in communicating with your
//  user different options and for given scenerios. Create at three phases of the chat, for example...
			
// 			                 "How are you?" (AI says)
// 			           |                              |
// 			         good                        bad (user types)
				                                      
// 	   "Awesome! Are you super happy?" 	    "Will cake make you better?"  
		      						                         
// 	          yes          no                     yes             no
  
// Keep the chat options relatively simple and plan it out clearly before coding it.

// ### Word Guessing Game

// - prompt a player to enter a word
// - use a loop to print out several empty lines to hide the answer
// - allow the user to guess the letters in the word
// - track the number of letter guesses
// - display to the user the partially completed word for each correctly guessed character
// - before prompting the user to guess a letter, give them the option to solve the word
// - limit the number of guesses based on the length of the word for an extra challenge!

        
    }

}