// import mongoose from "mongoose";
import config from "./config";
import app from "./app";


async function main() {
    try {
        // await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
            console.log(`love ayaka on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}
main();