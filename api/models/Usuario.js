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
  		type: 'number',
  		required: true,
  		unique: true,
  		primaryKey: true
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
  		type: 'number',
  		required: true
  	},

  	Telefono:
  	{
  		type: 'number',
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

