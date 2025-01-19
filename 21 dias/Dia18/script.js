// CLasse Livros
class Livros{
    Titulo;
    Autor;
    Editora;
    AnoDAPublicacao;
    Disponibilidade = true;
    
    constructor(Titulo, Autor, Editora, AnoDAPublicacao,){
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.Editora = Editora;
        this.AnoDAPublicacao = AnoDAPublicacao;
        
    };
}

let livros = []
Livros.push(new Livros("O Senhor dos Anéis", "J.R.R. Tolkien", "HarperCollins", 1954))
Livros.push(new Livros("Harry Potter", "J.K. Rowling", "Rocco", 1997))
Livros.push(new Livros("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "Gallimard", 1943))
Livros.push(new Livros("Dom Quixote", "Miguel de Cervantes", "Francisco Robles", 1605))
Livros.push(new Livros("Cem Anos de Solidão", "Gabriel García Márquez", "Harper & Row", 1967))


class Biblioteca{
    Nome;
    Endereco;
    Telefone;
    AcervoDeLivros = [];
    constructor(Nome, Endereco,Telefone,AcervoDeLivros){
        this.Nome = Nome;
        this.Endereco = Endereco;
        this.Telefone = Telefone;
        this.AcervoDeLivros = AcervoDeLivros;
    }

    BuscarLivroPeloTitulo(Titulo)
    {this.AcervoDeLivros.forEach(livro => {
        if(livro.Titulo == Titulo){
            console.log(livro)
        }
    })
}

    EmprestarLivro(Titulo){
        let Emprestado = false;
        this.AcervoDeLivros.forEach(livro => {
            if(livro.Titulo == Titulo){
                if(livro.Disponibilidade){
                    if(livro.Disponibilidade == true) { 
                    livro.Disponibilidade = false;
                    Emprestado = true;
                }
                }
            }
        })
        if(Emprestado){
            return  true;
            console.log("Livro emprestado com sucesso")
        }else{
            return  false;
            console.log("Livro indisponível para empréstimo")
        }
}

    
    DevolverLivro(Titulo){
        let Devolvido = false;
        this.AcervoDeLivros.forEach(livro => {
            if(livro.Titulo == Titulo){
                if(livro.Disponibilidade == false){
                    livro.Disponibilidade = true;
                    Devolvido = true;
                    console.log("Livro devolvido com sucesso")
                }
            }
        })}
}   

let biblioteca = new Biblioteca("Biblioteca Nacional", "Av. Rio Branco, 219", "21 3095-3879",)

biblioteca.BuscarLivroPeloTitulo("O Senhor dos Anéis")
biblioteca.EmprestarLivro("O Senhor dos Anéis")
biblioteca.DevolverLivro("O Senhor dos Anéis")
