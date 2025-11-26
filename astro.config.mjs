import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'BlueGeo Docs',

      sidebar: [
        {
          label: '北京三甲医院大全',
          link: '/docs/beijing-top-hospitals/'
        }
      ]
    })
  ]
});
