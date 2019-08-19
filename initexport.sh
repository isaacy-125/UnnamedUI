#!/bin/bash
path=`cd $(dirname $0);pwd -P`
cd src
rm -fr exports.tsx
cd components
# 获取components下所有文件夹名字
folder=`ls -l |awk '/^d/ {print $NF}'`
cd ..
touch exports.tsx
for i in $folder
do
    echo "import $i from './components/$i'" >> exports.tsx
done
echo "export {" >> exports.tsx

# 这里格式转换完全是为了循环能拿到下标
val=($folder)

# ${i}为下标 ${#val[*]}为总数 ${val[${i}]} 为当前值
for i in `seq 0 $((${#val[*]}-1))`
do
    if [[ ${i} == $((${#val[*]}-1)) ]]; then
        echo "${val[${i}]}" >> exports.tsx
    else
        echo "${val[${i}]}," >> exports.tsx
    fi
done


# for i in $folder
# do
#     echo "$i," >> exports.tsx
# done
echo "}" >> exports.tsx

cd ..
rm -fr exportEntry.json
touch exportEntry.json
echo "{" >> exportEntry.json
echo '"index": "./src/exports.tsx",' >> exportEntry.json

for i in `seq 0 $((${#val[*]}-1))`
do
    if [[ ${i} == $((${#val[*]}-1)) ]]; then
        echo '"'${val[${i}]}'": "./src/components/'${val[${i}]}'/index"' >> exportEntry.json
    else
        echo '"'${val[${i}]}'": "./src/components/'${val[${i}]}'/index",' >> exportEntry.json
    fi
done
echo "}" >> exportEntry.json


# for i in `ls`
# do
#     echo $i
# done
# filename=`basename $0`
# echo file name is:$filename
