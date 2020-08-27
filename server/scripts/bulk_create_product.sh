#!/bin/bash

url='http://localhost:3000'
base_id=$1   #첫번째 하위 카테고리 id 533
# init each sub category id with base_id
########################################
fruits=$base_id
vegetables=$(($base_id+1))
salad=$(($base_id+2))
meat_pork=$(($base_id+3))
chicken_duck_egg=$(($base_id+4))
aquatic_products=$(($base_id+5))
tofu_beansprouts=$(($base_id+6))
rice=$(($base_id+7))
soup_stew=$(($base_id+8))
side_dish=$(($base_id+9))
milk=$(($base_id+10))
yogurt=$(($base_id+11))
butter=$(($base_id+12))
cheese=$(($base_id+13))
powdered_milk=$(($base_id+14))
bread=$(($base_id+15))
serial=$(($base_id+16))
rice_cake=$(($base_id+17))
jam_spread=$(($base_id+18))
chicken_pizza=$(($base_id+19))
tteokbokki=$(($base_id+20))
dumplings_fried_pancake=$(($base_id+21))
gobchang_darkbal=$(($base_id+22))
dry_snaks_jerky=$(($base_id+23))
hotdog_sausage=$(($base_id+24))
snack=$(($base_id+25))
popcorn=$(($base_id+26))
cookie=$(($base_id+27))
pie_cake=$(($base_id+28))
chocolate_chocobar=$(($base_id+29))
candy_gum=$(($base_id+30))
jelly=$(($base_id+31))
sausage_hotbar=$(($base_id+32))
baby_snack=$(($base_id+33))
haagendaz_nature=$(($base_id+34))
stick_tube=$(($base_id+35))
cup_corn_icecream=$(($base_id+36))
hair_care=$(($base_id+37))
hair_styling=$(($base_id+38))
body_care=$(($base_id+39))
cleansing=$(($base_id+40))
dental_care=$(($base_id+41))
shaving=$(($base_id+42))
what_eat_now=$(($base_id+43))
now_nead_necessary=$(($base_id+44))
########################################

echo "start product bulk with base_id($base_id)"
echo "base url for api server: $url"

dirpath=`dirname $0`

DIRECTORY='../src/bulk-data/data/products'

if [ ! -d "$DIRECTORY" ]; then
  echo "mkdir $DIRECTORY"
  mkdir $DIRECTORY
fi

for textfile in ${dirpath}/data/*
do
    echo ...reading file: ${textfile}
    bodyData="["
    while IFS="|" read -r name category price discount imgUrl;
    do    
            case $category in
            과일)
                subCategory=$fruits
                ;;
            채소)
                subCategory=$vegetables
                ;;
            샐러드)
                subCategory=$salad
                ;;
            소·돼지고기)
                subCategory=$meat_pork
                ;;
            닭·오리·계란)
                subCategory=$chicken_duck_egg
                ;;
            수산·건어물·김)
                subCategory=$aquatic_products
                ;;
            두부·콩나물)
                subCategory=$tofu_beansprouts
                ;;
            쌀)
                subCategory=$rice
                ;;
            국·탕·찌개)
                subCategory=$soup_stew
                ;;
            요리·반찬)
                subCategory=$side_dish
                ;;
            우유)
                subCategory=$milk
                ;;
            요구르트·요거트)
                subCategory=$yogurt
                ;;
            버터)
                subCategory=$butter
                ;;
            치즈)
                subCategory=$cheese
                ;;
            분유)
                subCategory=$powdered_milk
                ;;
            빵)
                subCategory=$bread
                ;;
            시리얼)
                subCategory=$serial
                ;;
            떡)
                subCategory=$rice_cake
                ;;
            잼·스프레드)
                subCategory=$jam_spread
                ;;
            치킨·피자)
                subCategory=$chicken_pizza
                ;;
            떡볶이)
                subCategory=$tteokbokki
                ;;
            만두·튀김·전)
                subCategory=$dumplings_fried_pancake
                ;;
            곱창·닭발·족발·닭갈비)
                subCategory=$gobchang_darkbal
                ;;
            마른안주·육포)
                subCategory=$dry_snaks_jerky
                ;;
            핫도그·소시지·핫바)
                subCategory=$hotdog_sausage
                ;;
            과자)
                subCategory=$snack
                ;;
            팝콘)
                subCategory=$popcorn
                ;;
            쿠키·비스킷·크래커)
                subCategory=$cookie
                ;;
            파이·케익)
                subCategory=$pie_cake
                ;;
            초콜릿·초코바)
                subCategory=$chocolate_chocobar
                ;;
            사탕·껌)
                subCategory=$candy_gum
                ;;
            젤리·푸딩)
                subCategory=$jelly
                ;;
            소시지·핫바)
                subCategory=$sausage_hotbar
                ;;
            유아간식)
                subCategory=$baby_snack
                ;;
            하겐다즈·나뚜루·수입)
                subCategory=$haagendaz_nature
                ;;
            막대·튜브형)
                subCategory=$stick_tube
                ;;
            컵·콘·기타)
                subCategory=$cup_corn_icecream
                ;;
            헤어케어)
                subCategory=$hair_care
                ;;
            헤어스타일링)
                subCategory=$hair_styling
                ;;
            바디케어)
                subCategory=$body_care
                ;;
            클렌징)
                subCategory=$cleansing
                ;;
            덴탈케어)
                subCategory=$dental_care
                ;;
            면도용품)
                subCategory=$shaving
                ;;
            "지금 뭐먹지?")
                subCategory=$what_eat_now
                ;;
            "지금 필요한 생필품")
                subCategory=$now_nead_necessary
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
    
    echo ${bodyData} > ../src/bulk-data/data/products/${textfile:7:$((${#textfile}-11))}.json
done

echo end product bulk