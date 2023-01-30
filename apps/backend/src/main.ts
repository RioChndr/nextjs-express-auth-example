import express from 'express';
import * as path from 'path';
import { PrismaClient } from '@prisma/client'
import BodyParser from 'body-parser'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const app = express();
app.use(BodyParser.json());
// allow cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

app.post('/signup', async (req, res) => {
  try {
    await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
      }
    })

    // return res successfully
    res.send({ message: 'User created successfully' })
  } catch (e) {
    // return res with error 300
    res.status(300).send({ message: 'Error creating user' })
  }
})

app.post('/signin', async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email
      }
    })
    if (bcrypt.compareSync(req.body.password, user.password)) {
      return res.send({
        message: 'User logged in successfully',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      })
    }
  } catch (e) {
    res.status(300).send({ message: 'failed to register' })
  }
})


const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);