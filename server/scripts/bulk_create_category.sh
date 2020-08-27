#!/bin/bash

url='http://localhost:3000'

echo start category bulk
echo url for api: ${url}

curl --location --request POST ${url}/api/category/bulkcreate \
--header 'Content-Type: application/json' \
--data-raw '[
        {
            "name": "샐러드",
            "orderWeight": 10000
        },
        {
            "name": "계란",
            "orderWeight": 20000
        },
        {
            "name": "밀키트",
            "orderWeight": 30000
        },
        {
            "name": "우유",
            "orderWeight": 40000
        },
        {
            "name": "빵",
            "orderWeight": 50000
        },
        {
            "name": "야식",
            "orderWeight": 60000
        },
        {
            "name": "초콜렛",
            "orderWeight": 70000
        },
        {
            "name": "아이스크림",
            "orderWeight": 80000
        },
        {
            "name": "헤어",
            "orderWeight": 90000
        },
        {
            "name": "세트",
            "orderWeight": 100000
        },
        {
            "name": "봉지",
            "orderWeight": 110000
        },
        {
            "name": "도시락",
            "orderWeight": 120000
        },
        {
            "name": "라면",
            "orderWeight": 130000
        },
        {
            "name": "국",
            "orderWeight": 140000
        },
        {
            "name": "요리",
            "orderWeight": 150000
        },
        {
            "name": "물",
            "orderWeight": 160000
        },
        {
            "name": "소스",
            "orderWeight": 170000
        },
        {
            "name": "햄",
            "orderWeight": 180000
        },
        {
            "name": "건강",
            "orderWeight": 190000
        },
        {
            "name": "세제",
            "orderWeight": 200000
        },
        {
            "name": "티슈",
            "orderWeight": 210000
        },
        {
            "name": "뷰티",
            "orderWeight": 220000
        },
        {
            "name": "청소",
            "orderWeight": 230000
        },
        {
            "name": "패션",
            "orderWeight": 240000
        },
        {
            "name": "주방",
            "orderWeight": 250000
        },
        {
            "name": "반려동물",
            "orderWeight": 260000
        },
        {
            "name": "배민문방구",
            "orderWeight": 270000
        },
        {
            "name": "문구",
            "orderWeight": 280000
        }
    ]'

echo end category bulk