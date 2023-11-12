import express from 'express';

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next();
}

const handleHome = (req, res) => {
    return res.send("<h1>I understand your request!😄</h1>");
}
const handleLogin = (req, res) => {
    return res.send({message: "Login here."})
}

app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);