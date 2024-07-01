// loginuser = async (req, res) => {

//     try { 
//         const { email, password } = req.body;
//         const newUser = {
//             email, 
//             password
//         }
//         //console.log(newUser, "== inilogin USer")


//         const users = await findUserByEmail(email);
//         console.log(users, "---> cek user by email");

//         const getAllproduct = async()=> {
//             try{
//                 const dbKnex = await knex('product').select('*');
//                 return dbKnex;
//             } catch (err)  {
//                 console.log(err,"ini catch");
//             }
//         }
//         const getProduct = await getAllproduct();


//         console.log(getProduct, " --->cek fetch product berhasil")

//         if(users) {
//             const validatePassword = users[0].password
//             console.log(validatePassword);

//             if (validatePassword === password) {
//                 console.log("BERHASIL LOG IN");
//                 res.redirect("/home");
//                 //res.render("/home", {getProduct});

//             } else {
//                 console.log("USERNAME OR PASSWORD INVALID");
//                 res.send("Username or Password Invalid") 
//             }

//         } else {

//             console.log("Akun Tidak Ditemukan");
//             res.send("Akun Tidak Ditemukan")
//         }

//     } catch (error) {
        
//         console.log(error, "---> INI ERROR")
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

//     }
//     }

