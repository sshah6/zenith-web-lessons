public class Product {
    /* TODO: create a class called Product with two private properties of name and priceInCents.
          Add a public static method called, find average price that takes in an array of products
          and finds the average price of all products. Add a main method to the class to test some
          values.
      */
    private String name;
    private int priceInCents;

    public Product(String name, int priceInCents){
        this.name = name;
        this.priceInCents = priceInCents;
    }

    public String getName(){
        return name;
    }

    public int getPrice(){
        return priceInCents;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setAge(int price){
        this.priceInCents = price;
    }

    public static double findAverage(Product[] products){
        double total = 0;
        double average = 0;
        for (Product product : products) {
            total += product.priceInCents;
        }
        average =  total / products.length;
        return average;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product("machine", 3500),
                new Product("bike", 3450),
                new Product("motor", 3450)
        };
        System.out.println(products[0].getName());
//        System.out.println(products[0].name);
        double ave = Product.findAverage(products);
        System.out.printf("The average: %.2f", ave);
    }
}
