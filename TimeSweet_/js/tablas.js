function generarTabla(){
    var contTabla=document.getElementById("tabla");
    contTabla.innerHTML="";
    var tabla="<table>";
    tabla+="<tr>";
    tabla+="<th>Nombres Y Apellidos</th>"
    tabla+="<th>Celular</th>"
    tabla+="<th>Correo</th>"
    tabla+="<th>Direccion</th>"
    tabla+="<th>Editar</th>"
    tabla+="<th>Notificar Pedido</th>"
    tabla+="</tr>";

    for(var f=0;f<6;f++){
        tabla+="<tr>";
        tabla+="<td>value"+f+" </td>"
        tabla+="<td>value"+f+" </td>"
        tabla+="<td>value"+f+" </td>"
        tabla+="<td>value"+f+" </td>"
        tabla+="<td><a href=\"realizarPedido.html\"><img src=\"../icons/edit.svg\" class=\"imgIcon\"></a></td>"
        tabla+="<td><img src=\"../icons/send.svg\" class=\"imgIcon\"></td>"
        tabla+="</tr>"
    }
    tabla+="</table>"
    contTabla.innerHTML=tabla;


}