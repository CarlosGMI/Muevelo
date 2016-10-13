/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	
	

  attributes: 
  {
  	IDUsuario:
  	{
  		type: 'integer'
  		/*unique: true,
  		primaryKey: true,
  		autoIncrement: true*/
  	},

  	Username:
  	{
  		type: 'string',
  		required: true
  	},

  	Contrasena:
  	{
  		type: 'string',
  		required: true
  	},

  	Nombre:
  	{
  		type: 'string',
  		required: true
  	},

  	Apellido:
  	{
  		type: 'string',
  		required: true
  	},

  	Cedula:
  	{
  		type: 'integer',
  		required: true
  	},

  	Telefono:
  	{
  		type: 'integer',
  		required: true	
  	},

  	Correo:
  	{
  		type: 'string',
  		required: true
  	},

  	Direccion:
  	{
  		type: 'string',
  		required: true
  	}
  }
};

