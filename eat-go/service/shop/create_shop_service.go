package shop

import (
	"eat/model"
	"eat/serializer"
	"log"
)

type CreateShopService struct {
	Name   string `json:"name" form:"name" binding:"required,min=1,max=30"`
	MenuId uint   `json:"menu_id" form:"menu_id" binding:"required"`
}

func (service *CreateShopService) Create() serializer.Response {
	var menu = model.Menu{}
	if result := model.DB.First(&menu, service.MenuId); result.Error != nil {
		return serializer.Response{
			Code:  serializer.CodeNotFound,
			Msg:   "菜单查找失败",
			Error: result.Error.Error(),
		}
	} else if result.RowsAffected == 0 {
		return serializer.Response{
			Code: serializer.CodeNotFound,
			Msg:  "菜单不存在",
		}
	}

	shop := model.Shop{
		MenuId: service.MenuId,
		Name:   service.Name,
	}
	log.Printf("create shop %+v", shop)

	if err := model.DB.Create(&shop).Error; err != nil {
		log.Printf("create shop error: %s", err.Error())
		return serializer.Response{
			Code:  0,
			Data:  nil,
			Msg:   "商铺创建失败",
			Error: err.Error(),
		}
	}

	return serializer.Response{
		Data: serializer.BuildShop(shop),
	}
}
