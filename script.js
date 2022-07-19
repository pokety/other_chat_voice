const app=require('express')()
const path=require('path')
const server=require('http').createServer(app)
const io=require('socket.io')(server);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname +'/index.html'))
})
app.get('/client',(req,res)=>{
    res.sendFile(path.join(__dirname +'/client.html'))
})
io.on('connection',(socket)=>{
    console.log('usuario '+ socket.id +' conectado')

    socket.on('enviar',(data)=>{
        console.log(data)
        socket.broadcast.emit('broad',data)
    })
})

server.listen(3000,console.log('rodando na porta 3000'))