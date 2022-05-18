function feetMeters() {
  let soNhap = parseFloat(document.getElementById("oNhap").value);
  let converted = 0.305 * soNhap;
  document.getElementById(
    "ketQua"
  ).innerHTML = `${soNhap} feet = ${converted} meters`;
}

function metersfeet() {
  let soNhap = parseFloat(document.getElementById("oNhap").value);
  let converted = 3.279 * soNhap;
  document.getElementById(
    "ketQua"
  ).innerHTML = `${soNhap} meters = ${converted} feet`;
}
