// imporotar dependencia do sqlite
const sqlite3 = require ("sqlite3").verbose()
//criar e iniciar o objeto de banco de dados para realizar as operações
const db = new sqlite3.Database("./src/database/database.db")
//vamos utilizar o objeto de banco de dados para realizar as operações
/*db.serialize(() => {
    //criar a  tabela via SQL
    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id  INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    //inserir dados
    const query = `INSERT INTO places (name,image,address,address2,state,city,items) VALUES (?,?,?,?,?,?,?);`
    const values = [
        "Paper Sider",
        "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Guilherme Gemballa",
        "Jardim América, N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis, Papelão"
    ]
    function affterInsertData(err) {
        if (err){
            return console.log(err)
        }
        console.log ("Cadastrado com Sucesso")
        console.log(this)
    }
    
    
    db.run(query, values, affterInsertData)

    //consultar dados
    db.all(`SELECT * FROM places`, function(err,rows){
        if (err){
            return console.log(err)
        }
        console.log("Registros encontrados")
        console.log(rows)
    })

    //excluir dados
    db.run(`DELETE FROM places WHERE id=?`,[1], function(err){
        if (err){
            return console.log(err)
        }
        console.log("Registro deletado com sucesso")
    })

    db.all(`SELECT * FROM places`, function(err,rows){
        if (err){
            return console.log(err)
        }
        console.log("Registros encontrados")
        console.log(rows)
    })

})*/


//exportar obj para ser usado em outro local
module.exports = db