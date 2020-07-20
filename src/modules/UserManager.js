const remoteURL = "http://localhost:5002"



export default {
    getUser: (id) => {
        return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
    },
	getAllUsers: () => {
		return fetch(`${remoteURL}/users`).then(result => result.json())
	},
	createUser: (newUser) => {

		console.log(newUser);
		return fetch(`${remoteURL}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newUser)
        })
        // .then(response => response.json())

	}

};
