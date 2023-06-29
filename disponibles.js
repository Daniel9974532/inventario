//esta función solo muestra la cantidad de arroz disponible
//SE DEBE IMPLEMENTAR PARA QUE MUESTRE TODAS LAS EXISTENCIAS
//DISPONIBLES DE TODOS LOS PRODUCTOS 
function existenciasDisponibles() {
  let arroz=localStorage.getItem("arroz");
  let lentejas=localStorage.getItem("lentejas")
  let frijoles=localStorage.getItem("frijoles")
  let jabon=localStorage.getItem("jabon",)
  let limpido=localStorage.getItem("limpido")
  let champu=localStorage.getItem("champu")
  let pescado=localStorage.getItem("pescado")
  let res = localStorage.getItem("res")
  let cerdo =localStorage.getItem("cerdo")

  let yogurt=localStorage.getItem("yogurt")
  let leche=localStorage.getItem("leche")
  let kumis=localStorage.getItem("kumis")

 return console.log("Arroz:",arroz," ","Lentejas:",lentejas," ","Jabon:",jabon," ","Frijoles:",frijoles," ","Limpido:",limpido," ","Champu:",champu," ","Pescado:",pescado," ","Res:",res," ","Cerdo:",cerdo)
}

export {existenciasDisponibles};