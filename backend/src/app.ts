import { config } from "dotenv";
import express from "express";

config();

// import cors from "cors";
// import { errors } from "celebrate";
// import openai from "./routes/openai";
// import helmet from "helmet";

// import errorHandler from "./middlewares/error-handler";
// import { requestLogger, errorLogger } from "./middlewares/logger";

const { PORT = 3000 } = process.env;

const app = express();

//app.use(cors());
// app.use(helmet());
// app.use(express.json());
// app.use(requestLogger);
// app.use(openai);
// app.use(errorLogger);
// app.use(errors());
// app.use(errorHandler);

app.listen(PORT, (err?: Error) => {
  if (err !== undefined) {
    console.error(err);
  } else {
    console.log(`App is listening to port ${PORT}...`);
  }
});
