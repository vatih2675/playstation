"use client";
import { useEffect, useState } from "react";
export default function Time() {
    const [tanggalHariIni, setTanggalHariIni] = useState("");
    const [jamBerjalan, setJamBerjalan] = useState("");

    useEffect(() => {
      setInterval(() => {
        const waktu = new Date();
        const hr = waktu.getDay();
        const namaHari = [
          "Minggu",
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
          "Minggu",
        ];
        const hari = namaHari[hr];
        const tgl =
          waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
        const bln = waktu.getMonth();
        const namaBulan = [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
        ];
        const bulan = namaBulan[bln];
        const thn = waktu.getFullYear();
        const jam =
          waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
        const menit =
          waktu.getMinutes() < 10
            ? "0" + waktu.getMinutes()
            : waktu.getMinutes();
        const detik =
          waktu.getSeconds() < 10
            ? "0" + waktu.getSeconds()
            : waktu.getSeconds();
        setTanggalHariIni(`${hari}, ${tgl} ${bulan} ${thn}`);
        setJamBerjalan(`${jam}:${menit}:${detik} WITA`);
        // setTahun(waktu.getFullYear());
      }, 1);
    }, []);

    return (
        <div className="flex justify-between items-center gap-3">
        <small className="font-mono">
            <i className="bi-calendar3 me-1"></i>{tanggalHariIni}
        </small>
        <small className="font-mono">
            <i className="bi-clock me-1"></i>{jamBerjalan}
        </small>
        </div>
    );
}
