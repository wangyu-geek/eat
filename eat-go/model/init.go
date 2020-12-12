package model

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// DB 数据库连接实例
var DB *gorm.DB

func Database(fileName string) {
	db, err := gorm.Open(sqlite.Open(fileName), &gorm.Config{
		//DryRun:true,
	})
	if err != nil {
		panic("failed to connect database")
	}
	db.Logger.LogMode(logger.Silent)
	DB = db
	migration()
}
