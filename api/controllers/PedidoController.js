/**
 * PedidoController
 *
 * @description :: Server-side logic for managing Pedidoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
	Nuevo: function(req, res)
	{
		res.view();
	},

	/*create: function(req, res, next)
	{
		Pedido.create(req.params.all(), function pedidoCreated(err,Pedido)
		{
			if (err) return next(err);
			res.view();
			console.log(Pedido)
			//res.redirect('/usuario/usuarioRegistrado/'+Usuario.IDUsuario);
		});	
	}*/
};

