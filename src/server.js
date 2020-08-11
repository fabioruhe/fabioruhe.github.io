const proffys = [
    {
        name: "Diego Fernandes", avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "19999666364", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20", 
        weekday:[0] , 
        time_from:[720], 
        time_to:[1220]
    },
    {
    name: "Fabio ", avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "1999999999", 
        bio: "Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Matematica",
        cost: "45", 
        weekday:[0] , 
        time_from:[720], 
        time_to:[1220]
    }
]

const subjects = [
    
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [

    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function pageLanding(req,res){
    return res.render("index.html")
}

function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html",{proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req,res){
    const data = req.query

    //Variavel que recebe data e informa se é vazio ou não
    const isNotEmpty = Object.keys(data).length > 0 
    //se tiver data adicione
    if (isNotEmpty){
        proffys.push(data);

        //redirecionamento para pagina study
        return res.redirect("/study")
    }
    //adicionar data a lista proffys
    
    return res.render("give-classes.html",{weekdays, subjects})
}

//Servidor
const  express = require('express')
const server = express()


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache:true,
})

//Inicio e config do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//Start no servidor
.listen(5500)

