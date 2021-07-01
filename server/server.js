// imports
// ENV variables
// Web server config

// PG database/client setup (pool)

// middleware
// (app.use())

// route imports
const usersRoutes = require("./routes/users");



// routes
app.use("api/users", usersRoutes(db));
