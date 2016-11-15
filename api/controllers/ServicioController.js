/**
 * ServicioController
 *
 * @description :: Server-side logic for managing Servicios
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
		Servicio.create(req.params.all(), function servicioCreated(err,Servicio)
		{
			if (err) return next(err);
			res.redirect('/pedido/servicioPedido/'+Servicio.IDServicio);
		});	
	},

	servicioPedido: function(req, res, next)
	{
		Servicio.findOne(req.param('id'), function foundServicio(err,Servicio)
		{
			if (err) return next(err);
			if (!Servicio) return next();
			res.view({Servicio: Servicio});
		});
	}
};

