const http = require('http');
const url = require('url');
const database = require("./billingdatabase.js"); // Connect to MongoDB and define database operations

http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Max-Age', 2592000);

    console.log(req.url);
    const { pathname, query } = url.parse(req.url, true);
    console.log(pathname);
    console.log(query);

    
        try {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            if (pathname === '/api/find') {
                const dataset = await database.finddata(parseInt(query.sno));
                res.write(JSON.parse(JSON.stringify(dataset)));
                
            } else if (pathname === '/api/insert') {
                const dataset = await database.insertdata(query);
                res.write(JSON.parse(JSON.stringify(dataset)));

            } else if (pathname === '/api/delete') {
                const dataset = await database.deletedata(parseInt(query.sno));
                res.write(JSON.parse(JSON.stringify(dataset)));

            } else if (pathname === '/api/update') {
        const sno = parseInt(query.sno); 
        const newSname = query.sname; // Assuming user provides the new sname
        const newDob=parseInt(query.dob);
        const newQualification=query.qualification;
        const newCourse=query.course;
        const newFees =parseInt(query.fees);
        const newAddress=query.address;
        const newState=query.state;
        const newEmail=query.email;
        const newContact = parseInt(query.contact); // Assuming user provides the new mark
        const dataset = await database.updateData(sno, newSname, newQualification,newDob,newFees,newCourse,newAddress,newState,newEmail,newContact);
        
        console.log("Documents updated:", modifiedCount);
        res.write(JSON.parse(JSON.stringify(dataset)));
        
    }
        } catch (error) {
            console.error("Error:", error);
            res.write(JSON.stringify({ error: "Internal Server Error" }));
        } 
        
        res.end();
    } 
  
    
).listen(4002);

console.log("Server listening on port 4002"); 
