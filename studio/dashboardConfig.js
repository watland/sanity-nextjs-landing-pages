export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f55fbefe700ee21ca5ea405',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-m43p4sv7',
                  apiId: 'f28bea0e-abf6-40c1-a5a5-077c04da53a0'
                },
                {
                  buildHookId: '5f55fbef9282d6f830b083fb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4d6oiofm',
                  apiId: '16acfef2-544b-46a4-b0cb-ac54e9fbf741'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/watland/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4d6oiofm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
