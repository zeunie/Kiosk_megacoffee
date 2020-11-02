import express from "express";
import { localsMiddleware } from "./middleware";
import { coffeeHot, coffeeIce } from "./fakedb";
import routes from "./routes";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.use("/static", express.static("static"));
app.use(localsMiddleware);

app.listen(PORT);

const handleCover = (req, res) => res.render("cover");

const handleCoffeeHot = (req, res) => {
  res.render("coffeeHot", {
    coffeeHot,
  });
};
const handleCoffeeIce = (req, res) => {
  res.render("coffeeIce", { coffeeIce });
};
const handleAmericano = (req, res) => {
  res.render("americano");
};

app.get(routes.cover, handleCover);
app.get(routes.coffeeHot, handleCoffeeHot);
app.get(routes.coffeeIce, handleCoffeeIce);
app.get(routes.americano, handleAmericano);
