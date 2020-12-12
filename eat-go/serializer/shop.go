package serializer

import "eat/model"

type Shop struct {
	ID     uint   `json:"id";form:"id"`
	MenuId uint   `json:"menu_id";form:"menu_id"`
	Name   string `json:"name";form:"name"`
}

func BuildShop(item model.Shop) Shop {
	return Shop{
		ID:     item.ID,
		MenuId: item.MenuId,
		Name:   item.Name,
	}
}

func BuildShops(items []model.Shop) []Shop {
	var shops []Shop
	for _, item := range items {
		tempShop := Shop{
			ID:     item.ID,
			Name:   item.Name,
			MenuId: item.MenuId,
		}
		shops = append(shops, tempShop)
	}
	return shops
}
