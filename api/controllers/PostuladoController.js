/**
 * PostuladoController
 *
 * @description :: Server-side logic for managing Postuladoes
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
		Postulado.create(req.params.all(), function postuladoCreated(err,Postulado)
		{
			if (err) return next(err);
			res.redirect('Empleate');
		});	
	},
};

