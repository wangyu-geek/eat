package model

func migration() {
	DB.AutoMigrate(&Shop{})
	DB.AutoMigrate(&Footer{})
}
