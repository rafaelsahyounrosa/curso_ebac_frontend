function Cliente(nome){
    this.nome = nome;

    this.solicitarAtendimento = function(){
        console.log("Chamar garçon");
    }

    this.pagar = function(){
        console.log("Pagando");
    }
}

function Funcionario(nome, salario){
    this.nome = nome;
    this.salario = salario;

    this.atender = function(){
        console.log("Atendendo");
    }
}

function Garcon(nome, salario){
    Funcionario.call(this, nome, salario);
    
    this.atender = function(){
        console.log("Colhendo pedido");
    }
}

function Caixa(nome, salario){
    Funcionario.call(this, nome, salario);

    this.atender = function(){
        console.log("Fechando a conta");
    }
}

const garcon = new Garcon("Joao", 3500);
console.log(garcon)

const caixa = new Caixa("Maria", 4000);
console.log(caixa)

const cliente = new Cliente("Marcos");
console.log(cliente)

cliente.solicitarAtendimento();
garcon.atender();
caixa.atender();
cliente.pagar();