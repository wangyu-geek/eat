package model

import (
	"gorm.io/gorm"
)

type Footer struct {
	gorm.Model
	ShopId    int
	VisitedAt int
}
