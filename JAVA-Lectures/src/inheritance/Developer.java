package inheritance;

//extends means that dev is child of person
public class Developer extends Person{

    private boolean isTyping;

    public Developer(String name, int age, boolean isTyping) {
        //super gets the constructor from Person(Parent)
        super(name, age);
        //if a variable is not constructed in parent, we need to do it here
        this.isTyping = isTyping;
    }

    public boolean isTyping() {
        return isTyping;
    }


    @Override
    public void eating(){
        System.out.println(getName() + " is Rich.");
    }

    public static void main(String[] args) {
        Developer d = new Developer("Alan", 22, true);

        //All these method were inherited from the Person(Parent)
        System.out.println(d.getName());
        System.out.println(d.getAge());
        d.eating();
        System.out.println(d.isTyping());
        d.isLivingLife();
    }
}
