import urllib.request
import os

os.makedirs('public/svgs', exist_ok=True)

# Anthropic/Claude icon
try:
    url = "https://cdn.simpleicons.org/anthropic"
    urllib.request.urlretrieve(url, "public/svgs/claude.svg")
    print("Successfully downloaded Claude icon.")
except Exception as e:
    print(f"Error downloading Claude icon: {e}")

# If that fails, let's try another source or write a raw SVG
