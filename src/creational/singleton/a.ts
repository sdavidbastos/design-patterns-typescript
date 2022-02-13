import { Database } from './db/database';

const db = Database.instance;

db.add({ name: 'David', age: 23 });
db.add({ name: 'Jonas', age: 24 });
db.add({ name: 'Bacelar', age: 20 });
