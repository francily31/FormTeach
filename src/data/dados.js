function mdados(){
    this.lista = [];

    this.salva = function(p){
        this.recupera();
        this.lista.push(p);
        localStorage.setItem("listap", JSON.stringify(this.lista));
    }
     
    this.recupera = function(){
        this.lista = localStorage.getItem("listap")?JSON.parse(localStorage.getItem("listap")):[];
    }

} 
export default new mdados();

