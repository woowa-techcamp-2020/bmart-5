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
        }
    ]'

echo end category bulk