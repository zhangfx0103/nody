import express from 'express'
 
import {users_kepule, home_kepule } from './API/user.js'
 
const router = express.Router()

router.get('/home', home_kepule)
router.post('/login', users_kepule)
 
export default router