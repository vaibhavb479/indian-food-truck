export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        maxLength: 40,
      },
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      options: {
        maxLength: 15,
      },
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      options: {
        maxLength: 100,
      },
    },
    {
      title: 'Amount',
      name: 'amount',
      type: 'number',
    },
    {
      title: 'Note',
      name: 'note',
      type: 'text',
    },
    {
      name: 'method',
      title: 'Method',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'number',
    },
    {
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'product',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'ID',
              name: 'id',
              type: 'string',
            },
            {
              title: 'Amount',
              name: 'amount',
              type: 'number',
            },
            {
              title: 'Category',
              name: 'category',
              type: 'string',
            },
            {
              title: 'Quantity',
              name: 'quantity',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
};
