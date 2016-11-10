/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/*PROBANDO*/
module.exports = 
{

	'Nueva': function(req, res){
		res.view();
	},
	
	create: function(req, res, next){
		Usuario.create(req.params.all(), function usuarioCreated(err, Usuario)
		{
			if (err) return next(err);
			res.redirect('/usuario/usuarioRegistrado/'+Usuario.IDUsuario);
		});
	},

	usuarioRegistrado: function(req, res, next){
		Usuario.findOne(req.param('IDUsuario'), function foundusuario(err, Usuario)
		{
			if (err) return next(err);
			if (!Usuario) return next();
			res.view({Usuario: Usuario});
		}); 
	},

	usuario: function(req, res, next){
		Usuario.find(function encontrarUsuario(err, usuarios){
			if (err) return next(err);
			res.view({usuarios: usuarios});
		});
	}
	
};

