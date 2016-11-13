/**
 * Pedido.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


  		idPedido:
  	{
  		type: 'integer',
  		unique: true,
  		primaryKey: true,
  		autoIncrement: true
  	},

  	FechaMudanza:
  	{
  		type: 'string',
  		required: true
  		
  		
  	},

Mobiliario:
  	{
  		type: 'string',
  		required: true
  	},

Prioridad:
  	{
  		type: 'string',
  		required: true
  	},

Metro2:
  	{
  		type: 'string',
  		required: true
  	},

DireccionMudanza:
  	{
  		type: 'string',
  		required: true
  	}



  }
};

