var comp=require('./component')
var app=document.createElement('div')

document.body.appendChild(app)

app.appendChild(comp())
