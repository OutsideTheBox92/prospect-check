const el = (id) => document.getElementById(id);

el("searchBtn").addEventListener("click", () => {
  const tbody = document.querySelector("#tbl tbody");
  tbody.innerHTML = "";

  // Dummydata tills n8n kopplas på
  const rows = [
    { name: "Rusta AB", orgnr: "556280-2115", sni: "47122", hqCity: "Upplands Väsby" },
    { name: "Exempelbolag AB", orgnr: "556999-9999", sni: "62010", hqCity: "Stockholm" }
  ];

  for (const r of rows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.name}</td>
      <td>${r.orgnr}</td>
      <td>${r.sni}</td>
      <td>${r.hqCity}</td>
    `;
    tbody.appendChild(tr);
  }

  el("status").textContent = `Visar ${rows.length} träffar (demo)`;
});
