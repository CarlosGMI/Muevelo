/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/*PROB*/
module.exports = 
{
	Nuevo: function(req, res)
	{
		res.view();
	},
	
	create: function(req, res, next)
	{
		Usuario.create(req.params.all(), function usuarioCreated(err,Usuario)
		{
			if (err) return next(err);
			res.redirect('/usuario/usuarioRegistrado/'+Usuario.IDUsuario);
		});	
	},

	usuarioRegistrado: function(req, res, next)
	{
		Usuario.findOne(req.param('id'), function foundUsuario(err,Usuario)
		{
			if (err) return next(err);
			if (!Usuario) return next();
			res.view({Usuario: Usuario});
		});
	},

	usuarioLogeado: function(req, res, next)
	{
		Usuario.findOne(req.param('id'), function foundUsuario(err,Usuario)
		{
			if (err) return next(err);
			if (!Usuario) return next();
			if (!Pedido) return next();
			res.view({Usuario: Usuario});
		});
	}
};

