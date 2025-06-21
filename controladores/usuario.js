import { pool } from '../db/conexion.js'

export const getAllUsers = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT id,nombres,apellidos,ci,correo,telefono,contra FROM persona')
    res.json(rows)
  } catch (error) {
    console.error('error al obtener usuarios', error)
    res.status(500).json({
      message: 'error interno del servidos'
    })
  }
}
export const createUser = async (req, res) => {
  const { nombres, apellidos, ci, correo, telefono, contra } = req.body
  // hay que hashear la contraseña
  try {
    const [result] = await pool.execute(
      'INSERT INTO personas(nombres,apellidos,ci,correo,telefono,contra) VALUES (?,?,?,?,?,?)',
      [nombres, apellidos, ci, correo, telefono, contra]// aqui va el hashesPassword
    )
    res.status(201).json({ id: result.insertId, nombres, correo })
  } catch (error) {
    console.error('error al crear usuario', error)
    res.status(500).json({ message: 'Error al crear usuario' })
  }
}
