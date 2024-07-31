require('./config/dotenv')
require('express-async-errors')
const express = require('express');

const { initDatabase} = require('./config/db')
const experienciasRoute = require('./routes/experienciasRoute')
const port = process.env.APP_PORT || 5000;
const portfolioRouter = require('./routes/portfolioRout')
const informacoesRouter = require('./routes/informacoesRout')
const authRouter = require('./routes/authRout')
const cors = require('cors')

const app = express();
initDatabase();
app.use(express.json())
app.use(cors())

app._router.get('/',(req, res) => {
    res.send("Hello world!");
})
app.use('/api/experiencias', experienciasRoute)
app.use('/api/portfolio', portfolioRouter)
app.use('/api/informacoes',informacoesRouter)
app.use('/api/auth',authRouter)

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(5000).send({"erro":err.message});

})

app.listen(port, () => {
    console.log(`Servidor rodando na Porta ${port}`);
});