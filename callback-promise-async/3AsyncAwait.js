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

async function main3() {
  try {
    const workspaces = await getWorkspaces("oh8el3li");
    const invoices = await getInvoices();
    const details = await getInvoiceDetails();

    console.log("wowowow", workspaces.length);
    console.log("wowowow--------", invoices);
    console.log("wowowow++++++++", details);
  } catch (err) {
    console.log(err);
  }

  console.log("come here first");
}

main3();
