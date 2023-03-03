import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

public class FirstTest {

    private List<String> names;
    @Before
    public void setup(){
        names = new ArrayList<>();
        names.add("Alex");
        names.add("Alan");
        System.out.println("Before the test runs");
    }

    @After
    public void afterTest(){
        System.out.println("Runs after test.");
    }


    @Test
    //In a test unit all to assert test should be true in order for test to pass
    //otherwise it stops at the first fail
    public void testTwoIsEqualToTwo(){
        //Verify that two is equal to two
        assertEquals(2, 2);
    }

    @Test
    public void isStringEqualsString(){
        assertEquals("bob", "bob");
    }

    @Test
    public void testIfCompanyNameIsEquals() {
        String expected = "Codeup";
        String actual = "Codeup";

        assertEquals(expected, actual);
    }

    // When you're using floating points values a third parameter is required (Delta) which represents a positive margin of error of decimals.

    @Test
    public void testIfChangeIsCorrect() {
        Double price = 10.0;
        Double discount = 4.5;

        assertEquals(5.5, price - discount, 0);
        assertEquals(5.1, price - discount, 0.5);
        assertNotEquals(4.9, price - discount, 0.5);
    }

    @Test
    public void testIfArrayEquals() {
        char[] expected = {'J','u','n','i','t'};
        char[] actual = "Junit".toCharArray();

        assertArrayEquals(expected, actual);
    }

    @Test
    public void testIfGreaterOrLesserThanWorks() {

        boolean learningTDD = true;

        assertTrue(learningTDD);
        assertTrue("5 is greater than 4", 5 > 4);
        assertFalse("5 is not greater than 6", 5 > 6);
    }

//    @Test
//    public void testIfInstanceIsNull() {
//        Device phone = new Device();
//        Device laptop = null;
//        assertNull(null);
//        assertNotNull(phone);
//    }


}
