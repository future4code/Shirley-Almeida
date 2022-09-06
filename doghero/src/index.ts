import { app } from "./server";

import { dogRouters } from "./routers/dogRouters";

app.use("/dogs", dogRouters);