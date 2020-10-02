// NOTE: Update marathonHost, dcosToken, pgClient.host, pgClient.password
//**********************************callback example -- multiple async functions can called which is wierd syntax */

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
// GeesClient.connect().catch((err) => console.error(err));

//**********************************callback example -- multiple async functions can called which is wierd syntax */

//callbackexample
function getWorkspace(wsId, callback) {
  R2Client.query("SELECT * FROM ws_config ")
    .then((res) => {
      callback(res.rows);
    })
    .catch((err) => {
      console.error(err);
      R2Client.end();
    });
}

function getInvoice(wsId, callback) {
  R2Client.query("SELECT * FROM ws_config ")
    .then((res) => {
      callback("invoice response");
    })
    .catch((err) => {
      console.error(err);
      R2Client.end();
    });
}

function getInvoiceDetails(wsId, callback) {
  R2Client.query("SELECT * FROM ws_config ")
    .then((res) => {
      callback("details response");
    })
    .catch((err) => {
      console.error(err);
      R2Client.end();
    });
}
//
function main() {
  let wsId = process.env.WORKSPACE_ID;
  console.log("**************", wsId);

  getWorkspace("oh8el3li", (rows) => {
    console.log("information", rows.length);
    getInvoice("oh8el3li", (invoices) => {
      console.log("wowowow--------", invoices);
      getInvoiceDetails("oh8el3li", (details) => {
        console.log("wowowow++++++++", details);
      });
    });
  });
  console.log("come here first");
  return;
}
main();
