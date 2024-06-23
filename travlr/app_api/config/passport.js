const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    (username, password, done) => {
        User.findOne({ email: username }).then(() => {
            if (!User) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            if (!User.password == password ) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, User);
        }

        );
    }
));