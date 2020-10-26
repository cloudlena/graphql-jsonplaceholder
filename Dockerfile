FROM node:current as builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:current-alpine
WORKDIR /app
COPY --from=builder /package*.json ./
COPY --from=builder /dist dist/
RUN npm ci --production
USER node
EXPOSE 8080
CMD ["npm", "start"]
