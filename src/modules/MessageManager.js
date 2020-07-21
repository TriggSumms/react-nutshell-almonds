//Messages dabbled with by Trigg Summs

const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/messages/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/messages`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/messages/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newMessage) {
        return fetch(`${remoteURL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(data => data.json())
    },
    update(editedMessage) {
        return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedMessage)
        }).then(data => data.json());
    },
    FriendWithMessage(id, userId) {
            return fetch(`${remoteURL}/messages/${id}?userId===${userId}`, {
                
            }).then(result => result.json());
        
    }
}