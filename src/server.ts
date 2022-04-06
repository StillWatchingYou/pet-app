import 'dotenv/config';
import '@/index';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import PetRoute from '@routes/pets.route';
import CustomersRoute from './routes/customer.route';
import MedicalHistoryRoute from './routes/medicalHistory.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new PetRoute(), new CustomersRoute(), new MedicalHistoryRoute()]);

app.listen();
