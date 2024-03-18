// import React, { useReducer, useState } from 'react';
// import { Outlet, Link } from "react-router-dom";
// import { getMeeting, getAllMeetings ,createMeeting, deleteMeeting, updateMeeting } from '../api/meeting.api';
// import { loadMeeting } from '../context/meeting.context';


// const AddMeeting = ({ add }) => {
//     const [newMeeting , setNewMeeting ] = useState('');

//     const addMeeting  = (e) => {
//         e.preventDefault();
//         add(newMeeting );
//     }

//     return <form onSubmit={(e) => addCategory(e)}>
//         <label>new Meeting:</label> <input type="text" value={newMeeting} onChange={e => setNewMeeting (e.target.value)}/> <br />
//         <button>Add</button>
//     </form>
// }


// export const Categories = () => {
//     const {categories, dispatch, loadMeeting } = useCategories();
//    // const [canAdd, setCanAdd] = useState(false);

//     const addMeeting  = async (Meeting) => {
//         await createMeeting (Meeting);
//         setCanAdd(false);
//         await loadMeeting();
//     }

//     const removeMeeting  = async (Meeting ) => {
//         await deleteMeeting (Meeting.id);
//         await loadMeeting();
//     }

//     const editMeeting = (category) => {
//         dispatch({
//             type: 'edit',
//             id: category.id,
//         });
//     } 

//     const saveMeeting = async (category, newValue) => {
//         await updateCategory(category.id, newValue);
//         loadMeeting();
//     } 