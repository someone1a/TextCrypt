const encriptar = (text) => {
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

    return textoEncriptado;
}

const textoOriginal = `-¿Por qué, caramba? -preguntó Jerrod-. No teníamos nada allí. En X-23 
tendremos todo. No estarás sola. No serás una pionera. Ya hay un 
millón de personas en ese planeta. Por Dios, nuestros bisnietos tendrán 
que buscar nuevos mundos porque llegará el día en que X-23 estará 
superpoblado-. Luego agregó, después de una pausa reflexiva: -Te 
aseguro que es una suerte que las computadoras hayan desarrollado 
los viajes interestelares, considerando el ritmo al que aumenta la raza.`;

console.log(encriptar(textoOriginal));
