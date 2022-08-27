export default {
  name: "tuitionFee",
  title: "Tuition Fee",
  type: "document",
  fields: [
    {
      name: "sessionName",
      title: "Session Name",
      type: "string",
    },
    {
      name: "semesterNo",
      title: "Semester No",
      type: "string",
    },
    {
      name: "semesterFee",
      title: "Semester Fee",
      type: "number",
    },
    {
      name: "tuitionFeeOfSession",
      title: "Tuition Fee",
      type: "number",
    },
    {
      name: "totalFee",
      title: "Total Fee",
      type: "number",
    },
    {
      name: "userid",
      title: "User Id",
      type: "string",
    },
    {
      name: "payed",
      title: "Payed",
      type: "boolean",
    },
    {
      name: "created_at",
      title: "Created  At",
      type: "datetime",
    },
  ],
};
