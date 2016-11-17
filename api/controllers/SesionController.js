/**
 * SesionController
 *
 * @description :: Server-side logic for managing Sesions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
	'new': function(req, res)
	{
		res.view('/sesion/new');	
	},

	create: function(req, res, next)
	{
		Usuario.findOne({Username: req.param('Username')}).exec(function (err, Usuario)
		{
			if(err)
			{
				return res.serverError(err);
			}
			if(!Usuario)
			{
				return res.notFound('No existe el username');
			}
			req.session.authenticated = true;
			req.session.Usuario = Usuario;
			console.log("Usuario encontrado "+Usuario.Nombre);
			res.redirect('/index');
			//res.redirect('/usuario/usuarioLogeado/'+Usuario.IDUsuario);
		});
	},

	destroy: function(req, res, next)
	{
		req.session.destroy();
		res.redirect('/index')
	}
};

