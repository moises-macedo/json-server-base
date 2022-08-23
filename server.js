const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;
// const ip = require('ip').address();

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 600,
  animals:644
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);


app.listen(port, console.log(`Server started in http://localhost:${port}`))
/* A senha do Kenzinho é 123456 */
