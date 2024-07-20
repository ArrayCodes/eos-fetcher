import mongoose from 'mongoose';

const actionSchema = new mongoose.Schema({
    trx_id: { type: String, unique: true, required: true },
    block_time: { type: String, required: true },
    block_num: { type: Number, required: true },
});

const Action = mongoose.model('Action', actionSchema);

export default Action;
