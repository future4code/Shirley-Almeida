import { app } from "./server";

import { userRouters } from "./routers/userRouters";
import { paymentRouters} from "./routers/paymentRouters"


app.use("/user", userRouters)

app.use('/payment', paymentRouters)
