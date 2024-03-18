
import React, { useState, useEffect, useContext } from 'react';
import { getAllMeetings, deleteMeeting, updateMeeting } from '../../api/meeting.api';
import { ManagerContext } from '../../context/manager.context'
import { services } from '../../data/services';

export const Meet = () => {

  const manager = useContext(ManagerContext)

  const [meetings, setMeetings] = useState(null);

  // useEffect(() => {
  //   getAllMeetings("e1f80d42-0fb4-46eb-8b15-636bcf8dce79").then(response => {
  //     setMeetings(response.data);
  //   }).catch(error => {
  //     console.error("Error fetching meetings:", error);
  //   });
  // }, []);

  const AllMeetings = () => {
    getAllMeetings("e1f80d42-0fb4-46eb-8b15-636bcf8dce79").then(response => {
      setMeetings(response.data);
    }).catch(error => {
      console.error(error);
    });
  };

  const DeleteMeeting = (id) => {
    deleteMeeting(id).then(() => {
      setMeetings(meetings.filter(meeting => meeting.id !== id));
    }).catch(error => {
      console.error(error);
    });
  };

  const [update, setUpdate] = useState(false);

  const sortMeetingsByDate = () => {
    const sortedMeetings = [...meetings].sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
    setMeetings(sortedMeetings);
  };

  const sortMeetingsByClientName = () => {
    const sortedMeetings = [...meetings].sort((a, b) => a.name.localeCompare(b.name));
    setMeetings(sortedMeetings);
  };
  const [showServices, setShowServices] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [meetings1, setMeetings1] = useState([]);

  const serviceSelection = (service) => {
    setSelectedService(service);
  };

  const saveData = async (id,name1, event) => {
    event.preventDefault();
    console.log(id)
      const name = event.target.name.value;
    const phone = event.target.phone.value;
    const typeService = selectedService ? selectedService.type : event.target.key.value;
    const start_time = new Date(event.target.startTime.value).toISOString();
    const mail = event.target.mail.value;
    const note = event.target.notice.value;

    // if (event.target.name.value != null) {
    //   const name = event.target.name.value;
    // }
    // else (
    //   b_name = false
    // )
    // if (event.target.phone.value != null) {
    //   const phone = event.target.phone.value;
    // }
    // if (selectedService ? selectedService.type : event.target.key.value != null) {
    //   const typeService = selectedService ? selectedService.type : event.target.key.value;
    // }
    // if (new Date(event.target.startTime.value).toISOString() != null) {
    //   const start_time = new Date(event.target.startTime.value).toISOString();
    // }
    // if (event.target.mail.value != null) {
    //   const mail = event.target.mail.value;

    // }
    // if (event.target.notice.value != null) {
    //   const note = event.target.notice.value;
    // }

    const meetings_time = meetings1.some(meeting1 => {
      const meetingStartTime = new Date(meeting1.start_time).toISOString();
      return meetingStartTime === start_time;
    });

  
    if (meetings_time) {
      alert("The time is busy, please choose another time");
    } else {


      const newMeeting = {
        name: name,
        phone: phone,
        typeService: typeService,
        start_time: start_time,
        mail: mail,
        note: note
      };
      console.log(newMeeting)
      await updateMeeting(id, newMeeting);
      alert("Session updated successfully");
      // AllMeetings();
      setMeetings(meetings.map(meeting => (meeting.id === id ? newMeeting : meeting)));
    }
  };


  return (
    <div>
      <>
        {manager[0] && <div>
          {meetings ? (
            <div>
              <button onClick={sortMeetingsByDate}>Sort by date </button>
              <button onClick={sortMeetingsByClientName}>Sort by customer name</button>
              <ul>
                {meetings.map(meeting => (
                  <li key={meeting.id}>
                    {meeting.name} - {meeting.start_time}-{meeting.Note}
                    <button onClick={() => DeleteMeeting(meeting.id)}>delete</button>
                    {update ? (
                      <div>
                        <form onSubmit={(event) => saveData(meeting.id, event)}>
                          <div>
                            <label htmlFor="name" defaultValue={meeting.name}>Enter your name</label>
                            <input type="text" id="name" name="name" />
                          </div>
                          <div>
                            
                            <label htmlFor="phone">Enter your phone number</label>
                            <input type="text" id="phone" name="phone" />
                          </div>
                          {showServices ? (
                            <div>
                              <ul>
                                {services.map((service) => (
                                  <li key={service.type} onClick={() => serviceSelection(service)}>
                                    <input type="radio" id="service" name="service" />
                                    <label htmlFor="service">{service.type}- </label>
                                    {service.description}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <div>
                              <button onClick={() => setShowServices(true)}>Choose a service type</button>
                            </div>
                          )}
                          <div>
                            <label htmlFor="startTime">Enter date and start time</label>
                            <input type="datetime-local" id="startTime" name="startTime" />
                          </div>
                          <div>
                            <label htmlFor="mail">email</label>
                            <input type="mail" id="mail" name="mail" />
                          </div>
                          <div>
                            <label htmlFor="notice">Write a Note to the business owner</label>
                            <input type="text" id="notice" name="notice" />
                          </div>
                          <button onClick={() => saveData(meeting.id)}>Update</button>

                        </form>

                        <button onClick={() => setUpdate(false)}>close</button>

                      </div>
                    ) : (
                      <div>
                        <button onClick={() => setUpdate(true)}>update</button>
                      </div>
                    )}

                  </li>
                ))}
              </ul>
              <button onClick={() => setMeetings(null)}>close</button>
            </div>
          ) : (
            <div>
              <button onClick={AllMeetings}>To display all meetings</button>
            </div>
          )}
        </div>}
        {!manager[0] && <div>You are not allowed to access this page!!!!</div>}
      </>
    </div>
  );
};




