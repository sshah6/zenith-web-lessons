import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class StringToolsTest {
    //TDD Test-Driven development

    //Example: Write a method that swaps the last char with first char of an input
    //"" returns ""
//    "a" returns "a"
//    "ab" returns "ba"
//     "1b2" returns "2b1"

    //We can declare variables here that we can use in our code
    private String emptyStr;
    private String oneCharStr;
    private String twoCharStr;
    private String threeCharStr;

    @Before
    public void setup(){
        emptyStr = "";
        //And so on and so for
    }

    @Test
    public void testReverseOuterChars(){
        Assert.assertEquals("tac", StringTools.reverseOuterChars("cat"));
        Assert.assertEquals("1b2", StringTools.reverseOuterChars("2b1"));
    }

    @Test
    public void testReverseOuterCharsEmptyInput(){
        Assert.assertEquals("", StringTools.reverseOuterChars(""));
    }

    @Test
    public void testReverseOuterCharsWithTwoChars(){
        Assert.assertEquals("ab", StringTools.reverseOuterChars("ba"));
    }
}
