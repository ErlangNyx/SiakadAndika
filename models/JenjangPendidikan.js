var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const JenjangPendidikan = koneksi.define(
  "jenjang_pendidikan",
  {
    id_jenj_didik: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_jenj_didik: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = JenjangPendidikan;
