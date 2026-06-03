public class TypeCastingExample {
    public static void main(String[] args) {

        double d = 25.89;
        int i = (int) d;

        int num = 50;
        double d2 = (double) num;

        System.out.println("Double value: " + d);
        System.out.println("After casting to int: " + i);

        System.out.println("Integer value: " + num);
        System.out.println("After casting to double: " + d2);
    }
}