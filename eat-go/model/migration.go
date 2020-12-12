package model

func migration() {
	DB.AutoMigrate(&Shop{})
	DB.AutoMigrate(&FootPrint{})
	DB.AutoMigrate(&Menu{})
}
