const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  // TODO: update course
  const { id, ...fields } = JSON.parse(event.body);
  try {
    const updatedCourse = await table.update([{ id, fields }]);
    return formattedReturn(200, updatedCourse);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, { msg: "Something went wrong" });
  }
};
