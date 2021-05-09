FROM docker.io/library/node:current AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build

FROM docker.io/library/node:current-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --from=builder --chown=node:node /usr/src/app/package*.json ./
COPY --from=builder --chown=node:node /usr/src/app/dist dist/
RUN npm ci --production --ignore-scripts
USER node
EXPOSE 8080
CMD ["npm", "start"]
