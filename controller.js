const {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData,
     } = require('./model.js')
  
  
  async function handleGetAllData(req, res) {
    console.log('Middleware Controller')
    const contacts = await getAllData()
    return res.json(contacts)
  }

  async function handleGetByIdData(req, res) {
    const { id } = req.params
  
    const record = await getDataById(id)
  
 
    if (Object.keys(record).length === 0) {
      return res.status(404).json({
        message: 'Not found',
      })
    }
  
    return res.json(record)
  }

  async function handleCreateData(req, res) {
    const data = req.body
    console.log("data",data)
    const record = await createData(data)
  
    return res.json(record)
  }


  async function handleUpdateData(req, res) {
    const { id } = req.params
    const data = req.body
  
    const record = await updateData(id, data)
  
    if (Object.keys(record).length === 0) {
      return res.status(404).json({
        message: 'Not found',
      })
    }
  
    return res.json(record)
  }

  function handleDeleteData(req, res) {
    const { id } = req.params
    console.log(id)
  
    deleteData(id)
  
    return res.json({ message: 'Record deleted' })
  }



  
  
  
  module.exports = {
    handleGetAllData,
    handleGetByIdData,
    handleCreateData,
    handleUpdateData,
    handleDeleteData,
   
  }