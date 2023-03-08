================================= GROUP BY

id | name | age | eye_color

1 | 'Fred' | 30 | 'brown'
2 | 'Cindy' | 30 | 'green'
3 | 'Ted' | 40 | 'brown'
4 | 'Fred' | 23 | 'brown'
5 | 'Cathy' | 31 | 'hazel'
6 | 'Cathy' | 20 | 'blue'
7 | 'Fred' | 30 | 'blue'


# Group by name
id | name | age | eye_color


-- Ted Group
3 | 'Ted' | 40 | 'brown'


-- Cathy Group
5 | 'Cathy' | 31 | 'hazel'
6 | 'Cathy' | 20 | 'blue'


-- Cindy Group
2 | 'Cindy' | 30 | 'green'


-- Fred Group
1 | 'Fred' | 30 | 'brown'
4 | 'Fred' | 23 | 'brown'
7 | 'Fred' | 30 | 'blue'



SELECT name, AVG(age) FROM people
GROUP BY name;




# Group by age

id | name | age | eye_color

-- 20 Group
6 | 'Cathy' | 20 | 'blue'

-- 23 Group
4 | 'Fred' | 23 | 'brown'

-- 30 Group
7 | 'Fred' | 30 | 'blue'
2 | 'Cindy' | 30 | 'green'
1 | 'Fred' | 30 | 'brown'

-- 31 Group
5 | 'Cathy' | 31 | 'hazel'

-- 40 Group
3 | 'Ted' | 40 | 'brown'


# Group by eye_color

id | name | age | eye_color

1 | 'Fred' | 30 | 'brown'
2 | 'Cindy' | 30 | 'green'
3 | 'Ted' | 40 | 'brown'
4 | 'Fred' | 23 | 'brown'
5 | 'Cathy' | 31 | 'hazel'
6 | 'Cathy' | 20 | 'blue'
7 | 'Fred' | 30 | 'blue'


# Group by name, age

id | name | age | eye_color


-- Fred 30 Group
1 | 'Fred' | 30 | 'brown'
7 | 'Fred' | 30 | 'blue'

-- Cindy 30 Group
2 | 'Cindy' | 30 | 'green'

-- Etc...
3 | 'Ted' | 40 | 'brown'

4 | 'Fred' | 23 | 'brown'

5 | 'Cathy' | 31 | 'hazel'

6 | 'Cathy' | 20 | 'blue'





================================= GROUP BY BONUSES

# what are the names of the 10 most recently hired females in the company? the first 10? (no group by needed)
# what are the top three most common job titles?
# what is the most common 'from date' for job titles? for staff only?
# what is the highest employee number for an engineer?
# what is the most common birthday?
# what is the most common female birthday? male?
# what is the most common hire date for female and male employees?
# what is the longest last name of someone born on March 8, 1952?
# what is the lowest employee number for the first senior engineers in the company?


========================> Codes <======================
    # GROUP BY LECTURE

# The "group by" clause is used to aggregate a table into various groups of shared characteristics.
#
# Grouping data is often accompanied with the use of aggregate functions to derive additional information
# about the various groupings.
#
# Most common aggregate functions are:
#
#     MIN()
#     MAX()
#     SUM()
#     AVG()
#     COUNT()
#
# One or multiple columns may be grouped together.
#
# No table columns may exist in a select clause that are not contained in the group by clause.
    #
    #     The group by clause is after an optional where clause and before an optional order by clause.
                                        #
                                        #     The order of a result set may be by an aggregate column but an aggregate column cannot be referenced in a where clause.
                                        #
                                        # A having clause is a way to use aggregate results as if in a where clause.

                                        use employees;

# Grouping by a single column

SELECT gender FROM employees;

SELECT DISTINCT gender from employees;

SELECT gender FROM employees
GROUP BY gender;


SELECT gender, COUNT(*) from employees
group by gender;

SELECT gender, COUNT(*) from employees
group by gender;

SELECT gender, birth_date, COUNT(*) FROM employees
GROUP BY gender, birth_date ORDER BY birth_date;

# M  1952-02-01  6
# F  1952-02-01  ?
# M  1952-02-02  48
# F  1952-02-02  ?




# Grouping by multiple columns

SELECT first_name, last_name FROM employees
GROUP BY first_name, last_name;

SELECT DISTINCT first_name, last_name FROM employees;

# COUNT function

# Find total number of employees
# SELECT COUNT(*) FROM employees;

# Find the most common name
SELECT first_name, last_name, count(*) FROM employees
GROUP BY first_name, last_name;

SELECT first_name, last_name, count(*) FROM employees
GROUP BY first_name, last_name
ORDER BY count(*) DESC;

# Find the most common female and male name
SELECT first_name, last_name, gender, count(*) FROM employees
GROUP BY first_name, last_name, gender
ORDER BY count(*) desc;



# =========== AGGREGATE FUNCTIONS

# COUNT


# Aggregating with group by

# Find total number of female and male employees
SELECT gender, COUNT(*) FROM employees
GROUP BY gender;

# MIN and MAX
# Select the first and last hire date for each first name
SELECT first_name, MIN(hire_date) as 'First Hired', MAX(hire_date) as 'Last Hired' FROM employees
GROUP BY first_name;

DESCRIBE salaries;

# Find the minimum, maximum, average, and total number of salaries
SELECT COUNT(salary), MIN(salary), MAX(salary), AVG(salary), SUM(salary) FROM salaries;

# Find the min, max, avg, total, and count of each employee's salaries
SELECT emp_no, COUNT(salary), MIN(salary), MAX(salary), AVG(salary), SUM(salary) FROM salaries
GROUP BY emp_no
ORDER BY MAX(salary) DESC;


# show only the first and last name combinations with more than three employees each
select first_name, last_name, count(*) from employees group by first_name, last_name having count(*) > 3 order by count(*) desc;



# Find the most common name
# Find the most common female and male name
# Find total number of female and male employees
# Find the highest employee number of each unique first name
# Select the first and last hire date for each first name
# Find the minimum, maximum, average, and total number of salaries
# Find the min, max, avg, total, and count of each employee's salaries