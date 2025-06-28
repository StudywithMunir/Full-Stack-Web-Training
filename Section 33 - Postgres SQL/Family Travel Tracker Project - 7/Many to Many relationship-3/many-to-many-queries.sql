-- CREATE TABLE class(
-- 	id SERIAL PRIMARY KEY,
-- 	title VARCHAR(40)
-- );

-- -- relationship table that makes one to many relationship with student and class table
-- CREATE TABLE enrollment(
-- 	student_id INTEGER REFERENCES student(id),
-- 	class_id INTEGER REFERENCES class(id),

-- due to PRIMARY KEY enrollment table cant contain duplicate enteries
-- 	PRIMARY KEY(student_id,class_id)
-- );


-- Inserting Data
INSERT INTO student (first_name, last_name)
VALUES ('Jack', 'Bauer');

INSERT INTO class (title)
VALUES ('English Literature'), ('Maths'), ('Physics');

INSERT INTO enrollment (student_id, class_id ) VALUES (1, 1), (1, 2);
INSERT INTO enrollment (student_id ,class_id) VALUES (2, 2), (2, 3);



