package dbrepo

import (
	"database/sql"

	"github.com/tsawler/bookings-app/internal/config"
	"github.com/tsawler/bookings-app/internal/repository"
)

type postgreDBRepo struct {
	App *config.AppConfig
	DB  *sql.DB // a pointer to postgre
}

func NewPostgreRepo(conn *sql.DB, a *config.AppConfig) repository.DatabaseRepo {
	return &postgreDBRepo{
		App: a,
		DB:  conn,
	}
}
