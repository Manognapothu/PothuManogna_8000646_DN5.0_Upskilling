import java.sql.*;

public class StudentDAO {

    Connection con;

    public StudentDAO() throws Exception {
        String url = "jdbc:mysql://localhost:3306/studentdb";
        String user = "root";
        String password = "Srujan@1410";

        con = DriverManager.getConnection(url, user, password);
    }

    public void insertStudent(int id, String name, int age)
            throws Exception {

        String sql =
                "INSERT INTO students(id,name,age) VALUES(?,?,?)";

        PreparedStatement ps = con.prepareStatement(sql);

        ps.setInt(1, id);
        ps.setString(2, name);
        ps.setInt(3, age);

        ps.executeUpdate();

        System.out.println("Student Inserted");
    }

    public void updateStudent(int id, String newName)
            throws Exception {

        String sql =
                "UPDATE students SET name=? WHERE id=?";

        PreparedStatement ps = con.prepareStatement(sql);

        ps.setString(1, newName);
        ps.setInt(2, id);

        ps.executeUpdate();

        System.out.println("Student Updated");
    }

    public static void main(String[] args) throws Exception {

        StudentDAO dao = new StudentDAO();

        dao.insertStudent(101, "Ravi", 20);
        dao.updateStudent(101, "Ravi Kumar");
    }
}