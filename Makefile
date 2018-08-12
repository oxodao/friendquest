start: run libs reset assets

run:
	docker-compose up -d

cli:
	docker-compose exec php ash

cli_yarn:
	docker-compose exec nginx ash

db:
	docker-compose exec database psql -d friendsquest -U friendsquest

reset:
	docker-compose exec php ash reset.sh

assets:
	docker-compose exec nginx yarn run encore dev --watch

libs:
	docker-compose exec php composer install
	docker-compose exec nginx yarn

logs:
	docker-compose logs -f

stop:
	docker-compose stop

genkeys:
	mkdir -p config/jwt
	openssl genrsa -out config/jwt/private.pem -aes256 4096
	openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem
