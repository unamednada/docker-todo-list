const server = require("./routes");

const PORT = process.env.PORT || 3001;

server.use(express.static("public"));
server.listen(PORT, () => console.log("'Trybe Todo List Api' running on port", PORT));
