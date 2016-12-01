/**
 * Servicio.js
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
  		IDServicio:
  		{
  			type: 'integer',
  			unique: true,
  			primaryKey: true,
  			autoIncrement: true
  		},

  		Desmontaje:
  		{
  			type: 'longtext'
  		},

  		Instalacion:
  		{
  			type: 'longtext'
  		},

  		Embalaje:
  		{
  			type: 'boolean'
  		},

  		TransporteEspecial:
  		{
  			type: 'longtext'
  		},

  		Presupuesto:
  		{
  			type: 'float'
  		},

  		IDPedidos: //REFERENCIA A QUE UN SERVICIO PUEDE PERTENERCER A MUCHOS PEDIDOS
  		{
  			collection: 'Pedido',
  			via: 'IDServicios'
  		}
  	}
};

