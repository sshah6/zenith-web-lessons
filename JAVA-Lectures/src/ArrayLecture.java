import java.util.Arrays;

public class ArrayLecture {
    //Array is a linear list of consecutive values put in memory next to each other
    //When we declare an array then we need to declare the size of it
    //They have to contain the same data types


//    public static void printNums(int[] nums) {
//        for (int num : nums) {
//            System.out.println(num);
//        }
//    }

    public static void main(String[] args) {

        // ====================== ARRAY BASICS
        // Arrays can only hold elements of the same type
        // Arrays have a fixed size when initialized

        // CREATING AN ARRAY

//         int[] nums = new int[3]; // the length must be specified
//         System.out.println(nums[2]);
//         nums[0] = 7; // values can be assigned using the index operator
//         nums[0] = 9; // values can be reassigned

        // System.out.println(nums[0]); // can be accessed with index operator

//         nums[2] = 12; // valid index slots can be assigned in any order
//
//         nums[10] = 5; // accessing an index out of bounds throws a runtime exception

        // System.out.println(nums[1]); // accessing unassigned elements gives a default value

        // nums[1] = 3;

        // int arrayLength = nums.length; // array length accessed through length property
        // System.out.println(arrayLength);

        // ARRAY INITIALIZER - both initialize and assign element values

//         String[] pets = {"Bubbles", "Bowser", "Snickers", "Sparky"};
//         System.out.println(pets[0]);
//
        // ====================== ARRAY ITERATION

        // a loop may be used to iterate through array values
        // for (int i = 0; i < pets.length; i++) {
        //    System.out.println(pets[i]);
        // }

        // an enhanced for loop can be used for iterating over an entire array
        // for (String pet : pets) {
        //     System.out.println(pet);
        // }

        /* TODO: create an array of doubles called numbers and assign five different values (try with and without an initializer).
            Find the sum of all five double values using an enhanced for loop.
         */
//        double numbers[] = new double[5];
//        double numbers[] = {1.2, 2.3, 3.4, 4.5, 5.5};
//
//        double sum = 0;
//
//        for(double nums: numbers){
//            sum += nums;
//        }
//        System.out.println("The total of array element is: " + sum);
//        System.out.println(numbers.length);
//
        // ANONYMOUS ARRAYS

        // printNums(new int[] {5, 4, 3, 2, 1});

        // ====================== OTHER REFERENCE TYPE ARRAYS

        // arrays may contain a list of custom reference types

         Person p1 = new Person("Fred", 99);
         Person p2 = new Person("Sally", 45);
         Person p3 = new Person("Billy", 30);

//         Person[] people = new Person[4];
//
//         people[0] = p1;
//         people[1] = p2;
//         people[2] = p3;

//         //########## You can also do this
//        Person[] people = {p1, p2, p3};

//        Person.makePeopleOlder(people);
//        Person.printOutAgesOfPeople(people);
//         for (int i = 0; i < people.length; i += 1) {
//            System.out.println(people[i].getName());
//         }

        // using an array initializer...

        // Person[] people = {
        //     new Person("Fred", 99),
        //     new Person("Sally", 45),
        //     new Person("Billy", 30)
        // };

        // using a method that take in an array as an argument
        // Person.printOutAgesOfPeople(people);


        /* TODO: create a class called Product with two private properties of name and priceInCents.
            Add a public static method called, find average price that takes in an array of products
            and finds the average price of all products. Add a main method to the class to test some
            values.
         */


        // ====================== ARRAYS CLASS - must be imported

        // ---- Arrays.fill(SOME_ARRAY, SOME_VALUE)

         String[] testArray = new String[4];
         // - fills all or a range of elements with a given value
         Arrays.fill(testArray, "Badgers");
         for (String element : testArray) {
            System.out.println(element);
         }


        // ---- Arrays.toString(SOME_ARRAY)

        // Arrays.toString(testArray); // - prints out a copy of the array contents
        // String arrayAsAString = Arrays.toString(testArray);
        // System.out.println(arrayAsAString);


        // ---- Arrays.equals(ARRAY_1, ARRAY_2)

        // Arrays.equals(array1, array2) - returns true if two array elements are equal and in the same order
        //
        // String[] words = {"Mushroom", "Mushroom"};
        // String[] words2 = {"Mushroom", "mushroom"};
        // System.out.println(Arrays.equals(words, words2));


        // ---- Arrays.copyOf(array, length) - returns a copy array of a given array of a given length

        // String[] testArray = new String[4];
        // String[] testArray2 = Arrays.copyOf(testArray, testArray.length);
        // System.out.println(Arrays.toString(testArray));
        // System.out.println(Arrays.toString(testArray2));
        // System.out.println(testArray == testArray2);

        // Arrays.fill(testArray, "Badgers");
        // String[] twoBadgers = Arrays.copyOf(testArray, 2);
        // System.out.println(Arrays.toString(twoBadgers));

        // System.out.println(twoBadgers);


        // ---- Arrays.sort(SOME_ARRAY, START_INDEX, END_INDEX) - sorts array elements alphabetically/numerically 2nd and 3rd arguments are optional.

        // String[] meme = {"Badgers", "Mushroom", "Badgers", "Snake"};
        // System.out.println(Arrays.toString(meme));
        // String[] memeCopy = Arrays.copyOf(meme, meme.length);
        // Arrays.sort(memeCopy);
        // System.out.println(Arrays.toString(memeCopy));
        // System.out.println(Arrays.toString(meme));

        // meme = Arrays.copyOf(meme, meme.length - 1); // can copy a smaller portion
        // meme = Arrays.copyOf(meme, meme.length + 3); // or make it larger
        //
        // System.out.println(Arrays.toString(meme));




        // ---- Arrays.binarySearch(SOME_ARRAY, SOME_VALUE)

        // Arrays.binarySearch(array, value) - returns the index of a value if in the array or -1 if not found
        // Array MUST be sorted before using binarySearch() to return a valid index.

        // String[] meme = {"Mushroom", "Badgers", "Badgers", "Snake"};
        // Arrays.sort(meme);
        //
        // System.out.println(Arrays.binarySearch(meme,"fox"));
        // System.out.println(Arrays.binarySearch(meme, "Mushroom"));


        // ====================== MULTI-DIMENSIONAL ARRAYS

        // int[][] matrix = {
        //        {1, 2, 3},
        //        {4, 5, 6},
        //        {7, 8, 9}
        // };
        //
        // System.out.println(matrix[2][0]);
        //
        //
        // for (int[] row : matrix) {
        //    System.out.println("+---+---+---+");
        //    System.out.print("| ");
        //    for (int n : row) {
        //        System.out.print(n + " | ");
        //    }
        //    System.out.println();
        // }
        // System.out.println("+---+---+---+");

    }

}


