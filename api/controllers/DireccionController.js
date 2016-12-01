/**
 * DireccionController
 *
 * @description :: Server-side logic for managing Direccions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
	connection: 'mysql',

	Nuevo: function(req, res)
	{
		res.view();
	},
	
	create: function(req, res, next)
	{
		Direccion.create(req.params.all(), function direccionCreated(err,Direccion)
		{
			if (err) return next(err);
			//res.redirect('/usuario/usuarioRegistrado/'+Usuario.IDUsuario);
		});	
	}
};

