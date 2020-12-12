package api

import (
	"eat/service/menu"
	"github.com/gin-gonic/gin"
)

func CreateMenu(c *gin.Context) {
	var service menu.CreateMenuService
	if err := c.ShouldBind(&service); err == nil {
		res := service.CreateMenu()
		c.JSON(200, res)
	} else {
		c.JSON(200, ErrorResponse(err))
	}
}

func ListMenu(c *gin.Context) {
	var service menu.ListMenuService
	if err := c.ShouldBind(&service); err == nil {
		res := service.ListMenu()
		c.JSON(200, res)
	} else {
		c.JSON(200, ErrorResponse(err))
	}
}

func Update(c *gin.Context) {

}

func Delete(c *gin.Context) {

}
