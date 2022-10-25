import java.io.Serializable;

public class Pessoa implements Serializable {
    
    public Pessoa(int id, String nome, double salario, String senha){
        this.setId(id);
        this.setNome(nome);
        this.setSalario(salario);
        this.setSenha(senha);
    }

    private int id;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    private String nome;
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    private double salario;
    public double getSalario() {
        return salario;
    }
    public void setSalario(double salario) {
        this.salario = salario;
    }
    private String senha;
    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }
    
}
