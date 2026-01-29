const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const router = Router();
const {Todo}=require("../database");

// todo Routes
router.post('/Create',userMiddleware,async (req, res) => {
    // Implement todo creation logic
    const title=req.body.title;
    const description=req.body.description;
    const userId=req.userId;

    const todo=await Todo.create({
        title,
        description,
        done:false,
        userId
    });

    res.json({
        message:"Todo created successfully",
        todo
    });

});

router.put('/UpdateTodo', userMiddleware, async(req, res) => {
    // Implement update todo  logic
            // const userId=req.userId;
            // const title=req.body.title;
            // const description=req.body.description;
            
            //You can write above in just one line by
    const {_id,title,description,done}=req.body;

    const updatedtodo=await Todo.findOneAndUpdate(
        {_id,userId:req.userId},
        {title,description,done},
        {new:true}
    );

    if(!updatedtodo){
        return res.json({
            message:"Todo not found or not yours"
        });
    }

    res.json({
        message:"Todo updated successfully",
        todo:updatedtodo
    });

});

router.delete('/deleteall', userMiddleware, async (req, res) => {
    const result = await Todo.deleteMany({ userId: req.userId });

    if (result.deletedCount === 0) {
        return res.json({
            message: "No todos found for this user"
        });
    }

    res.json({
        message: "All todos deleted successfully",
        deletedCount: result.deletedCount
    });
});


router.delete('/:id', userMiddleware, async (req, res) => {
    const id = req.params.id;

    const deletedTodo = await Todo.findOneAndDelete({
        _id: id,
        userId: req.userId
    });

    if (!deletedTodo) {
        return res.json({ message: "Todo not found or not yours" });
    }

    res.json({ message: "Todo deleted successfully" });
});



router.get('/', userMiddleware,async (req, res) => {
    // Implement fetching all todo logic
     const userId = req.userId;

    // Find all todos belonging to this user
    const todos = await Todo.find({
        userId: userId
    });

    // Send todos as JSON
    res.json({
         todos
    });
});


router.get('/:id', userMiddleware,async (req, res) => {
    // Implement fetching todo by id logic
    const id=req.params.id;
    const todo=await Todo.findOne({
        _id:id,
        userId:req.userId
    });

    if(!todo){
        return res.json({
            message:"Todo not found"
        });
    }
    res.json({
        todo
    });
});

module.exports = router;