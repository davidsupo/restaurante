import mongoose from "mongoose";

const Schema = mongoose.Schema;

const platosSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    descripcion: { type: String, required: [true, 'Descripcion obligatoria'] },
    precio: { type: Number, required: [true, 'Precio obligatorio'] },
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

export default mongoose.model('Platos', platosSchema);