const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function finddata(k) {
    const ans =k
    
    try {
        await client.connect();
        const dataset = await client.db("ak").collection("datas").find({ sno: ans }).toArray();
        console.log("result:",dataset)
        return JSON.stringify(dataset);
        
    } catch (error) {
        console.log("Error occurred while fetching data:", error);
        return JSON.stringify({ error: "Failed to fetch data" });
    } finally {
        await client.close();
    }
}
async function insertdata(mydata) {
    mydata.sno = parseInt(mydata.sno);
    mydata.contact = parseInt(mydata.contact);
    mydata.dob = parseInt(mydata.dob);
    mydata.fees = parseInt(mydata.fees);

    try {
        await client.connect();
        const result = await client.db("ak").collection("datas").insertOne(mydata);
        return JSON.stringify(result);
    } catch (error) {
        console.log("Error occurred while inserting data:", error);
        return JSON.stringify({ error: "Failed to insert data" });
    } finally {
        await client.close();
    }
}

async function deletedata(k){
    const mydata = { sno: k };
    
    try {
        await client.connect();
        const dataset = await client.db("ak").collection("datas").deleteOne(mydata);
        console.log("data deleted:",dataset)
        return dataset.deletedCount;
    } catch (error) {
        console.log("Error occurred while deleting data:", error);
        return { error: "Failed to delete data" };
    } finally {
        await client.close();
    }
}
async function updateData(sno, newSname, newMark) {
    try {
        await client.connect();
        const updateValues = {};
        if (newSname !== undefined) {
            updateValues.sname = newSname;
        }
        if (newDob !== undefined) {
            updateValues.dob = newDob;
        }
        if (newCourse !== undefined) {
            updateValues.course = newCourse;
        }
        if (newFees !== undefined) {
            updateValues.fees = newFees;
        }
        if (newQualification !== undefined) {
            updateValues.qualification = newQualification;
        }
        if (newAddress !== undefined) {
            updateValues.address = newAddress;
        }
        if (newState !== undefined) {
            updateValues.state = newState;
        }
        if (newEmail !== undefined) {
            updateValues.email= newEmail;
        }
        if (newContact !== undefined) {
            updateValues.contact = newContact;
        }
        const dataset = await client.db('ak').collection('datas').updateOne({ sno }, { $set: updateValues });
        return dataset.modifiedCount; 
    } catch (error) {
        console.error("Error updating data:", error);
    } finally {
        await client.close();
    }
}
module.exports = { finddata, insertdata, deletedata, updateData };
