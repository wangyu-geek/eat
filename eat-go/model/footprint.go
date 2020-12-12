package model

import "gorm.io/gorm"

type FootPrint struct {
	gorm.Model
	ShopId    int
	VisitedAt int
}
