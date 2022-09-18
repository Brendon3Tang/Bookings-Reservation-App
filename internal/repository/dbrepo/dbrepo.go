package dbrepo

//put any functions that we want to be available in the interface in repository.go
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
