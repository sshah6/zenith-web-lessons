package AbstractAndInterfaces;

public class Car extends vehicle{
    @Override
    protected void turnOn() {
        System.out.println("Turn the key and crank it ...");
    }
}
