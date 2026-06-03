import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ExecutorCallableDemo {

    public static void main(String[] args) {

        ExecutorService executor = Executors.newFixedThreadPool(3);

        Callable<String> task1 = () -> {
            return "Task 1 Completed";
        };

        Callable<String> task2 = () -> {
            return "Task 2 Completed";
        };

        Callable<String> task3 = () -> {
            return "Task 3 Completed";
        };

        try {
            Future<String> future1 = executor.submit(task1);
            Future<String> future2 = executor.submit(task2);
            Future<String> future3 = executor.submit(task3);

            System.out.println(future1.get());
            System.out.println(future2.get());
            System.out.println(future3.get());

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            executor.shutdown();
        }
    }
}