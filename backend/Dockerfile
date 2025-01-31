# Dockerfile for Go backend
FROM golang:1.16-alpine as builder

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN CGO_ENABLED=0 go build -o locorideAPI ./cmd/api  

EXPOSE 8080

# CMD ["./main"]
# Optional 
RUN chmod +x /app/locorideAPI


FROM alpine:latest

RUN mkdir /app

WORKDIR /app

COPY --from=builder /app/locorideAPI /app

CMD ["/app/locorideAPI"]