BEGIN TRANSACTION;

INSERT INTO users (name, email, entries, joined) VALUES ('Jessie', 'jessie@gmail.com', 5, '2018-10-10');
INSERT INTO login (hash, email) VALUES ('$2b$10$4AO/.b2jPIuy00ZrDiUDce6.RymdOgqfYforYLPwmn8TdmXWUS3fS', 'jessie@gmail.com');

COMMIT;