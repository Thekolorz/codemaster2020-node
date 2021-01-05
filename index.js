const Express = require('express');
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.post("/add", (req, res) => {
    let operation = req.body;
    res.send((operation.operandA + operation.operandB).toString());
    res.status(201)
})

app.post("/divide", (req, res) => {
    let operation = req.body;
    res.send((operation.operandA / operation.operandB).toString());
    res.status(201)
})

app.post("/multiply", (req, res) => {
    let operation = req.body;
    res.send((operation.operandA * operation.operandB).toString());
    res.status(201)
})

app.listen(8080, () => { });