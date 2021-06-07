const RESULTS_PER_PAGE = 2;

async function main() {
    const blogId = getBlogId();
    if (blogId !== null) {
        await showSingleBlog(blogId)
    } else {
        await showBlogList();
    }
}
main();

async function showSingleBlog(id) {
    const postContainer = document.querySelector("main");
    const post = await getPost(id);
    const blogElement = createBlogElement(post, false);
    postContainer.appendChild(blogElement);
}

async function showBlogList() {
    const postCount = await getPostCount();
    const pageNumber = getPageNumber();
    const postContainer = document.querySelector("main");
    const posts = await getPosts(RESULTS_PER_PAGE, (pageNumber - 1) * RESULTS_PER_PAGE);
    for (const post of posts) {
        const blogElement = createBlogElement(post, true);
        postContainer.appendChild(blogElement);
    }

    if (postCount > RESULTS_PER_PAGE) {
        const paginationElement = createPaginationElement(postCount, pageNumber);
        postContainer.appendChild(paginationElement);
    }
}

function createBlogElement(post, withLink) {
    const blogElement = document.createElement("div");
    blogElement.classList.add("content")

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    if (withLink === true) {
        const titleLink = document.createElement("a");
        titleLink.href = `/?id=${post.id}`;
        titleLink.appendChild(titleElement);
        blogElement.appendChild(titleLink);
    } else {
        blogElement.appendChild(titleElement);
    }

    const authorElement = document.createElement("h3");
    authorElement.textContent = `${post.author.name}<${post.author.email}>`
    blogElement.appendChild(authorElement);

    const contentParagraphs = post.content.split("\n");
    for (const paraphraph of contentParagraphs) {
        const paragraphElement = document.createElement("p");
        paragraphElement.textContent = paraphraph;
        blogElement.appendChild(paragraphElement);
    }
    
    return blogElement;
}

function createPaginationElement(postCount, pageNumber) {
    const paginationContainer = document.createElement("div");
    paginationContainer.classList.add("content")
    
    const paginationPrevLinkContainer = document.createElement("div");
    paginationPrevLinkContainer.classList.add("pagination")
    if (pageNumber !== 1) {
        const paginationPrevLink = document.createElement("a");
        paginationPrevLink.textContent = "< Prev";
        paginationPrevLink.href = `/?page=${pageNumber - 1}`;
        paginationPrevLinkContainer.appendChild(paginationPrevLink);
        paginationContainer.appendChild(paginationPrevLinkContainer);
    }
    paginationContainer.appendChild(paginationPrevLinkContainer);

    const paginationNextLinkContainer = document.createElement("div");
    paginationNextLinkContainer.classList.add("pagination")
    if (postCount / RESULTS_PER_PAGE > pageNumber) {
        const paginationNextLink = document.createElement("a");
        paginationNextLink.textContent = "Next >";
        paginationNextLink.href = `/?page=${pageNumber + 1}`;
        paginationNextLinkContainer.appendChild(paginationNextLink);
    }
    paginationContainer.appendChild(paginationNextLinkContainer);

    return paginationContainer
}

function getPageNumber() {
    const pageNumber = new URLSearchParams(window.location.search).get("page");
    if (pageNumber === null){
        return 1;
    }

    return parseInt(pageNumber);
}

function getBlogId() {
    return new URLSearchParams(window.location.search).get("id");
}

/*
**  Returns
**      [
**          {
**              author: {
**                  name: string,
**                  email: string
**              }
**              title: string,
**              content: string,
**              id: number
**          }
**      ]
*/
async function getPosts(amount, offset) {
    let url = "/api/blog";
    if (amount !== undefined || offset !== undefined) {
        let mustAddAnd = false;
        url += "?";
        if (amount !== undefined) {
            url += `amount=${amount}`;
            mustAddAnd = true;
        }

        if (offset !== undefined) {
            if (mustAddAnd) {
                url += "&";
            }
            url += `offset=${offset}`;
        }
    }

    const response = await fetch(url, {
        method: "GET"
    });

    return response.json();
}

async function getPostCount() {
    const response = await fetch("/api/blog/count", {
        method: "GET"
    });

    const { count } = await response.json();
    return count;
}

/*
**  Returns
**      {
**          author: {
**              name: string,
**              email: string
**          }
**          title: string,
**          content: string,
**          id: number
**      }
*/
async function getPost(id) {
    const response = await fetch(`/api/blog/${id}`, {
        method: "GET"
    });

    return response.json();
}
