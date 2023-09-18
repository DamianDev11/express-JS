import Waffle from "./end/lib";
const server = new Waffle();

server.get("/", (res) => {
  res.send("Hellow from Waffle!");
});

server.get("/about", (res) => {
  res.send("Hellow from about!");
});

server.get("/api", (res) => {
  res.json({
    name: dam1,
    role: "SDE1",
    city: "Bangalore",
  });
});

server.get("/blog", (res) => {
  res.html("blog");
});

server.start(3000, () => console.log("Server running on port 3000"));
