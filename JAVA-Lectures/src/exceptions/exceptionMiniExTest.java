package exceptions;

public class exceptionMiniExTest {
    public static void main(String[] args) {
        exceptionMiniEx string = new exceptionMiniEx();
        String subString1 = string.str.substring(6);
        System.out.println(subString1);

        //The importance of try and catch block is that when the error happens, the rest of the code after it still runs
        //Try and catch is for developers to use not for useres
        try{
            String subString2 = string.str.substring(15);
            System.out.println(subString2);
        }catch(Exception e){
            e.printStackTrace();
        }

        System.out.println("Hello");

        //.essage exception
//        catch(Exception e){
//            System.out.println("An error occurred: " + e.getMessage());
//        }

//        Exception gotten from java util.
//        catch(IndexOutOfBoundsException nfx){
//            System.out.println("Look an error: " + nfx);

//        }
    }
}
