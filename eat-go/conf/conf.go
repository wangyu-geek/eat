package conf

import (
	"eat/model"
	"eat/util"
	"github.com/joho/godotenv"
	"os"
)

// 初始化配置项
func Init() {
	godotenv.Load()

	// 设置日志级别
	util.BuildLogger(os.Getenv("LOG_LEVEL"))

	// 连接数据库
	model.Database(os.Getenv("SQLITE_EAT"))
}
