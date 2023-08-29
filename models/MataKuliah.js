var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const MataKuliah = koneksi.define(
  "mata_kuliah",
  {
    kode_mata_kuliah: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nama_mata_kuliah: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    kode_prodi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_jenis_mata_kuliah: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_kelompok_mata_kuliah: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sks_mata_kuliah: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    sks_tatap_muka: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    sks_praktik: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    sks_praktik_lapangan: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    sks_simulasi: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    ada_sap: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ada_silabus: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ada_bahan_ajar: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ada_bahan_praktik: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ada_diktat: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tanggal_mulai_efektif: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tanggal_akhir_efektif: {
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
module.exports = MataKuliah;
