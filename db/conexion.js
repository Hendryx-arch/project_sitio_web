import mysql from 'mysql2/promise'

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bdrest',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0

}

export const pool = mysql.createPool(dbConfig)

export async function connectDB () {
  try {
    const connection = await pool.getConnection()
    connection.release()
    console.log('conexion a la base de datos.')
  } catch (error) {
    console.error('error al conectar a la base de datos.', error.message)
    console.error('detalles de la configuracion:', dbConfig)
    process.exit(1)
  }
}
