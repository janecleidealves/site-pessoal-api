const experienciasRepository = require('../repositories/experienciasRepository');

exports.getAllExperiencias = async (req, res) => {
    const experiencias = await experienciasRepository. getAllExperiencias();
    res.json(experiencias);   
};

exports.getAllExperienciasById = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencia = await experienciasRepository.getAllExperienciasById (id);
    res.json(experiencia);
}


exports.createExperiencia = async (req, res) => {
    const experiencia = req.body;
    const newExperiencia = await experienciasRepository.createExperiencias(experiencia);
    res.json(newExperiencia);  
}
exports.updateExperiencia = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencia = req.body;
    const updatedExperiencia = await experienciasRepository.updateExperiencia(id, experiencia)   
    res.json(updatedExperiencia);
}

exports.deleteExperiencia = async (req, res) => {
const id = parseInt(req.params.id)    
await experienciasRepository.deleteExperiencia(id);
res.json({mensage: 'Experiencia ${id} delete'})
}
