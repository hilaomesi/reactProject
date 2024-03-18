 import axios from 'axios';


// Sign in user
export const SigninUser =  (password) => {
   return  axios.get(`http://localhost:3000/user/${password}`);

};

// Create a new user
export const createUser = async (newuser) => {
    const res= await axios.post('http://localhost:3000/user', {
        user: newuser
    });
    console.log(res.status);
    return res;
};


// // עדכון
// export const updateUser = (id,user) => {
//     return axios.put(`http://localhost:3000/user/${id}`, {
//         user,
//     });
// }





