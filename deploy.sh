#!/bin/bash
REPOSITORY=/home/ubuntu/bmart-5
cd $REPOSITORY

pm2 start npm --name 'bmart-5' -- start
