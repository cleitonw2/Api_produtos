import { app } from "./app";

app.listen(3002 || process.env.PORT, () => {
    console.log("server is running");
});