#!/bin/bash
# 指定包含要检索文件的文件夹路径
directory=$2
# 指定要搜索的关键词
keyword=$1 
declare -A results
search_files() {
    local file_path="$1"
    # 提取文件扩展名
    local file_extension="${file_path##*.}"
    # 判断是否为.doc、.docx、.pdf文件
    if [[ -f "$file_path" ]]; then
        case "$file_extension" in
            docx)
                text=$(docx2txt "$file_path")
                ;;
            doc)
                text=$(catdoc "$file_path")
                ;;
            pdf)
                text=$(pdftotext "$file_path" -)
                ;;
            *)
                return
                ;;
        esac

        while IFS= read -r line; do
            if echo "$line" | grep -q "$keyword"; then
                line_number=$(grep -n "$keyword" <<< "$text" | grep "$line" | cut -d: -f1)
                result="{ \"rowIndex\": \"$line_number\",\"content\": \"$line\"}"
                if [[ -z ${results["$file_path"]} ]]; then
                    results["$file_path"]="$result"
                else
                    results["$file_path"]+=",$result"
                fi
                ((id_counter++))
            fi
        done <<< "$text"
    elif [[ -d "$file_path" ]]; then
        for file in "$file_path"/*; do
            search_files "$file"
        done
    fi
}
# 清空旧的 Line.json 文件
> Line.json
search_files "$directory"
# 将结果写入 Line.json 文件
echo "{" > Line.json
echo "  \"files\": [" >> Line.json
# 初始化计数器
pid=0
first_path=1
for file_path in "${!results[@]}"; do
    if [[ $first_path -eq 0 ]]; then
        echo  "," >> Line.json
    else
        first_path=0
    fi
    echo "    {" >> Line.json
    echo "      \"id\":$((++pid))," >> Line.json
    echo "      \"path\": \"$file_path\"," >> Line.json
    echo "      \"data\": [${results[$file_path]}]" >> Line.json
    echo -n "    }" >> Line.json
done
echo "  ]" >> Line.json
echo "}" >> Line.json

