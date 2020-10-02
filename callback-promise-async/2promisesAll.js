//**********************************This is my use case */

const { Client } = require("pg");

const R2Client = new Client({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "propel_ws_db",
  port: "5432",
});

console.log("Querying for existing SonarQube instances.");
R2Client.connect().catch((err) => console.error(err));
function getWorkspaces(wsId) {
  return new Promise((resolve, reject) => {
    console.log("print query", `SELECT * FROM ws_config WHERE ws_id="${wsId}"`);
    R2Client.query(`SELECT * FROM ws_config WHERE ws_id='${wsId}'`)
      .then((res) => {
        resolve(res.rows);
      })
      .catch((err) => {
        console.error(err);
        R2Client.end();
        reject(new Error(err));
      });
  });
}

function getInvoices(wsId) {
  return new Promise((resolve, reject) => {
    R2Client.query("SELECT * FROM ws_config ")
      .then((res) => {
        resolve("invoice response");
      })
      .catch((err) => {
        R2Client.end();
        reject(new Error(err));
      });
  });
}

function getInvoiceDetails(wsId) {
  return new Promise((resolve, reject) => {
    R2Client.query("SELECT * FROM ws_config ")
      .then((res) => {
        resolve("details response");
      })
      .catch((err) => {
        R2Client.end();
        reject(new Error(err));
      });
  });
}

function main2() {
  Promise.all([getWorkspaces, getInvoices, getInvoiceDetails]).then(
    (result) => {
      console.log(result);
    }
  );

  console.log("come here first");
}

main2();
