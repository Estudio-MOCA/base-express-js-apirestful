import requireContext from "node-require-context";
import path from "path";
import pascalCase from "just-pascal-case";

const req = requireContext(".", true, /\.ts$/);

const controllers: any = {};

req.keys().forEach((key) => {
  const basename = path.basename(key);
  if (key.indexOf("index.ts") > -1) return;
  const className = pascalCase(basename.replace(/(\.ts)/g, ""));
  const controller = require(key).default;
  controllers[className] = new controller();
});

export default controllers;