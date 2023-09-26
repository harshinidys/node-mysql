// // index.js

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// const user = require("./schema")

// const port = 8000;
// app.use(bodyParser.json());

// //connecting the database
// const sequelize = new Sequelize(
//   'mydb',
//   'root',
//   'password',
//    {
//      host: 'localhost',
//      dialect: 'mysql'
//    }
//  );

// // user.sync({ force: true });
// Define your User model using the 'user' schema
// const User = sequelize.define('user', {
//   name: Sequelize.STRING,
//   email: Sequelize.STRING,
//   phonenumber: Sequelize.STRING
// });

// // Create a new user
// app.post("/", async (req, res) => {
//   try {
//     const name = req.body.name;
//     const email = req.body.email;
//     const phonenumber = req.body.phonenumber;

//     const saveUser = await user.create({
//       name,
//       email,
//       phonenumber,
//     });
//     console.log(saveUser.name);
//     await saveUser.save();
//     res.send('Data saved successfully');
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update the user
// app.put("updateUser/:uid", async (req, res) => {
//   try {
//     const uid = req.params.uid;
//     const user = await User.findByPk(uid);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     user.name = req.body.name;
//     user.email = req.body.email;
//     user.phonenumber = req.body.phonenumber;
//     await user.save();
//     res.send('Data Updated successfully');
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// //get all the details from the user
// app.get("/getusers", async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Delete a user
// app.delete("delete/:uid", async (req, res) => {
//   try {
//     const uid = req.params.uid;
//     const user = await User.findByPk(uid);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     await user.delete();
//     res.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });



// app.listen(port, () => {
//   console.log("My application was listerning on the port : ", port);
// });


const express= require('express');
const app= express();
const bodyParser = require('body-parser');  
const routes= require('./routes/userRoutes');
app.use(bodyParser.json()); 
// app.use(express.urlencoded({extended:true}))

const db = require('./connection/mysqlDatabase');

db.database.sync().then(() => {
  console.log("Synced db.");
}).catch((err) => {
  console.log("Failed to sync db: " + err.message);
});


app.use('/user',routes);
app.use(express.json());

const PORT = 7001;

app.listen(PORT,()=>{
    console.log(`Port connected to ${PORT}`);
})


module.exports=app

