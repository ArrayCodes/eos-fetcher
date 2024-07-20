import connectDB from './database';
import fetchActions from './fetchActions';
import saveActions from './saveActions';

const main = async () => {
    await connectDB();
    
    setInterval(async () => {
        console.log('Fetching actions...');
        try {
            const actions = await fetchActions();
            console.log('Fetched actions:', actions);
            await saveActions(actions);
            console.log('Saved actions');
        } catch (error) {
            console.error('Error fetching or saving actions', error);
        }
    }, 60000);
};

main();
