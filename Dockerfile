FROM node:current as builder
RUN groupadd -r graphql-jsonplaceholder && useradd --no-log-init -r -g graphql-jsonplaceholder graphql-jsonplaceholder
WORKDIR /usr/src/graphql-jsonplaceholder
COPY . ./
RUN npm ci
RUN npm run build

FROM node:current-alpine
WORKDIR /usr/src/graphql-jsonplaceholder
COPY --from=builder /usr/src/graphql-jsonplaceholder/package*.json ./
COPY --from=builder /usr/src/graphql-jsonplaceholder/dist dist/
COPY --from=builder /etc/passwd /etc/passwd
RUN npm ci --production
USER graphql-jsonplaceholder
EXPOSE 8080
ENTRYPOINT ["npm", "start"]
