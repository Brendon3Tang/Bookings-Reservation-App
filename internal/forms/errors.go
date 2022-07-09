package forms

type errors map[string][]string

//Add adds error message to the slice string for a given field
func (e errors) Add(field, message string) {
	e[field] = append(e[field], message)
}

//Get returns the fisrt error message
func (e errors) Get(field string) string {
	es := e[field]
	if len(es) == 0 {
		return ""
	}

	return es[0]
}
