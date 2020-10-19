const express = require ('express')
const expressHandlebars = require('express-handlebars')

const app = express()

//configura o view engine Handlebars
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

const port = process.env.port || 3000

const fortunes = [
    'Vença seus medos ou eles o conquistarão.',
    'Rios precisam de primavera.',
    "Não tema o que você não conhece.",
    "Você terá uma surpresa agradável.",
    "Sempre que possível, mantenha-o simples."
]

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    
    console.log(randomFortune)

    res.render('about', { fortune: randomFortune })
})

//pagina 404 personalizada
app.use((req, res) => {

    res.type('text/plain')
        .status(404)
        .render('404')

})

//pagina 500 personalizada
app.use((err, req, res, next) => {
    console.log(err.message)
    
    res.type('text/plain')
        .status(500)
        .render('500')
    
})

app.listen(port, () => console.log(
    `Express iniciado em http://localost:${port} `
))

