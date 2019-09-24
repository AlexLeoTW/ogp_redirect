FROM node:12-stretch

RUN git clone https://github.com/AlexLeoTW/ogp_redirect/
RUN cd /ogp_redirect && npm install
COPY public/logo.png /ogp_redirect/public/logo.png

EXPOSE 3000
WORKDIR /ogp_redirect
ENV DEBUG=ogp_redirect:*
ENTRYPOINT ["node", "index.js"]
