import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.CLIENTID, // Get this from tina.io
  token: process.env.TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "src",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "src",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/posts",
        fields: [
          {
            type: "string",
            name: "icon",
            label: "Icon",
            required: true
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
