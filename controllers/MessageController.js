const Message = require('../models/MessageModel');
const Account = require('../models/AccountModel');
const Pagination = require('../helper/helper');

module.exports = {
  saveMessageEvent:  (req, res, next) => {
    const messageEvent = req.body.messageEvent;
    if(Object.keys(messageEvent).length < 1){
      next();
    } else {
      messageEvent.account_id = req.body.AccountId;
      const newMessageEvent = new Message(messageEvent);
      newMessageEvent.save()
        .then((account, err) => {
          if (err){
            return res.status(500).send({
              message: 'Internal sever error'
            })
          };
          next();
        });
      }
  },
  retrieveMessageEvents: (req, res) => {
    const limit = parseInt(req.body.limit) || 10
    const offset = parseInt(req.body.offset) || 0
    Account.findOne({ name: req.body.AccountName })
		.then((account, err) => {
      if (err){
        return res.status(500).send({
          message: 'Internal sever error'
        })
      };
      if(!account){
        return res.status(404).send({
          message: 'Account does not exist'
        })
      }
      const account_id = account._id;
      Message.find({ account_id })
      .sort( { createdOn: -1 } )
      .skip(offset)
      .limit(limit)
      .then((messageEvents, err) => {
        if (err){
          return res.status(500).send({
            message: 'Internal sever error'
          })
        };
        Message.find({ account_id }).count()
        .then((count, err) => {
          pagination = Pagination.paginateResult(count, offset, limit)
          return res.status(200).send({
            messageEvents,
            pagination,
          })
        })
      });
    });
   }
}