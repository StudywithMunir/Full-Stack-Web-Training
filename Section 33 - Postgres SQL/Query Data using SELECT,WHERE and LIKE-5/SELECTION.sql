-- Selecting all rows
-- SELECT * FROM world_food;

-- Selecting a column
-- SELECT country FROM world_food;

-- Selecting multi columns
-- SELECT country,wheat_production FROM world_food;

-- Conditional Selection
-- SELECT country,wheat_production FROM world_food
-- WHERE wheat_production > 20;

-- Pattern Matching
SELECT country FROM world_food
WHERE country LIKE '%' || 'a';