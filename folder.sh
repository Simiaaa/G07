#获取文件夹
ls -F | grep "/$"> 1.json
awk   -F "/"  '{print $1}' 1.json > 2.json
echo "{" >1.json
echo "  \"folders\": [ " >> 1.json
awk '{printf "    \"" $1 "\"" }NR<'`cat 2.json | wc -l`' {printf ",\n"}END{printf "\n"}' 2.json >>1.json
echo "  ]" >>1.json
echo "}" >>1.json
