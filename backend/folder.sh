#!/bin/bash

# 获取根目录列表并保存到disk.txt
ls / > disk.txt

# 生成folders.json文件
echo "{" > folders.json
echo "  \"folders\": [" >> folders.json

a=0
count=$(cat disk.txt | wc -l)

# 遍历每个根目录
for i in $(cat disk.txt); do
    echo "    {" >> folders.json
    echo "      \"id\": $((++a))," >> folders.json
    echo "      \"name\": \"$i\"," >> folders.json
    echo "      \"folders\": [" >> folders.json
    echo "        {" >> folders.json

    # 获取根目录下的子目录列表
    find "/$i" -type d | awk -F "/" '{print $3}' | sort -n | uniq > 1.txt
    cat 1.txt | sed -e '/^$/d' > 2.txt

    # 遍历子目录列表
    awk '{
        print "          {"
        print "            \"id\": " NR ","
        print "            \"name\": \"" $1 "\""
        if (NR < '`cat 2.txt | wc -l`') {
            print "          },"
        } else {
            print "          }"
        }
    }' 2.txt >> folders.json

    echo "        ]," >> folders.json
    echo "        \"expanded\": false" >> folders.json

    if [ $a -eq $count ]; then
        echo "    }" >> folders.json
    else
        echo "    }," >> folders.json
    fi
done

echo "  ]" >> folders.json
echo "}" >> folders.json
