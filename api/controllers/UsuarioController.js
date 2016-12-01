/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/*PROB*/
module.exports = 
{
	connection: 'mysql',

	Nuevo: function(req, res)
	{
		res.view();
	},
	
	create: function(req, res, next)
	{
		var objetoUsuario = {
			IDUsuario: req.param('id'),
			Username: req.param('Username'),
			Contrasena: req.param('Contrasena'),
			Nombre: req.param('Nombre'),
			Apellido: req.param('Apellido'),
			Cedula: req.param('Cedula'),
			Telefono: req.param('Telefono'),
			Correo: req.param('Correo')
		}
		var objetoDireccion = {
			IDDireccion: req.param('id'),
			Estado: req.param('Estado'),
			Municipio: req.param('Municipio'),
			SectorUrb: req.param('SectorUrb'),
			CodigoPostal: req.param('CodigoPostal'),
			DetallesDireccion: req.param('DetallesDireccion')
		}
		Usuario.create(objetoUsuario, function usuarioCreated(err,Usuario)
		{
			if (err) return next(err);
			//res.redirect('/usuario/usuarioRegistrado/'+Usuario.IDUsuario);
		});
		Direccion.create(objetoDireccion, function direccionCreated(err,Direccion)
		{
			if (err) return next(err);
			Usuario.update({Username: req.param('Username')},{Direcciones: Direccion.IDDireccion}, function direccionUpdated(err,dir)
			{
				if (err) return next(err);
				mandalo(req.param('Username'));
			});
		});
		function mandalo(a) 
		{
			Usuario.findOne({Username: a}, function usuarioMandalo(err,user)
			{
				if (err) return next(err);
				if (!Usuario) return next();
				res.redirect('/usuario/usuarioRegistrado/'+user.IDUsuario);
			})
		}
	},

	usuarioRegistrado: function(req, res, next)
	{
		Usuario.findOne(req.param('id'), function foundUsuario(err,Usuario)
		{
			if (err) return next(err);
			if (!Usuario) return next();
			res.view({Usuario: Usuario});
		});
	},

	usuarioLogeado: function(req, res, next)
	{
		var userid = req.session.Usuario.IDUsuario;
		Pedido.query('SELECT * from pedido WHERE pedido.owner = '+userid+';', function(err, results)
		{
			if(err) return res.serverError(err);
			var pedidoid = results.IDPedido;
			return res.view({Pedido: results});
			/*Pedido.query('SELECT pedido.IDPedido, servicio.Desmontaje as desmontaje, servicio.Instalacion as instalacion, servicio.Embalaje as embalaje FROM pedido INNER JOIN servicio WHERE pedido.IDPedido = servicio.IDPedidos;', function(err,rr)
			{
				return res.view({Pedido: results},{Ped: rr});
			});*/
		});
		/*Usuario.findOne(req.param('id'), function foundUsuario(err,Usuario)
		{
			if (err) return next(err);
			if (!Usuario) return next();
			if (!Pedido) return next();
			res.view({Usuario: Usuario});
		});*/
	}
};

