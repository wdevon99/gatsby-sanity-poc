export default {
  name: 'tutorial',
  title: 'Tutorial',
  type: 'document',
  fields: [
    {
      name: 'tutorialCategory',
      title: 'Category',
      type: 'reference',
      to: { type: 'tutorialCategory' }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }, 
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'bodyMarkdown',
      title: 'Body Markdown',
      type: 'markdown'
    }
  ]
}
