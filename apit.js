const express = require("express");
const app = express();
const api = require("./apit2"); // or whatever your file is called
app.use("/api", api);
app.listen(7899, () => {
console.log("Server running at http://localhost:7899/api");
});
// http://localhost:7899/api/player/id/1or2 or3 to fetch playerdetail based on id

//http://localhost:7899/api/player/role/ batsman or bowler to fetch playerdetail based on role