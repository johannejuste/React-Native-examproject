import Event from "../../models/Events";
import { FETCH_EVENTS} from "../actions/EventAction";
import { NEW_USER_GOING} from "../actions/EventAction";

const initialState = {
    events: [] // new array
};

const EventReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case FETCH_EVENTS: 
            return {...state, events: action.payload };
            
        case NEW_USER_GOING:
        // Find the event object based on eventId.    
        // Copy goingUsers array of the right event object
        // Copy events to avoid state mutations when updating the goingUsers array in the 
        // specific event object.
        const event = state.events.find(singleEvent => singleEvent.eventId === action.payload.eventId);
        // const useremail = action.payload.userEmail;
        // const eventuser = event.goingUsers.find(userofevent => userofevent.email === useremail);

        //!!OBS Now it adds the goingUser instead og updating the existing user.. needs to be fixed!
        const eventUsersGoing = [...event.goingUsers, action.payload.goingUserObj];
            
        // 2: Copy event object and attach new event array that you copied.
        const newEvent = { ...event };
        newEvent.goingUsers = eventUsersGoing;
    
        //3: Insert the new event object into the array of events
        // Hint: use js-array's findIndex function, to find the index in the array of the object we want.
        // js Splice method to create a new array and insert the created event object.
        const index = state.events.findIndex(singleEvent => singleEvent.eventId === action.payload.eventId);
        const eventArray = [...state.events];
        eventArray.splice(index, 1, newEvent);
    
        return { ...state, events: eventArray };

    default:
        return state;
    }
}

export default EventReducer;