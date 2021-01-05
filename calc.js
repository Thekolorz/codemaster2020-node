const Express = require('express');
const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.post("/add", (req, res) => {
    let operation = req.body;
    res.status(201);
    res.send((operation.operandA + operation.operandB).toString())
});
app.listen(8080, () => {});