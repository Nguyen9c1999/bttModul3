const fs = require('fs');
const qs = require('qs');


const CityService = require('B:\\codegym\\btCuoiModul3\\md3_cs\\service\\cityService.js');

class HomeStayRouting {


    static showHome(req, res) {
        fs.readFile('./views/home.html', 'utf-8', async (err, indexHtml) => {
            if (err) {
                console.log(err);
            } else {
                let dataCity = await CityService.getDataCity();

                indexHtml = indexHtml.replace('{citys}',HomeStayRouting.getDataCity(dataCity))
                res.writeHead(200, 'text/html');
                res.write(indexHtml);
                res.end();
            }
        })
    }
    static getDataCity(dataCity){
        let dataHtml
        for (let city of dataCity) {
            dataHtml+=` <tr>
            <th scope="col">${city.idCity}</th>
            <th scope="col"><a href="/show/city/${city.idCity}">${city.nameCity}</a></th>
            <th scope="col">${city.Nation}</th>
            <th scope="col"><a href="/edit/city/${city.idCity}">chỉnh sửa</a></th>
            <th scope="col"><a href="/delete/city/${city.idCity}">xóa</a></th>
            
        </tr>`
        }
        return dataHtml
    }


    static addCity(req,res){
        if (req.method === 'GET') {
            fs.readFile('./views/homestay/create.html', 'utf-8', async (err, dataCreateHomeStay) => {
                if (err) {
                    console.log(err);
                } else {


                    res.writeHead(200, 'text/html');
                    res.write(dataCreateHomeStay);
                    res.end();
                }
            });
        } else if (req.method === 'POST') {
            let chunkCity = '';
            req.on('data', chunk => {
                chunkCity += chunk;
            });
            req.on('end', async (err) => {
                if (err) {
                    console.log(err);
                } else {
                    let newCity = qs.parse(chunkCity);
                    await CityService.addCity(newCity)

                    res.writeHead(301, {'location': '/home'})
                    res.end()
                }

            })
        }

    }
    static delete(req,res,id){
        if (req.method === 'GET') {
            fs.readFile('./views/homestay/delete.html', 'utf-8', async (err, dataCreateHomeStay) => {
                if (err) {
                    console.log(err);
                } else {


                    res.writeHead(200, 'text/html');
                    res.write(dataCreateHomeStay);
                    res.end();
                }
            });
        } else  {
            console.log('aaa')
                let a = async ()=>    await CityService.delete(id)
             a()
                    res.writeHead(301, {'location': '/home'})
                    res.end()

        }
    }
    static edit(req,res,id){
        if (req.method === 'GET') {
            fs.readFile('./views/homestay/edit.html', 'utf-8', async (err, dataCreateHomeStay) => {
                if (err) {
                    console.log(err);
                } else {


                    res.writeHead(200, 'text/html');
                    res.write(dataCreateHomeStay);
                    res.end();
                }
            });
        } else  {

            let dataCityChuck = ''
            req.on('data', chunk => {
                dataCityChuck += chunk
            })
            req.on('end', async (err) => {
                if (err) {
                    console.log(err)
                } else {
                    let newDataCity = qs.parse(dataCityChuck);
                    await CityService.edit(newDataCity,id)
                    res.writeHead(301, {'location': `/home`})
                    //data
                    res.end()
                }
            });

        }
    }
    static showCity(req,res,id){
        fs.readFile('./views/showCity.html', 'utf-8', async (err, indexHtml) => {
            if (err) {
                console.log(err);
            } else {
            let dataCity = await CityService.showCity(id)
                console.log(dataCity)
                indexHtml = indexHtml.replace('{nameCity}',dataCity[0].nameCity)
                indexHtml = indexHtml.replace('{Nation}',dataCity[0].Nation)
                indexHtml = indexHtml.replace('{area}',dataCity[0].area)
                indexHtml = indexHtml.replace('{GDP}',dataCity[0].GDP)
                indexHtml = indexHtml.replace('{description}',dataCity[0].Describee)
                indexHtml = indexHtml.replace('{id}',dataCity[0].idCity)
                indexHtml = indexHtml.replace('{id}',dataCity[0].idCity)

                res.writeHead(200, 'text/html');
                res.write(indexHtml);
                res.end();
            }
        })
    }

}

module.exports = HomeStayRouting;