package serializer

type FootPrint struct {
	ID          uint   `json:"id"`
	ShopId      uint   `json:"shop_id"`
	VisitedAt   int    `json:"visited_at"`
	VisitedDate string `json:"visited_date"`
}
