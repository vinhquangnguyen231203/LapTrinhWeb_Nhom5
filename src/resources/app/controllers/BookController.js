const Book = require('../model/Book')

class BookController{
    LoadBook(req,res,next)
    {
       Book.find({}).lean()
        .then (books => {
            res.render('Book',{books})
        })
        .catch(next)
    }
    CreatBook(req,res,next)
    {
        const books = new Book(req.body);
        books.save()
            .then(() => res.redirect('/Book'))
            .catch(next)
    }
    UpdateBook(req,res,next)
    {
        Book.updateOne({_id:req.params.id},req.body)
            .then(() => res.redirect('/Book'))
            .catch(next)
    }
    DeleteBook(req,res,next)
    {
        Book.deleteOne({_id:req.params.id})
        .then(()=>res.redirect('/Book'))
        .catch(next)
    }
}

module.exports = new BookController;