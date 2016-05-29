@echo off

echo "you need nodejs, starting both API server and client"

start node client.js

start http://127.0.0.1:8001

node server.js
