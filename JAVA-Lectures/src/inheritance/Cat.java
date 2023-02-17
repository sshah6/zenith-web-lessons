package inheritance;

public class Cat extends Animal {

    private boolean jump;
    private int weight;

    public Cat(int numberOfLegs, String preferredClimate, boolean jump, int weight) {
        super(numberOfLegs, preferredClimate);
        this.jump = jump;
        this.weight = weight;
    }

    @Override
    public String getAnimalInfo(){
        return "Cat has " + getNumberOfLegs() + " legs And likes " + getPreferredClimate() + " weather. jump = " + jump + " And the weight is " + weight + "lbs.";
    }

    public boolean getJump(){
        return jump;
    }

    public int getWeight(){
        return weight;
    }

    public void setJump(boolean jump){
        this.jump = jump;
    }

    public void setWeight(int weight){
        this.weight = weight;
    }
}
