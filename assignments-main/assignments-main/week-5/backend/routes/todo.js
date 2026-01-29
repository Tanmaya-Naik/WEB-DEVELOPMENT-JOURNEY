//  start writing your code from here
const {Router}=require("express");
const router=Router();
const {Todo}=require("../db/index");
const userMiddleware=require("../middleware/user");

router.post('/create',userMiddleware,async (req,res)=>{
    try{
    const {title,description}=req.body;
    const userId=req.userId;

    const newTodo=await Todo.create({
        title:title,
        description:description,
        done:false,
        userId
    });

    res.json({
        message:"Todo created Sucessfully",
        newTodo
    });
}catch(err){
    return res.status(500).json({
        message:"Failed to create todo"
    });
}
});


router.put('/UpdateTodo', userMiddleware, async(req, res) => {
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

router.delete('/deleteall',userMiddleware,async (req,res) => {
    const result=await Todo.deleteMany({userId:req.userId});

    if(result.deletedCount===0){
        return res.json({
            message:"There is no todos to delete"
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