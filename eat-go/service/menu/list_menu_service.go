package menu

import (
	"eat/model"
	"eat/serializer"
	"log"
)

type ListMenuService struct {
	Menus []model.Menu
}

func (service *ListMenuService) ListMenu() serializer.Response {
	var menus []model.Menu

	if result := model.DB.Preload("Shops").Find(&menus); result.Error != nil {
		log.Printf("menus %+v", result)
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

	return serializer.Response{
		Data: serializer.BuildMenus(menus),
	}
}
