FROM node:20-alpine AS builder

ARG PUBLIC_TURNSTILE_SITE_KEY
ARG PUBLIC_PHONE_NUMBER
ARG PUBLIC_EMAIL_ADDRESS

ENV PUBLIC_TURNSTILE_SITE_KEY=$PUBLIC_TURNSTILE_SITE_KEY
ENV PUBLIC_PHONE_NUMBER=$PUBLIC_PHONE_NUMBER
ENV PUBLIC_EMAIL_ADDRESS=$PUBLIC_EMAIL_ADDRESS
ENV SECRET_TURNSTILE_SECRET_KEY=dummy

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
