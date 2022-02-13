import { Database } from './db/database';
import './a';
const db = Database.instance;

db.add({ name: 'David', age: 23 });
db.add({ name: 'Jonas', age: 24 });
db.add({ name: 'Bacelar', age: 20 });

db.show();
