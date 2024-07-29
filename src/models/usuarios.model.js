import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    apellido: { type: String, required: [true, 'Apellido obligatorio'] },
    email: { type: String, required: [true, 'Email obligatorio'] },
    password: { type: String, required: [true, 'Contraseña obligatoria'] },
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

export default mongoose.model('Usuarios', usuariosSchema);