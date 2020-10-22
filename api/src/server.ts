/**
 * Created By: Svet Kostadinov on 01/10/2020
 */
import app from "./App";
import chalk from "chalk";
import config from "./config/config";

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(chalk.green("Express Server is listening on port " + PORT));
});
