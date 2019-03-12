const koa = require("koa");
const koaStatic = require("koa-static");
const path = require("path");

const webpackBuildDir = path.join(__dirname, "../build");

const app = new koa();

app.use(koaStatic(webpackBuildDir));

app.listen(4000, () => {
  console.log("app is running on port", 4000);
});
