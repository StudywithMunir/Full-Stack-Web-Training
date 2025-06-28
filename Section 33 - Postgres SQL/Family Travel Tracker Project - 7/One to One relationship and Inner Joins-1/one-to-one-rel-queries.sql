-- Student Table

-- CREATE TABLE student(
-- 	id SERIAL PRIMARY KEY,
-- 	first_name TEXT,
-- 	last_name TEXT
-- );

-- INSERT INTO student (first_name, last_name)
-- VALUES ('Angela', 'Yu');

-- Contact Details Table
-- CREATE TABLE contact_detail(
-- 	id INTEGER REFERENCES student(id) UNIQUE,
-- 	tel TEXT,
-- 	address TEXT
-- );

-- INSERT INTO contact_detail (id, tel, address)
-- VALUES (1, '+123456789', '123 App Brewery Road');


-- making 1:1 relationship using INNER JOIN on student id(pk) with contact_detail(id) FK
SELECT *
FROM student
JOIN contact_detail
ON student.id = contact_detail.id;
