const express = require("express");
const router = express.Router();

const TASKS = require("../model/taskData");

// Creating
router.post("/createTask", async (req, res) => {
  try {
    const task = req.body;
    console.log("The data comming from the request is : ", task);
    const status = await TASKS.create(task);

    if (!status) {
      res.json({
        status: false,
        message: "Unable to Create Server Error",
      });
    }
    res.json({
      status: true,
      data: status,
    });
  } catch (error) {
    console.log("Error Occured while creating from the server : ", error);
  }
});

// Fetching

router.get("/fetchTask", async (req, res) => {
  try {
    const status = await TASKS.find({});

    if (!status) {
      res.json({
        status: false,
        message: "Unable to fetch from the server",
      });
    }
    res.json({
      status: true,
      data: status,
    });
  } catch (error) {
    console.log("Error Occured while fetching from the db  : ", error);
  }
});

// Updating

router.put("/updateTask/:id", async (req, res) => {
  try {
    const status = await TASKS.updateMany(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );

    if (!status) {
      res.json({
        status: false,
        message: "Unable to delete from the server",
      });
    }
    res.json({
      status: true,
      data: status,
    });
  } catch (error) {
    console.log("Error Occured while deleting products from the db  : ", error);
  }
});

// Deleting
router.delete("/deleteTask", async (req, res) => {
  try {
    const status = await TASKS.deleteMany({
      _id: req.body._id,
    });

    if (!status) {
      res.json({
        status: false,
        message: "Unable to delete from the server",
      });
    }
    res.json({
      status: true,
      data: "Done Data deleted from the server",
    });
  } catch (error) {
    console.log("Error Occured while deleting products from the db  : ", error);
  }
});

//searching

router.post('/search/:text', async (req ,resp)=>{
    try {
        const status = await TASKS.find({
            $text : {
                $search : req.params.text
            }
        })
        if(status){
            resp.json({
                status : true , 
                data : status
            }) }
            else {
                resp.json({
                    status : false , 
                    data : []
                })
            }
        
        
    } catch (error) {
        console.log('Error Occured : ', error)
        
    }
})

module.exports = router;
