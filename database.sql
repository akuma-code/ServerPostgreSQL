CREATE TABLE okna(
    id SERIAL  PRIMARY KEY,
    title VARCHAR(255),
    count INTEGER
);


create TABLE types(
    id SERIAL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    ok_id INTEGER,
    FOREIGN KEY (ok_id) REFERENCES okna (id)
);

create TABLE person(
    id id SERIAL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    age INT
);

CREATE TABLE online_store(
    id SERIAL  PRIMARY KEY,
    title VARCHAR(255),
    count INTEGER
);