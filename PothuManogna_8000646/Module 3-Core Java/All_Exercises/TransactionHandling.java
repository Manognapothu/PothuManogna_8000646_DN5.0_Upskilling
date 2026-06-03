import java.sql.*;

public class TransactionHandling {

    public static void transfer(
            Connection con,
            int fromAcc,
            int toAcc,
            double amount) throws SQLException {

        try {

            con.setAutoCommit(false);

            PreparedStatement debit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance = balance - ? WHERE id=?");

            debit.setDouble(1, amount);
            debit.setInt(2, fromAcc);

            debit.executeUpdate();

            PreparedStatement credit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance = balance + ? WHERE id=?");

            credit.setDouble(1, amount);
            credit.setInt(2, toAcc);

            credit.executeUpdate();

            con.commit();

            System.out.println("Transaction Successful");

        } catch (Exception e) {

            con.rollback();

            System.out.println("Transaction Failed");
        }
    }

    public static void main(String[] args) throws Exception {

        Connection con =
                DriverManager.getConnection(
                        "jdbc:mysql://localhost:3306/bankdb",
                        "root",
                        "Srujan@1410");

        transfer(con, 1, 2, 1000);
    }
}