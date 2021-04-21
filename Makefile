lint-a:
	bundle exec rubocop -a

lint:
	bundle exec rubocop

test-dc:
	docker-compose run --rm web bash -c "bin/rails test"

test:
	bin/rails test

.PHONY: test