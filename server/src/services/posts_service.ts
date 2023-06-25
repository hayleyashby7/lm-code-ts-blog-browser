import { Post } from "../types/posts.types";
import { addUser, getUserByID, userNameExists } from "./users_service";

// I would ideally have preferred to store the ID of the user and then do table lookups when retrieving posts
// but for this assignment the local storage here will suffice
const posts: Post[] = [
	{
		id: "1",
		title: "The Best Day of My Life",
		text: "I went to the zoo and I saw a giraffe! It was very big.",
		author: getUserByID("1"),
	},
	{
		id: "2",
		title: "Minutes of Our Recent Meeting",
		text: "Incentivize adoption exposing new ways to evolve our design language criticality . Can we align on lunch orders please advise soonest, for strategic staircase, so show pony, but run it up the flagpole. Big picture we have to leverage up the messaging, but proceduralize fast track , nor technologically savvy, can you put it on my calendar?. Paddle on both sides. High-level our competitors are jumping the shark, and today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud turn the crank, canatics exploratory investigation data masking, so root-and-branch review. Quick win we want to empower the team with the right tools and guidance to uplevel our craft and build better first-order optimal strategies, yet corporate synergy. Curate form without content style without meaning, strategic staircase one-sheet, and green technology and climate change , or onward and upward, productize the deliverables and focus on the bottom line. Marginalised key performance indicators crank this out.",
		author: getUserByID("2"),
	},
	{
		id: "3",
		title: "The Worst Day of My Life",
		text: "I went to the zoo and the giraffes were asleep. Then I dropped my ice cream.",
		author: getUserByID("3"),
	},
];

export function getAllPosts(): Post[] {
	return posts;
}

export function addPost(title: string, text: string, author: string) {
	let user = userNameExists(author);

	// Obviously this isn't ideal as it would be better to prompt user if they want to create a new user
	// but it will suffice for this assignment
	if (user === undefined) user = addUser(author);

	const newPost: Post = {
		id: `${getAllPosts().length + 1}`,
		title: title,
		text: text,
		author: user,
	};

	posts.push(newPost);

	return newPost;
}
