package model

import "gorm.io/gorm"

type Menu struct {
	gorm.Model
	Name  string
	Shops []Shop `gorm:"foreignKey:MenuId"`
}
