import os
os.environ['FLASK_ENV'] = 'development'
import subprocess
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/system/files', methods=['POST'])
def get_files_list():
    folder_path = request.get_json().get('folderPath')

    # 执行相应的 shell 脚本，并获取输出
    command = ['/bin/bash', './file.sh', folder_path]
    try:
        output = subprocess.check_output(command, universal_newlines=True)
    except subprocess.CalledProcessError:
        # 脚本执行失败的处理逻辑
        return jsonify({'error': 'Failed to execute script'})

    # 读取生成的 JSON 文件内容
    with open('file.json', 'r') as file:
        data = file.read()

    # 返回 JSON 数据
    return jsonify(data)

@app.route('/system/folders', methods=['GET'])
def get_folders_list():
    # 执行相应的 shell 脚本，并获取输出
    command = ['/bin/bash', './folders.sh']
    try:
        output = subprocess.check_output(command, universal_newlines=True)
    except subprocess.CalledProcessError:
        # 脚本执行失败的处理逻辑
        return jsonify({'error': 'Failed to execute script'})

    # 读取生成的 JSON 文件内容
    with open('folders.json', 'r') as file:
        data = file.read()

    # 返回 JSON 数据
    return jsonify(data)
@app.route('/system/keywordList', methods=['POST'])
def get_keyword_list():
    keyword = request.get_json().get('keyword')
    folder_path = request.get_json().get('folderPath')

    # 执行相应的 shell 脚本，并获取输出
    command = ['/bin/bash', './line.sh', keyword, folder_path]
    try:
        output = subprocess.check_output(command, universal_newlines=True)
    except subprocess.CalledProcessError:
        # 脚本执行失败的处理逻辑
        return jsonify({'error': 'Failed to execute script'})

    # 读取生成的 JSON 文件内容
    with open('Line.json', 'r') as file:
        data = file.read()
    # 返回 JSON 数据
    return jsonify(data)

if __name__ == '__main__':
    app.run()

	
	
