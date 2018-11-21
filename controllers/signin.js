const jwt = require('jsonwebtoken');

const handleSignin = (db, bcrypt, req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return Promise.reject('incorrect form submission');
  }
  return db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => user[0])
          .catch(err => Promise.reject('unable to get user'))
      } else {
        Promise.reject('wrong credentials')
      }
    })
    .catch(err => Promise.reject('wrong credentials'))
};

const getAuthTokenId = () => {
  console.log('Auth ok');
};

const signToken = (email) => {
    const jwtPayload = { email };
    //'JWT_SECRET' sould be something from environmental variables in real app e.g. process.env.JWTSECRET
    return jwt.sign(jwtPayload, 'JWT_SECRET', { expiresIn: '2 days' });
};

const createSessions = (data) => {
    //create JWT token, return user data
    const { email, id } = user;
    const token = signToken(email);
};

const signinAuthentication = (db, bycrypt) => (req, res) => {
    const { authorization } = req.headers;
    return authorization ? getAuthTokenId() :
        handleSignin(db, bycrypt, req, res)
            .then(data => {
                data.id && data.email ? createSessions(data) : Promise.reject(data)
            })
            .catch(err => res.status(400).json(err))
};

module.exports = {
    signinAuthentication: signinAuthentication
};