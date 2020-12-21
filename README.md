Backend-Url : https://got-api-web-app.herokuapp.com

/list - returns list(array) of all the places where the battle has taken place.

/count - returns the total number of battles occurred.

/search
/search?king=Robb Stark

- returns list of battles where 'attacker_king' or 'defender_king' was
  'Robb Stark'
  Also works for multiple queries
  /search?king=Robb Stark&location=Riverrun&type=siege
