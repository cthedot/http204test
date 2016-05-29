HTTP 204 Test
-------------

Test repo to check strange behaviour in Edge:

- install nodejs (needed for demo servers only)
- run start.bat
    - which starts server.js (always returning 204 with CONTENT-LENGTH: 2)
    - which starts client.js demo page
    - opens webpage
- compare behaviour in Edge vs e.g. Firefox