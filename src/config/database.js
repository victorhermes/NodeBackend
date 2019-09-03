require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true /* caixa baixa sem underlines (tabela_tabela ao invés de tabelaTabela) */,
    underscoredAll: true /* mesma coisa, mas para colunas e relacionamentos */,
  },
};
