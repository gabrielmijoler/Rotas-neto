const http = require('http')
const servidor = require('./config/aplicativo.js')

http.createServer(servidor).listen(servidor.get('porta'), function(){
    console.log('\nServidor Executando na Porta' + server.get('porta'))
})
