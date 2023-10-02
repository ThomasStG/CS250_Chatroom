import asyncio
import subprocess
import webbrowser
import re
import os

def extract_urls(text):
    # Regular expression pattern to find URLs in the text
    url_pattern = r'https?://\S+'
    return re.findall(url_pattern, text)

async def run_command():
    cmd = ['npm', 'run', 'dev']

    # Start the subprocess asynchronously
    process = await asyncio.create_subprocess_exec(
        *cmd,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE
    )

    # Initialize an empty list to store lines of output
    output_lines = []

    while True:
        # Read and process the standard output line by line
        line = await process.stdout.readline()
        if not line:
            break

        # Decode the line from bytes to a string using UTF-8 encoding
        line = line.decode('utf-8')
        urls = extract_urls(line)
        if urls:
            webbrowser.open(urls[0])
            #print(f"open this link: ", urls[0])


if __name__ == '__main__':
    #os.chdir('/Users/thomas/Onedrive-SNHU/23FADAY/CS250/Project/CS250_Chatroom')
    subprocess.run(['npm', 'i'], check=True)
    subprocess.run(['npx', 'prisma', 'db', 'push'], check=True)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run_command())
