export default defineAppConfig({
  header: {
    title: 'Trijaya Docs',
    logo: {
      alt: '',
      light: '/tripay.png',
    },
  },

  ui: {
    pageAside: {
      slots: {
        root: 'hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--ui-header-height))] lg:sticky lg:top-(--ui-header-height) py-8 lg:ps-4 lg:-ms-4 lg:pe-6.5 scrollbar-custom',
      }
    },
    contentNavigation: {
      slots: {
        linkTrailing: 'ms-auto inline-flex gap-1.5 items-center',
        linkTrailingIcon: 'size-4 bg-gray-400',
      },
      compoundVariants: [
        {
          variant: 'pill',
          active: true,
          highlight: false,
          class: {
            link: 'before:bg-sky-50 dark:before:bg-[#232732] dark:text-white'
          }
        }
      ]
    },
  }
})
