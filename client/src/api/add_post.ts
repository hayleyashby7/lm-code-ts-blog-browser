import { baseUrl } from "./base_url";

export async function add_new_post(
	title: string,
	text: string,
	author: string
) {
	try {
		const result = await fetch(baseUrl + "/api/posts/add/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ title: title, text: text, author: author }),
		});

		const post = await result.json();
		return post;
	} catch (e) {
		console.error(e);
		return false;
	}
}
