const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/newData').then(() => console.log('Successfully connected with database')).catch(err => console.log(err));

const employeSchema = new mongoose.Schema({
    name: { type: String, required: true, lowercase: true, trim: true },
    age: { type: Number, required: true, lowercase: true, trim: true },
    job: { type: String, required: true, lowercase: true, trim: true }
});

const posts = new mongoose.model('posts', employeSchema);       //POST


/*
    INSERT DATA
*/
const inserData = async () => {
    try {
        const data = [
            { name: "Hamad", age: 19, job: "Graphic Designer" },
            { name: "Dani", age: 22, job: "Seo Expert" },
            { name: "Usman", age: 21, job: "UI/UX Designer" }
        ];

        const response = await posts.insertMany(data)
        console.log(response);
    } catch (err) {
        console.log(err);
    };
};

// inserData();


/*
   READ DATA
*/
const readData = async () => {
    /* 
        const readDoc = await posts.find({age : {$nin : [20 , 25 , 26 , 27 , 28 , 30 , 29 , 19 , 18]}} , {name : 1})
        const readDoc = await posts.find({ $and: [{ job: "Digital Marketer" }, { age: { $gt: 20 } }] }).count()          AND OPERATOR
        const readDoc = await posts.find({ $or: [{ job: "Digital Marketer" }, { age: { $gt: 20 } }] }).count()           AND OPERATOR
        const readDoc = await posts.find({}, { name: 1, _id: 0 }).sort("name : 1");                                      ASSENDING ORDER
    */
    const readDoc = await posts.find({}, { name: 1, _id: 0, job: 1 }).sort({ name: -1 });
    console.log(readDoc);
};

// readData();

/*
   DELETE DATA
*/

const deleteData = async (_id) => {
    try {
        // const deleteDoc = await posts.deleteOne({ _id });       DELETING ONE DOCUMENT
        const deleteDoc = await posts.deleteMany({ age: { $gt: 28 } });

        console.log(deleteDoc);
    } catch (err) {
        console.log(deleteDoc);
    };
};

deleteData('65e077361869eb1783c0a10c');
