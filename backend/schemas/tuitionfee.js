export default {
  name: "tuitionFee",
  title: "Tuition Fee",
  type: "document",
  fields: [
    {
      name: "tutionFeeHeader",
      title: "Tution Fee Header",
      type: "string",
    },
    {
      name: "monthName",
      title: "Month Name",
      type: "string",
    },
    {
      name: "tutionFeeType",
      title: "Tution Fee Type",
      type: "string",
    },
    {
      name: "userid",
      title: "User Id",
      type: "string",
    },
    {
      name: "department",
      title: "Department",
      type: "string",
    },
    {
      name: "fee",
      title: "Fee",
      type: "number",
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
