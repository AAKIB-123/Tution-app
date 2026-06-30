import connectDB from './config/db.js'
import app from './app.js'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config() 

const port = process.env.PORT || 5000     


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

connectDB() 