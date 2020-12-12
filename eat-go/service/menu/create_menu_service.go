package menu

import (
	"eat/model"
	"eat/serializer"
)

type CreateMenuService struct {
	Name string `json:"name" form:"name" binding:"required,min=1,max=30"`
}

func (service *CreateMenuService) CreateMenu() serializer.Response {
	menu := model.Menu{
		Name: service.Name,
	}
	if err := model.DB.Create(&menu).Error; err != nil {
		return serializer.Response{
			Code:  serializer.CodeDBError,
			Msg:   "菜单创建失败",
			Error: err.Error(),
		}
	}

	return serializer.Response{
		Data: serializer.BuildMenu(menu),
	}
}
