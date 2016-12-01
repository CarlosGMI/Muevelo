/**
 * Empleo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = 
{
	connection: 'mysql',
	schema: true,

	attributes: 
	{
		IDEmpleo:
		{
			type: 'integer',
  			unique: true,
  			primaryKey: true,
  			autoIncrement: true
		},

		Cargo:
		{
			type: 'string',
			required: true
		},

		Area:
		{
			type: 'string',
			required: true
		},

		Vacante:
		{
			type: 'integer',
			required: true
		},

		DetallesEmpleo:
		{
			type: 'string'
		},

		owners:
		{
			collection: 'Postulado',
			via: 'empleos'
		}
	}
};

