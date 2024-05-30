# trading-kubernetes-demo

## disclaimer

This application was quickly built for a talk tech demo, it is not production ready, nor does it follow proper pattern design, it should only be used as a simple reference point for containerization and kubernetes manifest examples

## docker compose example

The docker-compose.yaml file provided does not build the app images itself (although possible), so we first need to build each application and then build corresponding docker images

From within each java app, run:
```
mvn clean package -DskipTests
```

Followed by:
```
docker build -t <service_name> .
```

For the UI we can just run the docker build script from with trad-appi-ui directory:
```
docker build -t trading-app-ui .
```

To run the application locally via docker compose, run:
```
docker compose up -d
```

## kubernetes example

To run the application on Azure with kubernets, follow the guide in Azure Demo.md

