const usuariosRepository =  require('../repositories/usuariosRepository');

exports.login = async (req, res)=> {
    const {email, password} = req.body;

    const usuario = await usuariosRepository.getUsuarioByEmail(email);
    
    if(!usuario|| usuario.password !== password){
        return res.status(401).json({menssage: 'usuário ou senha invalidos'});
    }
    return res.status(401).json({menssage: 'usuário autenticado com sucesso'});
}