const encriptar = ()=> {
    let texto = document.getElementById("text").value
    let text = texto.toString()
    const MN = "@#&!¡¿";
    const AE = "123456789";
    const parentesis = "ABCDEFGHIJKLMNSOPQRTUVWXYZ";
    const espacios = "?+*<>.,-";
    
    let textoEncriptado = "";

    for (let i = 0; i < text.length; i++) {
        let letra = text[i].toLowerCase();
        let encriptado = "";

        if (letra === "m" || letra === "n") {
            encriptado = MN;
        } else if (letra === "a" || letra === "e") {
            encriptado = AE;
        } else if (letra === "(" || letra === ")") {
            encriptado = parentesis;
        } else if (letra === " ") {
            encriptado = espacios;
        } else if (letra === "," || letra === "." || letra === ";" || letra === ":") {
            textoEncriptado += " ";
            continue;
        } else if (letra === "á" || letra === "é" || letra === "ó" || letra === "ú") {
            textoEncriptado += letra.toUpperCase();
            continue;
        } else {
            encriptado = letra;
        }

        textoEncriptado += encriptado.charAt(Math.floor(Math.random() * encriptado.length));
    }

    return document.getElementById("result").innerHTML=`<span>El texto encriptado es:</span> ${textoEncriptado}`
}
