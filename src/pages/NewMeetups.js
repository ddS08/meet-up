import { useHistory } from "react-router-dom/cjs/react-router-dom";
import NewMeetupForm from "../components/layouts/meetups/NewMeetupForm";

function NewMeetupsPage(){
    const history=useHistory();
    function addMeetupHandler(meetupData){
        fetch(
            'https://react-1f4b5-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }     
        ).then(()=>{
            history.replace('/');
        }); 

    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}
export default NewMeetupsPage;