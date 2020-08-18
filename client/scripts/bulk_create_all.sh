echo "started bulk create all"

cid=`./bulk_create_category.sh | grep -i result | cut -d "," -f 4 | cut -d ":" -f 2`

echo "cid: $cid"

scid=`./bulk_create_sub_category.sh $cid | grep -i result | cut -d "," -f 4 | cut -d ":" -f 2`

echo "scid: $scid"

result=`./bulk_create_product.sh $scid | grep -i result`

echo "product created ${result}"
echo "ended bulk create all"