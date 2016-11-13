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
		/*Usuario.find('IDUsuario').exec(function foundUsuario(err,Usuario)
		{
			console.log("creando "+Usuario.IDUsuario);
			if(err)
			{
				return res.serverError(err);
			}
			res.view({Usuario: Usuario});
			console.log(Usuario.Correo);
		});*/
		/*Usuario.findOne(req.param('IDUsuario'), function foundUsuario(err,Usuario)
		{
			if (err) return next(err);
			if (!Usuario) return next();
			res.view({Usuario: Usuario});
		});*/ 
	}

	/*usuario: function(req, res, next){
		Usuario.find(function encontrarUsuario(err, usuarios){
			if (err) return next(err);
			res.view({usuarios: usuarios});
		});
	}*/
	
};

