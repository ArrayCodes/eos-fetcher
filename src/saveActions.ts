import Action from './models/Action';

const saveActions = async (actions: any[]) => {
    for (const action of actions) {
        const { trx_id, block_time, block_num } = action.action_trace;

        try {
            await Action.updateOne(
                { trx_id },
                { trx_id, block_time, block_num },
                { upsert: true }
            );
            console.log(`Saved action: ${trx_id}`);
        } catch (error) {
            console.error('Error saving action', error);
        }
    }
};

export default saveActions;
