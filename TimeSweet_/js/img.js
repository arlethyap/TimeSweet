const imgDefecto="../img/defaultIcon.png";

const file= document.getElementById('foto');
const img= document.getElementById('img');

file.addEventListener('change', e=>{
    if(e.target.files[0]){
        const reader=new FileReader();
        reader.onload=function(e){
            img.src=e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    }else{
        img.src=imgDefecto;
    }
    }
    )


function cambiarSabores() {
    var postre = document.getElementById("cmbPostre").value;
    var sabor = document.getElementById("cmbSabor");

    sabor.innerHTML = "";
    agregarOpcion("-Seleccionar-",sabor);

    switch (postre) {
        case "1":
            agregarOpcion("Vainilla", sabor);
            agregarOpcion("RedVelvet", sabor);
            agregarOpcion("Chocolate", sabor);
            agregarOpcion("Navideño", sabor);
            break;
        case "2":
            agregarOpcion("Chocolate", sabor);
            agregarOpcion("Carrot", sabor);
            agregarOpcion("RedVelvet", sabor);
            agregarOpcion("Tres Leches Clasica", sabor);
            
            break;
        case "3":
            agregarOpcion("Limon", sabor);
            agregarOpcion("Manzana", sabor);
            agregarOpcion("Maracuya", sabor);
            break;
        case "4":
            agregarOpcion("FrutosRojos", sabor);
            agregarOpcion("Durazno", sabor);
            agregarOpcion("Fresa", sabor);
            break;
        case "5":
            agregarOpcion("Jamon Queso", sabor);
            agregarOpcion("Pollo", sabor);
            agregarOpcion("Carne", sabor);
            break;
        case "6":
            agregarOpcion("Chocolate", sabor);
            agregarOpcion("RedVelvet", sabor);
            agregarOpcion("Nutella", sabor);
            break;
        case "7":
            agregarOpcion("FrutosRojos", sabor);
            agregarOpcion("Fresa", sabor);
            break;
        default:
        // Si no coincide con ningún caso, no se añaden opciones
        break;
    }
}

function agregarOpcion(valor, select) {
    var opcion = document.createElement("option");
    opcion.text = valor;
    opcion.value = valor;
    select.add(opcion);
}

cambiarSabores();

function cambiarContenido() {
    var selectPostre = document.getElementById("cmbPostre").value;
    var selectSabor = document.getElementById("cmbSabor").value;
    var postre= document.getElementById('postre');
    
    switch(selectPostre){
        case "1":
            switch (selectSabor) {
                case "Vainilla":
                    postre.src="../img/cup_vainilla.png";
                    break;
                case "RedVelvet":
                    postre.src="../img/cup_red.png";
                    break;
                case "Chocolate":
                    postre.src="../img/cup_chocolate.png";
                    break;
                case "Navideño":
                    postre.src="../img/cup_navideño.png";
                    break;
            }
            break;
        case "2":
            switch (selectSabor) {
                case "Chocolate":
                    postre.src="../img/torta_chocolate.png";
                    break;
                case "Carrot":
                    postre.src="../img/torta_carrot cake.png";
                    break;
                case "RedVelvet":
                    postre.src="../img/torta_red velvet.png";
                    break;
                case "Tres Leches Clasica":
                    postre.src="../img/torta_tres_leches.png";
                    break;
            }
            break;
        case "3":
            switch (selectSabor) {
                case "Limon":
                    postre.src="../img/pye_limon.png";
                    break;
                case "Manzana":
                    postre.src="../img/pye_manzana.png";
                    break;
                case "Maracuya":
                    postre.src="../img/pye_maracuya.png";
                    break;
            }
            break;
        case "4":
            switch (selectSabor) {
                case "FrutosRojos":
                    postre.src="../img/tarta_frutos.png";
                    break;
                case "Durazno":
                    postre.src="../img/tarta_durazno.png";
                    break;
                case "Fresa":
                    postre.src="../img/tarta_fresa.png";
                    break;
            }
            break;
        case "5":
            switch (selectSabor) {
                case "Jamon Queso":
                    postre.src="../img/empa_queja.png";
                    break;
                case "Pollo":
                    postre.src="../img/empa_pollo.png";
                    break;
                case "Carne":
                    postre.src="../img/empa_carne.png";
                    break;
            }
            break;
        case "6":
            switch (selectSabor) {
                case "Chocolate":
                    postre.src="../img/galle_choco.png";
                    break;
                case "RedVelvet":
                    postre.src="../img/galle_red.png";
                    break;
                case "Nutella":
                    postre.src="../img/galle_nutella.png";
                    break;
            }
            break;
        case "7":
            switch (selectSabor) {
                case "FrutosRojos":
                    postre.src="../img/chesse_frutos.png";
                    break;
                case "Fresa":
                    postre.src="../img/chesse_fresa.png";
                    break;
            }
            break;  
    }
}