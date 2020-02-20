const http = require("http"); // http is a module in node
const hostname = "localhost";
const port = 3000;
// == process.env./?

const server = http.createServer((req, res) => {
  res.end("Welcome to Node!");
});

// Callback function that logs template literal (== string literal with embedded expressions)
server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
