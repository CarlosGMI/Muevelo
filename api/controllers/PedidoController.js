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

	create: function(req, res, next)
	{
		Pedido.create(req.params.all(), function pedidoCreated(err,Pedido)
		{
			if (err) return next(err);
			res.redirect('/pedido/servicioPedido/'+Pedido.IDPedido);
		});	
	},

	servicioPedido: function(req, res, next)
	{
		Pedido.findOne(req.param('id'), function foundPedido(err,Pedido)
		{
			if (err) return next(err);
			if (!Pedido) return next();
			res.view({Pedido: Pedido});
		});
	},

	/*usuarioLogeado: function(req, res, next)
	{
		console.log("HOLAA");
		Pedido.findOne({IDPedido: req.param('id')}, function foundPedido(err,Pedido)
		{
			if (err) return next(err);
			if (!Pedido) return next();
			res.view({Pedido: Pedido});
		});
	}*/
};

