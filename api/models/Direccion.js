/**
 * Direccion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = 
{

  attributes: 
  {
  	IDDireccion:
  	{
  		type: 'integer',
  		unique: true,
  		primaryKey: true,
  		autoIncrement: true
  	},
  	Estado:
    {
      type: 'string',
      required: true
    },

    Municipio:
    {
      type: 'string',
      required: true
    },

    SectorUrb:
    {
      type: 'string',
      required: true
    },

    CodigoPostal:
    {
      type: 'string',
    },

    DetallesDireccion:
    {
      type: 'string',
      required:true
    },

    owner: //REFERENCIA A QUE UNA DIRECCIÓN PERTENECE A UN USUARIO
    {
    	//model: 'Usuario'
    	model: 'Usuario',
    	unique: true
    }	
  }
};

