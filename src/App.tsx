import { setupWorker } from 'msw/browser';
import { handlers } from 'mocks';
import { CardForm } from 'components';

const worker = setupWorker();
await worker.start();
worker.use(...handlers);

export const App = (): JSX.Element => <CardForm />;
