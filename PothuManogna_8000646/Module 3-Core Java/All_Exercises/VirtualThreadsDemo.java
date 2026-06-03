public class VirtualThreadsDemo {

    public static void main(String[] args)
            throws Exception {

        for (int i = 1; i <= 100000; i++) {

            int id = i;

            Thread.startVirtualThread(() -> {
                System.out.println(
                        "Virtual Thread " + id);
            });
        }

        Thread.sleep(5000);
    }
}