package AbstractAndInterfaces;

abstract public class vehicle {

    protected int speedMPH;
    protected String direction;
    protected int noOfPassenger;

    //the methods do not have to be abstract
    protected void changeSpeed(int mph){
        speedMPH = mph;
    }

    abstract protected void turnOn();

    public static void main(String[] args) {
        //vehicle v = new vehicle();// there will be error if instantiate abstract class
    }
}
