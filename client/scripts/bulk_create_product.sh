url='http://localhost:3000'
base_id=$1   #첫번째 하위 카테고리 id 533
# init each sub category id with base_id
########################################
fruits=$base_id
vegetables=$(($base_id+1))
########################################

echo "start product bulk with base_id($base_id)"
echo "base url for api server: $url"

bodyData="["
while IFS="|" read -r name category price discount imgUrl;
do    
        case $category in
        채소)
            category=$vegetables
            ;;
        과일)
            category=$fruits
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
            \"subCategoryId\":$category,
            \"imgUrl\":\"$imgUrl\"
            },"
done < ./data/fruits.txt
bodyData="${bodyData:0:$((${#bodyData}-1))}]"
curl --location --request POST $url/api/product/bulkcreate \
        --header 'Content-Type: application/json' \
        --data-raw "${bodyData}"

bodyData="["
while IFS="|" read -r name category price discount imgUrl;
do    
        case $category in
        채소)
            category=$vegetables
            ;;
        과일)
            category=$fruits
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
            \"subCategoryId\":$category,
            \"imgUrl\":\"$imgUrl\"
            },"
done < ./data/vegetables.txt
bodyData="${bodyData:0:$((${#bodyData}-1))}]"
curl --location --request POST $url/api/product/bulkcreate \
        --header 'Content-Type: application/json' \
        --data-raw "${bodyData}"

echo end product bulk