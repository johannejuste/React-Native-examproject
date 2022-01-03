class Event {
    constructor(eventId, eventName, imageUrl, eventType, eventTime, eventLocation, goingUsers) {
        this.eventId = eventId;
        this.imageUrl = imageUrl;
        this.eventName = eventName;
        this.eventType = eventType;
        this.eventTime = eventTime;
        this.eventLocation = eventLocation;
        this.goingUsers = goingUsers
        // this.interestedUsers = interestedUsers
    }
}

export default Event;