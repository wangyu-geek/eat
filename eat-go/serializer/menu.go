package serializer

import "eat/model"

type Menu struct {
	ID    uint   `json:"id";form:"id"`
	Name  string `json:"name";form:"name"`
	Shops []Shop `json:"shops,omitempty"`
}

type MenuList struct {
	Menus []Menu `json:"menus";form:"menus"`
}

func BuildMenu(item model.Menu) Menu {
	var menu = Menu{
		ID:   item.ID,
		Name: item.Name,
	}
	menu.Shops = BuildShops(item.Shops)
	return menu
}

func BuildMenus(items []model.Menu) MenuList {
	var menusList MenuList
	var menus []Menu
	for _, item := range items {
		menu := BuildMenu(item)
		menus = append(menus, menu)
	}
	menusList.Menus = menus
	return menusList
}
