FROM python:3.12

WORKDIR /app

COPY ./pyproject.toml /app/

RUN pip install poetry \
    && poetry config virtualenvs.create false \
    && poetry install --no-dev

COPY . /app/

EXPOSE 8000

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]