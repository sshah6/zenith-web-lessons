package inheritance;

public class Fish extends Animal {

    private boolean breath;
    private String noise;

    public Fish(int numberOfLegs, String preferredClimate, boolean breath, String noise) {
        super(numberOfLegs, preferredClimate);
        this.breath = breath;
        this.noise = noise;
    }

    @Override
    public String getAnimalInfo(){
        return "Fish has " + getNumberOfLegs() + " legs And likes " + getPreferredClimate() + " envo breath air = " +  breath + " And the noise is " + noise;
    }


    public boolean getBreath(){
        return breath;
    }

    public String getNoise(){
        return noise;
    }

    public void setBreath(boolean breath){
        this.breath = breath;
    }

    public void setNoise(String noise){
        this.noise = noise;
    }
}
