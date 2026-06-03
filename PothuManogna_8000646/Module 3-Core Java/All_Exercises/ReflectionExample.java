import java.lang.reflect.*;

class Sample {

    public void greet() {
        System.out.println("Hello from Reflection");
    }
}

public class ReflectionExample {

    public static void main(String[] args)
            throws Exception {

        Class<?> cls =
                Class.forName("Sample");

        System.out.println("Methods:");

        Method[] methods =
                cls.getDeclaredMethods();

        for (Method m : methods) {
            System.out.println(m.getName());
        }

        Object obj =
                cls.getDeclaredConstructor()
                        .newInstance();

        Method method =
                cls.getMethod("greet");

        method.invoke(obj);
    }
}