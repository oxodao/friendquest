run:
	docker-compose up -d
	docker-compose exec php ash reset.sh

cli:
	docker-compose exec php ash
