# Full-Stack Development Learning Log

A collection of independent practice projects covering Express, EJS, REST-style CRUD, SQL, MongoDB, and React. Each exercise has its own dependencies and should be run from its own directory.

## Learning path

| Order | Exercise | Focus |
| --- | --- | --- |
| 1 | [Day1](Day1/) | Express fundamentals |
| 2 | [Instagram template](Day2%28igTemplate%29/) | EJS templates and sample JSON data |
| 3 | [REST APIs](Day3%28RestAPIs%29/) | CRUD pages, route handlers, and method override |
| 4 | [SQL with Node](Day4%28SQLwithNODE%29/) | MySQL integration with mysql2 |
| 5 | [Chat messages](Day5%28ChatMessages%29/) | MongoDB models and message CRUD |
| 6 | [React activity](React/Activity/) | Components and props with React/Vite |

## Getting started

```bash
git clone https://github.com/tejas764/Development_learning.git
cd Development_learning
cd Day1
npm install
node index.js
```

For another backend exercise, enter its folder, install its dependencies, and run `node index.js`. Check the exercise's `index.js` and local `Readme.md` for its port, routes, and data setup. Quote folder names containing parentheses in your terminal.

### React activity

From the repository root:

```bash
cd React/Activity
npm install
npm run dev
```

Open the local URL printed by Vite. Available checks are `npm run build` and `npm run lint`.

## Database exercises

- **Day 4:** configure a local MySQL database and connection settings referenced in `index.js`.
- **Day 5:** configure MongoDB and inspect `init.js` before using it to initialize data.

Use development-only data and your own credentials. These are learning exercises rather than production services.

## Repository organization

The day folders preserve the learning sequence. `React/Activity` is a separate frontend project. There is no shared root package manifest or single command that runs all exercises.

## Contributing

Keep examples focused on their topic, explain setup changes in the exercise README, and include a short manual verification procedure. Backend `test` scripts, where present, are placeholders.
