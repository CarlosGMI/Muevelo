/**
 * Pedido.js
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
  		IDPedido:
  		{
  			type: 'integer',
  			unique: true,
  			primaryKey: true,
  			autoIncrement: true
  		},

  		EstadoM:
  		{
  			type: 'string',
  			required: true
  		},

  		MunicipioM:
  		{
  			type: 'string',
  			required: true
  		},

  		SectorUrbM:
  		{
  			type: 'string',
  			required: true
  		},	

  		CodigoPostalM:
  		{
  			type: 'string'
  		},

  		DetallesDireccionM:
  		{
  			type: 'string',
  			required: true
  		},

  		FechaMudanza:
  		{
  			type: 'date',
  			required: true,
  			//format: 'dd-mm-yyyy'
  		},

  		Mobiliario:
  		{
  			type: 'longtext',
  			required: true
  		},

  		Metros2:
  		{
  			type: 'integer',
  			required: true
  		},

  		Prioridad:
  		{
  			type: 'string',
  			required: true
  		},

  		EstadoEntrega:
  		{
  			type: 'boolean',
  			defaultsTo: false
  		},

	  	Tracking:
	  	{
	  		type: 'string'
	  	},

	  	owner: //REFERENCIA A QUE UN PEDIDO SOLO PERTENECE A UN USUARIO
	  	{
	  		model: 'Usuario'
	  		//required: true
	  	},

      IDServicios: //REFERENCIA A QUE UN PEDIDO TIENE MUCHOS SERVICIOS
      {
        collection: 'Servicio',
        via: 'IDPedidos'
      }
  	}
};

