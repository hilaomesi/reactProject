import axios from 'axios';

// //יצירת עסק
//יצירת עסק
export const createBusiness = async(business, userId) => {
    return await axios.post(`http://localhost:3000/business`, {
        business,
        userId
    });
}

// //עדכון עסק
// export const updateBusiness = (id,business) => {
//     return axios.put(`http://localhost:3000/business/${id}`, {
//         business
//     });
// }

// export const  getManager = async (userId) => {
//     return await axios.get(`http://localhost:3000/business/${userId}`);
// }