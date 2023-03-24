--the poll
insert INTO poll (id, data) VALUES ('977d93a1-6d77-4523-bd46-755cda3ccdfc', 'What is your favorite Sci-Fi Media?');

--the options
insert INTO options (id, parent, data, votes) VALUES ('08d10e56-6977-438a-a93d-01044e751271', '977d93a1-6d77-4523-bd46-755cda3ccdfc', 'Star Wars', 0);
insert INTO options (id, parent, data, votes) VALUES ('9742e392-8e06-406d-83d7-0e439acb1729', '977d93a1-6d77-4523-bd46-755cda3ccdfc', 'Star Trek', 0);
insert INTO options (id, parent, data, votes) VALUES ('2fe46659-62d5-4409-a459-a338167190be', '977d93a1-6d77-4523-bd46-755cda3ccdfc', 'Battlestar Galactica', 0);
insert INTO options (id, parent, data, votes) VALUES ('508ee667-c7dd-43d4-9e23-77398bdefa3b', '977d93a1-6d77-4523-bd46-755cda3ccdfc', 'Interstellar', 0);
insert INTO options (id, parent, data, votes) VALUES ('d8c25221-1d77-4d9e-8af1-8689b13d63e9', '977d93a1-6d77-4523-bd46-755cda3ccdfc', 'The Hitchhikers Guide to the Galaxy', 0);
