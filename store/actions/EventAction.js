import Event from '../../models/Events';

export const FETCH_EVENTS = 'FETCH_EVENTS';

export const fetchEvents = () => {
    return async(dispatch, getState) => { // redux thunk
        const token = getState().user.token; // accessing token in the state.
        
        const response = await fetch('https://kvaliapp-184d1-default-rtdb.europe-west1.firebasedatabase.app/events.jso' +
                'n?auth=' + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json(); // json to javascript
        console.log(data);

        let events = [];
        for (const key in data) {

            events.push(new Event(key, data[key].eventName, data[key].imageUrl, data[key].eventType, data[key].eventTime, data[key].eventLocation));
        }

        if (!response.ok) {
            //There was a problem..
        } else {
            // do something?
            dispatch({type: FETCH_EVENTS, payload: events})
        }
    };
};