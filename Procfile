release: ENV_SILENT=true npm install
release: ENV_SILENT=true npm run build
release: ENV_SILENT=true heroku run sequelize db:migrate
web: ENV_SILENT=true npm start
