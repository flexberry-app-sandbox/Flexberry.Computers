docker build --no-cache -f SQL\Dockerfile.PostgreSql -t computers/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t computers/app ../..
