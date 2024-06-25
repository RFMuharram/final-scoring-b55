function Investment() {
    // Modal
    var fund = 1000000000;
  
    // Pembagian modal ke beberapa instrumen investasi
    var deposito = 350000000;
    var obligasi = 650000000 * 0.3;
    var stockA = 650000000 * 0.35;
    var stockB = fund - deposito - obligasi - stockA;
  
    // Keuntungan per tahun yang didapatkan
    var depositProfit = deposito * 0.035;
    var obligasiProfit = obligasi * 0.13;
    var stockAProfit = stockA * 0.145;
    var stockBProfit = stockB * 0.125;
  
    // Keuntungan yang didapatkan setelah 2 tahun
    let totalAfter2Years = fund;
    for (let i = 0; i < 2; i++) {
      totalAfter2Years += depositProfit + obligasiProfit + stockAProfit + stockBProfit;
    }

    console.log(`Total uang untuk oblgasi: Rp ${obligasi.toLocaleString()}`);
    console.log(`Total uang untuk stock A: Rp ${stockA.toLocaleString()}`);
    console.log(`Total uang untuk stock B: Rp ${stockB.toLocaleString()}`);
    console.log(`Keuntungan dari Deposito per tahun: Rp ${depositProfit.toLocaleString()}`);
    console.log(`Keuntungan dari Obligasi per tahun: Rp ${obligasiProfit.toLocaleString()}`);
    console.log(`Keuntungan dari Stock A per tahun: Rp ${stockAProfit.toLocaleString()}`);
    console.log(`Keuntungan dari Stock B per tahun: Rp ${stockBProfit.toLocaleString()}`);

    console.log(`Total uang investasi setelah 2 tahun: Rp ${totalAfter2Years.toLocaleString()}`);
}
  
  Investment();