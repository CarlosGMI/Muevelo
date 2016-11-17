/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
/*var bcrypt = require('bcryptjs');*/

module.exports = 
{
  connection: 'mysql',
  schema: true,
  
  attributes: 
  {
  	IDUsuario:
  	{
  		type: 'integer',
  		unique: true,
  		primaryKey: true,
  		autoIncrement: true
  	},

  	Username:
  	{
  		type: 'string',
  		required: true,
      unique: true
  	},

  	Contrasena:
  	{
  		type: 'string',
  		required: true,
      unique: true
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
  		required: true,
      unique: true
  	},

  	Telefono:
  	{
  		type: 'string',
  		required: true,
      unique: true	
  	},

  	Correo:
  	{
  		type: 'email',
      email: true,
  		required: true,
      unique: true
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

    EsEmpleado:
    {
      type: 'boolean',
      defaultsTo: false 
    },

    Pedidos: //REFERENCIA A QUE UN USUARIO PUEDE TENER MUCHOS PEDIDOS 
    {
      collection: 'Pedido',
      via: 'owner'
    },

    Postulados: //REFERENCIA A QUE UN USUARIO PUEDE POSTULARSE N VECES
    {
      collection: 'Postulado',
      via: 'owner'
    }
  /*toJSON: function() 
  {
    var obj = this.toObject();
    delete obj.Contrasena;
    return obj;
  }*/
  }
  /*beforeCreate: function(Usuario, cb) 
  {
    bcrypt.genSalt(10, function(err, salt) 
    {
      bcrypt.hash(Usuario.Contrasena, salt, function(err, hash) 
      {
        if (err) 
        {
          console.log(err);
          cb(err);
        } 
        else 
        {
          Usuario.Contrasena = hash;
          cb();
        }
      });
    });
  }*/
};

