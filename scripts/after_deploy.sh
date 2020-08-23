#!/bin/bash
REPOSITORY=/home/ubuntu/bmart-5
cd $REPOSITORY

mkdir client/logs
mkdir server/logs

yarn start:all
