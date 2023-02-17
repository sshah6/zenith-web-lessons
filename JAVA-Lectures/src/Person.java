
public class Person {

    private String name;
    private int age;

    public static void progressOneYear(Person[] people) {
        for (Person person : people) {
            person.setAge(person.getAge() + 1);
        }
    }

    public static void printOutAgesOfPeople(Person[] people) {
        for (Person person : people) {
            System.out.println(person.getAge());
        }
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public static void makePeopleOlder(Person[] people){
        for(Person person: people){
            person.age = person.age + 1;
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

}
