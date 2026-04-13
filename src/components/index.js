import ImageView from './ImageView.vue'
import XtxSku from '@/components/XtxSku/index.vue'
export const globalComponents = {
  install(app) {
    app.component('XtxImageView', ImageView).component('XtxSku', XtxSku)
  }
}
