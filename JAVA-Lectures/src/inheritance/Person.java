package inheritance;
//is you have this class as final, it cannot have any children, it goes the same with methods and variables
public class Person {
    private String name;
    private int age;
    public Person(String name, int age){
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    //if we have this method as final, it cannot ber overridden in the children classes
    public void eating(){
        System.out.println(name + " is eating.");
    }

    public void isLivingLife(){
        System.out.println(name + " is living life.");
    }

    public static void main(String[] args) {
        Person p = new Person("Alex", 28);
        System.out.println(p.getName());
        System.out.println(p.getAge());
        p.eating();
        p.isLivingLife();
    }
}
