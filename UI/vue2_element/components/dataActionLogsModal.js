import {Button, Dialog, Table, TableColumn, Pagination} from 'element-ui'

export default function (params, getDataActionLog) {
  return {
    props: {
      data_id: {
        type: [String, Number],
        required: true
      }
    },
    data() {
      return {
        visible: false,
        loading: false,
        // 表格数据
        data: [],
        pagination: {
          total: 0,
          pageSize: 30,
          currentPage: 1
        }
      }
    },
    watch: {
      visible(val) {
        if (val) {
          this.queryData()
        }
      }
    },
    methods: {
      showChange() {
        this.visible = !this.visible
      },
      queryData() {
        this.loading = true
        getDataActionLog({
          token: params.token,
          application_id: params.application_id,
          function_type: params.function_type,
          page: this.pagination.currentPage - 1,
          page_size: this.pagination.pageSize,
          data_id: this.data_id
        })
          .then(res => {
            this.pagination.total = res.total
            this.data = res.events
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
    render(h) {
      return h('div', {
          style: {
            display: 'inline-block'
          }
        },
        [
          this.$slots.default ? h('div', {
            style: {
              display: 'inline-block'
            },
            on: {
              click: this.showChange
            }
          }, [this.$slots.default]) : h(Button, {
            props: {
              type: 'text'
            },
            on: {
              click: this.showChange
            }
          }, '操作日志'),
          this.visible ? h(Dialog, {
              props: {
                visible: this.visible,
                width: '1000px',
                destroyOnClose: true,
                center: false,
                closeOnClickModal: false
              },
              on: {
                close: () => {
                  this.showChange()
                }
              },
              scopedSlots: {
                title: props => h('div', {}, '操作日志'),
                footer: props => h(Button, {}, '关闭')
              }
            }, [
              h(Table, {
                directives: [
                  {
                    name: 'loading',
                    value: this.loading
                  }
                ]
              }, [
                h(TableColumn, {
                  props: {
                    prop: 'content',
                    label: '操作内容'
                  }
                }),
                h(TableColumn, {
                  props: {
                    width: '200px',
                    prop: 'created_at_str',
                    label: '操作时间'
                  }
                })
              ]),
              h('div', {
                style: {
                  textAlign: 'right',
                  marginTop: '12px'
                }
              }, [
                h(Pagination, {
                  props: {
                    currentPage: this.pagination.currentPage,
                    pageSize: this.pagination.pageSize,
                    pageSizes: [20, 30, 50],
                    layout: 'total, sizes, prev, pager, next, jumper',
                    total: this.pagination.total
                  },
                  on: {
                    sizeChange(val) {
                      this.pagination.pageSize = val
                      this.pagination.currentPage = 1
                      this.queryData()
                    },
                    currentChange(val) {
                      this.pagination.currentPage = val
                      this.queryData()
                    }
                  }
                }),
                h('div', {
                  style: {
                    marginTop: '12px'
                  }
                }, [
                  h(Button, {
                    props: {
                      size: 'mini'
                    },
                    on: {
                      click: this.showChange
                    }
                  }, '关闭')
                ])
              ])
            ]
          ) : ''
        ])
    }
  }
}