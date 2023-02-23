package exceptions;

public class exceptionLectureTest {
    public static void main(String[] args) {
        try{
            exceptionLecture exception = new exceptionLecture();
            System.out.println(Integer.parseInt(exception.string));
        }catch(NumberFormatException nfx){
            System.out.println("Got and exception: " + nfx);
        }
    }
}
