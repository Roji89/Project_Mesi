const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const port = process.env.API_PORT || 4000;

// server listening
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
