class ChatRoom {

    constructor(private chatRoomId: string, public imageUrl: string, private chatRoomName: string, public messages: any[]) {

        this.chatRoomId = chatRoomId;
        this.imageUrl = imageUrl;
        this.chatRoomName = chatRoomName;
        this.messages = messages;
    }
}

export default ChatRoom;