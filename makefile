build-api:
	docker build -t marvel-api packages/api

build-ui:
	docker build \
	--build-arg REACT_APP_API==http://localhost:4000/graphql \
	-t marvel-ui packages/client

run-api:
	docker run -p 4000:4000 -d marvel-api

run-client:
	docker run -p 3000:3000 -d marvel-ui