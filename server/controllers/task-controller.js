const Joi = require("Joi");
const Task = require("../models/task");

// add a new task

const addNewTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
  userId: Joi.string().required(),
  priority: Joi.string().required(),
});

const addNewTask = async (req, res) => {
  const { title, description, status, userId, priority } = await req.body;

  // validate the Schema
  const { error } = addNewTaskSchema.validate({
    title,
    description,
    status,
    userId,
    priority,
  });

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    const newCreatedTask = await Task.create({
      title,
      description,
      status,
      userId,
      priority,
    });

    if (newCreatedTask) {
      return res.status(200).json({
        success: true,
        message: "Task created successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Some error occured, Please Try Again!!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Some error occured, Please Try Again!!",
    });
  }
};

// get all task by userid

const getAllTask = async (req, res) => {
  const { id } = req.params;
  try {
    const getAllTaskByUserId = await Task.find({ userId: id });

    if (getAllTaskByUserId) {
      return res.status(200).json({
        success: true,
        tasksList: getAllTaskByUserId,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Some error occured, Please Try Again!!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Some error occured, Please Try Again!!",
    });
  }
};

// delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Task Id is Required",
      });
    }

    const deleteTask = await Task.findByIdAndDelete(id);
    if (deleteTask) {
      return res.status(200).json({
        success: true,
        message: "Task deleted Successfully",
        // tasksList: getAllTaskByUserId,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Some error occured, Please Try Again!!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Some error occured, Please Try Again!!",
    });
  }
};

//update a task
const updateTask = async (req, res) => {
  const { title, description, status, priority, userId, _id } = await req.body;
  try {
    const updateTask = await Task.findByIdAndUpdate(
      {
        _id,
      },
      {
        title,
        description,
        status,
        priority,
        userId,
      },
      {
        new: true,
      }
    );
    if (updateTask) {
      return res.status(200).json({
        success: true,
        message: "Task updated Successfully",
        // tasksList: getAllTaskByUserId,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Some error occured, Please Try Again!!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Some error occured, Please Try Again!!",
    });
  }
};

module.exports = { addNewTask, getAllTask, deleteTask, updateTask };
