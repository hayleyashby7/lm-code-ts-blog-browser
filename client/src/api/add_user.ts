import { baseUrl } from "./base_url";

export async function add_new_user(name: string) {
	try {
		const result = await fetch(baseUrl + "/api/users/add/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ message: name }),
		});

		const user = await result.json();
		return user;
	} catch (e) {
		console.error(e);
		return false;
	}
}
