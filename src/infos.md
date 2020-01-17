# 声明属性的几种方式
    public          共用    *(默认)         可以在这个类里面使用，也可以在类外面使用
    protected       保护类型                它只有在当前和它的子类里面可以访问
    private         私有                    只有在当前类才可以访问这个属性

# ng g
    ng g component components/home          新建组件

# storage.service
    1.ng g service services/storage
    2.app.module.ts  里面引入创建的服务 并且声明
        引入服务
        import { StorageService } from './services/storage.service'
        配置声明服务
        providers: [StorageService],
    3.在用到的组件里面引入服务
        引入服务
        import { StorageService } from '../../services/storage.service'
        初始化
        constructor(public storage:StorageService) { 
            console.log(this.storage.get())
        }

