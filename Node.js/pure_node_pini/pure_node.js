import http from "http";
import fs from "fs";
import { dirname, extname } from "path";
import { fileURLToPath } from "url";

const host = "localhost";
const port = 3000;

const requestListener = function (req, res) {
  if (req.method !== "GET") {
    return res.end(http.STATUS_CODES[400]);
  }

  const url = req.url;
  if (url === "/raw-html") {
    res.writeHead(200, "Content-Type", "text/html");
    res.write("<h1>Welcome</h1>");
    return res.end();
  }
  if (req.url === "/users") {
    fs.readFile("./users.json", (err, content) => {
      res.writeHead(200, "Content-Type", "application/json");
      return res.end(content);
    });
    return;
  }
  let parseUrl = req.url.replace(/^\/+|\/+$/g, "");

  if (url === "/") {
    parseUrl = "index.html";
  }

  const file = dirname(fileURLToPath(import.meta.url)) + "/public/" + parseUrl;

  fs.readFile(file, (err, content) => {
    switch (parseUrl) {
      case "index.html":
        res.writeHead(200, { "Content-type": "text/html" });
        break;
      case "index.js":
        res.writeHead(200, { "Content-type": "text/javascript" });
        break;
      case "style.css":
        res.writeHead(200, { "Content-type": "text/css" });
        break;
    }

    return res.end(content);
  });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
