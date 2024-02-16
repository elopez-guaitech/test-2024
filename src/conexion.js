import mysql from 'mysql2'


export const connection = mysql.createConnection({
    Host: 3306,
    user: 'root',
    password: 'guest',
    database: 'db_to_do'
});

connection.connect(error => {
    if(error){
        console.error('error', error)
    }else{
        console.log('Exitosa')
    }
});


