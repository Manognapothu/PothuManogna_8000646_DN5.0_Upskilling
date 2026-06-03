import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaExpressions {
    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Manogna");
        names.add("Anusha");
        names.add("Srujan");
        names.add("Bhavani");

        Collections.sort(names,
                (s1, s2) -> s1.compareTo(s2));

        System.out.println("Sorted List:");

        names.forEach(System.out::println);
    }
}