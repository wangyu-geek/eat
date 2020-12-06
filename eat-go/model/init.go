package model

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// DB 数据库连接实例
var DB *gorm.DB

func Database(fileName string) {
	db, err := gorm.Open(sqlite.Open(fileName), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	DB = db
	migration()
}
