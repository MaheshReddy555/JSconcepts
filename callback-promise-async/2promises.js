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

function main1() {
  let wsId = process.env.WORKSPACE_ID;
  //   console.log("**************", wsId);

  //this will execute series of functions
  // getWorkspace()
  //   .then((workspace) => {
  //     getInvoice(workspace);
  //   })
  //   .then(() => {
  //     getInvoiceDetails();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  //this works fine  passing series of respnse to the next
  getWorkspaces("oh8el3li")
    .then((workspace) => {
      console.log(" *************** workspace ::", workspace.length);
      getInvoices(workspace).then((invoice) => {
        console.log("*************** Invoice ::", invoice);
        getInvoiceDetails().then((details) => {
          console.log("*************Details ::", details);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("come here first");

  // getWorkspace()
  //   .then((workspace) => {
  //     getInvoice(workspace).then((invoice) => {
  //       getInvoiceDetails().then((details) => {});
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  //above and below both are same --- if you want to do something after function response go with above syntax
  // ---or if you want to simply implement series of functions below is fine
  // getWorkspace()
  //   .then((workspace) => getInvoice())
  //   .then((detail) => getInvoiceDetails())
  //   .then((details) => console.log("yayyayayayayayy", details))
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return;
}

main1();
