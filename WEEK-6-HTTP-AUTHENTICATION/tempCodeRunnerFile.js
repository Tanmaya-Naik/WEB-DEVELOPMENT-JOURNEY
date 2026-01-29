if(password.length<5){
        res.json({
            message:"Your password is very small Make is complex"
        })
        return;
    }