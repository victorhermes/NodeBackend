require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  password: 'docker',
  database: 'nodebackend',
  define: {
    timestamps: true,
    underscored: true /* caixa baixa sem underlines (tabela_tabela ao invés de tabelaTabela) */,
    underscoredAll: true /* mesma coisa, mas para colunas e relacionamentos */,
  },
};
