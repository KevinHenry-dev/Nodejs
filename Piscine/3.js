let monEquipe = 187;

function afficherIsString(arg){
    if(typeof arg === "string"){
        return arg;
    }
    else{
        return "ce n'est pas un string"
    }
}
console.log(afficherIsString(monEquipe));