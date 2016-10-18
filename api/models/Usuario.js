/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcryptjs');

module.exports = {
	
	

  attributes: {
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
  	},
    toJSON: function() {
            var obj = this.toObject();
            delete obj.Contrasena;
            return obj;
    }
  },
  beforeCreate: function(Usuario, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(Usuario.Contrasena, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    Usuario.Contrasena = hash;
                    cb();
                }
            });
        });
    }
};

