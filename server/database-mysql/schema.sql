DROP DATABASE milk;
CREATE DATABASE milk;

USE milk;
CREATE TABLE fournisseur (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(350) NOT NULL,
    lastname varchar(350) NOT NULL,
    email varchar(350) NOT NULL,
    phonenumber int NOT NULL,
    adress varchar(350) NOT NULL,
    image varchar(350) NOT NULL,
    password varchar(350) NOT NULL,
    PRIMARY KEY (ID)
);	

CREATE TABLE reception (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(350) NOT NULL,
    lastname varchar(350) NOT NULL,
    email varchar(350) NOT NULL,
    phonenumber int NOT NULL,
    adress varchar(350) NOT NULL,
    image varchar(350) NOT NULL,
    password varchar(350) NOT NULL,
    PRIMARY KEY (ID)
);	

CREATE TABLE analyse (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(350) NOT NULL,
    lastname varchar(350) NOT NULL,
    email varchar(350) NOT NULL,
    phonenumber int NOT NULL,
    adress varchar(350) NOT NULL,
    image varchar(350) NOT NULL,
    password varchar(350) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE facture (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(350) NOT NULL,
    lastname varchar(350) NOT NULL,
    email varchar(350) NOT NULL,
    phonenumber int NOT NULL,
    adress varchar(350) NOT NULL,
    image varchar(350) NOT NULL,
    password varchar(350) NOT NULL,
    PRIMARY KEY (ID)
);	

CREATE TABLE admin (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(350) NOT NULL,
    lastname varchar(350) NOT NULL,
    email varchar(350) NOT NULL,
    password varchar(350) NOT NULL,
    PRIMARY KEY (ID)
);

-- CREATE TABLES 

CREATE TABLE collier (
    id int NOT NULL AUTO_INCREMENT,
    code int NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE lesAnalyses (
    id int NOT NULL AUTO_INCREMENT,
    humidite int NOT NULL,
    Ph int NOT NULL,
    densite int NOT NULL,
    acidite int NOT NULL,
    aspeect_couleur VARCHAR(50) NOT NULL,
    matiere_grasse int NOT NULL,
    etat VARCHAR(50) NOT NULL,
    PRIMARY KEY (ID),
    fournisseur_id int,
    FOREIGN KEY (fournisseur_id) REFERENCES fournisseur(id)

);

CREATE TABLE lesFactures (
    id int NOT NULL AUTO_INCREMENT,
    immatricul int NOT NULL,
    montant int NOT NULL,
    date VARCHAR(250) NOT NULL,
    PRIMARY KEY (ID),
    fournisseur_id int,
    FOREIGN KEY (fournisseur_id) REFERENCES fournisseur(id)

);

-- insert into lesAnalyses (humidite, ph, densite, acidite, aspeect_couleur, matiere_grasse, etat) values (1, 1, 1, 1, "aspect", "matiere", "etat", select id from fournisseur where id = 1)



/*  Execute this file from the command line by typing:
 *    mysql -u root -p < database-mysql/schema.sql
 *  to create the database and the tables.*/