<!--js xlsx demo-->
<template>
    <div class="hello">
        
    </div>
</template>

<script>
    import Push from 'push.js';

    export default {
        name: 'JsXlsx',

        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        },

        mounted() {
            console.log('push', Push);
            // Push.create('Hello World!');
            this.demo4();

            // 将返回一个布尔值表示许可。
            console.log('Push.Permission.has()', Push.Permission.has());

            // 手动请求通知判断许可状态。接2个回调函数，根据状态触发对应的回调
            Push.Permission.request(this.onGranted, this.onDenied);

            // 可以得到原始许可级别 granted
            console.log('Push.Permission.get()', Push.Permission.get());
        },

        methods: {
            onGranted() {
                console.log('onGranted');
            },

            onDenied() {
                console.log('onDenied');
            },

            demo4() {
                var promise = Push.create('Hello World!', {
                    tag: 'notification'
                });

                // Somewhere later in your code...
                promise.then(function(notification) {
                    console.log('dddddd');
                    notification.close();
                });
            },

            demo3() {
                Push.create('Hello world!', {
                    tag: 'foo',
                    body: 'How\'s it hangin?',
                    icon: './icon.png',
                    timeout: 10000, // 4s后关闭
                    url: 'https://pushjs.org/docs/options.html'
                });
            },

            demo2() {
                Push.create('Hello world!', {
                    tag: 'foo',
                    body: 'How\'s it hangin?',
                    icon: './icon.png',
                    requireInteraction: true, // 当设置为true时,通知将不会关闭,除非用户手动关闭或点击它
                    onClick: function() {
                        window.focus();
                        this.close();
                    }
                });

                setTimeout(function() {
                    Push.close('foo');
                }, 2000);
            },

            demo1() {
                Push.create('Hello world!', {
                    tag: 'foo',
                    body: 'How\'s is it hangin?',
                    icon: './icon.png',
                    timeout: 100000, // 4s后关闭
                    url: 'https://pushjs.org/docs/options.html',
                    onClick: function() {
                        window.focus();
                        this.close();
                    }
                });
            },

            sendNotification() {

            }
        }
    };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
