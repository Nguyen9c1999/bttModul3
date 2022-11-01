const Connection = require('../model/connection');
Connection.connecting();

class CityService {
    static getDataCity() {
        let connection = Connection.getConnecting();
        return new Promise((resolve, reject) => {
            connection.query(`select *
                              from city`, (err, dataCity) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(dataCity);
                }
            })
        })
    }

   static addCity(newDataCity){
       let connection = Connection.getConnecting();
       return new Promise((resolve, reject) => {
           connection.query(`insert into city(nameCity,Nation,GDP,Describee,area)
                                 value ('${newDataCity.name}','${newDataCity.Nation}',${newDataCity.GDP},'${newDataCity.Describee}',${newDataCity.area})`, (err, dataCity) => {
               if (err) {
                   reject(err);
               } else {
                   resolve(dataCity);
               }
           })
       })
   }
   static delete(id){
       let connection = Connection.getConnecting();
       return new Promise((resolve, reject) => {
           connection.query(`DELETE FROM city WHERE idCity=${id}`, (err, dataCity) => {
               if (err) {
                   reject(err);
               } else {
                   resolve(dataCity);
               }
           })
       })
   }
   static edit(newDataCity,id){
       let connection = Connection.getConnecting();
       return new Promise((resolve, reject) => {
           connection.query(`UPDATE city
                             SET nameCity = '${newDataCity.name}', Nation = '${newDataCity.Nation}',GDP=${newDataCity.GDP},Describee='${newDataCity.Describee}',area=${newDataCity.area}
                             WHERE idCity=${id};`, (err, dataCity) => {
               if (err) {
                   reject(err);
               } else {
                   resolve(dataCity);
               }
           })
       })
   }
   static showCity(id){
       let connection = Connection.getConnecting();
       return new Promise((resolve, reject) => {
           connection.query(`select * from city where idCity = ${id} `, (err, dataCity) => {
               if (err) {
                   reject(err);
               } else {
                   resolve(dataCity);
               }
           })
       })
   }

}



module.exports = CityService;