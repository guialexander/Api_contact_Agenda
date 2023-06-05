const {PrismaClient}= require ('@prisma/client');
const prisma =new PrismaClient();

async function getAllData() {
  const contacts = await prisma.contact.findMany();
  return (contacts)
}

async function getDataById(id) {
    const record = await prisma.contact.findUnique({
        where:{
            id
        }
    })  
    return record
  }

  async function createData(data) {
    const record = await prisma.contact.create({
      data
    });
    return record;
  }

  async function updateData(id, data) {
 
  
    const record = await prisma.contact.update(
        {
            where: {id},
            data: { ...data}
           
        }
    )
  
    return record
  };


  async function deleteData(id) {
    const record = await prisma.contact.delete({
      where: { id }
    });
    return record;
  }


module.exports = {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData,

 }