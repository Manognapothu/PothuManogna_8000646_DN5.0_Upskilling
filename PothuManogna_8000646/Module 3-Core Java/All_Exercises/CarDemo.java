public class CarDemo{
    String make;
    String model;
    int year;

    void displayDetails() {
        System.out.println("Make  : " + make);
        System.out.println("Model : " + model);
        System.out.println("Year  : " + year);
    }
    public static void main(String[] args) {

        CarDemo car1 = new CarDemo();
        car1.make = "Toyota";
        car1.model = "Camry";
        car1.year = 2022;

        CarDemo car2 = new CarDemo();
        car2.make = "Honda";
        car2.model = "City";
        car2.year = 2023;

        System.out.println("Car 1 Details:");
        car1.displayDetails();

        System.out.println("\nCar 2 Details:");
        car2.displayDetails();
    }
}