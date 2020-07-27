//importar a dependência do sqlite3

const sqlite3 = require("sqlite3").verbose()

//Iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/*db.serialize(() => {
    //criar uma tabela com comandos sql
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2 - Inserir dados na tabela
    const query =`
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items 
        ) 
        values (?,?,?,?,?,?,?);    
    `
    
    const values =  [
        "https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_1280.jpg",
        "Papersider",
        "Guilherme Gemballa, Jardin América",
        "N° 260",
        "Santa Catarina",
        "Rio Do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err){
        if (err) {
            return console.log(err)
        }
        console.log("Cadadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)
    

    //3 - Construir os dados da tabela
    /*db.all(`SELECT name FROM places`, function(err, rows){
        if (err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })*/

    
    //4 - Delete um dado da tabela
   /*db.run(`DELETE FROM places WHERE ID = ?`, [10], function(err){
        if (err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso")
    })*/

   

    

  // })

