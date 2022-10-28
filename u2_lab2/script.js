export function Calculo_notas(){

    var nombre = document.getElementsByName("nombre")[0].value;
    var seleccion = document.getElementsByName("seleccion")[0].value;
    var uni1_n1 = document.getElementsByName("uni1_n1")[0].value;
    var uni1_n2 = document.getElementsByName("uni1_n2")[0].value;
    var uni1_n3 = document.getElementsByName("uni1_n3")[0].value;
    var uni2_n1 = document.getElementsByName("uni2_n1")[0].value;
    var uni2_n2  = document.getElementsByName("uni2_n2")[0].value;
    var uni2_n3  = document.getElementsByName("uni2_n3")[0].value;
    var uni3_n1  = document.getElementsByName("uni3_n1")[0].value;
    var uni3_n2  = document.getElementsByName("uni3_n2")[0].value;
    var uni3_n3  = document.getElementsByName("uni3_n3")[0].value;

    var v_nombre = document.getElementById("validar_nombre");
    var v_seleccion = document.getElementById("validar_seleccion");
    var v_u1_n1 = document.getElementById("validar_u1_n1");
    var v_u1_n2 = document.getElementById("validar_u1_n2");
    var v_u1_n3 = document.getElementById("validar_u1_n3");
    var v_u2_n1 = document.getElementById("validar_u2_n1");
    var v_u2_n2 = document.getElementById("validar_u2_n2");
    var v_u2_n3 = document.getElementById("validar_u2_n3");
    var v_u3_n1 = document.getElementById("validar_u3_n1");
    var v_u3_n2 = document.getElementById("validar_u3_n2");
    var v_u3_n3 = document.getElementById("validar_u3_n3");
    var v_promedio = document.getElementById("validar_prom_final");

    v_nombre.innerHTML = "";
    v_seleccion.innerHTML = "";

    v_u1_n1.innerHTML = "";
    v_u1_n2.innerHTML = "";
    v_u1_n3.innerHTML = "";

    v_u2_n1.innerHTML = "";
    v_u2_n2.innerHTML = "";
    v_u2_n3.innerHTML = "";

    v_u3_n1.innerHTML = "";
    v_u3_n2.innerHTML = "";
    v_u3_n3.innerHTML = "";
    
    pon1 = (uni1_n1*0.06) + (uni1_n2*0.06) + (uni1_n3*0.21)
    pon2 = (uni2_n1*0.06) + (uni2_n2*0.06) + (uni2_n3*0.21)
    pon3 = (uni3_n1*0.06) + (uni3_n2*0.06) + (uni3_n3*0.22)

    prom_final = (pon1) + (pon2) + (pon3)
    prom_final2 = (prom_final).toFixed(1);

    if(!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]*$/.test(nombre) || nombre === "" || nombre.length < 3 || nombre.length > 20){
        v_nombre.innerHTML = "Datos inválidos";return;
    }else{
        v_nombre.innerHTML = "Validado ✔"
    
    }if(seleccion === "Ninguno"){
        v_seleccion.innerHTML = "Seccione una carrera";return;
    }else{
        v_seleccion.innerHTML = "Validado ✔"
    
    }if (isNaN(uni1_n1)|| uni1_n1 === "" || uni1_n1 < 1.0 || uni1_n1 > 7.0){
        v_u1_n1.innerHTML = "Nota inválida 😞";return;
    }else{
        v_u1_n1.innerHTML = "Validado ✔"

    }if (isNaN(uni1_n2)|| uni1_n2 === "" || uni1_n2 < 1.0 || uni1_n2 > 7.0){
        v_u1_n2.innerHTML = "Nota inválida 😞";return;
    }else{
        v_u1_n2.innerHTML = "Validado ✔"
    
    }if (isNaN(uni1_n3)|| uni1_n3 === "" || uni1_n3 < 1.0 || uni1_n3 > 7.0){
        v_u1_n3.innerHTML = "Nota inválida 😞";return;
    }else{
        v_u1_n3.innerHTML = "Validado ✔"
    
    }if (isNaN(uni2_n1)|| uni2_n1 === "" || uni2_n1 < 1.0 || uni2_n1 > 7.0){
        v_u2_n1.innerHTML = "Nota inválida 😞";return;
    }else{
        v_u2_n1.innerHTML = "Validado ✔"
    
    }if (isNaN(uni2_n2)|| uni2_n2 === "" || uni2_n2 < 1.0 || uni2_n2 > 7.0){
        v_u2_n2.innerHTML = "Nota inválida 😞";return;
    }else{
        v_u2_n2.innerHTML = "Validado ✔"
    
    }if (isNaN(uni2_n3)|| uni2_n3 === "" || uni2_n3 < 1.0 || uni2_n3 > 7.0){
        v_u2_n3.innerHTML = "Nota inválida 😞";return;
    }else{
        v_u2_n3.innerHTML = "Validado ✔"
    
    }if (isNaN(uni3_n1)|| uni3_n1 === "" || uni3_n1 < 1.0 || uni3_n1 > 7.0){
        v_u3_n1.innerHTML = "Nota inválida 😞";return;
    }else{
        v_u3_n1.innerHTML = "Validado ✔"

    }if (isNaN(uni3_n2)|| uni3_n2 === "" || uni3_n2 < 1.0 || uni3_n2 > 7.0){
        v_u3_n2.innerHTML = "Nota inválida 😞";return;
    }else{
        v_u3_n2.innerHTML = "Validado ✔"

    }if (isNaN(uni3_n3)|| uni3_n3 === "" || uni3_n3 < 1.0 || uni3_n3 > 7.0){
        v_u3_n3.innerHTML = "Nota inválida 😞";return;
    }else{
        v_u3_n3.innerHTML = "Validado ✔"

    }if(prom_final < 4.0){
        v_promedio.innerHTML = "Ha reprobado. Su promedio es:"+prom_final2
    }else{
        v_promedio.innerHTML = "Ha aprobado :D. Su promedio es:"+prom_final2
    }
}
    