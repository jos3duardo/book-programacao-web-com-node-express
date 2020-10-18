const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000


function serverStaticFiles(res, path, contentType, responseCode = 200){
    fs.readFile( __dirname + path, (err, data) => {
        if(err){
            res.writeHead(500, { 'Content-type': 'text/plain' })
            return res.end('500 - Internal Error')
        }
        res.writeHead(responseCode, { 'Content-type': contentType })
        res.end(data)
    })
}

const server = http.createServer((req,res) => {

    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

    switch(path) {
        case '':
            serverStaticFiles(res, '/public/home.html', 'text/html')
            break
        case '/about':
            serverStaticFiles(res, '/public/about.html', 'text/html')
            break
        case '/img/logo.png':
            serverStaticFiles(res, '/public/img/logo.png', 'image/png')
            break
        default:
            serverStaticFiles(res, '/public/404.html', 'text/html')
            break
    }
})

server.listen(port, () =>{
    console.log(`servidor iniciado na porta ${port}`)
})