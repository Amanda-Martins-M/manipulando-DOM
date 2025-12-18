/* Selecionar elementos */
const btnMenu = document.getElementById("btn-menu");
const listaMenu = document.querySelector("#menu-principal");
const iconeBtnMenu = document.querySelector("i");

/* Adicionar eventos (ou seja, observar ações do usuário)*/
btnMenu.addEventListener("click", function() {
    //Alterar estilos
   // listaMenu.style.display = "block";
   // listaMeny.style.backgroundColor = "#ccc";
listaMenu.classList.toggle("ativo");
   // Manipulando classes
   if(listaMenu.classList.contains("ativo")){
   iconeBtnMenu.classList.remove("fi-sr-menu-burger");
   iconeBtnMenu.classList.add("fi-sr-cross");

   // Alterando o valor dos atributos
   btnMenu.setAttribute("aria-label", "Fechar Menu");
   btnMenu.setAttribute("aria-expanded", "true");
} else{
    iconeBtnMenu.classList.remove("fi-sr-cross");
    iconeBtnMenu.classList.add("fi-sr-menu-burger");

    btnMenu.setAttribute("aria-label", "Abrir Menu");
    btnMenu.setAttribute("aria-expanded", "false");
}

});
