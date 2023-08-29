var express = require("express");
var router = express.Router();
var axios = require("axios");
var sequelize = require("sequelize");
//panggil Model
var SatuanPendidikan = require("../models/SatuanPendidikan");
var JenjangPendidikan = require("../models/JenjangPendidikan");
var ProgramStudi = require("../models/ProgramStudi");
var MataKuliah = require("../models/MataKuliah");
var Kurikulum = require("../models/Kurikulum");
var cekToken = require("../middleware");
var url_neo = "http://103.89.4.128:3003/ws/live2.php";
/* GetToken */
router.get("/token", cekToken, async function (req, res, next) {
  var hasil = await axios.post(url_neo, {
    act: "GetToken",

    username: "PT001", //kode PT
    password: "123", //password PT
  });
  //cek apakah tidak ada eror maka token simpan di variabel
  if (hasil.data.error_code == 0) {
    req.app.locals.token_neo = hasil.data.data.token;
  }
  res.json(hasil.data);
});

/* GetMataKuliahKurikulum */
router.get("/matakuliahkurikulum", cekToken, async function (req, res, next) {
  var hasil = await axios.post(url_neo, {
    act: "GetMataKuliahKurikulum",

    token: req.app.locals.token_neo,
  });
  //cek apakah tidak ada eror maka update atau create tabel satuan_pendidikan
  if (hasil.data.error_code == 0) {
    //ambil nilai response data
    var dataRes = hasil.data.data;
    //membuat variable dataList untuk di-insert ke tabel
    var dataList = await Promise.all(
      dataRes.map((item) => {
        return {
          id_mata_kuliah_kurikulum: item.id_mata_kuliah_kurikulum,
          id_kurikulum: item.id_kurikulum,
          kode_mata_kuliah: item.kode_mata_kuliah,
          semester: item.semester,
          apakah_wajib: item.apakah_wajib,
          id_neofeeder: item.id_perguruan_tinggi,
        };
      })
    );
    //tambah atau update data tabel satuan_pendidikan
    Kurikulum.bulkCreate(dataList, {
      updateOnDuplicate: ["id_mata_kuliah_kurikulum"],
    });
  }
  res.json(hasil.data);
});

/* GetKurikulum */
router.get("/kurikulum", cekToken, async function (req, res, next) {
  var hasil = await axios.post(url_neo, {
    act: "GetKurikulum",

    token: req.app.locals.token_neo,
  });
  //cek apakah tidak ada eror maka update atau create tabel satuan_pendidikan
  if (hasil.data.error_code == 0) {
    //ambil nilai response data
    var dataRes = hasil.data.data;
    //membuat variable dataList untuk di-insert ke tabel
    var dataList = await Promise.all(
      dataRes.map((item) => {
        return {
          id_kurikulum: item.id_kurikulum,
          nama_kurikulum: item.nama_kurikulum,
          kode_prodi: item.kode_prodi,
          id_semester: item.id_semester,
          jumlah_sks_lulus: item.jumlah_sks_lulus,
          jumlah_sks_wajib: item.jumlah_sks_wajib,
          jumlah_sks_pilihan: item.jumlah_sks_pilihan,
          id_neofeeder: item.id_perguruan_tinggi,
        };
      })
    );
    //tambah atau update data tabel satuan_pendidikan
    Kurikulum.bulkCreate(dataList, {
      updateOnDuplicate: ["nama_kurikulum"],
    });
  }
  res.json(hasil.data);
});

/* GetProfilPT */
router.get("/profil", cekToken, async function (req, res, next) {
  var hasil = await axios.post(url_neo, {
    act: "GetProfilPT",

    token: req.app.locals.token_neo,
  });
  //cek apakah tidak ada eror maka update atau create tabel satuan_pendidikan
  if (hasil.data.error_code == 0) {
    //ambil nilai response data
    var dataRes = hasil.data.data;
    //membuat variable dataList untuk di-insert ke tabel
    var dataList = await Promise.all(
      dataRes.map((item) => {
        return {
          kode_perguruan_tinggi: item.kode_perguruan_tinggi,
          nama_perguruan_tinggi: item.nama_perguruan_tinggi,
          id_neofeeder: item.id_perguruan_tinggi,
        };
      })
    );
    //tambah atau update data tabel satuan_pendidikan
    SatuanPendidikan.bulkCreate(dataList, {
      updateOnDuplicate: ["nama_perguruan_tinggi"],
    });
  }
  res.json(hasil.data);
});
/* GetJenjangPendidikan */
router.get("/jenjangpendidikan", cekToken, async function (req, res, next) {
  var hasil = await axios.post(url_neo, {
    act: "GetJenjangPendidikan",
    token: req.app.locals.token_neo,
  });
  //cek apakah tidak ada eror maka update atau create tabel satuan_pendidikan
  if (hasil.data.error_code == 0) {
    //ambil nilai response data
    var dataRes = hasil.data.data;
    //membuat variable dataList untuk di-insert ke tabel
    var dataList = await Promise.all(
      dataRes.map((item) => {
        return {
          id_jenj_didik: item.id_jenjang_didik,
          nama_jenj_didik: item.nama_jenjang_didik,
        };
      })
    );
    //tambah atau update data tabel jenjang_pendidikan
    JenjangPendidikan.bulkCreate(dataList, {
      updateOnDuplicate: ["nama_jenj_didik"],
    });
  }
  res.json(hasil.data);
});

/* GetProdi */
router.get("/prodi", cekToken, async function (req, res, next) {
  var hasil = await axios.post(url_neo, {
    act: "GetProdi",

    token: req.app.locals.token_neo,
  });
  //cek apakah tidak ada eror maka update atau create tabel satuan_pendidikan
  if (hasil.data.error_code == 0) {
    //ambil nilai response data
    var dataRes = hasil.data.data;
    //membuat variable dataList untuk di-insert ke tabel
    var dataList = await Promise.all(
      dataRes.map((item) => {
        return {
          kode_prodi: item.kode_program_studi,
          nama_prodi: item.nama_program_studi,
          id_jenj_didik: item.id_jenjang_pendidikan,

          id_neofeeder: item.id_prodi,
        };
      })
    );
    //tambah atau update data tabel jenjang_pendidikan
    ProgramStudi.bulkCreate(dataList, {
      updateOnDuplicate: ["nama_prodi", "id_jenj_didik"],
    });
  }
  res.json(hasil.data);
});
/* GetMataKuliah */
router.get("/matakuliah", cekToken, async function (req, res, next) {
  var hasil = await axios.post(url_neo, {
    act: "GetMataKuliah",

    token: req.app.locals.token_neo,
  });
  res.json(hasil.data);
});
/* InsertMataKuliah - ambil data mata kuliah dari tabel*/
router.post("/matakuliah", cekToken, async function (req, res, next) {
  MataKuliah.findAll({
    where: {
      id_neofeeder: null,
    },
  })
    .then((data) => {
      req.data = data;
      next();
    })
    .catch((err) => {
      res.json({
        status: false,
        pesan: "Gagal Ambil data Mata Kuliah: " + err.message,
        data: [],
      });
    });
});

/* InsertMataKuliah - kirim ke neofeeder*/
router.post("/matakuliah", cekToken, async function (req, res, next) {
  var data = req.data;
  //looping kirim ke neofeeder
  var responList = await Promise.all(
    data.map(async (item) => {
      var dataProdi = await ProgramStudi.findByPk(item.kode_prodi);
      var hasil = await axios.post(url_neo, {
        act: "InsertMataKuliah",

        token: req.app.locals.token_neo,
        record: {
          kode_mata_kuliah: item.kode_mata_kuliah,
          nama_mata_kuliah: item.nama_mata_kuliah,
          id_prodi: dataProdi.id_neofeeder,
          id_jenis_mata_kuliah: item.id_jenis_mata_kuliah,
          id_kelompok_mata_kuliah: item.id_kelompok_mata_kuliah,
          sks_mata_kuliah: item.sks_mata_kuliah,
          sks_tatap_muka: item.sks_tatap_muka,
          sks_praktek: item.sks_praktek,
          sks_praktek_lapangan: item.sks_praktek_lapangan,

          sks_simulasi: item.sks_simulasi,
          ada_sap: item.ada_sap,
          ada_silabus: item.ada_silabus,
          ada_bahan_ajar: item.ada_bahan_ajar,
          ada_acara_praktek: item.ada_acara_praktek,
          ada_diktat: item.ada_diktat,
          tanggal_mulai_efektif: item.tanggal_mulai_efektif,
          tanggal_akhir_efektif: item.tanggal_akhir_efektif,
        },
      });
      if (hasil.data.error_code == 0) {
        await MataKuliah.update(
          {
            id_neofeeder: hasil.data.data.id_matkul,

            syncAt: new Date(),
          },
          {
            where: { kode_mata_kuliah: item.kode_mata_kuliah },
          }
        );
      } else {
        hasil.data.data = item;
      }
      return hasil.data;
    })
  );
  res.json({
    status: true,
    pesan: "Hasil Syncron",
    data: responList,
  });
});

/* UpdateMataKuliah - ambil data mata kuliah dari tabel*/
router.put("/matakuliah", cekToken, async function (req, res, next) {
  MataKuliah.findAll({
    where: {
      id_neofeeder: {
        [sequelize.Op.not]: null,
      },
      syncAt: {
        [sequelize.Op.lt]: sequelize.col("updatedAt"),
      },
    },
  })
    .then((data) => {
      req.data = data;
      next();
    })
    .catch((err) => {
      res.json({
        status: false,
        pesan: "Gagal Ambil data Mata Kuliah: " + err.message,
        data: [],
      });
    });
});
/* UpdateMataKuliah - kirim ke neofeeder*/
router.put("/matakuliah", cekToken, async function (req, res, next) {
  var data = req.data;
  //looping kirim ke neofeeder
  var responList = await Promise.all(
    data.map(async (item) => {
      var dataProdi = await ProgramStudi.findByPk(item.kode_prodi);
      var hasil = await axios.post(url_neo, {
        act: "UpdateMataKuliah",
        token: req.app.locals.token_neo,

        key: {
          id_matkul: item.id_neofeeder,
        },
        record: {
          kode_mata_kuliah: item.kode_mata_kuliah,
          nama_mata_kuliah: item.nama_mata_kuliah,
          id_prodi: dataProdi.id_neofeeder,
          id_jenis_mata_kuliah: item.id_jenis_mata_kuliah,
          id_kelompok_mata_kuliah: item.id_kelompok_mata_kuliah,
          sks_mata_kuliah: item.sks_mata_kuliah,
          sks_tatap_muka: item.sks_tatap_muka,
          sks_praktek: item.sks_praktek,

          sks_praktek_lapangan: item.sks_praktek_lapangan,
          sks_simulasi: item.sks_simulasi,

          ada_sap: item.ada_sap,
          ada_silabus: item.ada_silabus,
          ada_bahan_ajar: item.ada_bahan_ajar,
          ada_acara_praktek: item.ada_acara_praktek,
          ada_diktat: item.ada_diktat,
          tanggal_mulai_efektif: item.tanggal_mulai_efektif,
          tanggal_akhir_efektif: item.tanggal_akhir_efektif,
        },
      });

      if (hasil.data.error_code == 0) {
        await MataKuliah.update(
          {
            syncAt: new Date(),
          },
          {
            where: { kode_mata_kuliah: item.kode_mata_kuliah },
          }
        );
      } else {
        hasil.data.data = item;
      }
      return hasil.data;
    })
  );
  res.json({
    status: true,
    pesan: "Hasil Syncron",
    data: responList,
  });
});
module.exports = router;
