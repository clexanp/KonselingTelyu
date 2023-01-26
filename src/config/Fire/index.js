import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const app = {
  apiKey: 'AIzaSyDJsb07DjMhGp9q4DnngTRdjCfBNqxElIg',
  authDomain: 'konselingtelyu.firebaseapp.com',
  projectId: 'konselingtelyu',
  storageBucket: 'konselingtelyu.appspot.com',
  messagingSenderId: '1045863726025',
  appId: '1:1045863726025:web:48824ad6417dc4d8310618',
  measurementId: 'G-VVN4165F30',
  databaseURL:
    'https://konselingtelyu-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const Firebase = initializeApp(app);
const Fire = getAuth(Firebase);
export default Fire;
