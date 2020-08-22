#!/bin/bash

dirpath=`dirname $0`

echo "started bulk create all"

cid=`${dirpath}/bulk_create_category.sh | grep -i result | cut -d "," -f 4 | cut -d ":" -f 2`

echo "cid: $cid"

scid=`${dirpath}/bulk_create_sub_category.sh $cid | grep -i result | cut -d "," -f 4 | cut -d ":" -f 2`

echo "scid: $scid"

result=`${dirpath}/bulk_create_product.sh $scid | grep -i result`

userCreate=`${dirpath}/signup.sh | grep -i result`

echo "product Created ${result}"
echo "user Created ${userCreate}"
echo "ended bulk create all"