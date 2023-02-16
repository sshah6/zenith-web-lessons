

public class recursionExamples {
    /**
 * The following code defines an algorithm that will flip the index positions of two characters within a string if both are numbers.
 */

//    public static boolean charsAreDigits(char first, char second) {
//        return Character.isDigit(first) && Character.isDigit(second);
//    }


    /**
     * Recursive Solution
     * @param str
     * @return
     */
//    public static String flipNums(String str) {
//        if (str.length() == 1 || str.isEmpty()) return str;
//        char first = str.charAt(0);
//        char last = str.charAt(str.length() - 1);
//        if (str.length() == 2) {
//            return (charsAreDigits(first, last)) ?
//                "" + last + first:
//                "" + first + last;
//        } else {
//            String smallerSlice = str.substring(1, str.length() - 1);
//            return (charsAreDigits(first, last)) ?
//                last + flipNums(smallerSlice) + first:
//                first + flipNums(smallerSlice) + last;
//        }
//    }


    /**
     * Iterative Solution
     * @param str
     * @return
     */
//    public static String flipNums(String str) {
//        if (str.length() == 0 || str.length() == 1) return str;
//        if (str.length() == 2) {
//            if (charsAreDigits(str.charAt(0), str.charAt(1))) {
//                return "" + str.charAt(1) + str.charAt(0);
//            } else {
//                return str;
//            }
//        }
//        for (int i = 0, j = str.length() - 1; i < j; i += 1, j -= 1) {
//            if (charsAreDigits(str.charAt(i), str.charAt(j))) {
//                if (i == 0) {
//                    str = str.charAt(j) + str.substring(i + 1, j) + str.charAt(i);
//                } else {
//                    str = str.substring(0, i) + str.charAt(j) + str.substring(i + 1, j) + str.charAt(i) + str.substring(j + 1);
//                }
//            }
//        }
//        return str;
//    }




    // Test Cases
//    public static void main(String[] args) {

        //  input: "a1b2c3d"
        // output: "a3b2c1d"
//        System.out.println(flipNums("a1b2c3d"));


        //  input: "12345"
        // output: "54321"
//        System.out.println(flipNums("12345"));

        //  input: "123a45"
        // output: "543a21"
//        System.out.println(flipNums("123a45"));

        //  input: "ab12cd"
        // output: "ab21cd"
//        System.out.println(flipNums("ab12cd"));

//    }


}
