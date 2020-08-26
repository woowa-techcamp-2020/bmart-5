#!/bin/bash

url='http://localhost:3000'
base_id=$1   #첫번째 하위 카테고리 id 533
# init each sub category id with base_id
########################################
fruits=$base_id
vegetables=$(($base_id+1))
########################################

echo "start product bulk with base_id($base_id)"
echo "base url for api server: $url"

dirpath=`dirname $0`
for textfile in ${dirpath}/data/*
do
    echo ...reading file: ${textfile}
    bodyData="["
    while IFS="|" read -r name category price discount imgUrl;
    do    
            case $category in
            채소)
                subCategory=$vegetables
                ;;
            과일)
                subCategory=$fruits
                ;;
            *)
                echo "Sorry, I don't understand"
                ;;
            esac
            bodyData="${bodyData}{
                \"name\":\"$name\",
                \"price\":$price,
                \"content\":\"\",
                \"discount\":$discount,
                \"subCategoryId\":$subCategory,
                \"imgUrl\":\"$imgUrl\"
                },"
    done < ${textfile}
    bodyData="${bodyData:0:$((${#bodyData}-1))}]"
    echo ${bodyData} > ./json-data/${textfile:7:$((${#textfile}-11))}.json
done

echo end product bulk