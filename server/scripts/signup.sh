#!/bin/bash

curl --location --request POST "http://localhost:3000/api/auth/email/signup" \
--header "Content-Type: application/json" \
--data-raw "{
    \"email\":\"user@gmail.com\",
    \"password\":\"12341234\",
    \"username\":\"김명성\"
}"