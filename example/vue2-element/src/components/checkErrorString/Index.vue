<template>
  <div>
    方法：
    IAM.ajaxErrorCheck(error: any,okCallback?: () => void): boolean
    <br>
    赋值：
    <br>
    <el-button @click="setStringHandler1">您已登出系统或已被强制下线的json串儿</el-button>
    <br>
    <el-button @click="setStringHandler2">token错误或者token失效的json串儿</el-button>
    <br>

    <br>
    调用：
    <el-button @click="ajaxErrorCheck">ajaxErrorCheck</el-button>
    <div>
      <JsonEditorVue :modelValue.sync="errorDemoStr"></JsonEditorVue>
    </div>
  </div>

</template>

<script>
import { IAM } from '../../utils/iam'

export default {
  data () {
    return {
      errorDemoStr: ''
    }
  },
  methods: {
    setStringHandler1 () {
      this.errorDemoStr = '{"error":{"code":401,"message":"Unauthenticated","status":16,"details":[{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"NOT_MATCHED_ACTIVE_DEVICE","domain":"easiapi.com","metadata":{"resource":"/v1/admin/userinfo?_t=1632968131817","service":"default"}},{"@type":"type.googleapis.com/google.rpc.DebugInfo","stackEntries":["err :rpc error: code = \u0010 message = Unauthenticated, details = [{\\"@type\\":\\"type.googleapis.com/google.rpc.ErrorInfo\\",\\"reason\\":\\"NOT_MATCHED_ACTIVE_DEVICE\\"}]\\ngithub.com/infinitasx/easi-go-boot/core/iam.(*TokenRestVerifier).Verify\\n\\t/go/pkg/mod/github.com/infinitasx/easi-go-boot@v1.2.2/core/iam/verifier.go:169\\ngithub.com/infinitasx/easi-go-boot/core/iam.(*AuthValidator).AuthRequired\\n\\t/go/pkg/mod/github.com/infinitasx/easi-go-boot@v1.2.2/core/iam/auth.go:68\\ngithub.com/gin-gonic/gin.(*Context).Next\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/context.go:165\\ngithub.com/infinitasx/easi-go-boot/core/metadata.MiddleWare\\n\\t/go/pkg/mod/github.com/infinitasx/easi-go-boot@v1.2.2/core/metadata/http_middware.go:76\\ngithub.com/gin-gonic/gin.(*Context).Next\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/context.go:165\\ngithub.com/gin-gonic/gin.CustomRecoveryWithWriter.func1\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/recovery.go:99\\ngithub.com/gin-gonic/gin.(*Context).Next\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/context.go:165\\ngithub.com/gin-contrib/logger.SetLogger.func1\\n\\t/go/pkg/mod/github.com/gin-contrib/logger@v0.0.3/logger.go:51\\ngithub.com/gin-gonic/gin.(*Context).Next\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/context.go:165\\ngithub.com/gin-gonic/gin.(*Engine).handleHTTPRequest\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/gin.go:489\\ngithub.com/gin-gonic/gin.(*Engine).ServeHTTP\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/gin.go:445\\nnet/http.serverHandler.ServeHTTP\\n\\t/usr/local/go/src/net/http/server.go:2867\\nnet/http.(*conn).serve\\n\\t/usr/local/go/src/net/http/server.go:1932\\nruntime.goexit\\n\\t/usr/local/go/src/runtime/asm_amd64.s:1371\\n"],"detail":""},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"zh-Hans","message":"NOT_MATCHED_ACTIVE_DEVICE"}]}}'
    },
    setStringHandler2 () {
      this.errorDemoStr = '{"error":{"code":401,"message":"Unauthenticated","status":16,"details":[{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"ACCESS_TOKEN_NOT_ACTIVE","domain":"easiapi.com","metadata":{"resource":"/v1/admin/dashboard?_t=1632968247228","service":"default"}},{"@type":"type.googleapis.com/google.rpc.DebugInfo","stackEntries":["err :rpc error: code = \u0010 message = Unauthenticated, details = [{\\"@type\\":\\"type.googleapis.com/google.rpc.ErrorInfo\\",\\"reason\\":\\"ACCESS_TOKEN_NOT_ACTIVE\\"}]\\ngithub.com/infinitasx/easi-go-boot/core/iam.(*TokenRestVerifier).Verify\\n\\t/go/pkg/mod/github.com/infinitasx/easi-go-boot@v1.2.2/core/iam/verifier.go:126\\ngithub.com/infinitasx/easi-go-boot/core/iam.(*AuthValidator).AuthRequired\\n\\t/go/pkg/mod/github.com/infinitasx/easi-go-boot@v1.2.2/core/iam/auth.go:68\\ngithub.com/gin-gonic/gin.(*Context).Next\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/context.go:165\\ngithub.com/infinitasx/easi-go-boot/core/metadata.MiddleWare\\n\\t/go/pkg/mod/github.com/infinitasx/easi-go-boot@v1.2.2/core/metadata/http_middware.go:76\\ngithub.com/gin-gonic/gin.(*Context).Next\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/context.go:165\\ngithub.com/gin-gonic/gin.CustomRecoveryWithWriter.func1\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/recovery.go:99\\ngithub.com/gin-gonic/gin.(*Context).Next\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/context.go:165\\ngithub.com/gin-contrib/logger.SetLogger.func1\\n\\t/go/pkg/mod/github.com/gin-contrib/logger@v0.0.3/logger.go:51\\ngithub.com/gin-gonic/gin.(*Context).Next\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/context.go:165\\ngithub.com/gin-gonic/gin.(*Engine).handleHTTPRequest\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/gin.go:489\\ngithub.com/gin-gonic/gin.(*Engine).ServeHTTP\\n\\t/go/pkg/mod/github.com/gin-gonic/gin@v1.7.2/gin.go:445\\nnet/http.serverHandler.ServeHTTP\\n\\t/usr/local/go/src/net/http/server.go:2867\\nnet/http.(*conn).serve\\n\\t/usr/local/go/src/net/http/server.go:1932\\nruntime.goexit\\n\\t/usr/local/go/src/runtime/asm_amd64.s:1371\\n"],"detail":""},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"zh-Hans","message":"ACCESS_TOKEN_NOT_ACTIVE"}]}}'
    },
    ajaxErrorCheck () {
      IAM.ajaxErrorCheck(this.errorDemoStr, () => {
        alert('您点击了ok方法，马上要退出登录了')
      })
    }
  }
}

</script>

<style scoped>

</style>
