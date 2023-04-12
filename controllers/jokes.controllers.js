const Jokes = require("../models/jokes.models")

const buscarChistes = async (req, res) =>{
    const broma = await Jokes.find();
    res.json( {resultado: 'ok', broma } );
}

const unChiste = async (req, res) =>{
    const chisteEncontrado= await Jokes.findOne({_id: req.params.id})
    res.json( {resultado: 'ok', chiste:chisteEncontrado, parametro: req.params.id } );
}

const crearChiste = async (req, res) =>{
    try {
        const chisteCreado = await Jokes.create(req.body);
        res.json( {resultado: 'ok', chiste_nuevo:chisteCreado } );
    } catch (error) {
        res.json(error)
    } 
}

const actualizarChiste = async (req, res) =>{
    const chisteActualizado= await Jokes.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    res.json( {resultado: 'ok', chiste:chisteActualizado, parametro: req.params.id } );
}

const eliminarChiste = async (req, res) =>{
    const chisteEliminado= await Jokes.deleteOne({_id: req.params.id})
    res.json( {resultado: 'ok', chiste:chisteEliminado, parametro: req.params.id } );
}

module.exports = {
    buscarChistes, unChiste, crearChiste, actualizarChiste, eliminarChiste,
}