HTTP 204 Test
-------------

Test repo to check strange behaviour in Edge:

- install nodejs (needed for demo servers only)
- run start.bat
    - which starts server.js (always returning 204 with CONTENT-LENGTH: 2)
    - which starts client.js demo page
    - opens webpage
- compare behaviour in Edge vs e.g. Firefox when pressing button to make a request

Firefox

Stops to load immediately as server responds with 204 NO CONTENT which according
to spec (and Fiddler ;) MUST NOT have content. Seems to simply ignore the 
falsely set Content-Length Header

Edge

Runs into the set timeout (if no timeout set simply loads forever) as seems to 
wait for the bytes promised by a non 0 Content-Length Header
