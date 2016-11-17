/**
 * PerfilController
 *
 * @description :: Server-side logic for managing Perfils
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
	connection: 'mysql',

	usuarioLogeado: function(req, res)
	{
		console.log("HOLA?");
		var userid = req.session.Usuario.IDUsuario;
		console.log("ID "+userid)
		Pedido.query('SELECT * from Pedido WHERE Pedido.owner = 1', function(err, Pedido)
		{
			if(err) return res.serverError(err);
			console.log(Pedido);
			return res.view('/usuario/usuarioLogeado',{Pedido: Pedido, layout: null});
		});
	}
};

