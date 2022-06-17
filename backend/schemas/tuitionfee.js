export default{
    name: 'tuitionFee',
    title: 'Tuition Fee',
    type: 'document',
    fields: [
        {
            name: 'semesterName',
            title: 'Semester Name',
            type: 'string'
        },
        {
            name: 'semesterFee',
            title: 'Semester Fee',
            type: 'number'
        },
        {
            name: 'userId',
            title: 'User Id',
            type: 'string'
        },
        {
            name: 'created_at',
            title: 'Created  At',
            type: 'datetime'
        }
    ]
}