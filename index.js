const http = require('http');
const url = require('url');

function handler(req, res) {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    });

    const {method} = req;

    if(method === 'POST') {
        console.log('Handling POST Request!');

        const {pathname} = url.parse(req.url);

        if(pathname === '/add') {

            var rawBody = "";
            req.on('data', chunk => {
                rawBody += chunk.toString();
            });
            req.on('end', () => {
                const {operandA,operandB} = JSON.parse(rawBody);
                const result = operandA + operandB;
                res.write(JSON.stringify({
                    result
                }));
                res.end();
            });

        }

    } else {
        res.end();
    }
}

http.createServer(handler).listen(8080);