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
		var objetoEmpleo =
		{
			IDEmpleo: req.param('id'),
			Cargo: req.param('Cargo'),
			Area: req.param('Area'),
			Vacante: req.param('Vacante'),
			DetallesEmpleo: req.param('DetallesEmpleo')
		}
		Empleo.create(objetoEmpleo, function empleoCreated(err,Empleo)
		{
			//console.log(objetoEmpleo);
			if (err) return next(err);
			res.redirect('/empleo/Empleate/');
			//console.log(Empleo[0].IDEmpleo);
			//return res.view('Empleate', {Emp: Empleo});
		});
	},

	Empleate: function(req, res, next)
	{
		Empleo.query('SELECT * FROM Empleo;', function(err,results)
		{
			if(err) return res.serverError(err);
			return res.view('Empleate', {Empleos: results});
		});
	}
};

