public class PatternMatchingSwitch {

    static void checkType(Object obj) {

        String result = switch (obj) {

            case Integer i ->
                    "Integer Value: " + i;

            case String s ->
                    "String Value: " + s;

            case Double d ->
                    "Double Value: " + d;

            case Long l ->
                    "Long Value: " + l;

            case null ->
                    "Null Value";

            default ->
                    "Unknown Type";
        };

        System.out.println(result);
    }

    public static void main(String[] args) {

        checkType(100);
        checkType("Java");
        checkType(99.99);
        checkType(123456789L);
        checkType(null);
    }
}