package inheritance;

//extends here can get methods from paren(Developer) and the grandParent(Person)
public class SeniorDeveloper extends Developer{
    private int height;
    public SeniorDeveloper(String name, int age, boolean isTyping, int height){
        super(name, age, isTyping);
        this.height = height;
    }

    public int getHeight(){
        return height;
    }

    public static void main(String[] args) {
        SeniorDeveloper sd = new SeniorDeveloper("Bob", 15, false, 150);
        sd.eating();
        System.out.println(sd.isTyping());
        System.out.println(sd.getHeight());
    }
}
