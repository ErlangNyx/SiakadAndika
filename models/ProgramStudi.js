var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const JenjangPendidikan = koneksi.define(
  "program_studi",
  {
    kode_prodi: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nama_prodi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_jenj_didik: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_neofeeder: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = JenjangPendidikan;
