# Do or Doom

This application is designed with users in mind. We strive to deliver each and every user with a strong sense of impending doom should they not complete their task list in a timely manner. Should users **not** complete their tasks in the time frame allotted, the person that they fear most will be notified, and invited to the users home immediately. Happy Tasking!

---

## We are deployed on Vercel and Server is on Heroku

- [Vercel](https://do-or-doom-fe-zabn.vercel.app/)

---

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

---

## Web Application

Ensure you have installed all dependencies before proceeding. You can do this by using the terminal `pip install -r requirements.txt` on the back end, and `npm i` on the front end.

---

## Tools Used

Microsoft Visual Studio

- Python
- React
- NextJs
- ElephantSql
- Heroku
- Vercel
- Django
- Twilio
- Docker
- Tailwind
- SASS

---

### Database and env

In this application we use ElephantSql.

As such, our application requires an environment variable to connect a database to, and create / read card data to / from, respectively.

A file should be created at the root level of the project named:

`.env`

This file should contain:

`DEBUG=`
`ALLOWED_HOSTS=`
`ALLOW_ALL_ORIGINS=`
`DATABASE_ENGINE=`
`DATABASE_NAME=`
`DATABASE_USER=`
`DATABASE_PASSWORD=`
`DATABASE_HOST=`
`DATABASE_PORT=`
`SECRET_KEY=`
`TWILIO_ACCOUNT_SID=`
`TWILIO_AUTH_TOKEN=`
`MESSAGE_SID=`

* For privacy reasons, we will *not* display or give out our string containing the information we used in our `.env` for development.

Make sure there is ***no*** whitespace between any variables created in this file

---

## Usage

Once you have the dependencies updated, shown above as how to 'build the web application,' you can launch the application either locally using `localhost` or Vercel.

---

### Overview of Game

![Overview of Recent Posts](https://via.placeholder.com/500x250)

---

## Data Flow

The socket server connects to individual clients (a minimum of four), each client represents a player which will be added to a player queue. The server communicates with the database for the prompts/black cards each round, and for the initial answers/white cards which will be replenished after each round.

![Data Flow Diagram](public/dataflow.png)

---

### Overall Project Schema

***Tasks are kept in the database***
![Schema](public/dt.png)

---

## Authors

- Jordan Fleming - [Jordans's Github](https://github.com/Jofleming)
- Nicholas Mercado - [Nicholas' Github](https://github.com/Nicholas-Mercado)
- Lauren Murphy - [Laurens's Github](https://github.com/L-nobilis)
- Emily Landers - [Emily's Github](https://github.com/Emily-Landers)
- Steve Ngo - [Steves's Github](https://github.com/alsosteve)

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.