/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{

	'Nueva': function(req, res)
	{
		res.view();
	},
	
	/*create: function(req, res, next)
	{
		usuario.create(req.params.all(), function usuarioCreated(err, usuario)
		{
			if (err) return next(err);
			res.redirect('/usuario/usuarioRegistrado/'+usuario.IDUsuario);
		});
	},

	usuarioRegistrado: function(req, res, next)
	{
		usuario.findOne(req.param('IDUsuario'), function foundusuario(err, usuario)
		{
			if (err) return next(err);
			if (!usuario) return next();
			res.view({usuario: usuario});
		}); //Ojito con el foundusuario --> foundUsuario
	}*/
};

