create table alimentos (
    id int auto_increment primary key,
    alimento varchar(255) not null,
    temperatura float not null,
    tempo int not null,
    image longblob,
    create_at datetime default current_timestamp,
    update_at datetime default current_timestamp on update current_timestamp
)

create table sensores (
    id int auto_increment primary key,
    type varchar(100),
    svalues JSON,
    create_at datetime default current_timestamp
)


