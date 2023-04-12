const mongoose = require("mongoose"); //voy a usar la libreria mongoose

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true, "Se necesita el valor"],
        minlength: [10, "Minimo 10 caracteres"]
    },
    punchline: {
        type: String,
        required:[true, "Se necesita el valor"],
        minlength: [10, "Minimo 10 caracteres"]
    }
},
{ timestamps: true}
);

const Jokes = mongoose.model("chistes", JokeSchema);//de mi db

module.exports = Jokes; //para poder usar en otros archivos