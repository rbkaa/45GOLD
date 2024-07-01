const db = require("../db")

class UserController {
    //to get all users
    static async getAllUser (req, res) {
        try {
            const users = await db("users").select('*')
            //console.log(users, "--> INI USERS");
            
            return res.status(200).json({ data: users });
            //console.log("INI DI CONTROLLER");
        
        } catch (error) {
            console.log(error, "---> INI ERROR");
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async postLogin (req, res) {
        try {
            const {phoneNumber, password} = req.body
            console.log(phoneNumber, password);

            const phone = await db('users').select('*').where({
                phoneNumber: phoneNumber
            });

            // const newLog = async()=> {
            //     try{
            //         const nameLog = await db('users').select('*');
            //         return db;
            //     } catch (err) {
            //         console.log(error, " ---> INI ERROR ");
            //     }
            // }
            // const displayLog = await newLog();

            if(phone) {
                const validatePassword = phone[0].password
                console.log(validatePassword);

                if (validatePassword === password) {
                    console.log("BERHASIL LOG IN");
                    
                    const userJson = JSON.stringify({ name: phone.name });
                    res.redirect(`/home?user=${encodeURIComponent(userJson)}`);;

                } else {
                    console.log("USERNAME OR PASSWORD INVALID");
                    res.send("Username or Password Invalid") 
                }

            } else {

                console.log("Akun Tidak Ditemukan");
                res.send("Akun Tidak Ditemukan")
            }

        } catch (error) {
            
            console.log(error, "---> INI ERROR")
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async registerUser (req, res) {
        try {
            const {name, phoneNumber, email, password } = req.body;
            const newUsers = await db('users').insert({
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                password: password,
            })
        
            .returning(['id']);

            return res.json({
                message: "USER BERHASIL DIBUAT",
                data: { id: newUsers[0].id, name:name, phoneNumber: phoneNumber, email:email, password:password },
            })

        } catch (error) {
            console.log(error, "---> INI ERROR")
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    static async putUpdateUser (req, res) {
        try {
            const idParams = +req.params.id
            console.log(idParams, "INI ID PARAMS")

            const {name, phoneNumber, email, password, role} = req.body;

            // //  // Ensure id is parsed as an integer
            // const parsedId = parseInt(id, 10);
            // console.log(parsedId);

            // // // Check if parsedId is a valid number
            // if (isNaN(parsedId)) {
            // return res.status(400).json({ error: 'Invalid user ID' });
            // }
            
            const dataUser = await db ('users').where ({id: idParams}).update ({
                name,
                phoneNumber,
                email,
                password,
            });

            res.status(200).json(dataUser)

            // return res.json({
            //     message : "DATA BERHASIL DIUBAH",
            //     data: { id:idParams, name:name, phoneNumber:phoneNumber, email:email, password:password}
            // })
        
        } catch (error) {
            console.log(error, "---> INI ERROR")
            return res.status(500).json({ error: 'Internal Server Error' });
        }

    }    

    static async deleteUser (req, res) {
        try {
            const idParams = +req.params.id
            console.log(idParams, "INI ID PARAMS")
        
            const deleteUsernow =  await db('users').where ({ id:idParams }).del('*');
            res.status(201).json(deleteUsernow);

            //return res.json({ message: "USER BERHASIL DIHAPUS"})
        } catch (error) {
            console.log(error, "---> INI ERROR")
            return res.status(500).json({ error: 'Internal Server Error' });
        } 
    }
    
    // static async renderHomepage (req, res) {
    //     res.render("views/home", {error : null});
    // }
}

module.exports = UserController;