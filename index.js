import { suma, multiplica } from "./modulos/controller.js";
import chalk from "chalk";
const sumar = suma(3, 9);
console.log("El resultado de la suma es: " + sumar);

const mult = multiplica(3, 3);
console.log(`El resultado del producto es: ${chalk.green(mult)}`);
