url='http://localhost:4000'

echo start category bulk
echo url for api: ${url}

curl --location --request POST ${url}/api/category/bulkcreate \
--header 'Content-Type: application/json' \
--data-raw '[
        {
            "name": "salad",
            "orderWeight": 10000
        },
        {
            "name": "egg",
            "orderWeight": 20000
        },
        {
            "name": "mealkit",
            "orderWeight": 30000
        },
        {
            "name": "milk",
            "orderWeight": 40000
        },
        {
            "name": "bread",
            "orderWeight": 50000
        },
        {
            "name": "yasik",
            "orderWeight": 60000
        },
        {
            "name": "choco",
            "orderWeight": 70000
        },
        {
            "name": "ice",
            "orderWeight": 80000
        },
        {
            "name": "hair",
            "orderWeight": 90000
        },
        {
            "name": "set_menu",
            "orderWeight": 100000
        },
        {
            "name": "bongji",
            "orderWeight": 110000
        },
        {
            "name": "dosirak",
            "orderWeight": 120000
        },
        {
            "name": "ramen",
            "orderWeight": 130000
        },
        {
            "name": "soup",
            "orderWeight": 140000
        },
        {
            "name": "cook",
            "orderWeight": 150000
        },
        {
            "name": "water",
            "orderWeight": 160000
        },
        {
            "name": "sauce",
            "orderWeight": 170000
        },
        {
            "name": "ham",
            "orderWeight": 180000
        },
        {
            "name": "healthy",
            "orderWeight": 190000
        },
        {
            "name": "detergent",
            "orderWeight": 200000
        },
        {
            "name": "tissue",
            "orderWeight": 210000
        },
        {
            "name": "beauty",
            "orderWeight": 220000
        },
        {
            "name": "clean",
            "orderWeight": 230000
        },
        {
            "name": "fashion",
            "orderWeight": 240000
        },
        {
            "name": "kitchen",
            "orderWeight": 250000
        },
        {
            "name": "pet",
            "orderWeight": 260000
        },
        {
            "name": "woowa_supply",
            "orderWeight": 270000
        },
        {
            "name": "supply",
            "orderWeight": 280000
        }
    ]'

echo end category bulk