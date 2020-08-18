url='http://localhost:4000'
base_id=$1   #첫번째 카테고리 id
# init each category id with base_id
########################################
salad=$base_id
egg=$(($base_id+1))
mealkit=$(($base_id+2))
milk=$(($base_id+3))
bread=$(($base_id+4))
yasik=$(($base_id+5))
choco=$(($base_id+6))
ice=$(($base_id+7))
hair=$(($base_id+8))
set_menu=$(($base_id+9))
bongji=$(($base_id+10))
dosirak=$(($base_id+11))
ramen=$(($base_id+12))
soup=$(($base_id+13))
cook=$(($base_id+14))
water=$(($base_id+15))
sauce=$(($base_id+16))
ham=$(($base_id+17))
healthy=$(($base_id+18))
detergent=$(($base_id+19))
tissue=$(($base_id+20))
beauty=$(($base_id+21))
clean=$(($base_id+22))
fashion=$(($base_id+23))
kitchen=$(($base_id+24))
pet=$(($base_id+25))
woowa_supply=$(($base_id+26))
supply=$(($base_id+27))
########################################

echo "start sub category bulk with base_id($base_id)"
echo "base url for api server: $url"

curl --location --request POST $url/api/sub_category/bulkcreate \
--header 'Content-Type: application/json' \
--data-raw "[
    {
        \"name\": \"과일\",
        \"orderWeight\": 10000,
        \"categoryId\": $salad
    },
    {
        \"name\": \"채소\",
        \"orderWeight\": 20000,
        \"categoryId\": $salad
    },
    {
        \"name\": \"샐러드\",
        \"orderWeight\": 30000,
        \"categoryId\": $salad
    },
    {
        \"name\": \"소·돼지고기\",
        \"orderWeight\": 40000,
        \"categoryId\": $egg
    },
    {
        \"name\": \"닭·오리·계란\",
        \"orderWeight\": 50000,
        \"categoryId\": $egg
    },
    {
        \"name\": \"수산·건어물·김\",
        \"orderWeight\": 60000,
        \"categoryId\": $egg
    },
    {
        \"name\": \"두부·콩나물\",
        \"orderWeight\": 70000,
        \"categoryId\": $egg
    },
    {
        \"name\": \"쌀\",
        \"orderWeight\": 80000,
        \"categoryId\": $egg
    },
    {
        \"name\": \"국·탕·찌개\",
        \"orderWeight\": 90000,
        \"categoryId\": $mealkit
    },
    {
        \"name\": \"요리·반찬\",
        \"orderWeight\": 100000,
        \"categoryId\": $mealkit
    },
    {
        \"name\": \"우유\",
        \"orderWeight\": 110000,
        \"categoryId\": $milk
    },
    {
        \"name\": \"요구르트·요거트\",
        \"orderWeight\": 120000,
        \"categoryId\": $milk
    },
    {
        \"name\": \"버터\",
        \"orderWeight\": 130000,
        \"categoryId\": $milk
    },
    {
        \"name\": \"치즈\",
        \"orderWeight\": 140000,
        \"categoryId\": $milk
    },
    {
        \"name\": \"분유\",
        \"orderWeight\": 150000,
        \"categoryId\": $milk
    },
    {
        \"name\": \"빵\",
        \"orderWeight\": 160000,
        \"categoryId\": $bread
    },
    {
        \"name\": \"시리얼\",
        \"orderWeight\": 170000,
        \"categoryId\": $bread
    },
    {
        \"name\": \"떡\",
        \"orderWeight\": 180000,
        \"categoryId\": $bread
    },
    {
        \"name\": \"잼·스프레드\",
        \"orderWeight\": 190000,
        \"categoryId\": $bread
    },
    {
        \"name\": \"치킨·피자\",
        \"orderWeight\": 200000,
        \"categoryId\": $yasik
    },
    {
        \"name\": \"떡볶이\",
        \"orderWeight\": 210000,
        \"categoryId\": $yasik
    },
    {
        \"name\": \"만두·튀김·전\",
        \"orderWeight\": 220000,
        \"categoryId\": $yasik
    },
    {
        \"name\": \"곱창·닭발·족발·닭갈비\",
        \"orderWeight\": 230000,
        \"categoryId\": $yasik
    },
    {
        \"name\": \"마른안주·육포\",
        \"orderWeight\": 240000,
        \"categoryId\": $yasik
    },
    {
        \"name\": \"핫도그·소시지·핫바\",
        \"orderWeight\": 250000,
        \"categoryId\": $yasik
    },
    {
        \"name\": \"과자\",
        \"orderWeight\": 260000,
        \"categoryId\": $choco
    },
    {
        \"name\": \"팝콘\",
        \"orderWeight\": 270000,
        \"categoryId\": $choco
    },
    {
        \"name\": \"쿠키·비스킷·크래커\",
        \"orderWeight\": 280000,
        \"categoryId\": $choco
    },
    {
        \"name\": \"파이·케익\",
        \"orderWeight\": 290000,
        \"categoryId\": $choco
    },
    {
        \"name\": \"초콜릿·초코바\",
        \"orderWeight\": 300000,
        \"categoryId\": $choco
    },
    {
        \"name\": \"사탕·껌\",
        \"orderWeight\": 310000,
        \"categoryId\": $choco
    },
    {
        \"name\": \"젤리·푸딩\",
        \"orderWeight\": 320000,
        \"categoryId\": $choco
    },
    {
        \"name\": \"소시지·핫바\",
        \"orderWeight\": 330000,
        \"categoryId\": $choco
    },
    {
        \"name\": \"유아간식\",
        \"orderWeight\": 340000,
        \"categoryId\": $choco
    },
    {
        \"name\": \"하겐다즈·나뚜루·수입\",
        \"orderWeight\": 350000,
        \"categoryId\": $ice
    },
    {
        \"name\": \"막대·튜브형\",
        \"orderWeight\": 360000,
        \"categoryId\": $ice
    },
    {
        \"name\": \"컵·콘·기타\",
        \"orderWeight\": 370000,
        \"categoryId\": $ice
    },
    {
        \"name\": \"헤어케어\",
        \"orderWeight\": 380000,
        \"categoryId\": $hair
    },
    {
        \"name\": \"헤어스타일링\",
        \"orderWeight\": 390000,
        \"categoryId\": $hair
    },
    {
        \"name\": \"바디케어\",
        \"orderWeight\": 400000,
        \"categoryId\": $hair
    },
    {
        \"name\": \"클렌징\",
        \"orderWeight\": 410000,
        \"categoryId\": $hair
    },
    {
        \"name\": \"덴탈케어\",
        \"orderWeight\": 420000,
        \"categoryId\": $hair
    },
    {
        \"name\": \"면도용품\",
        \"orderWeight\": 430000,
        \"categoryId\": $hair
    },
    {
        \"name\": \"제대로 한끼 뭐 먹지?\",
        \"orderWeight\": 440000,
        \"categoryId\": $set_menu
    },
    {
        \"name\": \"꿀조합 뭐 먹지?\",
        \"orderWeight\": 450000,
        \"categoryId\": $set_menu
    },
    {
        \"name\": \"시간 없는데 뭐 먹지?\",
        \"orderWeight\": 460000,
        \"categoryId\": $set_menu
    },
    {
        \"name\": \"국물 땡기는데 뭐 먹지?\",
        \"orderWeight\": 470000,
        \"categoryId\": $set_menu
    },
    {
        \"name\": \"아침 가볍게 뭐 먹지?\",
        \"orderWeight\": 480000,
        \"categoryId\": $set_menu
    },
    {
        \"name\": \"안주로 뭐 먹지?\",
        \"orderWeight\": 490000,
        \"categoryId\": $set_menu
    },
    {
        \"name\": \"간식으로 뭐 먹지?\",
        \"orderWeight\": 500000,
        \"categoryId\": $set_menu
    },
    {
        \"name\": \"배달이봉다리\",
        \"orderWeight\": 510000,
        \"categoryId\": $bongji
    },
    {
        \"name\": \"밥 봉다리\",
        \"orderWeight\": 520000,
        \"categoryId\": $bongji
    },
    {
        \"name\": \"간식 봉다리\",
        \"orderWeight\": 530000,
        \"categoryId\": $bongji
    },
    {
        \"name\": \"아이스크림 봉다리\",
        \"orderWeight\": 540000,
        \"categoryId\": $bongji
    },
    {
        \"name\": \"국·반찬 봉다리\",
        \"orderWeight\": 550000,
        \"categoryId\": $bongji
    },
    {
        \"name\": \"라면 봉다리\",
        \"orderWeight\": 560000,
        \"categoryId\": $bongji
    },
    {
        \"name\": \"아침 봉다리\",
        \"orderWeight\": 570000,
        \"categoryId\": $bongji
    },
    {
        \"name\": \"음료 봉다리\",
        \"orderWeight\": 580000,
        \"categoryId\": $bongji
    },
    {
        \"name\": \"즉석밥\",
        \"orderWeight\": 590000,
        \"categoryId\": $dosirak
    },
    {
        \"name\": \"볶음밥·덮밥\",
        \"orderWeight\": 600000,
        \"categoryId\": $dosirak
    },
    {
        \"name\": \"컵밥\",
        \"orderWeight\": 610000,
        \"categoryId\": $dosirak
    },
    {
        \"name\": \"도시락·김밥\",
        \"orderWeight\": 620000,
        \"categoryId\": $dosirak
    },
    {
        \"name\": \"죽\",
        \"orderWeight\": 630000,
        \"categoryId\": $dosirak
    },
    {
        \"name\": \"봉지라면\",
        \"orderWeight\": 650000,
        \"categoryId\": $ramen
    },
    {
        \"name\": \"컵라면\",
        \"orderWeight\": 660000,
        \"categoryId\": $ramen
    },
    {
        \"name\": \"즉석면요리·소면·면\",
        \"orderWeight\": 670000,
        \"categoryId\": $ramen
    },
    {
        \"name\": \"국\",
        \"orderWeight\": 680000,
        \"categoryId\": $soup
    },
    {
        \"name\": \"탕·찌게\",
        \"orderWeight\": 690000,
        \"categoryId\": $soup
    },
    {
        \"name\": \"밀키트\",
        \"orderWeight\": 700000,
        \"categoryId\": $cook
    },
    {
        \"name\": \"김치·반찬·젓갈·김\",
        \"orderWeight\": 710000,
        \"categoryId\": $cook
    },
    {
        \"name\": \"햄·어묵·두부·콩나물\",
        \"orderWeight\": 710000,
        \"categoryId\": $cook
    },
    {
        \"name\": \"국수·냉면·파스타\",
        \"orderWeight\": 730000,
        \"categoryId\": $cook
    },
    {
        \"name\": \"만두·돈까스·튀김\",
        \"orderWeight\": 740000,
        \"categoryId\": $cook
    },
    {
        \"name\": \"카레·짜장·스프·죽\",
        \"orderWeight\": 750000,
        \"categoryId\": $cook
    },
    {
        \"name\": \"떡갈비·스테이크\",
        \"orderWeight\": 760000,
        \"categoryId\": $cook
    },
    {
        \"name\": \"해물요리·생선구이\",
        \"orderWeight\": 770000,
        \"categoryId\": $cook
    },
    {
        \"name\": \"생수·얼음\",
        \"orderWeight\": 780000,
        \"categoryId\": $water
    },
    {
        \"name\": \"커피음료\",
        \"orderWeight\": 790000,
        \"categoryId\": $water
    },
    {
        \"name\": \"커피믹스·원두·캡슐커피\",
        \"orderWeight\": 800000,
        \"categoryId\": $water
    },
    {
        \"name\": \"콜라·사이다·탄산음료\",
        \"orderWeight\": 810000,
        \"categoryId\": $water
    },
    {
        \"name\": \"탄산수\",
        \"orderWeight\": 820000,
        \"categoryId\": $water
    },
    {
        \"name\": \"스포츠음료·이온음료\",
        \"orderWeight\": 830000,
        \"categoryId\": $water
    },
    {
        \"name\": \"우유·두유\",
        \"orderWeight\": 840000,
        \"categoryId\": $water
    },
    {
        \"name\": \"녹차·홍차·코코아\",
        \"orderWeight\": 850000,
        \"categoryId\": $water
    },
    {
        \"name\": \"과일·야채음료\",
        \"orderWeight\": 860000,
        \"categoryId\": $water
    },
    {
        \"name\": \"기능성·비타민음료\",
        \"orderWeight\": 870000,
        \"categoryId\": $water
    },
    {
        \"name\": \"유아음료\",
        \"orderWeight\": 880000,
        \"categoryId\": $water
    },
    {
        \"name\": \"조미료\",
        \"orderWeight\": 890000,
        \"categoryId\": $sauce
    },
    {
        \"name\": \"식용유·기타기름\",
        \"orderWeight\": 900000,
        \"categoryId\": $sauce
    },
    {
        \"name\": \"간장·식초\",
        \"orderWeight\": 910000,
        \"categoryId\": $sauce
    },
    {
        \"name\": \"밀가루·기타믹스\",
        \"orderWeight\": 920000,
        \"categoryId\": $sauce
    },
    {
        \"name\": \"설탕·소금\",
        \"orderWeight\": 930000,
        \"categoryId\": $sauce
    },
    {
        \"name\": \"고추장·된장·쌈장\",
        \"orderWeight\": 940000,
        \"categoryId\": $sauce
    },
    {
        \"name\": \"소스·드레싱\",
        \"orderWeight\": 950000,
        \"categoryId\": $sauce
    },
    {
        \"name\": \"햄·소시지\",
        \"orderWeight\": 960000,
        \"categoryId\": $ham
    },
    {
        \"name\": \"어묵·맛살\",
        \"orderWeight\": 970000,
        \"categoryId\": $ham
    },
    {
        \"name\": \"통조림\",
        \"orderWeight\": 980000,
        \"categoryId\": $ham
    },
    {
        \"name\": \"닭가슴살·샐러드\",
        \"orderWeight\": 990000,
        \"categoryId\": $healthy
    },
    {
        \"name\": \"식사대용식\",
        \"orderWeight\": 1000000,
        \"categoryId\": $healthy
    },
    {
        \"name\": \"도시락·즉석밥\",
        \"orderWeight\": 1010000,
        \"categoryId\": $healthy
    },
    {
        \"name\": \"헬스·뷰티\",
        \"orderWeight\": 1020000,
        \"categoryId\": $healthy
    },
    {
        \"name\": \"숙취해소·식품\",
        \"orderWeight\": 1030000,
        \"categoryId\": $healthy
    },
    {
        \"name\": \"세탁세제\",
        \"orderWeight\": 1040000,
        \"categoryId\": $detergent
    },
    {
        \"name\": \"섬유유연제\",
        \"orderWeight\": 1050000,
        \"categoryId\": $detergent
    },
    {
        \"name\": \"주방세제\",
        \"orderWeight\": 1060000,
        \"categoryId\": $detergent
    },
    {
        \"name\": \"청소세제\",
        \"orderWeight\": 1070000,
        \"categoryId\": $detergent
    },
    {
        \"name\": \"화장지·물티슈\",
        \"orderWeight\": 1080000,
        \"categoryId\": $tissue
    },
    {
        \"name\": \"생리대\",
        \"orderWeight\": 1090000,
        \"categoryId\": $tissue
    },
    {
        \"name\": \"스킨케어·선케어\",
        \"orderWeight\": 1100000,
        \"categoryId\": $beauty
    },
    {
        \"name\": \"마스크팩\",
        \"orderWeight\": 1110000,
        \"categoryId\": $beauty
    },
    {
        \"name\": \"메이크업·소품\",
        \"orderWeight\": 1130000,
        \"categoryId\": $beauty
    },
    {
        \"name\": \"청소용품\",
        \"orderWeight\": 1140000,
        \"categoryId\": $clean
    },
    {
        \"name\": \"욕실용품\",
        \"orderWeight\": 1150000,
        \"categoryId\": $clean
    },
    {
        \"name\": \"방충·살충제\",
        \"orderWeight\": 1160000,
        \"categoryId\": $clean
    },
    {
        \"name\": \"방향·제습제\",
        \"orderWeight\": 1170000,
        \"categoryId\": $clean
    },
    {
        \"name\": \"의약외품·마스크\",
        \"orderWeight\": 1190000,
        \"categoryId\": $fashion
    },
    {
        \"name\": \"양말·스타킹\",
        \"orderWeight\": 1200000,
        \"categoryId\": $fashion
    },
    {
        \"name\": \"멀티탭·충전기·케이블\",
        \"orderWeight\": 1210000,
        \"categoryId\": $fashion
    },
    {
        \"name\": \"건전지·전구\",
        \"orderWeight\": 1220000,
        \"categoryId\": $fashion
    },
    {
        \"name\": \"기타잡화\",
        \"orderWeight\": 1230000,
        \"categoryId\": $fashion
    },
    {
        \"name\": \"주방용품·소모품\",
        \"orderWeight\": 1240000,
        \"categoryId\": $kitchen
    },
    {
        \"name\": \"일회용품\",
        \"orderWeight\": 1250000,
        \"categoryId\": $kitchen
    },
    {
        \"name\": \"사료\",
        \"orderWeight\": 1270000,
        \"categoryId\": $pet
    },
    {
        \"name\": \"간식\",
        \"orderWeight\": 1280000,
        \"categoryId\": $pet
    },
    {
        \"name\": \"반려용품\",
        \"orderWeight\": 1290000,
        \"categoryId\": $pet
    },
    {
        \"name\": \"헤어·바디\",
        \"orderWeight\": 1300000,
        \"categoryId\": $woowa_supply
    },
    {
        \"name\": \"배민 사무용품\",
        \"orderWeight\": 1310000,
        \"categoryId\": $woowa_supply
    },
    {
        \"name\": \"주방·파티용품\",
        \"orderWeight\": 1320000,
        \"categoryId\": $woowa_supply
    },
    {
        \"name\": \"패션·뷰티·소품\",
        \"orderWeight\": 1330000,
        \"categoryId\": $woowa_supply
    },
    {
        \"name\": \"필기류\",
        \"orderWeight\": 1340000,
        \"categoryId\": $supply
    },
    {
        \"name\": \"노트·메모지\",
        \"orderWeight\": 1350000,
        \"categoryId\": $supply
    },
    {
        \"name\": \"사무용품\",
        \"orderWeight\": 1360000,
        \"categoryId\": $supply
    }
]"

echo end sub category bulk