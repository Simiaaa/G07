#!/bin/bash

# 指定的文件夹路径
directory="/root/folder1"  

# 获取文件夹下的Word和PDF文件，并保存到file.txt
ls -RF "$directory" | grep -v "/" | sed -e '/^$/d' > file.txt

# 生成file.json文件
echo "{" > file.json
echo "  \"files\": [" >> file.json

awk -F '.' '{
    print "    {"
    print "      \"id\": " NR ","
    print "      \"name\": \"" $1 "." $2 "\","
    print "      \"type\": \"" $2 "\""
    print "    }"
}
NR < '`cat file.txt | wc -l`' { printf ",\n" }
END { printf "\n" }' file.txt >> file.json

echo "  ]" >> file.json
echo "}" >> file.json
