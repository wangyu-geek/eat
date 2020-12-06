package serializer

import "eat/model"

type Shop struct {
	ID   uint   `json:"id"`
	Name string `json:"name"`
}

func BuildShop(item model.Shop) Shop {
	return Shop{
		ID:   item.ID,
		Name: item.Name,
	}
}
