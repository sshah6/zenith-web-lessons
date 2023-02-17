package inheritance;

public class Dog extends Animal {
    private String noise;
    private String color;

    public Dog(int numberOfLegs, String preferredClimate, String noise, String color) {
        super(numberOfLegs, preferredClimate);
        this.noise = noise;
        this.color = color;
    }

    @Override
    public String getAnimalInfo(){
        return "Dog Has " + getNumberOfLegs() + " legs And likes " + getPreferredClimate() + " climate. barks " + noise+ " And the color is " + color;
    }

    public String getNoise(){
        return noise;
    }

    public String getColor(){
        return color;
    }

    public void setNoise(String noise){
        this.noise = noise;
    }

    public void setColor(String color){
        this.color = color;
    }

}
