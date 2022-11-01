const HomeStayRouting = require('./handler/homeStayRouting');

const handler = {
    'home': HomeStayRouting.showHome,
    'add': HomeStayRouting.addCity,
    'delete/city': HomeStayRouting.delete,
    'edit/city':HomeStayRouting.edit,
    'show/city':HomeStayRouting.showCity
}


module.exports = handler;