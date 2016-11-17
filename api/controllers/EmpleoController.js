/**
 * EmpleoControllerController
 *
 * @description :: Server-side logic for managing Empleocontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	Nuevo: function(req, res)
	{
		res.view();
	},
	
	create: function(req, res, next)
	{
		Empleo.create(req.params.all(), function usuarioCreated(err,Empleo)
		{
			if (err) return next(err);
			res.redirect('/usuario/usuarioRegistrado/'+Empleo.IDEmpleo);
		});	
	},

};

