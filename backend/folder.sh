#获取根目录
ls / > disk.txt
#输出格式
echo "{" >folders.json
echo "    \"folders\": [ " >> folders.json
#遍历每一个根目录下的文件
a=0
count=$(cat disk.txt | wc -l)
for i in `cat disk.txt`
do      
echo "      {">> folders.json
#输出该根目录id
echo "        \"id\":"$((++a))",">> folders.json
#输出该根目录name
echo "        \"name\": \""$i"\"">> folders.json
#输出该文件下根目录
echo "        \"folders\": [ " >> folders.json
echo "          {">> folders.json
find /$i -type d |awk -F "/" '{print $3 }'|sort -n |uniq > 1.txt
cat 1.txt|sed -e '/^$/d' > 2.txt
cat  folders.txt|tr -s '\n'
awk '{print "          {"}{print"            \"id\":"NR","}
{print"            \"name\": \""$1"\""}{print "          }"}' 2.txt
 >> folders.json
if [ $a -eq $count ]
then echo "    }">> folders.json
else echo "    },">> folders.json
fi
done
echo "    ]" >> folders.json
echo "  }" >> folders.json
