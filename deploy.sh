#!/bin/bash

# start server
cd server
pm2 reload bmart-5-server

# start client
cd ../client
pm2 reload bmart-5-client
