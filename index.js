const express = require('express')
const app = express()
const PORT = 3000

const db = require("./db")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//ENDPOINT GET/USERS
app.get("/users", async(req, res) => {
    try {
        const users = await db("users").select('*')

        //console.log(users, "--> INI USERS");
        return res.status(200).json({ data: users });

    } catch (error) {
        console.log(error, "---> ERROR");
    }
})

//ENDPOINT GET/USERS BY ID/LOGIN
app.get('/login', async (req, res) => {
    const {id} = req.params;
    const users = await db('users').select('*')
    .where({
        id:id,
    }).first();

    return res.json({data: users});
})


//ENDPOINT POST/USERS BY ID/register
app.post('/register', async (req, res) => {
    const {name, phoneNumber, email, password } = req.body;
    const users = await db('users').insert({
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
    })
    .returning([id]);

    return res.json({
        message: "USER BERHASIL DIBUAT",
        data: { id: users[0].id, name:name, phoneNumber: phoneNumber, email:email, password:password },
    });
});


//ENDPOINT PUT/USERS
app.put('/users/:id', async (req, res) => {
    const {id} = req.params;
    const {name, phoneNumber, email, password} = req.body;
    await db('users')
    .where({
        id: id, 
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
    });

    return res.json({
        message: "DATA TELAH DIUBAH",
        data: { id:id, name:name, phoneNumber:phoneNumber, email:email, password:password},
    })
})


//ENDPOINT DELETE/USERS:ID
app.delete('/deleteuser', async (req, res) => {
    const {id} = req.params;

    await db('users')
    .where({
        id: id,
    }).del();

    return res.json({ message: "USER BERHASIL DIHAPUS"});
})


app.get("/hello" , (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log('Listening on port 3000');
})