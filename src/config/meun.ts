type Menu = {
    key: string,
    name: string,
    url?: string,
    children?: Array<Menu>,
};

const menus: Menu[] = [
    {
        key: 'start',
        name: '快速开始',
        children: [
            {
                key: 'start-scene',
                name: '创建三维场景',
                url: '/start/scene',
            },
            {
                key: 'start-UI',
                name: 'UI控件样板',
                url: '/start/UI',
            },
            {
                key: 'start-GUI',
                name: 'GUI属性控件',
                url: '/start/GUI',
            },
            {
                key: 'start-parametric',
                name: '场景参数化',
                url: '/start/parametric',
            },
            {
                key: 'start-control',
                name: '场景基础控制',
                url: '/start/control',
            },
        ],
    },
] as Menu[];

const flatMenus: Menu[] = menus.map(menu => {
    const menus = menu.children?.map(v => v);
    return menus ? [menu, ...menus] : menu;
}).flat();

const map = flatMenus.reduce<Record<string, Menu>>((map, menu) => {
    map[menu.key] = menu;
    return map;
}, {});

export {
    menus,
    flatMenus,
    map,
    type Menu,
};
