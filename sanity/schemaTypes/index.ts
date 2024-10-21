import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      fields: [
        {
          name: 'links',
          of: [
            {
              fields: [
                {
                  name: 'href',
                  type: 'string',
                },
                {
                  name: 'title',
                  type: 'string',
                },
              ],
              type: 'object',
            },
          ],
          type: 'array',
        },
      ],
      name: 'nav',
      type: 'document',
    },
    {
      fields: [
        {
          name: 'slug',
          type: 'slug',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'body',
          of: [{ type: 'block' }],
          type: 'array',
        },
        {
          name: 'tags',
          of: [
            {
              to: [{ type: 'tag' }],
              type: 'reference',
              weak: true,
            },
          ],
          type: 'array',
        },
      ],
      name: 'post',
      type: 'document',
    },
    {
      fields: [
        {
          name: 'slug',
          type: 'slug',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'string',
        },
      ],
      name: 'tag',
      type: 'document',
    },
  ],
}
