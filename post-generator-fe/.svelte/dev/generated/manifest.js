const c = [
	() => import("..\\..\\..\\src\\routes\\$layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\create-post.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/create-post.svelte
	[/^\/create-post\/?$/, [c[0], c[3]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];