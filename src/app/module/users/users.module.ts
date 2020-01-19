import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
    /* user里面的组件 */
    declarations: [SettingsComponent],
    /* 暴露组件，让其他模块里面可以使用暴露的组件 */
    exports:[SettingsComponent],
    imports: [
        CommonModule
    ]
})
export class UsersModule { }
