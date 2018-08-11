start: run reset

run:
	docker-compose up -d

cli:
	docker-compose exec php ash

reset:
	docker-compose exec php ash reset.sh

stop:
	docker-compose stop

genkeys:
	mkdir -p config/jwt
	openssl genrsa -out config/jwt/private.pem -aes256 4096
	openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem
