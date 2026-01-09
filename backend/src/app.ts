import express from "express";
import cors from "cors";
import { errors } from "celebrate";
import helmet from "helmet";

import routes from "./routes";
import errorHandler from "./middlewares/error-handler";
import { requestLogger, errorLogger } from "./middlewares/logger";
import { env } from "./utils/constants";

const { PORT = 3001 } = env;

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(requestLogger);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, (err?: Error) => {
  if (err !== undefined) {
    console.error(err);
  } else {
    console.log(`App is listening to port ${PORT}...`);
  }
});
