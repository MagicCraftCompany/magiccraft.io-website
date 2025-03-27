# MagicCraft Blog with Sanity CMS Integration

This repository includes an integration with Sanity CMS for managing blog posts in the MagicCraft website.

## Setup Instructions

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and create an account if you don't have one
2. Create a new project from your Sanity dashboard
3. Note your project ID, which you'll need in the next step

### 2. Configure Environment Variables

1. Create a `.env` file in the root of your project (or edit the existing one)
2. Add the following variables:

```
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2023-05-03
```

Replace `your-project-id` with the actual project ID from step 1.

### 3. Deploy the Sanity Studio

Since you're using a frontend-only Vite application, we recommend using the hosted Sanity Studio:

1. Install the Sanity CLI: `npm install -g @sanity/cli`
2. Initialize a new Sanity project in a separate directory:
   ```
   mkdir sanity-studio
   cd sanity-studio
   sanity init
   ```
3. When prompted, select "Create a new project"
4. Enter your project name
5. Use the project ID from step 1
6. Choose the default dataset configuration
7. Copy the schema files from `src/schemas` in your project to the `schemas` directory in your Sanity Studio project
8. Deploy the studio: `sanity deploy`

### 4. Manage Content

1. Access your hosted Sanity Studio at `https://your-project-id.sanity.studio/`
2. Create content types:
   - Create some "Post Type" documents (e.g., "News", "Patch Notes")
   - Create some "Category" documents (e.g., "Patch Updates", "Game News")
3. Create blog posts using the "Blog Post" document type

### 5. Accessing the Admin Interface

In your application, the admin link at `/admin` will redirect you to the hosted Sanity Studio where you can manage content.

## Fallback Mechanism

The application is configured with a fallback mechanism that will use static data from `src/data/newsData.ts` if there are any issues connecting to the Sanity API. This ensures that the blog section will always have content to display.

## Troubleshooting

If you encounter issues with the Sanity integration:

1. Check that your project ID is correct in the `.env` file
2. Make sure your Sanity project has the correct schemas and content
3. Check the browser console for any error messages

For more detailed setup instructions, refer to the [Sanity documentation](https://www.sanity.io/docs). 