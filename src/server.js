import express from 'express';
import morgan from 'morgan';

const PORT = 4000;

const app = express();

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome)

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User")

userRouter.get("/edit", handleEditUser)

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo)

const handleLogin = (req, res) => {
    return res.send({message: "Login here."})
}


app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


app.use(morgan("dev"));
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);