require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
      //Método para conectar ao BD
        await mongoose.connect(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASS}@cluster0.ti1umfn.mongodb.net/?retryWrites=true&w=majority`, {
        //Essa opção informa ao Mongoose para usar o novo analisador de URL do MongoDB.
          useNewUrlParser: true,
        //Essa opção informa ao Mongoose para usar a nova camada de topo unificada do MongoDB.
          useUnifiedTopology: true,
      });
      console.log('Conexão com o MongoDB Atlas estabelecida com sucesso!');
    } catch (err) {
      console.error('Erro ao conectar ao MongoDB Atlas:', err);
    }
  };


connectDB()

//MODELS
  //Definindo o model USUARIOS
    const userSchema = mongoose.Schema({
      nome:{
        type: String,
        require: true
      },
      sobrenome: {
        type: String,
        require: true
      },
      email: {
        type: String,
        require: true
      },
      idade:{
        type: Number,
        require: true
      }
    })


//Cria o novo model

  const Lucca = mongoose.model('Usuario', userSchema)

  new Lucca({
    nome: 'Lucca',
    sobrenome:'Lopes',
    email:'lucca@gmail.com',
    idade:21
  }).save().then(()=>{
    console.log('Usuario criado com sucesso');
  }).catch((err)=>{
    console.log('Erro ao registrar o usuario: '+ err);
  })