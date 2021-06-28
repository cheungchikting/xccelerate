const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config');
const knexFile = require('./knexfile').development;
const knex = require('knex')(knexFile);

module.exports = (passport) => {
    passport.use(new JwtStrategy({
        secretOrKey: config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    }, async function (payload, done) {
        let user = await knex.select('*').from('user').where('id', payload.id)
        if (err) {
            return done(err, false);
        } else if (user) {
            return done(null, user);
        }
    }));
}
