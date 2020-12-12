package api

import (
	"eat/service/shop"
	"github.com/gin-gonic/gin"
)

func CreateShop(c *gin.Context) {
	var service shop.CreateShopService
	if err := c.ShouldBind(&service); err == nil {
		res := service.Create()
		c.JSON(200, res)
	} else {
		c.JSON(200, ErrorResponse(err))
	}
}

func ShopDetail(c *gin.Context) {

}

func ListShop(c *gin.Context) {

}

func UpdateShop(c *gin.Context) {

}

func DeleteShop(c *gin.Context) {

}
