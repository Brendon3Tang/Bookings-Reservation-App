package models

// the models package will be used to store things in a database and to get data from database and store them in this model

//Reservation holds reservation data
type Reservation struct {
	FirstName string
	LastName  string
	Email     string
	Phone     string
}
