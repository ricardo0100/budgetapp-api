const env = process.env;

const db = {
  host_url: env.MYSQL_URL
};

module.exports = db;
