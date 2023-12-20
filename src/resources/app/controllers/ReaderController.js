const Reader = require('../model/Reader')

class ReaderController{
    LoadReader(req,res,next)
    {
       Reader.find({}).lean()
        .then (readers => {
            res.render('Reader',{readers})
        })
        .catch(next)
    }
    CreatReader(req,res,next)
    {
        const readers = new Reader(req.body);
        readers.save()
            .then(() => res.redirect('/Reader'))
            .catch(next)
    }
    UpdateReader(req,res,next)
    {
        Reader.updateOne({_id:req.params.id},req.body)
            .then(() => res.redirect('/Reader'))
            .catch(next)
    }
    DeleteReader(req,res,next)
    {
        
    }
}

module.exports = new ReaderController;