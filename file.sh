#获取文件夹下word和pdf文件
find folder1 -name "*.doc" > 1.json
find folder1 -name "*.docx" >> 1.json
find folder1 -name "*.pdf" >> 1.json
awk -F "/" '{print $2}' 1.json > 2.json
echo "{" >1.json
echo "  \"files\": [ " >> 1.json
awk '{printf "    \"" $1 "\"" }NR<'`cat 2.json | wc -l`' {printf ",\n"}END{printf "\n"}' 2.json >>1.json
echo "  ]" >>1.json
echo "}" >> 1.json
