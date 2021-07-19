-- BUSY DAYS - rows with the total number of assignments greater than or equal to 10

SELECT day, count(*) as total_assignments 
FROM assignments
GROUP BY day
HAVING count(*) >= 10
ORDER BY day;