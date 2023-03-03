import static org.junit.Assert.*;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class myFirstTest {
    @Test
    public void isEqual(){
        assertEquals("Codeup", "Codeup");
    }

    @Test
    public void isNotEqual(){
        assertNotEquals(2, 5);
    }

    @Test
    public void notSame(){
        List<String> languages = new ArrayList<>();
        List<String> moreLanguages = new ArrayList<>();
        assertNotSame(languages, moreLanguages);
    }

    @Test
    public void isArrayEquals(){
        int[] numbers = {1, 2, 3};
        int[] otherNumbers = new int[3];
        otherNumbers[0] = 1;
        otherNumbers[1] = 2;
        otherNumbers[2] = 3;
        assertArrayEquals(numbers, otherNumbers);
    }

    @Test
    public void isBoolean(){
        String language = "PHP";
        language.contains("H"); // use assertTrue for this statement
        language.contains("J"); // use assertFalse for this statement
        assertFalse(Boolean.parseBoolean(language));
        assertTrue(Boolean.parseBoolean(language));
    }

    @Test
    public void isNull(){
        String language = null;
// assertNull on the language variable
        assertNull(language);
        language = "Java";
// assertNotNull on the language variable
        assertNotNull(language);
    }
}
