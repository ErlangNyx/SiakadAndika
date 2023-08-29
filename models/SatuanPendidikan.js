var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const SatuanPendidikan = koneksi.define(
  "satuan_pendidikan",
  {
    kode_perguruan_tinggi: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nama_perguruan_tinggi: {
      type: Sequelize.STRING,
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
module.exports = SatuanPendidikan;
