import os
import urllib.request
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

base_dir = "/Users/nnnnm/Documents/trae_projects/GitHub/devfarouk-main/public/svgs"
os.makedirs(base_dir, exist_ok=True)

icons = {
    "python.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "java.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "javascript.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "html5.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "css3.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "pytorch.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    "tensorflow.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    "pandas.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    "mysql.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "figma.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    "xd.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
    "unity.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
    "photoshop.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
    "illustrator.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
    "aftereffects.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg",
    "vscode.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    "pycharm.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg",
    "huggingface.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/huggingface.svg",
    "powerbi.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/powerbi.svg",
}

for name, url in icons.items():
    path = os.path.join(base_dir, name)
    try:
        urllib.request.urlretrieve(url, path)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
