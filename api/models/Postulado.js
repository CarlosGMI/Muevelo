/**
 * Postulado.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = 
{
	connection: 'mysql',

	attributes: 
	{
  		Especialidad:
  		{
  			type: 'string',
  			//required: true
  		},

  		DetallesPostulado:
  		{
  			type: 'longtext'
  		},

  		owner:  //REFERENCIA A QUE UN POSTULADO ES UN USUARIO
  		{
  			model: 'Usuario'
  		}
	}
};

