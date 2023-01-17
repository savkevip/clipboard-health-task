# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

- note: more details about db relations between 3 tables
- question: is agent work for one facility or more?

### Tasks 1

- time effort: 3-4h

- understand relationships between existing tables in db.
- is there additional "transactional" table which keeps dat that connects agents, facilities, shifts and how many hours each agnet worked?
- does one agent work for only one facility or can be assigned to for more?
- in current db models adding new filed which impact it can have?

### Task 2.1 BE

- time effort: 1-2h

- assumption: agent is assigned only to one facility in db
- extend agnet table with customId filed
- check and extend `generateReport` and all other APIs with that new field and check validations as well if needed

### Task 2.2 BE

- time effort: 2-3h

- assumption: agent is assigned to many facilities in db and there is "transactional" table
- add in agent model property customId in "transactional" table so we can easily have many customIds for one agent
- check and extend `generateReport` and all other APIs with that new field and check validations as well if needed

### Task 3 FE

- time effort: 1-2h

- assumption: agent is assigned only to one facility in db
- add filed for that customId in all needed places and check validation for some form on adding and editing
