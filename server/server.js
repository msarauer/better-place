const Express = require("express");
const app = Express();
const socket = require("socket.io");
const PORT = 8001;
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");
// Express Configuration
app.use(cors());
app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());
app.use(Express.static("public"));
app.use(morgan("dev"));
app.use(
  cookieSession({
    name: "session",
    keys: ["key"],
  })
);
app.use(cookieParser());
app.use(cors());

// const dbConnectionURL = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

//PG database cleint/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
console.log("test:", dbParams);
const db = new Pool(dbParams);
db.connect();

// Sample GET route
// App.get('/api/data', (req, res) => res.json({
//   message: "Seems to work!",
// }));
const userRoutes = require("./routes/user");
const usersRoutes = require("./routes/users");
const reviewRoutes = require("./routes/review");
const reviewsRoutes = require("./routes/reviews");
const messagesRoutes = require("./routes/messages");
const categoryRoutes = require("./routes/category");
const categoriesRoutes = require("./routes/categories");
const opportunityRoutes = require("./routes/opportunity");
const opportunitiesRoutes = require("./routes/opportunities");
const userOpportunitiesRoutes = require("./routes/users_opportunities");

// const opportunities = require("./routes/opportunities");

// routes
app.use("/api/user", userRoutes(db));
app.use("/api/users", usersRoutes(db));
app.use("/api/review", reviewRoutes(db));
app.use("/api/reviews", reviewsRoutes(db));
app.use("/api/messages", messagesRoutes(db));
app.use("/api/category", categoryRoutes(db));
app.use("/api/categories", categoriesRoutes(db));
app.use("/api/opportunity", opportunityRoutes(db));
app.use("/api/opportunities", opportunitiesRoutes(db));
app.use("/api/users_opportunities", userOpportunitiesRoutes(db));

// Login Route
app.post("/login", (req, res) => {
  db.query(`SELECT * FROM users WHERE email = $1;`, [req.body.email]).then(
    (data) => {
      const user = data.rows[0];
      if (req.body.password === user.password) {
        return res.json({ token: user });
      } else {
        return res
          .status(418)
          .json({ message: "Wrong Email/Password Combination" });
      }
      // return res.json({ token: false });
    }
  );
});

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

const io = socket(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  console.log(io.engine.clientsCount);
  // socket.join(chat) // might have to change this to "chat"

  // socket.on('chat', (data) => {
  //   socket.join(data)
  //   console.log("user joined chat: ", data);
  // })

  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data.content);
    console.log("send_message:", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
