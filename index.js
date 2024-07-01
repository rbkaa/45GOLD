const express = require('express')
const app = express()
const PORT = 3000
const userRoutes = require("./routes/userRoutes")
const db = require("./db")
//const { name } = require('ejs')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'ejs');
app.use(express.static("public"));

// app.get("/home", (req, res) => {
//     res.render('home');
// })

app.get("/home", (req, res) => {
    const user = req.query.user ? JSON.parse(req.query.user) : null;
    res.render('home', { user });
})

// app.get("/home?user", (req, res) => {
//     const phone = req.query.user ? JSON.parse(req.query.user) : null;
//     res.render('userhome', {phone});
// })

app.get("/userlogin", (req, res) => {
    res.render("login");
})

app.get("/userregister", (req, res) => {
    res.render("register");
})

app.get("/logout", (req, res) => {
    res.redirect("/home");
})

app.use("/", userRoutes)
app.use("/login", userRoutes)
app.use("/register", userRoutes)
app.use("/users/:id", userRoutes)
app.use("/deleteuser/:id", userRoutes)

//ENDPOINT GET/USERS
// app.get("/users", async(req, res) => {
//     try {
//         const users = await db("users").select('*')

//         //console.log(users, "--> INI USERS");
//         return res.status(200).json({ data: users });

//     } catch (error) {
//         console.log(error, "---> ERROR");
//     }
// });

//ENDPOINT POST/USERS BY ID/LOGIN
// app.post('/login', async (req, res) => {
//     try {
//         const {name, password} = req.body
//         console.log(name, password);

//         const users = await db('users').select('*').where({
//             name: name
//         })
//         console.log(users, "--> INI USERS");
        
//         if (users) {
//             const passwordUSer = await db('users').select('password').where ({
//                 password
//             })
//             console.log(passwordUSer, " --> PASSWORD");
        
//             if (passwordUSer === password) {
//             res.render("home");
//             } else { 
//             res.send("wrong password");
//             }
//         }

        // const {id} = req.params;
        // const users = await db('users').select('*').where({
        //     id: id
        // }).first();
        // console.log("--> INI USERS");
        // return res.json({data: users});

//     } catch (error) {
//         res.send("wrong details")
//         console.log(error, "---> ERROR");
//     }
// });


// //ENDPOINT POST/USERS BY ID/register
// app.post('/register', async (req, res) => {
//     const {name, phoneNumber, email, password } = req.body;
//     const users = await db('users').insert({
//         name: name,
//         phoneNumber: phoneNumber,
//         email: email,
//         password: password,
//     })
//     .returning([id]);

//     return res.json({
//         message: "USER BERHASIL DIBUAT",
//         data: { id: users[0].id, name:name, phoneNumber: phoneNumber, email:email, password:password },
//     });
// });


// //ENDPOINT PUT/CHANGE DATA
// app.put('/users/:id', async (req, res) => {
//     const {id} = req.params;
//     const {name, phoneNumber, email, password} = req.body;
//     await db('users')
//     .where({
//         id: id, 
//         name: name,
//         phoneNumber: phoneNumber,
//         email: email,
//         password: password,
//     });

//     return res.json({
//         message: "DATA HAS BEEN CHANGED",
//         data: { id:id, name:name, phoneNumber:phoneNumber, email:email, password:password},
//     })
// });


// //ENDPOINT DELETE/USERS:ID
// app.delete('/deleteuser', async (req, res) => {
//     const {id} = req.params;

//     await db('users')
//     .where({
//         id: id,
//     }).del();

//     return res.json({ message: "USER BERHASIL DIHAPUS"});
// })


app.get("/hello" , (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log('Listening on port 3000');
})