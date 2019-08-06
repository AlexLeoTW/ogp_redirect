# ogp_redirect

## Quick Start

1. `mkdir public`, then copy image to be used for `og:image` into the folder
2. `npm install` to install the dependencies
3. `DEBUG=ogp_redirect:* node index.js --domain example.com --port 80 --image logo.png --redirect https://github.com/AlexLeoTW/ogp_redirect/`

## Usage:

```
Attach The Open Graph protocol metadata, then redirect
  Usage: index.js [--port <port>]

Options：
  --version       show version
  --domain        domain or ip
  --port, -p      which port to listen on
  --image, -i     which image to use(og:image)
  --redirect, -r  urls to direct to
  --help          display help
```
