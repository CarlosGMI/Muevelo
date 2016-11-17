/**
 * TareaController
 *
 * @description :: Server-side logic for managing Tareas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{	
	query: function(req, res, next)
	{
		console.log("ENTRE");
		Tarea.query('select first_name from actor', function(err, tarea)
		{
			if (err) return res.serverError(err);
  			return res.json(tarea);
		});
	}	
};

