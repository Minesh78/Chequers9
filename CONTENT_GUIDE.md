# Updating Chequers9 content

Project text and image order have one source of truth: `src/content/projects.js`. Site-wide contact details, navigation, services and studio principles live in `src/content/site.js`.

## Add or edit a project

1. Copy an existing object in `projects.js` and give it a unique `id` and URL-safe `slug`.
2. Edit `title`, `location`, `type`, `description` and `services`. Optional values can be left empty.
3. Set `featured: true` to include the project on the homepage.
4. Put original images in `public/images/projects/<project-slug>/` using `source-cover.webp`, `source-01.webp`, `source-02.webp`, and so on.
5. Run `npm run optimize:images` to create the responsive AVIF and WebP files.
6. List gallery images in the desired order. The order in the `gallery` array is the order shown on the project page.

## Replace or reorder images

Replace the matching `source-*.webp` file and run the optimizer again. To reorder a gallery, move its `image(...)` entries in `projects.js`; no page component needs to change.

## Remove a project

Delete its object from `projects.js`. It will automatically disappear from the project index, filters, homepage selections and next-project navigation.

Every image needs concise, descriptive alt text. Avoid adding dates, awards, dimensions or claims that have not been verified.
