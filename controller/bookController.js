const express = require('express');
const app = express();

let books = [
    {id:1,title:'BOOK1',author:'Auth1'},
    {id:2,title:'BOOK2',author:'Auth2'}
];
//read
const getBooks = (req,res) => {
    res.json(books);
};


//create
const createBooks = (req,res)=>{
     console.log(req.body);
     const newBook = req.body;
     newBook.id = books.length+1;
     books.push(newBook);
     res.status(201).json(newBook);
}

//update
updateBooks =(req,res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body; 
    const index = books.findIndex(book => book.id === id);

    if(index != -1){
        books[index] = {...books[index],updatedBook};
        res.json(books[index])
    }
    else{
        res.status(404).json({error:'book not found'});
    }
}

//delete
const delBooks = (req,res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);

    if(index !== -1){
        const delBook = books[index];
        books.slice(index,1);
        res.json(delBook);
    }
    else{
        res.status(404).json({error:'book not found'});
    }
}


module.exports = {
    getBooks,
    createBooks,
    updateBooks,
    delBooks
}

