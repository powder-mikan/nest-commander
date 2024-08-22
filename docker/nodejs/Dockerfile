FROM node:22-alpine AS base

# Timezone
RUN apk add --update-cache --no-cache tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata

WORKDIR /usr/src/app

# ------------------------------
# for development
# ------------------------------
FROM base AS development

RUN npm install -g @nestjs/cli
