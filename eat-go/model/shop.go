package model

import "gorm.io/gorm"

type Shop struct {
	gorm.Model
	MenuId uint
	Name   string
}
