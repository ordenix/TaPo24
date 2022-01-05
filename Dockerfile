FROM node:lts-alpine AS builder

RUN mkdir build_zone
WORKDIR /build_zone
COPY . .
RUN npm install
RUN npm run build

FROM caddy

COPY --from=builder /build_zone/dist .
COPY --from=builder /build_zone/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
