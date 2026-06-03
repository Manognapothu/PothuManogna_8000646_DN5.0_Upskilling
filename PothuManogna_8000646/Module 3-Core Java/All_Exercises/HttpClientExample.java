import java.net.URI;
import java.net.http.*;

public class HttpClientExample {

    public static void main(String[] args) throws Exception {

        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.github.com/users/octocat"))
                .build();

        HttpResponse<String> response =
                client.send(request,
                        HttpResponse.BodyHandlers.ofString());

        System.out.println("Status Code: "
                + response.statusCode());

        String body = response.body();

        System.out.println("\nResponse Length: "
                + body.length() + " characters");

        System.out.println("\nData fetched successfully from GitHub API.");
    }
}