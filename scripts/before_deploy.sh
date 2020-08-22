#!/bin/bash
REPOSITORY=/home/ubuntu
cd $REPOSITORY

pm2 stop all
rm -rf bmart-5
