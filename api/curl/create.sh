curl -X POST -H "Content-Type: application/json" \
    -d '{"aircraft_size": 100, "aircraft_type": 1}' \
    http://localhost:8080/api/aircrafts

curl -X POST -H "Content-Type: application/json" \
    -d '{"aircraft_size": 200, "aircraft_type": 3}' \
    http://localhost:8080/api/aircrafts

curl -X POST -H "Content-Type: application/json" \
    -d '{"aircraft_size": 300, "aircraft_type": 2}' \
    http://localhost:8080/api/aircrafts
