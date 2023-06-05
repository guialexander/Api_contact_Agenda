const express= require('express');
const cors   = require('cors');
const morgan = require('morgan');

const {
    handleGetAllData,
    handleGetByIdData,
    handleCreateData,
    handleUpdateData,
    handleDeleteData,
 } = require('./controller')
  

const app = express();
app.use(cors())
// Middleware -> Función que se ejecuta antes de que llegue a la ruta -> Body parser
app.use(express.json());
app.use(morgan('dev'))

// RUTAS
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
  })
  
  // GET -> /contact
  app.get('/api/contacts', handleGetAllData)
   
  // GET -> /contact/
  app.get('/api/contacts/:id', handleGetByIdData)
   
  // POST -> /contact
  app.post('/api/contacts', handleCreateData)
 
  
  // patch -> /contact/id
  app.patch('/api/contacts/:id', handleUpdateData)
   
  
  // DELETE -> /contact/id
  app.delete('/api/contacts/:id', handleDeleteData)


const PORT =process.env.PORT ?? 8080;

app.listen(PORT,()=>{
    console.log(`Server Startes on Port ${PORT}`)
});

