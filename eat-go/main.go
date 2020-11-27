package main

import (
	"fmt"
	"net/http"
)

type EatService struct {
}

func (eat EatService) ServeComm(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s", "What do you want to eat?")
}

func (eat EatService) ServeHello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s", "I want to eat breakfast")
}

func main() {
	var eat EatService
	http.HandleFunc("/", eat.ServeComm)
	http.HandleFunc("/hello", eat.ServeHello)
	http.ListenAndServe(":8080", nil)
}
