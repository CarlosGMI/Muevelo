/**
 * Postulado.js
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
      IDPostulado:
      {
        type: 'integer',
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },

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
  		},

      empleos: //REFERENCIA A QUE UN POSTULADO SE HA PODIDO POSTULAR A N EMPLEOS
      {
        collection: 'Empleo',
        via: 'owners'
      }
	}
};

