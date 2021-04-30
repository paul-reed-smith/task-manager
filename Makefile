lint-a:
	bundle exec rubocop -a

lint:
	bundle exec rubocop

lint-js:
	yarn lint

lint-js-a:
	yarn lint --fix

test-dc:
	docker-compose run --rm web bash -c "bin/rails test"

test:
	bin/rails test

.PHONY: tests