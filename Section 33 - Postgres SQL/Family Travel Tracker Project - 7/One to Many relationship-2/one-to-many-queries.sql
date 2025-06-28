-- CREATE TABLE homework_submission(
-- 	id SERIAL PRIMARY KEY,
-- 	mark INTEGER,
-- 	student_id INTEGER REFERENCES student(id) 
-- );

-- -- we dont need to mention id field of homework table bcz it auto increments
-- INSERT INTO homework_submission (mark, student_id)
-- VALUES (98, 1), (87, 1), (88, 1);

-- making one to many relationship using inner join
SELECT *
FROM student 
JOIN homework_submission
ON student.id = homework_submission.student_id;