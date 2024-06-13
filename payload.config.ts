import { buildConfig } from "payload/config";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export default buildConfig({
  collections: [],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "DATABASE_URI_NOT_FOUND",
  }),
  editor: lexicalEditor({}),
});
