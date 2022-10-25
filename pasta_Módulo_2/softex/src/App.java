import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;

public class App {

    public static void limpartela() {
        try {
            new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public static void main(String[] args) throws Exception {
        limpartela();
        criarArquivoSerializado();
        LerArquivoSerializado();
    }

    private static void criarArquivoSerializado() {
        Pessoa p1 = new Pessoa(1, "Fulano de Tal", 2000, "123456");
        FileOutputStream fos = null;
        ObjectOutputStream oos = null;
        try {
            fos = new FileOutputStream("arquivo.bin");
            oos = new ObjectOutputStream(fos);
            oos.writeObject(p1);
        } catch (FileNotFoundException e) {
            System.out.println("Arquivo não encontrado.");
        } catch (IOException e) {
            System.out.println("Erro ao criar o arquivo.");
        } finally {
            if (oos != null) {
                try {
                    oos.close();
                } catch (IOException e) {
                    System.out.println("Erro ao fechar o arquivo.");
                }
            }
        }
    }

    private static void LerArquivoSerializado() {
        Pessoa p1 = null;
        FileInputStream fis = null;
        ObjectInputStream ois = null;
        try {
            fis = new FileInputStream("arquivo.bin");
            ois = new ObjectInputStream(fis);
            p1 = (Pessoa) ois.readObject();
            System.out.printf("Id: %2d\nNome: %s\nSalário: %.2f\nSenha: %s\n",
                    p1.getId(), p1.getNome(), p1.getSalario(), p1.getSenha());
        } catch (ClassNotFoundException e) {
            System.out.println("Classe não encontrado.");
        } catch (IOException e) {
            System.out.println("Erro ao criar o arquivo.");
        } finally {
            if (ois != null) {
                try {
                    ois.close();
                } catch (IOException e) {
                    System.out.println("Erro ao fechar o arquivo.");
                }
            }
        }
    }
}
