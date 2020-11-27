FROM golang as build
ENV GO111MODULE=on
ENV GOPROXY=https://mirrors.aliyun.com/goproxy/

ADD . /eat

WORKDIR /eat

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o api_server

FROM alpine:3.7

RUN echo "http://mirrors.aliyun.com/alpine/v3.7/main/" > /etc/apk/repositories && \
    apk update && \
    apk add ca-certificates && \
    echo "hosts: files dns" > /etc/nsswitch.conf

COPY --from=build /eat/api_server /usr/bin/api_server

RUN chmod +x /usr/bin/api_server

ENTRYPOINT ["api_server"]