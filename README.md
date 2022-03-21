This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!




## Developing a Blog

https://blog.jetbrains.com/webstorm/2021/10/building-a-blog-with-next-js-and-mdx/


## Deploying on Github Actions, references

1. https://www.suhanwijaya.com/posts/use-github-actions-deploy-nextjs-ssg-site
2. https://docs.github.com/en/actions/quickstart



## Managing This Application

This site is deployed using github actions. The nextjs blog is built as a SSG (static site generator) and the files are placed into a `out` directory and then copied into the gh-pages branch. That branch, gh-pages is available via the URL race-calendar.developnyc.com

New Races can be added to the `posts` folder. A YAML / frontmatter declaration block is needed. The format of those files is Markdown (.mdx). Though, nextjs is very flexible and allows us to trigger React Components from Markdown, assuming they are properly passed to the MDX post via the pages/races/[slug].jsx templating engine.

Post are very manual, as of 3/6/2022. Essentially, the user is going to grab a copy of the flyer from instagram, download that file into the `./public` folder and then create a post that adds YAML attributes for

1. coverImage -- the local project
2. flyerUrl -- the instagram flyer original url
3. thumbnailUrl -- often the same as coverImage, but could be different
4. host -- the instagram account that is hosting this event. ex: brokeshutter or smacktrackz
5. date -- format is March 4, 2022 | September 21, 2021 etc. Moment.js isn't robust here so the date format matters. The date is used to sort and remove posts so that the calendar is always current and forward looking.
6. Tags -- important to mark city and event type. not used, yet, but if project expands these are invaluable
7. mapsLink -- if a race start location is announced, open google maps in a browser, input the location, get the "sharing" link and add to the YAML. 3-12-2022-wallst.mdx has the prototype version

The race-calendar is date aware. It will hide / drop events that occured in the past. These events still exist but aren't displayed. Future iterations may want to build an archive and link photos from there.


### Capturing a Race Flyer

As of 3/6/2022 this is 100% manual. The exact steps followed are below. It assumes you have an instagram account and are currently logged into it in Chrome web browser. A puppeteer based solution is in the works.

1. Open the post URL in Chrome web browser
2. Example post URL https://www.instagram.com/p/CWH6NmyMAtT/
3. Open developer tools shift + cmnd + i
4. Enable element selector tool (cmnd + shift + c)
5. Highlight the image
6. Chrome will select an empty div that is used to hide the image from right-click copy/download
7. select one element above, open the DIV
8. Find the img tag and copy the SRC attribute value. In this case it's "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/255126975_3260305897539509_2108789786977914224_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=105&_nc_ohc=Pv0CBxCr0yQAX_nIBzL&edm=AABBvjUBAAAA&ccb=7-4&ig_cache_key=MjcwNDM4NjEyMjk1NDMxMjUzMQ%3D%3D.2-ccb7-4&oh=00_AT8mGanR1vr7Eyj0aMqdHU4kDy-h4morSJSSLPX6Pa0rHQ&oe=622BD8C3&_nc_sid=83d603"
9. Open that image in a new tab
10. Right click "Save Image As..."
11. Save the image with the announced date and a very short name. Example 3-12-2022-wallst-alleycat.jpeg into the `./public` folder
12. Correctly reference this image from the frontmatter YAML block in the new post.


