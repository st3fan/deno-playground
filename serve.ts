// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { serve } from "https://deno.land/x/sift/mod.ts";

serve({
  "/": () => new Response("hello world"),
  "/blog/:slug": (request, { slug }) => {
    const post = `Hello, you visited ${slug}!`;
    return new Response(post);
  },
  404: () => new Response("not found")
});
