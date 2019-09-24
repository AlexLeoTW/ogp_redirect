# ogp_redirect

## Quick Start

1. `cp <img> logo.png`, copy image to be used for `og:image` into the folder
2. `npm install` to install the dependencies
3. `DEBUG=ogp_redirect:* node index.js --domain example.com --port 80 --redirect https://github.com/AlexLeoTW/ogp_redirect/`

## Usage:

```
Attach The Open Graph protocol metadata, then redirect
  Usage: index.js [--port <port>]

Options：
  --version       show version
  --port, -p      which port to listen on
  --image, -i     which image to use(og:image)
  --redirect, -r  urls to direct to
  --help          display help
```

--------------------------------------------------------------------------------

## Using `Docker`

1. `cp <img> logo.png`, copy image to be used for `og:image` into the folder
2. `docker build -t ogp_redirect:latest .` build the container
3. `docker run -p 3000:3000 -it ogp_redirect:latest` run the container

or you can mount pictures into the container with `-v`:

```sh
docker run -p 3000:3000 -v $PWD:/ogp_redirect/public/ext -it ogp_redirect:latest \
    --image ext/logo.png
```
