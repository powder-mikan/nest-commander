FROM node:22-alpine AS base

# Timezone
RUN apk add --update-cache --no-cache tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata

WORKDIR /usr/src/app

# install package
COPY ./app/package*.json ./
RUN npm ci

# ------------------------------
# for development
# ------------------------------
FROM base AS development

RUN npm install -g @nestjs/cli

# ------------------------------
# for build
# ------------------------------
FROM base AS build

COPY ./app/ /usr/src/app/
RUN npm run build

# ------------------------------
# for Bundled Container
# ------------------------------
FROM gcr.io/distroless/nodejs22-debian12 AS bundled

WORKDIR /usr/src/app
ENV TZ Asia/Tokyo

COPY ./app/tsconfig.json ./
COPY --from=build --chown=nonroot:nonroot /usr/src/app/dist/ ./dist/
COPY --from=base /usr/src/app/node_modules/ ./node_modules/

# CMD ["dist/main.js"]
