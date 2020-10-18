const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {

    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

    switch(path) {
        case '':
            res.writeHead(200, { 'Content-type': 'text/plain' })
            res.end('Homepage')
            break
        case '/about':
            res.writeHead(200, { 'Content-type': 'text/plain' })
            res.end('About')
            break
        default:
            res.writeHead(200, { 'Content-type': 'text/plain' })
            res.end('Not found')
            break
    }
})

server.listen(port, () =>{
    console.log(`servidor iniciado na porta ${port}`)
})