//设置全局router
const express=require('express');

const tasksRouter=require('./task')
const { route } = require('./task');
const router=express.Router();
route.use('/tasks',tasksRouter);

module.exports=router;