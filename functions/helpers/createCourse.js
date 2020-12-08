const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  // TODO: create course
  const fields = JSON.parse(event.body);
  try {
    const createdCourse = await table.create([{ fields }]);
    return formattedReturn(200, createdCourse);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, { msg: "Something went wrong" });
  }
};
