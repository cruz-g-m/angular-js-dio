type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
};

function ligarPara(heroi: Hero){
    console.log("Ligando para: " + heroi.telefone);

};

ligarPara({
    nome: "Felipe",
    vulgo: "Capitão américa",
    telefone: "11 317133888"
});