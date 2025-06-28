const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

app.use(express.json()); // JSON body parse için

app.get('/api/users', async (req, res) => {
  const users = await prisma.user.findMany(); // dev.db'den kullanıcıları getir
  res.json(users);
});

app.post('/api/register', async (req, res) => {
  const { name, email, password, departmentId } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        departmentId: parseInt(departmentId),
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Kayıt başarısız', detail: error.message });
  }
});

app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor');
});
