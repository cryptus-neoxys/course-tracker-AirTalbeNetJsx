const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  // TODO: delete course
  const { id } = JSON.parse(event.body);
  try {
    const deletedCourse = await table.destroy(id);
    return formattedReturn(200, deletedCourse);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, { msg: "Something went wrong" });
  }
};
