build:
	docker compose build --no-cache --force-rm
up:
	docker compose up
upd:
	docker compose up -d
stop:
	docker compose stop
down:
	docker compose down
destroy:
	docker compose down --rmi all --volumes --remove-orphans
