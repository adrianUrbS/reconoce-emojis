var Emojis = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tds5BzjDG/model.json", listo);

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
});

Webcam.attach("#camara");

function tomarFoto() {
    Webcam.snap(function (direccion) {
        document.getElementById("captura").innerHTML = '<img id="foto"src="' + direccion + '">'
    })
}

function analizarEmoji() {
    var foto = document.getElementById("foto");
    Emojis.classify(foto, respuesta);
}

function respuesta(error, resultados) {
    if (error) {
        console.log(error);
    } else {
        console.log(resultados);
        resultado1 = resultados[0].label;
        resultado2 = resultados[1].label;
        document.getElementById("resultado1").innerHTML = resultado1;
        document.getElementById("resultado2").innerHTML = resultado2;
        document.getElementById("emoji1").innerHTML = emoji(resultado1);
        document.getElementById("emoji2").innerHTML = emoji(resultado2);
        
        }
    }
function emoji(resultado){
    switch (resultado) {
        case "nice": return "👌";
            case "me gusta": return "👍";
            case "sonriendo": return "😁";
            case "ceja levantada": return "🤨";
        }
    }

function listo(){
    console.log("emojis listos");
}