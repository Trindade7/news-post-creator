# News post generator

A **social media news post generator**. It consists of two parts:

**1. Backend**: scraps the web for news about a chosen topic in given sources, and stores the data on a database, for now a json file, and generates the post images from a template. The server is built with **#Express** and **#Puppetier**

**2. Frontend**: where you pick the relevant news to pass to the posts chosen design and, print them once finished. The Frontend is built with **#Svelte**, **#SvelteKit** and **#Tailwindcss**.

**`To run`** the Project you only need the server since the compiled svelte code is stored in the server public folder and is also the default entry point.
