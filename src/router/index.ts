import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import InstView from '../views/Inst.vue'

const MainTitle = "AlwaysKeepMoving | "

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: '首页',
            component: HomeView,
            meta: {
                title: MainTitle + '首页',
                ogTitle: MainTitle + '首页',
                ogDescription: '欢迎来到 AlwaysKeepMoving，探索我们的最新发行与近期动态。',
                ogImage: 'http://alwayskeepmoving.net/img/og-image/og.jpg'
            }
        },
        {
            path: '/inst',
            name: '照片墙',
            component: InstView,
            meta: {
                title: MainTitle + '照片墙',
                ogTitle: MainTitle + '照片墙',
                ogDescription: '探索我们的近期动态。',
                ogImage: 'http://alwayskeepmoving.net/img/og-image/og.jpg'
            }
        }
    ]
});

const OGProperties = (metaData: any) => {
    const updateMetaTag = (property: string, content: string) => {
        let element = document.querySelector(`meta[property='${property}']`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    if (metaData) {
        updateMetaTag('og:title', metaData.ogTitle || '');
        updateMetaTag('og:description', metaData.ogDescription || '');
        updateMetaTag('og:image', metaData.ogImage || '');
    }
};

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string;
    // Call OGProperties to update meta tags
    OGProperties(to.meta);
    next();
});

export default router;
