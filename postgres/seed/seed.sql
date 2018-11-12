BEGIN TRANSACTION;

INSERT INTO users (name, email, entries, joined) VALUES ('a', 'a@gmail.com', 5, '2018-10-10');
INSERT INTO login (hash, email) VALUES ('$2y$12$Ykudc32lQKsT34Ou/6JAK.DrgTowF7uuCtsTQtnr7tQsaGMy54VvO', 'a@gmail.com');

COMMIT;