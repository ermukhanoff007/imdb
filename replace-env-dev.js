const fs = require('fs');
require('dotenv').config();

const target = 'src/environments/environment.development.ts';

const content = `


export const environment = {
  production: false,
  apiUrl:   "${process.env.API_URL || 'http://localhost:3000'}",
  apiKey:   "${process.env.API_KEY || ''}",
  debug:    ${process.env.DEBUG === 'true' || process.env.DEBUG === '1' || false},

};
`;

fs.writeFileSync(target, content.trim());
console.log('Готово! environment.development.ts обновлён из .env');
