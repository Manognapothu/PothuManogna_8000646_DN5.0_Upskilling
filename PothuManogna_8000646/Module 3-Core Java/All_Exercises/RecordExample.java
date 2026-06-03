import java.util.List;

record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {

        Person p1 = new Person("Rahul", 20);
        Person p2 = new Person("Priya", 17);
        Person p3 = new Person("Kiran", 25);

        List<Person> people = List.of(p1, p2, p3);

        System.out.println("All Persons:");
        people.forEach(System.out::println);

        System.out.println("\nAge >= 18:");

        people.stream()
              .filter(p -> p.age() >= 18)
              .forEach(System.out::println);
    }
}