package service

import (
	"eat/model"
	"eat/serializer"
)

type CreateShopService struct {
	Name string `json:"name" form:"name" binding:"required,min=1,max=30"`
}

func (service *CreateShopService) Create() serializer.Response {
	shop := model.Shop{
		Name: service.Name,
	}
	if err := model.DB.Create(&shop).Error; err != nil {
		return serializer.Response{
			Code:  serializer.CodeDBError,
			Msg:   "商铺创建失败",
			Error: err.Error(),
		}
	}

	return serializer.Response{
		Data: serializer.BuildShop(shop),
	}
}
