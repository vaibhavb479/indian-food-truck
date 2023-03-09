export default {
  name: "food",
  title: "food",
  type: "document",
  fields: [
    {
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "name",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "price",
      type: "array",
      of: [{ type: "number" }],
    },

    {
      name: "details",
      title: "details",
      type: "string",
    },
    {
      name: "menuType",
      title: "Menu Type",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "favMenu",
      title: "Favourite Menu",
      type: "string",
    },
    {
      name: "foodCategory",
      title: "Food Category",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
