const expr=require("express");
const path=require("path");
const app=expr();
const multer=require("multer");
const storage=multer.diskStorage(
    {
        destination:"upload",
        filename:function(req,file,cb)
                  {
                    cb(null,file.fieldname+".jpg");
                  }
    });
    const maxSize=1000*1000*1
    var upload=multer(
        {
            storage:storage,
            limits:
            {
                fileSize:maxSize,
            },
            fileFilter:function(req,file,cb)
            {
                        var filetypes=/jpg|jpeg|png/;
                        var mimetype=filetypes.test(file.mimetype);
                        var extname=filetypes.test(path.extname
                            (file.originalname).toLowerCase());
                            if(mimetype && extname)
                            {
                                        return cb(null,true);


                            }
                            cb("error:fileuploaded is problematic");

            }
        }
    ).array("mypic",4);
    app.use(expr.static("../public",{index:"mult.html"}))
    app.post("/uploadfile",(req,res)=>
    {   
       upload(req,res,function(err)
       {
        if(err)
        {
            res.send(err);
        }
        else{
            res.send("success");
        }
    });
});
 app.listen(4000,()=>
 {
    console.log("thanks");
 })  ; 
    
