export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
           name: 'studentName',
           title: 'Student Name', 
           type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'department',
            title: 'Department',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string'
        },
        {
            name: 'userid',
            title: 'User Id',
            type: 'string'
        },
        {
            name: 'password',
            title: 'Password',
            type: 'string'
        },
        {
            name: 'created_at',
            title: 'Created  At',
            type: 'datetime'
        }
    ]
}