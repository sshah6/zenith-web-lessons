public class StringTools {
    public static String reverseOuterChars(String str){
        if(str.isEmpty()){
            return "";
        }
        //      firstChar                   + the rest of string                + the first char
        return str.charAt(str.length() - 1) + str.substring(1, str.length() -1) + str.charAt(0);
    }
}
