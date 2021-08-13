import {h, defineComponent, ref} from 'vue';
import {Button, Modal, Table, Pagination, Select, SelectOption} from 'ant-design-vue';

/**
 * 查询操作日志组件
 * @param params
 * @param params.application_id 应用id
 * @param params.function_type 模块类型
 * @param params.token 令牌
 * @param getDataActionLog 获取操作日志的request方法
 * @param getLogSearchParams 获取日志查询的类型
 * @param langTexts 国际化文字
 */
export default function (params, getDataActionLog, getLogSearchParams, langTexts) {
  return defineComponent({
    name: 'easi-action-log',
    props: {
      data_id: {
        type: [Number, String],
        required: true,
      },
    },
    setup(props, {slots}) {
      const visible = ref(false);
      const loading = ref(false);
      const log_type = ref(null);
      // 筛选选择项
      const searchItems = ref([]);
      const dataSource = ref([]);
      const pagination = ref({
        current: 1,
        total: 0,
        pageSize: 30,
      });

      // 筛选项查询
      const querySearchItem = () => {
        getLogSearchParams({
          token: params.token,
          application_id: params.application_id,
          function_type: params.function_type,
        }).then(res => {
          searchItems.value = res.types || [];
        }).catch(() => {
        });
      }

      // 开关对话框
      const showChange = () => {
        visible.value = !visible.value;
        if (visible.value) {
          querySearchItem();
          queryHandler();
        } else {
          pagination.value.current = 1;
          dataSource.value = [];
          log_type.value = null;
        }
      };


      // 数据查询
      const queryHandler = () => {
        loading.value = true;
        getDataActionLog({
          token: params.token,
          application_id: params.application_id,
          function_type: params.function_type,
          page: pagination.value.current - 1,
          log_type: log_type.value,
          page_size: pagination.value.pageSize,
          data_id: props.data_id,
        })
          .then(res => {
            pagination.value.total = res.total;
            dataSource.value = res.events;
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => {
            loading.value = false;
          });
      };

      return () => [
        slots.default
          ? h(
          'div',
          {
            style: {
              display: 'inline-block',
            },
            onClick: showChange,
          },
          [h(slots.default)],
          )
          : h(
          Button,
          {
            type: 'link',
            onClick: showChange,
          },
          {default: () => langTexts.actionLog},
          ),
        visible.value
          ? h(
          Modal,
          {
            width: '1000px',
            maskClosable: false,
            visible: visible.value,
            destroyOnClose: true,
            onCancel() {
              showChange();
            },
          },
          {
            title: () => langTexts.actionLog,
            footer: () =>
              h(
                Button,
                {
                  onClick() {
                    showChange();
                  },
                },
                {default: () => langTexts.close},
              ),
            default: () => [
              // 筛选框
              searchItems.value.length > 0 && h('header', {
                style: {
                  marginBottom: '10px',
                }
              }, [
                h(Select, {
                    allowClear: true,
                    value: log_type.value,
                    placeholder: langTexts.placeholder,
                    style: {
                      width: '200px'
                    },
                    onChange(val) {
                      log_type.value = val;
                    }
                  }, {
                    default: () => searchItems.value.map(item => {
                      return h(SelectOption, {
                        value: item.type_id,
                      }, {
                        default: () => item.name,
                      })
                    })
                  }
                ),
                h(Button, {
                  type: 'primary',
                  style: {
                    marginLeft: '10px',
                  },
                  onClick() {
                    queryHandler();
                  }
                }, {
                  default: () => langTexts.query
                })
              ]),
              // 表格数据
              h(Table, {
                loading: loading.value,
                dataSource: dataSource.value,
                pagination: false,
                rowKey: 'id',
                columns: [
                  {
                    title: langTexts.actionContent,
                    dataIndex: 'desc',
                  },
                  {
                    title: langTexts.actionTime,
                    width: '200px',
                    dataIndex: 'created_at_str',
                  },
                ],
              }),
              // 分页模块
              h(
                'footer',
                {
                  style: {
                    marginTop: '12px',
                    textAlign: 'right',
                  },
                },
                [
                  h(Pagination, {
                    showQuickJumper: true,
                    showSizeChanger: true,
                    total: pagination.value.total,
                    current: pagination.value.current,
                    pageSize: pagination.value.pageSize,
                    pageSizeOptions: ['20', '30', '50'],
                    onChange(page, pageSize) {
                      pagination.value.current = page;
                      pagination.value.pageSize = pageSize;
                      queryHandler();
                    },
                    onShowSizeChange(current, size) {
                      pagination.value.current = 1;
                      pagination.value.pageSize = size;
                      queryHandler();
                    },
                  }),
                ],
              ),
            ],
          },
          )
          : '',
      ];
    },
  });
}
