package server

import (
	"eat/api"
	"github.com/gin-gonic/gin"
)

func NewRouter() *gin.Engine {
	r := gin.Default()

	// 路由
	v1 := r.Group("/api/v1")
	{
		//生死检查
		v1.GET("ping", api.Ping)
		//添加商铺
		v1.POST("shop", api.CreateShop)       //创建店铺
		v1.GET("shop/:id", api.ShopDetail)    //店铺详情
		v1.GET("shops", api.ListShop)         //店铺列表
		v1.PUT("shop/:id", api.UpdateShop)    //更新店铺
		v1.DELETE("shop/:id", api.DeleteShop) //删除店铺

		v1.POST("menu", api.CreateMenu) //创建菜单
		v1.GET("menus", api.ListMenu)   //菜单列表
	}

	return r
}
