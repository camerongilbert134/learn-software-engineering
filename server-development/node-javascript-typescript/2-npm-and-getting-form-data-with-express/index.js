import express, { static as staticFiles, urlencoded } from "express";
import Router from "express-promise-router";
import { createPost, fetchPost, fetchPostCount, fetchPosts } from "./database.js";

const application = express();
const router = new Router();

router.post("/api/blog", async ({ body }, response) => {
    const postOptions = {
        author: {
            name: body.name,
            email: body.email
        },
        title: body.title,
        content: body.content
    };
    try {
        await createPost(postOptions);
        response.redirect("/");
    } catch (error) {
        console.error(error);
        response.sendStatus(500);
    }
});

router.get("/api/blog", async ({ query }, response) => {
    try {
        const posts = await fetchPosts(query.amount, query.offset)
        response.json(posts);
    } catch (error) {
        console.error(error);
        response.sendStatus(500);
    }
});

router.get("/api/blog/count", async (_, response) => {
    try {
        const count = await fetchPostCount()
        response.json({ count });
    } catch (error) {
        console.error(error);
        response.sendStatus(500);
    }
});

router.get("/api/blog/:id", async ({params}, response) => {
    const postId = params.id;
    try {
        const post = await fetchPost(postId);
        response.json(post)
    } catch (error) {
        console.error(error);
        response.sendStatus(500);
    }
});

application
    .use((request, response, next) => {
        const startTime = Date.now();
        response.on("finish", () => {
            const endTime = Date.now();
            console.info(`[INFO] ${request.method} ${request.url}: ${response.statusCode} ${endTime - startTime}ms`);
        });

        next();
    })
    .use(staticFiles("static-files")) // Hosts the files we put in the static-files folder
    .use(urlencoded({ extended: true })) // Allows us to send form data
    .use(router) // Include the routes we define above
    .listen(80); // Start server on a specific port

