var script_version = "1.0.6"; //内置版本!!!!!!!
// ==UserScript==
// @name         🐔【超星学习通挂科助手】
// @namespace    FuckSuperStarLearing
// @author       倪爸爸
// @version      1.0.6
// @description  [ 1.0.6 ] 添加了更新跳转可能会被浏览器拦截的后续处理，详情见(https://github.com/NiButCrazy/FuckSuperStarLearing/blob/main/CHANGELOG.md)
// @icon         http://p1.hoopchina.com.cn/personPic/1f83adcf-bc5a-4631-b488-f3c8b64968d2.jpg
// @match        *://*.chaoxing.com/*
// @match        *://*.edu.cn/*
// @match        *://*.nbdlib.cn/*
// @match        *://*.hnsyu.net/*
// @match        *://*.gdhkmooc.com/*
// @require      https://s4.zstatic.net/ajax/libs/vue/3.3.4/vue.global.prod.js
// @require      https://s4.zstatic.net/ajax/libs/vue-demi/0.14.0/index.iife.min.js
// @require      https://s4.zstatic.net/ajax/libs/element-plus-icons-vue/2.1.0/global.iife.min.js
// @require      data:application/javascript,window.Vue%3DVue%3B
// @require      https://s4.zstatic.net/ajax/libs/pinia/2.1.6/pinia.iife.prod.js
// @require      https://s4.zstatic.net/ajax/libs/element-plus/2.3.12/index.full.min.js
// @require      https://s4.zstatic.net/ajax/libs/blueimp-md5/2.19.0/js/md5.min.js
// @require      https://s4.zstatic.net/ajax/libs/jquery/3.7.1/jquery.min.js
// @resource     element-plus  https://cdn.staticfile.org/element-plus/2.3.12/index.css
// @resource     ttf           https://www.forestpolice.org/ttf/2.0/table.json
// @connect      cx.icodef.com
// @connect      tk.enncy.cn
// @connect      api.muketool.com
// @connect      api.tikuhai.com
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-end
// @license      MIT
// @homepage     https://github.com/NiButCrazy/FuckSuperStarLearing
// @source       https://github.com/NiButCrazy/FuckSuperStarLearing
// @website      https://github.com/NiButCrazy/FuckSuperStarLearing
// @antifeature  ads      脚本可能包含第三方接口广告
// @antifeature  payment  脚本存在第三方答题接口付费功能
// ==/UserScript==

(t => { if (typeof GM_addStyle == "function") { GM_addStyle(t); return } const i = document.createElement("style"); i.textContent = t, document.head.append(i) })(" .dialog-footer button[data-v-6ed29f7f]:first-child{margin-right:10px}#csbutton[data-v-6ed29f7f]{position:fixed;bottom:20px;right:20px;z-index:99999}#zeokdjg[data-v-c3c6b09f]{position:fixed;left:10px;bottom:50vh;z-index:9999}.question_btn[data-v-c3c6b09f]{width:40px;height:40px;border-radius:10px;margin:5px}.question_div[data-v-c3c6b09f]{height:200px}.question_ti[data-v-c3c6b09f]{margin:10px 0 20px}.cx_log[data-v-c3c6b09f]{margin:2px 0}.status_log[data-v-c3c6b09f]{margin-top:10px}.dialog-footer button[data-v-c3c6b09f]:first-child{margin-right:10px}#csbutton[data-v-c3c6b09f]{position:fixed;bottom:20px;right:20px;z-index:99999}.el-form-item__content{justify-content:flex-end}.el-tabs__content{margin-top:50px}.el-input__wrapper:has(> .el-input__inner[symbol=\"minAccuracy\"]){margin-left:calc(100% - 50px);text-align:center}.el-tooltip__trigger:has(> .el-input__wrapper .el-input__inner[symbol=\"minAccuracy\"]){margin-left:calc(100% - 50px);text-align:center}input[symbol=\"minAccuracy\"]{text-align:center}.el-dialog__body{user-select: none !important}.el-dialog__title{user-select: none !important}:root{--el-border-radius-small:15px !important;--el-border-radius-base:8px !important}div.el-tabs.el-tabs--top.demo-tabs{transition:.2s}div.header{z-index:999}.el-notification{z-index:99999}.el-tabs__content{overflow:visible !important}");

(async function (vue, pinia$1, ElementPlus, md5, $$1) {
    var __defProp = Object.defineProperty;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __publicField = (obj, key, value) => {
        __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
        return value;
    };
    
    ((e) => {
        const t = GM_getResourceText(e);
        GM_addStyle(t);
    })("element-plus");
    var _GM_getResourceText = (() => "undefined" != typeof GM_getResourceText ? GM_getResourceText : void 0)(), _GM_getValue = (() => "undefined" != typeof GM_getValue ? GM_getValue : void 0)(), _GM_info = (() => "undefined" != typeof GM_info ? GM_info : void 0)(), _GM_setValue = (() => "undefined" != typeof GM_setValue ? GM_setValue : void 0)(), _GM_xmlhttpRequest = (() => "undefined" != typeof GM_xmlhttpRequest ? GM_xmlhttpRequest : void 0)(), _unsafeWindow = (() => "undefined" != typeof unsafeWindow ? unsafeWindow : void 0)();
    const getConfig = () => {
        const config = _GM_getValue("config");
        return config || defaultConfig$1;
    }, defaultConfig$1 = { 
        debugger: false, autoAnswer: true, autoVideo: true, autoVideoAnswer:true, icon:false, autoJump: true, autoSubmit: true, thtoken: "", yztoken: "", gptKey: "",gptModel: "gpt-3.5-turbo", gpt: false, gptType: ["0", "1", "2", "3", "4", "5", "6", "7"], interval: 3, 
        answerInterval: 3, minAccuracy: 0.8, videoRate: 1,checkUpdate:true,autoRefresh: false, autoExam: true, hideExam: false, notice: "这脚本源代码不是我写的，我只负责增加功能与优化体验，有重大BUG与我无瓜！" }, userConfig = [
            { name: "base", label: "基础配置", config: [
                { name: "icon",symbol: "icon", label: "本地黑化", type: "switch", value: defaultConfig$1.icon, desc: "获得鸽鸽的无上力量" }, 
                { name: "autoRefresh",symbol: "autoRefresh", label: "自动刷新", type: "switch", value: defaultConfig$1.autoRefresh, desc: "保存配置后自动刷新页面" }, 
                { name: "interval", symbol:"interval",label: "通用间隔(秒)", type: "number", value: defaultConfig$1.interval, desc: "通用间隔，用于脚本运行切换" }, 
                { name: "answerInterval",symbol: "answerInterval", label: "答题间隔(秒)", type: "number", value: defaultConfig$1.answerInterval, desc: "控制答题速度" }, 
                { name: "thtoken",symbol: "thtoken", label: "题库海的秘钥", type: "input", value: defaultConfig$1.thtoken, desc: "非必填，购买后可获得，填写完请保存再刷新页面" }, 
                { name: "yztoken",symbol: "yztoken", label: "一之题库秘钥", type: "input", value: defaultConfig$1.yztoken, desc: "非必填，购买后可获得，填写完请保存再刷新页面" }
            ]
            }, 
            { name: "chapter", label: "章节配置", config: [
                { name: "autoVideoAnswer",symbol: "autoVideoAnswer", label: "视频答题", type: "switch", value: defaultConfig$1.autoVideoAnswer, desc: "视频内答题，防被判挂机，但会消耗一丝性能" }, 
                { name: "autoAnswer",symbol: "autoAnswer", label: "自动答题", type: "switch", value: defaultConfig$1.autoAnswer, desc: "自动答题" }, 
                { name: "autoVideo",symbol: "autoVideo", label: "自动视频", type: "switch", value: defaultConfig$1.autoVideo, desc: "自动观看视频" }, 
                { name: "autoJump",symbol: "autoJump", label: "自动切换", type: "switch", value: defaultConfig$1.autoVideo, desc: "自动切换章节" }, 
                { name: "autoSubmit",symbol: "autoSubmit", label: "自动提交", type: "switch", value: defaultConfig$1.autoSubmit, desc: "自动提交答案" }, 
                { name: "videoRate",symbol: "videoRate", label: "视频速率",type: "number", value: defaultConfig$1.videoRate, desc: "只针对部分版本视频可倍速" },
                { name: "minAccuracy",symbol: "minAccuracy", label: "最低正确率", type: "input", value: defaultConfig$1.minAccuracy, desc: "不满足最低正确率则不会自动提交答案" }
            ] 
            }, 
            { name: "exam", label: "作业/考试/更新配置", config: [
                { name: "checkUpdate",symbol:"checkUpdate", label: "更新自检通知", type: "switch", value: defaultConfig$1.checkUpdate, desc: "是否显示自检通知" },
                { name: "autoExam", label: "考试自动切换", type: "switch", value: defaultConfig$1.autoExam, desc: "考试会自动切换题目" }
            ] 
            }
        ], useformStore = pinia$1.defineStore({
        id: "formstore", state: () => ({ forminput: getConfig(), dialogV: false, activeName: "base" }), actions: {
            saveConfig(forminput) {
                _GM_setValue("config", forminput);
            }
        }
    });
    
    var export_helper_default = (sfc, props) => {
        let target = sfc.__vccOpts || sfc;
        for (let [key, val] of props)
            target[key] = val;
        return target;
    }, aim_vue_vue_type_script_lang_default = { name: "Aim" }, _hoisted_12$1 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" }, _hoisted_42 = [vue.createElementVNode("path", { fill: "currentColor", d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z" }, null, -1), vue.createElementVNode("path", { fill: "currentColor", d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z" }, null, -1)];
    var aim_default = export_helper_default(aim_vue_vue_type_script_lang_default, [["render", function (_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_12$1, _hoisted_42);
    }], ["__file", "aim.vue"]]), setting_vue_vue_type_script_lang_default = { name: "Setting" }, _hoisted_1231 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" }, _hoisted_3230 = [vue.createElementVNode("path", { fill: "currentColor", d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z" }, null, -1)];
    var setting_default = export_helper_default(setting_vue_vue_type_script_lang_default, [["render", function (_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1231, _hoisted_3230);
    }], ["__file", "setting.vue"]]);
    const _sfc_main$1 = vue.defineComponent({
        components: {}, setup() {
            const formstoreObj = useformStore(), { forminput, dialogV, activeName } = pinia$1.storeToRefs(formstoreObj), ruleFormRef = vue.ref(), rules = vue.reactive({
                interval: [{ required: true, message: "间隔时间不能为空" }, { type: "number", message: "间隔时间必须为数字" }, { validator: (rule, value) => value >= 1 ? Promise.resolve() : Promise.reject("间隔时间必须大于等于1") }], 
                answerInterval: [{ required: true, message: "答题间隔不能为空" }, { type: "number", message: "答题间隔必须为数字" }, { validator: (rule, value) => value >= 1 ? Promise.resolve() : Promise.reject("答题间隔必须大于等于1") }], 
                videoRate: [{ required: true, message: "视频速率不能为空" }, { type: "number", message: "视频速率必须为数字" }, { validator: (rule, value) => value > 0 ? Promise.resolve() : Promise.reject("视频速率必须大于0") }],  
                token: [{
                    validator: (rule, value) => {
                        if (value) {
                            return /^[a-zA-Z0-9]{6,}$/.test(value) ? Promise.resolve() : Promise.reject("token格式错误");
                        }
                        return Promise.resolve();
                    }
                }]
            });
            return {
                dialogV, activeName, ruleFormRef, forminput, rules, submitForm: async (formEl) => {
                    formEl && await formEl.validate((valid, fields) => {
                        valid && (
                            formstoreObj.saveConfig(forminput.value), 
                            formStore.forminput.autoRefresh?location.reload():ElementPlus.ElNotification({ title: "配置保存成功", message: "刷新页面以应用更改", type: "success" }), 
                            dialogV.value = false
                        );
                    });
                }, userConfig, Setting: setting_default
            };
        }
    }), _export_sfc = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props)
            target[key] = val;
        return target;
    }, _hoisted_1$1 = { class: "dialog-footer" };
    const App = _export_sfc(_sfc_main$1, [["render", function (_ctx, _cache, $props, $setup, $data, $options) {
        //强行注入自己的函数方法
        function more_function() {
            _ctx.dialogV = !_ctx.dialogV
            nbc_function()
            
        }

        const _component_el_button = vue.resolveComponent("el-button"), _component_el_switch = vue.resolveComponent("el-switch"), _component_el_input = vue.resolveComponent("el-input"), _component_el_input_number = vue.resolveComponent("el-input-number"), _component_el_option = vue.resolveComponent("el-option"), _component_el_select = vue.resolveComponent("el-select"), _component_el_checkbox = vue.resolveComponent("el-checkbox"), _component_el_checkbox_group = vue.resolveComponent("el-checkbox-group"), _component_el_tooltip = vue.resolveComponent("el-tooltip"), _component_el_form_item = vue.resolveComponent("el-form-item"), _component_el_tab_pane = vue.resolveComponent("el-tab-pane"), _component_el_tabs = vue.resolveComponent("el-tabs"), _component_el_form = vue.resolveComponent("el-form"), _component_el_dialog = vue.resolveComponent("el-dialog");
        const result = (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createVNode(_component_el_button, {
            type: "danger",
            id: "csbutton",
            icon: _ctx.Setting,
            circle: "",
            onClick: more_function
        }, null, 8, ["icon"]), vue.createVNode(_component_el_dialog, {
            modelValue: _ctx.dialogV,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.dialogV = $event),
            title: "🐔超星修仙通挂科助手",
            width: "30%",
            modal: false,
            center: "",
            draggable: ""
        }, {
            footer: vue.withCtx(() => [vue.createElementVNode("span", _hoisted_1$1, [vue.createVNode(_component_el_button, {
                onClick: _cache[2] || (_cache[2] = ($event) => _ctx.dialogV = false)
            }, {
                default: vue.withCtx(() => [vue.createTextVNode("取消")]),
                _: 1
            }), vue.createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[3] || (_cache[3] = ($event) => _ctx.submitForm(_ctx.ruleFormRef))
            }, {
                default: vue.withCtx(() => [vue.createTextVNode("保存")]),
                _: 1
            })])]),
            default: vue.withCtx(() => [vue.createVNode(_component_el_form, {
                ref: "ruleFormRef",
                rules: _ctx.rules,
                model: _ctx.forminput,
                class: "demo-ruleForm"
            }, {
                default: vue.withCtx(() => [vue.createVNode(_component_el_tabs, {
                    class: "demo-tabs",
                    modelValue: _ctx.activeName,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.activeName = $event)
                }, {
                    default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.userConfig, (item) => (vue.openBlock(), vue.createBlock(_component_el_tab_pane, {
                        key: item.name,
                        label: item.label,
                        name: item.name
                    }, {
                        default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.config, (item1) => (vue.openBlock(), vue.createBlock(_component_el_form_item, {
                            label: item1.label,
                            prop: item1.name
                        }, {
                            default: vue.withCtx(() => [vue.createVNode(_component_el_tooltip, {
                                class: "box-item",
                                effect: "dark",
                                content: item1.desc || "",
                                placement: "top"
                            }, {
                                default: vue.withCtx(() => ["switch" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_switch, {
                                    key: 0,
                                    symbol: item1.symbol,
                                    modelValue: _ctx.forminput[item1.name],
                                    "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "input" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_input, {
                                    key: 1,
                                    modelValue: _ctx.forminput[item1.name],
                                    symbol: item1.symbol,
                                    "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "number" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_input_number, {
                                    key: 2,
                                    modelValue: _ctx.forminput[item1.name],
                                    "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "select" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_select, {
                                    key: 3,
                                    modelValue: _ctx.forminput[item1.name],
                                    "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event,
                                    placeholder: "请选择"
                                }, {
                                    default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item1.options, (item2) => (vue.openBlock(), vue.createBlock(_component_el_option, {
                                        key: item2.value,
                                        label: item2.label,
                                        value: item2.value
                                    }, null, 8, ["label", "value"]))), 128))]),
                                    _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])) : "checkbox" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_checkbox_group, {
                                    key: 4,
                                    modelValue: _ctx.forminput[item1.name],
                                    "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event
                                }, {
                                    default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item1.options, (item2) => (vue.openBlock(), vue.createBlock(_component_el_checkbox, {
                                        key: item2.value,
                                        label: item2.value,
                                        name: item2.value
                                    }, {
                                        default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(item2.label), 1)]),
                                        _: 2
                                    }, 1032, ["label", "name"]))), 128))]),
                                    _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])) : vue.createCommentVNode("", true)]),
                                _: 2
                            }, 1032, ["content"])]),
                            _: 2
                        }, 1032, ["label", "prop"]))), 256))]),
                        _: 2
                    }, 1032, ["label", "name"]))), 128))]),
                    _: 1
                }, 8, ["modelValue"])]),
                _: 1
            }, 8, ["rules", "model"])]),
            _: 1
        }, 8, ["modelValue"])], 64))
        return result
    }], ["__scopeId", "data-v-6ed29f7f"]]);
    let defaultConfig = getConfig();
    class ServerApi {
        constructor(window2 = _unsafeWindow) {
            __publicField(this, "api1", "http://api.tikuhai.com");
            __publicField(this, "api2", "http://cx.icodef.com/wyn-nb?v=4");
            __publicField(this, "api3", "https://tk.enncy.cn/query");
            __publicField(this, "api4", "https://api.muketool.com/cx/v2/query");
            __publicField(this, "windowz", _unsafeWindow);
            this.windowz = window2;
        }
        async defaultRequest(url, method, data = {}, headers = {}, type = false) {
            var _a;
            return type && (headers = { "Content-Type": "POST" == method ? "application/json" : "text/plain", Referer: this.windowz.location.href, v: _GM_info.script.version, key: defaultConfig.thtoken || "", uid: _unsafeWindow.uid || ((_a = _unsafeWindow == null ? void 0 : _unsafeWindow.getCookie) == null ? void 0 : _a.call(_unsafeWindow, "_uid")) || "", ...headers }), new Promise((resolve, reject) => {
                _GM_xmlhttpRequest({
                    method, url, data: JSON.stringify(data), headers, timeout: 1e4, onload: (res) => {
                        resolve(res);
                    }, ontimeout: () => {
                        reject("timeout");
                    }, onerror: (err) => {
                        reject(err);
                    }
                });
            });
        }
        async getAnswer(questionData) {
            return defaultConfig = getConfig(), new Promise((resolve) => {
                questionData = { key: defaultConfig.thtoken || "", ...questionData }, this.defaultRequest(`${this.api1}/search`, "POST", questionData, {}, true).then((res) => {
                    const data = JSON.parse(res.responseText);
                    -1 === data.code && (this.s2(data.data), resolve({ form: "题库海", answer: data.msg || "" })), resolve({ form: "题库海", answer: data.data.answer || data.msg || "", num: data.data.num || "", usenum: data.data.usenum || "" });
                }).catch((e) => {
                    resolve({ form: "题库海", answer: "" });
                });
            });
        }
        async getAnswer2(questionData) {
            let ip = Array.from({ length: 4 }, () => Math.floor(255 * Math.random())).join(".");
            return new Promise((resolve) => {
                let ques = { question: questionData.question };
                this.defaultRequest(this.api2, "POST", ques, { "Content-Type": "application/json", Authorization: defaultConfig.yztoken, "X-Forwarded-For": ip, "X-Real-IP": ip }).then((response) => {
                    const res = JSON.parse(response.responseText);
                    let answer = "";
                    if (1 === res.code) {
                        let data = res.data.replace(/javascript:void\(0\);/g, "").trim().replace(/\n/g, "");
                        data.includes("叛逆") || data.includes("公众号") || data.includes("李恒雅") || data.includes("一之") || (answer = data.split("#"));
                    }
                    resolve({ form: "一之题库", answer });
                }).catch(() => {
                    resolve({ form: "一之题库", answer: "" });
                });
            });
        }
        async getAnswer3(questionData) {
            return new Promise((resolve) => {
                const ques = { token: defaultConfig.enncytoken, title: questionData.question };
                this.defaultRequest(this.api3, "POST", ques).then((response) => {
                    const res = JSON.parse(response.responseText);
                    resolve({ form: "言溪题库", answer: 1 === res.code ? res.data.answer : "" });
                }).catch(() => {
                    resolve({ form: "言溪题库", answer: "" });
                });
            });
        }
        async getAnswer4(questionData) {
            return new Promise((resolve) => {
                const ques = { question: questionData.question, type: parseInt(questionData.type) };
                this.defaultRequest(this.api4, "POST", ques, { "Content-Type": "application/json" }).then((response) => {
                    const res = JSON.parse(response.responseText);
                    resolve({ form: "free4", answer: 1 === res.code ? res.data.split("#") : "" });
                }).catch(() => {
                    resolve({ form: "free4", answer: "" });
                });
            });
        }
        async s(questionList, url) {
            return new Promise(async (resolve) => {
                const ques = { questionList, url };
                await this.defaultRequest(`${this.api1}/save1`, "POST", ques, { "Content-Type": "application/json" }).then((response) => {
                    resolve();
                }).catch((e) => {
                    resolve();
                });
            });
        }
        async s2(data) {
            data.url && this.defaultRequest(data.url, "GET", null, {}).then(async (response) => {
                const html = response.responseText;
                let document1, questionList, questionListHtml;
                document1 = new DOMParser().parseFromString(html, "text/html"), questionList = document1.getElementsByClassName("Py-mian1"), questionListHtml = [];
                for (let i = 0; i < questionList.length; i++)
                    try {
                        if (0 === i)
                            continue;
                        let questionTitle = removeHtml(questionList[i].getElementsByClassName("Py-m1-title")[0].innerHTML), questionType$1 = questionTitle.match(/\[(.*?)\]/)[1];
                        if ("单选题" === questionType$1 || "多选题" === questionType$1) {
                            questionTitle = questionTitle.replace(/[0-9]{1,3}.\s/gi, "").replace(/(^\s*)|(\s*$)/g, "").replace(/^【.*?】\s*/, "").replace(/\[(.*?)\]\s*/, "").replace(/\s*（\d+\.\d+分）$/, "");
                            let optionHtml = $(questionList[i]).find("ul.answerList li.clearfix"), optionText = [];
                            optionHtml.each(function (index, item) {
                                let abcd = String.fromCharCode(65 + index) + ".", optionTemp = removeHtml(item.innerHTML);
                                0 == optionTemp.indexOf(abcd) && (optionTemp = optionTemp.replace(abcd, "").trim()), optionText.push(optionTemp);
                            }), questionListHtml.push({ question: questionTitle, type: questionType[questionType$1], options: optionText, questionData: questionList[i].innerHTML });
                        }
                    } catch (e) {
                        continue;
                    }
                let postData = { questionList: questionListHtml, url: data.url };
                await this.defaultRequest(data.url1, "POST", postData, {}, true).then().catch();
            }).catch();
        }
    }
    function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
    }
    var Typr = {
        parse: function (buff) {
            var bin = Typr._bin, data = new Uint8Array(buff), offset = 0;
            bin.readFixed(data, offset), offset += 4;
            var numTables = bin.readUshort(data, offset);
            offset += 2, bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2;
            for (var tags = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GPOS", "GSUB", "SVG "], obj = { _data: data }, tabs = {}, i = 0; i < numTables; i++) {
                var tag = bin.readASCII(data, offset, 4);
                offset += 4, bin.readUint(data, offset), offset += 4;
                var toffset = bin.readUint(data, offset);
                offset += 4;
                var length = bin.readUint(data, offset);
                offset += 4, tabs[tag] = { offset: toffset, length };
            }
            for (i = 0; i < tags.length; i++) {
                var t = tags[i];
                tabs[t] && (obj[t.trim()] = Typr[t.trim()].parse(data, tabs[t].offset, tabs[t].length, obj));
            }
            return obj;
        }, _tabOffset: function (data, tab) {
            for (var bin = Typr._bin, numTables = bin.readUshort(data, 4), offset = 12, i = 0; i < numTables; i++) {
                var tag = bin.readASCII(data, offset, 4);
                offset += 4, bin.readUint(data, offset), offset += 4;
                var toffset = bin.readUint(data, offset);
                if (offset += 4, bin.readUint(data, offset), offset += 4, tag == tab)
                    return toffset;
            }
            return 0;
        }
    };
    Typr._bin = {
        readFixed: function (data, o) {
            return (data[o] << 8 | data[o + 1]) + (data[o + 2] << 8 | data[o + 3]) / 65540;
        }, readF2dot14: function (data, o) {
            return Typr._bin.readShort(data, o) / 16384;
        }, readInt: function (buff, p) {
            var a = Typr._bin.t.uint8;
            return a[0] = buff[p + 3], a[1] = buff[p + 2], a[2] = buff[p + 1], a[3] = buff[p], Typr._bin.t.int32[0];
        }, readInt8: function (buff, p) {
            return Typr._bin.t.uint8[0] = buff[p], Typr._bin.t.int8[0];
        }, readShort: function (buff, p) {
            var a = Typr._bin.t.uint8;
            return a[1] = buff[p], a[0] = buff[p + 1], Typr._bin.t.int16[0];
        }, readUshort: function (buff, p) {
            return buff[p] << 8 | buff[p + 1];
        }, readUshorts: function (buff, p, len) {
            for (var arr = [], i = 0; i < len; i++)
                arr.push(Typr._bin.readUshort(buff, p + 2 * i));
            return arr;
        }, readUint: function (buff, p) {
            var a = Typr._bin.t.uint8;
            return a[3] = buff[p], a[2] = buff[p + 1], a[1] = buff[p + 2], a[0] = buff[p + 3], Typr._bin.t.uint32[0];
        }, readUint64: function (buff, p) {
            return 4294967296 * Typr._bin.readUint(buff, p) + Typr._bin.readUint(buff, p + 4);
        }, readASCII: function (buff, p, l) {
            for (var s = "", i = 0; i < l; i++)
                s += String.fromCharCode(buff[p + i]);
            return s;
        }, readUnicode: function (buff, p, l) {
            for (var s = "", i = 0; i < l; i++) {
                var c = buff[p++] << 8 | buff[p++];
                s += String.fromCharCode(c);
            }
            return s;
        }, _tdec: window.TextDecoder ? new window.TextDecoder() : null, readUTF8: function (buff, p, l) {
            var tdec = Typr._bin._tdec;
            return tdec && 0 == p && l == buff.length ? tdec.decode(buff) : Typr._bin.readASCII(buff, p, l);
        }, readBytes: function (buff, p, l) {
            for (var arr = [], i = 0; i < l; i++)
                arr.push(buff[p + i]);
            return arr;
        }, readASCIIArray: function (buff, p, l) {
            for (var s = [], i = 0; i < l; i++)
                s.push(String.fromCharCode(buff[p + i]));
            return s;
        }
    }, Typr._bin.t = { buff: new ArrayBuffer(8) }, Typr._bin.t.int8 = new Int8Array(Typr._bin.t.buff), Typr._bin.t.uint8 = new Uint8Array(Typr._bin.t.buff), Typr._bin.t.int16 = new Int16Array(Typr._bin.t.buff), Typr._bin.t.uint16 = new Uint16Array(Typr._bin.t.buff), Typr._bin.t.int32 = new Int32Array(Typr._bin.t.buff), Typr._bin.t.uint32 = new Uint32Array(Typr._bin.t.buff), Typr._lctf = {}, Typr._lctf.parse = function (data, offset, length, font, subt) {
        var bin = Typr._bin, obj = {}, offset0 = offset;
        bin.readFixed(data, offset), offset += 4;
        var offScriptList = bin.readUshort(data, offset);
        offset += 2;
        var offFeatureList = bin.readUshort(data, offset);
        offset += 2;
        var offLookupList = bin.readUshort(data, offset);
        return offset += 2, obj.scriptList = Typr._lctf.readScriptList(data, offset0 + offScriptList), obj.featureList = Typr._lctf.readFeatureList(data, offset0 + offFeatureList), obj.lookupList = Typr._lctf.readLookupList(data, offset0 + offLookupList, subt), obj;
    }, Typr._lctf.readLookupList = function (data, offset, subt) {
        var bin = Typr._bin, offset0 = offset, obj = [], count = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < count; i++) {
            var noff = bin.readUshort(data, offset);
            offset += 2;
            var lut = Typr._lctf.readLookupTable(data, offset0 + noff, subt);
            obj.push(lut);
        }
        return obj;
    }, Typr._lctf.readLookupTable = function (data, offset, subt) {
        var bin = Typr._bin, offset0 = offset, obj = { tabs: [] };
        obj.ltype = bin.readUshort(data, offset), offset += 2, obj.flag = bin.readUshort(data, offset), offset += 2;
        var cnt = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < cnt; i++) {
            var noff = bin.readUshort(data, offset);
            offset += 2;
            var tab = subt(data, obj.ltype, offset0 + noff);
            obj.tabs.push(tab);
        }
        return obj;
    }, Typr._lctf.numOfOnes = function (n) {
        for (var num = 0, i = 0; i < 32; i++)
            0 != (n >>> i & 1) && num++;
        return num;
    }, Typr._lctf.readClassDef = function (data, offset) {
        var bin = Typr._bin, obj = [], format = bin.readUshort(data, offset);
        if (offset += 2, 1 == format) {
            var startGlyph = bin.readUshort(data, offset);
            offset += 2;
            var glyphCount = bin.readUshort(data, offset);
            offset += 2;
            for (var i = 0; i < glyphCount; i++)
                obj.push(startGlyph + i), obj.push(startGlyph + i), obj.push(bin.readUshort(data, offset)), offset += 2;
        }
        if (2 == format) {
            var count = bin.readUshort(data, offset);
            offset += 2;
            for (i = 0; i < count; i++)
                obj.push(bin.readUshort(data, offset)), offset += 2, obj.push(bin.readUshort(data, offset)), offset += 2, obj.push(bin.readUshort(data, offset)), offset += 2;
        }
        return obj;
    }, Typr._lctf.getInterval = function (tab, val) {
        for (var i = 0; i < tab.length; i += 3) {
            var start = tab[i], end = tab[i + 1];
            if (tab[i + 2], start <= val && val <= end)
                return i;
        }
        return -1;
    }, Typr._lctf.readValueRecord = function (data, offset, valFmt) {
        var bin = Typr._bin, arr = [];
        return arr.push(1 & valFmt ? bin.readShort(data, offset) : 0), offset += 1 & valFmt ? 2 : 0, arr.push(2 & valFmt ? bin.readShort(data, offset) : 0), offset += 2 & valFmt ? 2 : 0, arr.push(4 & valFmt ? bin.readShort(data, offset) : 0), offset += 4 & valFmt ? 2 : 0, arr.push(8 & valFmt ? bin.readShort(data, offset) : 0), offset += 8 & valFmt ? 2 : 0, arr;
    }, Typr._lctf.readCoverage = function (data, offset) {
        var bin = Typr._bin, cvg = {};
        cvg.fmt = bin.readUshort(data, offset), offset += 2;
        var count = bin.readUshort(data, offset);
        return offset += 2, 1 == cvg.fmt && (cvg.tab = bin.readUshorts(data, offset, count)), 2 == cvg.fmt && (cvg.tab = bin.readUshorts(data, offset, 3 * count)), cvg;
    }, Typr._lctf.coverageIndex = function (cvg, val) {
        var tab = cvg.tab;
        if (1 == cvg.fmt)
            return tab.indexOf(val);
        if (2 == cvg.fmt) {
            var ind = Typr._lctf.getInterval(tab, val);
            if (-1 != ind)
                return tab[ind + 2] + (val - tab[ind]);
        }
        return -1;
    }, Typr._lctf.readFeatureList = function (data, offset) {
        var bin = Typr._bin, offset0 = offset, obj = [], count = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < count; i++) {
            var tag = bin.readASCII(data, offset, 4);
            offset += 4;
            var noff = bin.readUshort(data, offset);
            offset += 2, obj.push({ tag: tag.trim(), tab: Typr._lctf.readFeatureTable(data, offset0 + noff) });
        }
        return obj;
    }, Typr._lctf.readFeatureTable = function (data, offset) {
        var bin = Typr._bin;
        bin.readUshort(data, offset), offset += 2;
        var lookupCount = bin.readUshort(data, offset);
        offset += 2;
        for (var indices = [], i = 0; i < lookupCount; i++)
            indices.push(bin.readUshort(data, offset + 2 * i));
        return indices;
    }, Typr._lctf.readScriptList = function (data, offset) {
        var bin = Typr._bin, offset0 = offset, obj = {}, count = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < count; i++) {
            var tag = bin.readASCII(data, offset, 4);
            offset += 4;
            var noff = bin.readUshort(data, offset);
            offset += 2, obj[tag.trim()] = Typr._lctf.readScriptTable(data, offset0 + noff);
        }
        return obj;
    }, Typr._lctf.readScriptTable = function (data, offset) {
        var bin = Typr._bin, offset0 = offset, obj = {}, defLangSysOff = bin.readUshort(data, offset);
        offset += 2, obj.default = Typr._lctf.readLangSysTable(data, offset0 + defLangSysOff);
        var langSysCount = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < langSysCount; i++) {
            var tag = bin.readASCII(data, offset, 4);
            offset += 4;
            var langSysOff = bin.readUshort(data, offset);
            offset += 2, obj[tag.trim()] = Typr._lctf.readLangSysTable(data, offset0 + langSysOff);
        }
        return obj;
    }, Typr._lctf.readLangSysTable = function (data, offset) {
        var bin = Typr._bin, obj = {};
        bin.readUshort(data, offset), offset += 2, obj.reqFeature = bin.readUshort(data, offset), offset += 2;
        var featureCount = bin.readUshort(data, offset);
        return offset += 2, obj.features = bin.readUshorts(data, offset, featureCount), obj;
    }, Typr.CFF = {}, Typr.CFF.parse = function (data, offset, length) {
        var bin = Typr._bin;
        (data = new Uint8Array(data.buffer, offset, length))[offset = 0], data[++offset], data[++offset], data[++offset], offset++;
        var ninds = [];
        offset = Typr.CFF.readIndex(data, offset, ninds);
        for (var names = [], i = 0; i < ninds.length - 1; i++)
            names.push(bin.readASCII(data, offset + ninds[i], ninds[i + 1] - ninds[i]));
        offset += ninds[ninds.length - 1];
        var tdinds = [];
        offset = Typr.CFF.readIndex(data, offset, tdinds);
        var topDicts = [];
        for (i = 0; i < tdinds.length - 1; i++)
            topDicts.push(Typr.CFF.readDict(data, offset + tdinds[i], offset + tdinds[i + 1]));
        offset += tdinds[tdinds.length - 1];
        var topdict = topDicts[0], sinds = [];
        offset = Typr.CFF.readIndex(data, offset, sinds);
        var strings = [];
        for (i = 0; i < sinds.length - 1; i++)
            strings.push(bin.readASCII(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
        if (offset += sinds[sinds.length - 1], Typr.CFF.readSubrs(data, offset, topdict), topdict.CharStrings) {
            offset = topdict.CharStrings;
            sinds = [];
            offset = Typr.CFF.readIndex(data, offset, sinds);
            var cstr = [];
            for (i = 0; i < sinds.length - 1; i++)
                cstr.push(bin.readBytes(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
            topdict.CharStrings = cstr;
        }
        topdict.Encoding && (topdict.Encoding = Typr.CFF.readEncoding(data, topdict.Encoding, topdict.CharStrings.length)), topdict.charset && (topdict.charset = Typr.CFF.readCharset(data, topdict.charset, topdict.CharStrings.length)), topdict.Private && (offset = topdict.Private[1], topdict.Private = Typr.CFF.readDict(data, offset, offset + topdict.Private[0]), topdict.Private.Subrs && Typr.CFF.readSubrs(data, offset + topdict.Private.Subrs, topdict.Private));
        var obj = {};
        for (var p in topdict)
            -1 != ["FamilyName", "FullName", "Notice", "version", "Copyright"].indexOf(p) ? obj[p] = strings[topdict[p] - 426 + 35] : obj[p] = topdict[p];
        return obj;
    }, Typr.CFF.readSubrs = function (data, offset, obj) {
        var bin = Typr._bin, gsubinds = [];
        offset = Typr.CFF.readIndex(data, offset, gsubinds);
        var bias, nSubrs = gsubinds.length;
        bias = nSubrs < 1240 ? 107 : nSubrs < 33900 ? 1131 : 32768, obj.Bias = bias, obj.Subrs = [];
        for (var i = 0; i < gsubinds.length - 1; i++)
            obj.Subrs.push(bin.readBytes(data, offset + gsubinds[i], gsubinds[i + 1] - gsubinds[i]));
    }, Typr.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], Typr.CFF.glyphByUnicode = function (cff, code) {
        for (var i = 0; i < cff.charset.length; i++)
            if (cff.charset[i] == code)
                return i;
        return -1;
    }, Typr.CFF.glyphBySE = function (cff, charcode) {
        return charcode < 0 || charcode > 255 ? -1 : Typr.CFF.glyphByUnicode(cff, Typr.CFF.tableSE[charcode]);
    }, Typr.CFF.readEncoding = function (data, offset, num) {
        Typr._bin;
        var array = [".notdef"], format = data[offset];
        if (offset++, 0 != format)
            throw "error: unknown encoding format: " + format;
        var nCodes = data[offset];
        offset++;
        for (var i = 0; i < nCodes; i++)
            array.push(data[offset + i]);
        return array;
    }, Typr.CFF.readCharset = function (data, offset, num) {
        var bin = Typr._bin, charset = [".notdef"], format = data[offset];
        if (offset++, 0 == format)
            for (var i = 0; i < num; i++) {
                var first = bin.readUshort(data, offset);
                offset += 2, charset.push(first);
            }
        else {
            if (1 != format && 2 != format)
                throw "error: format: " + format;
            for (; charset.length < num;) {
                first = bin.readUshort(data, offset);
                offset += 2;
                var nLeft = 0;
                1 == format ? (nLeft = data[offset], offset++) : (nLeft = bin.readUshort(data, offset), offset += 2);
                for (i = 0; i <= nLeft; i++)
                    charset.push(first), first++;
            }
        }
        return charset;
    }, Typr.CFF.readIndex = function (data, offset, inds) {
        var bin = Typr._bin, count = bin.readUshort(data, offset), offsize = data[offset += 2];
        if (offset++, 1 == offsize)
            for (var i = 0; i < count + 1; i++)
                inds.push(data[offset + i]);
        else if (2 == offsize)
            for (i = 0; i < count + 1; i++)
                inds.push(bin.readUshort(data, offset + 2 * i));
        else if (3 == offsize)
            for (i = 0; i < count + 1; i++)
                inds.push(16777215 & bin.readUint(data, offset + 3 * i - 1));
        else if (0 != count)
            throw "unsupported offset size: " + offsize + ", count: " + count;
        return (offset += (count + 1) * offsize) - 1;
    }, Typr.CFF.getCharString = function (data, offset, o) {
        var bin = Typr._bin, b0 = data[offset], b1 = data[offset + 1];
        data[offset + 2], data[offset + 3], data[offset + 4];
        var vs = 1, op = null, val = null;
        b0 <= 20 && (op = b0, vs = 1), 12 == b0 && (op = 100 * b0 + b1, vs = 2), 21 <= b0 && b0 <= 27 && (op = b0, vs = 1), 28 == b0 && (val = bin.readShort(data, offset + 1), vs = 3), 29 <= b0 && b0 <= 31 && (op = b0, vs = 1), 32 <= b0 && b0 <= 246 && (val = b0 - 139, vs = 1), 247 <= b0 && b0 <= 250 && (val = 256 * (b0 - 247) + b1 + 108, vs = 2), 251 <= b0 && b0 <= 254 && (val = 256 * -(b0 - 251) - b1 - 108, vs = 2), 255 == b0 && (val = bin.readInt(data, offset + 1) / 65535, vs = 5), o.val = null != val ? val : "o" + op, o.size = vs;
    }, Typr.CFF.readCharString = function (data, offset, length) {
        for (var end = offset + length, bin = Typr._bin, arr = []; offset < end;) {
            var b0 = data[offset], b1 = data[offset + 1];
            data[offset + 2], data[offset + 3], data[offset + 4];
            var vs = 1, op = null, val = null;
            b0 <= 20 && (op = b0, vs = 1), 12 == b0 && (op = 100 * b0 + b1, vs = 2), 19 != b0 && 20 != b0 || (op = b0, vs = 2), 21 <= b0 && b0 <= 27 && (op = b0, vs = 1), 28 == b0 && (val = bin.readShort(data, offset + 1), vs = 3), 29 <= b0 && b0 <= 31 && (op = b0, vs = 1), 32 <= b0 && b0 <= 246 && (val = b0 - 139, vs = 1), 247 <= b0 && b0 <= 250 && (val = 256 * (b0 - 247) + b1 + 108, vs = 2), 251 <= b0 && b0 <= 254 && (val = 256 * -(b0 - 251) - b1 - 108, vs = 2), 255 == b0 && (val = bin.readInt(data, offset + 1) / 65535, vs = 5), arr.push(null != val ? val : "o" + op), offset += vs;
        }
        return arr;
    }, Typr.CFF.readDict = function (data, offset, end) {
        for (var bin = Typr._bin, dict = {}, carr = []; offset < end;) {
            var b0 = data[offset], b1 = data[offset + 1];
            data[offset + 2], data[offset + 3], data[offset + 4];
            var vs = 1, key = null, val = null;
            if (28 == b0 && (val = bin.readShort(data, offset + 1), vs = 3), 29 == b0 && (val = bin.readInt(data, offset + 1), vs = 5), 32 <= b0 && b0 <= 246 && (val = b0 - 139, vs = 1), 247 <= b0 && b0 <= 250 && (val = 256 * (b0 - 247) + b1 + 108, vs = 2), 251 <= b0 && b0 <= 254 && (val = 256 * -(b0 - 251) - b1 - 108, vs = 2), 255 == b0)
                throw val = bin.readInt(data, offset + 1) / 65535, vs = 5, "unknown number";
            if (30 == b0) {
                var nibs = [];
                for (vs = 1; ;) {
                    var b = data[offset + vs];
                    vs++;
                    var nib0 = b >> 4, nib1 = 15 & b;
                    if (15 != nib0 && nibs.push(nib0), 15 != nib1 && nibs.push(nib1), 15 == nib1)
                        break;
                }
                for (var s = "", chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], i = 0; i < nibs.length; i++)
                    s += chars[nibs[i]];
                val = parseFloat(s);
            }
            if (b0 <= 21) {
                if (key = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][b0], vs = 1, 12 == b0)
                    key = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][b1], vs = 2;
            }
            null != key ? (dict[key] = 1 == carr.length ? carr[0] : carr, carr = []) : carr.push(val), offset += vs;
        }
        return dict;
    }, Typr.cmap = {}, Typr.cmap.parse = function (data, offset, length) {
        data = new Uint8Array(data.buffer, offset, length), offset = 0;
        var bin = Typr._bin, obj = {};
        bin.readUshort(data, offset), offset += 2;
        var numTables = bin.readUshort(data, offset);
        offset += 2;
        var offs = [];
        obj.tables = [];
        for (var i = 0; i < numTables; i++) {
            var platformID = bin.readUshort(data, offset);
            offset += 2;
            var encodingID = bin.readUshort(data, offset);
            offset += 2;
            var noffset = bin.readUint(data, offset);
            offset += 4;
            var id = "p" + platformID + "e" + encodingID, tind = offs.indexOf(noffset);
            if (-1 == tind) {
                var subt;
                tind = obj.tables.length, offs.push(noffset);
                var format = bin.readUshort(data, noffset);
                0 == format ? subt = Typr.cmap.parse0(data, noffset) : 4 == format ? subt = Typr.cmap.parse4(data, noffset) : 6 == format ? subt = Typr.cmap.parse6(data, noffset) : 12 == format ? subt = Typr.cmap.parse12(data, noffset) : console.log("unknown format: " + format, platformID, encodingID, noffset), obj.tables.push(subt);
            }
            if (null != obj[id])
                throw "multiple tables for one platform+encoding";
            obj[id] = tind;
        }
        return obj;
    }, Typr.cmap.parse0 = function (data, offset) {
        var bin = Typr._bin, obj = {};
        obj.format = bin.readUshort(data, offset), offset += 2;
        var len = bin.readUshort(data, offset);
        offset += 2, bin.readUshort(data, offset), offset += 2, obj.map = [];
        for (var i = 0; i < len - 6; i++)
            obj.map.push(data[offset + i]);
        return obj;
    }, Typr.cmap.parse4 = function (data, offset) {
        var bin = Typr._bin, offset0 = offset, obj = {};
        obj.format = bin.readUshort(data, offset), offset += 2;
        var length = bin.readUshort(data, offset);
        offset += 2, bin.readUshort(data, offset), offset += 2;
        var segCountX2 = bin.readUshort(data, offset);
        offset += 2;
        var segCount = segCountX2 / 2;
        obj.searchRange = bin.readUshort(data, offset), offset += 2, obj.entrySelector = bin.readUshort(data, offset), offset += 2, obj.rangeShift = bin.readUshort(data, offset), offset += 2, obj.endCount = bin.readUshorts(data, offset, segCount), offset += 2 * segCount, offset += 2, obj.startCount = bin.readUshorts(data, offset, segCount), offset += 2 * segCount, obj.idDelta = [];
        for (var i = 0; i < segCount; i++)
            obj.idDelta.push(bin.readShort(data, offset)), offset += 2;
        for (obj.idRangeOffset = bin.readUshorts(data, offset, segCount), offset += 2 * segCount, obj.glyphIdArray = []; offset < offset0 + length;)
            obj.glyphIdArray.push(bin.readUshort(data, offset)), offset += 2;
        return obj;
    }, Typr.cmap.parse6 = function (data, offset) {
        var bin = Typr._bin, obj = {};
        obj.format = bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2, obj.firstCode = bin.readUshort(data, offset), offset += 2;
        var entryCount = bin.readUshort(data, offset);
        offset += 2, obj.glyphIdArray = [];
        for (var i = 0; i < entryCount; i++)
            obj.glyphIdArray.push(bin.readUshort(data, offset)), offset += 2;
        return obj;
    }, Typr.cmap.parse12 = function (data, offset) {
        var bin = Typr._bin, obj = {};
        obj.format = bin.readUshort(data, offset), offset += 2, offset += 2, bin.readUint(data, offset), offset += 4, bin.readUint(data, offset), offset += 4;
        var nGroups = bin.readUint(data, offset);
        offset += 4, obj.groups = [];
        for (var i = 0; i < nGroups; i++) {
            var off = offset + 12 * i, startCharCode = bin.readUint(data, off + 0), endCharCode = bin.readUint(data, off + 4), startGlyphID = bin.readUint(data, off + 8);
            obj.groups.push([startCharCode, endCharCode, startGlyphID]);
        }
        return obj;
    }, Typr.glyf = {}, Typr.glyf.parse = function (data, offset, length, font) {
        for (var obj = [], g = 0; g < font.maxp.numGlyphs; g++)
            obj.push(null);
        return obj;
    }, Typr.glyf._parseGlyf = function (font, g) {
        var bin = Typr._bin, data = font._data, offset = Typr._tabOffset(data, "glyf") + font.loca[g];
        if (font.loca[g] == font.loca[g + 1])
            return null;
        var gl = {};
        if (gl.noc = bin.readShort(data, offset), offset += 2, gl.xMin = bin.readShort(data, offset), offset += 2, gl.yMin = bin.readShort(data, offset), offset += 2, gl.xMax = bin.readShort(data, offset), offset += 2, gl.yMax = bin.readShort(data, offset), offset += 2, gl.xMin >= gl.xMax || gl.yMin >= gl.yMax)
            return null;
        if (gl.noc > 0) {
            gl.endPts = [];
            for (var i = 0; i < gl.noc; i++)
                gl.endPts.push(bin.readUshort(data, offset)), offset += 2;
            var instructionLength = bin.readUshort(data, offset);
            if (offset += 2, data.length - offset < instructionLength)
                return null;
            gl.instructions = bin.readBytes(data, offset, instructionLength), offset += instructionLength;
            var crdnum = gl.endPts[gl.noc - 1] + 1;
            gl.flags = [];
            for (i = 0; i < crdnum; i++) {
                var flag = data[offset];
                if (offset++, gl.flags.push(flag), 0 != (8 & flag)) {
                    var rep = data[offset];
                    offset++;
                    for (var j = 0; j < rep; j++)
                        gl.flags.push(flag), i++;
                }
            }
            gl.xs = [];
            for (i = 0; i < crdnum; i++) {
                var i8 = 0 != (2 & gl.flags[i]), same = 0 != (16 & gl.flags[i]);
                i8 ? (gl.xs.push(same ? data[offset] : -data[offset]), offset++) : same ? gl.xs.push(0) : (gl.xs.push(bin.readShort(data, offset)), offset += 2);
            }
            gl.ys = [];
            for (i = 0; i < crdnum; i++) {
                i8 = 0 != (4 & gl.flags[i]), same = 0 != (32 & gl.flags[i]);
                i8 ? (gl.ys.push(same ? data[offset] : -data[offset]), offset++) : same ? gl.ys.push(0) : (gl.ys.push(bin.readShort(data, offset)), offset += 2);
            }
            var x = 0, y = 0;
            for (i = 0; i < crdnum; i++)
                x += gl.xs[i], y += gl.ys[i], gl.xs[i] = x, gl.ys[i] = y;
        } else {
            var flags;
            gl.parts = [];
            do {
                flags = bin.readUshort(data, offset), offset += 2;
                var part = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
                if (gl.parts.push(part), part.glyphIndex = bin.readUshort(data, offset), offset += 2, 1 & flags) {
                    var arg1 = bin.readShort(data, offset);
                    offset += 2;
                    var arg2 = bin.readShort(data, offset);
                    offset += 2;
                } else {
                    arg1 = bin.readInt8(data, offset);
                    offset++;
                    arg2 = bin.readInt8(data, offset);
                    offset++;
                }
                2 & flags ? (part.m.tx = arg1, part.m.ty = arg2) : (part.p1 = arg1, part.p2 = arg2), 8 & flags ? (part.m.a = part.m.d = bin.readF2dot14(data, offset), offset += 2) : 64 & flags ? (part.m.a = bin.readF2dot14(data, offset), offset += 2, part.m.d = bin.readF2dot14(data, offset), offset += 2) : 128 & flags && (part.m.a = bin.readF2dot14(data, offset), offset += 2, part.m.b = bin.readF2dot14(data, offset), offset += 2, part.m.c = bin.readF2dot14(data, offset), offset += 2, part.m.d = bin.readF2dot14(data, offset), offset += 2);
            } while (32 & flags);
            if (256 & flags) {
                var numInstr = bin.readUshort(data, offset);
                offset += 2, gl.instr = [];
                for (i = 0; i < numInstr; i++)
                    gl.instr.push(data[offset]), offset++;
            }
        }
        return gl;
    }, Typr.GPOS = {}, Typr.GPOS.parse = function (data, offset, length, font) {
        return Typr._lctf.parse(data, offset, length, font, Typr.GPOS.subt);
    }, Typr.GPOS.subt = function (data, ltype, offset) {
        if (2 != ltype)
            return null;
        var bin = Typr._bin, offset0 = offset, tab = {};
        tab.format = bin.readUshort(data, offset), offset += 2;
        var covOff = bin.readUshort(data, offset);
        offset += 2, tab.coverage = Typr._lctf.readCoverage(data, covOff + offset0), tab.valFmt1 = bin.readUshort(data, offset), offset += 2, tab.valFmt2 = bin.readUshort(data, offset), offset += 2;
        var ones1 = Typr._lctf.numOfOnes(tab.valFmt1), ones2 = Typr._lctf.numOfOnes(tab.valFmt2);
        if (1 == tab.format) {
            tab.pairsets = [];
            var count = bin.readUshort(data, offset);
            offset += 2;
            for (var i = 0; i < count; i++) {
                var psoff = bin.readUshort(data, offset);
                offset += 2, psoff += offset0;
                var pvcount = bin.readUshort(data, psoff);
                psoff += 2;
                for (var arr = [], j = 0; j < pvcount; j++) {
                    var gid2 = bin.readUshort(data, psoff);
                    psoff += 2, 0 != tab.valFmt1 && (value1 = Typr._lctf.readValueRecord(data, psoff, tab.valFmt1), psoff += 2 * ones1), 0 != tab.valFmt2 && (value2 = Typr._lctf.readValueRecord(data, psoff, tab.valFmt2), psoff += 2 * ones2), arr.push({ gid2, val1: value1, val2: value2 });
                }
                tab.pairsets.push(arr);
            }
        }
        if (2 == tab.format) {
            var classDef1 = bin.readUshort(data, offset);
            offset += 2;
            var classDef2 = bin.readUshort(data, offset);
            offset += 2;
            var class1Count = bin.readUshort(data, offset);
            offset += 2;
            var class2Count = bin.readUshort(data, offset);
            offset += 2, tab.classDef1 = Typr._lctf.readClassDef(data, offset0 + classDef1), tab.classDef2 = Typr._lctf.readClassDef(data, offset0 + classDef2), tab.matrix = [];
            for (i = 0; i < class1Count; i++) {
                var row = [];
                for (j = 0; j < class2Count; j++) {
                    var value1 = null, value2 = null;
                    0 != tab.valFmt1 && (value1 = Typr._lctf.readValueRecord(data, offset, tab.valFmt1), offset += 2 * ones1), 0 != tab.valFmt2 && (value2 = Typr._lctf.readValueRecord(data, offset, tab.valFmt2), offset += 2 * ones2), row.push({ val1: value1, val2: value2 });
                }
                tab.matrix.push(row);
            }
        }
        return tab;
    }, Typr.GSUB = {}, Typr.GSUB.parse = function (data, offset, length, font) {
        return Typr._lctf.parse(data, offset, length, font, Typr.GSUB.subt);
    }, Typr.GSUB.subt = function (data, ltype, offset) {
        var bin = Typr._bin, offset0 = offset, tab = {};
        if (1 != ltype && 4 != ltype && 5 != ltype)
            return null;
        tab.fmt = bin.readUshort(data, offset), offset += 2;
        var covOff = bin.readUshort(data, offset);
        if (offset += 2, tab.coverage = Typr._lctf.readCoverage(data, covOff + offset0), 1 == ltype) {
            if (1 == tab.fmt)
                tab.delta = bin.readShort(data, offset), offset += 2;
            else if (2 == tab.fmt) {
                var cnt = bin.readUshort(data, offset);
                offset += 2, tab.newg = bin.readUshorts(data, offset, cnt), offset += 2 * tab.newg.length;
            }
        } else if (4 == ltype) {
            tab.vals = [];
            cnt = bin.readUshort(data, offset);
            offset += 2;
            for (var i = 0; i < cnt; i++) {
                var loff = bin.readUshort(data, offset);
                offset += 2, tab.vals.push(Typr.GSUB.readLigatureSet(data, offset0 + loff));
            }
        } else if (5 == ltype)
            if (2 == tab.fmt) {
                var cDefOffset = bin.readUshort(data, offset);
                offset += 2, tab.cDef = Typr._lctf.readClassDef(data, offset0 + cDefOffset), tab.scset = [];
                var subClassSetCount = bin.readUshort(data, offset);
                offset += 2;
                for (i = 0; i < subClassSetCount; i++) {
                    var scsOff = bin.readUshort(data, offset);
                    offset += 2, tab.scset.push(0 == scsOff ? null : Typr.GSUB.readSubClassSet(data, offset0 + scsOff));
                }
            } else
                console.log("unknown table format", tab.fmt);
        return tab;
    }, Typr.GSUB.readSubClassSet = function (data, offset) {
        var rUs = Typr._bin.readUshort, offset0 = offset, lset = [], cnt = rUs(data, offset);
        offset += 2;
        for (var i = 0; i < cnt; i++) {
            var loff = rUs(data, offset);
            offset += 2, lset.push(Typr.GSUB.readSubClassRule(data, offset0 + loff));
        }
        return lset;
    }, Typr.GSUB.readSubClassRule = function (data, offset) {
        var rUs = Typr._bin.readUshort, rule = {}, gcount = rUs(data, offset), scount = rUs(data, offset += 2);
        offset += 2, rule.input = [];
        for (var i = 0; i < gcount - 1; i++)
            rule.input.push(rUs(data, offset)), offset += 2;
        return rule.substLookupRecords = Typr.GSUB.readSubstLookupRecords(data, offset, scount), rule;
    }, Typr.GSUB.readSubstLookupRecords = function (data, offset, cnt) {
        for (var rUs = Typr._bin.readUshort, out = [], i = 0; i < cnt; i++)
            out.push(rUs(data, offset), rUs(data, offset + 2)), offset += 4;
        return out;
    }, Typr.GSUB.readChainSubClassSet = function (data, offset) {
        var bin = Typr._bin, offset0 = offset, lset = [], cnt = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < cnt; i++) {
            var loff = bin.readUshort(data, offset);
            offset += 2, lset.push(Typr.GSUB.readChainSubClassRule(data, offset0 + loff));
        }
        return lset;
    }, Typr.GSUB.readChainSubClassRule = function (data, offset) {
        for (var bin = Typr._bin, rule = {}, pps = ["backtrack", "input", "lookahead"], pi = 0; pi < pps.length; pi++) {
            var cnt = bin.readUshort(data, offset);
            offset += 2, 1 == pi && cnt--, rule[pps[pi]] = bin.readUshorts(data, offset, cnt), offset += 2 * rule[pps[pi]].length;
        }
        cnt = bin.readUshort(data, offset);
        return offset += 2, rule.subst = bin.readUshorts(data, offset, 2 * cnt), offset += 2 * rule.subst.length, rule;
    }, Typr.GSUB.readLigatureSet = function (data, offset) {
        var bin = Typr._bin, offset0 = offset, lset = [], lcnt = bin.readUshort(data, offset);
        offset += 2;
        for (var j = 0; j < lcnt; j++) {
            var loff = bin.readUshort(data, offset);
            offset += 2, lset.push(Typr.GSUB.readLigature(data, offset0 + loff));
        }
        return lset;
    }, Typr.GSUB.readLigature = function (data, offset) {
        var bin = Typr._bin, lig = { chain: [] };
        lig.nglyph = bin.readUshort(data, offset), offset += 2;
        var ccnt = bin.readUshort(data, offset);
        offset += 2;
        for (var k = 0; k < ccnt - 1; k++)
            lig.chain.push(bin.readUshort(data, offset)), offset += 2;
        return lig;
    }, Typr.head = {}, Typr.head.parse = function (data, offset, length) {
        var bin = Typr._bin, obj = {};
        return bin.readFixed(data, offset), offset += 4, obj.fontRevision = bin.readFixed(data, offset), offset += 4, bin.readUint(data, offset), offset += 4, bin.readUint(data, offset), offset += 4, obj.flags = bin.readUshort(data, offset), offset += 2, obj.unitsPerEm = bin.readUshort(data, offset), offset += 2, obj.created = bin.readUint64(data, offset), offset += 8, obj.modified = bin.readUint64(data, offset), offset += 8, obj.xMin = bin.readShort(data, offset), offset += 2, obj.yMin = bin.readShort(data, offset), offset += 2, obj.xMax = bin.readShort(data, offset), offset += 2, obj.yMax = bin.readShort(data, offset), offset += 2, obj.macStyle = bin.readUshort(data, offset), offset += 2, obj.lowestRecPPEM = bin.readUshort(data, offset), offset += 2, obj.fontDirectionHint = bin.readShort(data, offset), offset += 2, obj.indexToLocFormat = bin.readShort(data, offset), offset += 2, obj.glyphDataFormat = bin.readShort(data, offset), offset += 2, obj;
    }, Typr.hhea = {}, Typr.hhea.parse = function (data, offset, length) {
        var bin = Typr._bin, obj = {};
        return bin.readFixed(data, offset), offset += 4, obj.ascender = bin.readShort(data, offset), offset += 2, obj.descender = bin.readShort(data, offset), offset += 2, obj.lineGap = bin.readShort(data, offset), offset += 2, obj.advanceWidthMax = bin.readUshort(data, offset), offset += 2, obj.minLeftSideBearing = bin.readShort(data, offset), offset += 2, obj.minRightSideBearing = bin.readShort(data, offset), offset += 2, obj.xMaxExtent = bin.readShort(data, offset), offset += 2, obj.caretSlopeRise = bin.readShort(data, offset), offset += 2, obj.caretSlopeRun = bin.readShort(data, offset), offset += 2, obj.caretOffset = bin.readShort(data, offset), offset += 2, offset += 8, obj.metricDataFormat = bin.readShort(data, offset), offset += 2, obj.numberOfHMetrics = bin.readUshort(data, offset), offset += 2, obj;
    }, Typr.hmtx = {}, Typr.hmtx.parse = function (data, offset, length, font) {
        for (var bin = Typr._bin, obj = { aWidth: [], lsBearing: [] }, aw = 0, lsb = 0, i = 0; i < font.maxp.numGlyphs; i++)
            i < font.hhea.numberOfHMetrics && (aw = bin.readUshort(data, offset), offset += 2, lsb = bin.readShort(data, offset), offset += 2), obj.aWidth.push(aw), obj.lsBearing.push(lsb);
        return obj;
    }, Typr.kern = {}, Typr.kern.parse = function (data, offset, length, font) {
        var bin = Typr._bin, version = bin.readUshort(data, offset);
        if (offset += 2, 1 == version)
            return Typr.kern.parseV1(data, offset - 2, length, font);
        var nTables = bin.readUshort(data, offset);
        offset += 2;
        for (var map = { glyph1: [], rval: [] }, i = 0; i < nTables; i++) {
            offset += 2;
            length = bin.readUshort(data, offset);
            offset += 2;
            var coverage = bin.readUshort(data, offset);
            offset += 2;
            var format = coverage >>> 8;
            if (0 != (format &= 15))
                throw "unknown kern table format: " + format;
            offset = Typr.kern.readFormat0(data, offset, map);
        }
        return map;
    }, Typr.kern.parseV1 = function (data, offset, length, font) {
        var bin = Typr._bin;
        bin.readFixed(data, offset), offset += 4;
        var nTables = bin.readUint(data, offset);
        offset += 4;
        for (var map = { glyph1: [], rval: [] }, i = 0; i < nTables; i++) {
            bin.readUint(data, offset), offset += 4;
            var coverage = bin.readUshort(data, offset);
            offset += 2, bin.readUshort(data, offset), offset += 2;
            var format = coverage >>> 8;
            if (0 != (format &= 15))
                throw "unknown kern table format: " + format;
            offset = Typr.kern.readFormat0(data, offset, map);
        }
        return map;
    }, Typr.kern.readFormat0 = function (data, offset, map) {
        var bin = Typr._bin, pleft = -1, nPairs = bin.readUshort(data, offset);
        offset += 2, bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2;
        for (var j = 0; j < nPairs; j++) {
            var left = bin.readUshort(data, offset);
            offset += 2;
            var right = bin.readUshort(data, offset);
            offset += 2;
            var value = bin.readShort(data, offset);
            offset += 2, left != pleft && (map.glyph1.push(left), map.rval.push({ glyph2: [], vals: [] }));
            var rval = map.rval[map.rval.length - 1];
            rval.glyph2.push(right), rval.vals.push(value), pleft = left;
        }
        return offset;
    }, Typr.loca = {}, Typr.loca.parse = function (data, offset, length, font) {
        var bin = Typr._bin, obj = [], ver = font.head.indexToLocFormat, len = font.maxp.numGlyphs + 1;
        if (0 == ver)
            for (var i = 0; i < len; i++)
                obj.push(bin.readUshort(data, offset + (i << 1)) << 1);
        if (1 == ver)
            for (i = 0; i < len; i++)
                obj.push(bin.readUint(data, offset + (i << 2)));
        return obj;
    }, Typr.maxp = {}, Typr.maxp.parse = function (data, offset, length) {
        var bin = Typr._bin, obj = {}, ver = bin.readUint(data, offset);
        return offset += 4, obj.numGlyphs = bin.readUshort(data, offset), offset += 2, 65536 == ver && (obj.maxPoints = bin.readUshort(data, offset), offset += 2, obj.maxContours = bin.readUshort(data, offset), offset += 2, obj.maxCompositePoints = bin.readUshort(data, offset), offset += 2, obj.maxCompositeContours = bin.readUshort(data, offset), offset += 2, obj.maxZones = bin.readUshort(data, offset), offset += 2, obj.maxTwilightPoints = bin.readUshort(data, offset), offset += 2, obj.maxStorage = bin.readUshort(data, offset), offset += 2, obj.maxFunctionDefs = bin.readUshort(data, offset), offset += 2, obj.maxInstructionDefs = bin.readUshort(data, offset), offset += 2, obj.maxStackElements = bin.readUshort(data, offset), offset += 2, obj.maxSizeOfInstructions = bin.readUshort(data, offset), offset += 2, obj.maxComponentElements = bin.readUshort(data, offset), offset += 2, obj.maxComponentDepth = bin.readUshort(data, offset), offset += 2), obj;
    }, Typr.name = {}, Typr.name.parse = function (data, offset, length) {
        var bin = Typr._bin, obj = {};
        bin.readUshort(data, offset), offset += 2;
        var count = bin.readUshort(data, offset);
        offset += 2, bin.readUshort(data, offset);
        for (var tname, offset0 = offset += 2, i = 0; i < count; i++) {
            var platformID = bin.readUshort(data, offset);
            offset += 2;
            var encodingID = bin.readUshort(data, offset);
            offset += 2;
            var languageID = bin.readUshort(data, offset);
            offset += 2;
            var nameID = bin.readUshort(data, offset);
            offset += 2;
            length = bin.readUshort(data, offset);
            offset += 2;
            var noffset = bin.readUshort(data, offset);
            offset += 2;
            var plat = "p" + platformID;
            null == obj[plat] && (obj[plat] = {});
            var str, cname = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"][nameID], soff = offset0 + 12 * count + noffset;
            if (0 == platformID)
                str = bin.readUnicode(data, soff, length / 2);
            else if (3 == platformID && 0 == encodingID)
                str = bin.readUnicode(data, soff, length / 2);
            else if (0 == encodingID)
                str = bin.readASCII(data, soff, length);
            else if (1 == encodingID)
                str = bin.readUnicode(data, soff, length / 2);
            else if (3 == encodingID)
                str = bin.readUnicode(data, soff, length / 2);
            else {
                if (1 != platformID)
                    throw "unknown encoding " + encodingID + ", platformID: " + platformID;
                str = bin.readASCII(data, soff, length), console.log("reading unknown MAC encoding " + encodingID + " as ASCII");
            }
            obj[plat][cname] = str, obj[plat]._lang = languageID;
        }
        for (var p in obj)
            if (null != obj[p].postScriptName && 1033 == obj[p]._lang)
                return obj[p];
        for (var p in obj)
            if (null != obj[p].postScriptName && 3084 == obj[p]._lang)
                return obj[p];
        for (var p in obj)
            if (null != obj[p].postScriptName)
                return obj[p];
        for (var p in obj) {
            tname = p;
            break;
        }
        return console.log("returning name table with languageID " + obj[tname]._lang), obj[tname];
    }, Typr["OS/2"] = {}, Typr["OS/2"].parse = function (data, offset, length) {
        var ver = Typr._bin.readUshort(data, offset);
        offset += 2;
        var obj = {};
        if (0 == ver)
            Typr["OS/2"].version0(data, offset, obj);
        else if (1 == ver)
            Typr["OS/2"].version1(data, offset, obj);
        else if (2 == ver || 3 == ver || 4 == ver)
            Typr["OS/2"].version2(data, offset, obj);
        else {
            if (5 != ver)
                throw "unknown OS/2 table version: " + ver;
            Typr["OS/2"].version5(data, offset, obj);
        }
        return obj;
    }, Typr["OS/2"].version0 = function (data, offset, obj) {
        var bin = Typr._bin;
        return obj.xAvgCharWidth = bin.readShort(data, offset), offset += 2, obj.usWeightClass = bin.readUshort(data, offset), offset += 2, obj.usWidthClass = bin.readUshort(data, offset), offset += 2, obj.fsType = bin.readUshort(data, offset), offset += 2, obj.ySubscriptXSize = bin.readShort(data, offset), offset += 2, obj.ySubscriptYSize = bin.readShort(data, offset), offset += 2, obj.ySubscriptXOffset = bin.readShort(data, offset), offset += 2, obj.ySubscriptYOffset = bin.readShort(data, offset), offset += 2, obj.ySuperscriptXSize = bin.readShort(data, offset), offset += 2, obj.ySuperscriptYSize = bin.readShort(data, offset), offset += 2, obj.ySuperscriptXOffset = bin.readShort(data, offset), offset += 2, obj.ySuperscriptYOffset = bin.readShort(data, offset), offset += 2, obj.yStrikeoutSize = bin.readShort(data, offset), offset += 2, obj.yStrikeoutPosition = bin.readShort(data, offset), offset += 2, obj.sFamilyClass = bin.readShort(data, offset), offset += 2, obj.panose = bin.readBytes(data, offset, 10), offset += 10, obj.ulUnicodeRange1 = bin.readUint(data, offset), offset += 4, obj.ulUnicodeRange2 = bin.readUint(data, offset), offset += 4, obj.ulUnicodeRange3 = bin.readUint(data, offset), offset += 4, obj.ulUnicodeRange4 = bin.readUint(data, offset), offset += 4, obj.achVendID = [bin.readInt8(data, offset), bin.readInt8(data, offset + 1), bin.readInt8(data, offset + 2), bin.readInt8(data, offset + 3)], offset += 4, obj.fsSelection = bin.readUshort(data, offset), offset += 2, obj.usFirstCharIndex = bin.readUshort(data, offset), offset += 2, obj.usLastCharIndex = bin.readUshort(data, offset), offset += 2, obj.sTypoAscender = bin.readShort(data, offset), offset += 2, obj.sTypoDescender = bin.readShort(data, offset), offset += 2, obj.sTypoLineGap = bin.readShort(data, offset), offset += 2, obj.usWinAscent = bin.readUshort(data, offset), offset += 2, obj.usWinDescent = bin.readUshort(data, offset), offset += 2;
    }, Typr["OS/2"].version1 = function (data, offset, obj) {
        var bin = Typr._bin;
        return offset = Typr["OS/2"].version0(data, offset, obj), obj.ulCodePageRange1 = bin.readUint(data, offset), offset += 4, obj.ulCodePageRange2 = bin.readUint(data, offset), offset += 4;
    }, Typr["OS/2"].version2 = function (data, offset, obj) {
        var bin = Typr._bin;
        return offset = Typr["OS/2"].version1(data, offset, obj), obj.sxHeight = bin.readShort(data, offset), offset += 2, obj.sCapHeight = bin.readShort(data, offset), offset += 2, obj.usDefault = bin.readUshort(data, offset), offset += 2, obj.usBreak = bin.readUshort(data, offset), offset += 2, obj.usMaxContext = bin.readUshort(data, offset), offset += 2;
    }, Typr["OS/2"].version5 = function (data, offset, obj) {
        var bin = Typr._bin;
        return offset = Typr["OS/2"].version2(data, offset, obj), obj.usLowerOpticalPointSize = bin.readUshort(data, offset), offset += 2, obj.usUpperOpticalPointSize = bin.readUshort(data, offset), offset += 2;
    }, Typr.post = {}, Typr.post.parse = function (data, offset, length) {
        var bin = Typr._bin, obj = {};
        return obj.version = bin.readFixed(data, offset), offset += 4, obj.italicAngle = bin.readFixed(data, offset), offset += 4, obj.underlinePosition = bin.readShort(data, offset), offset += 2, obj.underlineThickness = bin.readShort(data, offset), offset += 2, obj;
    }, Typr.SVG = {}, Typr.SVG.parse = function (data, offset, length) {
        var bin = Typr._bin, obj = { entries: [] }, offset0 = offset;
        bin.readUshort(data, offset), offset += 2;
        var svgDocIndexOffset = bin.readUint(data, offset);
        offset += 4, bin.readUint(data, offset), offset += 4, offset = svgDocIndexOffset + offset0;
        var numEntries = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < numEntries; i++) {
            var startGlyphID = bin.readUshort(data, offset);
            offset += 2;
            var endGlyphID = bin.readUshort(data, offset);
            offset += 2;
            var svgDocOffset = bin.readUint(data, offset);
            offset += 4;
            var svgDocLength = bin.readUint(data, offset);
            offset += 4;
            for (var sbuf = new Uint8Array(data.buffer, offset0 + svgDocOffset + svgDocIndexOffset, svgDocLength), svg = bin.readUTF8(sbuf, 0, sbuf.length), f = startGlyphID; f <= endGlyphID; f++)
                obj.entries[f] = svg;
        }
        return obj;
    }, Typr.SVG.toPath = function (str) {
        var pth = { cmds: [], crds: [] };
        if (null == str)
            return pth;
        for (var svg = new DOMParser().parseFromString(str, "image/svg+xml").firstChild; "svg" != svg.tagName;)
            svg = svg.nextSibling;
        var vb = svg.getAttribute("viewBox");
        vb = vb ? vb.trim().split(" ").map(parseFloat) : [0, 0, 1e3, 1e3], Typr.SVG._toPath(svg.children, pth);
        for (var i = 0; i < pth.crds.length; i += 2) {
            var x = pth.crds[i], y = pth.crds[i + 1];
            x -= vb[0], y = -(y -= vb[1]), pth.crds[i] = x, pth.crds[i + 1] = y;
        }
        return pth;
    }, Typr.SVG._toPath = function (nds, pth, fill) {
        for (var ni = 0; ni < nds.length; ni++) {
            var nd = nds[ni], tn = nd.tagName, cfl = nd.getAttribute("fill");
            if (null == cfl && (cfl = fill), "g" == tn)
                Typr.SVG._toPath(nd.children, pth, cfl);
            else if ("path" == tn) {
                pth.cmds.push(cfl || "#000000");
                var d = nd.getAttribute("d"), toks = Typr.SVG._tokens(d);
                Typr.SVG._toksToPath(toks, pth), pth.cmds.push("X");
            } else
                "defs" == tn || console.log(tn, nd);
        }
    }, Typr.SVG._tokens = function (d) {
        for (var ts = [], off = 0, rn = false, cn = ""; off < d.length;) {
            var cc = d.charCodeAt(off), ch = d.charAt(off);
            off++;
            var isNum = 48 <= cc && cc <= 57 || "." == ch || "-" == ch;
            rn ? "-" == ch ? (ts.push(parseFloat(cn)), cn = ch) : isNum ? cn += ch : (ts.push(parseFloat(cn)), "," != ch && " " != ch && ts.push(ch), rn = false) : isNum ? (cn = ch, rn = true) : "," != ch && " " != ch && ts.push(ch);
        }
        return rn && ts.push(parseFloat(cn)), ts;
    }, Typr.SVG._toksToPath = function (ts, pth) {
        for (var i = 0, x = 0, y = 0, ox = 0, oy = 0, pc = { M: 2, L: 2, H: 1, V: 1, S: 4, C: 6 }, cmds = pth.cmds, crds = pth.crds; i < ts.length;) {
            var cmd = ts[i];
            if (i++, "z" == cmd)
                cmds.push("Z"), x = ox, y = oy;
            else
                for (var cmu = cmd.toUpperCase(), ps = pc[cmu], reps = Typr.SVG._reps(ts, i, ps), j = 0; j < reps; j++) {
                    var xi = 0, yi = 0;
                    if (cmd != cmu && (xi = x, yi = y), "M" == cmu)
                        x = xi + ts[i++], y = yi + ts[i++], cmds.push("M"), crds.push(x, y), ox = x, oy = y;
                    else if ("L" == cmu)
                        x = xi + ts[i++], y = yi + ts[i++], cmds.push("L"), crds.push(x, y);
                    else if ("H" == cmu)
                        x = xi + ts[i++], cmds.push("L"), crds.push(x, y);
                    else if ("V" == cmu)
                        y = yi + ts[i++], cmds.push("L"), crds.push(x, y);
                    else if ("C" == cmu) {
                        var x1 = xi + ts[i++], y1 = yi + ts[i++], x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
                        cmds.push("C"), crds.push(x1, y1, x2, y2, x3, y3), x = x3, y = y3;
                    } else if ("S" == cmu) {
                        var co = Math.max(crds.length - 4, 0);
                        x1 = x + x - crds[co], y1 = y + y - crds[co + 1], x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
                        cmds.push("C"), crds.push(x1, y1, x2, y2, x3, y3), x = x3, y = y3;
                    } else
                        console.log("Unknown SVG command " + cmd);
                }
        }
    }, Typr.SVG._reps = function (ts, off, ps) {
        for (var i = off; i < ts.length && "string" != typeof ts[i];)
            i += ps;
        return (i - off) / ps;
    }, null == Typr && (Typr = {}), null == Typr.U && (Typr.U = {}), Typr.U.codeToGlyph = function (font, code) {
        var cmap = font.cmap, tind = -1;
        if (null != cmap.p0e4 ? tind = cmap.p0e4 : null != cmap.p3e1 ? tind = cmap.p3e1 : null != cmap.p1e0 && (tind = cmap.p1e0), -1 == tind)
            throw "no familiar platform and encoding!";
        var tab = cmap.tables[tind];
        if (0 == tab.format)
            return code >= tab.map.length ? 0 : tab.map[code];
        if (4 == tab.format) {
            for (var sind = -1, i = 0; i < tab.endCount.length; i++)
                if (code <= tab.endCount[i]) {
                    sind = i;
                    break;
                }
            if (-1 == sind)
                return 0;
            if (tab.startCount[sind] > code)
                return 0;
            return 65535 & (0 != tab.idRangeOffset[sind] ? tab.glyphIdArray[code - tab.startCount[sind] + (tab.idRangeOffset[sind] >> 1) - (tab.idRangeOffset.length - sind)] : code + tab.idDelta[sind]);
        }
        if (12 == tab.format) {
            if (code > tab.groups[tab.groups.length - 1][1])
                return 0;
            for (i = 0; i < tab.groups.length; i++) {
                var grp = tab.groups[i];
                if (grp[0] <= code && code <= grp[1])
                    return grp[2] + (code - grp[0]);
            }
            return 0;
        }
        throw "unknown cmap table format " + tab.format;
    }, Typr.U.glyphToPath = function (font, gid) {
        var path = { cmds: [], crds: [] };
        if (font.SVG && font.SVG.entries[gid]) {
            var p = font.SVG.entries[gid];
            return null == p ? path : ("string" == typeof p && (p = Typr.SVG.toPath(p), font.SVG.entries[gid] = p), p);
        }
        if (font.CFF) {
            var state = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: false, width: font.CFF.Private ? font.CFF.Private.defaultWidthX : 0, open: false };
            Typr.U._drawCFF(font.CFF.CharStrings[gid], state, font.CFF, path);
        } else
            font.glyf && Typr.U._drawGlyf(gid, font, path);
        return path;
    }, Typr.U._drawGlyf = function (gid, font, path) {
        var gl = font.glyf[gid];
        null == gl && (gl = font.glyf[gid] = Typr.glyf._parseGlyf(font, gid)), null != gl && (gl.noc > -1 ? Typr.U._simpleGlyph(gl, path) : Typr.U._compoGlyph(gl, font, path));
    }, Typr.U._simpleGlyph = function (gl, p) {
        for (var c = 0; c < gl.noc; c++) {
            for (var i0 = 0 == c ? 0 : gl.endPts[c - 1] + 1, il = gl.endPts[c], i = i0; i <= il; i++) {
                var pr = i == i0 ? il : i - 1, nx = i == il ? i0 : i + 1, onCurve = 1 & gl.flags[i], prOnCurve = 1 & gl.flags[pr], nxOnCurve = 1 & gl.flags[nx], x = gl.xs[i], y = gl.ys[i];
                if (i == i0)
                    if (onCurve) {
                        if (!prOnCurve) {
                            Typr.U.P.moveTo(p, x, y);
                            continue;
                        }
                        Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
                    } else
                        prOnCurve ? Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]) : Typr.U.P.moveTo(p, (gl.xs[pr] + x) / 2, (gl.ys[pr] + y) / 2);
                onCurve ? prOnCurve && Typr.U.P.lineTo(p, x, y) : nxOnCurve ? Typr.U.P.qcurveTo(p, x, y, gl.xs[nx], gl.ys[nx]) : Typr.U.P.qcurveTo(p, x, y, (x + gl.xs[nx]) / 2, (y + gl.ys[nx]) / 2);
            }
            Typr.U.P.closePath(p);
        }
    }, Typr.U._compoGlyph = function (gl, font, p) {
        for (var j = 0; j < gl.parts.length; j++) {
            var path = { cmds: [], crds: [] }, prt = gl.parts[j];
            Typr.U._drawGlyf(prt.glyphIndex, font, path);
            for (var m = prt.m, i = 0; i < path.crds.length; i += 2) {
                var x = path.crds[i], y = path.crds[i + 1];
                p.crds.push(x * m.a + y * m.b + m.tx), p.crds.push(x * m.c + y * m.d + m.ty);
            }
            for (i = 0; i < path.cmds.length; i++)
                p.cmds.push(path.cmds[i]);
        }
    }, Typr.U._getGlyphClass = function (g, cd) {
        var intr = Typr._lctf.getInterval(cd, g);
        return -1 == intr ? 0 : cd[intr + 2];
    }, Typr.U.getPairAdjustment = function (font, g1, g2) {
        if (font.GPOS) {
            for (var ltab = null, i = 0; i < font.GPOS.featureList.length; i++) {
                var fl = font.GPOS.featureList[i];
                if ("kern" == fl.tag)
                    for (var j = 0; j < fl.tab.length; j++)
                        2 == font.GPOS.lookupList[fl.tab[j]].ltype && (ltab = font.GPOS.lookupList[fl.tab[j]]);
            }
            if (ltab)
                for (i = 0; i < ltab.tabs.length; i++) {
                    var tab = ltab.tabs[i], ind = Typr._lctf.coverageIndex(tab.coverage, g1);
                    if (-1 != ind) {
                        if (1 == tab.format) {
                            var right = tab.pairsets[ind];
                            for (j = 0; j < right.length; j++)
                                right[j].gid2 == g2 && (adj = right[j]);
                            if (null == adj)
                                continue;
                        } else if (2 == tab.format)
                            var c1 = Typr.U._getGlyphClass(g1, tab.classDef1), c2 = Typr.U._getGlyphClass(g2, tab.classDef2), adj = tab.matrix[c1][c2];
                        return adj.val1[2];
                    }
                }
        }
        if (font.kern) {
            var ind1 = font.kern.glyph1.indexOf(g1);
            if (-1 != ind1) {
                var ind2 = font.kern.rval[ind1].glyph2.indexOf(g2);
                if (-1 != ind2)
                    return font.kern.rval[ind1].vals[ind2];
            }
        }
        return 0;
    }, Typr.U.stringToGlyphs = function (font, str) {
        for (var gls = [], i = 0; i < str.length; i++) {
            var cc = str.codePointAt(i);
            cc > 65535 && i++, gls.push(Typr.U.codeToGlyph(font, cc));
        }
        var gsub = font.GSUB;
        if (null == gsub)
            return gls;
        for (var llist = gsub.lookupList, flist = gsub.featureList, wsep = '\n	" ,.:;!?()  ،', R = "آأؤإاةدذرزوٱٲٳٵٶٷڈډڊڋڌڍڎڏڐڑڒړڔڕږڗژڙۀۃۄۅۆۇۈۉۊۋۍۏےۓەۮۯܐܕܖܗܘܙܞܨܪܬܯݍݙݚݛݫݬݱݳݴݸݹࡀࡆࡇࡉࡔࡧࡩࡪࢪࢫࢬࢮࢱࢲࢹૅેૉ૊૎૏ૐ૑૒૝ૡ૤૯஁ஃ஄அஉ஌எஏ஑னப஫஬", ci = 0; ci < gls.length; ci++) {
            var gl = gls[ci], slft = 0 == ci || -1 != wsep.indexOf(str[ci - 1]), srgt = ci == gls.length - 1 || -1 != wsep.indexOf(str[ci + 1]);
            slft || -1 == R.indexOf(str[ci - 1]) || (slft = true), srgt || -1 == R.indexOf(str[ci]) || (srgt = true), srgt || -1 == "ꡲ્૗".indexOf(str[ci + 1]) || (srgt = true), slft || -1 == "ꡲ્૗".indexOf(str[ci]) || (slft = true);
            var feat = null;
            feat = slft ? srgt ? "isol" : "init" : srgt ? "fina" : "medi";
            for (var fi = 0; fi < flist.length; fi++)
                if (flist[fi].tag == feat)
                    for (var ti = 0; ti < flist[fi].tab.length; ti++) {
                        1 == (tab = llist[flist[fi].tab[ti]]).ltype && Typr.U._applyType1(gls, ci, tab);
                    }
        }
        var cligs = ["rlig", "liga", "mset"];
        for (ci = 0; ci < gls.length; ci++) {
            gl = gls[ci];
            var rlim = Math.min(3, gls.length - ci - 1);
            for (fi = 0; fi < flist.length; fi++) {
                var fl = flist[fi];
                if (-1 != cligs.indexOf(fl.tag)) {
                    for (ti = 0; ti < fl.tab.length; ti++)
                        for (var tab = llist[fl.tab[ti]], j = 0; j < tab.tabs.length; j++)
                            if (null != tab.tabs[j]) {
                                var ind = Typr._lctf.coverageIndex(tab.tabs[j].coverage, gl);
                                if (-1 != ind) {
                                    if (4 == tab.ltype)
                                        for (var vals = tab.tabs[j].vals[ind], k = 0; k < vals.length; k++) {
                                            var lig = vals[k], rl = lig.chain.length;
                                            if (!(rl > rlim)) {
                                                for (var good = true, l = 0; l < rl; l++)
                                                    lig.chain[l] != gls[ci + (1 + l)] && (good = false);
                                                if (good) {
                                                    gls[ci] = lig.nglyph;
                                                    for (l = 0; l < rl; l++)
                                                        gls[ci + l + 1] = -1;
                                                }
                                            }
                                        }
                                    else if (5 == tab.ltype) {
                                        var ltab = tab.tabs[j];
                                        if (2 != ltab.fmt)
                                            continue;
                                        var cind = Typr._lctf.getInterval(ltab.cDef, gl), cls = ltab.cDef[cind + 2], scs = ltab.scset[cls];
                                        for (i = 0; i < scs.length; i++) {
                                            var sc = scs[i], inp = sc.input;
                                            if (!(inp.length > rlim)) {
                                                for (good = true, l = 0; l < inp.length; l++) {
                                                    var cind2 = Typr._lctf.getInterval(ltab.cDef, gls[ci + 1 + l]);
                                                    if (-1 == cind && ltab.cDef[cind2 + 2] != inp[l]) {
                                                        good = false;
                                                        break;
                                                    }
                                                }
                                                if (good) {
                                                    var lrs = sc.substLookupRecords;
                                                    for (k = 0; k < lrs.length; k += 2)
                                                        lrs[k], lrs[k + 1];
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                }
            }
        }
        return gls;
    }, Typr.U._applyType1 = function (gls, ci, tab) {
        for (var gl = gls[ci], j = 0; j < tab.tabs.length; j++) {
            var ttab = tab.tabs[j], ind = Typr._lctf.coverageIndex(ttab.coverage, gl);
            -1 != ind && (1 == ttab.fmt ? gls[ci] = gls[ci] + ttab.delta : gls[ci] = ttab.newg[ind]);
        }
    }, Typr.U.glyphsToPath = function (font, gls, clr) {
        for (var tpath = { cmds: [], crds: [] }, x = 0, i = 0; i < gls.length; i++) {
            var gid = gls[i];
            if (-1 != gid) {
                for (var gid2 = i < gls.length - 1 && -1 != gls[i + 1] ? gls[i + 1] : 0, path = Typr.U.glyphToPath(font, gid), j = 0; j < path.crds.length; j += 2)
                    tpath.crds.push(path.crds[j] + x), tpath.crds.push(path.crds[j + 1]);
                clr && tpath.cmds.push(clr);
                for (j = 0; j < path.cmds.length; j++)
                    tpath.cmds.push(path.cmds[j]);
                clr && tpath.cmds.push("X"), x += font.hmtx.aWidth[gid], i < gls.length - 1 && (x += Typr.U.getPairAdjustment(font, gid, gid2));
            }
        }
        return tpath;
    }, Typr.U.pathToSVG = function (path, prec) {
        null == prec && (prec = 5);
        for (var out = [], co = 0, lmap = { M: 2, L: 2, Q: 4, C: 6 }, i = 0; i < path.cmds.length; i++) {
            var cmd = path.cmds[i], cn = co + (lmap[cmd] ? lmap[cmd] : 0);
            for (out.push(cmd); co < cn;) {
                var c = path.crds[co++];
                out.push(parseFloat(c.toFixed(prec)) + (co == cn ? "" : " "));
            }
        }
        return out.join("");
    }, Typr.U.pathToContext = function (path, ctx) {
        for (var c = 0, crds = path.crds, j = 0; j < path.cmds.length; j++) {
            var cmd = path.cmds[j];
            "M" == cmd ? (ctx.moveTo(crds[c], crds[c + 1]), c += 2) : "L" == cmd ? (ctx.lineTo(crds[c], crds[c + 1]), c += 2) : "C" == cmd ? (ctx.bezierCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3], crds[c + 4], crds[c + 5]), c += 6) : "Q" == cmd ? (ctx.quadraticCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3]), c += 4) : "#" == cmd.charAt(0) ? (ctx.beginPath(), ctx.fillStyle = cmd) : "Z" == cmd ? ctx.closePath() : "X" == cmd && ctx.fill();
        }
    }, Typr.U.P = {}, Typr.U.P.moveTo = function (p, x, y) {
        p.cmds.push("M"), p.crds.push(x, y);
    }, Typr.U.P.lineTo = function (p, x, y) {
        p.cmds.push("L"), p.crds.push(x, y);
    }, Typr.U.P.curveTo = function (p, a, b, c, d, e, f) {
        p.cmds.push("C"), p.crds.push(a, b, c, d, e, f);
    }, Typr.U.P.qcurveTo = function (p, a, b, c, d) {
        p.cmds.push("Q"), p.crds.push(a, b, c, d);
    }, Typr.U.P.closePath = function (p) {
        p.cmds.push("Z");
    }, Typr.U._drawCFF = function (cmds, state, font, p) {
        for (var stack = state.stack, nStems = state.nStems, haveWidth = state.haveWidth, width = state.width, open = state.open, i = 0, x = state.x, y = state.y, c1x = 0, c1y = 0, c2x = 0, c2y = 0, c3x = 0, c3y = 0, c4x = 0, c4y = 0, jpx = 0, jpy = 0, o = { val: 0, size: 0 }; i < cmds.length;) {
            Typr.CFF.getCharString(cmds, i, o);
            var v = o.val;
            if (i += o.size, "o1" == v || "o18" == v)
                stack.length % 2 != 0 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX), nStems += stack.length >> 1, stack.length = 0, haveWidth = true;
            else if ("o3" == v || "o23" == v) {
                stack.length % 2 != 0 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX), nStems += stack.length >> 1, stack.length = 0, haveWidth = true;
            } else if ("o4" == v)
                stack.length > 1 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX, haveWidth = true), open && Typr.U.P.closePath(p), y += stack.pop(), Typr.U.P.moveTo(p, x, y), open = true;
            else if ("o5" == v)
                for (; stack.length > 0;)
                    x += stack.shift(), y += stack.shift(), Typr.U.P.lineTo(p, x, y);
            else if ("o6" == v || "o7" == v)
                for (var count = stack.length, isX = "o6" == v, j = 0; j < count; j++) {
                    var sval = stack.shift();
                    isX ? x += sval : y += sval, isX = !isX, Typr.U.P.lineTo(p, x, y);
                }
            else if ("o8" == v || "o24" == v) {
                count = stack.length;
                for (var index = 0; index + 6 <= count;)
                    c1x = x + stack.shift(), c1y = y + stack.shift(), c2x = c1x + stack.shift(), c2y = c1y + stack.shift(), x = c2x + stack.shift(), y = c2y + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y), index += 6;
                "o24" == v && (x += stack.shift(), y += stack.shift(), Typr.U.P.lineTo(p, x, y));
            } else {
                if ("o11" == v)
                    break;
                if ("o1234" == v || "o1235" == v || "o1236" == v || "o1237" == v)
                    "o1234" == v && (c1y = y, c2x = (c1x = x + stack.shift()) + stack.shift(), jpy = c2y = c1y + stack.shift(), c3y = c2y, c4y = y, x = (c4x = (c3x = (jpx = c2x + stack.shift()) + stack.shift()) + stack.shift()) + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy), Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y)), "o1235" == v && (c1x = x + stack.shift(), c1y = y + stack.shift(), c2x = c1x + stack.shift(), c2y = c1y + stack.shift(), jpx = c2x + stack.shift(), jpy = c2y + stack.shift(), c3x = jpx + stack.shift(), c3y = jpy + stack.shift(), c4x = c3x + stack.shift(), c4y = c3y + stack.shift(), x = c4x + stack.shift(), y = c4y + stack.shift(), stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy), Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y)), "o1236" == v && (c1x = x + stack.shift(), c1y = y + stack.shift(), c2x = c1x + stack.shift(), jpy = c2y = c1y + stack.shift(), c3y = c2y, c4x = (c3x = (jpx = c2x + stack.shift()) + stack.shift()) + stack.shift(), c4y = c3y + stack.shift(), x = c4x + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy), Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y)), "o1237" == v && (c1x = x + stack.shift(), c1y = y + stack.shift(), c2x = c1x + stack.shift(), c2y = c1y + stack.shift(), jpx = c2x + stack.shift(), jpy = c2y + stack.shift(), c3x = jpx + stack.shift(), c3y = jpy + stack.shift(), c4x = c3x + stack.shift(), c4y = c3y + stack.shift(), Math.abs(c4x - x) > Math.abs(c4y - y) ? x = c4x + stack.shift() : y = c4y + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy), Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y));
                else if ("o14" == v) {
                    if (stack.length > 0 && !haveWidth && (width = stack.shift() + font.nominalWidthX, haveWidth = true), 4 == stack.length) {
                        var adx = stack.shift(), ady = stack.shift(), bchar = stack.shift(), achar = stack.shift(), bind = Typr.CFF.glyphBySE(font, bchar), aind = Typr.CFF.glyphBySE(font, achar);
                        Typr.U._drawCFF(font.CharStrings[bind], state, font, p), state.x = adx, state.y = ady, Typr.U._drawCFF(font.CharStrings[aind], state, font, p);
                    }
                    open && (Typr.U.P.closePath(p), open = false);
                } else if ("o19" == v || "o20" == v) {
                    stack.length % 2 != 0 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX), nStems += stack.length >> 1, stack.length = 0, haveWidth = true, i += nStems + 7 >> 3;
                } else if ("o21" == v)
                    stack.length > 2 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX, haveWidth = true), y += stack.pop(), x += stack.pop(), open && Typr.U.P.closePath(p), Typr.U.P.moveTo(p, x, y), open = true;
                else if ("o22" == v)
                    stack.length > 1 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX, haveWidth = true), x += stack.pop(), open && Typr.U.P.closePath(p), Typr.U.P.moveTo(p, x, y), open = true;
                else if ("o25" == v) {
                    for (; stack.length > 6;)
                        x += stack.shift(), y += stack.shift(), Typr.U.P.lineTo(p, x, y);
                    c1x = x + stack.shift(), c1y = y + stack.shift(), c2x = c1x + stack.shift(), c2y = c1y + stack.shift(), x = c2x + stack.shift(), y = c2y + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
                } else if ("o26" == v)
                    for (stack.length % 2 && (x += stack.shift()); stack.length > 0;)
                        c1x = x, c1y = y + stack.shift(), x = c2x = c1x + stack.shift(), y = (c2y = c1y + stack.shift()) + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
                else if ("o27" == v)
                    for (stack.length % 2 && (y += stack.shift()); stack.length > 0;)
                        c1y = y, c2x = (c1x = x + stack.shift()) + stack.shift(), c2y = c1y + stack.shift(), x = c2x + stack.shift(), y = c2y, Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
                else if ("o10" == v || "o29" == v) {
                    var obj = "o10" == v ? font.Private : font;
                    if (0 == stack.length)
                        console.log("error: empty stack");
                    else {
                        var ind = stack.pop(), subr = obj.Subrs[ind + obj.Bias];
                        state.x = x, state.y = y, state.nStems = nStems, state.haveWidth = haveWidth, state.width = width, state.open = open, Typr.U._drawCFF(subr, state, font, p), x = state.x, y = state.y, nStems = state.nStems, haveWidth = state.haveWidth, width = state.width, open = state.open;
                    }
                } else if ("o30" == v || "o31" == v) {
                    var count1 = stack.length, alternate = (index = 0, "o31" == v);
                    for (index += count1 - (count = -3 & count1); index < count;)
                        alternate ? (c1y = y, c2x = (c1x = x + stack.shift()) + stack.shift(), y = (c2y = c1y + stack.shift()) + stack.shift(), count - index == 5 ? (x = c2x + stack.shift(), index++) : x = c2x, alternate = false) : (c1x = x, c1y = y + stack.shift(), c2x = c1x + stack.shift(), c2y = c1y + stack.shift(), x = c2x + stack.shift(), count - index == 5 ? (y = c2y + stack.shift(), index++) : y = c2y, alternate = true), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y), index += 4;
                } else {
                    if ("o" == (v + "").charAt(0))
                        throw console.log("Unknown operation: " + v, cmds), v;
                    stack.push(v);
                }
            }
        }
        state.x = x, state.y = y, state.nStems = nStems, state.haveWidth = haveWidth, state.width = width, state.open = open;
    };
    const Typr$1 = getDefaultExportFromCjs(Typr), questionType = { "单选题": "0", "多选题": "1", "填空题": "2", "判断题": "3", "简答题": "4", "名词解释": "5", "论述题": "6", "计算题": "7" }, log = (data, type = "info") => {
        var _a;
        const style = `color: ${{ info: "orange", success: "green", error: "red" }[type]}; font-weight: bold;`;
        if (Array.isArray(data) || "object" == typeof data ? console.log(`%c${JSON.stringify(data, null, 2)}`, style) : console.log(`%c${data}`, style), defaultConfig$1.debugger) {
            const caller = (((_a = new Error().stack) == null ? void 0 : _a.split("\n")) || [])[2].trim();
            console.log(`${caller}`);
        }
    }, sleep = (time) => new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1e3 * time);
    }), waitIframeLoaded = (iframe) => new Promise((resolve) => {
        const timer = setInterval(() => {
            var _a;
            iframe.contentDocument && "complete" === ((_a = iframe.contentDocument) == null ? void 0 : _a.readyState) ? (clearInterval(timer), resolve()) : iframe.addEventListener("load", () => {
                clearInterval(timer), resolve();
            });
        }, 100);
    }), waitElementLoaded = (iframeWindow, selector) => new Promise((resolve) => {
        const timer = setInterval(() => {
            iframeWindow.document.querySelector(selector) && (clearInterval(timer), resolve());
        }, 100);
    }), removeHtml = (html) => null == html ? "" : html.replace(/<((?!img|sub|sup|br)[^>]+)>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").replace(/<br\s*\/?>/g, "\n").replace(/<img.*?src="(.*?)".*?>/g, '<img src="$1"/>').trim(), cl = (str) => str.replace(/^【.*?】\s*/, "").replace(/\s*（\d+\.\d+分）$/, ""), getQuestion = (type, html) => {
        let questionHtml, questionText, questionTypeId, optionHtml, tokenHtml, workType, optionText, index;
        switch (type) {
            case "1":
                return workType = "zj", questionHtml = Array.from(html.querySelectorAll(".clearfix .fontLabel")), questionText = cl(removeHtml(questionHtml[0].innerHTML)), questionTypeId = html.querySelectorAll("input[name^=answertype]")[0].value, optionHtml = Array.from(html.querySelectorAll("ul")[0].querySelectorAll("li .after")), tokenHtml = html.innerHTML, optionText = [], optionHtml.forEach(function (item) {
                    optionText.push(removeHtml(item.innerHTML));
                }), { question: questionText, options: optionText, type: questionTypeId, questionData: tokenHtml, workType };
            case "2":
                workType = "zy", questionHtml = Array.from(html.querySelectorAll(".mark_name")), index = questionHtml[0].innerHTML.indexOf("</span>"), questionText = cl(removeHtml(questionHtml[0].innerHTML.substring(index + 7))), questionHtml[0].getElementsByTagName("span")[0].innerHTML.replace("(", "").replace(")", "").split(",")[0], questionTypeId = html.querySelectorAll("input[name^=answertype]")[0].value, optionHtml = Array.from(html.querySelectorAll(".answer_p")), tokenHtml = html.innerHTML, optionText = [];
                for (let i = 0; i < optionHtml.length; i++)
                    optionText.push(removeHtml(optionHtml[i].innerHTML));
                return { question: questionText, options: optionText, type: questionTypeId, questionData: tokenHtml, workType };
            case "3":
                workType = "ks", questionHtml = Array.from(document.getElementsByClassName("mark_name colorDeep")), index = questionHtml[0].innerHTML.indexOf("</span>"), questionText = cl(removeHtml(questionHtml[0].innerHTML.substring(index + 7))), questionHtml[0].getElementsByTagName("span")[0].innerHTML.replace("(", "").replace(")", "").split(",")[0], questionTypeId = document.querySelectorAll("input[name^=type]")[1].value, optionHtml = Array.from(document.getElementsByClassName("answer_p")), tokenHtml = document.getElementsByClassName("mark_table")[0].innerHTML, optionText = [];
                for (let i = 0; i < optionHtml.length; i++)
                    optionText.push(removeHtml(optionHtml[i].innerHTML));
                return { question: questionText, options: optionText, type: questionTypeId, questionData: tokenHtml, workType };
        }
    }, decode = (iframeWindow) => {
        var _a;
        const styleElements = iframeWindow.document.querySelectorAll("style");
        let tipElement = null;
        if (styleElements.forEach((styleElement) => {
            var _a2;
            -1 !== ((_a2 = styleElement.textContent) == null ? void 0 : _a2.indexOf("font-cxsecret")) && (tipElement = styleElement);
        }), !tipElement)
            return;
        const fontMatch = (_a = tipElement.textContent) == null ? void 0 : _a.match(/base64,([\w\W]+?)'/);
        if (!fontMatch)
            return;
        const fontData = ((base64) => {
            const decodedData = atob(base64), array = new Uint8Array(decodedData.length);
            for (let i = 0; i < decodedData.length; i++)
                array[i] = decodedData.charCodeAt(i);
            return array;
        })(fontMatch[1]), font = Typr$1.parse(fontData), table = JSON.parse(_GM_getResourceText("ttf"));
        let text = {};
        for (let i = 19968; i < 40870; i++) {
            let t = Typr$1.U.codeToGlyph(font, i);
            t && (t = Typr$1.U.glyphToPath(font, t), t = md5(JSON.stringify(t)).slice(24), text[i] = table[t]);
        }
        iframeWindow.document.querySelectorAll(".font-cxsecret").forEach((fontElement) => {
            let html = fontElement.innerHTML;
            Object.keys(text).forEach((key) => {
                const regex = new RegExp(String.fromCharCode(key), "g");
                html = html.replace(regex, String.fromCharCode(text[key]));
            }), fontElement.innerHTML = html, fontElement.classList.remove("font-cxsecret");
        });
    }, getAnswers = (questionData, windowz = _unsafeWindow) => {
        let server = new ServerApi(windowz);
        const promises = [server.getAnswer(questionData), server.getAnswer2(questionData), server.getAnswer4(questionData)];
        return Promise.all(promises);
    }, fillAnswer = (answer, questionData, html, iframeWindow) => {
        answer = answer.filter((item) => item.answer.length > 0), console.log(answer);
        for (let i = 0; i < answer.length; i++) {
            if ("string" == typeof answer[i].answer) {
                if (-1 !== answer[i].answer.indexOf("付费题库") || -1 !== answer[i].answer.indexOf("暂无答案") || "略" == answer[i].answer)
                    continue;
                answer[i].answer = [answer[i].answer];
            }
            let tmp = setAnswer(answer[i].answer, questionData, html, iframeWindow);
            if (tmp)
                return tmp;
        }
        return false;
    }, setAnswer = (answer, questionData, html, iframeWindow) => {
        switch (questionData.type) {
            case "0":
            case "1":
                const matchArr = matchAnswer(answer, questionData.options);
                matchArr.length > 0 && clearCurrent(html, iframeWindow);
                for (var i = 0; i < matchArr.length; i++)
                    console.log($$1(html).find("li").eq(matchArr[i]), matchArr[i]), $$1(html).find("ul:eq(0) li :radio,:checkbox,textarea").eq(matchArr[i]).click(), $$1(html).find(".answerBg").eq(matchArr[i]).click(), $$1(html).find("li").eq(matchArr[i]).click();
                return matchArr.length > 0 && answer;
            case "3":
                return clearCurrent(html, iframeWindow), answer instanceof Array && (answer = answer[0]), $$1(html).find("ul:eq(0) li :radio,:checkbox,textarea").each(function () {
                    "true" == $$1(this).val() ? answer.match(/(^|,)(True|true|正确|是|对|√|T|ri)(,|$)/) && $$1(this).click() : answer.match(/(^|,)(False|false|错误|否|错|×|F|wr)(,|$)/) && $$1(this).click();
                }), $$1(html).find(".answerBg").each(function () {
                    "true" == $$1(this).find(".num_option").attr("data") ? answer.match(/(^|,)(True|true|正确|是|对|√|T|ri)(,|$)/) && $$1(this).click() : answer.match(/(^|,)(False|false|错误|否|错|×|F|wr)(,|$)/) && $$1(this).click();
                }), !!($$1(html).find("ul:eq(0) li :radio,:checkbox,textarea").is(":checked") || $$1(html).find(".check_answer").length > 0 || $$1(html).find(".check_answer_dx").length > 0) && answer;
            case "2":
            case "9":
            case "4":
            case "5":
            case "6":
            case "7":
                return $$1(html).find("textarea").length == answer.length && (clearCurrent(html, iframeWindow), $$1(html).find("textarea").each(function (index) {
                    iframeWindow.UE.getEditor($$1(this).attr("name")).ready(function () {
                        this.setContent(answer[index].replace(/第.空:/g, ""));
                    });
                }), answer);
            default:
                return false;
        }
    }, matchAnswer = (answer, options) => {
        answer = ((answer2) => {
            if (answer2 instanceof Array) {
                answer2 = answer2.filter(function (item) {
                    return null !== item;
                });
                for (let i2 = 0; i2 < answer2.length; i2++)
                    answer2[i2] = removeHtml(answer2[i2]);
            } else
                "string" == typeof answer2 && (answer2 = cl(answer2));
            return answer2;
        })(answer);
        for (var matchArr = [], i = 0; i < answer.length; i++)
            for (var j = 0; j < options.length; j++)
                answer[i] == options[j] && matchArr.push(j);
        return matchArr;
    }, clearCurrent = (item, iframeWindow) => {
        $$1(item).find(".answerBg, .textDIV, .eidtDiv").each(function () {
            ($$1(this).find(".check_answer").length || $$1(this).find(".check_answer_dx").length) && $$1(this).click();
        }), $$1(item).find("textarea").each(function () {
            iframeWindow.UE.getEditor($$1(this).attr("name")).ready(function () {
                this.setContent("");
            });
        }), $$1(item).find(":radio, :checkbox").prop("checked", false), $$1(item).find("textarea").each(function () {
            iframeWindow.UE.getEditor($$1(this).attr("name")).ready(function () {
                this.setContent("");
            });
        });
    }, useAskStore = pinia$1.defineStore({
        id: "ask", state: () => ({ dialogVisible: true, count: 0, questionList: [], task: { name: "暂未加载", work: { questionList: [], inx: 0 }, video: [], log: [], status: "" } }), actions: {
            reset() {
                this.task.name = "暂未加载", this.task.work = { questionList: [], inx: 0 }, this.task.video = [], this.task.status = "", this.count = 0;
            }, select(index) {
                this.task.work.questionList[index].selected = true, this.task.work.inx = index;
                try {
                    this.task.work.questionList[index].dom.scrollIntoView({ block: "center" });
                } catch (e) {
                    log(e, "error");
                }
            }, get(index) {
                return this.task.work.questionList[index];
            }, insert(question) {
                this.task.work.questionList.push(question);
            }, update(index, question) {
                this.task.work.questionList[index] = question;
            }, log(msg, level = "info") {
                this.task.log.length > 20 && this.task.log.shift(), this.task.log.push({ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg, type: level });
            }, msg(msg) {
                this.task.status = msg;
            }
        }
    }), _sfc_main = vue.defineComponent({
        setup() {
            const askstore = useAskStore(), { dialogVisible, count, questionList, task } = pinia$1.storeToRefs(askstore), askActiveName = vue.ref("first"), askActiveNames = vue.ref(["1"]), msg = vue.ref("<h3>本脚本仅用于学习交流，请24h内删除</h3><br><p style='color:red;'>尽管通过倪爸爸的改良，但仍需注意BUG可能造成的不良后果</p><br><p>本脚本题库接口均来源于网络以及用户反馈添加，不对题库准确率以及可用性负责，小黑子们请请自行判断、评估是否使用。</p>"), formstoreObj = useformStore(), { forminput, dialogV, activeName } = pinia$1.storeToRefs(formstoreObj), ruleFormRef = vue.ref(), rules = vue.reactive({
                interval: [{ required: true, message: "间隔时间不能为空" }, { type: "number", message: "间隔时间必须为数字" }, { validator: (rule, value) => value >= 1 ? Promise.resolve() : Promise.reject("间隔时间必须大于等于1") }], 
                answerInterval: [{ required: true, message: "答题间隔不能为空" }, { type: "number", message: "答题间隔必须为数字" }, { validator: (rule, value) => value >= 1 ? Promise.resolve() : Promise.reject("答题间隔必须大于等于1") }],
                videoRate: [{ required: true, message: "视频速率不能为空" }, { type: "number", message: "视频速率必须为数字" }, { validator: (rule, value) => value > 0 ? Promise.resolve() : Promise.reject("视频速率必须大于0") }],  
                token: [{
                    validator: (rule, value) => {
                        if (value) {
                            return /^[a-zA-Z0-9]{6,}$/.test(value) ? Promise.resolve() : Promise.reject("token格式错误");
                        }
                        return Promise.resolve();
                    }
                }]
            });
            return {
                count, dialogVisible, questionList, askActiveName, askActiveNames, task, msg, Aim: aim_default, handleClick: (e) => {
                    askstore.select(e);
                }, dialogV, activeName, ruleFormRef, forminput, rules, submitForm: async (formEl) => {
                    formEl && await formEl.validate((valid, fields) => {
                        valid && (
                            formstoreObj.saveConfig(forminput.value), 
                            formStore.forminput.autoRefresh?location.reload():ElementPlus.ElNotification({ title: "配置保存成功", message: "刷新页面以应用更改", type: "success" }), 
                            dialogV.value = false
                        );
                    });
                }, userConfig, Setting: setting_default
            };
        }
    }), _hoisted_1 = { class: "dialog-footer" }, _hoisted_2 = { key: 0 }, _hoisted_3 = { class: "question_div" }, _hoisted_4 = { class: "question_ti" }, _hoisted_5 = { key: 0 }, _hoisted_6 = { key: 1 }, _hoisted_7 = { key: 2 }, _hoisted_8 = ["innerHTML"], _hoisted_9 = { key: 0, style: { "margin-top": "20px" } }, _hoisted_10 = { key: 1 }, _hoisted_11 = { key: 2 }, _hoisted_12 = { height: "100px" }, _hoisted_13 = ["innerHTML"];
    
    const Ask = _export_sfc(_sfc_main, [["render", function (_ctx, _cache, $props, $setup, $data, $options) {
        function more_function() {
            _ctx.dialogV = !_ctx.dialogV
            nbc_function()
        }
        const _component_el_button = vue.resolveComponent("el-button"), _component_el_switch = vue.resolveComponent("el-switch"), _component_el_input = vue.resolveComponent("el-input"), _component_el_input_number = vue.resolveComponent("el-input-number"), _component_el_option = vue.resolveComponent("el-option"), _component_el_select = vue.resolveComponent("el-select"), _component_el_checkbox = vue.resolveComponent("el-checkbox"), _component_el_checkbox_group = vue.resolveComponent("el-checkbox-group"), _component_el_tooltip = vue.resolveComponent("el-tooltip"), _component_el_form_item = vue.resolveComponent("el-form-item"), _component_el_tab_pane = vue.resolveComponent("el-tab-pane"), _component_el_tabs = vue.resolveComponent("el-tabs"), _component_el_form = vue.resolveComponent("el-form"), _component_el_dialog = vue.resolveComponent("el-dialog"), _component_el_text = vue.resolveComponent("el-text"), _component_el_skeleton = vue.resolveComponent("el-skeleton"), _component_el_card = vue.resolveComponent("el-card"), _component_el_divider = vue.resolveComponent("el-divider"), _component_el_col = vue.resolveComponent("el-col"), _component_el_row = vue.resolveComponent("el-row"), _component_el_scrollbar = vue.resolveComponent("el-scrollbar"), _component_el_tag = vue.resolveComponent("el-tag"), _component_el_alert = vue.resolveComponent("el-alert"), _component_el_empty = vue.resolveComponent("el-empty");
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createVNode(_component_el_button, { type: "danger", id: "csbutton", icon: _ctx.Setting, circle: "", onClick: more_function }, null, 8, ["icon"]), vue.createVNode(_component_el_dialog, { modelValue: _ctx.dialogV, "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.dialogV = $event), title: "🐔超星修仙通挂科助手", width: "30%", modal: false, center: "", draggable: "" }, { footer: vue.withCtx(() => [vue.createElementVNode("span", _hoisted_1, [vue.createVNode(_component_el_button, { onClick: _cache[2] || (_cache[2] = ($event) => _ctx.dialogV = false) }, { default: vue.withCtx(() => [vue.createTextVNode("取消")]), _: 1 }), vue.createVNode(_component_el_button, { type: "primary", onClick: _cache[3] || (_cache[3] = ($event) => _ctx.submitForm(_ctx.ruleFormRef)) }, { default: vue.withCtx(() => [vue.createTextVNode("保存")]), _: 1 })])]), default: vue.withCtx(() => [vue.createVNode(_component_el_form, { ref: "ruleFormRef", rules: _ctx.rules, model: _ctx.forminput, class: "demo-ruleForm" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_tabs, { class: "demo-tabs", modelValue: _ctx.activeName, "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.activeName = $event) }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.userConfig, (item) => (vue.openBlock(), vue.createBlock(_component_el_tab_pane, { key: item.name, label: item.label, name: item.name }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.config, (item1) => (vue.openBlock(), vue.createBlock(_component_el_form_item, { label: item1.label, prop: item1.name }, { default: vue.withCtx(() => [vue.createVNode(_component_el_tooltip, { class: "box-item", effect: "dark", content: item1.desc || "", placement: "top" }, { default: vue.withCtx(() => ["switch" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_switch, { key: 0, symbol:item1.symbol, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "input" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_input, { key: 1, symbol:item1.symbol,modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "number" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_input_number, { key: 2, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "select" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_select, { key: 3, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event, placeholder: "请选择" }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item1.options, (item2) => (vue.openBlock(), vue.createBlock(_component_el_option, { key: item2.value, label: item2.label, value: item2.value }, null, 8, ["label", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"])) : "checkbox" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_checkbox_group, { key: 4, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item1.options, (item2) => (vue.openBlock(), vue.createBlock(_component_el_checkbox, { key: item2.value, label: item2.value, name: item2.value }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(item2.label), 1)]), _: 2 }, 1032, ["label", "name"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"])) : vue.createCommentVNode("", true)]), _: 2 }, 1032, ["content"])]), _: 2 }, 1032, ["label", "prop"]))), 256))]), _: 2 }, 1032, ["label", "name"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["rules", "model"])]), _: 1 }, 8, ["modelValue"]), (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [vue.createVNode(_component_el_button, { id: "zeokdjg", type: "success", plain: "", round: "", icon: _ctx.Aim, onClick: _cache[5] || (_cache[5] = ($event) => _ctx.dialogVisible = !_ctx.dialogVisible) }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString("暂未加载" == _ctx.task.name ? "等待任务加载" : "正在完成:" + _ctx.task.name), 1)]), _: 1 }, 8, ["icon"]), vue.createVNode(_component_el_dialog, { modelValue: _ctx.dialogVisible, "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.dialogVisible = $event), width: "400px", title: "🐔超星修仙通挂科助手", modal: false, "append-to-body": false, "lock-scroll": false, center: "", draggable: "" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_button, { style: { "margin-bottom": "20px" }, type: "primary", onClick: more_function, plain: "" }, { default: vue.withCtx(() => [vue.createTextVNode("打开配置")]), _: 1 }), vue.createVNode(_component_el_text, { class: "mx-1", size: "large", type: "danger" }, { default: vue.withCtx(() => [vue.createTextVNode("")]), _: 1 }), vue.createVNode(_component_el_tabs, { modelValue: _ctx.askActiveName, "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.askActiveName = $event), class: "demo-tabs" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_tab_pane, { label: "运行框", name: "first" }, { default: vue.withCtx(() => [_ctx.task.work.questionList.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [vue.createElementVNode("div", _hoisted_3, [vue.createVNode(_component_el_card, { shadow: "hover" }, { default: vue.withCtx(() => [vue.createElementVNode("h1", _hoisted_4, [vue.createVNode(_component_el_text, { size: "large", truncated: "" }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.task.work.inx + 1 + "." + _ctx.task.work.questionList[_ctx.task.work.inx].question), 1)]), _: 1 })]), _ctx.task.work.questionList[_ctx.task.work.inx].answer ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_6, [vue.createElementVNode("p", null, [vue.createElementVNode("pre", null, vue.toDisplayString(_ctx.task.work.questionList[_ctx.task.work.inx].answer), 1)])])) : (vue.openBlock(), vue.createElementBlock("p", _hoisted_5, [vue.createVNode(_component_el_skeleton, { rows: 3, animated: "" })]))]), _: 1 })]), "考试" != _ctx.task.name ? (vue.openBlock(), vue.createBlock(_component_el_divider, { key: 0 }, { default: vue.withCtx(() => [vue.createTextVNode(" 题号 ")]), _: 1 })) : vue.createCommentVNode("", true), "考试" != _ctx.task.name ? (vue.openBlock(), vue.createBlock(_component_el_scrollbar, { key: 1, height: "100px" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_row, null, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.task.work.questionList, (item, index) => (vue.openBlock(), vue.createBlock(_component_el_col, { span: 4, key: index }, { default: vue.withCtx(() => [vue.createVNode(_component_el_button, { type: item.status || "info", plain: "", class: "question_btn", onClick: ($event) => _ctx.handleClick(index) }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(index + 1), 1)]), _: 2 }, 1032, ["type", "onClick"])]), _: 2 }, 1024))), 128))]), _: 1 })]), _: 1 })) : vue.createCommentVNode("", true), _ctx.task.work.questionList[_ctx.task.work.inx].allAnswer ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [vue.createVNode(_component_el_divider, null, { default: vue.withCtx(() => [vue.createTextVNode(" 接口返回 ")]), _: 1 }), vue.createVNode(_component_el_tabs, { "tab-position": "left", style: { height: "200px" }, class: "demo-tabs" }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.task.work.questionList[_ctx.task.work.inx].allAnswer, (item, index) => (vue.openBlock(), vue.createBlock(_component_el_tab_pane, { label: item.form }, { default: vue.withCtx(() => [vue.createElementVNode("div", null, [vue.createElementVNode("div", { innerHTML: (item.answer || "暂无答案") + "<br><p style = 'color:red;'>如果要填写付费秘钥，在本悬浮窗最上方的打开配置中填入秘钥，切记填写完要刷新页面才会生效</p>" }, null, 8, _hoisted_8), null != item.num ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9, [vue.createElementVNode("div", null, [vue.createVNode(_component_el_tag, { class: "ml-2", type: "info" }, { default: vue.withCtx(() => [vue.createTextVNode("已用次数:" + vue.toDisplayString(item.usenum), 1)]), _: 2 }, 1024)]), vue.createElementVNode("div", null, [vue.createVNode(_component_el_tag, { class: "ml-2", type: "success" }, { default: vue.withCtx(() => [vue.createTextVNode("剩余次数:" + vue.toDisplayString(item.num), 1)]), _: 2 }, 1024)])])) : vue.createCommentVNode("", true)])]), _: 2 }, 1032, ["label"]))), 256))]), _: 1 })])) : vue.createCommentVNode("", true)])) : _ctx.task.video.status ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [vue.createVNode(_component_el_alert, { title: "倪爸爸提醒：倍速有风险，挂科两行泪", type: "error", center: "", "show-icon": "" }), vue.createVNode(_component_el_text, { class: "mx-1", size: "large", type: "danger" }, { default: vue.withCtx(() => [vue.createTextVNode(" 正在完成视频任务 ")]), _: 1 })])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_11, [vue.createElementVNode("div", _hoisted_12, [vue.createVNode(_component_el_empty, { description: _ctx.task.name }, null, 8, ["description"])])]))]), _: 1 }), vue.createVNode(_component_el_tab_pane, { label: "运行日志", name: "second" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_scrollbar, { height: "200px" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_row, null, { default: vue.withCtx(() => [vue.createVNode(_component_el_col, { span: 24 }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.task.log, (item, index) => (vue.openBlock(), vue.createElementBlock("p", { key: index, class: "cx_log" }, [vue.createVNode(_component_el_text, { size: "small", type: "info", class: "mx-1" }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(item.time), 1)]), _: 2 }, 1024), vue.createVNode(_component_el_text, { class: "mx-1", type: "info" == item.type ? "" : item.type }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(" " + item.msg), 1)]), _: 2 }, 1032, ["type"])]))), 128))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }), vue.createVNode(_component_el_tab_pane, { label: "公告", name: "msg" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_card, { shadow: "hover" }, { default: vue.withCtx(() => [vue.createElementVNode("div", { innerHTML: _ctx.msg }, null, 8, _hoisted_13)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue"]), vue.createElementVNode("p", null, [_ctx.task.status ? (vue.openBlock(), vue.createBlock(_component_el_tag, { key: 0 }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.task.status), 1)]), _: 1 })) : vue.createCommentVNode("", true)])]), _: 1 }, 8, ["modelValue"])]))], 64);
    }], ["__scopeId", "data-v-c3c6b09f"]]);
    class Cx {
        constructor() {
            __publicField(this, "app");
            __publicField(this, "askStore");
            __publicField(this, "ServerApi");
            __publicField(this, "defaultConfig");
            this.app = vue.createApp(Ask).use(ElementPlus).use(pinia$1.createPinia()), this.askStore = useAskStore(), this.ServerApi = new ServerApi(), this.defaultConfig = getConfig(), this.app.mount((() => {
                const div = _unsafeWindow.top.document.createElement("div");
                return div.id = "xxxxzx", _unsafeWindow.top.document.getElementById(div.id) || _unsafeWindow.top.document.body.append(div), div;
            })());
        }
        innerbook() {
        }
        async audio(iframeWindow) {
            this.askStore.reset(), this.askStore.task.name = "视频音频";
            const audio = iframeWindow.document.getElementById("audio_html5_api");
            return audio.muted = true, audio.autoplay = true, audio.volume = 0, audio.play().then(function () {
                console.log("播放成功");
            }).catch(function (error) {
                "NotAllowedError" === error.name ? ElementPlus.ElMessageBox.alert("由于自动播放需要用户点击过浏览器，请确认即可", "温馨提示", {
                    confirmButtonText: "确认", callback: () => {
                        audio.play();
                    }
                }) : console.error("视频播放失败，原因：", error);
            }), new Promise((resolve) => {
                const intervalId = setInterval(() => {
                    audio.ended ? (clearInterval(intervalId), log("监听到音频已完成", "success"), resolve()) : audio.paused && audio.play();
                }, 1e3);
                audio.addEventListener("ended", function () {
                    log("监听到音频已完成1", "success"), audio.pause(), clearInterval(intervalId), resolve();
                });
            });
        }
        async video(iframeWindow) {
            this.askStore.reset(), this.askStore.task.name = "视频", this.askStore.task.video.status = 1, await waitElementLoaded(iframeWindow, "#video_html5_api"), console.log("视频加载完成");
            const player = iframeWindow.videojs("video_html5_api"), playerButton = iframeWindow.document.querySelector(".vjs-big-play-button");
            player.muted(true), player.playbackRate(this.defaultConfig.videoRate), player.play(), await new Promise((resolve) => {
                const intervalId = setInterval(() => {
                    "isUnFinishJob" in iframeWindow && iframeWindow.isUnFinishJob() ? player.paused() && (playerButton == null ? void 0 : playerButton.click()) : (clearInterval(intervalId), resolve());
                }, 1e3), pauseBase = player.pause;
                player.pause = function () {
                    player.currentTime() >= player.duration() && (console.log("视频播放完成"), player.pause = pauseBase, resolve());
                }, player.on("ended", () => {
                    console.log("视频播放完成1"), player.pause = pauseBase, player.pause(), clearInterval(intervalId), resolve();
                });
            }), console.log("任务点完成");
        }
        work(iframeWindow) {
            return new Promise(async (resolve) => {
                decode(iframeWindow);
                const Timu = iframeWindow.document.querySelectorAll(".TiMu");
                if (!Timu)
                    return void resolve();
                let ques = [], succ = 0;
                for (let i = 0; i < Timu.length; i++) {
                    let data = getQuestion("1", Timu[i]);
                    console.log(data), ques.push(data);
                }
                this.askStore.reset(), this.askStore.count = ques.length, this.askStore.task.name = "章节测验";
                for (let i = 0; i < ques.length; i++) {
                    await sleep(this.defaultConfig.answerInterval), this.askStore.insert(ques[i]), this.askStore.task.work.inx = i;
                    let data = await getAnswers(ques[i], iframeWindow);
                    this.askStore.get(i).allAnswer = data;
                    let tmp = fillAnswer(data, ques[i], Timu[i], iframeWindow);
                    tmp ? (this.askStore.get(i).status = "primary", this.askStore.get(i).answer = tmp, succ++) : (this.askStore.get(i).status = "danger", this.askStore.get(i).answer = "暂无答案"), this.askStore.get(i).dom = Timu[i];
                }
                this.defaultConfig.autoSubmit ? (succ / ques.length < this.defaultConfig.minAccuracy ? (this.askStore.log("章节测验正确率不足，暂存", "error"), iframeWindow.alert = function (e) {
                    console.log("alert 方法被阻止", e);
                }, iframeWindow.noSubmit()) : (iframeWindow.btnBlueSubmit(), await sleep(3), iframeWindow.submitCheckTimes(), this.askStore.log("章节测验已完成", "success")), this.askStore.task.status = `章节测验已完成，等待切换,正确率:${succ}/${ques.length}`, resolve()) : (this.askStore.log("已完成答题，未开启自动提交，等待手动提交中", "success"), this.askStore.task.status = `正在等待手动提交,正确率:${succ}/${ques.length}`);
            });
        }
        homework() {
            return new Promise(async (resolve) => {
                const Timu = _unsafeWindow.document.querySelectorAll(".questionLi");
                if (!Timu)
                    return void resolve();
                let ques = [];
                for (let i = 0; i < Timu.length; i++) {
                    let data = getQuestion("2", Timu[i]);
                    ques.push(data);
                }
                this.askStore.reset(), this.askStore.count = ques.length, this.askStore.task.name = "作业";
                for (let i = 0; i < ques.length; i++) {
                    await sleep(this.defaultConfig.answerInterval), this.askStore.insert(ques[i]), this.askStore.task.work.inx = i;
                    let data = await getAnswers(ques[i]);
                    this.askStore.get(i).allAnswer = data;
                    let tmp = fillAnswer(data, ques[i], Timu[i], _unsafeWindow);
                    tmp ? (this.askStore.get(i).status = "primary", this.askStore.get(i).answer = tmp) : (this.askStore.get(i).status = "danger", this.askStore.get(i).answer = "暂无答案"), this.askStore.get(i).dom = Timu[i];
                }
            });
        }
        exam() {
            return new Promise(async (resolve) => {
                this.askStore.reset(), this.askStore.count = 1, this.askStore.task.name = "考试";
                let data = getQuestion("3", _unsafeWindow.document.body);
                this.askStore.insert(data), this.askStore.task.work.inx = 0;
                let data1 = await getAnswers(data);
                this.askStore.get(0).allAnswer = data1;
                let tmp = fillAnswer(data1, data, document.getElementsByClassName("mark_table")[0], _unsafeWindow);
                if (tmp ? (this.askStore.get(0).status = "primary", this.askStore.get(0).answer = tmp) : (this.askStore.get(0).status = "danger", this.askStore.get(0).answer = "暂无答案"), this.defaultConfig.autoExam) {
                    await sleep(this.defaultConfig.answerInterval);
                    const nextButton = $('.nextDiv .jb_btn:contains("下一题")');
                    nextButton ? nextButton.click() : (this.askStore.log("已完成答题，请自行检查答案填写后自行提交", "success"), this.askStore.task.status = "已完成答题，请自行检查答案填写后自行提交");
                } else
                    this.askStore.task.status = "未开启自动切换，等待手动切换";
            });
        }
        pdf(iframeWindow) {
            return new Promise(async (resolve) => {
                const contentWindow = iframeWindow.document.querySelector("#panView").contentWindow;
                contentWindow.scrollTo(0, contentWindow.document.body.scrollHeight), resolve();
            });
        }
        async s(iframeWindow) {
            const questionList = $(iframeWindow.document).find(".TiMu").map(function (index, element) {
                try {
                    let questionHtml, questionText, questionType$1, questionAnswer, questionOption = [], questionAnalysis = "";
                    switch (questionHtml = $(element).find(".Zy_TItle .clearfix"), questionText = removeHtml(questionHtml[0].innerHTML), questionType$1 = questionText.match(/^\【(.+?)\】/)[1], questionText = questionText.replace(questionText.match(/^\【(.+?)\】/)[0], ""), questionType$1) {
                        case "单选题":
                        case "多选题":
                            return questionOption = $(element).find("ul>li").map(function (inx, item) {
                                return removeHtml($(item).find("a").html());
                            }).get(), null;
                        case "判断题":
                            if (questionAnalysis = removeHtml($(element).find(".Py_addpy:eq(0)").html() || ""), element.innerHTML.includes("正确答案"))
                                questionAnswer = removeHtml($(element).find(".Py_answer.clearfix>span").html());
                            else {
                                const match = $(element).find(".Py_answer.clearfix").html().match(/^(.*?)(?=<i class="fr (dui|cuo)"><\/i>)/s), result = match ? match[1] : "";
                                questionAnswer = removeHtml(result);
                            }
                            if (questionAnswer.includes("正确答案"))
                                questionAnswer = questionAnswer.replace("正确答案：", "").trim();
                            else if ($(element).find(".fr.dui").length > 0)
                                questionAnswer = questionAnswer.replace("我的答案：", "").trim();
                            else {
                                if (!questionAnswer.replace("我的答案：", "").trim().includes("√") && !questionAnswer.replace("我的答案：", "").trim().includes("×"))
                                    return null;
                                questionAnswer = "√" == questionAnswer.replace("我的答案：", "").trim() ? "×" : "√";
                            }
                            break;
                        case "填空题":
                            if (questionAnswer = $("span.font14", $(element)).map(function (inx, item) {
                                return removeHtml($(item).html()).replace(/^第.空：/, "").trim();
                            }).get(), 0 == questionAnswer.length) {
                                if (questionAnswer = $(element).find(".Py_answer.clearfix>div>div[class='font14']"), !(questionAnswer.length = $(element).find(".Py_answer.clearfix>div>div[class='font14']>>.fr.dui").length))
                                    return null;
                                questionAnswer = questionAnswer.map(function (inx, item) {
                                    return removeHtml($(item).html()).replace(/^第.空：/, "").trim();
                                }).get();
                            }
                            break;
                        default:
                            return null;
                    }
                    return { question: questionText, options: questionOption, type: questionType[questionType$1], answer: questionAnswer };
                } catch {
                    return null;
                }
            }).get();
            await this.ServerApi.s(questionList, iframeWindow.location.href);
        }
    }
    const pinia = pinia$1.createPinia(), app = vue.createApp(App).use(ElementPlus).use(pinia), _self = _unsafeWindow, top = _self.top, formStore = useformStore();
    var iframeCom = null;
    var nbc_cxModel=undefined
    switch (app.mount((() => {
        try {
            const div = top.document.createElement("div");
            return div.id = "cccxapp", top.document.getElementById(div.id) ? div : (top.document.body.append(div), div);
        } catch (e) {
            log(e, "error");
        }
    })()), (() => {
        document.body.oncopy = null, document.body.oncut = null, document.body.onpaste = null, document.body.onselectstart = null, document.body.ondragstart = null;
        const style = document.createElement("style");
        style.innerHTML = "\n       * {\n           -webkit-user-select: auto !important;\n           -moz-user-select: auto !important;\n           -o-user-select: auto !important;\n           user-select: auto !important;\n       }\n   ", document.head.appendChild(style);
    })(), _self.location.pathname) {
        case "/work/doHomeWorkNew":
        case "/mooc-ans/work/doHomeWorkNew":
        case "/mooc2-ans/work/doHomeWorkNew":
            location.href.includes("mooc2=1") && (location.href = location.href.replace(/&mooc2=1/g, ""));
            break;
        case "/mycourse/studentstudy":
        case "/mooc-ans/mycourse/studentstudy":
        case "/mooc2-ans/mycourse/studentstudy":
            if (!_self.location.href.match(/mooc2=1/)) {
                ElementPlus.ElNotification({ title: "章节版本过低", message: "暂不支持旧版章节，尝试切换至新版", type: "error" }), _self.location.href = _self.location.href + "&mooc2=1";
                break;
            }
            const cxModel = new Cx();
            cxModel.askStore.log("脚本初始化成功！", "success");
            const startWork = async () => {
                var _a, _b, _c, _d, _e;
                await waitElementLoaded(_self, "#iframe");
                const cardsIframe = _self.document.querySelector("#iframe");
                await waitIframeLoaded(cardsIframe);
                const _self1 = cardsIframe.contentWindow;
                top.scroll2Job();
                let jobList = _self1.document.querySelectorAll(".ans-job-icon") || [];
                for (let i = 0; i < jobList.length; i++) {
                    const item = jobList[i];
                    if ((_a = item.parentElement) == null ? void 0 : _a.classList.contains("ans-job-finished")) {
                        const iframe = (_b = item.parentElement) == null ? void 0 : _b.querySelector("iframe");
                        if (iframe == null ? void 0 : iframe.src.match(/\/ananas\/modules\/work\/index.html/)) {
                            await waitIframeLoaded(iframe), JSON.parse(iframe.getAttribute("data"));
                            const workIframe = (_c = iframe.contentWindow) == null ? void 0 : _c.document.querySelector("iframe");
                            workIframe && (await waitIframeLoaded(workIframe), cxModel.s(workIframe.contentWindow));
                        }
                        console.log("已完成"), cxModel.askStore.log("已完成的任务点,跳过");
                    } else {
                        const iframe = (_d = item.parentElement) == null ? void 0 : _d.querySelector("iframe");
                        await waitIframeLoaded(iframe);
                        const otherInfo = JSON.parse(iframe.getAttribute("data"));
                        if (cxModel.askStore.log(`正在完成任务:${otherInfo.name || otherInfo.title}`), iframe == null ? void 0 : iframe.src.match(/\/ananas\/modules\/video\/index\.html/)) {
                            if (!formStore.forminput.autoVideo) {
                                cxModel.askStore.log("视频任务已跳过", "success");
                                continue;
                            }
                            await cxModel.video(iframe.contentWindow), cxModel.askStore.log("视频任务已完成", "success");
                        } else if (iframe == null ? void 0 : iframe.src.match(/\/ananas\/modules\/work\/index.html/)) {
                            cxModel.askStore.log("即将开始做作业", "info");
                            const workIframe = (_e = iframe.contentWindow) == null ? void 0 : _e.document.querySelector("iframe");
                            workIframe && (await waitIframeLoaded(workIframe), await cxModel.work(workIframe.contentWindow), cxModel.askStore.log("作业任务已完成", "success"));
                        } else if (iframe == null ? void 0 : iframe.src.match(/\/ananas\/modules\/audio\/index.html/)) {
                            if (log("音频", "error"), !formStore.forminput.autoVideo) {
                                cxModel.askStore.log("音频任务已跳过", "success");
                                continue;
                            }
                            iframe && (await waitIframeLoaded(iframe), await cxModel.audio(iframe.contentWindow), cxModel.askStore.log("音频任务已完成", "success"));
                        } else
                            (iframe == null ? void 0 : iframe.src.match(/\/ananas\/modules\/pdf\/index.html/)) ? (log("文档", "error"), iframe && (await waitIframeLoaded(iframe), await cxModel.pdf(iframe.contentWindow), cxModel.askStore.log("pdf任务已完成", "success"))) : (console.log(iframe == null ? void 0 : iframe.src, "未知"), cxModel.askStore.log("未知任务跳过", "success"));
                    }
                }
                await sleep(formStore.forminput.interval), !formStore.forminput.autoJump && cxModel.askStore.msg("由于未开启自动切换,请手动切换"), formStore.forminput.autoJump && (top == null ? void 0 : top.document.querySelector(".nextChapter").click());
            };
            setInterval(async () => {
                await waitElementLoaded(_self, "#iframe");
                const cardsIframe = _self.document.querySelector("#iframe");
                await waitIframeLoaded(cardsIframe);
                const _self1 = cardsIframe.contentWindow;
                iframeCom != _self1.location.href && (iframeCom = _self1.location.href, cxModel.askStore.reset(), startWork());
            }, 2e3);
            break;
        case "/mooc2-ans/mycourse/stu":
        case "/mooc-ans/mycourse/stu":
        case "/mycourse/stu":
            ElementPlus.ElNotification({ title: "倪爸爸提醒您", message: "请自行选择章节页面来进行修仙"});
            break;
        case "/work/selectWorkQuestionYiPiYue":
        case "/knowledge/cards":
            break;
        case "/mooc2/work/dowork":
        case "/mooc-ans/mooc2/work/dowork":
        case "/mooc2-ans/mooc2/work/dowork":
            const cxModel1 = new Cx();
            cxModel1.askStore.log("脚本初始化成功！", "success"), await (cxModel1.homework());
            break;
        case "/exam-ans/exam/test/reVersionTestStartNew":
            const cxModel2 = new Cx();
            await (cxModel2.exam()), cxModel2.askStore.log("脚本初始化成功！", "success");
    }

    if (defaultConfig.icon == true) {
        try {
            icon1=$(".icon-head")
            icon2=$(".head-img")
            $("h5[title='课程']").text("舞蹈课程")
            $("h5[title='大赛']").text("NBA大赛")
            $("h5[title='笔记']").text("RAP笔记")
            $("#siteName").text("蔡虚鲲应援粉丝团")
            
            icon1.next().text("账号:ikun")
            icon2.next().text("小黑子")
            icon1[0].src="https://p1.hoopchina.com.cn/personPic/6de79b9b-ed1f-4141-85bb-838e7cd9a48e.jpg?x-oss-process=image/resize,w_800/format,jpg"
            icon2[0].src="https://p1.hoopchina.com.cn/personPic/6de79b9b-ed1f-4141-85bb-838e7cd9a48e.jpg?x-oss-process=image/resize,w_800/format,jpg"
        } catch (error) {
            
        }
    }
    
    var csbutton=$('#csbutton')
    var api_name="https://api.oick.cn/yulu/api.php"
    function get_text(dom){
        $.get(api_name,(data)=>{
            if(typeof data == "string"){
                dom.text(data)
            }else{
                console.log(data)
            }
            
        })
    }
    
    var image_ikun=$('<img src="https://i0.hdslb.com/bfs/article/66762246d5de03d98440e90f69e6524f293738dc.jpg@!web-article-pic.avif">')
    img_list=[
        "https://i0.hdslb.com/bfs/article/66762246d5de03d98440e90f69e6524f293738dc.jpg@!web-article-pic.avif",
        "https://i0.hdslb.com/bfs/article/f396047ffe2b98ec5ab803c4e8d9bc0a3aaa7f97.jpg@!web-article-pic.avif",
        "https://i0.hdslb.com/bfs/article/ea3c001672b10014db28283c9899c0200c37b9d0.jpg@!web-article-pic.avif",
        "https://i0.hdslb.com/bfs/article/55a7b251f9db649eff73a89b8438090215fcb45b.jpg@!web-article-pic.avif",
        "https://i0.hdslb.com/bfs/article/7a9197d80e4ed260da6671ae096d6ce3e3a9aa54.jpg@!web-article-pic.avif",
        "https://img2.baidu.com/it/u=746639008,633027205&fm=253&fmt=auto&app=138&f=JPEG?w=232&h=171",
        "https://img0.baidu.com/it/u=78729940,187108890&fm=253&fmt=auto&app=120&f=JPEG?w=648&h=405"
    ]
    function switch_img(){
        ElementPlus.ElNotification({ title: "律师函警告", message: "小黑子说话！",type:"warning"});
        for (let index = 0; index < img_list.length; index++) {
            const element =img_list[index];
            if (element == ikun.src) {
                if (index == img_list.length-1) {
                    index=-1
                }
                ikun.src=img_list[ index + 1 ]
                break
            }
        }
    }
    var new_checkUpdate
    function nbc_function(){
        Vue.nextTick(() => {

            var btn_autoVideo=$('div[symbol="autoVideo"]')
            var btn_autoJump=$('div[symbol="autoJump"]')
            var btn_icon=$('div[symbol="icon"]')
            var checkUpdate=$('div[symbol="checkUpdate"]')
            var div_checkUpdate = $(checkUpdate.parent().parent().parent())
            var label=btn_autoJump.parent().prev()
            var div_icon=$(btn_icon.parent().parent().parent())
            var switch_exam=$("#pane-exam")
            var ikun=null
            
            switch_exam.css("overflow","visible")
            if (switch_exam.find('img').length == 0) {
                var new_img=$('<img id="ikun" src="https://i0.hdslb.com/bfs/article/66762246d5de03d98440e90f69e6524f293738dc.jpg@!web-article-pic.avif" width="100%" title="小黑子别戳我" style="border-radius:12px">')
                new_img.click(switch_img)
                switch_exam.append(new_img)
                ikun=$("#ikun")
            }
            if ($('#jitang').length == 0) {
                var new_jitang=$(`<div id='jitang'>点我可切换小黑子哲学</div>`)
                new_jitang.click((e)=>{
                    get_text(new_jitang)
                })
                new_jitang.css({"position":"relative","text-align":"center","font-weight":"600","margin-bottom":"30px","font-size":"20px"})
                get_text(new_jitang)
                div_icon.prepend(new_jitang)
            }
            if ($('#checkUpdate').length == 0) {
                if(if_updata){
                    new_checkUpdate=$(`<div id='checkUpdate'>当前版本: ${script_version} &nbsp&nbsp <span style='color:red'>检测到有新版本可用</span></div>`)
                }else{
                    new_checkUpdate=$(`<div id='checkUpdate'>当前版本: ${script_version} &nbsp&nbsp <span style='color:green'>已是最新版本</span></div>`)
                    
                }
                
                new_checkUpdate.click(check_update)
                new_checkUpdate.css({"position":"relative","text-align":"center","bottom":"20px","font-size":"13px","margin":"0","cursor":"pointer","color":"gray"})
                div_checkUpdate.prepend(new_checkUpdate)
            }
            

            
            if (!btn_autoVideo.hasClass('is-checked')) {
                btn_autoJump.css("pointer-events","none")
                label.css("pointer-events","none")
                btn_autoJump.css("opacity","0.4")
                label.html("自动切换<span style='opacity:0.3'>(必须先开启自动视频)</span>")
                formStore.forminput.autoJump=false
            }
            btn_icon.click((e)=>{
                const is_checked=btn_icon.hasClass('is-checked')
                if(is_checked){
                    ElementPlus.ElNotification({ title: "律师函警告", message: "真爱粉都得屎",type:"warning"});
                }else{
                    ElementPlus.ElNotification({ title: "律师函撤回", message: "主打一个听劝",type:"info"});
                }
            })


            btn_autoVideo.click((e)=>{
                
                const is_checked=btn_autoVideo.hasClass('is-checked')
                btn_autoJump.css("transition",".2s")
                if(is_checked){
                    btn_autoJump.css("pointer-events","auto")
                    btn_autoJump.css("opacity","1")
                    label.css("pointer-events","none")
                    label.text("自动切换")
                    
                }else{
                    btn_autoJump.css("pointer-events","none")
                    label.css("pointer-events","none")
                    btn_autoJump.css("opacity","0.4")
                    label.html("自动切换<span style='opacity:0.3'>(必须先开启自动视频)</span>")
                    formStore.forminput.autoJump=false
                }
            })
        })
        
        
    }
    //视频内题目回答
    var btn_radios=null

    if (defaultConfig.autoVideoAnswer) {
        setInterval(() => {
            var btn_submit=$("#videoquiz-submit")
            var spannot=$("#spanNot")
            if (btn_submit[0] != undefined) {
                let btn_continue=$("#videoquiz-continue")
                btn_radios=$("input[name='ans-videoquiz-opt']")
                btn_radios[0].checked=true
                btn_submit[0].click()
                if (btn_continue[0] != undefined){
                    btn_continue[0].click()
                }
                if (spannot.css("display") == "block") {    
                    btn_radios[1].checked=true
                    btn_submit[0].click()
                    if (btn_continue[0] != undefined){
                        btn_continue[0].click()
                    }
                }
                
            }
        }, 3000);
    }
    var if_updata = false;
    function check_update() {
        // 检查更新
        if (new_checkUpdate) {
            new_checkUpdate.html("当前版本: "+script_version+" &nbsp&nbsp <span style='color:blue' >检测中...</span>")
        }
        $.get( "https://update.greasyfork.org/scripts/508068/%F0%9F%90%94%E3%80%90%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%E6%8C%82%E7%A7%91%E5%8A%A9%E6%89%8B%E3%80%91.meta.js", data =>{
            let text_list = data.split("\n")
            for (let index = 0; index < text_list.length; index++) {
                const element = text_list[index]
                if (element.slice(0,11) == "// @version") {
                    let version = element.slice(11,).trim()
                    if (version > script_version) {
                        console.log(version)
                        ElementPlus.ElNotification({ title: "检测到脚本有新版本可用", message: "将自动跳转到更新界面",type:"warning"});
                        if (new_checkUpdate) {
                            new_checkUpdate.html("当前版本: "+script_version+` &nbsp&nbsp <span style='color:red'>检测到有新版本可用</span>`)
                        }
                        if_updata = true
                        setTimeout(() => {
                            const res = window.open("https://greasyfork.org/zh-CN/scripts/508068-%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%E6%8C%82%E7%A7%91%E5%8A%A9%E6%89%8B")
                            if (res) {
                                const res2 = window.confirm("您是否已经完成脚本更新？");
                                if (res2) {
                                    location.reload()
                                }else{
                                    window.open("https://greasyfork.org/zh-CN/scripts/508068-%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%E6%8C%82%E7%A7%91%E5%8A%A9%E6%89%8B")
                                }
                            }else{
                                const res3 = window.confirm("检测到页面未跳转( 可能是被浏览器拦截 )，请检查相关权限设置");
                            }
                        },3000)
                    }else{
                        if_updata = false
                        if (new_checkUpdate) {
                            new_checkUpdate.html("当前版本: "+script_version+" &nbsp&nbsp <span style='color:green'>已是最新版本</span>")
                        }
                        if (formStore.forminput.checkUpdate) {
                            
                            ElementPlus.ElNotification({ title: "自检完成", message: "脚本已是最新版本",type:"success"});
                        }
                    }
                    break
                }
            }
        })
    }

    
    // csbutton.click((e)=>{
        
    //     var btn_autoVideo=$('div[symbol="autoVideo"]')
    //     var btn_autoJump=$('div[symbol="autoJump"]')
    //     var label=btn_autoJump.parent().prev()
    //     var switch_exam=$("#pane-exam")
    //     var ikun=null
    //     switch_exam.css("overflow","visible")
        
    //     if (switch_exam.find('img').length == 0) {
    //         var new_img=$('<img id="ikun" src="https://i0.hdslb.com/bfs/article/66762246d5de03d98440e90f69e6524f293738dc.jpg@!web-article-pic.avif" width="100%" title="小黑子别戳我" style="border-radius:12px">')
    //         new_img.click(switch_img)
    //         switch_exam.append(new_img)
    //         ikun=$("#ikun")
    //     }
    //     if (!btn_autoVideo.hasClass('is-checked')) {
    //         btn_autoJump.css("pointer-events","none")
    //         label.css("pointer-events","none")
    //         btn_autoJump.css("opacity","0.4")
    //         label.html("自动切换<span style='opacity:0.3'>(必须先开启自动视频)</span>")
    //         formStore.forminput.autoJump=false
    //     }
        
        
    //     // var btn_tab_exam=$("#tab_exam")
    //     // var btn_tab_chapter=$("#tab_chapter")
    //     // var btn_tab_base=$("#tab_base")
    //     // var nbc_body=$(".el-dialog__body")
    //     // btn_tab_base.click((e)=>{
    //     //     nbc_body.find('img').remove()
    //     // })
    //     // btn_tab_exam.click((e)=>{
    //     //     btn_tab_exam.after('<img src="https://www.runoob.com/images/pulpit.jpg">')
    //     // })
    //     // btn_tab_chapter.click((e)=>{
    //     //     nbc_body.find('img').remove()
    //     // })
        
    //     btn_autoVideo.click((e)=>{
    //         const is_checked=btn_autoVideo.hasClass('is-checked')
    //         btn_autoJump.css("transition",".2s")
    //         if(is_checked){
    //             btn_autoJump.css("pointer-events","auto")
    //             btn_autoJump.css("opacity","1")
    //             label.css("pointer-events","none")
    //             label.text("自动切换")
                
    //         }else{
    //             btn_autoJump.css("pointer-events","none")
    //             label.css("pointer-events","none")
    //             btn_autoJump.css("opacity","0.4")
    //             label.html("自动切换<span style='opacity:0.3'>(必须先开启自动视频)</span>")
    //             formStore.forminput.autoJump=false
    //         }
    //     })
    // })
    // var videoPlyer=$("iframe")[0].contentWindow.videojs("video_html5_api")
    // videoPlyer.playbackRate(defaultConfig.videoRate)
    // var video_dom=$("#video_html5_api")
    // var videoPlayer =null
    // var check_video=setInterval(() => {
    //     if (video_dom[0] == undefined) {
    //         video_dom=$("#video_html5_api")
    //     }else{
    //         video_dom[0].playbackRate=defaultConfig.videoRate
    //         videoPlayer = videojs("#video_html5_api")
    //         console.log(videoPlayer)
    //         videoPlayer.options_.playbackRates=[0.75,1,1.25,1.5,16]
    //         videoPlayer.on('play', function() {
    //             // 设置播放速度
    //             videoPlayer.playbackRate(16);
    //             console.log("开始播放")
    //         });
    //         clearInterval(check_video)
    //     }
    // }, 1000);
    if (window.frames.length !== parent.frames.length) {
        console.log('当前log所处页面被嵌套在iframe中');
    } else {
        console.log('当前log所处页面没有被嵌套在iframe中');
        check_update()
    }

})(Vue, Pinia, ElementPlus, md5, $);




    
    
