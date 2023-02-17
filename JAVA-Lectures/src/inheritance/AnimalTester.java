package inheritance;

public class AnimalTester {

    public static void displayAnimalDetails(Animal animal){
        System.out.println(animal.getAnimalInfo());
    }

    public static void main(String[] args) {
        Animal dog = new Dog(4, "Warm", "Wowo" , "White");
        displayAnimalDetails(dog);

        Animal cat = new Cat(4, "cold", true, 3);
        displayAnimalDetails(cat);

        Animal fish = new Fish(0, "Water", false, "wob wob");
        displayAnimalDetails(fish);
    }
}
