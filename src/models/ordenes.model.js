import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ordenesSchema = new Schema({
    idUsuario: { type: String, required: [true, 'IdUsuario obligatorio'] },
    idPlato: { type: String, required: [true, 'IdPlato obligatorio'] },
    cantidad: { type: Number, required: [true, 'Cantidad obligatoria'] },
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

export default mongoose.model('Ordenes', ordenesSchema);