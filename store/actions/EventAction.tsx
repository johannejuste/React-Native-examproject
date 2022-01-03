import { event } from 'react-native-reanimated';
import Event from '../../models/Events';
import UserGoingInterested from '../../models/UserGoingInterested';


export const FETCH_EVENTS = 'FETCH_EVENTS';
export const NEW_USER_GOING = 'NEW_USER_GOING';

export const fetchEvents = () => {
    return async (dispatch: any, getState: any) => { // redux thunk
        const token = getState().user.token;

        const response = await fetch('https://kvaliapp-184d1-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=' + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json(); // json to javascript
        console.log('HER', data);

        let events = [];
        for (const key in data) {
            let goingUsers = [];
            for (const key2 in data[key].goingUsers) {
                let eventUser = data[key].goingUsers[key2];
                goingUsers.push(new UserGoingInterested(eventUser.email, eventUser.goingInterestedStatus));
            }

            events.push(new Event(key, data[key].eventName, data[key].imageUrl, data[key].eventType, data[key].eventTime, data[key].eventLocation, data[key].goingUsers
                ? goingUsers
                : []));
        }

        if (!response.ok) {
            //There was a problem..
        } else {
            // do something?

            dispatch({ type: FETCH_EVENTS, payload: events })
        }
    };
};

export const updateGoingUser = (eventId: any, user: any, userGoing: any) => {
    // console.log(eventId, user.id)

    return async (dispatch: any, getState: any) => { // redux thunk         
        const token = getState().user.token;

        const responseUserGoing = await fetch('https://kvaliapp-184d1-default-rtdb.europe-west1.firebasedatabase.app/events/' + eventId + '/goingUsers/' + user.id + '.json?auth=' + token, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...userGoing // adds goingUser to backed

            })
        });

        const dataUserGoing = await responseUserGoing.json(); // json to javascript         
        // console.log(dataUserGoing);

        if (!responseUserGoing.ok) {
            //There was a problem.. console.log(response);
        } else {
            console.log('goingUserAdded');
            console.log(userGoing);
            //updates the store
            dispatch({
                type: NEW_USER_GOING, payload: { eventId, goingUserObj: userGoing, userEmail: user.email }
            })
        }
    };

};