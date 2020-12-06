package main

import (
	"eat/conf"
	"eat/server"
)

func main() {
	//读取配置
	conf.Init()

	// 装载路由
	r := server.NewRouter()
	r.Run(":8080")
}
