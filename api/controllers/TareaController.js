/**
 * TareaController
 *
 * @description :: Server-side logic for managing Tareas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{	
	tarea2: function(req, res, next){
		Tarea.find(function foundTarea (err, tarea) {
			if (err) return next(err);

			res.view({
				tarea: tarea
			});
		});
	},


	queries: function(req, res, next)
	{
		var id = req.param('idq');
		console.log("ENTRE"+id);
		if(id == 1)
		{

		}
		else if(id == 2)
		{
			var q2 = "select concat(nombre,' ',apellido) as Empleado, RentasTotales, GananciaTotal from (select s.first_name as nombre, s.last_name as apellido, count(p.rental_id) as RentasTotales, sum(p.amount) as GananciaTotal from staff s inner join payment p on s.staff_id = p.staff_id group by s.staff_id order by RentasTotales desc limit 1) a;"
			Tarea.query(q2, function(err, results)
			{
				if (err) return res.serverError(err);
	  			return res.view({query2: results, id: id});
			});
		}
	}	
};

