import { baseUrl } from "./base_url";

export async function fetchUser(id: string) {
	try {
		const result = await fetch(baseUrl + "/api/users/" + id);
		const user = await result.json();
		return user;
	} catch {
		return [];
	}
}
