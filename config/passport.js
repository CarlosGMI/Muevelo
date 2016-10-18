var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcryptjs');

passport.serializeUser(function(Usuario, done) {
    done(null, Usuario.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({ id: id } , function (err, Usuario) {
        done(err, Usuario);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'Username',
    passwordField: 'Contrasena'
  },
  function(Username, Contrasena, done) {

    Usuario.findOne({ Username: Username }, function (err, Usuario) {
      if (err) { return done(err); }
      if (!Usuario) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      bcrypt.compare(Contrasena, Usuario.Contrasena, function (err, res) {
          if (!res)
            return done(null, false, {
              message: 'Invalid Password'
            });
          var returnUser = {
            Username: Usuario.Username,
            createdAt: Usuario.createdAt,
            id: Usuario.id
          };
          return done(null, returnUser, {
            message: 'Logged In Successfully'
          });
        });
    });
  }
));
