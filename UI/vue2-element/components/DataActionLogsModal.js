import { Button, Dialog, Table, TableColumn, Pagination, Select, Option } from 'element-ui';

/**
 * 查询操作日志组件
 * @param params
 * @param params.application_id 应用id
 * @param params.function_type 模块类型
 * @param params.token 令牌
 * @param getDataActionLog 获取操作日志的request方法
 * @param getLogSearchParams 获取日志查询的类型
 * @param langTexts 国际化文字
 * @param errorCheck 错误校验
 */
export default function (params, getDataActionLog, getLogSearchParams, langTexts, errorCheck) {
  return {
    props: {
      data_id: {
        type: [String, Number],
      },
      title: {
        type: String,
      },
    },
    data() {
      return {
        visible: false,
        loading: false,
        log_type: '',
        // 表格数据
        data: [],
        searchItems: [],
        pagination: {
          total: 0,
          pageSize: 30,
          currentPage: 1,
        },
      };
    },
    watch: {
      visible(val) {
        if (val) {
          this.querySearchItem();
          this.queryData();
        }
      },
    },
    methods: {
      showChange() {
        this.visible = !this.visible;
      },
      querySearchItem() {
        getLogSearchParams({
          token: params.token,
          application_id: params.application_id,
          function_type: params.function_type,
        })
          .then(res => {
            this.searchItems = res.types || [];
          })
          .catch(err => {
            errorCheck(err);
          });
      },
      queryData() {
        this.loading = true;
        getDataActionLog({
          token: params.token,
          application_id: params.application_id,
          function_type: params.function_type,
          page: this.pagination.currentPage - 1,
          page_size: this.pagination.pageSize,
          data_id: this.data_id,
          log_type: this.log_type,
        })
          .then(res => {
            this.pagination.total = res.total;
            this.data = res.events;
          })
          .catch(err => {
            errorCheck(err);
          })
          .finally(() => {
            this.loading = false;
          });
      },
    },
    render(h) {
      return h(
        'div',
        {
          style: {
            display: 'inline-block',
          },
        },
        [
          this.$slots.default
            ? h(
                'div',
                {
                  style: {
                    display: 'inline-block',
                  },
                },
                [
                  this.$slots.left,
                  h(
                    'div',
                    {
                      style: {
                        display: 'inline-block',
                      },
                      on: {
                        click: this.showChange,
                      },
                    },
                    this.$slots.default,
                  ),
                  this.$slots.right,
                ],
              )
            : h(
                Button,
                {
                  props: {
                    type: 'text',
                  },
                  on: {
                    click: this.showChange,
                  },
                },
                langTexts.actionLog,
              ),
          this.visible
            ? h(
                Dialog,
                {
                  props: {
                    visible: this.visible,
                    width: '1000px',
                    destroyOnClose: true,
                    center: false,
                    closeOnClickModal: false,
                  },
                  on: {
                    close: () => {
                      this.showChange();
                    },
                  },
                  scopedSlots: {
                    title: () => h('div', {}, this.title ? this.title : langTexts.actionLog),
                    footer: () => h(Button, {}, langTexts.close),
                  },
                },
                [
                  // 内容展示
                  this.searchItems.length > 0 &&
                    h(
                      'header',
                      {
                        style: {
                          marginBottom: '10px',
                        },
                      },
                      [
                        h(
                          Select,
                          {
                            props: {
                              size: 'small',
                              clearable: true,
                              value: this.log_type,
                              valueKey: 'id',
                              placeholder: langTexts.placeholder,
                            },
                            on: {
                              change: val => {
                                this.pagination.currentPage = 1;
                                this.log_type = val;
                                this.queryData();
                              },
                            },
                          },
                          [
                            this.searchItems.map(item => {
                              return h(Option, {
                                props: {
                                  label: item.name,
                                  value: item.type_id,
                                },
                              });
                            }),
                          ],
                        ),
                        h(
                          Button,
                          {
                            style: {
                              marginLeft: '10px',
                            },
                            props: {
                              size: 'small',
                              type: 'primary',
                            },
                            on: {
                              click: () => {
                                this.queryData();
                              },
                            },
                          },
                          langTexts.query,
                        ),
                      ],
                    ),
                  // 表格数据
                  h(
                    Table,
                    {
                      directives: [
                        {
                          name: 'loading',
                          value: this.loading,
                        },
                      ],
                      props: {
                        data: this.data,
                      },
                    },
                    [
                      h(TableColumn, {
                        props: {
                          prop: 'desc',
                          label: langTexts.actionContent,
                        },
                      }),
                      h(TableColumn, {
                        props: {
                          width: '200px',
                          prop: 'created_at_str',
                          label: langTexts.actionTime,
                        },
                      }),
                    ],
                  ),
                  [
                    h(
                      'div',
                      {
                        style: {
                          marginTop: '12px',
                          display: 'flex',
                          flexDirection: 'row-reverse',
                        },
                      },
                      [
                        h(Pagination, {
                          props: {
                            currentPage: this.pagination.currentPage,
                            pageSize: this.pagination.pageSize,
                            pageSizes: [20, 30, 50],
                            layout: 'total, sizes, prev, pager, next, jumper',
                            total: this.pagination.total,
                          },
                          on: {
                            'size-change': val => {
                              this.pagination.pageSize = val;
                              this.pagination.currentPage = 1;
                              this.queryData();
                            },
                            'current-change': val => {
                              this.pagination.currentPage = val;
                              this.queryData();
                            },
                          },
                        }),
                      ],
                    ),
                    h(
                      'div',
                      {
                        style: {
                          marginTop: '12px',
                          textAlign: 'right',
                        },
                      },
                      [
                        h(
                          Button,
                          {
                            props: {
                              size: 'mini',
                            },
                            on: {
                              click: this.showChange,
                            },
                          },
                          langTexts.close,
                        ),
                      ],
                    ),
                  ],
                ],
              )
            : '',
        ],
      );
    },
  };
}
