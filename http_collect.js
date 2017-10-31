var http=require('http')

var fs=require('fs')

var req=http.get(process.argv[2],function(res){

    var getdata=""

    var count=0;
    res.setEncoding('UTF-8');

   /* res.on('err',function(err){
        console.log(res.statusCode);
    })
    */

    res.on("data",function(chunk){
      getdata += chunk
      count++;
    })
    var t=getdata.length
    res.on("end",function(){
        var t=getdata.length
        console.log(t)
        console.log(getdata)
    })
})

req.on('err',function(err){
    console.log(err);
})