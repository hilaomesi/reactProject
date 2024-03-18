// // import React, { useState } from 'react';
// // // import { updateMeeting } from '../../api/meeting.api';
// // // import { Link } from 'react-router-dom';

// // export const update = () => {
// //     // const [name, setName] = useState('');
// //     // const [startTime, setStartTime] = useState('');
// //     // const [note, setNote] = useState('');

// //     const handleUpdate = () => {
// //         const updatedMeeting1 = {
// //             name: name,
// //             start_time: startTime,
// //             note: note
// //         };

// //     //     updateMeeting(meetingId, updatedMeeting).then(() => {
// //     //         onSuccess();
// //     //     }).catch(error => {
// //     //         console.error("Error updating meeting:", error);
// //     //     });
// //     // };

// //     return (
// //         <div>
// //             <h1>Update Meeting</h1>
// //             <label htmlFor="name">Name:</label>
// //             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
// //             <label htmlFor="startTime">Start Time:</label>
// //             <input type="datetime-local" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
// //             <label htmlFor="note">Note:</label>
// //             <input type="text" id="note" value={note} onChange={(e) => setNote(e.target.value)} />
// //             <button onClick={handleUpdate}>Update</button>
// //             <Link to="/">Back to Meeting Management</Link>
// //         </div>
// //     );
// // };}

// import React, { useState } from 'react';

// export const update = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     lastName: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
        
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
        
//         <label>Last Name:</label>
//         <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default update;