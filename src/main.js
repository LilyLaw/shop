import Vue from 'vue'
import App from './App.vue'
import router from './router.js';

// Require Froala Editor js file.
require('froala-editor/js/froala_editor.min.js');
require('froala-editor/js/plugins/align.min.js');
require('froala-editor/js/plugins/char_counter.min.js');
require('froala-editor/js/plugins/code_beautifier.min.js');
require('froala-editor/js/plugins/code_view.min.js');
require('froala-editor/js/plugins/colors.min.js');
require('froala-editor/js/plugins/draggable.min.js');
require('froala-editor/js/plugins/emoticons.min.js');
require('froala-editor/js/plugins/entities.min.js');
require('froala-editor/js/plugins/file.min.js');
require('froala-editor/js/plugins/font_size.min.js');
require('froala-editor/js/plugins/font_family.min.js');
require('froala-editor/js/plugins/fullscreen.min.js');
require('froala-editor/js/plugins/image.min.js');
require('froala-editor/js/plugins/image_manager.min.js');
require('froala-editor/js/plugins/line_breaker.min.js');
require('froala-editor/js/plugins/inline_style.min.js');
require('froala-editor/js/plugins/link.min.js');
require('froala-editor/js/plugins/lists.min.js');
require('froala-editor/js/plugins/paragraph_format.min.js');
require('froala-editor/js/plugins/paragraph_style.min.js');
require('froala-editor/js/plugins/quick_insert.min.js');
require('froala-editor/js/plugins/quote.min.js');
require('froala-editor/js/plugins/table.min.js');
require('froala-editor/js/plugins/save.min.js');
require('froala-editor/js/plugins/url.min.js');
require('froala-editor/js/plugins/video.min.js');
require('froala-editor/js/plugins/help.min.js');
require('froala-editor/js/plugins/print.min.js');
// require('froala-editor/js/third_party/spell_checker.min.js');
require('froala-editor/js/plugins/special_characters.min.js');
require('froala-editor/js/plugins/word_paste.min.js');

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.css');
require('froala-editor/css/froala_style.css');
require('froala-editor/css/plugins/code_view.css');
require('froala-editor/css/plugins/draggable.css');
require('froala-editor/css/plugins/colors.css');
require('froala-editor/css/plugins/emoticons.css');
require('froala-editor/css/plugins/image_manager.css');
require('froala-editor/css/plugins/image.css');
require('froala-editor/css/plugins/line_breaker.css');
require('froala-editor/css/plugins/table.css');
require('froala-editor/css/plugins/char_counter.css');
require('froala-editor/css/plugins/video.css');
require('froala-editor/css/plugins/fullscreen.css');
require('froala-editor/css/plugins/file.css');
require('froala-editor/css/plugins/quick_insert.css');
require('froala-editor/css/plugins/help.css');
// require('froala-editor/css/third_party/spell_checker.css');
require('froala-editor/css/plugins/special_characters.css');


// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg';
Vue.use(VueFroala);

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')

// 报错原因: new Vue({}) 里面应该写成router,才能被简写识别